/**
 * Buttonlist Test
 * Kevin Lee 20 Aug 2017
**/

import React from 'react'
import { Device, Screen, Block, Bar, Text, CheckBox, ButtonList } from '../rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {Message:''}
  }
  iconclickcash() {
    this.setState({Message:'Cash'})
  }
  iconclickcamera() {
    this.setState({Message:'Camera'})
  }
  iconclickcard() {
    this.setState({Message:'Card'})
  }
  iconclickandroid() {
    this.setState({Message:'Android'})
  }
  iconclickapple() {
    this.setState({Message:'Apple'})
  }
  iconclickxbox() {
    this.setState({Message:'Xbox'})
  }
  buttonListAction=(value)=>{
    this.setState({Message:`Action is ${value}`})
  }
  render() {
    return (
      <Screen lines={22} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}} scrollable>
        <Bar
          title={<Text H3 color='#ddd'>{'<'}ButtonList{'>'} Control Test</Text>}
          left={<CheckBox iconOnly
            style={{alignItems:'flex-start'}}
            iconSize={20}
            iconColor='#ddd'
            icons={['md-eye-off', 'md-eye']}
            value={this.state.DisableAll}
            onValueChange={(disabled)=>this.setState({disabled})}
          />}
        />
        <Bar text={<Text H5>ButtonList aligns a list of Buttons</Text>} />
        <Bar text={<Text D4>Each button item has its own icon, text and action</Text>} />
        <Bar>
          <ButtonList
            buttons={[
              {icon:'ios-cash', text:'Cash', action:this.iconclickcash.bind(this)},
              {icon:'ios-card', text:'Card', color:'pink', iconColor:'black', action:this.iconclickcard.bind(this)},
              {icon:'logo-android', text:'Android', action:this.iconclickandroid.bind(this)},
              {icon:'logo-apple', text:'Apple', action:this.iconclickapple.bind(this)},
              {icon:'logo-xbox', text:'Xbox', action:this.iconclickxbox.bind(this)},
              ]}
            disabled={this.state.disabled}
          />
        </Bar>
        <Bar text={<Text D4>The look of the list can be customized</Text>} />
        <ButtonList
          buttons={[
            {icon:'ios-cash', text:'CASH', action:this.iconclickcash.bind(this)},
            {icon:'ios-camera', text:'CAMERA', action:this.iconclickcamera.bind(this)},
            {icon:'ios-card', text:'CARD', action:this.iconclickcard.bind(this), disabled:true},
            {icon:'logo-android', text:'ANDROID', iconSize:26, iconColor:'red', action:this.iconclickandroid.bind(this)},
            {icon:'logo-apple', text:'APPLE', layout:'iconLeft', action:this.iconclickapple.bind(this)},
            {icon:'logo-xbox', text:'Xbox', action:this.iconclickxbox.bind(this)},
          ]}
          layout='iconTop'
          viewStyle={{borderWidth:1}}
          color='yellow'
          lines={1.5}
          size={Device.fontSize(20)}
          disabled={this.state.disabled}
        />
        <Bar text={<Text D4> Action can be centralized to the element or de-centralized to buttons</Text>} />
        <ButtonList
          buttons={[
            {icon:'ios-cash'},
            {icon:'ios-camera', iconColor:'green'},
            {icon:'ios-card'},
            {icon:'logo-android', iconColor:'green'},
            {icon:'logo-apple'},
            {icon:'logo-xbox', iconColor:'green'},
          ]}
          layout='iconOnly'
          lines={2}
          border={0}
          iconColor='red'
          color='transparent'
          buttonView={{flex:0, width:Device.width/4, margin:0}}
          view={{
            flexWrap:'wrap',
            padding:2,
            marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
          }}
          action={this.buttonListAction}
          size={Device.fontSize(32)}
          disabled={this.state.disabled}
        />
        <Bar lines={3} style={{borderWidth:1}}
          right={<ButtonList wrapped
            icons={[
              'ios-cash', 'ios-camera', 'ios-card',
              'logo-android', 'logo-apple', 'logo-xbox',
              'ios-alarm', 'ios-bicycle', 'ios-body', 'ios-bonfire',
              'ios-bulb', 'ios-cafe', 'ios-calculator', 'ios-contact',
              'ios-flower', 'ios-globe',
            ]}
            layout='iconOnly'
            border={1}
            color='linen'
            iconColor='red'
            buttonStyle={{margin:1, borderColor:'pink'}}
            action={this.buttonListAction}
            size={Device.fontSize(32)}
            disabled={this.state.disabled}
          />}
          left={<Text D5>Can wrapped within bar/block</Text>}
        />
        <Bar text={<Text D4>Can be text only buttons</Text>} />
        <ButtonList
          texts={[
            'Cash',
            'Camera',
            'Card',
            'Android',
            'Apple',
            'Xbox',
          ]}
          layout='iconOnly'
          lines={1}
          border={1}
          color='aqua'
          buttonStyle={{minWidth:Device.width/8, margin:1, borderRadius:0}}
          viewStyle={{
            flexWrap:'wrap',
            padding:2,
            marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
          }}
          action={this.buttonListAction}
          size={Device.fontSize(32)}
          disabled={this.state.disabled}
        />
        <Bar>
          <Text D3>{ this.state.Message }</Text>
        </Bar>
      </Screen>
    )
  }
}
