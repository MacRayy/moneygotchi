'use strict'

const JsonImport = (function() {

  const getJsonData = (file, callback) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const parsedResponse = JSON.parse(xhr.response)
        callback(parsedResponse)
      }
    }
    xhr.open('GET', file)
    xhr.send()
  }

  return {
    getJsonData
  }
})()

export default JsonImport
