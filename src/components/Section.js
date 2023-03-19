export default class Section {
    constructor({ items, renderer }, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._items.reverse().forEach((item) => {
            this.addItem(this._renderer(item))
        })
    }

    addItem(newItem) {
        this._container.prepend(newItem)
    }
}