/**
* <Button>
*
* +------------+
* | Text Only  |  <Button text='xxx' .../>
* +------------+
*
* +-----------+
* |    Icon   |   <Button icon='xxx' .../>
* +-----------+
*
* +------------------+
* |  [Icon]  Text    |  <Button icon='xxx' text='xxx' .../>
* +------------------+
*
* +------------+
* |   [icon]   |
* |   Text     |
* +------------+
*
* ( transparent ) <Button color='transparent' .../>
* ( borderless ) <Button border=0 .../>
*
* Kevin Lee 16 Aug 2017
**/

import React from 'react'
import {
  View,
  ViewPropTypes,
  TextStylePropTypes,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Icon from './icon'
import Text from './text'

export default class Button extends React.Component {
  buttonAction=()=>{
    if (!this.disabled) {
      let value = null
      if (this.getNewValue)
        value = this.getNewValue.call(this)
      else if (typeof this.value !== 'undefined')
        value = this.value
      let result = true
      if (this.action) {
        result = this.action.call(this, value)
        result = (typeof result === 'undefined') || result
      }
      if (result && this.onValueChange) {
        result = this.onValueChange.call(this, value)
        result = (typeof result === 'undefined') || result
      }
    }
  }
  getValue=()=>{ this.state.value }
  render() {
    let {
    // General styles
      theme,
    // button style
      view, style,
      textView,
      titleView,
      iconView,
    // icon and its style
      icon, iconSize, iconColor, iconSet, iconStyle,
      image, overlay,
    // text and its style
      text, textStyle,
      title, titleStyle,
    // color and border
      color, border,
    // layout
      layout,
      iconLeft, iconRight,
      iconTop, iconBottom,
      iconOnly, textOnly,
    // data awareness
      value, getNewValue,
      onValueChange, onChange,
    // action and effect
      action, effect, disabled,
      ...rest
    } = this.props
    text = text || title
    textView = textView || titleView
    textStyle = textStyle || titleStyle
    this.value = value || text
    this.getNewValue = getNewValue
    this.onValueChange = onValueChange || onChange
    this.action = action
    effect = effect
      || (theme && theme.Button && theme.Button.effect)
      || BaseStyle.Button.effect
    this.disabled = disabled
    if (disabled) effect = 'none'
    layout = layout
      || (iconLeft && 'iconLeft')
      || (iconRight && 'iconRight')
      || (iconTop && 'iconTop')
      || (iconBottom && 'iconBottom')
      || (iconOnly && 'iconOnly')
      || (textOnly && 'textOnly')
      || (theme && theme.Button && theme.Button.layout)
      || BaseStyle.Button.layout
    if (text && !(icon || image)) layout = 'textOnly'
    if ((icon || image) && !text) layout = 'iconOnly'
    if (textOnly && typeof text === 'undefined')
      text = textOnly
    if (iconOnly && typeof icon === 'undefined' && typeof image === 'undefined') {
      if (typeof iconOnly === 'string') {
        icon = iconOnly
      } else {
        image = iconOnly
      }
    }
    if (icon || image) {
      iconSize = iconSize
        || (theme && theme.Button && theme.Button.iconSize)
        || BaseStyle.Button.iconSize
      iconSet = iconSet
        || (theme && theme.Icon && theme.Icon.iconSet)
        || BaseStyle.Icon.iconSet
    }
    if (icon) {
      icon = <Icon
        disabled={disabled}
        name={icon}
        overlay={overlay}
        size={iconSize}
        color={iconColor}
        style={iconStyle}
        iconSet={iconSet}
      />
    } else {
      if (image) {
        icon = <Icon
          disabled={disabled}
          source={image}
          overlay={overlay}
          size={iconSize}
          color={iconColor}
          style={iconStyle}
          iconSet={iconSet}
        />
      } else {
        icon = <Icon
          disabled={disabled}
          name='ios-square-outline'
          size={iconSize}
          color='transparent'
          style={iconStyle}
          iconSet={iconSet}
        />
      }
    }
    textStyle = [
      BaseStyle.Button.text,
      theme && theme.Button && Button.Button.text,
      textStyle,
      (disabled) &&
        {color: (theme && theme.Input &&
                 theme.Input.disabled && theme.Input.disabled.color)
               || BaseStyle.Input.disabled.color}
    ]
    text = <Text style={textStyle}>{text}</Text>
    baseButtonStyle = {}
    baseIconView = {}
    baseTextView = {}
    switch (layout) {
      case 'iconOnly':
        baseIconView = {flex:1, alignItems:'center', justifyContent:'center'}
        break
      case 'textOnly':
        baseTextView = {flex:1, alignItems:'center', justifyContent:'center'}
        break
      case 'iconTop':
      case 'iconBottom':
        baseIconView = {flex:6}
        baseTextView = {flex:4, alignItems:'center'}
        break
      case 'iconRight':
      case 'iconLeft':
        baseIconView = {flex:3}
        baseTextView = {flex:7}
        break
    }
    switch (layout) {
      case "iconRight":
        baseTextView.alignItems = 'flex-end'
        break
      case "iconLeft":
        baseTextView.alignItems = 'flex-start'
        break
    }
    switch (layout) {
      case 'iconTop':
      case 'iconBottom':
      case 'iconOnly':
        baseButtonStyle = {
          flexDirection: 'column',
          minWidth:
            (Device.width
              - ((theme && theme.Default && theme.Default.screenWidthOffset)
                 || BaseStyle.Default.screenWidthOffset))
            / ((theme && theme.Default && theme.Default.buttonVCount)
               || BaseStyle.Default.buttonVCount),
          minHeight:
            (Device.width
              - ((theme && theme.Default && theme.Default.screenWidthOffset)
                  || BaseStyle.Default.screenWidthOffset))
            / ((theme && theme.Default && theme.Default.buttonVCount)
              || BaseStyle.Default.buttonVCount),
        }
        break
      case 'iconRight':
      case 'iconLeft':
      case 'textOnly':
        baseButtonStyle = {
          flexDirection: 'row',
          minWidth:
            (Device.width
              - ((theme && theme.Default && theme.Default.screenWidthOffset)
                 || BaseStyle.Default.screenWidthOffset))
            / ((theme && theme.Default && theme.Default.buttonHCountOverWidth)
                || BaseStyle.Default.buttonHCountOverWidth),
          minHeight:
            (Device.height
              - ((theme && theme.Default && theme.Default.screenHeightOffset)
                || BaseStyle.Default.screenHeightOffset))
            / ((theme && theme.Default && theme.Default.buttonHCountOverHeight)
              || BaseStyle.Default.buttonHCountOverHeight),
        }
        break
    }
    view = [
      BaseStyle.Button.view,
      color && {backgroundColor:color},
      (typeof border !== 'undefined') && { borderWidth:border},
      baseButtonStyle,
      theme && theme.Button && theme.Button.view,
      style,
      view,
    ]
    iconView = [
      BaseStyle.Button.iconView,
      baseIconView,
      theme && theme.Button && theme.Button.iconView,
      iconView,
    ]
    textView = [
      BaseStyle.Button.textView,
      baseTextView,
      theme && theme.Button && theme.Button.textView,
      textView,
    ]
    let iconBox = <View style={iconView} key='icon'>{icon}</View>
    let textBox = <View style={textView} key='text'>{text}</View>
    let ui = []
    switch (layout) {
      case 'iconTop':
      case 'iconLeft':
        ui = [iconBox, textBox]
        break
      case 'iconBottom':
      case 'iconRight':
        ui = [textBox, iconBox]
        break
      case 'iconOnly':
        ui = iconBox
        break
      case 'textOnly':
        ui = textBox
    }
    let button = null
    switch (effect) {
      case 'highlight':
        button = <TouchableHighlight
          onPress={this.buttonAction}
          style={view}
          {...rest}>
          {ui}
        </TouchableHighlight>
        break
      case 'opacity':
        button = <TouchableOpacity
          onPress={this.buttonAction}
          style={view}
          {...rest}>
          {ui}
        </TouchableOpacity>
        break
      default:
        button = <TouchableOpacity activeOpacity={1}
          onPress={this.buttonAction}
          style={view}
          {...rest}>
          {ui}
        </TouchableOpacity>
    }
    return button
  }
}

Button.propTypes = {
  color: PropTypes.string,
  border: PropTypes.number,
  view: ViewPropTypes.style,
  textView: ViewPropTypes.style,
  iconSet: PropTypes.oneOf(['ion', 'material']),
  iconView: ViewPropTypes.style,
  iconStyle: PropTypes.any,
  iconSize: PropTypes.number,
  effect: PropTypes.oneOf(['highlight', 'opacity', 'none']),
  layout: PropTypes.oneOf(['iconTop', 'iconBottom', 'iconLeft', 'iconRight', 'iconOnly', 'textOnly']),
}
