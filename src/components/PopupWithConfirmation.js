import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector);
        this._confBtn = this._popup.querySelector('.popup__submit_delete')
    }

    submitCallback(removing) {
        this._handleSubmit = removing;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confBtn.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
}