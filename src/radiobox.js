/**
 *  RadioBox is custom implementation of buttons
 *  Such that,
 *      Icons are radiobox
 *      Value reflects the current selection
 *
 *  Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import { View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Button from './button'


export default class RadioBox extends React.Component {
  constructor(props) {
    super(props)
      let {
        items,
        value,
        ...rest
      } = props
      if (!value)
        // value = (typeof items[0] === 'object')?
          // (items[0].value)?items[0].value:items[0].text:
          // items[0]
        value = ''
      this.state={value}
    }
    render() {
      let {
      // Element items
        items,
      // Element box type (radiobox or checkbox)
        boxType,
      // Element layout (IconLeft or IconRight)
        layout, iconLeft, iconRight,
      // one option one row
        single,
      // Element style
        theme,
        view, style,
        buttonStyle,
        iconSize, iconColor,
        iconView, iconStyle,
        textView, textStyle,
      // Element action
        effect, disabled,
        ...rest
      } = this.props
      if (!boxType) boxType =
        (theme && theme.RadioBox && theme.RadioBox.boxType)
        || BaseStyle.RadioBox.boxType
      switch (boxType) {
        case 'box':
          this.icons =
            (theme && theme.RadioBox && theme.RadioBox.boxIcons)
            || BaseStyle.RadioBox.boxIcons
          break
        case 'radio':
          this.icons =
            (theme && theme.RadioBox && theme.RadioBox.radioIcons)
            || BaseStyle.RadioBox.radioIcons
          break
      }
      if (iconLeft) layout = 'iconLeft'
      if (iconRight) layout = 'iconRight'
      this.layout =
           iconLeft && 'iconLeft'
        || iconRight && 'iconRight'
        || layout
        || (theme && theme.RadioBox && theme.RadioBox.layout)
        || BaseStyle.RadioBox.layout
      switch (this.layout) {
        case 'iconLeft':
          DefaultIconView =
            (theme && theme.RadioBox && theme.RadioBox.iconViewLeft)
            || BaseStyle.RadioBox.iconViewLeft
          DefaultTextView =
            (theme && theme.RadioBox && theme.RadioBox.textViewLeft)
            || BaseStyle.RadioBox.textViewLeft
          break;
        case 'iconRight':
          DefaultIconView =
            (theme && theme.RadioBox && theme.RadioBox.iconViewRight)
            || BaseStyle.RadioBox.iconViewRight
          DefaultTextView =
            (theme && theme.RadioBox && theme.RadioBox.textViewRight)
            BaseStyle.RadioBox.textViewRight
          break;
      }
      view = [
        (single)?
          (theme && theme.RadioBox && theme.RadioBox.SingleView)
          || BaseStyle.RadioBox.singleView
        :
          (theme && theme.RadioBox && theme.RadioBox.View)
          || BaseStyle.RadioBox.view,
        style,
        view,
      ]
      this.style = [
        (single)?
          (theme && theme.RadioBox && theme.RadioBox.singleStyle)
          || BaseStyle.RadioBox.singleStyle
        :
          (theme && theme.RadioBox && theme.RadioBox.style)
          || BaseStyle.RadioBox.style,
        buttonStyle,
      ]
      this.iconView = [
        DefaultIconView,
        iconView,
      ]
      this.textView = [
        DefaultTextView,
        textView,
      ]
      this.iconSize = iconSize
        || (theme && theme.RadioBox && theme.RadioBox.iconSize)
        || BaseStyle.RadioBox.iconSize
      this.iconColor = iconColor
        || (theme && theme.RadioBox && theme.RadioBox.iconColor)
        || BaseStyle.RadioBox.iconColor
      this.iconStyle = [
        BaseStyle.RadioBox.iconStyle,
        (theme && theme.RadioBox && theme.RadioBox.iconStyle),
        iconStyle,
      ]
      this.textStyle = [
        BaseStyle.RadioBox.textStyle,
        (theme && theme.RadioBox && theme.RadioBox.textStyle),
        textStyle,
      ]
      this.rest = rest
      this.effect = effect
        || (theme && theme.RadioBox && theme.RadioBox.effect)
        || BaseStyle.RadioBox.effect
      this.getNewValue=(value)=>{
        this.setState({value})
        return value
      }
      this.disabled = disabled
      return (
        <View style={view}>
        {
          items.map((item, idx)=>{
            if (typeof item === 'object') {
              var {
                text, label, value,
                iconView, textView,
                iconSize, iconColor, iconStyle,
                textStyle, disabled,
                ...itemrest
              } = item
              text = text || label || value
              value = value || text || label
            } else {
              text = item
              value = item
              itemrest ={}
            }
            icon=(value==this.state.value)?
            this.icons[1] : this.icons[0]
            disabled = this.disabled || disabled
            return <Button
              disabled={disabled}
              effect={this.effect}
              layout={this.layout}
              style={this.style}
              iconView={iconView || this.iconView}
              textView={textView || this.textView}
              getNewValue={this.getNewValue.bind(this, value)}
              text={text}
              icon={icon}
              iconSize={iconSize || this.iconSize}
              iconColor={iconColor || this.iconColor}
              iconStyle={iconStyle || this.iconStyle}
              textStyle={textStyle || this.textStyle}
              key={idx}
              {...this.rest}
              {...itemrest}
            />
          }, this)
        }
      </View>
    )
  }
}

RadioBox.propTypes = {
  items: PropTypes.array,
  boxType: PropTypes.oneOf(['box', 'radio']),
  layout: PropTypes.oneOf(['iconLeft', 'iconRight']),
  single: PropTypes.bool,
  effect: PropTypes.oneOf(['highlight', 'opacity', 'none']),
  iconView: ViewPropTypes.style,
  textView: ViewPropTypes.style,
  view: ViewPropTypes.style,
  style: ViewPropTypes.style,
}
