import Modal from './action/handleModal.js'
import historyPlay from './action/historyPlay.js'
import handleAsRange from './action/handleAsRange.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const Help = {
    selector:$('.help'),
    mainHtml(title, contentHelp){
        return (`
        <div class="help-notifi-title">${title}</div>
        <div class="help-notifi-content">${
            contentHelp ||
           `<ul class="help-content-list">
                <li class="help-how-play">How to Play ?</li>
                <li class="help-contact-us">Author Info</li>
                <li class="help-history-play">History Play</li>
            </ul>`
        }
        </div>`)
    },
    options:{
        howToPlay(){
            $(".help-how-play").addEventListener('click', ()=>{
                const howToPlayHtml = `
                    <p class = 'help-option how-play-content'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo blanditiis necessitatibus molestias expedita maiores laudantium culpa consequuntur laboriosam quidem cupiditate veniam eos, ex temporibus vero animi officiis similique accusantium fugit nesciunt, optio aspernatur. Dolores itaque iusto in molestias ea veritatis accusamus, unde, dolorem quibusdam earum explicabo incidunt officia commodi quia quisquam repellendus voluptate omnis neque maxime repellat quas culpa consequatur eaque error? Vel eos labore voluptate, quia ut itaque amet ad optio eligendi provident veritatis sequi molestiae soluta eaque delectus, tenetur a doloremque deserunt id? Laborum dicta veniam laboriosam corrupti! Sint nemo aperiam iure vero modi corrupti temporibus dignissimos.
                    </p>
                `
                const helpHtml = Help.mainHtml("How to play", howToPlayHtml)
                Modal.showModal("help-notifi",helpHtml, true)
            })
        },
        contactUs(){ 
            $('.help-contact-us').addEventListener('click', () =>{
                const contactUsHtml = `
                <div class="help-option contact-content">
                    <div class="author-img">
                        <img src="./img/author.jpg" alt="author">
                    </div>
                    <div class="author-info">
                        orem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo blanditiis necessitatibus molestias expedita maiores laudantium culpa consequuntur laboriosam quidem 
                    </div>
                </div>
                `
                const helpHtml = Help.mainHtml("Contact Me!", contactUsHtml)
                Modal.showModal("help-notifi",helpHtml, true)
            })
        },
        historyPlay(highScore) {
            $('.help-history-play').addEventListener('click', ()=>{
                let historyPlayHtml 
                if (historyPlay.history.length === 0) {
                    historyPlayHtml = `
                        <div class="help-option history-play-content history-play-content--no ">
                            <p>
                                No History
                            </p>
                            <div class="history-play-img">
                                <img src="./img/no-history.svg" alt="">
                            </div>
                            <img src="./img/no-history-icon.svg" alt="" class="history-play-icon">
                        </div>
                    `
                }else{
                   
                    historyPlayHtml = `
                    <div class="help-option history-play-content">
                        <ul class="history-list"></ul>
                    </div>
                    `
                }
                const helpHtml = Help.mainHtml("History Play", historyPlayHtml)
                Modal.showModal("help-notifi",helpHtml, true)
                historyPlay.history.forEach((ele)=>{
                    $('.history-list').insertAdjacentHTML( "afterbegin",
                    `<li class="history-item">
                        <div class="history-item-c">
                            <span>Correct: ${ele.correctAnswer}% </span>
                            <div class ="as-range"><span></span></div>
                        </div>
                        <div class="history-item-r">
                            <span>Rounds: ${ele.rounds}</span>
                            <div class ="as-range-rounds"><span></span></div>
                        </div>
                    </li>`
                    )
                    handleAsRange(ele.correctAnswer, ele.rounds , highScore , true)
                })
            })
        }
    },
    handleOption(highScore){
        const _this = this
        // handle click btn help
        this.selector.addEventListener("click", ()=>{
            const helpHtml = _this.mainHtml('Help')
            Modal.showModal("help-notifi",helpHtml)
            // handle click how to play
            _this.options.howToPlay()
            // handle click contact us
            _this.options.contactUs()
            //handle click history play
            _this.options.historyPlay(highScore)
        })

    },
    html(){

    }
}

export const helpHtml = Help.mainHtml
export default Help