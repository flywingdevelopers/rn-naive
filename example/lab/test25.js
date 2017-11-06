/**
 * Roll Overlay test
 * Kevin Lee 19 Oct 2017
 **/

import React from 'react'
import Camera from 'react-native-camera'
import { Screen, Bar, Roll } from '../rn-naive'

export default class App extends React.Component {
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
  render() {
    let rollOrientation=()=>{return(
      <Roll
        layout='iconOnly'
        items={[
          {image:require('../asset/phone-auto-white.png'), value:Camera.constants.Orientation.landscapeLeft},
          {image:require('../asset/landscape-left-white.png'), value:Camera.constants.Orientation.landscapeRight},
          {image:require('../asset/landscape-right-white.png'), value:Camera.constants.Orientation.portrait},
          {image:require('../asset/portrait-left-white.png'), value:Camera.constants.Orientation.portraitUpsideDown},
          {image:require('../asset/portrait-right-white.png'), value:Camera.constants.Orientation.auto},
        ]}
        style={{
          padding:5,
          backgroundColor:'transparent',
          borderWidth:0,
        }}
        iconSize={36}
        // iconStyle={{color:'white'}}
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
    )}
    console.log('-------------')
    console.log(Camera.constants.Orientation.landscapeLeft)
    console.log(Camera.constants.Orientation.landscapeRight)
    console.log(Camera.constants.Orientation.portrait)
    console.log(Camera.constants.Orientation.portraitUpsideDown)
    console.log(Camera.constants.Orientation.auto)
    return(
      <Screen>
        <Bar lines={2} style={{backgroundColor:'darkslategray'}}>
          { rollOrientation.call(this) }
        </Bar>
      </Screen>
    )
  }
}
