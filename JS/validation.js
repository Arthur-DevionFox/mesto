// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const configurationValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_non-active',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible'
};


const checkInputValid = (form, input, config) => {
    if (!input.validity.valid) {
            // Передадим сообщение об ошибке вторым аргументом
             showInputError(form, input, input.validationMessage, config);
         }
    else {
             hideInputError(form, input, config);
         }
}

const hasInvalidInput = (inputList) => inputList.some((input) => !input.validity.valid);


const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass)
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass)
}

const toggleButtonState = (inputList, button) => button.disabled = hasInvalidInput(inputList);

const setEventListeners = (formElement, config) => {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector))
    const btn = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, btn, config);

    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValid(formElement, inputElement, config);
            toggleButtonState(inputs, btn, config)
        })
    })
}

const resetErrors = (formElement, config) => {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector))
    const btn = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, btn, config);

    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement, config);
    })
}

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
        setEventListeners(formElement, config);
    })
}

enableValidation(configurationValidation);