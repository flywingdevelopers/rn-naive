/**
 * Modal Control
 * Kevin Lee 18 Oct 2017
 **/

import React from 'react'
import { Screen, Block, Text, Button, Modal } from 'rn-naive'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }
  render() {
    return (
      <Screen style={{flex:1, backgroundColor:'cyan', margin: 20, borderWidth:2}}>
        <Modal visible={this.state.modalVisible}>
          <Block style={{
            flex:0,
            backgroundColor:'yellow',
            width:200, height:200,
            borderWidth:3, borderColor:'red',
            alignItems:'center',
            justifyContent:'space-between',
          }}>
            <Text H1>桃花源記</Text>
            <Text H3>陶淵明</Text>
            <Button TextOnly
              text='Hide Modal'
              action={()=>{this.setState({modalVisible:false})}}
            />
          </Block>
        </Modal>
        <Text>
          晉太元中，武陵人捕魚為業。緣溪行，忘路之遠近。
          忽逢桃花林，夾岸數百步，中無雜樹，芳草鮮美，落英繽紛。
          漁人甚異之。復前行，欲窮其林。
        </Text>
        <Text>
          林盡水源，便得一山，山有小口，彷彿若有光。
          便捨船，從口入。初極狹，才通人。復行數十步，豁然開朗。
          土地平曠，屋舍儼然，有良田美池桑竹之屬。阡陌交通，雞犬相聞。
          其中往來種作，男女衣著，悉如外人。黃髮垂髫並怡然自樂。
        </Text>
        <Text>
          見漁人，乃大驚，問所從來。具答之。便要還家，設酒殺雞作食。
          村中聞有此人，咸來問訊。自云先世避秦時亂，率妻子邑人來此絕境，
          不復出焉，遂與外人間隔。問今是何世，乃不知有漢，無論魏晉。
          此人一一為具言所聞，皆歎惋。餘人各復延至其家，皆出酒食。
          停數日，辭去。此中人語云：「不足為外人道也。」
        </Text>
        <Text>
          既出，得其船，便扶向路，處處志(誌)之。及郡下，詣太守，說如此。
          太守即遣人隨其往，尋向所志,遂迷,不復得路。
        </Text>
        <Text>
          南陽劉子驥，高尚士也，聞之，欣然規往。未果，尋病終。後遂無問津者。
        </Text>
        <Button TextOnly
          text='Show Modal'
          action={()=>{this.setState({modalVisible:true})}}
        />
      </Screen>
    )
  }
}
