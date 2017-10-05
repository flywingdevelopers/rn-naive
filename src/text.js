/**
 * <Text h1...h6 /> and <Text d1...d6 />
 * also bold, italic
 * and backgroundColor, color
 * Kevin Lee 4 Sept 2017
**/

import React from 'react'
import {
  Text as RNText,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import Device from './device'
import BaseStyle from './basestyle'

export default class Text extends React.Component {
  render() {
    let {
      theme,
      style,
      h1, h2, h3, h4, h5, h6,
      H1, H2, H3, H4, H5, H6,
      d1, d2, d3, d4, d5, d6,
      D1, D2, D3, D4, D5, D6,
      backgroundColor, background,
      foregroundColor, color,
      bold,
      italic,
      action, onPress, effect,
      children,
      ...rest
    } = this.props
    action = action || onPress
    effect = effect || BaseStyle.Text.effect
    element =
      <RNText
        style={[
          BaseStyle.Text.default,
          theme && theme.Text && theme.Text.default,
          (h1||H1) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H1.size), fontWeight: BaseStyle.Text.H1.weight },
          (h2||H2) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H2.size), fontWeight: BaseStyle.Text.H2.weight },
          (h3||H3) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H3.size), fontWeight: BaseStyle.Text.H3.weight },
          (h4||H4) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H4.size), fontWeight: BaseStyle.Text.H4.weight },
          (h5||H5) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H5.size), fontWeight: BaseStyle.Text.H5.weight },
          (h6||H6) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.H6.size), fontWeight: BaseStyle.Text.H6.weight },
          (d1||D1) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D1.size), fontWeight: BaseStyle.Text.D1.weight },
          (d2||D2) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D2.size), fontWeight: BaseStyle.Text.D2.weight },
          (d3||D3) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D3.size), fontWeight: BaseStyle.Text.D3.weight },
          (d4||D4) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D4.size), fontWeight: BaseStyle.Text.D4.weight },
          (d5||D5) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D5.size), fontWeight: BaseStyle.Text.D5.weight },
          (d6||D6) && { fontSize: Device.normalizedFontSize(BaseStyle.Text.D6.size), fontWeight: BaseStyle.Text.D6.weight },
          (background||backgroundColor) && { backgroundColor:background||backgroundColor },
          (color||foregroundColor) && { color:color||foregroundColor },
          bold && { fontWeight: 'bold' },
          italic && { fontStyle: 'italic' },
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    if (action) {
      switch (effect) {
        case 'highlight':
          element =
            <TouchableHighlight onPress={action}>
              {element}
            </TouchableHighlight>
            break
        case 'opacity':
          element =
            <TouchableOpacity onPress={action}>
              {element}
            </TouchableOpacity>
            break
        case 'none':
          element =
            <TouchableOpacity activeOpacity={1} onPress={action}>
              {element}
            </TouchableOpacity>
            break
      }
    }
    return element
  }
}
