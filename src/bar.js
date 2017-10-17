/**
 * <Bar
 *      text='zzz' textView{}
 *      centerView|center={} centerView={}
 *      leftView|left={} leftView={}
 *      rightView|right={} rightView={}
 * />
 * Kevin Lee 16 Aug 2017
**/

import React from 'react'
import { View, Text, StyleSheet, ViewPropTypes, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import Device from './device'
import BaseStyle from './basestyle'

export default class Bar extends React.Component {
  themeElement(element) {
    return (typeof this.props.theme === 'undefined')?
      element
      :
      React.cloneElement(element, {theme:this.props.theme})
  }
  themedchildren() {
    // pass theme to all children
    return React.Children.map(this.props.children, child=> {
      return (child.props && child.props.theme)?
        child
        :
        this.themeElement(child)
    })
  }
  render() {
    let {
    // theme and style
      theme,
      view, style,
      titleView,
      textView,
      centerView,
      leftView,
      rightView,
      scrollView,
    // Height based on physical height
      lines,
    // A Bar is rich-formatted if it has title, center, left or right
      title, text,
      center, centerPane,
      left, leftPane,
      right, rightPane,
    // support child elements
      children,
    // Child element scrollable
      scrollable, scroll,
      ...rest
    } = this.props
    scrollable = scrollable || scroll
    center = center || centerPane
    left = left || leftPane
    right = right || rightPane
    view = StyleSheet.flatten([
      (title)?
        BaseStyle.Bar.alignedView
        :
        BaseStyle.Bar.plainView,
      (theme && theme.Bar)?
        (title)?
          theme.Bar.alignedView
          :
          theme.Bar.plainView
        :
        null,
      style,
      view,
    ])
    if (!view.hasOwnProperty('flex')) {
      lines = lines || BaseStyle.Bar.line
      view = [
        view,
        { height:
          (Device.height
          - (( theme && theme.Default && them.Default.ScreenHeightOffset)
            || BaseStyle.Default.screenHeightOffset))
          * lines
          / (( theme && theme.Screen && theme.Screen.lines)
            || BaseStyle.Screen.lines)
        },
      ]
    }
    titleView = [
      BaseStyle.Bar.titleView,
      theme && theme.Bar && theme.Bar.titleView,
      titleView,
    ]
    textView = [
      BaseStyle.Bar.textView,
      theme && theme.Bar && theme.Bar.textView,
      textView,
    ]
    leftView = [
      BaseStyle.Bar.leftView,
      theme && theme.Bar && theme.Bar.leftView,
      leftView,
    ]
    centerView = [
      BaseStyle.Bar.centerView,
      theme && theme.Bar && theme.Bar.centerView,
      centerView,
    ]
    if (center)
      center = <View style={centerView}>{this.themeElement(center)}{children}</View>
    else {
      if (title)
        center = <View style={centerView}><Text theme={theme} style={titleView}>{title}</Text></View>
    }
    if (left || center)
      left = <View style={leftView}>{this.themeElement(left)}</View>
    else {
      if (text)
        left = <View style={leftView}><Text theme={theme} style={textView}>{text}</Text></View>
      if (children)
        left = children
    }
    if (right || center) {
      rightView = [
        BaseStyle.Bar.rightView,
        theme && theme.Bar && theme.Bar.rightView,
        rightView,
      ]
      right = <View style={rightView}>{this.themeElement(right)}</View>
    }
    if (children) {
      children = this.themedchildren()
      if (scrollable) {
        scrollView = [
          BaseStyle.Bar.scrollView,
          theme && theme.Bar && theme.Bar.scrollView,
          scrollView,
        ]
        children = <ScrollView {...scrollView}>
          { children}
        </ScrollView>
      }
    }
    return (
      <View style={view} {...rest}>
        { left }
        { center }
        { right }
      </View>
    )
  }
}

Bar.propTypes = {
  theme: PropTypes.object,
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  leftPane: PropTypes.node,
  centerPane: PropTypes.node,
  rightPane: PropTypes.node,
  lines: PropTypes.number,
  view: ViewPropTypes.style,
  textView: ViewPropTypes.style,
  leftView: ViewPropTypes.style,
  centerView: ViewPropTypes.style,
  rightView: ViewPropTypes.style,
  scrollable: PropTypes.bool,
}
