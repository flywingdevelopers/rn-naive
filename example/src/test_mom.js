/**
* MOM Control Test
* Kevin Lee 21 Sept 2017
**/

import React from 'react'
import { StackNavigator } from 'react-navigation'
import {
  Screen, Block, Bar,
  DataBlock, DataBar,
  Text, Icon,
  ButtonList, ButtonPanel,
  Input, NumberInput,
  DateSelect, ItemSelect,
  Roll, RadioBox, CheckBox,
  Camera,
  MOM, Lang,
} from '../rn-naive'

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      MOMLOADING: true,
      LANGLOADING: true,
      disabled: false,
      MOM: {},
    }
    let momDefault={
      Name:'', Gender:'', Bday:'', Bplace:'', Pose:'', Weight:0, Height:0,
      Image:'',
      LangEnglish:false, LangCantonese:false, LangPutonghua:false,
      LangJapanese:false, LangKorean:false, LangFrench:false,
    }
    this.mom = new MOM(this, 'naive-control', momDefault)
    this.lang = new Lang()
  }
  componentWillMount() {
    this.mom.reload(this.loadedMOM.bind(this))
    this.lang.loadObject(table, this.loadedLANG)
  }
  loadedMOM=()=>{
    this.setState({MOMLOADING: false})
  }
  loadedLANG=()=>{
    this.setState({LANGLOADING:false})
  }
  setLang=(code)=>{
    this.lang.setLang(code)
    this.forceUpdate()
  }
  addPicture=(imagePath)=>{
    this.mom.update({Image:{uri:imagePath}})
  }
  render() {
    const { navigate } = this.props.navigation
    if (this.state.MOMLOADING || this.state.LANGLOADING) {
      return (
        <Screen style={{flex:1, alignItems:'center'}}>
          <Icon viewStyle={{flex:1}} size={250} source={require('../asset/flywing.png')} />
          <Text style={{flex:1}}>Loading...</Text>
        </Screen>
      )
    }
    return (
      <Screen lines={17}
        title={this.lang.text('T00')}
        right={<ButtonList
          items={[
            {icon:'ios-create', action:()=>this.mom.save()},
            {icon:'ios-refresh', action:()=>this.mom.reload()},
            {icon:'logo-freebsd-devil', action:()=>this.mom.clear()},
            {icon:'ios-camera', action:()=>{navigate('Camera', {callback:this.addPicture})}},
          ]}
        />}
        left={<Icon name='md-eye' action={()=>this.setState({disabled:!this.state.disabled})}/>}
        leftView={{margin:4}}
        rightView={{flex:2}}
      >
        <Bar lines={6} style={{margin:4, borderWidth:0, padding:2}}>
          <Block style={{flex:1}}>
            <DataBlock style={{flex:2, borderWidth:1}}
              title={this.lang.text('T01')}
              input={<Input underline
                value={this.mom.data('Name')}
                onValueChange={(Name)=>this.mom.update({Name})}
                disabled={this.state.disabled}
              />}
            />
            <DataBlock style={{flex:2, borderWidth:1}}
              title={this.lang.text('T02')}
              input={<RadioBox
                items={[
                  {text:this.lang.text('T21'), value:'M'},
                  {text:this.lang.text('T22'), value:'F'},
                ]}
                value={this.mom.data('Gender')}
                onValueChange={(Gender)=>this.mom.update({Gender})}
                disabled={this.state.disabled}
              />}
            />
            <DataBlock style={{flex:2, borderWidth:1}}
              title={this.lang.text('T03')}
              input={<DateSelect underline
                value={this.mom.data('Bday')}
                onValueChange={(Bday)=>this.mom.update({Bday})}
                disabled={this.state.disabled}
              />}
            />
          </Block>
          <Block style={{flex:1}}>
            <Block style={{flex:4, margin:8, borderWidth:2, borderRadius:4}}>
              <Icon source={this.mom.data('Image')} size={160} style={{flex:1, alignSelf:'center'}} />
            </Block>
            <ItemSelect style={{height:30, borderWidth:1}}
              items={[
                {label:this.lang.text('T06'), value:'Household'},
                {label:this.lang.text('T07'), value:'Scientist'},
                {label:this.lang.text('T08'), value:'Doctor'},
                {label:this.lang.text('T09'), value:'Accountant'},
                {label:this.lang.text('T10'), value:'Merchant'},
                {label:this.lang.text('T11'), value:'Professor'},
                {label:this.lang.text('T12'), value:'Technician'},
              ]}
              value={this.mom.data('Pose')}
              onValueChange={(Pose)=>{this.mom.update({Pose})}}
              disabled={this.state.disabled}
            />
          </Block>
        </Bar>
        <Bar lines={2} style={{margin:4, borderWidth:0, padding:2}}>
          <DataBlock style={{flex:1, borderWidth:1, margin:2, padding:4}}
            title={this.lang.text('T20')}
            input={<Roll input underline iconRight iconSize={32} textStyle={{fontSize:14}}
              items={[
                {image:require('../asset/flag/china.png'), text:this.lang.text('T23'), value:'China'},
                {image:require('../asset/flag/hongkong.png'), text:this.lang.text('T24'), value:'Hong Kong'},
                {image:require('../asset/flag/taiwan.png'), text:this.lang.text('T25'), value:'Taiwan'},
                {image:require('../asset/flag/japan.png'), text:this.lang.text('T26'), value:'Japan'},
                {image:require('../asset/flag/korea.png'), text:this.lang.text('T27'), value:'Korea'},
              ]}
              value={this.mom.data('Bplace')}
              onValueChange={(Bplace)=>this.mom.update({Bplace})}
              disabled={this.state.disabled}
            />}
          />
          <Block style={{flex:1, borderWidth:1, margin:2}}>
            <DataBlock style={{flex:1}}
              title={this.lang.text('T04')}
              input={<Bar style={{flex:1}}><NumberInput
                decimal={1} underline
                style={{flex:8}}
                value={this.mom.data('Weight')}
                onValueChange={(Weight)=>this.mom.update({Weight})}
                disabled={this.state.disabled}
              />
              <Text style={{flex:2, top:2, margin:0}}>KGS</Text></Bar>}
            />
            <DataBlock style={{flex:1}}
              title={this.lang.text('T05')}
              input={<Bar style={{flex:1}}><NumberInput
                decimal={0} underline
                style={{flex:8}}
                value={this.mom.data('Height')}
                onValueChange={(Height)=>this.mom.update({Height})}
                disabled={this.state.disabled}
              />
              <Text style={{flex:2, top:2, margin:0}}>CM</Text></Bar>}
            />
          </Block>
        </Bar>
        <DataBlock lines={3} style={{borderWidth:1, margin:8}}
          title={this.lang.text('T13')}
          input={<Bar style={{flex:1, flexWrap:'wrap'}}>
            <CheckBox text={this.lang.text('T14')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangEnglish')}
              onValueChange={(LangEnglish)=>this.mom.update({LangEnglish})}
              disabled={this.state.disabled}
            />
            <CheckBox text={this.lang.text('T15')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangPutonghua')}
              onValueChange={(LangPutonghua)=>this.mom.update({LangPutonghua})}
              disabled={this.state.disabled}
            />
            <CheckBox text={this.lang.text('T16')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangKorean')}
              onValueChange={(LangKorean)=>this.mom.update({LangKorean})}
              disabled={this.state.disabled}
            />
            <CheckBox text={this.lang.text('T17')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangCantonese')}
              onValueChange={(LangCantonese)=>this.mom.update({LangCantonese})}
              disabled={this.state.disabled}
            />
            <CheckBox text={this.lang.text('T18')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangJapanese')}
              onValueChange={(LangJapanese)=>this.mom.update({LangJapanese})}
              disabled={this.state.disabled}
            />
            <CheckBox text={this.lang.text('T19')}
              style={{flex:0, width:'30%', height:'18%'}}
              value={this.mom.data('LangFrench')}
              onValueChange={(LangFrench)=>this.mom.update({LangFrench})}
              disabled={this.state.disabled}
            />
          </Bar>}
        />
        <Bar lines={1.5}></Bar>
        <Bar lines={1} style={{margin:8}}>
          <ButtonPanel style={{flex:1}} textOnly buttonView={{borderRadius:0}}
            items={[
              {text:this.lang.getLang('en'), value:'en'},
              {text:this.lang.getLang('zh'), value:'zh'},
              {text:this.lang.getLang('cn'), value:'cn'},
            ]}
            action={this.setLang}
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
      <Screen style={{flex:1}}>
        <Camera
          ref={(cam)=>{this.camera=cam}}
          style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}
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
          top: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Roll
            iconSet='material'
            layout='iconOnly'
            items={[
              {icon:'camera-front', value:Camera.constants.Type.back},
              {icon:'camera-rear', value:Camera.constants.Type.front},
            ]}
            style={{padding:5, backgroundColor:'transparent', borderWidth:0}}
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
                {icon:'screen-rotation', value:Camera.constants.Orientation.landscapeLeft},
                {icon:'keyboard-arrow-down', value:Camera.constants.Orientation.landscapeRight},
                {icon:'keyboard-arrow-left', value:Camera.constants.Orientation.portrait},
                {icon:'keyboard-arrow-up', value:Camera.constants.Orientation.portraitUpsideDown},
                {icon:'keyboard-arrow-right', value:Camera.constants.Orientation.auto},
            ]}
            style={{padding:5, backgroundColor:'transparent', borderWidth: 0}}
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
            style={{padding:5, backgroundColor:'transparent', borderWidth: 0}}
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
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {
            !this.state.isRecording
            &&
            <Icon iconSet='material' name='camera' style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 30,
              opacity:0.7,
            }} action={this.takePicture} />
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

const table = {
  header: {
    domain:'naive-control',
    lang: [
      {code:'en', name:'English', field:'English'},
      {code:'zh', name:'繁體中文', field:'Chinese'},
      {code:'cn', name:'简体中文', field:'Chinese2'},
    ],
  },
  data: [
    { code:'T00',
      English:'MOM Information',
      Chinese:'MOM 資訊',
      Chinese2:'MOM 资讯',
    },
    { code:'T01',
      English:"Name",
      Chinese:"姓名",
      Chinese2:"姓名",
    },
    { code:'T02',
      English:"Gender",
      Chinese:"性別",
      Chinese2:"性別",
    },
    { code: 'T03',
      English:"Birthday",
      Chinese:"出生日期",
      Chinese2:"出生日期",
    },
    { code: 'T04',
      English:"Weight",
      Chinese:"體重",
      Chinese2:"体重",
    },
    { code: 'T05',
      English:"Height",
      Chinese:"身高",
      Chinese2:"身高",
    },
    { code: 'T06',
      English:"Household",
      Chinese:"自僱人仕",
      Chinese2:"自雇人士",
    },
    { code: 'T07',
      English:"Scientist",
      Chinese:"科研人員",
      Chinese2:"科研人员",
    },
    { code: 'T08',
      English:"Doctor",
      Chinese:"醫生",
      Chinese2:"医生"
    },
    { code: 'T09',
      English:"Accountant",
      Chinese:"會計",
      Chinese2:"会计"
    },
    { code: 'T10',
      English:"Merchant",
      Chinese:"商人",
      Chinese2:"商人",
    },
    { code: 'T11',
      English:"Professor",
      Chinese:"博士",
      Chinese2:"博士"
    },
    { code: 'T12',
      English:"Technician",
      Chinese:"技術人員",
      Chinese2:"技术人员",
    },
    { code: 'T13',
      English:"Speaking Languages",
      Chinese:"口述語言",
      Chinese2:"说话的语言",
    },
    { code: 'T14',
      English:'English',
      Chinese:'英語',
      Chinese2:'美語',
    },
    { code: 'T15',
      English:'Cantonese',
      Chinese:'廣東話',
      Chinese2:'广东话',
    },
    { code: 'T16',
      English:'Putonghua',
      Chinese:'普通話',
      Chinese2:'普通话',
    },
    { code: 'T17',
      English:'Japanese',
      Chinese:'日本語',
      Chinese2:'日本语',
    },
    { code: 'T18',
      English:'Korean',
      Chinese:'韓語',
      Chinese2:'韩语',
    },
    { code: 'T19',
      English:'French',
      Chinese:'法國語',
      Chinese2:'法国语',
    },
    { code: 'T20',
      English:'Birth Place',
      Chinese:'出生地點',
      Chinese2:'出生地点',
    },
    { code: 'T21',
      English: 'Male',
      Chinese:'男性',
      Chinese2:'男性',
    },
    { code: 'T22',
      English: 'Female',
      Chinese: '女性',
      Chinese2: '女性',
    },
    { code: 'T23',
      English: 'China',
      Chinese: '中國',
      Chinese2: '中国',
    },
    { code: 'T24',
      English: 'Hong Kong',
      Chinese: '香港',
      Chinese2: '香港',
    },
    { code: 'T25',
      English: 'Taiwan',
      Chinese: '台灣',
      Chinese2: '台湾',
    },
    { code: 'T26',
      English: 'Japan',
      Chinese: '日本',
      Chinese2: '日本',
    },
    { code: 'T27',
      English: 'Korea',
      Chinese: '韓國',
      Chinese2: '韩国',
    },
  ],
}
