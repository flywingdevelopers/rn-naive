/**
* <CheckBox> Control Test
* Kevin Lee 19 Sept 2017
**/

import React from 'react'
import { Screen, Bar, Roll, Text, CheckBox } from 'rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DisableAll: false,
    }
  }
  render() {
    return (
      <Screen lines={18} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}}>
        <Bar
          title={<Text H3 color='#ddd'>{'<'}CheckBox{'>'} Control Test</Text>}
          left={<CheckBox
            iconOnly
            iconSize={16}
            iconColor='#ddd'
            icons={['md-eye-off', 'md-eye']}
            value={this.state.DisableAll}
            onValueChange={(DisableAll)=>this.setState({DisableAll})}
          />}
        />
        <Bar text={<Text H5>CheckBox Element has either TRUE or FALSE value</Text>} />
        <Bar text={<Text D4>It has three layouts</Text>} />
        <Bar>
          <CheckBox iconLeft text='checkbox 1' disabled={this.state.DisableAll != 0} />
          <CheckBox iconRight text='checkbox 2' disabled={this.state.DisableAll != 0} />
          <CheckBox iconOnly text='checkbox 3' disabled={this.state.DisableAll != 0} />
        </Bar>
        <Bar text={<Text D4>Icon can be radio glyph</Text>} />
        <Bar>
          <CheckBox iconLeft boxType='radio' text='checkbox 1' disabled={this.state.DisableAll != 0} />
          <CheckBox iconRight boxType='radio' text='checkbox 2' disabled={this.state.DisableAll != 0} />
          <CheckBox iconOnly boxType='radio' text='checkbox 3' disabled={this.state.DisableAll != 0} />
        </Bar>
        <Bar text={<Text D4>Icon can be customized</Text>} />
        <Bar>
          <CheckBox iconLeft icons={['md-eye', 'md-eye-off']} text='checkbox 1' disabled={this.state.DisableAll != 0} />
          <CheckBox iconRight icons={['md-man', 'md-woman']} text='checkbox 2' disabled={this.state.DisableAll != 0} />
          <CheckBox iconOnly icons={['logo-android', 'logo-apple']} text='checkbox 3' disabled={this.state.DisableAll != 0} />
        </Bar>
      </Screen>
    )
  }
}
