const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const handleAsRange =  (correctAnswer ,rounds , highScore , isHistory) => {
    const percentageRounds = highScore.rounds !== 0 ? 
        Math.floor(rounds / highScore.rounds * 100) : 100
    const handleAddModifier = (varNeedToCompare,selector) =>{
        if(!selector[0] ) {
            return false
        }
        if (varNeedToCompare <= 45) {
            selector[0].classList.add('as-range--low')
        }else if(varNeedToCompare > 45 && varNeedToCompare <= 70){
            selector[0].classList.add('as-range--medium')
           
        }else{
            selector[0].classList.add('as-range--high')
        }
        const asRangeSpan = $$('.as-range span')
        const asRangeOldSpan = $$('.as-range-old span')
        const asRangeRoundsSpan = $$('.as-range-rounds span')


        asRangeSpan[0] 
        ? 
            asRangeSpan[0].style.width = `${correctAnswer}%` 
        : false

        asRangeOldSpan[0] ?
            asRangeOldSpan[0].style.width = `${highScore.correctAnswer}%` 
        : false

        asRangeRoundsSpan[0] ?
            asRangeRoundsSpan[0].style.width = `${percentageRounds}%` 
        : false
    }
    if (isHistory){
        handleAddModifier(highScore.correctAnswer , $$('.as-range-old'))
        handleAddModifier(percentageRounds,$$('.as-range-rounds'))
        handleAddModifier(correctAnswer,$$('.as-range'))   
    }
    else{
        setTimeout(() => {
            handleAddModifier(highScore.correctAnswer , $$('.as-range-old'))
            handleAddModifier(percentageRounds,$$('.as-range-rounds'))
            handleAddModifier(correctAnswer,$$('.as-range'))            
        },500);
    }
}

export default handleAsRange