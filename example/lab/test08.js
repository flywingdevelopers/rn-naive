/*
 * Test 8: Icon Image
 * Kevin Lee 3 August 2017
 */

 import React, { Component } from 'react'
 import { View, Alert, Image, Text } from 'react-native'
 import { Icon, Roll, CheckBox } from '../rn-naive'

 export default class App extends Component {
     render() {
         return (
             <View style={{flex:1, flexDirection:'column'}}>
                <Text>Normal {"<"}Image{">"} use box CCS in style tag</Text>
                <Image source={require('./mailgirl.png')} style={{height:48, width:48, borderWidth:4, borderColor:'red',margin:4}} />
                <Text>{"<"}Icon source=...{">"} also use box CSS in viewStyle (not style) tag</Text>
                <Icon source={require('./flywing.png')} size={48} viewStyle={{borderWidth:1, borderColor:'blue', borderRadius:16, margin:4}} style={{borderWidth:2}}/>
                <Text>{"<"}Icon source=... action=...{">"} use box style in iconStyle tag (or style) tag{">"}</Text>
                <Icon source={require('./flywing2.png')} size={48} viewStyle={{borderWidth:1, margin:4}} action={()=>{Alert.alert("I'm here.")}} />
                <Text>{"<"}Icon name=...{">"} use text CCS</Text>
                <Icon name='logo-tux' size={48} iconStyle={{borderWidth:1, borderColor:'green', color:'orange'}}/>
                <Text>{"<"}Icon name=... action=...{">"} use box CSS in viewStyle, text CSS in iconStyle (style){">"}</Text>
                <Icon name='logo-tux' size={48} iconStyle={{borderWidth:1, borderColor:'green'}} action={()=>(Alert.alert("I'm here"))} />
                <View style={{flex:1}}>
                </View>
                <Roll
                    items={[
                        {icon:'md-square-outline', text:'Certified', value:false},
                        {icon:'md-checkbox-outline', text:'Certified', value:true},
                    ]}
                    iconSize={28}
                    layout='iconLeft'
                    effect='none'
                    style={{margin:4, borderBottomWidth:0}}
                    iconViewStyle={{alignItems:'flex-end'}}
                    textViewStyle={{alignItems:'flex-start'}}
                    value='Certified'
                />
                <CheckBox text="Sustained" layout='iconRight' />
                <CheckBox text="Organized" />
            </View>
         )
     }
 }
