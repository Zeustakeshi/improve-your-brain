import Help from '../Help.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const appModal = $(".app-modal")
const Modal = {
    showModal(type , modalContent , ischange, modalContentPrev, isPrev ){
        let html = `
            <div class= "overlay"></div>
            <div class= "${type} modal">
                <div class="notifi-container">
                    ${modalContent}
                </div>
            </div>
        `
        // render modal
        if (ischange){
            const htmlTypeChange = $(`.${type}-container`)
            htmlTypeChange.innerHTML = modalContent
        }
        else{
            appModal.innerHTML = html
            const htmlType = $(`.${type}`)
            htmlType.style.animation = "showModal 0.6s 1 ease-out"
        }
        // handle close 
        const modal = $('.modal')
        const htmlCloseBtn = `
            <div class="modal-btn-close">
                <ion-icon name="close" class = "icon-close"></ion-icon>
            </div>
        `
        const htmlBackBtn = `
            <div class="modal-btn-back">
                <ion-icon name="arrow-back-outline" class = "icon-back"></ion-icon>
            </div>
        `
        if (isPrev){
            const btnClose = $('.modal-btn-close')
            if (btnClose){
                btnClose.parentNode.removeChild(btnClose)
            }
            modal.insertAdjacentHTML( "afterBegin" , htmlBackBtn)
            const btnBack = $('.modal-btn-back')
            btnBack.addEventListener("click", () =>{
                this.showModal(type , modalContentPrev.html , true )
                modalContentPrev.options()
            })
        }else{
            const btnBack = $('.modal-btn-back')
            if (btnBack){
                btnBack.parentNode.removeChild(btnBack)
            }
            modal.insertAdjacentHTML( "afterBegin" , htmlCloseBtn)
            const btnClose = $('.modal-btn-close')
            btnClose.addEventListener("click", () =>{
                this.hidenModal(type)
            })
        }
        
        $('.overlay').addEventListener("click", (e) => this.hidenModal(type))
    },
    hidenModal(type){
        const htmlType = $(`.${type}`)
        htmlType.style.animation = "hidenModal .8s 1 ease-out"
        setTimeout(() => {
            appModal.innerHTML = ""
        }, 800);
    },
    showMess(isCorrect){
        const message = $('.messages')
        let messHtml
        if (message) {
            message.parentNode.removeChild(message)
        }
        if (isCorrect) {
            messHtml = `
                <div class="messages show correct">
                    <span class="messages-icon">
                        <ion-icon name="checkmark-circle-sharp" class = "messages-correct-icon"></ion-icon>
                    </span>
                    <span class="messages-content">Correct!</span>
                </div>
            `
        }else{
            messHtml = `
                <div class="messages show wrong">
                    <span class="messages-icon">
                        <ion-icon name="close-circle-sharp" class = "messages-wrong-icon"></ion-icon>
                    </span>
                    <span class="messages-content">Wrong!</span>
                </div>
            `
        }
        $('.app').insertAdjacentHTML( "beforeEnd" , messHtml)
        setTimeout(() =>{
            $('.messages').classList.remove("show")
        },600)
        
    } 

}
 
export default Modal