const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const handleAsRange =  (correctAnswer ,rounds , highScore , index) => {
    const percentageRounds = highScore.rounds !== 0 ? 
        Math.floor(rounds / highScore.rounds * 100) : 100
    const handleAddModifier = (varNeedToCompare,selector) =>{
        if(!selector[index] ) {
            return false
        }
        if (varNeedToCompare <= 45) {
            selector[index].classList.add('as-range--low')
        }else if(varNeedToCompare > 45 && varNeedToCompare <= 70){
            selector[index].classList.add('as-range--medium')
           
        }else{
            selector[index].classList.add('as-range--high')
        }
        const asRangeSpan = $$('.as-range span')
        const asRangeOldSpan = $$('.as-range-old span')
        const asRangeRoundsSpan = $$('.as-range-rounds span')
        asRangeSpan[index] 
        ? 
            asRangeSpan[index].style.width = `${correctAnswer}%` 
        : false

        asRangeOldSpan[index] ?
            asRangeOldSpan[index].style.width = `${highScore.correctAnswer}%` 
        : false

        asRangeRoundsSpan[index] ?
            asRangeRoundsSpan[index].style.width = `${percentageRounds}%` 
        : false
    }
    setTimeout(() => {
        handleAddModifier(highScore.correctAnswer , $$('.as-range-old'))
        handleAddModifier(percentageRounds,$$('.as-range-rounds'))
        handleAddModifier(correctAnswer,$$('.as-range'))            
    },500);
}

export default handleAsRange
