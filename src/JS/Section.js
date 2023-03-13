import { initialCards } from "./initialCards";
import * as data from "./constants";
import { Card } from "./Card.js";

export default class Section {
    constructor({ items, renderer }, selector) {
        this._items = items;
        this.renderer = renderer;
        this._selector = selector;
    }

    renderer(cardData) {

    }

    addItem() {

    }

}