/**
 * <IconList>
 * Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import {
  View,
  ViewPropTypes,
  TextStylePropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Icon from './icon'

export default class IconList extends React.Component {
  iconElement(iconEle, idx) {
    if (typeof iconEle !== 'object') iconEle = { name: iconEle }
    let {
      icon, name,
      value,
      iconSet, set,
      iconSize, size,
      iconColor, color,
      iconStyle, style,
      iconView, disabled,
      ...rest
    } = iconEle
    name = name || icon
    value = value || name || icon
    iconSet = iconSet || set || this.iconSet
    iconSize = iconSize || size || this.iconSize
    iconColor = iconColor || color || this.iconColor
    iconStyle = iconStyle || style || this.iconStyle
    iconView = iconView || this.iconView
    disabled = this.disabled || disabled
    icon = <Icon
      disabled = {disabled}
      name={name}
      value={value}
      iconSet={iconSet}
      size={iconSize}
      color={iconColor}
      style={iconStyle}
      {...this.rest}
      {...rest}
    />
    return (
      <View style={iconView} key={idx}>
        {icon}
      </View>
    )
  }
  render() {
    let {
    // icons specification array
      icons, items,
    // theme and style
      theme,
      view, style,
    // icon attributes
      iconSet, set,
      iconSize, size,
      iconColor, color,
      iconStyle,
      iconView,
    // layout
      wrap, wrapped,
    // Overall action of the list, call with icon.value or icon.name
      effect, disabled,
      ...rest
    } = this.props
    icons = icons || items
    wrap = wrap || wrapped
    view = [
      BaseStyle.IconList.view,
      theme && theme.IconList && theme.IconList.view,
      wrap && { flexWrap: 'wrap' },
      style,
      view,
    ]
    this.iconSet = iconSet || set
      || (theme && theme.IconList && theme.IconList.iconset)
      || BaseStyle.Icon.iconSet
    this.iconSize = iconSize || size
      || (theme && theme.IconList && theme.IconList.size)
      || BaseStyle.IconList.size
    this.iconColor = iconColor || color
      || (theme && theme.IconList && theme.IconList.color)
      || BaseStyle.IconList.color
    this.iconStyle = [
      BaseStyle.IconList.icon,
      theme && theme.IconList && theme.IconList.icon,
      iconStyle,
    ]
    this.iconView = [
      BaseStyle.IconList.iconView,
      theme && theme.IconList && theme.IconList.iconView,
      wrap && { flex: 0 },
      iconView,
    ]
    this.effect = effect
      || (theme && theme.IconList && theme.IconList.effect)
      || BaseStyle.IconList.effect
    this.disabled = disabled
    this.rest = rest
    return (
      <View style={view} {...rest}>
        { icons.map(this.iconElement, this) }
      </View>
    )
  }
}

IconList.propTypes = {
    view: ViewPropTypes.style,
    iconSet: PropTypes.oneOf(['ion', 'material']),
    iconSize: PropTypes.number,
    size: PropTypes.number,
    style: PropTypes.any,
    iconStyle: PropTypes.any,
    effect: PropTypes.oneOf(['highlight', 'opacity', 'none']),
}
