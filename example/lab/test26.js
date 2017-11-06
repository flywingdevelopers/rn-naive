/**
* setTimeout Test
* Kevin Lee 02 Nov 2017
**/

import React from 'react'
import { Screen, Text } from '../rn-naive'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      timeout1: false,
      timeout2: false,
    }
  }
  componentDidMount() {
    this.timer1 = setTimeout(
      ()=>{this.setState({timeout1:true})},
      5000
    )
    this.timer2 = setTimeout(
      ()=>{this.setState({timeout2:true})},
      10000
    )
  }
  render() {
    if (this.state.timeout1 && this.state.timeout2)
      return(<Text>All Timers reached</Text>)
    if (this.state.timeout1)
      return(<Text>Timer 1 reached</Text>)
    return(
      <Screen>
        <Text>
          {
            (this.state.timeout1)?
              "Timer 1 reached"
              :
              "Waiting Timer 1"
          }
        </Text>
        <Text>
          {
            (this.state.timeout2)?
              "Timer 2 reached"
              :
              "Waiting Timer 2"
          }
        </Text>
      </Screen>
    )
  }
}
