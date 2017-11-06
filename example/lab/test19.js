/**
* Mailer TEst
* Kevin Lee 31 Aug 2017
* Email
    npm i --save react-native-mail
    react-native link react-native-mail
*
**/

import React from 'react'
import Mailer from 'react-native-mail'
import { Button } from '../rn-naive'

export default class App extends React.Component {
  testMail() {
    Mailer.mail({
      subject: 'Test Email',
      recipients: ['kevin.lee@ldschurch.org', 'kevin.leekamwing@gmail.com'],
      ccRecipients: ['flywing007@gmail.com'],
      body: 'This is a <b>test</b> email.',
      isHTML: true,
      //attachment: {
      //  path: '',  // The absolute path of the file from which to read data.
      //  type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
      //  name: '',   // Optional: Custom filename for attachment
      //},
    }, (error, event)=>{
      if (error) {
        Alert.alert('Error', 'Could not send mail.')
      }
    })
  }
  render() {
    return (
      <Button
        text='SEND TEST EMAIL'
        layout='textOnly'
        action={this.testMail}
      />
    )
  }
}
