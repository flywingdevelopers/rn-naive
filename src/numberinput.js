/**
* NumberInput Component
* Kevin Lee 17 March 2017
*
* Usage:
*   <NumberInput
*     locale={string:'en-US'}
*     decimal={number:2}
*     value={number}
*   />
**/

import 'intl';
import 'intl/locale-data/jsonp/en.js';
import React, { Component } from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Input from './input'

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props)
    let {
      decimal, value, locale
    } = props
    if (typeof decimal === 'undefined')
      decimal = BaseStyle.NumberInput.decimal
    if (typeof value === 'undefined')
      value = BaseStyle.NumberInput.value
    this.inf = new Intl.NumberFormat(locale, {
      maximumFractionDigits: decimal,
      minimumFractionDigits: decimal
    })
    this.state = {
      decimal: decimal,
      text: String(value),
      value: this.textToNumber(value, decimal),
    }
  }
  textToNumber=(text, decimal)=>{
    try {
      value = Number(eval(String(text).replace(/,/g,'')).toFixed(decimal))
    } catch(err) {
      value = 0
    }
    return value
  }
  numberToText=(number, decimal)=>{
    return this.inf.format(number, decimal)
  }
  getNewText=(txt)=>{
    let text = ''
    let numbers = '0123456789.+-*/,'
    for (var i = 0; i <= txt.length; i++) {
      if (numbers.indexOf(txt[i]) > -1) {
        text = text + txt[i]
      }
    }
    this.setState({text})
    return text
  }
  getFinalValue=()=> {
    let value = this.textToNumber(this.state.text, this.state.decimal)
    let text = this.numberToText(value)
    this.setState({text, value})
    return value
  }
  render() {
    let {
    // Appears as Data Input
      underline,
    // Theme and Style
      theme, style, textStyle,
    // number specification
      locale, decimal, value,
    // action
      disabled,
      ...rest
    } = this.props
    textStyle = [
      BaseStyle.NumberInput.text,
      theme && theme.Input && theme.Input.text,
      textStyle,
      style,
    ]
    return (
      <Input
        theme={theme}
        disabled={disabled}
        underline={underline}
        style={textStyle}
        selectTextOnFocus={true}
        getNewText={this.getNewText}
        getFinalValue={this.getFinalValue}
        value={this.state.text}
        keyboardType={'numeric'}
        {...rest}
      />
    )
  }
}

NumberInput.propTypes = {
  locale: PropTypes.string,
  decimal: PropTypes.number,
  value: PropTypes.number,
  viewStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
}
