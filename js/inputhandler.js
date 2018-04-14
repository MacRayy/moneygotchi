'use strict'

const InputHandler = (function() {

  const addButton = document.querySelector('.btn-plus')
  const subtractButton = document.querySelector('.btn-minus')
  const inputField = document.getElementById('input-field')

  const getInput = () => inputField.value

  subtractButton.addEventListener('click', getInput)
  addButton.addEventListener('click', getInput)
  

  return {
    getInput
  }
})()

export default InputHandler
