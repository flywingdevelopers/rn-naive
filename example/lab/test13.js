/**
* <ButtonList> Control
**/

import React, { Component } from 'react'
import { View } from 'react-native'
import { ButtonList } from '../rn-naive'

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1, borderWidth:1}}>
                <View style={{flex:1, borderWidth:1}}>
                    <ButtonList
                        buttons={[
                            {icon:'ios-cash', text:'Cash'},
                            {icon:'ios-camera', text:'Camera'},
                            {icon:'ios-card', text:'Card'},
                            {icon:'logo-android', text:'Android'},
                            {icon:'logo-apple', text:'Apple'},
                            {icon:'logo-xbox', text:'Xbox'},
                        ]}
                        layout='iconTop'
                        viewStyle={{borderWidth:1, borderColor:'red', margin:4}}
                    />
                </View>
                <View style={{flex:7, borderWidth:1}}/>
            </View>
        )
    }
}
