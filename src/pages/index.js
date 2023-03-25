import { Card } from '../components/Card.js'
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from '../utils/initialCards.js'
import * as data from "../utils/constants.js"
import './index.css'
import UserInfo from "../components/UserInfo";
import {
    avatar,
    btnAdd, btnAvatar,
    btnEdit,
    nameRes,
    professionRes
} from "../utils/constants.js";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Api from "../components/Api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

let userId;

const api = new Api(
    'https://mesto.nomoreparties.co/v1/cohort-61',
    '9eaec6e2-1762-46e5-a009-778183ac0cdb',
);

Promise.all([api.getInitialCards(), api.getProfileInfo()])
    .then(([initialCards, userData]) => {
        console.log(userData)
        userInfo.setUserInfo(userData)
        userInfo.setUserAvatar(userData)
        userId = userData._id;
        section.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`)
    });


//функции

const renderCard = (data) => {
    const newCard = new Card({
        data: data,
        cardTemplate: '#element',
        userId: userId,
        handleCardClick: (name, link) => {
            popupImage.open(name, link);
        },
        handleDeleteIconClick: (cardId) => {
            deleteCardPopup.open();
            deleteCardPopup.submitCallback(() => {
                api.deleteCard(cardId)
                    .then(() => {
                        deleteCardPopup.close();
                        newCard.deleteCard();
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            });
        },
        handleSetLike: (cardId) => {
            api.clickLike(cardId)
                .then((data) => {
                    newCard.handleLikeCard(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        handleRemoveLike: (cardId) => {
            api.removeLike(cardId)
                .then((data) => {
                    newCard.handleLikeCard(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }
    });
    return newCard.createCard();
}

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    infoSelector: '.profile__profession',
    avatarSelector: '.profile__avatar'
});

const profilePopup = new PopupWithForm({
    popupSelector: '#edit',
    formSubmit: (userData) => {
        profilePopup.loading(true);
        api.editProfileInfo(userData)
            .then((userData) => {
                console.log(userData)
                userInfo.setUserInfo(userData);
                profilePopup.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                profilePopup.loading(false);
            });
    }
});
profilePopup.setEventListeners();

const deleteCardPopup = new PopupWithConfirmation({
    popupSelector: '#delete'
});
deleteCardPopup.setEventListeners();

//Образы
const section = new Section({items: initialCards, renderer: renderCard }, '.elements');

const popupImage = new PopupWithImage('#image')
popupImage.setEventListeners();

const profile = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__profession' })

const popupCreateCard = new PopupWithForm({
    popupSelector: '#add',
    formSubmit: (data) => {
        popupCreateCard.loading(true);
        api.addNewCard(data)
        .then((data) => {
            section.addItem(renderCard(data));
            popupCreateCard.close()
        })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => {
                popupCreateCard.loading(false)
            })
    }
})
popupCreateCard.setEventListeners();

const avatarPopup = new PopupWithForm({
    popupSelector: '#avatar',
    formSubmit: (data) => {
        avatarPopup.loading(true);
        console.log(data)
        api.editProfileAvatar(data)
            .then((data) => {
                avatar.src = data.avatar;
                avatarPopup.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                avatarPopup.loading(false);
            });
    }
});
avatarPopup.setEventListeners();

const formAddValidator = new FormValidator(data.configurationValidation, data.popupEdit);
const formEditValidator = new FormValidator(data.configurationValidation, data.popupAdd);
const formAvatarValidator = new FormValidator(data.configurationValidation, data.popupAvatar)



//слушатели
btnAdd.addEventListener('click', () => {
    popupCreateCard.open()
    formAddValidator.resetErrors()
})

btnAvatar.addEventListener('click', () => {
    avatarPopup.open();
    formAvatarValidator.resetErrors()
})

btnEdit.addEventListener('click', () => {
    profilePopup.open();
    const edit = profile.getUserInfo();
    nameRes.value = edit.name;
    professionRes.value = edit.profession;
    formEditValidator.resetErrors()
})

//вкл валидации
formAddValidator.enableValidation();
formEditValidator.enableValidation();
formAvatarValidator.enableValidation()

