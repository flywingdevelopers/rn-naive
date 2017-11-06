/**
 * FlexWrap Test
 * Kevin Lee 17 Aug 2017
**/

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Icon } from '../rn-naive'

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1, borderWidth:1, margin:4}}>
            <View style={{flex:10, flexWrap:'wrap', flexDirection:'row', borderWidth:1, borderRadius:8, margin:8}}>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((i)=>{
                    return(
                        <Button
                            icon='logo-android'
                            text={`Action ${i}`}
                            layout='iconLeft'
                            key={i}
                        />
                    )})
            }
            </View>
            <View style={{flex:10, flexWrap:'wrap', flexDirection:'row', borderWidth:1, borderRadius:8, margin:8}}>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((i)=>{
                    return(
                        <TouchableOpacity key={i}>
                        <View style={{
                            borderWidth:1,
                            margin:8, padding:2, minWidth:90, minHeight:30,
                            flexDirection:'row',
                        }}>
                        {[
                            <View style={{flex:2, alignItems:'center'}} key='icon'>
                                <Icon name='logo-android'/>
                            </View>,
                            <View style={{flex:8, alignItems:'flex-start'}} key='text'>
                                <Text>{`Android ${i}`}</Text>
                            </View>
                        ]}
                        </View>
                        </TouchableOpacity>
                    )})
            }
            </View>
            </View>
        )
    }
}
