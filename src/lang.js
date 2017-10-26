/**
* Simple Language Translation
* Kevin Lee 5 Sept 2017
*
* Usage:
*   this.lang = new Lang()
*   // Load Resource,
*     this.lang.loadObject(obj) where obj is an Javascript Object
*     this.lang.loadString(str) where str is text literal
*     this.lang.loadURI(uri, uponComplete) where uri is external resource
*     this.lang.loadGoogleDrive(fid, uponComplete) where fid is the shareable link ID of the Google Drive file
*
*   // Set current language
*     this.lang.setLang(code)
*   // Get current language name
*     this.lang.getLang([code], ['name'|'field'])
*   // Get all languages (in one keyed object)
*       let lg = this.lang.getLangs()
*       result = []
*       for (var key in lg) {
*         result.push({code:lg.code, text:lg.name, remark:lg.field})
*       }       
*   // Perform translation,
*     this.lang.text(code, [domain], [lang])
**/

import React from 'react'
import Text from './text'

export default class Lang {
  // Language Database
  db = {}
  // Array of known domains
  dm = []
  // Array of language definitions
  lg = []
  // Default language code
  lang = 'en'

  // Load language definition from an Object
  loadObject=(obj, uponComplete)=>{
    if((typeof obj.header === 'object') &&
      (typeof obj.header.domain === 'string') &&
      (typeof obj.header.lang === 'object') &&
      (typeof obj.data === 'object')) {
      // object Satisfied as language object
      this.dm.push(obj.header.domain)
      obj.header.lang.map((lang)=>{
        if (typeof this.lg[lang.code] === 'undefined')
          this.lg[lang.code] = lang
        obj.data.map((d)=>{
          let field = lang.field || lang.code
          let code = (typeof obj.header.code === 'undefined')?
            'code' : obj.header.code
          if (typeof d[field] === 'string') {
            let dl = `${obj.header.domain}-${d[code]}`
            if (typeof this.db[dl] === 'undefined') this.db[dl] = {}
            this.db[dl][lang.code] = d[field]
          }
        })
      })
      if (uponComplete) uponComplete(this.db)
    } else {
      console.log('Lang fail to load definition object/string')
    }
  }

  // Load language definition from a string
  loadString=(string, uponComplete)=>{
    this.loadObject(JSON.parse(string), uponComplete)
  }

  // Load language definition from an universal resourse (URI)
  loadURI=(uri, uponComplete)=>{
    fetch(uri)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.loadObject(responseJSON, uponComplete)
    })
    .catch((error)=>console.log(error))
  }

  // Google Drive uri
  loadGoogleDrive=(fid, uponComplete)=>{
    this.loadURI('https://docs.google.com/uc?id={0}&export=download'.format(fid), uponComplete)
  }

  // Set Default Language
  setLang=(lang)=>{ this.lang=lang }

  // Get Language Name
  getLang=(lang, fld)=>{
    if (!lang) lang = this.lang
    if (!fld) fld = 'name'
    return this.lg[lang][fld]
  }

  // Get all languages definition
  getLangs=()=>{ return this.lg }

  // Return a translated Text
  text=(code, domain, lang)=>{
    var result = `[${code}-${domain}-${lang}]`
    if (domain) {
      if (lang) {
        result = this.findTextCDL(code, domain, lang)
        if (result === null)
          result = `[${code}-${domain}-${lang}]`
      } else {
        result = this.findTextCD(code, domain)
        if (result === null)
          result = `[${code}-${domain}]`
      }
    } else {
      if (lang) {
        result = this.findTextCL(code, lang)
        if (result === null)
          result = `[${code}-${lang}]`
      } else {
        result = this.findTextC(code)
        if (result == null)
          result = `[${code}]`
      }
    }
    return result
  }

  // Support functions for text()
  findTextCDL=(code, domain, lang)=>{
    let dl = `${domain}-${code}`
    return(
      ((typeof this.db[dl] === 'object') &&
      (typeof this.db[dl][lang] === 'string'))?
        this.db[dl][lang] : null
    )
  }
  findTextCL=(code, lang)=>{
    for (var i=0; i<this.dm.length; i++) {
      text = this.findTextCDL(code, this.dm[i], lang)
      if (text !== null)
        return text
    }
    return null
  }
  findTextCD=(code, domain)=>{
    return this.findTextCDL(code, domain, this.lang)
  }
  findTextC=(code)=>{
    for (var i=0; i<this.dm.length; i++) {
      text = this.findTextCDL(code, this.dm[i], this.lang)
      if (text !== null)
        return text
    }
    return null
  }

}

// format function: "{0}, How are you".format("Jason") => "Jason, How are you"
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};
