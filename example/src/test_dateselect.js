/**
* <TextInput>
* Kevin Lee 3 Sept 2017
**/

import React from 'react'
import {
  Screen, Bar, Block,
  DataBar, DataBlock,
  Text, CheckBox, Input,
  DateSelect,
} from 'rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      d1: '',
      d2: '',
      d3: '',
      d4: '',
    }
  }
  render() {
    k = 1
    return (
      <Screen lines={16}
        title='<DateSelect> Control Test'
        left={<CheckBox iconOnly
          style={{alignItems:'flex-start'}}
          iconSize={20}
          iconColor='#ddd'
          icons={['md-eye-off', 'md-eye']}
          value={this.state.DisableAll}
          onValueChange={(disabled)=>this.setState({disabled})}
        />}
      >
        <Bar lines={2} text={<Text D3>DateSelect is specified for date selection.</Text>} />
        <Block lines={5} style={{borderWidth:1, margin:2}}>
          <DataBar
            text={(k++) + '. Basic Input'}
            input={<Input disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Basic DateSelect'}
            input={<DateSelect
              disabled={this.state.disabled}
              value={this.state.d1}
              onValueChange={(d1)=>this.setState({d1})}
            />}
          />
          <DataBar
            text={(k++) + '. Underlined Input'}
            input={<Input underline disabled={this.state.disabled}/>}
          />
          <DataBar
            text={(k++) + '. Underlined DateSelect'}
            input={<DateSelect
              underline
              disabled={this.state.disabled}
              value={this.state.d2}
              onValueChange={(d2)=>this.setState({d2})}
            />}
          />
        </Block>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic Input'}
            input={<Input disabled={this.state.disabled}/>}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Basic DateSelect'}
            input={<DateSelect
              disabled={this.state.disabled}
              value={this.state.d3}
              onValueChange={(d3)=>this.setState({d3})}
            />}
          />
        </Bar>
        <Bar lines={2}>
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined Input'}
            input={<Input underline disabled={this.state.disabled}/>}
          />
          <DataBlock style={{borderWidth:1}}
            text={(k++) + '. Underlined DateSelect'}
            input={<DateSelect underline
              disabled={this.state.disabled}
              value={this.state.d4}
              onValueChange={(d4)=>this.setState({d4})}
            />}
          />
        </Bar>
      </Screen>
    )
  }
}
