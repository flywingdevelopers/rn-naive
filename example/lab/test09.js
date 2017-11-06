/*
 * CheckBox and RadioBox
 * Kevin Lee 05 Aug 2017
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Screen, Bar, Content, DataBar, DataBlock, CheckBox, RadioBox } from '../rn-naive'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Piano:false,
            Guitar:false,
            Drumset:false,
            Flute:false,
            Main:'',
            Music:'Hiphop',
        }
    }
    render() {
        return (
            <Screen style={styles.screen}>
                <Bar style={styles.header}
                    centerPane={<Text style={styles.headerText}>CheckBox and RadioBox</Text>}
                />
                <Content style={styles.content} scrollable={false}>
                    <DataBar style={styles.databar}
                        input={<CheckBox
                            text='Piano'
                            onValueChange={(Piano)=>{this.setState({Piano})}}
                        />}
                    />
                    <DataBar style={styles.databar}
                        input={<CheckBox text='Guitar'
                        onValueChange={(Guitar)=>(this.setState({Guitar}))}
                        />}
                    />
                    <DataBar style={styles.databar}
                        input={<CheckBox text='Drum set'
                        onValueChange={(Drumset)=>(this.setState({Drumset}))}
                        />}
                    />
                    <DataBar style={styles.databar}
                        input={<CheckBox text='Flute'
                        onValueChange={(Flute)=>(this.setState({Flute}))}
                        />}
                    />
                    <Bar style={styles.blocks}>
                        <DataBlock style={styles.datablock}
                            text="Main Instrument"
                            input={<RadioBox
                                items={['Piano', 'Guitar', 'Drum Set', 'Flute']}
                                onValueChange={(Main)=>{this.setState({Main})}}
                            />}
                        />
                        <DataBlock style={styles.datablock}
                            text="Music Style"
                            input={<RadioBox
                                items={[
                                    {text:'Blues', value:'B'},
                                    {text:'Rock', value:'R'},
                                    {text:'Jazz', value:'J'},
                                    {text:'Hiphop', value:'H'},
                                    {text:'Pop', value:'P'},
                                    {text:'Classic', value:'C'},
                                ]}
                                onValueChange={(Music)=>{this.setState({Music})}}
                            />}
                        />
                    </Bar>
                </Content>
                <Bar style={styles.filler}>
                    <Text>Instruments are:
                        {this.state.Piano?'Piano':''}:
                        {this.state.Guitar?'Guitar':''}:
                        {this.state.Drumset?'Drumset':''}:
                        {this.state.Flute?'Flute':''}
                    </Text>
                </Bar>
                <Bar style={styles.filler}>
                    <Text>Main Instrument is {this.state.Main}</Text>
                </Bar>
                <Bar style={styles.filler}>
                    <Text>Music Style is {this.state.Music}</Text>
                </Bar>
            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'red',
    },
    content: {
        flex:10,
        margin: 4,
        borderWidth: 1,
        borderColor: 'blue',
    },
    header: {
        flex:1,
        backgroundColor: 'black',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    databar: {
        flex:1,
        borderWidth: 1,
    },
    datablock: {
        flex:6,
        borderWidth: 1,
        borderColor: 'yellow',
    },
    blocks: {
        flex:6,
        borderWidth: 2,
        borderColor: 'red',
    },
    filler: {
        flex:1,
        borderWidth: 4,
        borderColor: 'green',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
})
