const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const modal = $(".app-modal")
const Modal = {
    showModal(type , modalContent , ischange ){
        let html = `
        <div class= "overlay"></div>
        <div class= "${type} modal">
            <div class="modal-btn-close">
                <ion-icon name="close" class = "icon-close"></ion-icon>
            </div>
            <div class="${type}-container">
                ${modalContent}
            </div>
        </div>
        `
        // render modal
        
        const htmlTypeChange = $(`.${type}-container`)
        if (ischange){
            htmlTypeChange.innerHTML = modalContent
        }
        else{
            modal.innerHTML = html
            const htmlType = $(`.${type}`)
            htmlType.style.animation = "showModal 0.6s 1 ease-out"
        }
        // handle close 
        $(".modal-btn-close").addEventListener("click", () => {
            this.hidenModal(type)
        })
    },
    hidenModal(type){
        const htmlType = $(`.${type}`)
        htmlType.style.animation = "hidenModal .8s 1 ease-out"
        setTimeout(() => {
            modal.innerHTML = ""
        }, 800);
    },
    showMess(mess, isCorrect){
        const message = $('.messages')
        const messageContent = $('.messages-content')
        if (message.classList.contains(isCorrect ? "wrong" : "correct")){
            message.classList.remove(isCorrect ? "wrong" : "correct")
        }
        messageContent.textContent = mess
        message.classList.add('show', isCorrect ? "correct" : 'wrong' )
        setTimeout(() =>{
            message.classList.remove('show', isCorrect ? "correct" : 'wrong')
        },500)
    } 

}
 
export default Modal