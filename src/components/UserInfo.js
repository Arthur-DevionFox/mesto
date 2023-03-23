export default class UserInfo {
    constructor({ nameSelector, infoSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector)
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

    getUserId() {
        return this._id;
    }

}