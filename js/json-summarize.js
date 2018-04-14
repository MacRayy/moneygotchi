'use strict'

const JsonSummarize = (function() {

  const JsonSummarize = (jsonInput, jsonDateInterval) => {
    let income = 0
    let outcome = 0
    let transfers = {}
    transfers.income = []
    transfers.outcome = []

    jsonInput.income.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        income += transfer.amount
        transfers.income.push(transfer)
      }
    })

    jsonInput.outcome.forEach( transfer => {
      if(jsonDateInterval.first <= transfer.date && jsonDateInterval.last >= transfer.date) {
        outcome += transfer.amount
        transfers.outcome.push(transfer)
      }
    })

    let balance = [income, outcome]
    let data = [balance, transfers]

    return data
  }

  return {
    JsonSummarize
  }
})()

export default JsonSummarize
