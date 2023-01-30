/*Основные константы*/
const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupImg = document.querySelector('#image');

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button')

const buttonCloseList = document.querySelectorAll('.popup__close');

const formEdit = document.querySelector('#form-edit');
const formAdd = document.querySelector('#form-add');

const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name');

const profession = document.querySelector('.profile__profession');
const professionRes = document.querySelector('.popup__input_type_profession');

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
}

function openProfilePopup(popup) {
    popup.classList.add('popup_opened')
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
}
// Закрытие PopUp
function closePopup(evt) {
    evt.classList.remove('popup_opened');
}


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
    openProfilePopup(popupEdit);
});
btnAdd.addEventListener('click', function () {
    openPopup(popupAdd);
    headInput.textContent = ''
    urlInput.textContent = ''
});

formEdit.addEventListener('submit', saveFuncEdit);
formAdd.addEventListener('submit', saveFuncAdd);
