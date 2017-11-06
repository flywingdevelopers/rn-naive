/**
* Test Device Information
* Kevin Lee 31 Oct 2017
**/

import React from 'react'
import { Device, Screen, DataBar, Input } from 'rn-naive'
import AppInfo from '../package.json'

export default class App extends React.Component{
  render() {
    return (
      <Screen scrollable>
        <DataBar text='App Verison' input={<Input editable={false} value={AppInfo.version}/>} />
        <DataBar text='width' input={<Input value={''+Device.width}/>} />
        <DataBar text='height' input={<Input disabled value={''+Device.height}/>} />
        <DataBar text='pixelRatio' input={<Input readonly value={''+Device.pixelRatio}/>} />
        <DataBar text='uniqueID' input={<Input readonly value={Device.uniqueID}/>} />
        <DataBar text='manufacturer' input={<Input readonly value={Device.manufacturer}/>} />
        <DataBar text='brand' input={<Input readonly value={Device.brand}/>} />
        <DataBar text='model' input={<Input readonly value={Device.model}/>} />
        <DataBar text='deviceID' input={<Input readonly value={Device.deviceID}/>} />
        <DataBar text='systemName' input={<Input readonly value={Device.systemName}/>} />
        <DataBar text='systemVersion' input={<Input readonly value={Device.systemVersion}/>} />
        <DataBar text='bundleID' input={<Input readonly value={Device.bundleID}/>} />
        <DataBar text='buildNumber' input={<Input readonly value={''+Device.buildNumber}/>} />
        <DataBar text='version' input={<Input readonly value={Device.version}/>} />
        <DataBar text='readableVersion' input={<Input readonly value={Device.readableVersion}/>} />
        <DataBar text='deviceName' input={<Input readonly value={Device.deviceName}/>} />
        <DataBar text='userAgent' input={<Input readonly value={Device.userAgent}/>} />
        <DataBar text='deviceLocale' input={<Input readonly value={Device.deviceLocale}/>} />
        <DataBar text='deviceCountry' input={<Input readonly value={Device.deviceCountry}/>} />
        <DataBar text='timezone' input={<Input readonly value={Device.timezone}/>} />
        <DataBar text='isEmulator' input={<Input readonly value={Device.isEmulator?'Yes':'No'}/>} />
        <DataBar text='isTablet' input={<Input readonly value={Device.isTablet?'Yes':'No'}/>} />
        <DataBar text='apiLevel' input={<Input readonly value={''+Device.apiLevel}/>} />
        <DataBar text='instanceID' input={<Input readonly value={Device.instanceID}/>} />
        <DataBar text='phoneNumber' input={<Input readonly value={Device.phoneNumber}/>} />
        <DataBar text='firstInstallTime' input={<Input readonly value={''+Device.firstInstallTime}/>} />
        <DataBar text='lastUpdateTime' input={<Input readonly value={''+Device.lastUpdateTime}/>} />
        <DataBar text='serialNumber' input={<Input readonly value={Device.serialNumber}/>} />
      </Screen>
    )
  }
}
