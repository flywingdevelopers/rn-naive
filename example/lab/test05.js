/* naive Example 5: Icon and Icon List
 * Kevin Lee 27 July 2017
**/

import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Screen, Content, Bar, DataBar, DataBlock, Icon, IconList } from '../rn-naive'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { message:'' }
    }

    iconclickcash() {
        this.setState({message:'Cash'})
    }

    iconclickcard() {
        this.setState({message:'Card'})
    }

    iconclickcamera() {
        this.setState({message:'Camera'})
    }

    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>
                        {"<"}Icon{">"} and {"<"}IconList{">"} are implementation of IonIcons
                    </Text>
                </Bar>
                <Bar style={styles.databar}
                    leftPane={<IconList icons={[
                            {name:'ios-cash', action:this.iconclickcash.bind(this)},
                            {name:'ios-camera', action:this.iconclickcamera.bind(this)},
                            {name:'ios-card', action:this.iconclickcard.bind(this)},
                        ]}
                        style={styles.button}
                        size={16}
                    />}
                    rightPane={<Icon name={'ios-settings'} size={18}/>}
                />
                <Content style={styles.content} scrollable={true}>
                    <Bar style={styles.databar}
                        textStyle={styles.contentTitle}
                        text="<DataBar> style like normal entry line"
                    />
                    <DataBar style={styles.databar}
                        text="Name"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text="Age"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text="Gender"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text="Height"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text="Weight"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <DataBar style={styles.databar}
                        text="Hair Color"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                </Content>
                <Content style={[styles.content, {flex:11}]} scrollable={false}>
                    <Bar style={styles.databar}
                        textStyle={styles.contentTitle}
                        text="<DataBlock> style like blocks"
                    />
                    <DataBlock style={styles.databar}
                        text="Name"
                        textStyle={styles.entrytext}
                        input={<TextInput />}
                    />
                    <Bar style={styles.datablockbar}>
                        <DataBlock style={styles.databar}
                            text="Age"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text="Gender"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock style={styles.databar}
                            text="Height"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text="Weight"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                        <DataBlock style={styles.databar}
                            text="Hair Color"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                    </Bar>
                </Content>
                <Bar style={styles.footer}>
                    <Text>{this.state.message}</Text>
                </Bar>
            </Screen>
        )
    }
}

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
        margin: 4,
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
        padding:1,
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
    },
    entrytext: {
        fontSize: 9,
    },
    button: {
        borderWidth:1,
        borderRadius:3,
        backgroundColor:'lightgray',
        color:'darkblue',
        padding:2,
        marginLeft:1,
        marginRight:0,
        marginTop:0,
        marginBottom:0,
    }
})
