import {data} from "autoprefixer";

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
            profession: this._infoElement.textContent,
        }
    }

    //Для установки данных
    setUserInfo(data) {
        console.log(this._nameElement, this._infoElement);
        this._nameElement.textContent = data.name;
        this._infoElement.textContent = data.about;
    }

    setUserAvatar(data) {
        this._avatarElement.src = data.avatar
    }
}