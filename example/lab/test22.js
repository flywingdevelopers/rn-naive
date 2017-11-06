/**
* <TextInput> data awareness
* Kevin Lee 16 Oct 2017
**/

import React from 'react'
import { TextInput, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Screen, Block } from '../rn-naive'

class MyInput extends React.Component {
  oconv=(text)=>{
    return '#[]#'+text
  }
  iconv=(text)=>{
    return text.substring(4)
  }
  constructor(props) {
    super(props)
    let text = this.oconv(props.value)
    let editing = false
    this.state={text, editing}
  }
  uponChangeText=(text)=>{
    this.setState({text})
    console.log('uponChangeText('+text+')')
  }
  uponEndEditing=()=>{
    console.log('uponEndEditing')
    let value = this.iconv(this.state.text)
    if (this.onValueChange) {
      this.onValueChange.call(this, value)
      console.log('done onValueChange')
    }
  }
  uponFocus=()=>{
    this.setState({text:this.iconv(this.oconv(this.props.value)), editing:true})
    console.log('uponFocus')
  }
  uponBlur=()=>{
    this.setState({text:this.oconv(this.state.text), editing:false})
    console.log('uponBlur')
  }
  render() {
    let {
      value,
      onValueChange,
      ...rest
    } = this.props
    this.onValueChange = onValueChange
    value = (this.state.editing)?
      this.state.text
      :
      this.oconv(value)
      console.log('render.value='+value)
    return(
      <TextInput
        value={value}
        onChangeText={this.uponChangeText}
        onFocus={this.uponFocus}
        onBlur={this.uponBlur}
        onEndEditing={this.uponEndEditing}
        {...rest}
      />
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input1: 'Hello World 1',
      input2: 'Hello World 2',
      input3: 'Hello World 3',
      input4: 'Hello World 4',
    }
  }
  render() {
    return(
      <Screen scrollable>
          <Text>0. This is a bare TextInput</Text>
          <TextInput />
          <Text>1. Give it a value tag, then user cannot modify the content</Text>
          <TextInput value={this.state.input1}/>

          <Text>2. With onChangeText, value can be stored</Text>
          <TextInput onChangeText={(input2)=>this.setState({input2, input4:input2+this.state.input3})} />

          <Text>3. value + onChangeText => has default value, user editable</Text>
          <TextInput value={this.state.input3} onChangeText={(input3)=>this.setState({input3, input4:this.state.input2+input3})} />

          <Text>4. Data awareness: input4 = input2 + input3, except initially</Text>
          <TextInput value={this.state.input4} onChangeText={(input4)=>this.setState({input4})} />

          <Text>5. Data awareness: input5 is input4 but can edit independently</Text>
          <MyInput value={this.state.input4} onValueChange={(input4)=>this.setState({input4})} />

          <Text>{JSON.stringify(this.state)}</Text>
      </Screen>
    )
  }
}
