/**
 * <Icon>
 * Kevin Lee 18 Aug 2017
**/

import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    ViewPropTypes,
    TextStylePropTypes,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import BaseStyle from './basestyle'

export default class Icon extends React.Component {
  iconAction=()=>{
    if (this.action) {
      this.action.call(this, this.value)
    }
  }
  iconElement(source, name, overlay, overlayStyle) {
    let element = null
    let style = StyleSheet.flatten(this.style)
    style = [
      style,
      overlay && { position:'absolute', left:0, right:0, bottom:0, top:0 },
      overlay && overlayStyle,
    ]

    if (source) {
      if (this.size) style = [
        style,
        {
          height:this.size,
          width:this.size,
        },
      ]
      element = <Image
        source={source}
        style={style}
      />
    } else {
      if (name) {
        switch (this.iconSet) {
          case 'material':
            element = <MaterialIcon
              name={name}
              size={this.size}
              color={this.color}
              style={style}
            />
            break;
          default:
            element = <IonIcon
              name={name}
              size={this.size}
              color={this.color}
              style={style}
            />
        }
      } else {
        if (!overlay) {
          element = <IonIcon
            name='ios-square-outline'
            size={this.size}
            color='transparent'
            style={style}
          />
        }
      }
    }
    return element
  }
  render() {
    let {
    // specify source if icon is <Image>
      source,
    // otherwise give name of <Icon>
      name,
    // overlay image/icon
      overlaySource, overlay, overlayName, overlayStyle,
    // can specify an icon set 'ion' or 'material'
      iconSet,
    // view only applicable if action exist
      view,
    // theme and style
      theme,
    // common attributes
      iconStyle, style,
      color,
      size,
    // avatar make it circled and wrapped
      avatar,
    // if it has action, wrapped in <Touch...>
      action, value, effect, disabled,
      ...rest
    } = this.props
    overlay = overlay || overlayName
    this.iconSet = iconSet || (theme && theme.Icon && theme.Icon.iconSet) || BaseStyle.Icon.iconSet
    this.size = size || (theme && theme.Icon && theme.Icon.size) || BaseStyle.Icon.size
    this.color = color || (theme && theme.Icon && theme.Icon.color) || BaseStyle.Icon.color
    this.style = (source)? {} : (style || iconStyle)
    if (avatar) {
      this.style = [
        StyleSheet.flatten(style),
        {
          borderRadius:size/2,
          borderWidth:(theme && theme.Icon && theme.Icon.avatarBorder) || BaseStyle.Icon.avatarBorder,
          borderColor:(theme && theme.Icon && theme.Icon.avatarBorderColor) || BaseStyle.Icon.avatarBorderColor,
        },
      ]
    }
    this.style = [
      BaseStyle.Icon.style,
      theme && theme.Icon && theme.Icon.style,
      style,
      iconStyle,
    ]
    let element = this.iconElement(source, name, false)
    let overlayElement = this.iconElement(overlaySource, overlay, true, overlayStyle)
    if (overlayElement) {
      element = <View style={{height:this.size, width:this.size}}>
        {element}
        {overlayElement}
      </View>
    }
    effect= effect || (theme && theme.Icon && theme.Icon.effect) || BaseStyle.Icon.effect
    if (disabled) {
      color = (theme && theme.Input && theme.Input.disabled.color) || BaseStyle.Input.disabled.color
      effect = 'none'
    }
    view = [
      BaseStyle.Icon.view,
      theme && theme.Icon && theme.Icon.view,
      view,
    ]
    if (action) {
      this.action = (!disabled) && action
      this.value = value
      if (source) view={}
      switch (effect) {
        case 'highlight':
          element = <TouchableHighlight
            style={view}
            onPress={this.iconAction}
            {...rest}>
            {element}
          </TouchableHighlight>
          break
        case 'opacity':
          element = <TouchableOpacity
            style={view}
            onPress={this.iconAction}
            {...rest}>
            {element}
          </TouchableOpacity>
          break
        case 'none':
          element = <TouchableOpacity activeOpacity={1}
            style={view}
            onPress={this.iconAction}
            {...rest}>
              {element}
            </TouchableOpacity>
          break
      }
    }
    return element
  }
}

Icon.propTypes = {
  iconSet: PropTypes.oneOf(['ion', 'material']),
  view: ViewPropTypes.style,
  iconStyle: PropTypes.any,
  size: PropTypes.number,
  effect: PropTypes.oneOf(['highlight', 'opacity', 'none']),
}
