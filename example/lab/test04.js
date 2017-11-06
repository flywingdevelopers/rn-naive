/* naive test 4: Data Entry Bar and Block
 * Kevin Lee 27 July 2017
**/

import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Screen, Content, Bar, DataBar, DataBlock } from '../rn-naive'

export default class App extends Component {
    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>
                        {"<"}DataBar{">"} and {"<"}DataBlock{">"} are for housing data inputs
                    </Text>
                </Bar>
                <Content style={styles.content} scrollable={false}>
                    <Bar style={styles.databar}>
                        <Text style={styles.contentTitle}>
                            {"<"}DataBar{">"} style like bars
                        </Text>
                    </Bar>
                    <DataBar style={styles.databar}
                        text={<Text>Name</Text>}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text={<Text>Age</Text>}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text={<Text>Gender</Text>}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text={<Text>Height</Text>}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text={<Text>Weight</Text>}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text={<Text>Hair Color</Text>}
                        input={<TextInput />}
                    />
                </Content>
                <Content style={[styles.content, {flex:12}]} scrollable={false}>
                    <Bar style={styles.databar}
                        textStyle={styles.contentTitle}
                        text={"<DataBlock> style like blocks"}
                    />
                    <DataBlock style={styles.databar}
                        text={<Text>Name</Text>}
                        input={<TextInput />}
                    />
                    <Bar style={styles.datablockbar}>
                        <DataBlock style={styles.databar}
                            text={<Text>Age</Text>}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text={<Text>Gender</Text>}
                            input={<TextInput />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock style={styles.databar}
                            text={<Text>Height</Text>}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text={<Text>Weight</Text>}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text={<Text>Hair Color</Text>}
                            input={<TextInput />}
                        />
                    </Bar>
                </Content>
                <Bar style={styles.footer}>
                    <Text>This is Footer Bar</Text>
                </Bar>
            </Screen>
        )
    }
}

/*
*/
/*
*/
const styles = StyleSheet.create({
    header: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        margin: 1,
        backgroundColor: 'black',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        flex: 10,
        borderWidth:2,
        borderColor: 'red',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
    },
    contentbar: {
        flex:1,
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        margin: 1,
    },
    databar: {
        flex: 1,
    },
    datablockbar: {
        flex: 1,
        flexDirection: 'row',
    },
    contentTitle: {
        fontWeight: 'bold',
        color: 'blue'
    },
    footer: {
        flex: 1,
        borderWidth: 4,
        borderColor: 'blue',
        justifyContent:'flex-end',
        margin:1
    },
    pane: {
        borderWidth: 1,
        margin: 4,
    }
})
