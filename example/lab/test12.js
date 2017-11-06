/**
* Explore <View>
* Kevin Lee 23 Aug 2017
**/

import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends React.Component {
    render() {
        k = 0
        return (
            /* Only one element can be return in render() */
            <View style={{flex:1, margin:4, borderWidth:1}}>
                {/* This is the basic View */}
                <View style={{
                    flex:1,
                    margin:4,
                    borderWidth:2, borderColor:'red',
                }}>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* 4 elements basic arrangement */}
                <View style={{
                    flex:1,
                    margin:4,
                    borderWidth:2, borderColor:'red',
                }}>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* 4 elements arrangement changed by flexDirection */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red'
                }}>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* flex preceeds width (height) */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red'
                }}>
                    <View style={{flex:1, margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* minWidth and minHeight gives different size */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red'
                }}>
                    <View style={{flex:1, margin:4, borderWidth:1, minHeight:30, minWidth:60}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1, minHeight:12, minWidth:12}}>
                        <Text>{k+=1}</Text>
                    </View>
                    {/* height still works */}
                    <View style={{flex:1, margin:4, borderWidth:1, height:24, width:88}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{flex:1, margin:4, borderWidth:1, minHeight:0, minWidth:0}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* child not flex style */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red'
                }}>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* alignItems:flex-end */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red',
                    alignItems:'flex-end'}}>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* alignItems and justifyContent:flex-end */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red',
                    alignItems:'flex-end',
                    justifyContent:'flex-end'}}>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
                {/* overflow box cannot flow exceed parent view */}
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    margin:4,
                    borderWidth:2, borderColor:'red',
                    alignItems:'flex-end',
                    justifyContent:'flex-end'}}>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:24, width:24}}>
                        <Text>{k+=1}</Text>
                    </View>
                    <View style={{margin:4, borderWidth:1, height:88, width:200}}>
                        <Text>{k+=1}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
