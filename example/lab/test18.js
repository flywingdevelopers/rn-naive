import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Button } from '../rn-naive'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={ message:'' }
  }
  static navigationOptions = {
    title: 'Welcome',
  }
  setMessage=(message)=>{ this.setState({message})}
  render() {
    const { navigate, state } = this.props.navigation
    return (
      <View>
        <Text>{ JSON.stringify(this.state) }</Text>
        <Button
          action={()=>navigate('Chat', { user: 'Boby', callerMess:this.setMessage})}
          text="Chat with Boby"
          layout='textOnly'
        />
        <Button
          action={()=>navigate('Chat', { user: 'Lucy', callerMess:this.setMessage})}
          text="Chat with Lucy"
          layout='textOnly'
        />
        <Button
          action={()=>navigate('Chat', { user: 'Fion', callerMess:this.setMessage})}
          text="Chat with Fion"
          layout='textOnly'
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  //static navigationOptions = ({navigation})=>({
  //  title: `Chat with ${navigation.state.params.user}`,
  //})
  render() {
    const { goBack, state } = this.props.navigation
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>{ JSON.stringify(params)}</Text>
        <Button
          action={()=>{params.callerMess('thank you'); goBack()}}
          text='Go Back'
          layout='textOnly'
        />
      </View>
    )
  }
}

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
}, { headerMode:'none' })
