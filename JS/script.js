const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__info_type_name[type=text]')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__info_type_profession[type=text]')

function popUpOpn() {
    popup.classList.add('popup_opened');
    nameRes.value = name.textContent
    professionRes.value = profession.textContent
}

function popUpCls(evt) {
    popup.classList.remove('popup_opened');
    evt.preventDefault();
}

function saveFunc(evt) {
    popUpCls(evt)
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}
edit.addEventListener('click', popUpOpn);
close.addEventListener('click', popUpCls);
form.addEventListener('submit', saveFunc);


