/**
* SideMenu implementation
* Kevin Lee 24 Aug 2017
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrgSideMenu from 'react-native-side-menu'

export default class SideMenu extends React.Component {
  render() {
    let {
      menu,
      main,
      ...rest
    } = this.props
    return (
      <OrgSideMenu menu={menu} {...rest}>
        {main}
      </OrgSideMenu>
    )
  }
}

SideMenu.PropTypes = {
  main: PropTypes.node,
}
