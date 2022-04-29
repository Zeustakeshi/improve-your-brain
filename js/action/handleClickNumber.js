import Modal from "./handleModal.js"
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const clickNumbers = (number1, number2, _this) => {
    const oldValueNumber1 = Number(number1.textContent)
    const oldValueNumber2 = Number(number2.textContent)
    if (oldValueNumber1 > oldValueNumber2){
        Modal.showMess(true)
        _this.currentScores.correctAnswer ++
    }else{
        Modal.showMess(false)
    }
    let numberValue1 = Math.floor(Math.random() * 101)
    let numberValue2 = Math.floor(Math.random() * 101)
    number1.textContent = numberValue1
    number2.textContent = numberValue2 == number1.textContent ? Math.floor(Math.random() * 101) : numberValue2 
}

export default clickNumbers