/**
 * Implementation of Picker
 * Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle.js'

export default class ItemSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:''}
  }
  getNewValue=(value)=>{
    this.setState({value})
    if (this.onValueChange)
      this.onValueChange.call(this, value)
  }
  render() {
    let {
      // item values
      items,
      // Appear as Input Control
      underline,
      // Style of this control
      theme,
      view, style,
      // value of this control
      value, selectedValue,
      // date awareness
      onChange, onValueChange,
      disabled,
      ...rest
    } = this.props
    this.onValueChange = onChange || onValueChange
    selectedValue = selectedValue || value || this.state.value
    style = [
      BaseStyle.ItemSelect.style,
      theme && theme.ItemSelect && theme.ItemSelect.style,
      style,
    ]
    view = [
      BaseStyle.ItemSelect.view,
      theme && theme.ItemSelect && theme.ItemSelect.view,
      underline &&
        ((theme && theme.Input && theme.Input.Style) || BaseStyle.Input.style),
      underline &&
        ((theme && theme.Input && theme.Input.underline) || BaseStyle.Input.underline),
      view,
    ]
    return (
      <View style={view}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={this.getNewValue}
          style={style}
          enabled={!disabled}
          {...rest}
        >
          { items.map((itm)=>{
            if (typeof itm == 'object') {
              value = itm.value || itm.label || itm.text
              label = itm.label || itm.text  || itm.value
              style = itm.style
            } else {
              label = itm
              value = itm
              style = {}
            }
            return <Picker.Item label={label} value={value} style={style} key={value}/>
          })}
        </Picker>
      </View>
    )
  }
}

ItemSelect.propTypes = {
  items: PropTypes.array,
  value: PropTypes.any,
  selectedValue: PropTypes.string,
}
