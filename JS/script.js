const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const edit = document.querySelector('.profile__edit-button');
const add = document.querySelector('.profile__add-button')
const closeEdit = document.querySelector('#close-edit');
const closeAdd = document.querySelector('#close-add');
const formEdit = document.querySelector('#form-edit');
const formAdd = document.querySelector('#form-add');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name');
const profession = document.querySelector('.profile__profession');
const professionRes = document.querySelector('.popup__input_type_profession');

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
const likeButton = element.querySelector('.element__like');

function like () {

}

const info = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});


function render() {
    info.forEach(renderCard)
}

function renderNewCard({name, link}) {
    const newElement = element.querySelector('.element').cloneNode(true);
    link = document.querySelector('.popup__input_type_url').value
    newElement.querySelector('.element__image').src = link
    name = document.querySelector('.popup__input_type_head').value
    newElement.querySelector('.element__paragraph').textContent = name

    const like = newElement.querySelector('.element__like')
    like.addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active')
    } )

    const delBtn = newElement.querySelector('.element__delete');
    delBtn.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
        evt.preventDefault();
    })

    elements.prepend(newElement);
    console.log(initialCards);
}

function renderCard({name, link}) {
    const startElement = element.querySelector('.element').cloneNode(true);
    startElement.querySelector('.element__paragraph').textContent = name;
    startElement.querySelector('.element__image').src = link;

    const like = startElement.querySelector('.element__like')
    like.addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active')
    })


    const delBtn = startElement.querySelector('.element__delete');
    delBtn.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
        evt.preventDefault();
    })
    elements.prepend(startElement);
}


render();

/*TODO made like button*/

// Открытие PopUp
function popUpOpnEdit() {
    popupEdit.classList.add('popup_opened');
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
    popupEdit.classList.remove('popup_closed')
}

function popUpOpnAdd() {
    popupAdd.classList.add('popup_opened')
}

// Закрытие PopUp
function popUpClsEdit(evt) {
    popupEdit.classList.remove('popup_opened');
    popupEdit.classList.add('popup_closed')
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
function saveFuncAdd(evt) {
    popUpClsAdd(evt)
    renderNewCard(evt)
    evt.preventDefault();
}


edit.addEventListener('click', popUpOpnEdit);
add.addEventListener('click', popUpOpnAdd);
closeEdit.addEventListener('click', popUpClsEdit);
closeAdd.addEventListener('click', popUpClsAdd);
formEdit.addEventListener('submit', saveFuncEdit);
formAdd.addEventListener('submit', saveFuncAdd);
