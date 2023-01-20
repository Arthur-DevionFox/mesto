const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__input_type_name')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__input_type_profession')

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
// Открытие PopUp
function popUpOpn() {
    popup.classList.add('popup_opened');
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
}
// Закрытие PopUp
function popUpCls(evt) {
    popup.classList.remove('popup_opened');
    evt.preventDefault();
}

// Сохранение значений PopUp
function saveFunc(evt) {
    popUpCls(evt)
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}

edit.addEventListener('click', popUpOpn);
close.addEventListener('click', popUpCls);
form.addEventListener('submit', saveFunc);




