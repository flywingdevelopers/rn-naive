/**
* <Content> Test
* Kevin Lee 7 Sept 2017
**/

import React from 'react'
import Naive from 'rn-naive'

export default class App extends React.Component {
  render() {
    inputs = []
    for (let i=1; i<20; i++) {
      inputs.push(<Naive.DataBar text={i} input={<Naive.Input underline/>} key={i} />)
    }
    ins = []
    for (let i=1; i<20; i++) {
      ins.push(<Naive.DataBar text={i} input={<Naive.Input style={BaseStyle.Input.style}/>} key={i} />)
    }
    return(
      <Naive.Screen title={<Naive.Text H4 color='#eee'>{'<'}Bar{'>'}/{'<'}Block{'>'} Control Test</Naive.Text>}>
        <Naive.Block style={{flex:6, flexDirection:'row', borderWidth:1, margin:4}} scrollable={false}>
          <Naive.Block style={{flex:1, borderWidth:1, borderColor:'red', borderRadius:8, margin:4}} scrollable={false}>{ inputs }</Naive.Block>
          <Naive.Block style={{flex:1, borderWidth:1, borderColor:'red', borderRadius:8, margin:4}} scrollable={true}>{ ins }</Naive.Block>
        </Naive.Block>
        <Naive.Block
          scrollable={true}
          style={{
            flex:6,
            flexWrap: 'wrap',
            alignItems: 'stretch',
            borderWidth:1,
            borderColor:'red',
            borderRadius:8,
            margin:4}}
        >
          { inputs }
        </Naive.Block>
      </Naive.Screen>
    )
  }
}
