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
  iconv=(text)=>{
    /* convert text to number */
    try {
      number = Number(eval(String(text).replace(/,/g,'').replace(/\b0*((\d+\.\d+|\d+))\b/g, "$1")).toFixed(this.decimal))
    } catch(err) {
      number = 0
    }
    return number
  }
  oconv=(number)=>{
    /* convert number to text */
    let result = (typeof number === 'undefined' || (number == 0 && this.zeroBlank))?
      ''
      :
      this.inf.format(number, this.decimal)
    return result
  }
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
    this.inf = new Intl.NumberFormat(locale, {
      maximumFractionDigits: this.decimal,
      minimumFractionDigits: this.decimal
    })
    if (typeof value === 'undefined')
      value = BaseStyle.NumberInput.value
    /* avatar is the value to show on screen */
    this.state = {
      avatar:this.oconv(value),
      value,
      editing: false,
    }
  }
  getNewText=(txt)=>{
    /* call on each onChangeText to validate character input */
    let avatar = ''
    let numbers = '0123456789.+-*/,'
    for (var i = 0; i <= txt.length; i++) {
      if (numbers.indexOf(txt[i]) > -1) {
        avatar = avatar + txt[i]
      }
    }
    this.setState({avatar})
    return avatar
  }
  getFinalValue=(avatar)=> {
    /* call by EndEditing to obtain final value */
    let value = this.iconv(avatar)
    this.setState({avatar:String(value), value})
    return value
  }
  uponFocus=()=>{
    value = (typeof this.props.value === 'undefined')?
      this.state.value
      :
      this.props.value
    this.setState({
      avatar:String(this.iconv(this.oconv(value))),
      value,
      editing:true,
    })
    if (this.onFocus) {
      this.onFocus.call(this)
    }
  }
  uponBlur=()=>{
    this.setState({
      avatar:this.oconv(this.state.avatar),
      value:this.iconv(this.oconv(this.state.avatar)),
      editing:false,
    })
    if (this.onBlur) {
      this.onBlur.call(this)
    }
  }
  render() {
    let {
    // Appears as Data Input
      underline,
    // Theme and Style
      theme, style, textStyle,
    // number specification
      value,
      locale, decimal,
      zeroBlank, blankZero,
    // action
      disabled,
    // replaced hooks
      onFocus, onBlur,
    // reminders
      ...rest
    } = this.props
    this.onFocus = onFocus
    this.onBlur = onBlur
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
    if (typeof value === 'undefined')
      value = this.state.value
    avatar = (this.state.editing)?
      this.state.avatar
      :
      this.oconv(value)
    return(<Input
      theme={theme}
      disabled={disabled}
      underline={underline}
      style={textStyle}
      selectTextOnFocus={true}
      getNewText={this.getNewText}
      getFinalValue={this.getFinalValue}
      onFocus={this.uponFocus}
      onBlur={this.uponBlur}
      value={avatar}
      keyboardType={'numeric'}
      {...rest}
    />)
  }
}

NumberInput.propTypes = {
  locale: PropTypes.string,
  decimal: PropTypes.number,
  value: PropTypes.number,
  viewStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
}
