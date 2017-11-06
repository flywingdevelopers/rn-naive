/**
 * Modal Example
 * Kevin Lee 17 Oct 2017
 **/

import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'cyan', margin: 20, borderWidth:2, padding:10, opacity:1}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <View style={{
          flex:1,
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
         <View style={{
           backgroundColor:'yellow',
           width:200, height:200,
           borderWidth:3, borderColor:'red',
         }}>
            <Text>Hello World!</Text>
            <TouchableHighlight onPress={()=>{this.setState({modalVisible:false})}}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
        <Text>There is something you never know</Text>
        <Text>And something you want to know,</Text>
        <Text>But not knowable to you</Text>
        <Text>What we call knowledge, never fully reveal to you</Text>
        <Text>For you have not pay the entrance fee</Text>
        <TouchableHighlight onPress={()=>{this.setState({modalVisible:true})}}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
