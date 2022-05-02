import Modal from './action/handleModal.js'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const Setting = {
    selector:$('.setting'),
    mainHtml(title, contentSetting){
        return (`
        <div class="notifi-title">${title}</div>
        <div class="-content">${
            contentSetting ||
           `<ul class="notifi-content-list">
                <li class="setting-theme">Theme</li>
                <li class="setting-language">Language</li>
            </ul>`
        }
        </div>`)
    },
    option:{
        changeTheme(modalContentPrev){
            $('.setting-theme').addEventListener('click', ()=>{
                const changeThemeHtml = `
                    <p
                        style = "text-align:center;"
                    >Coming Soon!!</p>
                `
                const settingHtml = Setting.mainHtml("Change Theme", changeThemeHtml)
                Modal.showModal("notifi",settingHtml, true , modalContentPrev, true)

            })
        },
        changeLanguage(modalContentPrev){
            $('.setting-language').addEventListener('click', ()=>{
                const changeLanguageHtml = `
                    <p
                        style = "text-align:center;"
                    >Coming Soon!!</p>
                `
                const settingHtml = Setting.mainHtml("Change Language", changeLanguageHtml)
                Modal.showModal("notifi",settingHtml, true , modalContentPrev, true)

            })
        }
    },
    renderSetting(title) {
        Modal.showModal("notifi",this.mainHtml(title))
    },
    handleOption(){
        const _this = this
        const settingHtml = this.mainHtml("Setting")
        const modalContentPrev = {
            html: settingHtml,
            options: _this.handleOption.bind(Setting)
        }
        // handle click change theme
        _this.option.changeTheme(modalContentPrev)
        // handle click change language
        _this.option.changeLanguage(modalContentPrev)
    },

}

export default Setting