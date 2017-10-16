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
      number = Number(eval(String(text).replace(/,/g,'')).toFixed(this.decimal))
    } catch(err) {
      number = 0
    }
    console.log('iconv('+text+')=>'+number)
    return number
  }
  oconv=(number)=>{
    /* convert number to text */
    let result = (typeof number === 'undefined' || (number == 0 && this.zeroBlank))?
      ''
      :
      this.inf.format(number, this.decimal)
    console.log('oconv('+number+')=>'+result)
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
    console.log('getNewText('+txt+')=>'+avatar)
    return avatar
  }
  getFinalValue=(avatar)=> {
    /* call by EndEditing to obtain final value */
    let value = this.iconv(avatar)
    this.setState({avatar:String(value)})
    console.log('getFinalValue('+avatar+')=>'+value)
    return value
  }
  uponFocus=()=>{
    console.log('uponFocus()')
    this.setState({
      avatar:this.iconv(this.oconv(this.props.value)),
      editing:true,
    })
  }
  uponBlur=()=>{
    console.log('uponBlur()')
    this.setState({
      avatar:this.oconv(this.state.avatar),
      editing:false,
    })
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
    avatar = (this.state.editing)?
      this.state.avatar
      :
      this.oconv(value)
    return(
      <Input
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
