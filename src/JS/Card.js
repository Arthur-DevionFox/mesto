export class Card {
    constructor(cardTemplate, cardItem, openImagePopup) {
        this._cardTemplate = cardTemplate;
        this._name = cardItem.name;
        this._link = cardItem.link;
        this._openImagePopup = openImagePopup;

        console.log(this);
    }

    _getTemplate() {
        return document
            .querySelector(/*selector*/this._cardTemplate)
            .content.querySelector('.element')
            .cloneNode(true);
        //
    }

    createCard() {
        this._cardItem = this._getTemplate();
        this._cardImage = this._cardItem.querySelector('.element__image');
        this._likeBtn = this._cardItem.querySelector('.element__like');
        this._deleteBtn = this._cardItem.querySelector('.element__delete');
        this._paragraph = this._cardItem.querySelector('.element__paragraph');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._paragraph.textContent = this._name;

        this._setEventListeners();

        return this._cardItem;
    }

    _deleteCard() {
        this._cardItem.remove();
    }

    _likeCard() {
        this._likeBtn.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._likeCard();
        })

        this._cardImage.addEventListener('click', () => {
            this._openImagePopup(this._name, this._link);
        })

        this._deleteBtn.addEventListener('click', () => {
            this._deleteCard();
        })
    }

}
