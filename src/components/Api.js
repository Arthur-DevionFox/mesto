export default class Api {
    constructor(path, token) {
        this._path = path;
        this._token = token
    }

    _getHeaders() {
        return {
            "Content-Type": "application/json",
            authorization: this._token,
        };
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._path}/cards`, {
            method: 'GET',
            headers: this._getHeaders(),
        })
            .then(this._getJson)
    }

    editProfileInfo(data) {
        return fetch(`${this._path}/user/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: data.name,
                about: data.description
            })
        })
            .then(this._getJson)
    }

    addNewCard(data) {
        return fetch(`${this._path}/cards`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._getJson)
    }

    editProfileAvatar(data) {
        return fetch(`${this._path}/user/me/avatar`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(this._getJson)
    }

    deleteCard(id) {
        return fetch(`${this._path}/cards/${id}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
            })
            .then(this._getJson)
    }

    clickLike(id) {
        return fetch(`${this._path}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._getHeaders(),
        })
            .then(this._getJson)
    }

    removeLike(id) {
        return fetch(`${this._path}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._getJson)
    }

}