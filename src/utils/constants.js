export const configurationValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_non-active',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible'
};

export const popups = Array.from(document.querySelectorAll('.popup'))
export const popupEdit = document.querySelector('#edit');
export const popupAdd = document.querySelector('#add');
export const popupImg = document.querySelector('#image');
/*Кнопки изменения*/
export const btnEdit = document.querySelector('.profile__edit-button');
export const btnAdd = document.querySelector('.profile__add-button');
/*Формы*/
export const formEdit = document.querySelector('#form-edit');
export const formAdd = document.querySelector('#form-add');
/**/
export const nameProf = document.querySelector('.profile__name')
export const nameRes = document.querySelector('.popup__input_type_name');
/**/
export const profession = document.querySelector('.profile__profession');
export const professionRes = document.querySelector('.popup__input_type_profession');
/**/
export const popupCardImage = document.querySelector('.popup__image');
export const popupCardCaption = document.querySelector('.popup__undertaker');
export const headInput = popupAdd.querySelector('.popup__input_type_head');
export const urlInput = popupAdd.querySelector('.popup__input_type_url');

/*Карточки*/
export const cardsContainer = document.querySelector('.elements');

