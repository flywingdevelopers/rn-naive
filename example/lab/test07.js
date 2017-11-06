/* naive test 7: MObile Memory Example
 * Kevin Lee 28 July 2017
**/

import React, { Component } from 'react'
import {View, Text, Picker, StyleSheet, TextInput, Image, Alert} from 'react-native'
import {
    Screen,
    Content,
    Bar,
    DataBar,
    DataBlock,
    ButtonList,
    NumberInput,
    Roll,
    DateSelect,
    ItemSelect,
    Icon,
    MOM
} from '../rn-naive'

const headerStyles = {
     bar: {
         flex: 1,
         margin: 2,
     },
     rightPane: {
         flex: 10
     },
 }

const dataEntry = {
    bar: {
        flex: 1,
        margin: 0,
        borderWidth: 1,
        borderColor: 'blue',
    },
    text: {
        fontSize: 12,
        color: 'navy',
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MOMLOADING: true,
            MOM: {},
        }
        this.mom = new MOM(this, 'naive-example7', {
            Name: '',
            BDate: '',
            JDate: '',
            Gender: '',
            Height: 0,
            Weight: 0,
            Hair: '',
            House: '',
            HouseIdx: 0,
            Remark: '',
            Country: '',
        })
        this.buttons = [
            { icon:'ios-create', text:'Save', action:this.onActionSave.bind(this) },
            { icon:'ios-refresh', text:'Reload', action:this.onActionReload.bind(this) },
            { icon:'logo-freebsd-devil', text:'Forget', action:this.onActionClear.bind(this) },
        ]
    }
    componentWillMount() {
        this.mom.reload(this.loadedMOM.bind(this))
    }
    loadedMOM() {
        this.setState({MOMLOADING: false})
    }

    onActionSave() {
        this.mom.save()
    }

    onActionReload() {
        this.mom.reload()
    }

    onActionClear() {
        this.mom.clear()
    }

/*
*/
    render() {
        if (this.state.MOMLOADING) {
            return (
                <View style={{alignItems:'center'}}>
                    <Image source={require('./flywing.png')} />
                    <Text>Loading...</Text>
                </View>
            )
        }
        return (
            <Screen>
                <Bar styles={headerStyles}
                    leftPane={<Text style={styles.headerText}>Personal Information</Text>}
                    rightPane={<ButtonList buttons={this.buttons} layout='iconTop'/>}
                    leftPaneStyle={{flex:5}}
                    rightPaneStyle={{flex:20}}
                />
                <Content style={styles.content} scrollable={false}>
                    <Bar style={styles.datablockbar}>
                        <DataBlock styles={styles.dataEntry}
                            text="Name"
                            input={<TextInput
                                style={styles.textinputstyle}
                                value={this.mom.data('Name')}
                                onChangeText={(Name)=>this.mom.update({Name})}
                            />}
                        />
                        <DataBlock styles={styles.dataEntry}
                            text="Birthday"
                            input={<DateSelect
                                style={styles.dateinputstyle}
                                value={this.mom.data('BDate')}
                                onValueChange={(BDate)=>this.mom.update({BDate})}
                            />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock styles={styles.dataEntry}
                            text="Hair Color"
                            input={<TextInput
                                style={styles.textinputstyle}
                                value={this.mom.data('Hair')}
                                onChangeText={(Hair)=>this.mom.update({Hair})}
                            />}
                        />
                        <DataBlock styles={styles.dataEntry}
                            text="Gender"
                            input={<Roll
                                items={[
                                    {icon:'ios-man', text:'Male'},
                                    {icon:'ios-woman', text:'Female'},
                                ]}
                                size={24}
                                value={this.mom.data('Gender')}
                                onChangeText={(Gender)=>this.mom.update({Gender})}
                            />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock styles={styles.dataEntry}
                            text="Height"
                            input={<NumberInput
                                value={Number(this.mom.data('Height'))}
                                onEndEditing={(Height)=>this.mom.update({Height})}
                            />}
                        />
                        <DataBlock styles={styles.dataEntry}
                            text="Weight"
                            input={<NumberInput
                                value={Number(this.mom.data('Weight'))}
                                onEndEditing={(Weight)=>this.mom.update({Weight})}
                            />}
                        />
                        <DataBlock styles={styles.dataEntry}
                            text="Country"
                            input={<TextInput
                                style={styles.textinputstyle}
                                value={this.mom.data('Country')}
                                onChangeText={(Country)=>this.mom.update({Country})}
                            />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock styles={styles.dataEntry}
                            text="Remark"
                            input={<TextInput
                                style={styles.textinputstyle}
                                value={this.mom.data('Remark')}
                                onChangeText={(Remark)=>this.mom.update({Remark})}
                            />}
                        />
                        <DataBlock styles={styles.dataEntry} style={{flex: 2}}
                            text="Hogwarts House"
                            input={<ItemSelect
                                items={[
                                    {value:'Hufflepuff'},
                                    {value:'Gryffindor'},
                                    {value:'Ravenclaw'},
                                    {value:'Slytherin'},
                                ]}
                                mode='dropdown'
                                value={this.mom.data('House')}
                                onValueChange={(House, Index)=>{
                                    this.mom.update({House})
                                    console.log(this.mom.data())
                                }}
                            />}
                        />
                    </Bar>
                    <Bar style={styles.datablockbar}>
                        <DataBlock styles={styles.dataEntry} style={{flex: 2}}
                            text="Application Date"
                            input={<DateSelect
                                style={styles.dateinputstyle}
                                value={this.mom.data('JDate')}
                                androidMode='calendar'
                                onValueChange={(JDate)=>this.mom.update({JDate})}
                            />}
                        />
                    </Bar>
                    <Bar style={{flex:4}} />
                </Content>
                <Bar style={styles.footer}
                    rightPane={<Icon
                        source={require('./flywing2.png')}
                        size={32}
                        avatar
                        action={()=>{Alert.alert("I'm a flywinger")}}
                    />}
                />
            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize:16,
    },
    content: {
        flex: 9,
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
        alignItems: 'stretch',
    },
    contentTitle: {
        fontWeight: 'bold',
        color: 'blue'
    },
    footer: {
        flex: 1,
        justifyContent:'flex-end',
        margin:1
    },
    pane: {
        borderWidth: 1,
        margin: 4,
    },
    entrytext: {
        fontSize: 12,
    },
    textinputstyle: {
    },
    dateinputstyle: {
    },
    dataentry: {
        borderWidth:2,
        borderColor: 'green',
        marginBottom: 2,
        paddingBottom: 2,
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
