/*
 * naive test 2: Use of <Content>
 * Kevin Lee 26 July 2017
**/

import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'
import {Screen, Content, Bar } from '../rn-naive'

export default class App extends Component {
    contentbar = (idx) => {
        return(
            <Bar style={styles.contentbar} key={idx+1}><Text style={{textAlign:'center'}}>{idx+1}</Text></Bar>
        )
    }

    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>When {"<"}Content{">"} is scrollable, </Text>
                    <Text style={styles.headerText}>every child {"<"}Bar{">"} should specify a height</Text>
                </Bar>
                <Content style={styles.content} scrollable={true}>
                    { Array(20).fill().map((x,i)=>i).map(this.contentbar) }
                </Content>
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
        flexWrap: 'wrap',
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
        padding: 16,
        justifyContent: 'center',
    },
    contentbar: {
        flex:1,
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        height:50,
        margin: 1,
    },
    footer: {
        flex: 1,
        borderWidth: 4,
        borderColor: 'blue',
        justifyContent:'flex-end',
        margin:1,
        backgroundColor: 'black',
    }
})
