/**
* ImageSlider
* Kevin Lee 25 Aug 2017
* Reference: react-native-image-slider
*
* rewritten using <FlatList>
* add resizeMode
* add bulletPosition: 'top', 'bottom', 'none'
* add margin
* add height
* Data aware with position and onPositionChanged()
* getPosition() to read current position
* scrollToPosition(idx) to scroll to idx
**/

import React, { Component } from 'react'
import {
  FlatList,
  Image,
  View,
  TouchableHighlight,
  PanResponder,
} from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Device from './device'

export default class ImageSlider extends React.PureComponent {
  constructor(props) {
    super(props)
    let { margin, position } = props
    if (!margin) margin = BaseStyle.ImageSlider.margin
    if (!position) position = 0
    this.state = {
      margin,
      position,
      deviceWidth: Device.width,
      width: Device.width,
      height: (Device.width - (margin * 2))  * 0.65,
      viewableItems: [],
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.position !== this.props.position) {
      this.scrollToPosition(this.props.position)
    }
    if (prevProps.images.length != this.props.images.length) {
      if (this.props.images.length > prevProps.images.length) {
        this.scrollToPosition(this.props.position)
      } else {
        this.scrollToPosition(this.state.position)
      }
    }
    if (prevState.width != this.state.width) {
      this.scrollToPosition(this.state.position)
    }
  }
  componentWillMount() {
    let release = (e, gestureState) => {
    const width = this.state.width;
    const relativeDistance = gestureState.dx / width;
    const vx = gestureState.vx;
    let change = 0;
    if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
      change = 1;
    } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
      change = -1;
    }
    const position = this.getPosition();
    if (position === 0 && change === -1) {
      change = 0;
    } else if (position + change >= this.props.images.length) {
      change = (this.props.images.length) - (position + change);
    }
    if (change !== 0)
      this.scrollToPosition(position + change);
      return true;
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=>true,
      onMoveShouldSetPanResponder: ()=>true,
      onPanResponderRelease: release
    });
  }
  _onViewableItemsChanged = ({viewableItems})=> {
    this.setState({
      viewableItems: viewableItems.map(i=>i.key),
    })
  }
  _getItemLayout=(data,index) => ({
    length: this.state.width,
    offset: (this.state.width + (this.state.margin * 2)) * index + (this.state.margin/2),
    index
  })
  scrollToPosition = (idx)=> {
    const isUpdating = idx !== this.getPosition();
    if (this.props.images.length) {
      this.setState({position: idx})
      this.listRef.scrollToIndex({animated: true, index: idx})
      if (isUpdating && this.props.onPositionChanged) {
        this.props.onPositionChanged(idx)
      }
    }
  }
  getPosition() {
    return this.state.position;
  }
  _measureView(event) {
    let viewWidth = event.nativeEvent.layout.width
    let viewHeight = event.nativeEvent.layout.height
    let width = viewWidth - (this.state.margin * 1.5)
    let height = (viewWidth - (this.state.margin * 1.5)) * 0.65
    if (height > viewHeight) {
      height = viewHeight
    }
    this.setState({
      viewWidth,
      viewHeight,
      width,
      height,
    })
  }
  render() {
    let { width, height, margin, position } = this.state
    let { bulletPosition, resizeMode } = this.props
    if (!bulletPosition) bulletPosition = 'top'
    if (!resizeMode) resizeMode = 'cover'
    let bullet =
      <View style={[
        BaseStyle.ImageSlider.buttons,
        this.props.styles && this.props.styles.buttons,
        this.props.buttons,
      ]} key='bullet'>
        {this.props.images.map((image, index) => {
          let viewables = this.state.viewableItems
          return (
            <TouchableHighlight
              key={index}
              underlayColor="#ccc"
              onPress={() => {
                return this.scrollToPosition(index);
              }}
              style={[
                BaseStyle.ImageSlider.button,
                this.props.styles && this.props.styles.button,
                this.props.button,
                (viewables.indexOf(index) > -1) && BaseStyle.ImageSlider.buttonSelected,
              ]}>
                <View></View>
            </TouchableHighlight>
          )
        })}
      </View>
    let box =
      <FlatList
        ref={(ref)=>{this.listRef=ref}}
        data={this.props.images.map((imageSource, key)=>{
          const image = typeof imageSource === 'string'?
            {uri: imageSource} : imageSource
          return { image, key }
        })}
        extraData={this.state}
        renderItem={({item})=>(
          <Image
            source={item.image}
            style={{height, width, margin, marginTop:0}}
            resizeMode={resizeMode}
          />
        )}
        keyExtractor={({item},index)=>index}
        getItemLayout={this._getItemLayout}
        horizontal={true}
        onViewableItemsChanged={this._onViewableItemsChanged}
        style={[
          BaseStyle.ImageSlider.flatList,
          {height},
          (bulletPosition === 'top') && { marginTop: -30 },
          (bulletPosition === 'bottom') && {marginBottom: -30},
          this.props.styles && this.props.styles.flatList,
          this.props.flatListStyle,
        ]}
        showsHorizontalScrollIndicator={false}
        key='box'
      />
    let content = box
    switch (bulletPosition) {
      case 'top':
        content = [ bullet, box ]
        break
      case 'bottom':
        content = [ box, bullet ]
        break
    }
    return (
      <View
        style={[
          BaseStyle.ImageSlider.container,
          this.props.styles && this.props.styles.containerStyle,
          this.props.styles && this.props.styles.style,
          this.props.containerStyle,
          this.props.style,
        ]}
        onLayout={(event)=>{this._measureView(event)}}
        {...this._panResponder.panHandlers}
      >
        { content }
      </View>
    )
  }
}

ImageSlider.defaultProps = {
  images:[],
}

ImageSlider.propTypes = {
    images: PropTypes.array,
    bulletPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
    height: PropTypes.number,
}
