import { Card } from './Card.js'
import { FormValidator, configurationValidation } from "./FormValidator.js";
import { initialCards } from './initialCards.js'
import * as data from "./constants.js"
import '../pages/index.css'
import UserInfo from "./UserInfo";
import {
    btnAdd,
    btnEdit,
    nameProf,
    nameRes,
    popupAdd,
    popupEdit,
    popupImg,
    profession,
    professionRes
} from "./constants.js";
import Section from "./Section";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";

//функции
const openImagePopup = (name, link) => {
    popupImage.open({ name, link })
}

const renderCard = (cardData) => {
    const newCard = new Card('#element', cardData, openImagePopup);
    return newCard.createCard();
}

const editProfileData = (data) => {
    profile.setUserInfo({name: data.name, profession: data.profession})
    popupUserInfo.close()
}

const newItem = (item) => {
    const newItem = renderCard(item)
    section.addItem(newItem)
}

//Образы
const section = new Section({items: initialCards, renderer: renderCard }, '.elements');
section.renderItems()

const popupUserInfo = new PopupWithForm(popupEdit, editProfileData)
popupUserInfo.setEventListeners();

const popupImage = new PopupWithImage(popupImg)
popupImage.setEventListeners();

const profile = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__profession' })

const popupCreateCard = new PopupWithForm(popupAdd, newItem)
popupCreateCard.setEventListeners();

const formAddValidator = new FormValidator(configurationValidation, data.popupAdd);
const formEditValidator = new FormValidator(configurationValidation, data.popupEdit);

//слушатели
btnAdd.addEventListener('click', () => {
    popupCreateCard.open()
})

btnEdit.addEventListener('click', () => {
    popupUserInfo.open();
    const edit = profile.getUserInfo();
    nameRes.value = edit.name;
    professionRes.value = edit.profession;
})


//вкл валидации
formAddValidator.enableValidation();
formEditValidator.enableValidation();
