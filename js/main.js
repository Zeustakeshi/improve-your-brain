import clickNumbers from './action/handleClickNumber.js'
import Result from "./Result.js"
import Modal from './action/handleModal.js'
import timeLimit from "./action/handleTimeLimit.js"
import historyPlay from './action/historyPlay.js'
import config from './action/config.js'
import Help from './Help.js'
import Settings from './Setting.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const btnPlay = $('.play-btn')
const hourGlass = $('.timer .label img')
let number1 = $(".number-1")
let number2 = $(".number-2")
const App = {
    currentScores:{
        correctAnswer:0,
        rounds:0,
    },
    isStart : false,
    loading(time){
        const loader = $('.loader')
        const homeScreen = $('.home-screen')
        const curtainBottom = $('.curtain-bottom')
        const curtainTop = $('.curtain-top')
        setTimeout(() => {
            curtainBottom.style.animation = `close-curtain-bottom ${time*50 /100}s 1`
            curtainTop.style.animation = `close-curtain-top ${time*50 /100}s 1`
            loader.style.animation = `hiden-loader ${time*10 /100}s 1`
        },time*500)
        setTimeout(() =>{
            homeScreen.style.display = 'none'
        }, time * 1000)
    },
    handleEvent(){
        const _this = this
        //handle click settings
        $('.setting').addEventListener('click', ()=>{
            Settings.renderSetting("Setting")
            Settings.handleOption()
        })
        // handle click help
        $('.help').addEventListener('click', ()=>{
            Help.renderHelp("Help")
            Help.handleOption()
        })
        // handle click button play
        btnPlay.addEventListener('click', () =>{
            if(_this.isStart){
                return false
            }else{
                _this.isStart = true
                btnPlay.textContent = "^_^"
                alert('Please choose the larger number!')
                hourGlass.style.animation = "rotate 5s infinite ease-in-out forwards"
                number1.textContent = Math.floor(Math.random() * 101)
                number2.textContent = Math.floor(Math.random() * 101)
                /// handle time limit
                timeLimit(() =>{
                    btnPlay.textContent = "Start"
                    hourGlass.style.animation = ""
                    _this.isStart = false
                    _this.handleScores(_this.currentScores, _this.highScore)
                },30)
            }  
        }) 
        // handle click number 1
        number1.addEventListener('click', ()=>{
            if (_this.isStart){
                clickNumbers(number1,number2, _this)
                _this.currentScores.rounds ++
                number1.style.cssText = 'cursor: pointer;'
            }else {
                number1.style.cssText = 'cursor: default;'
                return false
            }
        })
        // handle click number 2
        number2.addEventListener('click', ()=>{
            if (_this.isStart){
                clickNumbers(number2,number1, _this)
                _this.currentScores.rounds ++ 
                number2.style.cssText = 'cursor: pointer;'
            }else{
                number2.style.cssText = 'cursor: default;'
                return false
            }
        })  
    },
    handleScores(currentScores, highScores){
        let htmlResult 
        const rounds = currentScores.rounds
        const correctAnswer = rounds !== 0 ? 
            Math.floor((currentScores.correctAnswer / rounds)* 100 ):0
        if (correctAnswer >= highScores.correctAnswer && rounds >= highScores.rounds){
            htmlResult = Result.html("You Win!!", true , correctAnswer , rounds , this.highScore)
            Modal.showModal("result", htmlResult)
            this.resetLevel(true, correctAnswer, rounds)
        }else {
            htmlResult = Result.html("You Lose!!", false , correctAnswer , rounds, this.highScore)
            Modal.showModal("result", htmlResult)
            this.resetLevel(false, correctAnswer, rounds)   
        }
    },
    resetLevel(isWin, correctAnswer , rounds) {
        historyPlay.addHistory(correctAnswer, this.currentScores.rounds)
        if (isWin) {
            this.highScore.correctAnswer = correctAnswer
            this.highScore.rounds = rounds
            this.currentScores.correctAnswer = 0
            this.currentScores.rounds = 0
            $(".precentage").textContent = `Correct Answer: ${this.highScore.correctAnswer}%`
            $(".rounds").textContent = `Rounds: ${this.highScore.rounds}`
            config.setConfig("highScore", this.highScore)
        }else{
            this.currentScores.correctAnswer = 0
            this.currentScores.rounds = 0
        }
        number1.textContent = 0
        number2.textContent = 0
    },
    start(){
        this.loading(3)
        config.loadConfig(this)
        this.handleEvent()
    }
}
App.start()
