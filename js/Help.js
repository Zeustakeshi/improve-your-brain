import Modal from './action/handleModal.js'
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
                <li class="help-contact-us">My Info</li>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, esse.
                    </div>
                </div>
                `
                const helpHtml = Help.mainHtml("Contact us", contactUsHtml)
                Modal.showModal("help-notifi",helpHtml, true)
            })
        }
    },
    handleOption(){
        const _this = this
        // handle click btn help
        this.selector.addEventListener("click", ()=>{
            const helpHtml = _this.mainHtml('Help')
            Modal.showModal("help-notifi",helpHtml)
            // handle click how to play
            _this.options.howToPlay()
            // handle click contact us
            _this.options.contactUs()
        })

    },
    html(){

    }
}

export const helpHtml = Help.mainHtml
export default Help