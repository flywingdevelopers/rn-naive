/**
* <RadioBox> Control Test
* Kevin Lee 19 Sept 2017
**/

import React from 'react'
import { Screen, Bar, CheckBox, Text, RadioBox } from 'rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DisableAll: false,
      USA: '',
      JAPAN: '',
      BOY: '',
      GIRL: '',
    }
  }
  render() {
    return (
      <Screen lines={30} style={{margin:2, padding:4, borderWidth:2, borderRadius:4}}>
        <Bar
          title={<Text H3 color='#ddd'>{'<'}RadioBox{'>'} Control Test</Text>}
          left={<CheckBox iconOnly
            style={{alignItems:'flex-start'}}
            iconSize={20}
            iconColor='#ddd'
            icons={['md-eye-off', 'md-eye']}
            value={this.state.DisableAll}
            onValueChange={(DisableAll)=>this.setState({DisableAll})}
          />}
        />
        <Bar text={<Text H5>RadioBox Element carries one value among choices</Text>} />
        <Bar text={<Text D3>It has two layouts</Text>} />
        <Bar text={<Text D5>Icon on the Left (default)</Text>} />
        <RadioBox
          items={['Batman', 'Superman', 'Iron Man']}
          disabled={this.state.DisableAll}
          value={this.state.USA}
          onValueChange={(USA)=>this.setState({USA})}
        />
        <Bar right={<Text D5>Greatest hero is {this.state.USA}</Text>} />
        <Bar text={<Text D5>Icon on the right and use checkbox</Text>} />
        <RadioBox iconRight boxType='box'
          items={['Ultraman', 'Kamen Rider', 'Mazinger']}
          disabled={this.state.DisableAll}
          value={this.state.JAPAN}
          onValueChange={(JAPAN)=>this.setState({JAPAN})}
        />
        <Bar right={<Text D5>Best warrior is {this.state.JAPAN}</Text>} />
        <Bar text={<Text D3>Choices are wrapped</Text>} />
        <RadioBox
          items={[
            'Albert', 'Baron', 'Calvin', 'David', 'Eric',
            'Frank', 'Gary', 'Harris', 'Iron','Joseph',
            'Kent', 'Lawrence',
          ]}
          disabled={this.state.DisableAll}
          value={this.state.BOY}
          onValueChange={(BOY)=>this.setState({BOY})}
        />
        <Bar right={<Text D5>Nice boy is {this.state.BOY}</Text>} />
        <Bar text={<Text D3>Choices can be single each line</Text>} />
        <RadioBox single
          items={[
            'Alice', 'Belle', 'Carol', 'Dora', 'Elaine',
          ]}
          disabled={this.state.DisableAll}
          value={this.state.GIRL}
          onValueChange={(GIRL)=>this.setState({GIRL})}
        />
        <Bar right={<Text D5>Good girl is {this.state.GIRL}</Text>} />
      </Screen>
    )
  }
}
