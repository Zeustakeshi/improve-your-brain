import Modal from './action/handleModal.js'
import historyPlay from './action/historyPlay.js'
import handleAsRange from './action/handleAsRange.js'
import config from './action/config.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const Help = {
    selector:$('.help'),
    mainHtml(title, contentHelp){
        return (`
        <div class="notifi-title">${title}</div>
        <div class="notifi-content">${
            contentHelp ||
           `<ul class="notifi-content-list">
                <li class="help-how-play">How to Play ?</li>
                <li class="help-contact-us">Author Info</li>
                <li class="help-history-play">History</li>
            </ul>`
        }
        </div>`)
    },
    options:{
        howToPlay(modalContentPrev){
            $(".help-how-play").addEventListener('click', ()=>{
                const howToPlayHtml = `
                    <p class = 'notifi-option how-play-content'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo blanditiis necessitatibus molestias expedita maiores laudantium culpa consequuntur laboriosam quidem cupiditate veniam eos, ex temporibus vero animi officiis similique accusantium fugit nesciunt, optio aspernatur. Dolores itaque iusto in molestias ea veritatis accusamus, unde, dolorem quibusdam earum explicabo incidunt officia commodi quia quisquam repellendus voluptate omnis neque maxime repellat quas culpa consequatur eaque error? Vel eos labore voluptate, quia ut itaque amet ad optio eligendi provident veritatis sequi molestiae soluta eaque delectus, tenetur a doloremque deserunt id? Laborum dicta veniam laboriosam corrupti! Sint nemo aperiam iure vero modi corrupti temporibus dignissimos.
                    </p>
                `
                const helpHtml = Help.mainHtml("How to play", howToPlayHtml)
                Modal.showModal("notifi",helpHtml, true , modalContentPrev , true )
            })
        },
        contactUs(modalContentPrev){ 
            $('.help-contact-us').addEventListener('click', () =>{
                const contactUsHtml = `
                <div class="notifi-option contact-content">
                    <div class="author-img">
                        <img src="./img/author.jpg" alt="author">
                    </div>
                    <div class="author-info">
                        <div class="author-name"><span>Name:</span> Minh Hiếu</div>
                        <div class="author-job"><span>Job:</span> Front-end Developer</div>
                        <ul class="author-info-icon">
                            <li class="author-phone"> 
                                <a href="tel:+84 916561440" class="author-phone" ><img src="./img/contact-author/phone-icon.svg" alt=""> </a>
                            </li>
                            <li class="author-email">
                                <a href="mailto: gaconmvp2312@gmail.com"class="link-phone-email" ><img src="./img/contact-author/gmail-icon.svg" alt=""> </a>
                            </li>
                            <li class = "author-github">
                                <a href="https://github.com/Zeustakeshi">
                                    <img src="./img/contact-author/github-icon.svg" alt="">
                                </a>
                                
                            </li>
                            <li class = "author-linkin">
                                <a href="#">
                                    <img src="./img/contact-author/linkin-icon.svg" alt="">
                                </a>
                            </li>
                            <li class = "author-zalo">
                                <a href="https://zalo.me/0916561440">
                                    <img src="./img/contact-author/zalo-icon.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                `
                const helpHtml = Help.mainHtml("Contact Me!", contactUsHtml)
                Modal.showModal("notifi",helpHtml, true , modalContentPrev ,true)
            })
        },
        historyPlay(modalContentPrev, highScore) {
            $('.help-history-play').addEventListener('click', ()=>{
                let historyPlayHtml 
                const historyPlayItem = historyPlay.history.map((ele) =>{
                    return (`
                    <li class="history-item">
                        <div class="history-item-c">
                            <span>Correct Answer: ${ele.correctAnswer}% </span>
                            <div class ="as-range"><span></span></div>
                        </div>
                        <div class="history-item-r">
                            <span>Rounds: ${ele.rounds}</span>
                            <div class ="as-range-rounds"><span></span></div>
                        </div>
                    </li>`)
                })
                if (historyPlay.history.length === 0) {
                    historyPlayHtml = `
                        <div class="notifi-option history-play-content history-play-content--no ">
                            <p>
                                No History
                            </p>
                            <div class="history-play-img">
                                <img src="./img/no-history.svg" alt="">
                            </div>
                        </div>
                    `
                }else{
                    historyPlayHtml = `
                    <div class="notifi-option history-play-content">
                        <ul class="history-list">
                            ${historyPlayItem.reverse().join('')}
                        </ul>
                    </div>
                    `
                }
                const helpHtml = Help.mainHtml("History ", historyPlayHtml)
                Modal.showModal("notifi",helpHtml, true , modalContentPrev, true)
                historyPlay.history.forEach((ele, index) => {
                    handleAsRange(ele.correctAnswer, ele.rounds , highScore , historyPlay.history.length - index - 1)
                })
            })
        }
    },
    renderHelp(title) {
        Modal.showModal("notifi",this.mainHtml(title))
    },
    handleOption(){
        // handle click btn help
        const _this = this
        const helpHtml = _this.mainHtml('Help')
        const modalContentPrev = {
            html : helpHtml,
            options: _this.handleOption.bind(Help)
        }
        // handle click how to play
        _this.options.howToPlay(modalContentPrev)
        // handle click contact us
        _this.options.contactUs(modalContentPrev)
        //handle click history play
        _this.options.historyPlay(modalContentPrev, config.getConfig.highScore)

    },
}


export default Help