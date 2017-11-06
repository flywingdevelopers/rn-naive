/**
* <TextInput>
* Kevin Lee 3 Sept 2017
**/

import React from 'react'
import {
  Screen, Bar, Block,
  DataBar, DataBlock,
  Text, CheckBox, Input,
  NumberInput,
} from '../rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n1:0,
      n2:0,
      disabled: false
    }
  }
  render() {
    k = 1
    return (
      <Screen lines={16} scrollable
        title='<NumberInput> Control Test'
        left={<CheckBox iconOnly
          style={{alignItems:'flex-start'}}
          iconSize={20}
          iconColor='#ddd'
          icons={['md-eye-off', 'md-eye']}
          value={this.state.DisableAll}
          onValueChange={(disabled)=>this.setState({disabled})}
        />}
      >
        <Bar lines={2} text={<Text D3>NumberInput is specified for numeric data entry. User may enter math expression.</Text>} />
        <Block lines={5} style={{borderWidth:1, margin:2}}>
          <DataBar
            text={(k++) + '. Basic Input'}
            input={<Input disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Basic NumberInput'}
            input={<NumberInput disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Underlined Input'}
            input={<Input underline disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Underlined NumberInput'}
            input={<NumberInput decimal={4} underline disabled={this.state.disabled}/>}
          />
        </Block>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic Input'}
            input={<Input disabled={this.state.disabled}/>}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic NumberInput'}
            input={<NumberInput
              disabled={this.state.disabled}
              value={this.state.n1}
              onEndEditing={(n1)=>this.setState({n1})}
            />}
          />
        </Bar>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined Input'}
            input={<Input underline disabled={this.state.disabled}/>}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined NumberInput'}
            input={<NumberInput underline
              disabled={this.state.disabled}
              value={this.state.n2}
              onEndEditing={(n2)=>this.setState({n2})}
            />}
          />
        </Bar>
        <Text>{JSON.stringify(this.state)}</Text>
      </Screen>
    )
  }
}
