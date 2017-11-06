/**
 * Test format function
 * Kevin Lee 22 Oct 2017
**/

import React from 'react'
import { Screen, Text } from '../rn-naive'

export default class App extends React.Component{
  render() {
    return(
        <Screen title='Test format Function'>
          <Text>{"{0}, How are you?".format("Jason")}</Text>
          <Text>{"{0}, Are you with {1}?".format("Mary","Jason")}</Text>
          <Text>{"{0}, {1} and {2} are three brothers".format("Simon","David","Don")}</Text>
        </Screen>
    )
  }
}

String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};
