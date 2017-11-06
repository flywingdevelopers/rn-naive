/* naive Example 3: 3 panes Bar
 * Kevin Lee 26 July 2017
**/

import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Screen, Content, Bar } from '../rn-naive'

export default class App extends Component {
    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>
                        {"<"}Bar{">"} has 3 panes, {"<"}leftPane{">"}, {"<"}centerPane{">"} and {"<"}rightPane{">"}
                        </Text>
                </Bar>
                <Content style={styles.content}>
                    <Bar>
                        <Text>This is a simple bar</Text>
                    </Bar>
                    <Bar style={styles.contentbar}
                        leftPane={<Text>This is LEFT</Text>}>
                        <Text>This is another bar (Bad style)</Text>
                    </Bar>
                    <Bar style={styles.contentbar}
                        leftPane={<Text>This is LEFT</Text>}
                        centerPane={<Text>This is another bar, text centered</Text>}
                    />
                    <Bar style={styles.contentbar}
                        rightPane={<Text>This is RIGHT</Text>}>
                        <Text>This is another bar (also bad)</Text>
                    </Bar>
                    <Bar style={styles.contentbar}
                        leftPane={<Text>This is LEFT</Text>}
                        centerPane={<Text>This is CENTER</Text>}
                        rightPane={<Text>This is RIGHT</Text>}>
                    </Bar>
                    <Bar style={styles.contentbar}
                        leftPane={<Text>This is LEFT</Text>}
                        centerPane={<Text>This is CENTER</Text>}
                        rightPane={<Text>This is RIGHT</Text>}
                        leftPaneStyle={styles.pane}
                        centerPaneStyle={styles.pane}
                        rightPaneStyle={styles.pane}
                    />
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
        flex: 8,
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
