'use strict'

const InputHandler = (function() {
  const addButton = document.querySelector('.btn-plus')
  const subtractButton = document.querySelector('.btn-minus')
  let returnValue
  let subtract = function() {
    subtractButton.addEventListener('click', event => {
      const inputValue = document.querySelector('#input-field').value
      return inputValue
    })
  }
  let add = function() {
    addButton.addEventListener('click', event => {
      const inputValue = document.querySelector('#input-field').value
      return inputValue
    })
    return returnValue
  }
  return {
    add,
    subtract
  }
})()

export default InputHandler
