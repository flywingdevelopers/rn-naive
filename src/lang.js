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
*   // Perform translation,
*     this.lang.text(code, [lang], [domain])
**/

import React from 'react'
import Text from './text'

export default class Lang {
  // Language Database
  db = {}
  // Array of known domains
  dm = []
  // Array of language definitions
  lg= []
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

  // Return a translated Text
  text=(code, lang, domain)=>{
    var result = null
    if (typeof doumain === 'undefined') {
      if (typeof lang === 'undefined') {
        result = this.findText1(code)
        if (result === null)
          result = `[${code}-${this.lang}]`
      } else {
        result = this.findText2(code, lang)
        if (result === null)
          result = `[${code}-${lang}]`
      }
    } else {
      result = this.findText3(code, lang, domain)
      if (result === null)
        result = `[${code}-${lang}-${domain}]`
    }
    return result
  }

  // Support functions for text()
  findText3=(code, lang, domain)=>{
    let dl = `${domain}-${code}`
    return(
      ((typeof this.db[dl] === 'object') &&
      (typeof this.db[dl][lang] === 'string'))?
        this.db[dl][lang] : null
    )
  }
  findText2=(code, lang)=>{
    for (var i=0; i<this.dm.length; i++) {
      text = this.findText3(code, lang, this.dm[i])
      if (text !== null)
        return text
    }
    return null
  }
  findText1=(code)=>{
    for (var i=0; i<this.dm.length; i++) {
      text = this.findText3(code, this.lang, this.dm[i])
      if (typeof text !== 'undefined') return text
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
