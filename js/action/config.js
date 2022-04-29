
import historyPlay from './historyPlay.js';
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const VOVOV_STORAGE_KEY = 'VOVOV-APP'
const config = {
    config: JSON.parse(localStorage.getItem(VOVOV_STORAGE_KEY)) || {},
    setConfig(key, value) {
        this.config[key] = value
        localStorage.setItem(VOVOV_STORAGE_KEY, JSON.stringify(this.config))
    },
    loadConfig(obj){
        // get high score form local storage
        obj.highScore = this.config.highScore || 
        {
            correctAnswer: 0,
            rounds:0
        }
        // render high score
        $(".precentage").textContent = `Correct Answer: ${obj.highScore.correctAnswer}%`
        $(".rounds").textContent = `Rounds: ${obj.highScore.rounds}`
        // get history play from local storage
        if (this.config.historyPlay){
            historyPlay.history = [...this.config.historyPlay]
        }else{
            historyPlay.history = []
        }
    },
    
}


export default config