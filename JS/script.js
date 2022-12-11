const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const save = document.querySelector('.popup__save');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__name[type=text]')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__profession[type=text]')

function popUp() {
    popup.classList.toggle('popup__opened');
}

function saveFunc() {
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
}

function popUpEnt(evt) {
    if ((evt.key === 'Enter') && popup.classList.contains('popup__opened')) {
        popup.classList.toggle('popup__opened');
    }
}

function popUpEsc(evt) {
    if ((evt.key === 'Escape') && popup.classList.contains('popup__opened')) {
        popup.classList.toggle('popup__opened');
    }
}

edit.addEventListener('click', popUp);
close.addEventListener('click', popUp);

save.addEventListener('keydown', popUpEnt);
document.addEventListener('keydown', popUpEsc);

save.addEventListener('click', popUp);
save.addEventListener('click', saveFunc);


