![](asset/logo.png "naive logo")

Component Library

"Too Simple, Sometimes Naive ... UI gonna be"

A react-<b>NA</b>t<b>IVE</b> component library for simple User Interface development


Installation
------------
      npm install rn-naive --save


naive library expects several packages/components installed. Follow this instruction to [install Related packages](/doc/setup.md)


Usage
-----

Start using the components.

~~~javascript
import React from 'react'
import { Button } from 'rn-naive'

export default class app extends React.Component {
  render() {
    return(
      <screen lines={24}>
        <Button
          icon='logo-android'
          value='Android'
          style={{flex:1}}
          disabled={(this.state.Disabled)}
          onValueChange={(OS)=>this.setState({OS})}
        />
      </Screen>
      )
    }
  }
~~~

Components
----------


**Layout Elements**
- Screen
- Bar
- Block
- DataBar
- DataBlock

**Visual Elements**
- Icon
- IconList
- Text
- Button
- ButtonList
- ButtonPanel
- Roll
- CheckBox
- RadioBox
- ImageSlider

**Input Elements**
- Input
- NumberInput
- DateSelect
- ItemSelect

**Non-visual Elements**
- MOM - Save static data in mobile's memory
- LANG - text language translation
- Device - retreieve device information

About the Author
----------------
I am a flywinger from Flywing Developers.

![](asset/author.png)
