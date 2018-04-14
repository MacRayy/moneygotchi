'use strict'

const JsonSummarize = (function() {

  const JsonSummarize = (jsonInput, jsonDateInterval) => {
    let income = 0
    let outcome = 0

    jsonInput.income.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        income += transfer.amount
      }
    })

    jsonInput.outcome.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        outcome += transfer.amount
      }
    })

    let balance = [income, outcome]
    return balance
  }

  return {
    JsonSummarize
  }
})()

export default JsonSummarize
