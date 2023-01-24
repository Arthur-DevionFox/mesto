const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const edit = document.querySelector('.profile__edit-button');
const add = document.querySelector('.profile__add-button')
const closeEdit = document.querySelector('#close-edit');
const closeAdd = document.querySelector('#close-add');
const formEdit = document.querySelector('#edit-save');
const formAdd = document.querySelector('#add-save');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name');
const profession = document.querySelector('.profile__profession');
const professionRes = document.querySelector('.popup__input_type_profession');
const head = document.querySelector('.popup__input_type_head');
const url = document.querySelector('.popup__input_type_url');
const likeAdd = document.querySelector('.element__like')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//console.log(initialCards)

const elements = document.querySelector('.elements');
const element = document.querySelector('#element').content;

const info = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});


function render() {
    info.forEach(renderCard)
}

function renderCard({name, link}) {
    const startElement = element.querySelector('.element').cloneNode(true);
    startElement.querySelector('.element__image').src = link;
    startElement.querySelector('.element__paragraph').textContent = name;

    elements.prepend(startElement);
}


render();
/*TODO made like button*/
/*function like() {
    likeAdd.classList.toggle('element__like_active');
}*/

// Открытие PopUp
function popUpOpnEdit() {
    popupEdit.classList.add('popup_opened');
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
}

function popUpOpnAdd() {
    popupAdd.classList.add('popup_opened')
}

// Закрытие PopUp
function popUpClsEdit(evt) {
    popupEdit.classList.remove('popup_opened');
    evt.preventDefault();
}

function popUpClsAdd(evt) {
    popupAdd.classList.remove('popup_opened')
    evt.preventDefault();
}

// Сохранение значений PopUp
function saveFuncEdit(evt) {
    popUpClsEdit(evt)
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}
/*TODO made cardAdd*/
/*function saveFuncAdd(evt, {name, link}) {
    popUpClsAdd(evt)
    head.value = name;
    url.value = link;
    initialCards.push({name, link})
    evt.preventDefault();
}*/

edit.addEventListener('click', popUpOpnEdit);
add.addEventListener('click', popUpOpnAdd);
closeEdit.addEventListener('click', popUpClsEdit);
closeAdd.addEventListener('click', popUpClsAdd);
formEdit.addEventListener('submit', saveFuncEdit);
/*formAdd.addEventListener('submit', saveFuncAdd);*/
/*likeAdd.addEventListener('click', like);*/





