'use strict'

const JsonSummarize = (function() {

  const JsonSummarize = (jsonInput, jsonDateInterval) => {
    let balance = 0
    
    jsonInput.income.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        balance += transfer.amount
      }
    })

    jsonInput.outcome.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        balance += transfer.amount
      }
    })

    return balance
  }

  return {
    JsonSummarize
  }
})()

export default JsonSummarize
