const inputField = document.getElementById("input-field")
const notifError = document.getElementById("notif-error")
const resultField = document.getElementById("result-field")
const formulaField = document.getElementById("formula-field")

const btnConvert = document.getElementById("btn-convert")
const btnReset = document.getElementById("btn-reset")
const btnReverse = document.getElementById("btn-rereverse")

const inputSpan = document.getElementById("input-span")
const resultSpan = document.getElementById("result-span")
const inputTemperature = document.getElementById("input-temperature")
const resultTemperature = document.getElementById("result-temperature")
let temperatureType = ""

const numberValidation = /^[+-.,eE\d]+$/

const convert = () => {
  try {
    if (numberValidation.test(inputField.value)) {
      temperatureType = inputTemperature.value + "to" + resultTemperature.value
      switch (temperatureType) {
        case "CtoF":
          resultField.value = (inputField.value * 9 / 5) + 32
          formulaField.value = `${inputField.value}℃ * (9/5) + 32 = ${resultField.value}℉`
          break;
        case "FtoC":
          resultField.value = (inputField.value - 32) * 5 / 9
          formulaField.value = `(${inputField.value}℉ - 32) * 5/9 = ${resultField.value}℃`
          break;
        default:
          throw new SyntaxError("Tipe Temperature tidak dapat dikonversi !")
          break;
      }
      notifError.style.display = "none"
    } else {
      throw new SyntaxError("Hanya menerima input tipe angka (desimal & negatif) !")
    }
  }
  catch(error) {
    notifError.innerText = "Konversi Gagal : " + error.message
    notifError.style.display = "block"

  }
}

const reverse = () => {
  try {
    let temp = inputSpan.innerText
    inputSpan.innerText = resultSpan.innerText
    resultSpan.innerText = temp
    inputField.value = resultField.value

    temp = inputTemperature.value
    inputTemperature.value = resultTemperature.value
    resultTemperature.value = temp

    notifError.style.display = "none"

    if (resultField.value) {
      convert()
    }
  }
  catch(error) {
    notifError.innerText = "Reverse Gagal : " + error.message
    notifError.style.display = "block"
  }
}

const reset = () => {
  try {
    inputField.value = null
    resultField.value = ""
    formulaField.value = ""
    notifError.style.display = "none"
  }
  catch(error) {
    notifError.innerText = "Reset Gagal : " + error.message
    notifError.style.display = "block"
  }
}

const changeTemperatureType = (position) => {
  try {
    switch (position) {
      case "input":
        inputSpan.innerText = inputTemperature.selectedOptions[0].text
        break;
      case "result":
        resultSpan.innerText = resultTemperature.selectedOptions[0].text
        break;
      default:
        console.log("Position not match")
      }
    }
    catch(error) {
      notifError.innerText = "Ganti Temperature Gagal : " + error.message
      notifError.style.display = "block"
    }
  }