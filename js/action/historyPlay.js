import config from "./config.js"

const historyPlay = {
    history:[],
    addHistory(correctAnswer, rounds) {
        const _this = this
        this.history.push(
            {
                correctAnswer: correctAnswer,
                rounds: rounds
            }
        )
        if (this.history.length > 5){
            this.history.shift()
        }
        config.setConfig("historyPlay", this.history)
    }  
} 

export default historyPlay