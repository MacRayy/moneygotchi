'use strict'

import JsonImport from './json-import.js'
import JsonSummarize from './json-summarize.js'

const App = function() {
  const jsonPath = '../json-data/account_10731833-43130014.json'
  const jsonDateInterval = {
    first: '2018-01-01',
    last: '2018-04-14'
  }

  JsonImport.getJsonData(jsonPath, function(response) {
    console.log(JsonSummarize.JsonSummarize(response, jsonDateInterval))
  })


}

App()
