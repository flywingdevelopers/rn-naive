/**
* <SideMenu> Test
* Kevin Lee 24 Aug 2017
**/

import React, { Component } from 'react'
import { SideMenu } from '../rn-naive'
import TestMom from './test_mom'
import TestButton from './test_button'

export default class App extends React.Component {
    constructor() {
        super()
        this.state= { isOpen: false }
        this.onToggleMenu=()=>{
            this.setState({ isOpen: !this.state.isOpen })
        }
        this.onSideMenuChange=(isOpen)=>{
            this.setState({ isOpen })
        }
    }
    render() {
        return (
            <SideMenu
                menu={<TestButton onToggleMenu={this.onToggleMenu}/>}
                main={<TestMom onToggleMenu={this.onToggleMenu}/>}
                isOpen={this.state.isOpen}
                onChange={this.onSideMenuChange}
            />
        )
    }
}
