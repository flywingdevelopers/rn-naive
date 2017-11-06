/* naive Example 6: Button with Glyph
 * Kevin Lee 28 July 2017
**/

import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {
    Screen,
    Content,
    Bar,
    DataBar,
    DataBlock,
    Icon,
    IconList,
    Button,
    ButtonList,
    NumberInput,
    RollButton
} from '../rn-naive'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { message:'' }
    }

    onActionCash() {
        this.setState({message:'Cash'})
    }

    onActionCard() {
        this.setState({message:'Card'})
    }

    onActionCamera() {
        this.setState({message:'Camera'})
    }

    onActionSave() {
        this.setState({message:'Save'})
    }

    onActionMail() {
        this.setState({message:'Email'})
    }

    onActionRoll() {
        this.setState({message:'ROLL'})
    }

/*
*/
    render() {
        return (
            <Screen>
                <Bar style={styles.header}>
                    <Text style={styles.headerText}>
                        {"<"}Button{">"} and {"<"}ButtonList{">"} are simple and convenient
                    </Text>
                </Bar>
                <Bar style={styles.databar}
                    leftPane={<IconList icons={[
                            {name:'ios-cash', action:this.onActionCash.bind(this)},
                            {name:'ios-camera', action:this.onActionCamera.bind(this)},
                            {name:'ios-card', action:this.onActionCard.bind(this)},
                        ]}
                        style={styles.button}
                        size={16}
                    />}
                    leftPaneStyle={{flex:15}}
                    rightPane={<Icon name={'ios-settings'} size={22}/>}
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
                <Bar style={styles.inner}>
                    <ButtonList
                        buttons={[
                            {icon:'ios-card', text:'Card', action:this.onActionCard.bind(this)},
                            {icon:'ios-camera', text:'Camera', action:this.onActionCamera.bind(this)},
                            {icon:'ios-cash', text:'Cash', action:this.onActionCash.bind(this)},
                            {icon:'ios-mail', text:'Mail', action:this.onActionMail.bind(this)},
                            {icon:'ios-checkmark-circle', text:'Save', action:this.onActionSave.bind(this)}
                        ]}
                        iconColor='green'
                        textStyle={{fontSize:11, fontWeight:'normal', color:'blue'}}
                        layout='iconTop'
                    />
                </Bar>

                <Content style={styles.content} scrollable={false}>
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
                            input={<NumberInput />}
                        />
                        <DataBlock style={styles.databar}
                            text="Weight"
                            textStyle={styles.entrytext}
                            input={<RollButton
                                buttons={[
                                    {icon:'ios-cash', text:'Cash'},
                                    {icon:'ios-card', text:'Card'},
                                    {icon:'ios-mail', text:'Mail'},
                                    {icon:'', text:'Bank'},
                                ]}
                                layout='iconBottom'
                            />}
                        />
                        <DataBlock style={styles.databar}
                            text="Hair Color"
                            textStyle={styles.entrytext}
                            input={<TextInput />}
                        />
                    </Bar>
                </Content>
                <Bar style={styles.header}>
                    <ButtonList buttons={[
                        {icon:'ios-card', text:'Card', action:this.onActionCard.bind(this)},
                        {icon:'ios-camera', text:'Camera', action:this.onActionCamera.bind(this)},
                        {icon:'ios-cash', text:'Cash', action:this.onActionCash.bind(this)},
                        {icon:'ios-mail', text:'Mail', action:this.onActionMail.bind(this)},
                        {icon:'ios-checkmark-circle', text:'Save', action:this.onActionSave.bind(this)}
                    ]} iconColor='red' iconSize={12} textStyle={{fontSize:9, fontWeight:'normal'}} />
                </Bar>
                <Bar
                    style={styles.footer}
                    centerPane={<Text>{this.state.message}</Text>}
                    rightPane={[
                        <Button
                            icon='ios-mail'
                            text='Email'
                            iconColor='black'
                            effect='highlight'
                            action={this.onActionMail.bind(this)}
                            key='Email'
                        />,
                        <Button
                            icon='ios-checkmark-circle'
                            text='Save'
                            layout='iconRight'
                            action={this.onActionSave.bind(this)}
                            key='Save'
                        />
                    ]}
                    rightPaneStyle={{flex:40}}
                />
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
        backgroundColor: 'black',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        flex: 6,
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
    inner: {
        flex: 2,
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
    },
    button: {
        borderWidth:1,
        borderRadius:3,
        backgroundColor:'lightgray',
        color:'darkblue',
        padding:4,
        marginLeft:1,
        marginRight:0,
        marginTop:10,
        marginBottom:10,
    }
})
/*
entrytext: {
    fontSize: 9,
},


*/
