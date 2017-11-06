/**
* <Icon> Test
* Kevin Lee 21 Sept 2017
**/

import React from 'react'
import { Alert } from 'react-native'
import { Screen, Bar, Block, CheckBox, Text, Icon } from '../rn-naive'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { icon: '' }
  }
  render() {
    return (
      <Screen
        lines={22} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}}
        title={<Text H3 color='#ddd'>{'<'}Icon{'>'} Control Test</Text>}
      >
        <Bar text={<Text H4>Icon implements vector icons.</Text>} />
        <Bar text={<Text D3>Icon with various size and color</Text>}/>
        <Bar lines={3}>
          <Icon name='logo-twitter' />
          <Icon name='logo-twitter' size={16} color='red'/>
          <Icon name='logo-twitter' size={24} color='blue'/>
          <Icon name='logo-twitter' size={32} color='teal'/>
          <Icon name='logo-twitter' size={40} color='bisque'/>
          <Icon name='logo-twitter' size={60} color='chocolate'/>
          <Icon name='logo-twitter' size={60} color='blueviolet'/>
          <Icon name='logo-twitter' size={44} color='cyan'/>
          <Icon name='logo-twitter' size={36} color='floralwhite' style={{backgroundColor:'silver'}}/>
          <Icon name='logo-twitter' size={28} color='lawngreen'/>
          <Icon name='logo-twitter' size={20} color='lightcoral'/>
        </Bar>
        <Bar text={<Text D3>Pictures can be used</Text>}/>
        <Bar lines={2}>
          <Icon source={require('../asset/mailgirl.png')} size={32}/>
          <Icon source={require('../asset/flywing.png')} size={32} action={()=>Alert.alert('FLYWINGER')}/>
          <Icon source={require('../asset/flywing2.png')} size={32} action={()=>Alert.alert('FLYWINGER 2')}/>
          <Icon source={require('../asset/flag/hongkong.png')} size={32} />
        </Bar>
        <Bar text={<Text D3>Icons can overlay with another icon</Text>}/>
        <Bar lines={4}>
          <Icon
            source={require('../asset/flywing2.png')}
            overlayName='ios-cloudy-night'
            size={64}
            action={()=>Alert.alert('I am inverted.')}
          />
          <Icon name='logo-android' overlay='md-checkmark' overlayStyle={{color:'green'}} color='red'/>
          <Icon name='logo-apple' overlay='md-close' overlayStyle={{color:'red'}}/>
          <Icon name='logo-tux' overlay='md-help' overlayStyle={{color:'blue'}}/>
          <Icon
            overlaySource={require('../asset/flywing2.png')}
            name='ios-cloudy-night-outline'
            size={64}
            action={()=>Alert.alert('This is normal')}
          />
        </Bar>
      </Screen>
    )
  }
}
