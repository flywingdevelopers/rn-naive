/**
* <Roll> Control test
* Kevin Lee 19 Sept 2017
**/

import React from 'react'
import {
  BaseStyle, Screen, Bar, Block,
  DataBar, DataBlock,
  Text, Input, Roll
} from '../rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DisableAll: false,
    }
  }
  genders = [
    {icon:'md-man', text:'Man', iconColor:'green', textStyle:{color:'green'}},
    {icon:'md-woman', text:'Woman', iconColor:'red', textStyle:{color:'red'}},
    {icon:'logo-android', text:'Robot', iconColor:'blue', textStyle:{color:'blue'}},
  ]
  software = [
    {icon:'logo-android', text:'Android'},
    {icon:'logo-apple', text:'Apple'},
    {icon:'logo-dropbox', text:'Dropbox'},
    {icon:'logo-facebook', text:'Facebook'},
    {icon:'logo-playstation', text:'PlayStation'},
    {icon:'logo-xbox', text:'X-Box'},
  ]
  flags = [
    {image:require('../asset/flag/hongkong.png'), text:'Hong Kong'},
    {image:require('../asset/flag/china.png'), text:'China'},
    {image:require('../asset/flag/taiwan.png'), text:'Taiwan'},
    {image:require('../asset/flag/korea.png'), text:'Korea'},
    {image:require('../asset/flag/usa.png'), text:'USA'},
    {image:require('../asset/flag/canada.png'), text:'Canada'},
    {image:require('../asset/flag/uk.png'), text:'United Kingdom'},
  ]
  render() {
    return (
      <Screen lines={18} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}}>
        <Bar
          title={<Text H3 color='#ddd'>{'<'}Roll{'>'} Control Test</Text>}
          left={<Roll iconOnly
            iconSize={16}
            iconColor='#ddd'
            items={[{icon:'md-eye-off'}, {icon:'md-eye'}]}
            value={this.state.DisableAll}
            onValueChange={()=>this.setState({DisableAll:1-this.state.DisableAll})}
          />}
        />
        <Bar text={<Text H5>Roll Element rotate values upon user clicks. Roll input has no default value, otherwise the first item is the default.</Text>} />
        <Bar text={<Text D4>The six layout is the same as {'<'}Button{'>'} element</Text>} />
        <Bar lines={1.5}>
          <Roll items={this.genders} iconLeft disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconTop disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconBottom disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconRight disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconOnly disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} textOnly disabled={this.state.DisableAll != 0} />
        </Bar>
        <Bar lines={2} text={<Text D4>It can be styled like buttons and distributed evenly</Text>} />
        <Bar lines={1.5}>
          <Roll items={this.genders} iconLeft style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconTop style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconBottom style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconRight style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} iconOnly style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
          <Roll items={this.genders} textOnly style={[BaseStyle.Button.view,{flex:1}]} disabled={this.state.DisableAll != 0} />
        </Bar>
        <Bar lines={2} text={<Text d4>Use Roll as an Input element</Text>} />
        <DataBar text='Normal Input' input={<Input />} style={{borderWidth:1}}/>
        <DataBar text='Normal Roll' input={<Roll iconSize={20} rolls={this.software} iconLeft disabled={this.state.DisableAll != 0} />} style={{borderWidth:1}}/>
        <DataBar text='Underlined Roll' input={<Roll input iconSize={20} rolls={this.software} underline iconLeft disabled={this.state.DisableAll != 0} />} style={{borderWidth:1}}/>
        <Bar lines={2}>
          <DataBlock title='Normal Input'
            input={<Input />}
            style={{flex:1, borderWidth:1}}
          />
          <DataBlock title='Normal Roll'
            input={<Roll iconSize={32} rolls={this.software}
              iconOnly
              style={{alignItems:'stretch'}}
              disabled={this.state.DisableAll != 0}
            />}
            style={{flex:1, borderWidth:1}}
          />
        </Bar>
        <Bar lines={2}>
          <DataBlock title='Underlined Input'
            input={<Input underline />}
            style={{flex:1, borderWidth:1}}
          />
          <DataBlock title='Underlined Roll'
            input={<Roll input iconSize={28}
              items={this.flags}
              underline iconRight
              disabled={this.state.DisableAll != 0}
            />}
            style={{flex:1, borderWidth:1}}
          />
        </Bar>
      </Screen>
    )
  }
}
