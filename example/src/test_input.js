/**
* <TextInput>
* Kevin Lee 3 Sept 2017
**/

import React from 'react'
import { TextInput } from 'react-native'
import { Screen, Bar, Block, DataBar, DataBlock, Text, CheckBox, Input } from 'rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      s1: '',
      s2: '',
      disabled: false
    }
  }
  render() {
    k = 1
    return (
      <Screen lines={16} scrollable
        title='<Input> Control Test'
        left={<CheckBox iconOnly
          style={{alignItems:'flex-start'}}
          iconSize={20}
          iconColor='#ddd'
          icons={['md-eye-off', 'md-eye']}
          value={this.state.DisableAll}
          onValueChange={(disabled)=>this.setState({disabled})}
        />}
      >
        <Bar lines={2} text={<Text D3>Input is the base for data entry elements. It is styled from TextInput.</Text>} />
        <Block lines={5} style={{borderWidth:1, margin:2}}>
          <DataBar
            text={(k++) + '. Basic TextInput'}
            input={<TextInput underlineColorAndroid='transparent'/>}
          />
          <DataBar
            text={(k++) + '. Basic Input'}
            input={<Input disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Underlined TextInput'}
            input={<TextInput underlineColorAndroid='grey'/>}
          />
          <DataBar
            text={(k++) + '. Underlined Input'}
            input={<Input underline disabled={this.state.disabled}/>}
          />
        </Block>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic TextInput'}
            input={<TextInput underlineColorAndroid='transparent'/>}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic Input'}
            input={<Input
              value={this.state.s1}
              onValueChange={(s1)=>this.setState({s1})}
              disabled={this.state.disabled}
            />}
          />
        </Bar>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined TextInput'}
            input={<TextInput
              underlineColorAndroid='grey'
              disabled={this.state.disabled}
            />}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined Input'}
            input={<Input underline
              value={this.state.s2}
              onValueChange={(s2)=>this.setState({s2})}
              disabled={this.state.disabled}
            />}
          />
        </Bar>
        <Text>{JSON.stringify(this.state)}</Text>
      </Screen>
    )
  }

}
