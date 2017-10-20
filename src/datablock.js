/**
 * <DataBlock view|style={} textViewStyle={} textStyle={} inputStyle={} />
*
 * +---------------------+
 * |  Text               |
 * +---------------------+
 * | ___________________ +
 * +---------------------+
 *
 * Kevin Lee 16 Aug 2017
**/

import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Device from './device'
import BaseStyle from './basestyle'
import Text from './text'

export default class DataBlock extends React.Component {
  themeElement(element) {
    return (typeof this.props.theme === 'undefined')?
      element
      :
      React.cloneElement(element, {theme:this.props.theme})
  }
  render() {
    let {
    // Occupy x lines on screen
      lines,
    // theme and style
      theme,
      view, style,
      textView,
      titleView,
      labelView,
      inputView,
    // text element and style
      text, textStyle,
      title, titleStyle,
    // label element (in place of text)
      label,
    // input tlement and style
      input,
      ...rest
    } = this.props
    // lines = lines || BaseStyle.DataBlock.lines
    title = title || text
    view = StyleSheet.flatten([
      BaseStyle.DataBlock.view,
      theme && theme.DataBlock && theme.DataBlock.view,
      style,
      view,
    ])
    if (!view.hasOwnProperty('flex') || typeof lines !== 'undefined') {
      lines = lines || BaseStyle.Bar.line
      view = [
        view,
        { height:
          (Device.height
          - (( theme && theme.Default && theme.Default.ScreenHeightOffset)
            || BaseStyle.Default.screenHeightOffset))
          * lines
          / (( theme && theme.Screen && theme.Screen.lines)
            || BaseStyle.Screen.lines)
        },
      ]
    }
    titleView = [
      BaseStyle.DataBlock.titleView,
      theme && theme.DataBlock && theme.DataBlock.titleView,
      textView,
      titleView,
    ]
    if (label) {
      labelView = [
        BaseStyle.DataBlock.labelView,
        theme && theme.DataBlock && theme.DataBlock.labelView,
        labelView,
      ]
    }
    inputView = [
      BaseStyle.DataBlock.inputView,
      theme && theme.DataBlock && theme.DataBlock.inputView,
      inputView,
    ]
    titleStyle = [
      BaseStyle.DataBlock.title,
      theme && theme.DataBlock && theme.DataBlock.title,
      textStyle,
      titleStyle,
    ]
    labelOrText = (label)?
      <View style={labelView}>
        {this.themeElement(label)}
      </View>
      :
      <View style={titleView}>
        <Text theme={theme} style={titleStyle}>{title}</Text>
      </View>
    return (
      <View style={view} {...rest}>
        {labelOrText}
        <View style={inputView}>
          {this.themeElement(input)}
        </View>
      </View>
    )
  }
}

DataBlock.propTypes = {
  lines: PropTypes.number,
  barStyle: ViewPropTypes.style,
  textStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  textView: ViewPropTypes.style,
  titleView: ViewPropTypes.style,
  inputView: ViewPropTypes.style,
  labelView: ViewPropTypes.style,
}
