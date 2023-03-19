import Popup from "./Popup";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, formSubmit /*editProfileData*/) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        this._inputsValue = {};
    }

    _getValues() {
        this._inputs.forEach((input) => {
            this._inputsValue[ input.name ] = input.value;
        })
        console.log(this._inputsValue)
        return this._inputsValue;
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