import {Card} from './Card.js'

/*Основные константы*/
/*Попапы*/
const popups = Array.from(document.querySelectorAll('.popup'))
const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupImg = document.querySelector('#image');
/*Кнопки изменения*/
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
/*Формы*/
const formEdit = document.querySelector('#form-edit');
const formAdd = document.querySelector('#form-add');
/**/
const nameProf = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name');
/**/
const profession = document.querySelector('.profile__profession');
const professionRes = document.querySelector('.popup__input_type_profession');
/**/
const popupCardImage = document.querySelector('.popup__image');
const popupCardCaption = document.querySelector('.popup__undertaker');
const headInput = popupAdd.querySelector('.popup__input_type_head');
const urlInput = popupAdd.querySelector('.popup__input_type_url');

/*Карточки*/
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content.querySelector('.element');

function handleLikeClick(evt) {
    evt.target.classList.toggle('element__like_active');
}

function handleDeleteCard(evt) {
    evt.target.closest('.element').remove();
}

function openImagePopup(evt) {
    popupCardImage.src = evt.target.src;
    popupCardImage.alt = evt.target.alt;
    popupCardCaption.textContent = evt.target.alt;
    openPopup(popupImg);
}


const setPopupListeners = () => {
    popups.forEach(() => {
        document.addEventListener('click', closePopupByClick);
    })
}
setPopupListeners();


/*рендер стартовой карточки*/
function createCard({name, link}) {
    /*Рендер самой карточки*/
    const cardItem = cardTemplate.cloneNode(true);

    cardItem.querySelector('.element__paragraph').textContent = name;
    cardItem.querySelector('.element__image').alt = name
    cardItem.querySelector('.element__image').src = link;
    /*Лайк карточки*/
    const btnLike = cardItem.querySelector('.element__like');
    btnLike.addEventListener('click', handleLikeClick);
    /*Удаление карточки*/
    const deleteBtn = cardItem.querySelector('.element__delete');
    deleteBtn.addEventListener('click', handleDeleteCard);
    /*Открытие попапа карточки*/
    const imageOpenBtn = cardItem.querySelector('.element__image');
    imageOpenBtn.addEventListener('click', openImagePopup);

    return cardItem;
}

initialCards.forEach((cardItem) => {
    cardsContainer.append(createCard(cardItem))
})

// Открытие PopUp
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keyup', handleEscUp)
}

function fillProfileFormInputs() {
    nameRes.value = nameProf.textContent
    professionRes.value = profession.textContent
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
    closePopup(popupEdit);
    nameProf.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}

function saveFuncAdd(evt) {
    cardsContainer.prepend(createCard({name: headInput.value, link: urlInput.value}));
    closePopup(popupAdd);
    evt.preventDefault();
}

btnEdit.addEventListener('click', function () {
    openPopup(popupEdit);
    fillProfileFormInputs(popupEdit);
    resetErrors(formEdit, configurationValidation);
});
btnAdd.addEventListener('click', function () {
    openPopup(popupAdd);
    formAdd.reset();
    resetErrors(formAdd, configurationValidation);
});

formEdit.addEventListener('submit', saveFuncEdit);
formAdd.addEventListener('submit', saveFuncAdd);
