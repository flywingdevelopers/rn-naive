/**
 * Memory of Mobile device
 * A mechanism to store presisent information on mobile phone
 *
 * Kevin Lee 16 Aug 2017
**/

import { AsyncStorage } from 'react-native'

export default class MOM {
  constructor(that, momKey='MOM', momDefault={}, momName='MOM', momSetState=true) {
    _key = momKey
    _def = momDefault
    _setState = momSetState
    _mom = momName
    _this = that
  }
  reload(uponComplete) {
    AsyncStorage.getItem(_key).then((values)=>{
      Object.assign(_this.state[_mom], _def, JSON.parse(values))
      if (uponComplete) uponComplete(_this.state[_mom])
      if (_setState) _this.forceUpdate()
    }).done()
  }
  update(values, uponComplete) {
    mom = _this.state[_mom]
    if (values !== undefined) {
      Object.assign(mom, values)
    }
    if (uponComplete) uponComplete(mom)
    if (_setState) {
      _this.setState({[_mom]:mom})
    }
  }
  save(uponComplete) {
    AsyncStorage.setItem(
      _key,
      JSON.stringify(_this.state[_mom]
    )).then((value)=>{
      if (uponComplete) uponComplete()
    }).done()
  }
  remove(item, uponComplete) {
    delete _this.state[_mom][item]
    update({}, uponComplete)
  }
  clear(uponComplete) {
    AsyncStorage.clear().then(()=>{
      if (uponComplete) uponComplete()
    })
  }
  data(item) {
    if (!item)
      return _this.state[_mom]
    else
      return _this.state[_mom][item]
  }
}
