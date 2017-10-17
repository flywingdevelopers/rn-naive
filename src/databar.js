/**
 * <DataBar blockStyle|style={} textViewStyle={} textStyle={} inputStyle={} />
 *  +-----------+-------------------------+
 *  | Text      | _______________________ +
 *  +-----------+-------------------------+
 * Kevin Lee 16 Aug 2017
**/

import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Device from './device'
import BaseStyle from './basestyle'
import Text from './text'

export default class DataBar extends React.Component {
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
    // input element and style
      input,
    // ViewStyles
      ...rest
    } = this.props
    title = title || text
    view = StyleSheet.flatten([
      BaseStyle.DataBar.view,
      theme && theme.DataBar && theme.DataBar.view,
      style,
      view,
    ])
    if (!view.hasOwnProperty('flex')) {
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
      BaseStyle.DataBar.titleView,
      theme && theme.DataBar && theme.DataBar.titleView,
      textView,
      titleView,
    ]
    if (label) {
      labelView = [
        BaseStyle.DataBar.labelView,
        theme && theme.DataBar && theme.DataBar.labelView,
        labelView,
      ]
    }
    inputView = [
      BaseStyle.DataBar.inputView,
      theme && theme.DataBar && theme.DataBar.inputView,
      inputView,
    ]
    titleStyle = [
      BaseStyle.DataBar.title,
      theme && theme.DataBar && theme.DataBar.title,
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

DataBar.propTypes = {
  lines: PropTypes.number,
  view: ViewPropTypes.style,
  textStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  labelView: ViewPropTypes.style,
  textView: ViewPropTypes.style,
  inputView: ViewPropTypes.style,
}
