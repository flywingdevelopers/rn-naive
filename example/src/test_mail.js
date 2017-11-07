/**
* Mailer TEst
* Kevin Lee 31 Aug 2017
* Email
    npm i --save react-native-mail
    react-native link react-native-mail
*
**/

import React from 'react'
import { Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Camera from 'react-native-camera'
import Mailer from 'react-native-mail'
import {
  Screen, Bar, Block,
  DataBar, DataBlock,
  Input,
  ImageSlider, ButtonList,
  Roll, Icon,
  Button
} from 'rn-naive'

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TO:'kevin.leekamwing@gmail.com',
      CC:'',
      MESSAGE:'TEST MESSAGE 4',
      IMAGES:[],
      position:0,
    }
  }
  sendMail=()=>{
    let length = this.state.IMAGES.length
    attachments = []
    for (i=0; i<length; i++) {
      attachments.push({
        path:this.state.IMAGES[i].substring(8),
        type: 'jpg',
      })
    }
    Mailer.mail({
      subject: '[NC]Test Email',
      recipients: [this.state.TO],
      ccRecipients: [this.state.CC],
      body: this.state.MESSAGE,
      isHTML: true,
      attachment: attachments,
      // [
        // {
          // path: this.state.IMAGES[0].substring(8),  // The absolute path of the file from which to read data.
          // type: 'jpg',   // Mime Type: jpg, png, doc, ppt, html, pdf
        // },
        // {
          // path: this.state.IMAGES[1].substring(8),  // The absolute path of the file from which to read data.
          // type: 'jpg',   // Mime Type: jpg, png, doc, ppt, html, pdf
        // },
      // ],
    }, (error, event)=>{
      if (error) {
        Alert.alert('Error', 'Could not send mail.')
        console.log(error)
      }
    })
  }
  addPicture=(picPath)=>{
    let newImages = [
      picPath,
      ...this.state.IMAGES,
    ]
    this.setState({
      IMAGES: newImages,
      position: 0,
    })
  }
  removePicture=()=>{
      let pos = this.ref.getPosition()
      if (pos > -1) {
        this.state.images.splice(pos, 1)
        if (pos >= this.state.images.length) {
          this.state.position = this.state.images.length-1
        }
        this.forceUpdate()
      }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Screen lines={16} theme={defaultTheme} title='Mail Test'>
        <DataBar
          text='TO'
          input={<Input underline
            value={this.state.TO}
            onChange={(TO)=>this.setState({TO})}
          />}
        />
        <DataBar
          text='CC'
          input={<Input underline
            value={this.state.CC}
            onChange={(CC)=>this.setState({CC})}
          />}
        />
        <DataBar
          textView={{justifyContent:'flex-start'}}
          inputView={{justifyContent:'flex-start'}}
          text='Message'
          input={<Input multiline underline style={{flex:1}}
            value={this.state.MESSAGE}
            onChange={(MESSAGE)=>this.setState({MESSAGE})}
          />}
        />
        <Bar lines={6} style={{margin:4}}>
          <ImageSlider
              ref={(ref)=>{this.ref=ref}}
              images={this.state.IMAGES}
              containerStyle={{flex:9, borderWidth:3, borderColor:'darkblue', margin:4, borderRadius:8}}
              position={this.state.position}
              onPositionChanged={(position)=>{
                  this.setState({position})
              }}
              resizeMode='cover'
              bulletPosition='top'
          />
          <ButtonList style={{flex:1, flexDirection:'column'}}
            buttons={[
              { icon:'md-camera', action:()=>{navigate('Camera', {callback:this.addPicture})} },
              { icon:'md-remove', action:this.removePicture },
            ]}
          />
        </Bar>
        <Bar style={{justifyContent:'center', margin:8}}>
          <Button style={{width:Device.width/4}} textStyle={{fontSize:16}}
            text='SEND'
            icon='md-mail'
            action={this.sendMail}
          />
        </Bar>
      </Screen>
    )
  }
}

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.disk,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.landscapeLeft,
        flashMode: Camera.constants.FlashMode.auto,
      },
    };
  }
  takePicture=()=>{
    const options = {};
    if (this.camera) {
      this.camera.capture({metadata:options})
        .then((data) => { this.callback(data.path); this.goBack() })
        .catch(err => console.error(err));
    }
  }
  render() {
    const { goBack } = this.props.navigation
    const { params } = this.props.navigation.state
    this.goBack = goBack
    this.callback = params.callback
    return (
      <Screen style={{flex:1}}>
        <Camera
          ref={(cam)=>{this.camera=cam}}
          style={{flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          orientation={this.state.camera.orientation}
          defaultTouchToFocus
          mirrorImage={false}
        />
        <Block style={{
          position: 'absolute',
          padding: 16,
          right: 0,
          left: 0,
          alignItems: 'center',
          top: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Roll
            iconSet='material'
            layout='iconOnly'
            items={[
              {icon:'camera-front', value:Camera.constants.Type.back},
              {icon:'camera-rear', value:Camera.constants.Type.front},
            ]}
            style={{
              padding: 5,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            iconSize={24}
            iconStyle={{color:'white'}}
            value = {this.state.camera.type}
            onValueChange = {(type)=>{
              this.setState({
                camera: {
                  ...this.state.camera,
                  type,
                },
              })
            }}
          />
          <Roll
            iconSet='material'
            layout='iconOnly'
            items={[
                {icon:'stay-current-landscape', overlay:'arrow-forward', value:Camera.constants.Orientation.landscapeLeft},
                {icon:'stay-current-landscape-landscape', overlay:'arrow-back', value:Camera.constants.Orientation.landscapeRight},
                {icon:'stay-current-portrait', overlay:'arrow-upward', value:Camera.constants.Orientation.portrait},
                {icon:'stay-current-portrait', overlay:'arrow-downward', value:Camera.constants.Orientation.portraitUpsideDown},
                {icon:'screen-rotation', value:Camera.constants.Orientation.auto},
            ]}
            style={{
              padding: 5,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            iconSize={24}
            iconStyle={{color:'white'}}
            value={this.state.camera.orientation}
            onValueChange={(orientation)=>{
              this.setState({
                camera: {
                  ...this.state.camera,
                  orientation,
                },
              })
            }}
          />
          <Roll
            iconSet='material'
            layout='iconOnly'
            items={[
              {icon:'flash-on', value:Camera.constants.FlashMode.off},
              {icon:'flash-off', value:Camera.constants.FlashMode.auto},
              {icon:'flash-auto', value:Camera.constants.FlashMode.on},
            ]}
            style={{
              padding: 5,
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            iconSize={24}
            iconStyle={{color:'white'}}
            value={this.state.camera.flashMode}
            onValueChange={(flashMode)=>{
              this.setState({
                camera: {
                  ...this.state.camera,
                  flashMode,
                },
              })
            }}
          />
        </Block>
        <Block style={{
          position: 'absolute',
          padding: 16,
          right: 0,
          left: 0,
          alignItems: 'center',
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          flexDirection: 'row',
          justifyContent: 'center',
        }}  lines={3}
        >
          {
            !this.state.isRecording
            &&
            <Icon iconSet='material' name='camera' style={{
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 30,
                opacity:0.7
              }}
              action={this.takePicture} />
            ||
            null
          }
        </Block>
      </Screen>
    )
  }
}

export default App = StackNavigator({
  Main: { screen: MainScreen },
  Camera: { screen: CameraScreen },
}, { headerMode: 'none'})

const defaultTheme={
  Screen: {
    view: { margin: 4, marginTop: 4 },
    barView: { backgroundColor:'orange' },
  },
  DataBar: {
    titleView: { flex:3 },
    inputView: { flex:7 },
  },
}
