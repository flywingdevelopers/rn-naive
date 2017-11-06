import React from 'react'
import { Screen, Block, Bar, Text } from '../rn-naive'

export default class App extends React.Component {
  render() {
    return (
      <Screen scrollable style={{borderWidth:1, margin:8, borderRadius:2}}>
        <Bar title='Bars in Block' />
        <Block lines={4} style={{borderWidth:1, margin:4}}>
          <Bar style={{borderWidth:1, margin:4}}>
            <Text>Bar 1</Text>
          </Bar>
          <Bar style={{borderWidth:1, margin:4}}>
            <Text>Bar 2</Text>
          </Bar>
        </Block>
        <Bar title='Bocks in Bar' />
        <Bar lines={4} style={{borderWidth:1, margin:4}}>
          <Block style={{borderWidth:1, margin:4}}>
            <Text>Block 1</Text>
          </Block>
          <Block style={{borderWidth:1, margin:4}}>
            <Text>Block 2</Text>
          </Block>
        </Bar>
        <Bar title='Blocks in Bar with flex:1' />
        <Bar lines={4} style={{borderWidth:1, margin:4}}>
          <Block style={{flex:1, borderWidth:1, margin:4}}>
            <Text>Block 1</Text>
          </Block>
          <Block style={{flex:1, borderWidth:1, margin:4}}>
            <Text>Block 2</Text>
          </Block>
        </Bar>
        <Bar title='Bars in Bar' />
        <Bar lines={4} style={{borderWidth:1, margin:4}}>
          <Bar style={{borderWidth:1, margin:4}}>
            <Text>Bar 1</Text>
          </Bar>
          <Bar style={{borderWidth:1, margin:4}}>
            <Text>Bar 2</Text>
          </Bar>
        </Bar>
        <Bar title='Blocks in Block' />
        <Block lines={4} style={{borderWidth:1, margin:4}}>
          <Block style={{borderWidth:1, margin:4}}>
            <Text>Block 1</Text>
          </Block>
          <Block style={{borderWidth:1, margin:4}}>
            <Text>Block 2</Text>
          </Block>
        </Block>
      </Screen>
    )
  }
}
