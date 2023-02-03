/*Основные константы*/
/*Попапы*/
const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupImg = document.querySelector('#image');
/*Кнопки изменения*/
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
/*Кнопка закрытия*/
const buttonCloseList = document.querySelectorAll('.popup__close');
/*Формы*/
const formEdit = document.querySelector('#form-edit');
const formAdd = document.querySelector('#form-add');
/**/
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name');
/**/
const profession = document.querySelector('.profile__profession');
const professionRes = document.querySelector('.popup__input_type_profession');
/**/
const img = document.querySelector('.popup__image');
const txt = document.querySelector('.popup__undertaker');
const headInput = popupAdd.querySelector('.popup__input_type_head');
const urlInput = popupAdd.querySelector('.popup__input_type_url');

/*Карточки*/
const elementsContainer = document.querySelector('.elements');
const element = document.querySelector('#element').content;


function like(evt) {
    evt.target.classList.toggle('element__like_active');
}

function deleting(evt) {
    evt.target.closest('.element').remove();
}

function openImagePopup(evt) {
    img.src = evt.target.src;
    img.alt = evt.target.alt;
    txt.textContent = evt.target.alt;
    openPopup(popupImg);
}


/*рендер стартовой карточки*/
function renderingCard({name, link}) {
    /*Рендер самой карточки*/
    const cardItem = element.querySelector('.element').cloneNode(true);
    cardItem.querySelector('.element__paragraph').textContent = name;
    cardItem.querySelector('.element__image').alt = name
    cardItem.querySelector('.element__image').src = link;
    /*Лайк карточки*/
    const likeBtn = cardItem.querySelector('.element__like');
    likeBtn.addEventListener('click', like);
    /*Удаление карточки*/
    const deleteBtn = cardItem.querySelector('.element__delete');
    deleteBtn.addEventListener('click', deleting);
    /*Открытие попапа карточки*/
    const imageOpenBtn = cardItem.querySelector('.element__image');
    imageOpenBtn.addEventListener('click', openImagePopup);

    return cardItem;
}

initialCards.forEach((cardItem) => {
    elementsContainer.append(renderingCard(cardItem))
})

/*Рендер новой карточки*/
function renderingNewCard(evt) {
    elementsContainer.prepend(renderingCard({name: headInput.value, link: urlInput.value}));
    closePopup(popupAdd);
    evt.preventDefault()
    evt.currentTarget.reset();
}

buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    btn.addEventListener('click', () => closePopup(popup));
})

// Открытие PopUp
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keyup', handleEscUp)
    closePopupClickOnOverlay(popup);
}

function openProfilePopup() {
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
}

// Закрытие PopUp
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            // закрываем только тогда, когда надо, т.е. только при том клике, которые происходит по нужному элементу
            closeModalWindow(popup);
        }
    });
}

function closePopupClickOnOverlay(popup) {
    const activePopup = document.querySelector('.popup_opened');
    activePopup.addEventListener('click', evt => {
        if (evt.currentTarget === evt.target) {
            closePopup(popup);
        }
    });
}

const closeModalWindow = (modalWindow) => {
    document.removeEventListener('keyup', handleEscUp);   // удаляем событие keyup
    modalWindow.classList.remove('popup_opened');
};

const handleEscUp = (evt) => {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closeModalWindow(activePopup);
    }
};
// Сохранение значений PopUp
function saveFuncEdit(evt) {
    closePopup(popupEdit);
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}

function saveFuncAdd(evt) {
    renderingNewCard(evt);
    evt.preventDefault();
}

btnEdit.addEventListener('click', function () {
    openPopup(popupEdit);
    openProfilePopup(popupEdit);
});
btnAdd.addEventListener('click', function () {
    openPopup(popupAdd);
    formAdd.reset();
});

formEdit.addEventListener('submit', saveFuncEdit);
formAdd.addEventListener('submit', saveFuncAdd);
