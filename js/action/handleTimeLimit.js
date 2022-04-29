const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const timeLimit = (whenTimeLimit,timeLimit)=>{
    let timerMunites = $('.timer-munites')
    let timerSeconds = $('.timer-seconds')
    let munites = timeLimit >= 60 ? Math.floor(timeLimit / 60) : 0
    let seconds = timeLimit % 60 
    timerMunites.textContent = "00"  
    timerSeconds.textContent = "00"
    const interval = setInterval(() => {
        seconds --
        if (seconds <= 0 && munites <= 0){
            whenTimeLimit()
            clearInterval(interval)
        } else if (seconds <= 0 ){
            munites --
            seconds = 59
        }
        timerMunites.textContent = munites < 10 ? `0${munites}` : munites
        timerSeconds.textContent = seconds  < 10 ? `0${seconds}` : seconds
    }, 1000);
}

export default timeLimit


