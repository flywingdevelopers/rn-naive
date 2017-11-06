/**
* Flat List
* Kevin Lee 25 Aug 2017
**/

import React, { Component } from 'react'
import { FlatList, Image, View, Text, StyleSheet, TouchableHighlight, PanResponder } from 'react-native'
import { Device, Button, D2 } from '../rn-naive'

export default class App extends React.Component {
    constructor(props) {
        super()
        this.width = Device.width * 0.9
        this.height = Device.width * 0.9 * 0.65
        this.margin = Device.width * 0.1 * 0.5
        this.state = {
            viewableItems:[],
            position: 0,
        }
        this.images = [
            'https://cdn.pixabay.com/photo/2015/08/14/16/30/man-888591_960_720.jpg',
            'https://cdn.pixabay.com/photo/2017/07/08/09/45/joy-2483926_960_720.jpg',
            'https://cdn.pixabay.com/photo/2013/09/18/06/14/seagull-183342_960_720.jpg',
            'https://cdn.pixabay.com/photo/2014/05/04/13/21/padlocks-337569_960_720.jpg',
            'https://cdn.pixabay.com/photo/2015/08/28/10/38/night-911712_960_720.jpg',
            'https://cdn.pixabay.com/photo/2017/08/12/17/11/nature-2634729_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/05/19/17/09/girl-1403418_960_720.jpg',
            'https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_960_720.jpg',
            'https://cdn.pixabay.com/photo/2015/03/30/03/04/women-697927_960_720.jpg',
        ]
    }
    componentDidUpdate(prevProps) {
        if (prevProps.position !== this.props.position) {
            this._scrollToIndex(this.props.position);
        }
    }
    componentWillMount() {
        const width = this.width;
        let release = (e, gestureState) => {
            const width = this.width;
            const relativeDistance = gestureState.dx / width;
            const vx = gestureState.vx;
            let change = 0;
            if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
                change = 1;
            } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
                change = -1;
            }
            const position = this._getPosition();
            if (position === 0 && change === -1) {
                change = 0;
            } else if (position + change >= this.images.length) {
                change = (this.images.length) - (position + change);
            }
            this._scrollToIndex(position + change);
            return true;
        };

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder:()=>true,
            onPanResponderRelease: release
        });

        this._interval = setInterval(() => {
            const newWidth = Device.width;
            if (newWidth !== this.state.width) {
                this.setState({width: newWidth});
            }
        }, 16);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    _onViewableItemsChanged = ({viewableItems})=> {
         this.setState({
             viewableItems: viewableItems.map(i=>i.key),
         })
     }
    _getItemLayout=(data,index) => (
         {length: this.width, offset: (this.width + (this.margin * 2)) * index, index }
     )
    _scrollToIndex = (idx)=> {
         this.listRef.scrollToIndex({animated:true, index:idx})
         this.setState({position:idx})
     }
     _getPosition() {
         if (typeof this.props.position === 'number') {
             return this.props.position;
         }
         return this.state.position;
     }
    render() {
        this.k = 0
        return (
            <View style={{flex:1}}>
                <View
                    style={{flex:5, borderWidth:4, borderColor:'red'}}
                    {...this._panResponder.panHandlers}
                >
                    <FlatList
                        ref={(ref)=>{this.listRef=ref}}
                        data={this.images.map((imageSource, key)=>{
                            const image = typeof imageSource === 'string'? {uri:imageSource} : imageSource
                            return { image, key }
                        })}
                        renderItem={({item})=>(
                            <Image
                                source={item.image}
                                style={{height:this.height, width:this.width, margin:this.margin}}
                                resizeMode='contain'
                            />
                        )}
                        keyExtractor={({item},index)=>index}
                       getItemLayout={this._getItemLayout}
                        horizontal={true}
                       onViewableItemsChanged={this._onViewableItemsChanged}
                        style={{height:Device.height * 0.6, backgroundColor:'#222'}}
                    />
                    <View style={styles.buttons}>
                        {this.images.map((image, index) => {
                            let viewables = this.state.viewableItems
                            return (<TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => {
                                    return this._scrollToIndex(index);
                                }}
                                style={[styles.button, viewables.indexOf(index) > -1 && styles.buttonSelected]}>
                                <View></View>
                            </TouchableHighlight>);
                        })}
                    </View>
                </View>
                <View style={{flex:2,borderWidth:4,margin:8, padding:4, flexDirection:'column'}}>
                    <Button
                        text='SCROLL!'
                        action={this._scrollToIndex.bind(this, 5)}
                    />
                    <D2>{new Date().toLocaleString()}</D2>
                    <D2>{JSON.stringify(this.state)}</D2>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222',
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#222',
    },
    button: {
        margin: 3,
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#ccc',
        opacity: 0.9
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: '#fff',
    }
});
