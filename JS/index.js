import {Card} from './Card.js'
import {FormValidator, configurationValidation} from "./FormValidator.js";
import * as data from "./constants.js"


function openImagePopup(name, link) {
    data.popupCardImage.src = link;
    data.popupCardImage.alt = name;
    data.popupCardCaption.textContent = name;
    openPopup(data.popupImg);
}

const setPopupListeners = () => {
    data.popups.forEach(() => {
        document.addEventListener('click', closePopupByClick);
    })
}
setPopupListeners();


const createCard = (cardData) => {
    const newCard = new Card('#element', cardData, openImagePopup);
    return newCard.createCard();
}

const formAddValidator = new FormValidator(configurationValidation, data.popupAdd);
const formEditValidator = new FormValidator(configurationValidation, data.popupEdit);

formAddValidator.enableValidation();
formEditValidator.enableValidation();


initialCards.forEach((cardItem) => {
    data.cardsContainer.append(createCard(cardItem))
})

// Открытие PopUp
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keyup', handleEscUp)
}

function fillProfileFormInputs() {
    data.nameRes.value = data.nameProf.textContent
    data.professionRes.value = data.profession.textContent
}

// Закрытие PopUp
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp)
}

function closePopupByClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }

    if (evt.target.classList.contains('popup__close')) {
        closePopup(evt.target.closest('.popup'));
    }
}


const handleEscUp = (evt) => {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};
// Сохранение значений PopUp
function saveFuncEdit(evt) {
    closePopup(data.popupEdit);
    data.nameProf.textContent = data.nameRes.value
    data.profession.textContent = data.professionRes.value
    evt.preventDefault();
}

function saveFuncAdd(evt) {
    data.cardsContainer.prepend(createCard({name: data.headInput.value, link: data.urlInput.value}));
    closePopup(data.popupAdd);
    evt.preventDefault();
}


data.btnEdit.addEventListener('click', function () {
    openPopup(data.popupEdit);
    fillProfileFormInputs(data.popupEdit);
    formEditValidator.resetErrors(data.formEdit, configurationValidation);
});
data.btnAdd.addEventListener('click', function () {
    openPopup(data.popupAdd);
    data.formAdd.reset();
    formAddValidator.resetErrors(data.formAdd, configurationValidation);
});

data.formEdit.addEventListener('submit', saveFuncEdit);
data.formAdd.addEventListener('submit', saveFuncAdd);
