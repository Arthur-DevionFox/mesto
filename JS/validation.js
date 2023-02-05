// включение валидации вызовом enableValidation
// все настройки передаются при вызове

config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_non-active',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible'
};

/*console.log(enableValidation.formSelector)*/

function hasInvalidInput(inputList) {
    const formInput = Array.from(document.querySelectorAll(inputList.inputSelector))

    formInput.forEach((formElement) => {
        if (!formElement.validity.valid) {
            // Передадим сообщение об ошибке вторым аргументом
            showInputError(formElement, formElement.validationMessage);
        } else {
            hideInputError(formElement);
        }
    })

    return function () {
        inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass)
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass)
}

const toggleButtonState = (inputList, button) => button.disabled = hasInvalidInput(inputList);

const evtListeners = (formElement, config) => {
    const inputs = Array.from(formElement.querySelector(config.inputSelector))
    const btn = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, btn, config);

    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            hasInvalidInput(formElement, inputElement);
            toggleButtonState(inputs, btn, config)
        })
    })
}

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            toggleButtonState(formElement, config);
        })
        evtListeners(formElement, config);
    })
}

enableValidation(config);