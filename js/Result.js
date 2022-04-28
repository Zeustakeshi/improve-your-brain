const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const Result = {
    html(titleResult, isWin, correctAnswer, rounds , highScore){
        const percentageRounds = highScore.rounds !== 0 ? 
            Math.floor(rounds / highScore.rounds * 100) : 100
        const title = `
        <div class="result-title">
            ${titleResult}
            ${isWin ? `<img src="./img/winner-win.svg" alt="" class="result-icon-win">` : `<img src="./img/3loser-lose.svg" alt="" class="result-icon-win">`}
        </div>`
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
        const handleAddModifier = (varNeedToCompare,selector) =>{
            if(!selector) return false
            if (varNeedToCompare <= 45) {
                selector.classList.add('as-range--low')
            }else if(varNeedToCompare > 45 && varNeedToCompare <= 70){
                selector.classList.add('as-range--medium')
            }else{
                selector.classList.add('as-range--high')
            }
        }

        setTimeout(() => {
            const correctAsRange = $('.as-range')
            const correctAsRangeRounds = $('.as-range-rounds')
            handleAddModifier(highScore.correctAnswer , $('.as-range-old'))
            handleAddModifier(percentageRounds,$('.as-range-rounds'))
            handleAddModifier(correctAnswer,$('.as-range'))            
            $('.as-range span') ? $('.as-range span').style.width = `${correctAnswer}%` : false
            $('.as-range-old span') ?  $('.as-range-old span').style.width = `${highScore.correctAnswer}%` : false
            $('.as-range-rounds span') ? $('.as-range-rounds span').style.width = `${percentageRounds}%` : false
            
        },500);
        return title + content
    },
}

export const resultHtml = Result.html