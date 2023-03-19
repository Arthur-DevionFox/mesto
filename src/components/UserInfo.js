export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
    }

    //Для вывода данных
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profession: this._infoElement.textContent
        }
    }

    //Для установки данных
    setUserInfo({ name, profession }) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = profession;
    }
}