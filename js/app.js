'use strict'

import JsonImport from './json-import.js'
import JsonSummarize from './json-summarize.js'
import Chart from './chart.js'

const App = function() {
  const jsonPath = '../json-data/account_11777852-68261683.json'

  JsonImport.getJsonData(jsonPath, function(response) {
    const todayButton = document.getElementById('today-button');
    const weekButton = document.getElementById('week-button');
    const monthButton = document.getElementById('month-button');
    const yearButton = document.getElementById('year-button');
    const moneygotchiImage = document.getElementById('moneygotchi-image-id');
    const listColumnIncome = document.getElementById('list-column-income');
    const listColumnOutcome = document.getElementById('list-column-outcome');
    const moneygotchiTalk = document.querySelector('.moneygotchi-says');

    let jsonDateInterval = {
      first: '2017-04-14',
      last: '2017-04-14'
    }

    let balance = JsonSummarize.JsonSummarize(response, jsonDateInterval)[0]
    let transfers = JsonSummarize.JsonSummarize(response, jsonDateInterval)[1]
    let income = balance[0]
    let outcome = balance[1]

    const datePicker1 = () => {
      todayButton.classList.remove('statement__btn--active')
      weekButton.classList.remove('statement__btn--active')
      monthButton.classList.remove('statement__btn--active')
      yearButton.classList.remove('statement__btn--active')
      event.target.classList.add('statement__btn--active')
      jsonDateInterval = {
        first: '2017-04-14',
        last: '2017-04-14'
      }
      balance = JsonSummarize.JsonSummarize(response, jsonDateInterval)[0]
      transfers = JsonSummarize.JsonSummarize(response, jsonDateInterval)[1]
      income = balance[0]
      outcome = balance[1]
      inputHandler()
      listCreator()
    }

    const datePicker2 = () => {
      todayButton.classList.remove('statement__btn--active')
      weekButton.classList.remove('statement__btn--active')
      monthButton.classList.remove('statement__btn--active')
      yearButton.classList.remove('statement__btn--active')
      event.target.classList.add('statement__btn--active')

      jsonDateInterval = {
        first: '2017-04-08',
        last: '2017-04-14'
      }
      balance = JsonSummarize.JsonSummarize(response, jsonDateInterval)[0]
      transfers = JsonSummarize.JsonSummarize(response, jsonDateInterval)[1]
      income = balance[0]
      outcome = balance[1]
      inputHandler()
      listCreator()
    }

    const datePicker3 = () => {
      todayButton.classList.remove('statement__btn--active')
      weekButton.classList.remove('statement__btn--active')
      monthButton.classList.remove('statement__btn--active')
      yearButton.classList.remove('statement__btn--active')
      event.target.classList.add('statement__btn--active')

      jsonDateInterval = {
        first: '2017-03-15',
        last: '2017-04-14'
      }
      balance = JsonSummarize.JsonSummarize(response, jsonDateInterval)[0]
      transfers = JsonSummarize.JsonSummarize(response, jsonDateInterval)[1]
      income = balance[0]
      outcome = balance[1]
      inputHandler()
      listCreator()
    }

    const datePicker4 = () => {
      todayButton.classList.remove('statement__btn--active')
      weekButton.classList.remove('statement__btn--active')
      monthButton.classList.remove('statement__btn--active')
      yearButton.classList.remove('statement__btn--active')
      event.target.classList.add('statement__btn--active')

      jsonDateInterval = {
        first: '2016-04-14',
        last: '2017-04-14'
      }
      balance = JsonSummarize.JsonSummarize(response, jsonDateInterval)[0]
      transfers = JsonSummarize.JsonSummarize(response, jsonDateInterval)[1]
      income = balance[0]
      outcome = balance[1]
      inputHandler()
      listCreator()
    }

    todayButton.addEventListener('click', datePicker1)
    weekButton.addEventListener('click', datePicker2)
    monthButton.addEventListener('click', datePicker3)
    yearButton.addEventListener('click', datePicker4)

    const right1 = document.getElementById('sector-1-right-id')
    const left1 = document.getElementById('sector-1-left-id')
    const incomeText = document.getElementById('income-text')
    const outcomeText = document.getElementById('outcome-text')
    const inputField = document.getElementById('input-field')
    const inputPlus = document.getElementById('input-plus')
    const inputMinus = document.getElementById('input-minus')

    const inputDataPlus = () => {
      income += Number(inputField.value)
      inputField.value = ''
      inputHandler()
      listCreator()
    }

    const inputDataMinus = () => {
      outcome -= Number(inputField.value)
      inputField.value = ''
      inputHandler()
      listCreator()
    }

    const moneygotchiEmotionHandler = percent => {
      let moneyGotchiEmoPower = 100 - percent
      console.log(moneyGotchiEmoPower)

      if(moneyGotchiEmoPower < 10) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_isover.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "I can't stand it any more!";
      }
      if(moneyGotchiEmoPower > 10 && moneyGotchiEmoPower < 25) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_istired.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "Please do not do this, we are in danger!";
      }
      if(moneyGotchiEmoPower > 25 && moneyGotchiEmoPower < 35) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_ismad.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "I have nothing left to say!";
      }
      if(moneyGotchiEmoPower > 35 && moneyGotchiEmoPower < 45) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_worry.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "Oo.. I can't believe you!";
      }
      if(moneyGotchiEmoPower > 45 && moneyGotchiEmoPower < 55) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_isbetter.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "It is gonna be fine!";
      }
      if(moneyGotchiEmoPower > 55 && moneyGotchiEmoPower < 65) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_isblinking.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "I am sooo proud of you!";
      }
      if(moneyGotchiEmoPower > 65 && moneyGotchiEmoPower < 75) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_satisfaction.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "We are getting there!";
      }
      if(moneyGotchiEmoPower > 75 && moneyGotchiEmoPower < 85) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_excitment.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "I can't wait to see you again!";
      }
      if(moneyGotchiEmoPower > 85 && moneyGotchiEmoPower < 90) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_ispartying.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "You are the best ever!";
      }
      if(moneyGotchiEmoPower > 90 && moneyGotchiEmoPower < 100) {
        moneygotchiImage.style.background = "url('../assets/img/moneygotchi_islove.png')";
        moneygotchiTalk.innerHTML = "";
        moneygotchiTalk.innerHTML = "Earth is a heaven with you!";
      }
    }

    let diagramPercent = 0
    const inputHandler = () => {

      if (income === 0 && outcome === 0) {
        income = 2
        outcome = 1
      }

      let percent = Math.abs(outcome) / income * 100
      if (percent > 100) {
        percent = 100
      }
      diagramPercent = 90 + 360 / 100 * percent;
      right1.style.background = 'linear-gradient(' + diagramPercent + 'deg, #FF6B6B 50%, #68E397 50%)';
      if (percent > 50) {
        left1.style.background = 'linear-gradient(90deg, transparent 50%, #FF6B6B 50%)';
      } else {
        left1.style.background = 'linear-gradient(90deg, #68E397 50%, transparent 50%)';
      }

      incomeText.innerHTML = 'Income: ' + income + ' HUF'
      outcomeText.innerHTML = 'Outcome: ' + outcome + ' HUF'
      moneygotchiEmotionHandler(percent)
    }
    inputHandler()
    inputPlus.addEventListener('click', inputDataPlus)
    inputMinus.addEventListener('click', inputDataMinus)

    const listCreator = () => {
      listColumnIncome.innerHTML = 'Income'
      listColumnOutcome.innerHTML = 'Expensives'
      console.log(transfers)

      transfers.income.forEach(element => {
        let oneRow = document.createElement('div')
        oneRow.classList.add('list-column-row')

        let date = document.createElement('span')
        date.innerHTML = element.date
        oneRow.appendChild(date)

        let category = document.createElement('span')
        category.innerHTML = element.category
        oneRow.appendChild(category)

        let amount = document.createElement('span')
        amount.innerHTML = element.amount
        oneRow.appendChild(amount)

        listColumnIncome.appendChild(oneRow)
      })

      transfers.outcome.forEach(element => {
        let oneRow = document.createElement('div')
        oneRow.classList.add('list-column-row')

        let date = document.createElement('span')
        date.innerHTML = element.date
        oneRow.appendChild(date)

        let category = document.createElement('span')
        category.innerHTML = element.category
        oneRow.appendChild(category)

        let amount = document.createElement('span')
        amount.innerHTML = element.amount
        oneRow.appendChild(amount)

        listColumnOutcome.appendChild(oneRow)
      })
    }
    listCreator()
  })
}

App()
