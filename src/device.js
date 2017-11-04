/**
* Device Definition
*
* Kevin Lee 16 Aug 2017
**/
import { Dimensions, PixelRatio } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export default Device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  pixelRatio: PixelRatio.get(),
  uniqueID: DeviceInfo.getUniqueID(),
  manufacturer: DeviceInfo.getManufacturer(),
  brand: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
  deviceID: DeviceInfo.getDeviceId(),
  systemName: DeviceInfo.getSystemName(),
  systemVersion: DeviceInfo.getSystemVersion(),
  bundleID: DeviceInfo.getBundleId(),
  buildNumber: DeviceInfo.getBuildNumber(),
  version: DeviceInfo.getVersion(),
  readableVersion: DeviceInfo.getReadableVersion(),
  deviceName: DeviceInfo.getDeviceName(),
  userAgent: DeviceInfo.getUserAgent(),
  deviceLocale: DeviceInfo.getDeviceLocale(),
  deviceCountry: DeviceInfo.getDeviceCountry(),
  timezone: DeviceInfo.getTimezone(),
  isEmulator: DeviceInfo.isEmulator(),
  isTablet: DeviceInfo.isTablet(),
  isPinOrFingerprintSet: DeviceInfo.isPinOrFingerprintSet(),
  apiLevel: DeviceInfo.getAPILevel(),
  instanceID: DeviceInfo.getInstanceID(),
  phoneNumber: DeviceInfo.getPhoneNumber(),
  firstInstallTime: DeviceInfo.getFirstInstallTime(),
  lastUpdateTime: DeviceInfo.getLastUpdateTime(),
  serialNumber: DeviceInfo.getSerialNumber(),
  ipAddress: DeviceInfo.getIPAddress(),
  macAddress: DeviceInfo.getMACAddress(),
  fontSize(size) {
    let pixelRatio = PixelRatio.get()
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height
    if (pixelRatio === 2) {
      // iphone 5s and older Androids
      if (width < 360) {
        return size * 0.95;
      }
      // iphone 5
      if (height < 667) {
        return size;
        // iphone 6-6s
      } else if (height >= 667 && height <= 735) {
        return size * 1.15;
      }
      // older phablets
      return size * 1.25;
    }
    if (pixelRatio === 3) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (width <= 360) {
        return size;
      }
      // Catch other weird android width sizings
      if (height < 667) {
        return size * 1.15;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (height >= 667 && height <= 735) {
        return size * 1.2;
      }
      // catch larger devices
      // ie iphone 6s plus / 7 plus / mi note 等等
      return size * 1.27;
    }
    if (pixelRatio === 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (width <= 360) {
        return size;
        // Catch other smaller android height sizings
      }
      if (height < 667) {
        return size * 1.20;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (height >= 667 && height <= 735) {
        return size * 1.25;
      }
      // catch larger phablet devices
      return size * 1.40;
    }
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    return size;
  },
}
