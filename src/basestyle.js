/**
 * Base Style for Naive
 *
 * Kevin Lee 3 Aug 2017
**/

import Device from './device.js'

export default BaseStyle = {
  Default: {
    screenHeightOffset: 0,
    screenWidthOffset: 6,
    buttonHCountOverWidth: 6,
    buttonHCountOverHeight: 20,
    buttonVCount: 8,
  },
  Screen: {
    view: {
        margin: 0,
        marginTop: 0,
    },
    barView: { backgroundColor: '#222'},
    titleView: {
      color: '#ddd',
      fontWeight: 'bold',
      fontSize: Device.normalizedFontSize(16),
    },
    lines: 24,
  },
  Bar: {
    line: 1,
    alignedView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'lightblue',
    },
    plainView: {
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    centerView: {
      flex:4,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'stretch',
    },
    leftView: {
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'stretch',
    },
    rightView: {
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      alignSelf:'stretch',
    },
  },
  Block: {
    scrollable: false,
    view:{
      flexDirection: 'column',
      // alignItems: 'stretch',
    },
  },
  Modal: {
    props: {
      animationType: 'none',
      transparent: true,
    },
    view: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  DataBar: {
    lines: 1,
    view: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 0,
      margin: 0,
      marginLeft: 2,
      marginRight: 2,
    },
    title: {},
    titleView: {
      flex: 6,
      padding: 0,
      margin: 0,
      marginLeft: 4,
      justifyContent: 'center',
    },
    labelView: {
      flex: 6,
      padding: 0,
      margin: 0,
      marginLeft: 4,
      marginBottom: 2,
      justifyContent: 'center',
    },
    inputView: {
      flex: 4,
      padding: 0,
      margin: 0,
      marginRight: 4,
      marginBottom: 2,
      justifyContent: 'center',
    },
  },
  DataBlock: {
    lines: 3,
    view: {
      flex:1,
      flexDirection: 'column',
      // alignSelf: 'stretch',
      margin: 2,
    },
    title: {},
    titleView: {
      flex: 3,
      margin: 0,
      marginLeft: 4,
      marginRight: 4,
      alignSelf: 'stretch',
    },
    inputView: {
      flex: 7,
      marginTop: 0,
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 2,
      alignSelf: 'stretch',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
    },
  },
  Text: {
    effect: 'opacity',
    H1: {size: 30, weight: 'bold'},
    H2: {size: 24, weight: 'bold'},
    H3: {size: 18, weight: 'bold'},
    H4: {size: 16, weight: 'bold'},
    H5: {size: 12, weight: 'bold'},
    H6: {size:  8, weight: 'bold'},
    D1: {size: 18, weight: 'normal'},
    D2: {size: 16, weight: 'normal'},
    D3: {size: 14, weight: 'normal'},
    D4: {size: 12, weight: 'normal'},
    D5: {size: 10, weight: 'normal'},
    D6: {size:  8, weight: 'normal'},
    default: { color:'darkblue' },
  },
  Icon: {
    iconSet: 'ion',
    size: 32,
    color: 'steelblue',
    view: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      // textAlign: 'center',
      padding: 0,
    },
    effect: 'opacity',
    avatarBorder: 2,
    avatarBorderColor: 'darkblue',
  },
  IconList: {
    view: {
      flex:1,
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'stretch',
      paddingLeft: 2,
      margin: 0,
    },
    iconView: {
      flex:1,
      alignItems:'stretch',
    },
    icon: {
      textAlign: 'center',
      padding: 0,
    },
    size: 32,
    color: 'grey',
    effect: 'highlight',
  },
  Button: {
    effect: "opacity",
    layout: "iconLeft",
    iconSize: Device.normalizedFontSize(18),
    defaultIcon: 'ios-square-outline',
    text: {
      fontWeight: 'bold',
      fontSize: Device.normalizedFontSize(9),
    },
    view: {
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      margin: 1,
      alignItems:'stretch',
      minWidth: 36,
      minHeight: 18,
    },
    iconView: {
      margin: 1,
      padding: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textView: {
      margin: 1,
      marginLeft: 2,
      marginRight: 2,
      // alignSelf: 'stretch',
      justifyContent: 'center',
    },
  },
  ButtonList: {
    effect:"opacity",
    layout:"iconLeft",
    iconSize: 20,
    view: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
      paddingLeft: 2,
      margin: 0,
    },
    button: {
      flex: 1,
      minWidth: 20,
      minHeight: 20,
    },
  },
  ButtonPanel: {
    selected: {
      buttonView: { backgroundColor: 'silver'},
      iconStyle: { color: 'white' },
      textStyle: { color: 'darkcyan' },
    },
    unselected: {
      buttonView: { backgroundColor: 'grey'},
      iconStyle: { color: 'darkslategrey'},
      textStyle: { color: 'darkslategrey'},
    },
  },
  Roll: {
    layout: 'iconTop',
    inputLayout: 'iconLeft',
    view: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    input: {
      width: '100%',
      // height: '100%',
      minHeight:0,
      minWidth:0,
      alignItems: 'center',
    },
    effect: 'opacity',
  },
  RollSelect: {
    style: {
      height:'80%',
      minWidth: Device.width / 15,
      minHeight: 0,
      marginTop:2,
      marginBottom:8,
      marginLeft: 0,
      padding: 0,
      alignSelf:'stretch',
      borderWidth: 0,
      borderRadius: 0,
      borderBottomWidth: 1.5,
      borderColor: '#888888',
      backgroundColor: 'transparent',
    },
    iconView: {
      margin: 1,
      padding: 0,
    },
  },
  CheckBox: {
    boxIcons: ['md-square-outline','md-checkbox-outline'],
    radioIcons: ['md-radio-button-off','md-radio-button-on'],
    boxType: 'box',
    layout: 'iconLeft',
    effect: 'none',
    iconSize: Device.normalizedFontSize(20),
    textStyle: {
      fontSize: Device.normalizedFontSize(12),
    },
    view: {
      flex:1,
      margin: 1,
      marginLeft: 4,
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    iconViewLeft: {
      alignItems:'flex-end',
    },
    iconViewRight: {
      alignItems:'flex-start',
    },
    textViewLeft: {
      alignItems:'flex-start',
    },
    textViewRight: {
      alignItems:'flex-end',
    },
    iconViewOnly: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  },
  RadioBox: {
    boxIcons: ['md-square-outline','md-checkbox-outline'],
    radioIcons: ['md-radio-button-off','md-radio-button-on'],
    boxType: 'radio',
    layout: 'iconLeft',
    effect: 'none',
    iconSize: Device.normalizedFontSize(20),
    textStyle: {
      fontSize: Device.normalizedFontSize(12),
    },
    iconViewLeft: {
      alignItems:'flex-end',
    },
    iconViewRight: {
      alignItems:'flex-start',
    },
    textViewLeft: {
      alignItems:'flex-start',
    },
    textViewRight: {
      alignItems:'flex-end',
    },
    view: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    style: {
      flex: 1,
      margin: 1,
      borderWidth: 0,
      backgroundColor: 'transparent',
      minWidth: '23%',
      width: 'auto',
    },
    singleView: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    singleStyle: {
      margin: 1,
      borderWidth: 0,
      backgroundColor: 'transparent',
      minWidth: 0,
      width:'auto',
    },
  },
  Input: {
    effect: 'opacity',
    style: {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      height:'100%',
    },
    text: { textAlignVertical:'bottom'},
    underline: {
      margin: 2,
      marginTop: 2,
      marginBottom: 4,
      paddingBottom: 0,
      borderBottomWidth: 1.5,
      borderRadius: 0,
      borderColor: '#696969',
    },
    disabled: {
      color:'silver',
    },
  },
  NumberInput: {
    locale: 'en-US',
    decimal: 2,
    value: 0,
    text: { textAlign: 'right', },
    view: {},
  },
  DateSelect: {
    dateIcon: {
      left: 0,
      top: 0,
      marginLeft: 4,
      margin: 'auto',
      height: 18,
      width: 18,
    },
    dateInput: {
      margin: 0,
      margin: 0,
      height: 'auto',
      borderWidth: 0,
      alignItems: 'flex-end',
      justifyContent:'flex-end',
    },
    dateTouchBody: {
      alignSelf: 'stretch',
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',
    },
    dateTouch: {
      width: '100%',
    },
    disabled: {
      backgroundColor: 'transparent',
    },
    format: "MMM DD, YYYY",
  },
  ItemSelect: {
    viewStyle: {},
    style: {
      height:'88%',
      marginTop:0,
    },
  },
  ImageSlider: {
    margin:2,
    container: {
      backgroundColor: 'transparent',
      flex:1,
    },
    flatList: {
      backgroundColor: 'transparent',
      zIndex:1,
    },
    buttons: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      zIndex:10,
    },
    button: {
      margin: 3,
      width: 8,
      height: 8,
      borderRadius: 8 / 2,
      backgroundColor: '#999',
      opacity: 0.8,
    },
    buttonSelected: {
      opacity: 1,
      width: 12,
      height: 12,
      borderRadius: 12 / 2,
      backgroundColor: '#444',
    },
  },
}
