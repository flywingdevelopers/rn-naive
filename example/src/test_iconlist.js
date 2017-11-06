/**
 * Iconlist Test
 * Kevin Lee 20 Aug 2017
**/

import React, { Component } from 'react'
import { Device, Screen, Bar, Content, Text, IconList, Icon } from '../rn-naive'

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
  iconActions=(value)=>{
    this.setState({Message: `Action is ${value}`})
  }
  render() {
    return (
      <Screen
        lines={12} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}}
        title={<Text H3 color='#ddd'>{'<'}Icon{'>'} Control Test</Text>}
      >
        <Bar text={<Text H4>Iconlist provide an aligned list of vector icons.</Text>} />
        <Bar style={{borderWidth:1}}>
          <IconList
            icons={[
              {name:'ios-cash', action:this.iconclickcash.bind(this)},
              {name:'ios-camera', action:this.iconclickcamera.bind(this)},
              {name:'ios-card', action:this.iconclickcard.bind(this), disabled:true},
              {name:'logo-android', action:this.iconclickandroid.bind(this), color:'blue'},
              {name:'logo-apple', action:this.iconclickapple.bind(this)},
              {name:'logo-xbox', action:this.iconclickxbox.bind(this)},
            ]}
            color='green'
            style={{
              backgroundColor:'transparent',
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
          />
        </Bar>
        <Bar lines={1.5} style={{borderWidth:1}}
          right={<IconList
            icons={[
              {name:'ios-cash', action:this.iconclickcash.bind(this)},
              {name:'ios-camera', action:this.iconclickcamera.bind(this), iconViewStyle:{borderWidth:0}},
              {name:'ios-card', action:this.iconclickcard.bind(this)},
              {name:'logo-android', action:this.iconclickandroid.bind(this)},
              {name:'logo-apple', action:this.iconclickapple.bind(this)},
              {name:'logo-xbox', action:this.iconclickxbox.bind(this)},
              ]}
            iconStyle={{color:'red'}}
            style={{
              backgroundColor:'transparent',
              padding:2,
              marginLeft:1, marginRight:1, marginTop:2, marginBottom:0,
            }}
            iconViewStyle={{borderWidth:2, borderRadius:4, margin:2, alignItems:'center'}}
            size={Device.fontSize(32)}
          />}
          rightStyle={{flex:4}}
        />
        <Bar style={{borderWidth:1}}
          left={<IconList
            icons={[
              {name:'ios-cash', action:this.iconclickcash.bind(this)},
              {name:'ios-camera', action:this.iconclickcamera.bind(this)},
              {name:'ios-card', action:this.iconclickcard.bind(this)},
              {name:'logo-android', action:this.iconclickandroid.bind(this)},
              {name:'logo-apple', action:this.iconclickapple.bind(this)},
              {name:'logo-xbox', action:this.iconclickxbox.bind(this)},
              ]}
            iconStyle={{color:'blue'}}
            style={{
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
          />}
          leftStyle={{flex:4, backgroundColor:'yellow'}}
        />
        <Bar style={{borderWidth:1}}>
          <IconList disabled
            icons={[
              {name:'content-cut', action:this.iconclickcash.bind(this)},
              {name:'content-paste', action:this.iconclickcamera.bind(this)},
              {name:'create', action:this.iconclickcard.bind(this)},
              {name:'delete-sweep', action:this.iconclickandroid.bind(this)},
              {name:'drafts', action:this.iconclickapple.bind(this)},
              {name:'flag', action:this.iconclickxbox.bind(this)},
              {name:'font-download', color:'lightgrey'},
              {name:'gesture', color:'silver'},
            ]}
            iconSet='material'
            color='fuchsia'
            style={{
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
          />
        </Bar>
        <Bar style={{borderWidth:1}}>
          <IconList
            items={[
              {name:'content-cut', value:'cut'},
              {name:'content-paste', value:'paste'},
              {name:'create'},
              {name:'delete-sweep', value:'delete'},
              {name:'drafts'},
              {name:'flag'},
              {name:'logo-android', set:'ion', color:'red', value:'auto'},
              {name:'gesture'},
            ]}
            iconSet='material'
            color='black'
            style={{
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
            action={this.iconActions}
          />
        </Bar>
        <Bar style={{borderWidth:1}}>
          <IconList
            items={[
              'content-cut',
              'content-paste',
              'create',
              'delete-sweep',
              'drafts',
              'flag',
              'android',
              'gesture',
            ]}
            iconSet='material'
            color='navy'
            style={{
              padding:2,
              marginLeft:1, marginRight:1, marginTop:0, marginBottom:0,
            }}
            size={Device.fontSize(32)}
            action={this.iconActions}
          />
        </Bar>
        <Bar>
            <Text D3>{ this.state.Message }</Text>
        </Bar>
      </Screen>
    )
  }
}
