import handleAsRange from './action/handleAsRange.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const Result = {
    html(titleResult, isWin, correctAnswer, rounds , highScore){
        
        const randomIconFeeling = (feel) =>{
            const index = Math.floor(Math.random() * this.iconFelling[feel].length)
            return this.iconFelling[feel][index]
        }
        const percentageRounds = highScore.rounds !== 0 ? 
            Math.floor(rounds / highScore.rounds * 100) : 100
        const title = `
        <div class="result-title result-title${isWin ? "--win": "--lose" }">
            ${titleResult}
        </div>
        ${isWin ? `<img ${randomIconFeeling("happy")} alt="" class="result-icon">` : `<img src = "../img/icon-felling/bad/3loser-lose.svg" alt="" class="result-icon">`}
        
        `
        let content = isWin ?
            `<div class="result-content">  
                ${  
                    rounds > highScore.rounds && percentageRounds <= 100? 
                    `
                        <span class="">Your Score:</span>   
                        <span class="">Rounds: ${rounds} </span>
                        <div class ="as-range-rounds"><span></span></div>
                        <span class="">High Score: </span>
                        <span class="">Rounds: ${highScore.rounds} </span>
                        <div class ="as-range-old "><span></span></div>
                    `: correctAnswer >= highScore.correctAnswer ? `
                        <span class="">Your Score:</span>
                        <span class="">Correct Answer: ${correctAnswer}% </span>
                        <div class ="as-range"><span></span></div>
                        <span class="">High Score: </span>
                        <span class="">Correct Answer: ${highScore.correctAnswer}% </span>
                        <div class ="as-range-old"><span></span></div>
                    `:``
                }
            </div>`:
            `<div class="result-content">
                ${
                    rounds < highScore.rounds ? 
                    `
                        <span class="">High Score: </span>
                        <span class="">Rounds: ${highScore.rounds} </span>
                        <div class ="as-range-old "><span></span></div>
                        <span class="">Your Score:</span>   
                        <span class="">Rounds: ${rounds} </span>
                        <div class ="as-range-rounds"><span></span></div>
                        <span class="">Wish you luck next time ^.^</span>
                    `:`
                        <span class="">High Score: </span>
                        <span class="">Correct Answer: ${highScore.correctAnswer}% </span>
                        <div class ="as-range-old"><span></span></div>
                        <span class="">Your Score:</span>
                        <span class="">Correct Answer: ${correctAnswer}% </span>
                        <div class ="as-range"><span></span></div>
                        <span class="">Wish you luck next time ^.^</span>
                    `
                }
            </div>
        `
        handleAsRange(correctAnswer, rounds , highScore)
        return title + content
    },
    iconFelling:{
        "bad":[
            'src = "../img/icon-felling/bad/3loser-lose.svg"',
            'src = "../img/icon-felling/bad/confused_face_smiley_icon_123392.svg"',
            'src = "../img/icon-felling/bad/emoji_emoticons_tongue_icon_123404.png"',
            'src = "../img/icon-felling/bad/lose.svg"',
            'src = "../img/icon-felling/bad/shock_shocked_smiley_icon_123400.svg"'
        ],
        "happy":[
            'src = "../img/icon-felling/happy/cool_smiley_sunglasses_icon_123402.svg"',
            'src = "../img/icon-felling/happy/happy_smiley_icon_123391.svg"',
            'src = "../img/icon-felling/happy/heart_love_smiley_icon_123396.svg"'
        ]
    }
}

export default Result
