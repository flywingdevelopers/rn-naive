/**
 * <ButtonPanel> Test
 * Kevin Lee 09 Sept 2017
**/

import React from 'react'
import { Alert } from 'react-native'
import { Device, Screen, Block, Bar, CheckBox, Text, ButtonPanel } from '../rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Message:'',
      p1:'#',
      p2:'Xbox',
      p3:'',
      p4:'',
      p5:'Apple',
    }
  }
  ButtonPanelAction=(value)=>{
    this.setState({Message:`Action is ${value}`})
  }
  render() {
    return (
      <Screen lines={20} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}} scrollable>
        <Bar
          title={<Text H3 color='#ddd'>{'<'}ButtonPanel{'>'} Control Test</Text>}
          left={<CheckBox iconOnly
            style={{alignItems:'flex-start'}}
            iconSize={20}
            iconColor='#ddd'
            icons={['md-eye-off', 'md-eye']}
            value={this.state.DisableAll}
            onValueChange={(disabled)=>this.setState({disabled})}
          />}
        />
        <Bar text={<Text D4>ButtonPanel keeps a value from a list of Buttons</Text>} />
        <ButtonPanel lines={1}
          buttons={[
            {icon:'ios-cash', text:'Cash', value:'$'},
            {icon:'ios-card', text:'Card', value:'#'},
            {icon:'logo-android', text:'Android', value:'O'},
            {icon:'logo-apple', text:'Apple', value:'A'},
            {icon:'logo-xbox', text:'Xbox', value:'X'},
          ]}
          disabled={this.state.disabled}
          value={this.state.p1}
          onValueChange={(p1)=>{this.setState({p1})}}
        />
        <Bar text={<Text D4>Panel buttons can be distributed evenly</Text>} />
        <ButtonPanel lines={2}
          buttons={[
            {icon:'ios-cash', text:'CASH', disabled:true},
            {icon:'ios-camera', text:'CAMERA'},
            {icon:'ios-card', text:'CARD'},
            {icon:'logo-android', text:'ANDROID', iconStyle:{color:'red'}},
            {icon:'logo-apple', text:'APPLE'},
            {icon:'logo-xbox', text:'Xbox'},
          ]}
          layout='iconTop'
          buttonStyle={{
            flex:1,
            padding:2,
            marginLeft:1, marginRight:1, marginTop:4, marginBottom:4,
          }}
          disabled={this.state.disabled}
          value={this.state.p2}
          onValueChange={(p2)=>this.setState({p2})}
        />
        <Bar lines={2} style={{borderWidth:1}}
          right={<ButtonPanel
            buttons={[
              {icon:'ios-cash'},
              {icon:'ios-camera', iconStyle:{color:'green'}},
              {icon:'ios-card'},
              {icon:'logo-android', iconStyle:{color:'green'}},
              {icon:'logo-apple'},
              {icon:'logo-xbox', iconStyle:{color:'green'}},
            ]}
            layout='iconOnly'
            border={0}
            iconStyle={{color:'red'}}
            buttonStyle={{width:Device.width/8, margin:0, borderWidth:1, borderColor:'pink', backgroundColor:'linen'}}
            view={{
              flexWrap:'wrap',
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
            disabled={this.state.disabled}
            value={this.state.p3}
            onValueChange={(p3)=>this.setState({p3})}
          />}
          left={<Text D4>Wrapped within bar/block</Text>}
        />
        <Bar text={<Text D4>Configure to look like an action bar</Text>} />
        <ButtonPanel lines={1.2}
          icons={[
            'ios-cash',
            'ios-camera',
            'ios-card',
            'logo-android',
            'logo-apple',
            'logo-xbox',
          ]}
          layout='iconOnly'
          iconStyle={{color:'red', fontSize:24}}
          buttonStyle={{minWidth:Device.width/8, margin:0, borderRadius:0, backgroundColor:'yellow'}}
          view={{
            justifyContent: 'center',
            padding:2,
            marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
          }}
          disabled={this.state.disabled}
          value={this.state.p4}
          onValueChange={(p4)=>this.setState({p4})}
        />
        <Bar text={<Text D4>Configure as a text only action bar</Text>} />
        <ButtonPanel lines={1}
          texts={[
            'Cash',
            'Camera',
            'Card',
            'Android',
            'Apple',
            'Xbox',
          ]}
          layout='iconOnly'
          border={2}
          buttonStyle={{minWidth:Device.width/8, margin:0, borderRadius:0}}
          view={{
            flexWrap:'wrap',
            padding:2,
            marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
          }}
          size={Device.fontSize(32)}
          disabled={this.state.disabled}
          value={this.state.p5}
          onChange={(p5)=>this.setState({p5})}
        />
        <Block lines={5} style={{borderWidth:1, borderRadius:8, borderColor:'red'}}>
          <Text D3>{ this.state.p1 }</Text>
          <Text D3>{ this.state.p2 }</Text>
          <Text D3>{ this.state.p3 }</Text>
          <Text D3>{ this.state.p4 }</Text>
          <Text D3>{ this.state.p5 }</Text>
        </Block>
      </Screen>
    )
  }
}
