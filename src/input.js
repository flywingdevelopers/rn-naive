/**
* <Input> is <TextInput> with underlineColorAndroid transparent
* Kevin Lee 4 Sept 2017
**/

import React from 'react'
import { TextInput } from 'react-native'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    value = (typeof props.value === 'undefined')?
      ''
      :
      props.value
    this.state={
      value,
      editing:false
    }
  }
  uponFocus=()=>{
    this.setState({editing:true})
  }
  uponBlur=()=>{
    this.setState({editing:false})
  }
  uponChangeText=(txt)=>{
    let value = txt
    if (this.getNewText)
      value = this.getNewText.call(this, txt)
    if (this.onChangeText)
      this.onChangeText.call(this, value)
    this.setState({value})
  }
  uponEndEditing=()=>{
    let value = (this.getFinalValue)?
      this.getFinalValue.call(this, this.state.value)
      :
      this.state.value
    if (this.onEndEditing)
      this.onEndEditing.call(this, value)
    this.setState({value})
  }
  render() {
    let {
      theme, style,
      underline,
      disabled,
      // replaced events
      onChangeText,
      onEndEditing,
      // Callback from inherited Component
      getNewText,
      getFinalValue,
      displayValue,
      // standard value
      value,
      // Standard events
      action, onValueChange, onChange,
      ...rest
    } = this.props
    style = [
      BaseStyle.Input.style,
      theme && theme.Input && theme.Input.style,
      underline && BaseStyle.Input.text,
      underline && BaseStyle.Input.underline,
      underline && theme && theme.Input && theme.Input.text,
      underline && theme && theme.Input && theme.Input.underline,
      disabled && BaseStyle.Input.disabled,
      disabled && theme && theme.Input && theme.Input.disabled,
      style,
    ]
    this.onChangeText = onChangeText
    this.onEndEditing = onEndEditing || onValueChange || onChange || action
    this.getNewText = getNewText
    this.getFinalValue = getFinalValue
    this.displayValue = displayValue
    if (typeof value === 'undefined' || this.state.editing)
      value = String(this.state.value)
    return (
      <TextInput
        underlineColorAndroid='transparent'
        style={style}
        editable={!disabled}
        value={value}
        onChangeText={this.uponChangeText}
        onEndEditing={this.uponEndEditing}
        onFocus={this.uponFocus}
        onBlue={this.uponBlur}
        {...rest}
      />
    )
  }
}
