export default class Popup {
    constructor(selector) {
        this._popup = selector;
        this._handleEscClose = this._handleEscClose.bind(this)
        this._closeByClick = this._closeByClick.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keyup', this._handleEscClose)
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    _closeByClick(evt) {
            if (evt.target.classList.contains('popup')) {
                console.log('click')
                this.close(evt.target);
            }

            if (evt.target.classList.contains('popup__close')) {
                console.log('click')
                this.close(evt.target.closest('.popup'));
            }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {this._closeByClick(evt)})
    }
}