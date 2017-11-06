/**
* PixelRatio Control test
* Kevin Lee 06 Nov 2017
**/

import React from 'react'
import { Device, Screen, Text, Button } from 'rn-naive'

export default class App extends React.Component {
  render() {
    return (
      <Screen style={{
        justifyContent:'space-around', alignItems:'center',
        margin:'10%', marginTop:'10%', borderWidth:1, borderRadius:4
      }}>
        <Text H4>Device Width is {Device.width}, Height is {Device.height}</Text>
        <Text H4>PixelRatio is {Device.pixelRatio}</Text>
        <Text style={{fontSize:18}}>Pixel is KING</Text>
        <Text style={{fontSize:Device.fontSize(18)}}>Pixel is also QUEEN ({Device.fontSize(18)})</Text>
        <Button style={{width:100, height:100}} text='BUTTON' />
      </Screen>
    )
  }
}
