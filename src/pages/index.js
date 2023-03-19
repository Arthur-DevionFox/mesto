import { Card } from '../components/Card.js'
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from '../utils/initialCards.js'
import * as data from "../utils/constants.js"
import './index.css'
import UserInfo from "../components/UserInfo";
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
} from "../utils/constants.js";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";

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

const createItem = (item) => {
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

const popupCreateCard = new PopupWithForm(popupAdd, createItem)
popupCreateCard.setEventListeners();

const formAddValidator = new FormValidator(data.configurationValidation, data.popupAdd);
const formEditValidator = new FormValidator(data.configurationValidation, data.popupEdit);

//слушатели
btnAdd.addEventListener('click', () => {
    popupCreateCard.open()
    formAddValidator.resetErrors()
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