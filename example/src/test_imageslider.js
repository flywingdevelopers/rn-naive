/**
* Test ImageSlider Interactivity
* Kevin Lee 29 Aug 2017
**/

import React, { Component } from 'react'
import { Device, Screen, Block, Bar, ButtonList, ImageSlider } from '../rn-naive'

const allImages=[
    'https://cdn.pixabay.com/photo/2015/03/30/03/04/women-697927_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/08/14/16/30/man-888591_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/07/08/09/45/joy-2483926_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/09/18/06/14/seagull-183342_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/05/04/13/21/padlocks-337569_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/08/28/10/38/night-911712_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/12/17/11/nature-2634729_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/05/19/17/09/girl-1403418_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_960_720.jpg',
]

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
          images:[],
          position:0,
        }
    }
    addImage=()=>{
      const newImages = [
        allImages[Math.floor((Math.random() * allImages.length))],
        ...this.state.images,
      ]
      this.setState({
        images: newImages,
        position: 0,
      })
    }
    removeImage=()=>{
        let pos = this.ref.getPosition()
        if (pos > -1) {
          this.state.images.splice(pos, 1)
          if (pos >= this.state.images.length) {
            this.state.position = this.state.images.length-1
          }
          this.forceUpdate()
        }
    }
    render() {
        return (
            <Screen style={{borderWidth:2, margin: 4}}>
              <Bar style={{flex:1, margin:4}}
                center={
                  <ButtonList
                    buttons={[
                      {icon:'md-add', action:this.addImage},
                      {icon:'md-remove', action:this.removeImage},
                    ]} layout='iconOnly'/>
                }
              />
              <Block style={{flex:5, backgroundColor:'#222'}} scrollable={false}>
                <ImageSlider
                    ref={(ref)=>{this.ref=ref}}
                    images={this.state.images}
                    containerStyle={{flex:5, borderWidth:6, borderColor:'blue', margin:8, borderRadius:8}}
                    position={this.state.position}
                    onPositionChanged={(position)=>{
                        this.setState({position})
                    }}
                    resizeMode='cover'
                    bulletPosition='top'
                />
              </Block>
              <Block style={{flex:5, backgroundColor:'yellow'}} scrollable={false}>
                <ImageSlider
                    images={allImages}
                    position={3}
                    containerStyle={{flex:5, borderWidth:6, borderColor:'blue', margin:8, borderRadius:8}}
                    resizeMode='stretch'
                    bulletPosition='bottom'
                />
            </Block>
            <Block style={{flex:5, backgroundColor:'green'}} scrollable={false}>
              <ImageSlider
                containerStyle={{flex:5, borderWidth:6, borderColor:'blue', margin:8, borderRadius:8}}
              />
          </Block>
          </Screen>
        )
    }
}
