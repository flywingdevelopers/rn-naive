/**
 * test object and attribute
 * Kevin Lee 18 Oct 2017
 **/

import React from 'react'
import { StyleSheet } from 'react-native'
import { Screen, Text } from '../rn-naive'

class Element extends React.Component {
  render() {
    let { a, b, c, d, s, ...rest } = this.props
    console.log('--------------')
    console.log('a:')
    console.log(a)
    console.log('b')
    console.log(b)
    console.log('c')
    console.log(c)
    console.log('d')
    console.log(d)
    console.log(rest)
    return (
      <Text {...s} {...rest}>This is Done</Text>
    )
  }
}

export default class App extends React.Component {
    render() {
      return(
        <Screen>
          <Element s={StyleSheet.flatten([{bold:true}, {color:'red'}])} />
          <Element color='green' a={1} b={2} f={6} g={7} />
          <Element a={1} />
          <Element b={{b1:1, b2:2}} />
        </Screen>
      )
    }
}
