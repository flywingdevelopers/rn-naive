/**
* <Input> is <TextInput> with underlineColorAndroid transparent
* Kevin Lee 4 Sept 2017
**/

import React from 'react'
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
 } from 'react-native'

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
    if (this.onFocus)
      this.onFocus.call(this)
  }
  uponBlur=()=>{
    this.setState({editing:false})
    if (this.onBlur)
      this.onBlur.call(this)
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
      underline, multiline,
      disabled, readonly,
      // replaced events
      onFocus,
      onBlur,
      onChangeText,
      onEndEditing,
      // Callback from inherited Component
      getNewText,
      getFinalValue,
      displayValue,
      // standard value
      value,
      // action
      action, onPress, effect,
      // Standard events
      onValueChange, onChange,
      ...rest
    } = this.props
    action = action || onPress
    effect = effect || BaseStyle.Input.effect
    style = [
      BaseStyle.Input.style,
      theme && theme.Input && theme.Input.style,
      (multiline)?
        (theme && theme.Input && theme.Input.multiline) || BaseStyle.Input.multiline
        :
        (theme && theme.Input && theme.Input.singleline) || BaseStyle.Input.singleline,
      underline && BaseStyle.Input.underline,
      underline && theme && theme.Input && theme.Input.underline,
      disabled && BaseStyle.Input.disabled,
      disabled && theme && theme.Input && theme.Input.disabled,
      readonly && BaseStyle.Input.readonly,
      readonly && theme && theme.Input && theme.Input.readonly,
      style,
    ]
    this.onFocus = onFocus
    this.onBlur = onBlur
    this.onChangeText = onChangeText
    this.onEndEditing = onEndEditing || onValueChange || onChange
    this.getNewText = getNewText
    this.getFinalValue = getFinalValue
    this.displayValue = displayValue
    if (typeof value === 'undefined' || this.state.editing)
      value = String(this.state.value)
    element = <TextInput
      underlineColorAndroid='transparent'
      multiline={multiline}
      style={style}
      multiline={multiline}
      editable={!disabled && !readonly}
      value={value}
      onChangeText={this.uponChangeText}
      onEndEditing={this.uponEndEditing}
      onFocus={this.uponFocus}
      onBlur={this.uponBlur}
      {...rest}
    />
    if (action) {
      switch (effect) {
        case 'highlight':
          element =
            <TouchableHighlight onLongPress={action}>
              {element}
            </TouchableHighlight>
            break
        case 'opacity':
          element =
            <TouchableOpacity onLongPress={action}>
              {element}
            </TouchableOpacity>
            break
        case 'none':
          element =
            <TouchableOpacity activeOpacity={1} onLongPress={action}>
              {element}
            </TouchableOpacity>
            break
      }
    }
    return element
  }
}
