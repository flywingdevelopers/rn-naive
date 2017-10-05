/**
 * <ButtonList>
 * Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import {
  View,
  ViewPropTypes,
  TextStylePropTypes,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Button from './button'

export default class ButtonList extends React.Component {
  k = 0
  buttonElement(button) {
    this.k += 1
    if (typeof button !== 'object') {
      button = (this.textArray)? {text:button} : {icon:button}
    }
    let {
      icon,
      text,
      value,
      buttonView,
      textStyle,
      iconStyle,
      iconSize, iconSet,
      layout, effect, disabled,
      ...rest
    } = button
    value = value || text || icon
    buttonView = buttonView || this.buttonView
    textStyle = textStyle || this.textStyle
    iconStyle = iconStyle || this.iconStyle
    iconSize = iconSize || this.iconSize
    iconSet = iconSet || this.iconSet
    layout = layout || this.layout
    effect = effect || this.effect
    disabled = this.disabled || disabled
    return (
      <Button
        disabled={disabled}
        icon={icon}
        text={text}
        value={value}
        key={this.k}
        view={buttonView}
        textStyle={textStyle}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconSet={iconSet}
        layout={layout}
        effect={effect}
        {...this.rest}
        {...rest}
      />
    )
  }
  render() {
    let {
    // Height based on physical height
      lines,
    // buttons specification array
      items, buttons,
    // icons only List
      icons,
    // text only List
      texts,
    // General styles
      theme,
      view, style,
      buttonView,
      textStyle,
      iconStyle,
      iconSize,
      iconSet,
    // text and icon layout
      layout, wrap, wrapped,
    // action and effect
      effect, disabled,
      ...rest
    } = this.props
    buttons = buttons || items || icons
    wrap = wrap || wrapped
    this.textArray = false
    if (!buttons) {
      buttons = texts
      this.textArray = true
    }
    view = [
      BaseStyle.ButtonList.view,
      theme && theme.ButtonList && theme.ButtonList.view,
      wrap && { flexWrap: 'wrap' },
      lines && {
        flex: 0,
        height:
          (Device.height
          - ((theme && theme.Default && theme.Default.screenHeightOffset)
            || BaseStyle.Default.screenHeightOffset))
          * lines
          / ((theme && theme.Screen && theme.Screen.lines)
            || BaseStyle.Screen.lines)
      },
      style,
      view,
    ]
    this.buttonView = [
      BaseStyle.ButtonList.button,
      theme && theme.ButtonList && theme.ButtonList.button,
      wrap && { flex: 0, minHeight:20, minWidth:20 },
      buttonView,
    ]
    this.textStyle = [
      BaseStyle.ButtonList.textStyle,
      theme && theme.ButtonList && theme.ButtonList.textStyle,
      textStyle,
    ]
    this.iconStyle = [
      BaseStyle.ButtonList.iconStyle,
      theme && theme.ButtonList && theme.ButtonList.iconStyle,
      iconStyle,
    ]
    this.iconSize = iconSize
      || theme && theme.Button && theme.Button.iconSize
      || BaseStyle.Button.iconSize
    this.iconSet = iconSet
      || theme && theme.Icon && theme.Icon.IconSet
      || BaseStyle.Icon.iconSet
    this.layout = layout
      || theme && theme.Button && theme.Button.layout
      || BaseStyle.Button.layout
    this.effect = effect
      || theme && theme.Button && theme.Button.effect
      || BaseStyle.Button.effect
    this.disabled = disabled
    this.rest = rest
    return (
      <View style={view}>
        { buttons.map(this.buttonElement, this) }
      </View>
    )
  }
}

ButtonList.propTypes = {
  view: ViewPropTypes.style,
  buttonView: ViewPropTypes.style,
  iconSize: PropTypes.number,
  effect: PropTypes.oneOf(['highlight', 'opacity']),
  layout: PropTypes.oneOf(['iconTop', 'iconBottom', 'iconLeft', 'iconRight', 'iconOnly', 'textOnly']),
}
