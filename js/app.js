'use strict'

import JsonImport from './json-import.js'
import InputHandler from './inputhandler.js'

const App = function() {
  console.log('alma')
  InputHandler.subtract()
  InputHandler.add()
  JsonImport.log()
}

App()
