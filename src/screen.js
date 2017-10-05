/**
 *  <Screen ...>
 *      <...>
 *  </Screen>
 *
 * Kevin Lee 16 Aug 2017
**/

import React from 'react'
import { View, ScrollView, StyleSheet, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Device from './device'
import BaseStyle from './basestyle'
import Bar from './bar'

export default class Screen extends React.Component {
  themedchildren() {
    // pass theme to all children
    return React.Children.map(this.props.children, child=> {
      return (child.props.theme)? child : (typeof this.props.theme === 'undefined')?
          child :
          React.cloneElement(child, { theme:this.props.theme })
    })
  }
  render() {
    let {
    // theme and style
      theme,
      view, style,
      barView,
      titleView,
      textView,
      centerView,
      leftView,
      rightView,
      scrollView,
    // Set total number of lines of this screen
      lines,
    // Optional Title Bar, height based on physical height
      barLines,
    // Bar title (middle of the bar)
      title,
    // Bar text (left of the bar)
      text,
    // Bar left, center and right views
      center, centerPane,
      left, leftPane,
      right, rightPane,
    // Child element scrollable
      scrollable,
    // Screen is for hosting child elements
      children,
      ...rest
    } = this.props
    center = center || centerPane
    left = left || leftPane
    right = right || rightPane
    hasBar = title || center || left || right
    view = [
      BaseStyle.Screen.view,
      theme && theme.Screen && theme.Screen.view,
      view,
      style,
    ]
    barView = [
      BaseStyle.Screen.barView,
      theme && theme.Screen && theme.Screen.barView,
      barView,
    ]
    textView = [
      BaseStyle.Screen.textView,
      theme && theme.Screen && theme.Screen.textView,
      textView,
    ]
    titleView = [
      BaseStyle.Screen.titleView,
      theme && theme.Screen && theme.Screen.titleView,
      titleView,
    ]
    rightView = [
      BaseStyle.Screen.rightView,
      theme && theme.Screen && theme.Screen.rightView,
      rightView,
    ]
    leftView = [
      BaseStyle.Screen.leftView,
      theme && theme.Screen && theme.Screen.leftView,
      leftView,
    ]
    centerView = [
      BaseStyle.Screen.centerView,
      theme && theme.Screen && theme.Screen.centerView,
      centerView,
    ]
    scrollView = [
      BaseStyle.Screen.scrollView,
      theme && theme.Screen && theme.Screen.scrollView,
      scrollView,
    ]
    if (lines)
      BaseStyle.Screen.lines = lines
    if (!StyleSheet.flatten(view).hasOwnProperty('flex')) {
      view.push({
        flex: -1,
        height:
          Device.height
          - ((theme && theme.Default && theme.Default.screenHeightOffset)
              || BaseStyle.Default.screenHeightOffset),
        width:
          Device.width
          - ((theme && theme.Default && theme.Default.screenWidthOffset)
              || BaseStyle.Default.ScreenWidthOffset),
      })
    }
    bar = (hasBar)?
      <Bar
        center={center}
        centerView={centerView}
        left ={left}
        leftView={leftView}
        right={right}
        rightView={rightView}
        title={title}
        titleView={titleView}
        text={text}
        textView={textView}
        lines={barLines}
        style={barView}
      /> : null
    if (children) {
      children = this.themedchildren()
      if (scrollable) {
        scrollView = [
          BaseStyle.Screen.scrollView,
          theme && theme.Screen && theme.Screen.scrollView,
          scrollView,
        ]
        children = <ScrollView {...scrollView}>
          { children}
        </ScrollView>
      }
    }
    return (
      <View style={view} {...rest}>
        { bar }
        { children }
      </View>
    )
  }
}

Screen.propTypes = {
    theme: PropTypes.object,
    view: ViewPropTypes.style,
    barView: ViewPropTypes.style,
    titleView: ViewPropTypes.style,
    textView: ViewPropTypes.style,
    rightView: ViewPropTypes.style,
    leftView: ViewPropTypes.style,
    centerView: ViewPropTypes.style,
    lines: PropTypes.number,
    barLines: PropTypes.number,
    scrollable: PropTypes.bool,
}
