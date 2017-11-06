/* naive test 1: Bare basic usage
 * Kevin Lee 26 July 2017
**/

import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'
import {Screen, Bar } from '../rn-naive'

export default class App extends Component {
    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>This is Header Bar</Text>
                </Bar>
                <Bar style={styles.content}>
                    <Text>naive UI is a {"<"}Screen{">"} consists of a stack of {"<"}Bar{">"}.
                    In this example, 3 bars are formatted as header (10%), content (80%) and footer(10%).</Text>
                </Bar>
                <Bar style={styles.footer}>
                    <Text>This is Footer Bar</Text>
                </Bar>
            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        margin: 1,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    content: {
        flex: 8,
        borderWidth:2,
        borderColor: 'red',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        borderWidth: 4,
        borderColor: 'blue',
        justifyContent:'flex-end',
        margin:1
    }
})
