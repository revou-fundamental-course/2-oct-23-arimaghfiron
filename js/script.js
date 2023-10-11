const inputField = document.getElementById("input-field")
const resultField = document.getElementById("result-field")
const formulaField = document.getElementById("formula-field")
const btnConvert = document.getElementById("btn-convert")
const btnReset = document.getElementById("btn-reset")
const btnReverse = document.getElementById("btn-rereverse")
const inputLabel = document.getElementById("input-label")
const resultLabel = document.getElementById("result-label")
let isReverse = false
const intRegex = /^[+-.,eE\d]+$/

const convert = () => {
  try {
    if (intRegex.test(inputField.value)) {
      if (!isReverse) {
        resultField.value = (inputField.value * 9 / 5) + 32
        formulaField.value = `${inputField.value}℃ * (9/5) + 32 = ${resultField.value}℉`
      } else {
        resultField.value = (inputField.value - 32) * 5 / 9
        formulaField.value = `(${inputField.value}℉ - 32) * 5/9 = ${resultField.value}℃`
      }
    } else {
      throw new SyntaxError("Hanya menerima input tipe angka (desimal & negatif) !")
    }
  }
  catch(error) {
    alert("Konversi Gagal : " + error.message)
  }
}

const reverse = () => {
  try {
    isReverse = !isReverse
    let temp = inputLabel.innerText
    inputLabel.innerText = resultLabel.innerText
    resultLabel.innerText = temp
    inputField.value = resultField.value
    if (resultField.value) {
      convert()
    }
  }
  catch(error) {
    alert("Reverse Gagal : " + error.message)
  }
}

const reset = () => {
  try {
    inputField.value = null
    resultField.value = ""
    formulaField.value = ""
  }
  catch(error) {
    alert("Reset Gagal : " + error.message)
  }
}