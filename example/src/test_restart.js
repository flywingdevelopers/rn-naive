/**
 * Test react-native-restart
 * Kevin Lee 25 Oct 2017
**/

import React from 'react'
import RNRestart from 'react-native-restart'
import { Device, Screen, Block, Button } from 'rn-naive'

export default class App extends React.Component {
    render() {
      return(
        <Screen title='RESTART TEST'>
          <Block style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button text='RESTART NOW' style={{width:Device.width / 4}} action={()=>RNRestart.Restart()} />
          </Block>
        </Screen>
      )
    }
}
