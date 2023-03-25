export class Card {
    constructor({data, cardTemplate, userId, handleCardClick, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
        this._cardTemplate = cardTemplate;
        console.log(data)
        this._name = data.name;
        this._link = data.link;
        this._userId = userId;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._likes = data.likes;
        this._handleSetLike = handleSetLike;
        this._handleRemoveLike = handleRemoveLike;

        console.log(this);
    }

    _getTemplate() {
        return document
            .querySelector(/*selector*/this._cardTemplate)
            .content.querySelector('.element')
            .cloneNode(true);
    }

    createCard() {
        this._cardItem = this._getTemplate();
        this._cardImage = this._cardItem.querySelector('.element__image');
        this._likeBtn = this._cardItem.querySelector('.element__like');
        this._deleteBtn = this._cardItem.querySelector('.element__delete');
        this._likesNumber = this._cardItem.querySelector('.element__like-info')
        this._paragraph = this._cardItem.querySelector('.element__paragraph');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._paragraph.textContent = this._name;
        this._hasDeleteButton();
        this._isCardLiked();
        this._updateLike()

        this._setEventListeners();

        return this._cardItem;
    }

    deleteCard() {
        this._cardItem.remove();
        this._cardItem = 'null'
    }

    _isCardLiked() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._likeBtn.classList.add('element__like-active');
        }
    }

    handleLikeCard(data) {
        this._likes = data.likes;
        this._updateLike()
    }

    _hasDeleteButton() {
        if (this._userId !== this._cardOwnerId) {
            this._deleteBtn.remove();
        }
    }

    isLiked() {
        return this._likes.some((user) => {
            return this._userId === user._id
        })
    }

    _updateLike() {
        this._likesNumber.textContent = this._likes.length;
        if(this.isLiked()) {
            this._likeBtn.classList.add('element__like_active')
        } else {
            this._likeBtn.classList.remove('element__like_active')
        }
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
        this._deleteBtn.addEventListener('click', () => {
            this._handleDeleteIconClick(this._cardId);
        })
        this._likeBtn.addEventListener('click', () => {
            if (this.isLiked()) {
                this._handleRemoveLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        })
    }
}
