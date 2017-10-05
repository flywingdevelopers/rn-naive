/**
* <Input> is <TextInput> with underlineColorAndroid transparent
* Kevin Lee 4 Sept 2017
**/

import React from 'react'
import { TextInput } from 'react-native'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state={value:props.value}
  }
  changeText=(txt)=>{
    let value = txt
    if (this.getNewText)
      value = this.getNewText.call(this, txt)
    if (this.onChangeText)
      this.onChangeText.call(this, value)
    this.setState({value})
  }
  endEditing=()=>{
    let value = this.state.value
    if (this.getFinalValue)
      value = this.getFinalValue.call(this, value)
    if (this.onEndEditing)
      this.onEndEditing.call(this, value)
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
      style,
    ]
    value = value || this.state.value
    this.onChangeText = onChangeText
    this.onEndEditing = onEndEditing || onValueChange || onChange || action
    this.getNewText = getNewText
    this.getFinalValue = getFinalValue
    return (
      <TextInput
        underlineColorAndroid='transparent'
        style={style}
        editable={!disabled}
        value={value}
        onChangeText={this.changeText}
        onEndEditing={this.endEditing}
        {...rest}
      />
    )
  }
}
