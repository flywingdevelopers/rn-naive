/**
 * naive SDK
 * Kevin Lee 31 March 2017
 * Major Start on 26 July 2017
 *
 * "Too Simple, Sometimes Naive ... UI gonna be"
 * A react-NAtIVE component for simple User Interface development
 *
 * Install (Vector Icon):
 *    npm install react-native-vector-icons --save
 *
 *    Edit android/app/build.gradle:
 // begin react-native-vector-icons
 project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'Ionicons.ttf' ]
 ]
 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
// end react-native-vector-icons
 * Install (Administrator) (International Setting):
 *    npm install intl
 *
 *    Readings:
 *    https://unbug.gitbooks.io/react-native-training/content/23_states_&_props.html
 *
 * Install DatePicker Component
 *   npm install react-native-datepicker
 *
 * Install SideMenu Component
 *   npm install react-native-side-menu
 *
 * Install Camera Component
 *   npm install react-native-camera
 *   react-native link react-native-camera
 * Edit node_modules/react-native-camera/android/src/build.gradle
 android {
   compileSdkVersion 23
   buildToolsVersion "23.0.1"

   defaultConfig {
     minSdkVersion 16
     targetSdkVersion 23
     versionCode 1
     versionName "1.0"
   }
* ( Compile with react-native SDK version )
*  Edit AndroidManifest.xml (android/app/src/main/):
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />

***
Supplement modules
***
* Install react-native-mail
  npm install react-native-mail
    copy RNMail.m to nodes_modules/RNMail
    copy RNMailModule.jave to android/src/main/java/com/chirag/RNMail
* Install react-navigation
  npm install react-nagivation

**/

module.exports = {
// Base Style & HTML
  get BaseStyle() {
    return require('./basestyle').default
  },
  get Text() {
    return require('./text').default
  },
// Device and Screen Layout
  get Device() {
    return require('./device').default
  },
  get Screen() {
    return require('./screen').default
  },
  get Block() {
    return require('./block').default
  },
  get Content() {
    return require('./block').default
  },
  get Bar() {
    return require('./bar').default
  },
  get DataBar() {
    return require('./databar').default
  },
  get DataBlock() {
    return require('./datablock').default
  },
// Icon
  get Icon() {
    return require('./icon').default
  },
  get IconList() {
    return require('./iconlist').default
  },
// Button family
  get Button() {
    return require('./button').default
  },
  get ButtonList() {
    return require('./buttonlist').default
  },
  get ButtonPanel() {
    return require('./buttonpanel').default
  },
  get Roll() {
    return require('./roll').default
  },
  get RollButton() {
    return require('./roll').default
  },
  get CheckBox() {
    return require('./checkbox').default
  },
  get RadioBox() {
    return require('./radiobox').default
  },
// Input UI element
  get Input() {
    return require('./input').default
  },
  get NumberInput() {
    return require('./numberinput').default
  },
  get DateSelect() {
    return require('./dateselect').default
  },
  get ItemSelect() {
    return require('./itemselect').default
  },
  get ImageSlider() {
    return require('./imageslider').default
  },
// Non-visual
  get MOM() {
    return require('./mom').default
  },
  get Lang() {
    return require('./lang').default
  },
// Borrowed
  get SideMenu() {
    return require('./sidemenu').default
  },
  get Camera() {
    return require('react-native-camera').default
  },
}
