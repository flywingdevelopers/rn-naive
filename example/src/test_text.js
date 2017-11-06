/**
* <Text> test
* Kevin Lee 4 Sept 2017
**/

import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Screen, Bar, Text } from 'rn-naive'

export default class App extends Component {
  render() {
    return (
      <Screen title={<Text H4 color='#eee'>{'<'}Text{'>'} Control Test</Text>}>
        <Text h1 color='red'>This is Heading <Text background='aqua'>1</Text></Text>
        <Text h2>This is Heading 2</Text>
        <Text H3 color='blue' action={()=>Alert.alert('Hello')}>This is Heading 3</Text>
        <Text H4>This is Heading 4</Text>
        <Text h5>This is Heading 5</Text>
        <Text H6>This is Heading 6</Text>
        <Text d1>This is Detail 1</Text>
        <Text d2>This is Detail 2</Text>
        <Text d3 color='green'>This is Detial 3</Text>
        <Text d4 italic hold>This is Detail 4</Text>
        <Text d5>This is Detail 5</Text>
        <Text d6 color='white' background='black'>This is Detail 6</Text>
        <Bar style={{flexWrap:'wrap'}}>
          <Text h1 color='red'>This is Heading <Text background='aqua'>1</Text></Text>
          <Text h2>This is Heading 2</Text>
          <Text H3 color='blue' action={()=>Alert.alert('Hello')}>This is Heading 3</Text>
          <Text H4>This is Heading 4</Text>
          <Text h5>This is Heading 5</Text>
          <Text H6>This is Heading 6</Text>
          <Text d1>This is Detail 1</Text>
          <Text d2>This is Detail 2</Text>
          <Text d3 color='green'>This is Detial 3</Text>
          <Text d4 italic hold>This is Detail 4</Text>
          <Text d5>This is Detail 5</Text>
          <Text d6 color='white' background='black'>This is Detail 6</Text>
        </Bar>
      </Screen>
    )
  }
}
