/**
 * Custom Implementation of Modal
 * Kevin Lee 18 Oct 2017
 *  1. pass along theme attribute to child elements
 *  2. included an outer view that centralized child elements
 **/

import React from 'react'
import { StyleSheet } from 'react-native'
import { Modal as RNModal, View } from 'react-native'

export default class Modal extends React.Component {
  themedchildren() {
    // pass theme to all children
    return React.Children.map(this.props.children, child=> {
      return (child.props.theme)? child : (typeof this.props.theme === 'undefined')?
        child :
        React.cloneElement(child, { theme:this.props.theme })
    })
  }
  render() {
    let {
      theme,
      // Modal properties
      visible,
      onRequestClose,
      modalProps,
      // theme and style
      view, style,
      // Screen is for hosting child elements
      children,
      ...rest
    } = this.props
    modalProps = StyleSheet.flatten([
      BaseStyle.Modal.props,
      theme && theme.Modal && theme.Modal.props,
      modalProps,
    ])
    view = [
      BaseStyle.Modal.view,
      theme && theme.Modal && theme.Modal.view,
      style,
      view,
    ]
    if (!onRequestClose) {
      onRequestClose=()=>{let ignore=true}
    }
    if (children)
      children = this.themedchildren()
    return (
      <RNModal
        visible={visible}
        onRequestClose={onRequestClose}
        {...modalProps}
        {...rest}
      >
        <View style={view}>
          { children }
        </View>
      </RNModal>
    )
  }
}
