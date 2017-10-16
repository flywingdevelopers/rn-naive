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
      decimal, value, locale,
      zeroBlank, blankZero,
    } = props
    this.zeroBlank = zeroBlank || blankZero
    this.decimal = (typeof decimal === 'undefined')?
      BaseStyle.NumberInput.decimal
      :
      decimal
    this.value = (typeof value === 'undefined')?
      BaseStyle.NumberInput.value
      :
      value
    this.inf = new Intl.NumberFormat(locale, {
      maximumFractionDigits: this.decimal,
      minimumFractionDigits: this.decimal
    })
    this.state = {value:this.value}
  }
  textToNumber=(text)=>{
    try {
      value = Number(eval(String(text).replace(/,/g,'')).toFixed(this.decimal))
    } catch(err) {
      value = 0
    }
    return value
  }
  numberToText=(number)=>{
    return (number == 0 && this.zeroBlank)?
      ''
      :
      this.inf.format(number, this.decimal)
  }
  getNewText=(txt)=>{
    let text = ''
    let numbers = '0123456789.+-*/,'
    for (var i = 0; i <= txt.length; i++) {
      if (numbers.indexOf(txt[i]) > -1) {
        text = text + txt[i]
      }
    }
    console.log('getNewText('+txt+')=>'+text)
    this.setState({text})
    return text
  }
  getFinalValue=(txt)=> {
    let value = this.textToNumber(txt)
    let text = this.numberToText(value)
    this.setState({text, value})
    return value
  }
  displayValue=(value)=>{
    return this.numberToText(this.textToNumber(value))
  }
  render() {
    let {
    // Appears as Data Input
      underline,
    // Theme and Style
      theme, style, textStyle,
    // number specification
      locale, decimal, value,
      zeroBlank, blankZero,
    // action
      disabled,
      ...rest
    } = this.props
    this.zeroBlank = zeroBlank || blankZero
    if (!decimal)
      decimal = this.decimal
    if (locale) {
      this.inf = new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimal,
        minimumFractionDigits: decimal
      })
    }
    textStyle = [
      BaseStyle.NumberInput.text,
      theme && theme.Input && theme.Input.text,
      textStyle,
      style,
    ]
    return(
      <Input
        theme={theme}
        disabled={disabled}
        underline={underline}
        style={textStyle}
        selectTextOnFocus={true}
        getNewText={this.getNewText}
        getFinalValue={this.getFinalValue}
        displayValue={this.displayValue}
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
