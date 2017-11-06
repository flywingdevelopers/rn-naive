/**
* Measure View
* Kevin Lee 26 Aug 2017
**/

import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    measureView(event, vx) {
        this.state[vx] = {
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height,
        }
        this.forceUpdate()
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:8}}>
                    <View style={{flex:1, borderWidth:1, borderColor:'red', margin:4}}>
                        <View
                            style={{flex:2, borderWidth:1, borderColor:'blue', margin:4}}
                            onLayout={(event)=>this.measureView(event, 'v1')}
                        >
                        </View>
                        <View
                            style={{flex:1, borderWidth:1, borderColor:'blue', margin:4}}
                            onLayout={(event)=>this.measureView(event, 'v2')}
                        >
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row', borderWidth:1, borderColor:'red', margin:4}}>
                        <View
                            style={{flex:1, borderWidth:1, borderColor:'blue', margin:4}}
                            onLayout={(event)=>this.measureView(event, 'v3')}
                        >
                        </View>
                        <View
                            style={{flex:3, borderWidth:1, borderColor:'blue', margin:4}}
                            onLayout={(event)=>this.measureView(event, 'v4')}
                        >
                        </View>
                    </View>
                </View>
                <TouchableHighlight style={{flex:3,flexDirection:'column'}} onPress={()=>{console.log(this.state.v1.width)}}>
                <View>
                    <Text>{this.state.v1 && this.state.v1.width}</Text>
                    <Text>{this.state.v2 && this.state.v2.width}</Text>
                    <Text>{this.state.v3 && this.state.v3.width}</Text>
                    <Text>{this.state.v4 && this.state.v4.width}</Text>
                </View>
                </TouchableHighlight>
            </View>
        )
    }
}
