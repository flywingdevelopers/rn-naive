/**
 *  <Content viewStyle|style={} scrollable={true|false} scrollViewStyle={}>
 *      <...>
 *  </Content>
 *
 * Kevin Lee 16 Aug 2017
**/

import React from 'react'
import { View, StyleSheet, ViewPropTypes, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import Device from './device'
import BaseStyle from './basestyle'

export default class Block extends React.Component {
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
    // Occupy x lines on screen
      lines,
    // theme and style
      theme,
      view, style,
      scrollView,
    // Child element scrollable
      scrollable, scroll,
    // childs
      children,
      ...rest
    } = this.props
    if (typeof scrollable == 'undefined' && typeof scroll == 'undefined') {
      scrollable = BaseStyle.Block.scrollable
    } else {
      scrollable = scrollable || scroll
    }
    view = StyleSheet.flatten([
      BaseStyle.Block.view,
      theme && theme.Block && theme.Block.view,
      style,
      view,
    ])
    if (!view.hasOwnProperty('flex') || typeof lines !== 'undefined') {
      lines = lines || BaseStyle.Block.line
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
    if (scrollable) {
      scrollView = [
        BaseStyle.Block.scrollView,
        theme && theme.Block && theme.Block.scrollView,
        scrollView,
      ]
      thisChildren = <ScrollView {...scrollView}>
        {this.themedchildren()}
      </ScrollView>
    } else {
      thisChildren = this.themedchildren()
    }
    return(
      <View style={view} {...rest}>
        {thisChildren}
      </View>
    )
  }
}

Block.propTypes = {
    view: ViewPropTypes.style,
    scrollable: PropTypes.bool,
    scrollView: PropTypes.object,
    lines: PropTypes.number,
}
