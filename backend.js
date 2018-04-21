'use strict'

const MoneygotchiBackend = function() {
  const fs = require('fs')

  const init = () => fileRead()

  const fileRead = () => {
    fs.readFile('transactionData.csv', 'utf-8', function(err, data) {
      if (err) throw err
      const rawLines = data.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/)
      getDataFromRawFile(rawLines.splice(1, rawLines.length-2))
    })
  }

  const getDataFromRawFile = rawLine => {

    const finalDataArray = rawLine.map( line => {
      let splittedLine = line.split(',')
      let finalDataByLine = []
      finalDataByLine.push(splittedLine[3])
      finalDataByLine.push(splittedLine[0].split(' ')[0])
      finalDataByLine.push(parseInt(splittedLine[5].split(' ')[0]))
      finalDataByLine.push(splittedLine[8])

      return finalDataByLine
    })

    createJsonDataStructure(finalDataArray)
  }

  const createJsonDataStructure =  dataToUse => {
    let idList = []
    const jsonData = dataToUse.reduce(function (allCards, card) {

      const pushCardDataToJson = () => {
        if(card[2] > 0) {
          allCards[card[0]].income.push({
            date: card[1],
            amount: card[2],
            category: card[3]
          })
        } else {
          allCards[card[0]].outcome.push({
            date: card[1],
            amount: card[2],
            category: card[3]
          })
        }
      }

      if(idList.includes(card[0])) {
        pushCardDataToJson()
      }
      else {
        idList.push(card[0])
        allCards[card[0]] = {
          income: [],
          outcome: []
        }
        pushCardDataToJson()
      }
      return allCards
    }, [])

    fileWriter(jsonData, '11777852-68261683')
  }

  const fileWriter = (jsonData, id) => {
    const dataToWrite = JSON.stringify(jsonData[id])
    const name = `account_${id}.json`
    fs.writeFile( name, dataToWrite, 'utf-8', function(err) {
      if (err) {
        return console.error(err)
      }
    })
  }

  return {
    init: init
  }
}

MoneygotchiBackend().init()
