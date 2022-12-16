const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const save = document.querySelector('.popup__save');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__name[type=text]')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__profession[type=text]')

function popUpOpn() {
    if (popup.classList.contains('popup__opened') === false) {
        popup.classList.add('popup__opened');
    }
}

function popUpCls() {
    if (popup.classList.contains('popup__opened') === true) {
        popup.classList.remove('popup__opened');
    }
}

function saveFunc() {
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
}

edit.addEventListener('click', popUpOpn);
close.addEventListener('click', popUpCls);


save.addEventListener('click', popUpCls);
save.addEventListener('click', saveFunc);


