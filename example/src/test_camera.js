/**
* Camera + Navigator Test
* Kevin Lee 31 Aug 2017
**/

import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Camera from 'react-native-camera'
import { Screen, Block, Text, Roll, Icon, ImageSlider, ButtonList } from '../rn-naive';

class ImageScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images:[],
      position: 0,
    }
  }
  addPicture=(picPath)=>{
    let newImages = [
      picPath,
      ...this.state.images,
    ]
    this.setState({
      images: newImages,
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
      <Screen
        title={<Text H3 color='#eee'>{'<'}Camera{'>'} Control Test</Text>}
        style={styles.sliderView}
      >
        <ButtonList
          style={styles.buttonList}
          buttons={[
            { icon:'md-camera', action:()=>{navigate('Camera', {callback:this.addPicture})} },
            { icon:'md-remove', action:this.removePicture },
          ]}
          layout='iconOnly'
        />
        <Block style={styles.slider}>
          <ImageSlider
            ref={(ref)=>this.ref=ref}
            images={this.state.images}
            position={this.state.position}
          />
        </Block>
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
        captureTarget: Camera.constants.CaptureTarget.temp,
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
      <Screen style={styles.cameraView}>
        <Camera
          ref={(cam)=>{this.camera=cam}}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          orientation={this.state.camera.orientation}
          defaultTouchToFocus
          mirrorImage={false}
        />
        <Block style={[styles.overlay, styles.topOverlay]}>
          <Roll
            iconSet='material'
            layout='iconOnly'
            items={[
              {icon:'camera-front', value:Camera.constants.Type.back},
              {icon:'camera-rear', value:Camera.constants.Type.front},
            ]}
            style={styles.typeButton}
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
                {icon:'md-phone-landscape', overlay:'md-arrow-forward', value:Camera.constants.Orientation.landscapeLeft},
                {icon:'md-phone-landscape', overlay:'md-arrow-backward', value:Camera.constants.Orientation.landscapeRight},
                {icon:'md-phone-portrait', overlay:'md-arrow-up', value:Camera.constants.Orientation.portrait},
                {icon:'md-phone-portrait', overlay:'md-arrow-down', value:Camera.constants.Orientation.portraitUpsideDown},
                {icon:'keyboard-arrow-right', value:Camera.constants.Orientation.auto},
            ]}
            style={styles.typeButton}
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
            style={styles.typeButton}
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
        <Block style={[styles.overlay, styles.bottomOverlay]}>
          {
            !this.state.isRecording
            &&
            <Icon iconSet='material' name='camera' style={styles.captureButton} action={this.takePicture} />
            ||
            null
          }
        </Block>
      </Screen>
    )
  }
}

export default App = StackNavigator({
  Images: { screen: ImageScreen },
  Camera: { screen: CameraScreen },
}, { headerMode: 'none'})

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderWidth: 1,
  },
  cameraView: {
    flex: 1,
  },
  sliderView: {
    flex: 1,
    alignItems:'flex-start',
  },
  buttonList: {
    flex:1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  slider: {
    flex:9,
    borderWidth:6,
    margin: 8,
    alignSelf: 'stretch',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    opacity:0.7,
  },
  typeButton: {
    padding: 5,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
