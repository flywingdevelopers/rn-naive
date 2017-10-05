/*
 * CheckBox is a custom implementation of Button
 * So that,
 *  Icon is checked/unchecked Checkbox (or radiobox)
 *  "checked" is true or false
 *
 * Kevin Lee 16 Aug 2017
 */

import React, { Component } from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Button from './button'

export default class CheckBox extends React.Component {
  getNewValue=()=>{
    let value = !this.checked
    this.setState({value})
    return value
  }
  constructor() {
    super()
    this.state = {value:false}
  }
  render() {
    let {
    // whether the value is checked (consumed in render(), not pass along)
      checked, value,
    // text value of the element
      text,
    // Element box type (checkbox or radiobox)
      boxType, icons,
    // Element layout (IconLeft, IconRight or iconOnly)
      layout, iconLeft, iconRight, iconOnly,
    // Element style
      theme,
      view, style,
      iconView, iconStyle,
      textView, textStyle,
      iconSize,
    // Element Action
      effect,
      disabled,
      ...rest
    } = this.props
    if (!icons) {
      if (!boxType) boxType = BaseStyle.CheckBox.boxType
      switch (boxType) {
        case 'box':
          icons = BaseStyle.CheckBox.boxIcons
          break
        case 'radio':
          icons = BaseStyle.CheckBox.radioIcons
          break
      }
    }
    if (typeof checked === 'undefined' && typeof value === 'undefined')
      this.checked = this.state.value
    else
      this.checked = checked || value
    icon = this.checked? icons[1] : icons[0]
    if (!effect) effect = BaseStyle.CheckBox.effect
    if (iconLeft) layout = 'iconLeft'
    if (iconRight) layout = 'iconRight'
    if (iconOnly) layout = 'iconOnly'
    if (!layout) layout = BaseStyle.CheckBox.layout
    switch (layout) {
      case 'iconLeft':
        DefaultIconViewStyle =
          (theme && theme.CheckBox && theme.CheckBox.iconViewLeft)
          || BaseStyle.CheckBox.iconViewLeft
        DefaultTextViewStyle =
          (theme && theme.CheckBox && theme.CheckBox.textViewLeft)
          BaseStyle.CheckBox.textViewLeft
        break
      case 'iconRight':
        DefaultIconViewStyle =
          (theme && theme.CheckBox && theme.CheckBox.iconViewRight)
          || BaseStyle.CheckBox.iconViewRight
        DefaultTextViewStyle =
          (theme && theme.CheckBox && theme.CheckBox.textViewRight)
          || BaseStyle.CheckBox.textViewRight
        break
      case 'iconOnly':
        DefaultIconViewStyle =
          (theme && theme.CheckBox && theme.CheckBox.iconViewOnly)
          || BaseStyle.CheckBox.iconViewOnly
        DefaultTextViewStyle = {}
        break;
    }
    style = [
      BaseStyle.CheckBox.view,
      theme && theme.CheckBox.view,
      style, view,
    ]
    iconView = [
      DefaultIconViewStyle,
      iconView,
    ]
    textView = [
      DefaultTextViewStyle,
      textView,
    ]
    iconStyle = [
      BaseStyle.CheckBox.iconStyle,
      theme && theme.CheckBox && theme.CheckBox.iconStyle,
      iconStyle,
    ]
    textStyle = [
      BaseStyle.CheckBox.textStyle,
      theme && theme.CheckBox && theme.CheckBox.textStyle,
      textStyle,
    ]
    iconSize = iconSize
      || (theme && theme.CheckBox && theme.CheckBox.iconSize)
      || BaseStyle.CheckBox.iconSize
    return (
      <Button
        icon={icon}
        text={text}
        effect={effect}
        layout={layout}
        style={style}
        iconView={iconView}
        textView={textView}
        iconStyle={iconStyle}
        textStyle={textStyle}
        iconSize={iconSize}
        disabled={disabled}
        value={this.checked}
        getNewValue={this.getNewValue}
        {...rest}
      />
    )
  }
}

CheckBox.propTypes = {
  boxType: PropTypes.oneOf(['box', 'radio']),
  layout: PropTypes.oneOf(['iconLeft', 'iconRight', 'iconOnly']),
  effect: PropTypes.oneOf(['highlight', 'opacity', 'none']),
  checked: PropTypes.bool,
  value: PropTypes.bool,
  text: PropTypes.string,
  iconView: ViewPropTypes.style,
  textView: ViewPropTypes.style,
  onValueChange: PropTypes.func,
  onSelectChange: PropTypes.func,
}
