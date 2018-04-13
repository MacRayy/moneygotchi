'use strict'

import JsonImport from './json-import.js'

const App = function() {
  const jsonPath = '../json-data/account_10731833-43130014.json'
  let jsonData;

  console.log('alma')

  JsonImport.getJsonData(jsonPath, function(response) {
    jsonData = response
    console.log(jsonData)
  })

}

App()
