/**
* <TextInput>
* Kevin Lee 3 Sept 2017
**/

import React from 'react'
import { TextInput } from 'react-native'
import { Screen, Content, Bar, DataBar, DataBlock, H3, D3 } from '../rn-naive'

export default class App extends React.Component {
  render() {
    k = 1
    return (
      <Screen>
        <Bar lines={0.7} style={{backgroundColor:'#222'}}
          center={<H3 style={{color:'#eee'}}>{'<'}TextInput{'>'}</H3>}
        />
        <DataBar lines={1} style={{borderWidth:1}}
          text={(k++) + '. Original'}
          input={<TextInput underlineColorAndroid='green' />}
          textViewStyle={{flex:7}}
          inputViewStyle={{borderWidth:1, marginBottom:4}}
        />
        <DataBar lines={1} style={{borderWidth:1}}
          text={(k++) + '. Production'}
          input={<TextInput underlineColorAndroid='transparent' style={{margin:4, marginBottom:8, paddingBottom:0}}/>}
          textViewStyle={{flex:7}}
          inputViewStyle={{borderWidth:1, marginBottom:8}}
        />
        <DataBar lines={1} style={{borderWidth:1}}
          text={(k++) + '. Emulated defualt'}
          input={<TextInput underlineColorAndroid='transparent' style={{borderBottomWidth:1.5, margin:4, marginBottom:6, paddingBottom:2}}/>}
          textViewStyle={{flex:7}}
          inputViewStyle={{borderWidth:1}}
        />
        <DataBar lines={1} style={{borderWidth:1}}
          text={(k++) + '. View and Text box'}
          input={<TextInput underlineColorAndroid='transparent' style={{borderWidth:1, margin:4}}/>}
          textViewStyle={{flex:7}}
          inputViewStyle={{borderWidth:1, marginBottom:8}}
        />
        <Bar lines={1} style={{flexDirection:'row'}}>
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. Original'}
            input={<TextInput underlineColorAndroid='green' />}
            inputViewStyle={{borderWidth:1, marginBottom:4}}
          />
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. Production'}
            input={<TextInput underlineColorAndroid='transparent' style={{borderBottomWidth:1.5, margin:4, marginBottom:8, paddingBottom:0}}/>}
            inputViewStyle={{borderWidth:1, marginBottom:4}}
          />
        </Bar>
        <Bar lines={1} style={{flexDirection:'row'}}>
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. Original'}
            input={<TextInput underlineColorAndroid='orange'/>}
          />
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. Emulated'}
            input={<TextInput underlineColorAndroid='transparent' style={{margin:4, marginBottom:8, paddingBottom:0}}/>}
          />
        </Bar>
        <Bar lines={1} style={{flexDirection:'row'}}>
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. Emulated defualt'}
            input={<TextInput underlineColorAndroid='transparent' style={{margin:4, marginBottom:8, paddingBottom:0}}/>}
          />
          <DataBlock style={{flex:1, borderWidth:1}}
            text={(k++) + '. View and Text box'}
            input={<TextInput underlineColorAndroid='transparent' style={{borderWidth:1, margin:4}}/>}
          />
        </Bar>
      </Screen>
    )
  }
}
