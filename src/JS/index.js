import { Card } from './Card.js'
import { FormValidator, configurationValidation } from "./FormValidator.js";
import { initialCards } from './initialCards.js'
import * as data from "./constants.js"
import '../pages/index.css'
import UserInfo from "./UserInfo";
import {popupAdd, popupEdit, popupImg} from "./constants.js";
import Section from "./Section";
import Popup from "./Popup";
import PopupWithImage from "./PopupWithImage";


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


// Открытие PopUp
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keyup', handleEscUp)
}

function fillProfileFormInputs() {
    const { name, profession } = profile.getUserInfo();
    data.nameRes.value = name
    data.professionRes.value = profession
}
const section = new Section({items: initialCards, renderer: createCard }, '.elements');

section.renderItems()

const profile = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__profession' })

const popupEditFunctions = new Popup(popupEdit)
const popupAddFunctions = new Popup(popupAdd)
const popupImageOpen = new PopupWithImage(popupImg)



// Закрытие PopUp
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp)
}

function closePopupByClick(evt) {
    if (evt.target.classList.contains('popup')) {
        popupEditFunctions.close(evt.target);
        popupAddFunctions.close(evt.target)
    }

    if (evt.target.classList.contains('popup__close')) {
        popupEditFunctions.close(evt.target.closest('.popup'));
        popupAddFunctions.close(evt.target.closest('.popup'));
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
    popupEditFunctions.close()
    profile.setUserInfo({ name: data.nameRes.value, profession: data.professionRes.value })
    evt.preventDefault();
}

function saveFuncAdd(evt) {
    section.addItem(createCard({name: data.headInput.value, link: data.urlInput.value}));
    popupAddFunctions.close()
    evt.preventDefault();
}


data.btnEdit.addEventListener('click', function () {
    popupEditFunctions.open()
    fillProfileFormInputs(data.popupEdit);
    formEditValidator.resetErrors(data.formEdit, configurationValidation);
});
data.btnAdd.addEventListener('click', function () {
    popupAddFunctions.open();
    data.formAdd.reset();
    formAddValidator.resetErrors(data.formAdd, configurationValidation);
});

data.formEdit.addEventListener('submit', saveFuncEdit);
data.formAdd.addEventListener('submit', saveFuncAdd);
