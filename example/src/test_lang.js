/**
* <Lang> Test
* Kevin Lee 5 Sept 2017
**/

import React, { Component } from 'react'
import { Lang, Screen, Bar, Block, RadioBox, Text } from 'rn-naive'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.lang = new Lang()
    this.lang2 = new Lang()
    this.state = {
      langLoading1: true,
      langLoading2: true,
    }
  }
  componentDidMount() {
    this.lang.loadObject(table, ()=>this.setState({langLoading1:false}))
    this.lang.loadObject(table2, ()=>this.setState({langLoading2:false}))
    //this.lang.loadString(tableString, this.langLoaded)
    //this.lang.loadGoogleDrive('0B0kBXVyojXDPSlVCUlBIOHc2VzA', ()=>{this.setState({langLoading:false})})
  }
  langLoaded=()=>{
    this.setState({langLoading:false})
  }
  setLang=(code)=>{
    this.lang.setLang(code)
    this.forceUpdate()
  }
  langItems=()=>{
    let lg = this.lang.getLangs()
    result = []
    for (var key in lg) {
      result.push({value:lg[key].code, text:lg[key].name})
    }
    return result
  }
  render() {
    if (this.state.langLoading1 || this.state.langLoading2)
      return (<Text>Loading Language Definition...</Text>)
    codes = [
      'T01', 'T02', 'T03', 'T04', 'T05',
      'T06', 'T07', 'T08', 'T09', 'T10',
      'T11', 'T12', 'T13', 'T14', 'T15',
    ]
    return (
      <Screen>
        <Bar
          center={<Text h3 style={{color:'#eee'}}>Translation Test</Text>}
          style={{backgroundColor:'#222'}}
        />
        <Bar style={{flex:8}}
          left={
            <Block scrollable={true} style={{flex:1, borderWidth:2, borderRadius:8, margin: 8}}>
              { codes.map((code)=>{
                    return (<Text key={code}>{this.lang.text(code)}</Text>)
              })}
            </Block>
          }
          right={
            <Block scrollable={true} style={{flex:1, borderWidth:2, borderRadius:8, margin: 8}}>
              { codes.map((code)=>{
                    return (<Text key={code}>{this.lang.text(code, 'SSBD')}</Text>)
              })}
            </Block>
          }
        />
        <Bar style={{flex:1, margin:4, borderWidth:2, borderColor:'red'}}>
          <RadioBox
            items={this.langItems()}
            onChange={this.setLang}
            viewStyle={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}
            style={{flex:1}}
            iconSize={16}
            textStyle={{fontSize:10}}
            disabled={false}
          />
        </Bar>
      </Screen>
    )
  }
}

const table = {
  header: {
    domain:'BDR',
    lang: [
      {code:'en', name:'English', field:'English'},
      {code:'zh', name:'繁體中文', field:'Chinese'},
      {code:'cn', name:'简体中文', field:'Chinese2'},
    ],
  },
  data: [
    { code: 'T01',
      English:"Bank Slip Register",
      Chinese:"銀行存款單登記系統",
      Chinese2:"银行存款单登记系统",
    },
    { code: 'T02',
      English:"Deposit Date",
      Chinese:"存款日期",
      Chinese2:"存款日期",
    },
    { code: 'T03',
      English:"Unit Name",
      Chinese:"單位名稱",
      Chinese2:"单位名称",
    },
    { code: 'T04',
      English:"Deposit Amount",
      Chinese:"存款金額",
      Chinese2:"存款金额",
    },
    { code: 'T05',
      English:"Undeposited Amount",
      Chinese:"未存款金額",
      Chinese2:"未存款金额",
    },
    { code: 'T06',
      English:"Cheque",
      Chinese:"支票",
      Chinese2:"支票",
    },
    { code: 'T07',
      English:"Cash",
      Chinese:"現金",
      Chinese2:"现金",
    },
    { code: 'T08',
      English:"Undeposit",
      Chinese:"未存入款",
      Chinese2:"未存入款"
    },
    { code: 'T09',
      English:"Total",
      Chinese:"總計",
      Chinese2:"合共"
    },
    { code: 'T10',
      English:"Reason and Follow Up",
      Chinese:"原因及跟進",
      Chinese2:"原因及跟进",
    },
    { code: 'T11',
      English:"Display in English",
      Chinese:"以繁體中文顯示",
      Chinese2:"以简体中文显示"
    },
    { code: 'T12',
      English:"configure",
      Chinese:"設定",
      Chinese2:"设定",
    },
    { code: 'T13',
      English:"Submit",
      Chinese:"提交",
      Chinese2:"提交",
    },
  ],
}

const tableString = `{
  "header": {
    "domain":"BDR",
    "lang": [
      {"code":"en", "name":"English", "field":"English"},
      {"code":"zh", "name":"繁體中文", "field":"Chinese"},
      {"code":"cn", "name":"简体中文", "field":"Chinese2"}
    ]
  },
  "data": [
    { "code":"T01",
      "English":"Bank Slip Register",
      "Chinese":"銀行存款單登記系統",
      "Chinese2":"银行存款单登记系统"
    },
    { "code":"T02",
      "English":"Deposit Date",
      "Chinese":"存款日期",
      "Chinese2":"存款日期"
    },
    { "code": "T03",
      "English":"Unit Name",
      "Chinese":"單位名稱",
      "Chinese2":"单位名称"
    },
    { "code": "T04",
      "English":"Deposit Amount",
      "Chinese":"存款金額",
      "Chinese2":"存款金额"
    },
    { "code": "T05",
      "English":"Undeposited Amount",
      "Chinese":"未存款金額",
      "Chinese2":"未存款金额"
    },
    { "code": "T06",
      "English":"Cheque",
      "Chinese":"支票",
      "Chinese2":"支票"
    },
    { "code": "T07",
      "English":"Cash",
      "Chinese":"現金",
      "Chinese2":"现金"
    },
    { "code": "T08",
      "English":"Undeposit",
      "Chinese":"未存入款",
      "Chinese2":"未存入款"
    },
    { "code": "T09",
      "English":"Total",
      "Chinese":"總計",
      "Chinese2":"合共"
    },
    { "code": "T10",
      "English":"Reason and Follow Up",
      "Chinese":"原因及跟進",
      "Chinese2":"原因及跟进"
    },
    { "code": "T11",
      "English":"Display in English",
      "Chinese":"以繁體中文顯示",
      "Chinese2":"以简体中文显示"
    },
    { "code": "T12",
      "English":"configure",
      "Chinese":"設定",
      "Chinese2":"设定"
    },
    { "code": "T13",
      "English":"Submit",
      "Chinese":"提交",
      "Chinese2":"提交"
    }
  ]
}`

const table2 = {
  header: {
    domain:'SSBD',
    code:'key',
    lang: [
      {code:'en', name:'English', field:'English'},
      {code:'zh', name:'繁體中文', field:'Chinese'},
      {code:'cn', name:'简体中文', field:'Chinese2'},
    ],
  },
  data: [
    { key: 'T01',
      English:"Bank Deposit Register",
      Chinese:"銀行存款單登記系統",
      Chinese2:"银行存款单登记系统",
    },
    { key: 'T02',
      English:"Bank In Date",
      Chinese:"存款日期",
      Chinese2:"存款日期",
    },
    { key: 'T03',
      English:"Ward Name",
      Chinese:"單位名稱",
      Chinese2:"单位名称",
    },
    { key: 'T04',
      English:"Deposit Total",
      Chinese:"存款金額",
      Chinese2:"存款金额",
    },
    { key: 'T05',
      English:"Undeposited Total",
      Chinese:"未存款金額",
      Chinese2:"未存款金额",
    },
    { key: 'T06',
      English:"Check",
      Chinese:"支票",
      Chinese2:"支票",
    },
    { key: 'T07',
      English:"Real Cash",
      Chinese:"現金",
      Chinese2:"现金",
    },
    { key: 'T08',
      English:"Undeposit",
      Chinese:"未存入款",
      Chinese2:"未存入款"
    },
    { key: 'T09',
      English:"Grand Total",
      Chinese:"總計",
      Chinese2:"合共"
    },
    { key: 'T10',
      English:"Follow Up Action",
      Chinese:"原因及跟進",
      Chinese2:"原因及跟进",
    },
    { key: 'T11',
      English:"English on Screen",
      Chinese:"以繁體中文顯示",
      Chinese2:"以简体中文显示"
    },
    { key: 'T12',
      English:"config",
      Chinese:"設定",
      Chinese2:"设定",
    },
    { key: 'T13',
      English:"OK",
      Chinese:"提交",
      Chinese2:"提交",
    },
  ],
}
