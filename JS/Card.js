export class Card {
    constructor(cardTemplate, cardItem, openImagePopup) {
        this._cardTemplate = cardTemplate;
        this._name = cardItem.name;
        this._link = cardItem.link;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        return document
            .querySelector('#element')
            .content.querySelector('.element')
            .cloneNode(true);
    }

    _createCard() {

    }

    _deleteCard() {

    }

    _likeCard() {
        this._cardTemplate.target.closest('.element').remove();
    }

    _setEventListeners() {
        this._cardTemplate.querySelector('.element__like').addEventListener('click', () => {
            this._likeCard();
        })

        this._cardTemplate.querySelector('.element__image').addEventListener('click', () => {
            this._openImagePopup();
        })

        this._cardTemplate.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCard();
        })
    }

}

export default Card