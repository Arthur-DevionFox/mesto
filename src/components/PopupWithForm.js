import Popup from "./Popup";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, formSubmit /*editProfileData*/) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));

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
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }





}