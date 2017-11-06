/**
* Theme test
* Kevin Lee 14 Sept 2017
**/

import React from 'react'
import { Alert } from 'react-native'
import {
  Screen, Block, Bar,
  DataBar, DataBlock,
  Text, Icon, IconList,
  Button, ButtonList, ButtonPanel,
  Input, CheckBox, RadioBox,
} from 'rn-naive'

export default class App extends React.Component {
  constructor() {
    super()
    this.state={ p1:'X'}
  }
  render() {
    return (
      <Screen theme={BlueTheme} lines={24} style={{borderWidth:2, borderColor:'green', margin:8}}>
        <Block theme={RedTheme} lines={10}>
          <Block scrollable style={{flex:3}}>
            <DataBar
              title="Reference No"
              input={<Input style={{borderWidth:1}} />}
              textView={{flex:3}}
             />
            <DataBar
              title="Check Box"
              input={<CheckBox style={{borderWidth:1}} text="Checked"/>}
              inputStyle={{alignItems:'flex-start'}}
              textView={{flex:3}}
              lines={2}
            />
            <DataBar
              title="Radio Box"
              input={<RadioBox style={{flexDirection:'row',borderWidth:1}} items={['Cash','Cheque','Card']}/>}
              textView={{flex:3}}
              lines={3}
            />
          </Block>
          <Block scrollable style={{flex:2}}>
            <Bar style={{flex:3}}>
              <Bar style={{flex:2}}>
                <Icon
                  avatar
                  source={require('../asset/flywing.png')}
                  size={36}
                  style={{borderWidth:2}}
                />
                <Icon
                  avatar
                  source={require('../asset/flywing2.png')}
                  size={32}
                  action={()=>Alert.alert('I am a flywinger')}
                />
                <Icon
                  avatar
                  source={require('../asset/flywing2.png')}
                  size={24}
                  action={()=>{Alert.alert("I'm here.")}}
                />
              </Bar>
              <Bar style={{flex:3}}>
                <ButtonPanel
                  buttons={[
                    {icon:'logo-android', text:'Linux', value:'O'},
                    {icon:'logo-apple', text:'Apple', value:'A'},
                    {icon:'logo-xbox', text:'Xbox', value:'X'},
                  ]}
                  iconSize={16}
                  value={this.state.p1}
                  onValueChange={(p1)=>{this.setState({p1})}}
                />
              </Bar>
            </Bar>
            <Bar style={{flex:1}}>
              <IconList
                icons={[
                  {name:'ios-cash', action:()=>Alert.alert('CASH')},
                  {name:'ios-camera', action:()=>Alert.alert('CAMERA')},
                  {name:'ios-card', action: ()=>Alert.alert('CARD')},
                  {name:'logo-android', action:()=>Alert.alert('ROBOT')},
                  {name:'logo-apple', action:()=>Alert.alert('APPLE')},
                  {name:'logo-xbox', action:()=>Alert.alert('XBOX')},
                ]}
            />
            </Bar>
          </Block>
          <Bar style={{flex:1}}>
            <ButtonList
              items={[
                {icon:'ios-cash', action:()=>Alert.alert('CASH')},
                {icon:'ios-camera', action:()=>Alert.alert('CAMERA')},
                {icon:'ios-card', action: ()=>Alert.alert('CARD')},
                {icon:'logo-android', action:()=>Alert.alert('ROBOT')},
                {icon:'logo-apple', action:()=>Alert.alert('APPLE')},
                {icon:'logo-xbox', action:()=>Alert.alert('XBOX')},
              ]}
            />
          </Bar>
        </Block>
        <Bar lines={9} style={{alignItems:'stretch'}}>
          <Block style={{flex:1}}>
            <DataBlock title='Description' input={<Input multiline style={{borderWidth:1}}/>} />
            <Button icon='ios-send' title='Submit' action={()=>Alert.alert('OK')}/>
          </Block>
          <Block style={{flex:1}}>
            <ButtonList wrap
              items={[
                {icon:'ios-cash', action:()=>Alert.alert('CASH')},
                {icon:'ios-camera', action:()=>Alert.alert('CAMERA')},
                {icon:'ios-card', action: ()=>Alert.alert('CARD')},
                {icon:'logo-android', action:()=>Alert.alert('ROBOT')},
                {icon:'logo-apple', action:()=>Alert.alert('APPLE')},
                {icon:'logo-xbox', action:()=>Alert.alert('XBOX')},
              ]}
            />
          </Block>
          <Block style={{flex:1}}>
            <IconList wrapped
              icons={[
                {name:'ios-cash', action:()=>Alert.alert('CASH')},
                {name:'ios-camera', action:()=>Alert.alert('CAMERA')},
                {name:'ios-card', action: ()=>Alert.alert('CARD')},
                {name:'logo-android', action:()=>Alert.alert('ROBOT')},
                {name:'logo-apple', action:()=>Alert.alert('APPLE')},
                {name:'logo-xbox', action:()=>Alert.alert('XBOX')},
              ]}
              style={{flex:1, flexDirection:'column', margin:2}}
            />
            <Block style={{flex:1}}>
              <Text>Nothing is more important than life and good health</Text>
            </Block>
          </Block>
        </Bar>
      </Screen>
    )
  }
}

const RedTheme = {
  Text: {
    default: { color: 'orange' },
  },
  Icon: {
    avatarBorderColor: 'orange',
  },
  IconList: {
    color: 'red',
  },
  Block: {
    view: { borderWidth:1, borderRadius:8, margin:4, borderColor:'red' }
  },
  Bar: {
    view: { borderWidth:1, borderRadius:8, margin:4, borderColor:'red', justifyContent:'flex-start'}
  },
  DataBar: {
    view: { margin:1 },
    textView: { flex:4 },
    inputView: { flex:6 },
  },
}

const BlueTheme = {
  Text: {
    default: {color:'blue'},
  },
  Block: {
    view: { borderWidth:2, margin:2, borderColor:'blue' }
  },
  Bar: {
    view: { borderWidth:2, borderRadius: 4, margin:2, borderColor:'blue' }
  },
  DataBlock: {
    view: { margin:2, borderWidth:1, borderColor:'teal'},
    title: { color:'teal', fontWeight:'bold'},
    titleView: { flex:1 },
    inputView: { flex:9 },
  },
  IconList: {
    color: 'blue',
  },
}
