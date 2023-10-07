const inputField = document.getElementById("input-field")
const resultField = document.getElementById("result-field")
const formulaField = document.getElementById("formula-field")
const btnConvert = document.getElementById("btn-convert")
const btnReset = document.getElementById("btn-reset")
const btnReverse = document.getElementById("btn-rereverse")
const inputLabel = document.getElementById("input-label")
const resultLabel = document.getElementById("result-label")
let isReverse = false

const convert = () => {
    if(!isReverse){
        resultField.value = (inputField.value * 9 / 5) + 32
        formulaField.value = `${inputField.value}C * (9/5) + 32 = ${resultField.value}F`
    }
    else{
        resultField.value = (inputField.value - 32) * 5 / 9
        formulaField.value = `(${inputField.value}F - 32) * 5/9 = ${resultField.value}C`
    }
}

const reverse = () => {
    isReverse = !isReverse
    let temp = inputLabel.innerText 
    inputLabel.innerText = resultLabel.innerText 
    resultLabel.innerText = temp
    inputField.value = resultField.value
    convert()
}

const reset = () => {
    inputField.value = null
    resultField.value = ""
    formulaField.value = ""
}