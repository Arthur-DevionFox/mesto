import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image')
        this._undertaker = this._popup.querySelector('.popup__undertaker')
    }

    open(name, link) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._undertaker.textContent = name;
    }
}