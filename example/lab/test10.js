/**
 * H1 .. H4
 * Kevin Lee 8 Aug 2017
 */

 import React, { Component } from 'react'
 import { View, Text } from 'react-native'
 import { H1, H2, H3, H4, H5, H6, D1, D2, D3, D4, D5, D6 } from '../rn-naive'

 export default class App extends Component {
     render() {
         return (
             <View>
                <H1>This is Heading 1</H1>
                <H2>This is Heading 2</H2>
                <H3>This is Heading 3</H3>
                <H4>This is Heading 4</H4>
                <H5>This is Heading 5</H5>
                <H6>This is Heading 6</H6>
                <D1>This is Detail 1</D1>
                <D2>This is Detail 2</D2>
                <D3>This is Detial 3</D3>
                <D4>This is Detail 4</D4>
                <D5>This is Detail 5</D5>
                <D6>This is Detail 6</D6>
             </View>
        )
     }
 }
