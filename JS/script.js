const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close');
const save = document.querySelector('.popup__save');
const name = document.querySelector('.profile__name')
const nameRes = document.querySelector('.popup__name[type=text]')
const profession = document.querySelector('.profile__profession')
const professionRes = document.querySelector('.popup__profession[type=text]')


function openPopUp() {
    popup.classList.add('popup__opened');
}
function closePopUp() {
    popup.classList.remove('popup__opened');
}

function saveFunc() {
    name.textContent = nameRes.value
    profession.textContent = professionRes.value
}

    edit.addEventListener('click', openPopUp);

    close.addEventListener('click', closePopUp);

    save.addEventListener('click', closePopUp);
/*    save.addEventListener('', closePopUp);*/

    save.addEventListener('click', saveFunc);