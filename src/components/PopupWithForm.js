import Popup from "./Popup";

export default class PopupWithForm extends Popup{
    constructor({ popupSelector, formSubmit } /*editProfileData*/) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        console.log(this._popup)
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__submit');
        this._submitButtonText = this._submitButton.textContent;


    }

    _getValues() {
        const inputsValue = {}
        this._inputs.forEach((input) => {
            inputsValue[ input.name ] = input.value
        })
        return inputsValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getValues())
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    loading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

}