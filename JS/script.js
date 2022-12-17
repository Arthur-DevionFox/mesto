const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const save = document.querySelector('.popup__save');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__info_name')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__info_profession')

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
    popup.classList.remove('popup_opened')
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
    evt.preventDefault();
}

edit.addEventListener('click', popUpOpn);
close.addEventListener('click', popUpCls);


/*TODO CREATE CALL TO SAVE ALL*/
save.addEventListener('click', saveFunc);


