import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image')
        this._undertaker = this._popup.querySelector('.popup__undertaker')
    }

    open(item) {
        super.open();
        this._image.src = item.link;
        this._image.alt = item.name;
        this._undertaker.textContent = item.name;
    }
}