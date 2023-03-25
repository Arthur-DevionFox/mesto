export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
        this._btn = formElement.querySelector(config.submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners()
        this._toggleButtonState()
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)

        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.errorClass)
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        errorElement.textContent = '';
        errorElement.classList.remove(this._config.errorClass);
    }

    resetErrors() {
        this._inputs.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
        this._toggleButtonState();
    }
    _hasInvalidInput = () => this._inputs.some((input) => !input.validity.valid);

    _toggleButtonState() {
        this._btn.disabled = this._hasInvalidInput();
    }

    _checkInputValid(input) {
        if (!input.validity.valid) {
            // Передадим сообщение об ошибке вторым аргументом
            this._showInputError(input, input.validationMessage);
        } else {
            this._hideInputError(input);
        }
    }

    _setEventListeners() {
        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValid(inputElement);
                this._toggleButtonState();
            })
        })
    }
}