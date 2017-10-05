/**
 *  Implementation of React-Native-DatePicker
 *  Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-native-datepicker'
import BaseStyle from './basestyle.js'

export default class DateSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  getNewValue=(value)=>{
    this.setState({value})
    if (this.onDateChange)
      this.onDateChange.call(this, value)
  }
  render() {
    let {
      // Element value
      date, value,
      // Element action
      onDateChange, onValueChange, onChange,
      // Element style
      theme, style,
      // Underline Element (align with TextInput Android underline)
      underline, disabled,
      // Date Format
      format,
      ...rest
    } = this.props
    date = date || value
    if (!date)
      date = this.state.value
    this.onDateChange = onDateChange || onChange || onValueChange
    styles = {}
    styles.dateIcon = [
      BaseStyle.DateSelect.dateIcon,
      theme && theme.DateSelect && theme.DateSelect.dateIcon,
      styles.dateIcon,
    ]
    styles.dateInput = [
      BaseStyle.Input.style,
      BaseStyle.DateSelect.dateInput,
      theme && theme.DateSelect && DateSelect.dateInput,
      styles.dateInput,
    ]
    styles.dateTouchBody = [
      BaseStyle.DateSelect.dateTouchBody,
      theme && theme.DateSelect && theme.DateSelect.dateTouchBody,
      styles.dateTouchBody,
    ]
    styles.dateTouch = [
      BaseStyle.DateSelect.dateTouch,
      theme && theme.DateSelect && theme.DateSelect.dateTouch,
      styles.dateTouch,
      style,
    ]
    styles.disabled = [
      BaseStyle.DateSelect.disabled,
      theme && theme.DateSelect && theme.DateSelect.disabled,
      styles.disabled,
    ]
    if (disabled) {
      styles.dateText = [
        styles.dateText,
        BaseStyle.Input.disabled,
        theme && theme.Input && theme.Input.disabled,
      ]
    }
    if (underline) {
      styles.dateInput = [
        styles.dateInput,
        BaseStyle.Input.underline,
        theme && theme.Input && theme.Input.underline,
      ]
    }
    format = format
      || (theme && theme.DateSelect && theme.DateSelect.format)
      || BaseStyle.DateSelect.format
    return (
      <DatePicker
        date={date}
        onDateChange={this.getNewValue}
        format={format}
        style={styles.dateTouch}
        customStyles={styles}
        disabled={disabled}
        {...rest}
      />
    )
  }
}

DateSelect.propTypes = {
  format: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onDateChange: PropTypes.func,
  onValueChange: PropTypes.func,
}
