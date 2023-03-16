export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
        this._btnClose = document.querySelector('.popup__close')
    }

    open() {
        this._popup.classList.add('popup_opened')
        document.addEventListener('click', this._handleEscClose)
    }
    close() {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('click', this._handleEscClose)
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this._popup.classList.remove('popup_opened')

        }

    }

    setEventListeners() {
        this._btnClose.addEventListener('click', this.close)
    }
}