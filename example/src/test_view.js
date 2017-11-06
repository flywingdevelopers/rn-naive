/**
* View Test
* Kevin Lee 22 Sept 2017
**/

import React from 'react'
import { View, Text } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'stretch', margin:4, borderWidth:1}}>
        <View style={{height:100, margin:4, borderWidth:1, borderColor:'green'}}/>
        <View style={{height:100, width:100, margin:4, borderWidth:1, borderColor:'green'}}/>
        <View style={{height:100, width:100, margin:4, borderWidth:1, borderColor:'green'}}/>
      </View>
    )
  }
}
