import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor() {
        super(Popup);
        this._popup = Array.from(document.querySelectorAll('.popup'))
    }

    open() {
        super.open();
    }
}