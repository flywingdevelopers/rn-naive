/**
 * <ButtonPanel>
 * Kevin Lee 09 Sept 2017
**/

import React from 'react'
import {
  View,
  ViewPropTypes,
  TextStylePropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Button from './button'

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state={value:this.props.value}
  }
  onAction=(value)=>{
    if (this.action)
      this.action.call(this, value)
    this.setState({value})
  }
  buttonElement(button, idx) {
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
    buttonView = [
      buttonView,
      this.buttonView,
      (value == this.value)?
        BaseStyle.ButtonPanel.selected.buttonView:
        BaseStyle.ButtonPanel.unselected.buttonView,
      (value == this.value)?
        this.selectedButtonStyle:
        this.unselectedButtonStyle || buttonView || this.buttonView,
    ]
    textStyle = [
      textStyle,
      this.textStyle,
      (value == this.value)?
        BaseStyle.ButtonPanel.selected.textStyle:
        BaseStyle.ButtonPanel.unselected.textStyle,
      (value == this.value)?
        this.selectedTextStyle:
        this.unselectedTextStye || textStyle || this.textStyle,
    ]
    iconStyle = [
      iconStyle,
      this.iconStyle,
      (value == this.value)?
        BaseStyle.ButtonPanel.selected.iconStyle:
        BaseStyle.ButtonPanel.unselected.iconStyle,
      (value == this.value)?
        this.selectedIconStyle:
        this.unselectedIconStyle || iconStyle || this.iconStyle,
    ]
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
        key={idx}
        view={buttonView}
        textStyle={textStyle}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconSet={iconSet}
        layout={layout}
        effect={effect}
        action={this.onAction}
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
      buttons, items,
    // icons only List
      icons,
    // text only List
      texts,
    // General styles
      theme,
      view, style,
      buttonView,
    // Selected and Unselected style
      textStyle,
      iconStyle,
      selectedButtonStyle,
      unselectedButtonStyle,
      selectedTextStyle,
      unselectedTextStyle,
      selectedIconStyle,
      unselectedIconStyle,
    // text and icon layout
      iconSize,
      iconSet,
      layout,
      wrap, wrapped,
    // Element value
      value,
    // action and effect
      action, effect, disabled,
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
      wrap && { flex: 0, minHeight:32, minWidth:32 },
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
    this.selectedButtonStyle = selectedButtonStyle
    this.selectedTextStyle = selectedTextStyle
    this.selectedIconStyle = selectedIconStyle
    this.unselectedButtonStyle = unselectedButtonStyle
    this.unselectedTextStyle = unselectedTextStyle
    this.unselectedIconStyle = unselectedIconStyle
    this.iconSize = iconSize || BaseStyle.Button.iconSize
    this.iconSet = iconSet || BaseStyle.Icon.iconSet
    this.layout = layout || BaseStyle.Button.layout
    this.effect = effect || BaseStyle.Button.effect
    this.disabled = disabled
    this.value = value || this.state.value
    this.action = action
    this.rest = rest
    return (
      <View style={view}>
        { buttons.map(this.buttonElement, this) }
      </View>
    )
  }
}

ButtonPanel.propTypes = {
  view: ViewPropTypes.style,
  buttonView: ViewPropTypes.style,
  iconSize: PropTypes.number,
  effect: PropTypes.oneOf(['highlight', 'opacity']),
  layout: PropTypes.oneOf(['iconTop', 'iconBottom', 'iconLeft', 'iconRight', 'iconOnly', 'textOnly']),
}
