/**
*  <Roll>
*  A roll cycle its value upon user click. It is a simple selector or toggle.
*
* Kevin Lee 16 Aug 2017
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BaseStyle from './basestyle'
import Button from './button'

export default class Roll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {index:(this.props.input)? -1:0, value:''}
  }
  getNewValue=()=>{
    let index = this.state.index + 1
    if (index >= this.items.length) index = 0
    if (typeof this.items[index] === 'object')
      value = this.items[index].value || this.items[index].text
    else {
      value = this.items[index]
    }
    this.setState({index, value})
    return value
  }
  render() {
    let {
      // Roll values
        items, rolls,
      // Appear as Input Control
        underline,
      // theme
        theme,
        style, viewStyle,
      // Button Layout
        layout,
        iconLeft, iconRight, iconTop, iconBottom, iconOnly, textOnly,
      // Render as input element
        input,
      // data awareness
        value,
      // Touch
        effect,
        ...rest
    } = this.props
    this.items = items || rolls
    // Come in the value
    this.value = (typeof value !== 'undefined')? value : this.state.value
    if (typeof this.value === 'undefined')
      this.value = 0
    console.log('Come in the value ' + this.value + '(' + value + ') [' + this.state.value + ']')
    // Default for input is nothing, otherwise the first item
    this.index = (input)? -1 : 0
    for (var i=0; i<this.items.length; i++) {
      const itm = (typeof this.items[i] === 'object')?
        this.items[i] : {value:this.items[i]}
      if ((itm.value == this.value) ||
        (itm.text && (itm.text == this.value))) {
        this.index = i
        break
      }
    }
    console.log('index is ' + this.index)
    // if value is find in the item list
    if (this.index != -1) {
      // align value and index
      const itm = (typeof this.items[this.index] === 'object')?
        this.items[this.index] : {value:this.items[i]}
        this.value = itm.value || itm.text || this.index
    }
    ico = ''
    img=''
    ovy=''
    txt = ' '
    itmrest = {}
    if (this.index < this.items.length) {
      if (typeof this.items[this.index] === 'object') {
        let {
          icon,
          image,
          overlay,
          text,
          value,
          ...itemrest,
        } = this.items[this.index]
        ico = icon
        img = image
        ovy = overlay
        txt = text || value
        if (!txt) txt = ' '
        itmrest = itemrest
      } else {
        ico = ''
        img = ''
        ovy = ''
        txt = this.items[this.index]
      }
    }
    if (iconLeft) layout = 'iconLeft'
    if (iconRight) layout = 'iconRight'
    if (iconTop) layout = 'iconTop'
    if (iconBottom) layout = 'iconBottom'
    if (iconOnly) layout = 'iconOnly'
    if (textOnly) layout = 'textOnly'
    if (typeof layout === 'undefined')
      layout = (input)? BaseStyle.Roll.inputLayout: BaseStyle.Roll.layout
    viewStyle = [
      BaseStyle.Roll.view,
      theme && theme.Roll && theme.Roll.view,
      input && BaseStyle.Roll.input,
      input && (layout == 'iconLeft' || layout == 'iconRight') && { alignItems: 'flex-end' },
      input && theme && theme.Roll && theme.Roll.input,
      underline &&
        ((theme && theme.Input && theme.Input.style) || BaseStyle.Input.style),
      underline &&
        ((theme && theme.Input && theme.Input.underline) || BaseStyle.Input.underline),
      style,
      viewStyle,
    ]
    effect = effect
      || (theme && theme.Roll && theme.Roll.effect)
      || BaseStyle.Roll.effect
    return (
      <Button
          icon={ico}
          image={img}
          overlay={ovy}
          text={txt}
          layout={layout}
          effect={effect}
          view={viewStyle}
          theme={theme}
          action={this.onAction}
          disabled={this.disabled}
          value={this.value}
          getNewValue={this.getNewValue}
          {...rest}
          {...itmrest}
      />
    )
  }
}

Roll.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number,
  value: PropTypes.any,
  layout: PropTypes.oneOf(['iconTop', 'iconBottom', 'iconLeft', 'iconRight', 'iconOnly', 'textOnly']),
  onValueChange: PropTypes.func,
}
