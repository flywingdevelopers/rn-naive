/**
* <Button> Control test
* Kevin Lee 18 Sept 2017
*
**/

import React from 'react'
import { Alert } from 'react-native'
import { Screen, Bar, Roll, Text, Button } from '../rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DisableAll: 0,
      Transport: '',
      Transport2: '',
      Paid: '',
      Desktop: '',
      OS: '',
      device: '',
      flag: '',
    }
  }
  render() {
    return (
      <Screen lines={22} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}} scrollable
          title={<Text H3 color='#ddd'>{'<'}Button{'>'} Control Test</Text>}
          left={<Roll iconOnly
            iconSize={16}
            iconColor='#ddd'
            items={[{icon:'md-eye-off'}, {icon:'md-eye'}]}
            value={this.state.DisableAll}
            onValueChange={()=>this.setState({DisableAll:1-this.state.DisableAll})}
          />}
      >
        <Bar text={<Text H5>This element has two kinds of layout</Text>}/>
        <Bar text='Horizontal Layout (default)'/>
        <Bar>
          <Button icon='md-bus' text='BUS'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport)=>this.setState({Transport})}
          />
          <Button icon='md-subway' text='SUBWAY'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport)=>this.setState({Transport})}
          />
          <Button icon='md-train' text='TRAIN'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport)=>this.setState({Transport})}
          />
          <Button icon='md-boat' text='BOAT'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport)=>this.setState({Transport})}
          />
          <Button icon='md-plane' text='PLANE'
           disabled={(this.state.DisableAll != 0)}
           onValueChange={(Transport)=>this.setState({Transport})}
         />
        </Bar>
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{ (this.state.Transport == '')? '' : 'Transport by ' + this.state.Transport }</Text>
        </Bar>
        <Bar text='Vertical Layout'/>
        <Bar lines={2}>
          <Button iconTop icon='md-bus' text='BUS'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport2)=>this.setState({Transport2})}
            />
          <Button iconTop icon='md-subway' text='SUBWAY'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport2)=>this.setState({Transport2})}
          />
          <Button iconTop icon='md-train' text='TRAIN'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport2)=>this.setState({Transport2})}
          />
          <Button iconTop icon='md-plane' text='PLANE'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Transport2)=>this.setState({Transport2})}
           />
        </Bar>
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{ (this.state.Transport2 == '')? '' : 'Ride on ' + this.state.Transport2 }</Text>
        </Bar>
        <Bar text={<Text H5> Elements can distribute evenly using proper flex Setting</Text>}/>
        <Bar>
          <Button iconRight style={{flex:1}} icon='md-cash' text='CASH' color='red'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Paid)=>this.setState({Paid})}
          />
          <Button iconRight style={{flex:1}} icon='md-card' text='CARD' color='green' iconColor='white'
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Paid)=>this.setState({Paid})}
          />
          <Button iconRight style={{flex:1}} icon='md-appstore' text='ONLINE' color='cyan'
           disabled={(this.state.DisableAll != 0)}
           onValueChange={(Paid)=>this.setState({Paid})}
          />
        </Bar>
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{ (this.state.Paid == '')? '' : 'Paid by ' + this.state.Paid }</Text>
        </Bar>
        <Bar text={<Text H5>Layout can be wrapped</Text>}/>
        <Bar style={{flexDirection:'row', flexWrap:'wrap', marginLeft:15}} lines={4}>
          <Button iconBottom icon='md-cafe' text='CAFE' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-calculator' text='CALC' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-calendar' text='CALENDAR' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-camera' text='CAMERA' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-call' text='PHONE' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-bug' text='BUG' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-clock' text='CLOCK' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-clipboard' text='BOARD' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
          <Button iconBottom icon='md-create' text='PENCIL' style={{height:32, width:32}} textStyle={{fontWeight:'normal', fontSize:8}}
            disabled={(this.state.DisableAll != 0)}
            onValueChange={(Desktop)=>this.setState({Desktop})}
          />
        </Bar>
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{ (this.state.Desktop == '')? '' : 'Desktop has ' + this.state.Desktop }</Text>
        </Bar>
        <Bar text={<Text H5>Icon and Text Only Buttons</Text>}/>
        <Bar
          left={<Bar style={{flex:1}}>
            <Button icon='logo-apple' value='Apple' style={{flex:1}}
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(OS)=>this.setState({OS})}
            />
            <Button icon='logo-android' value='Android' style={{flex:1}}
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(OS)=>this.setState({OS})}
            />
            <Button iconOnly='logo-xbox' value='Windows' style={{flex:1}}
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(OS)=>this.setState({OS})}
            />
          </Bar>}
          right={<Bar style={{flex:1}}>
            <Button text='laptop'
              color='teal'
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(device)=>this.setState({device})}
            />
            <Button text='tablet'
              color='cyan'
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(device)=>this.setState({device})}
            />
            <Button textOnly='phone'
              color='navy'
              textStyle={{color:'white'}}
              disabled={(this.state.DisableAll != 0)}
              onValueChange={(device)=>this.setState({device})}
            />
          </Bar>}
        />
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{this.state.OS + ' ' + this.state.device}</Text>
        </Bar>
        <Bar text={<Text H5>Button with Image</Text>}/>
        <Bar lines={1.2}>
          <Button
            image={require('../asset/flag/hongkong.png')}
            text='Hong Kong'
            disabled={(this.state.DisableAll != 0)}
            onChange={(flag)=>this.setState({flag})}
          />
          <Button
            image={require('../asset/flag/china.png')}
            text='China'
            disabled={(this.state.DisableAll != 0)}
            onChange={(flag)=>this.setState({flag})}
          />
          <Button
            image={require('../asset/flag/taiwan.png')}
            text='Taiwan'
            disabled={(this.state.DisableAll != 0)}
            onChange={(flag)=>this.setState({flag})}
          />
        </Bar>
        <Bar style={{justifyContent:'flex-end'}}>
          <Text>{this.state.flag}</Text>
        </Bar>
      </Screen>
    )
  }
}
