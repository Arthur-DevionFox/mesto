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

    getProfileInfo() {
        return fetch(`${this._path}/users/me`, {
            headers: this._getHeaders()
    })
            .then(res => this._getJson(res))
    }

    editProfileInfo(data) {
        return fetch(`${this._path}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: data.name,
                about: data.profession
            })
        })
            .then(this._getJson)
    }

    addNewCard(data) {
        return fetch(`${this._path}/cards`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._getJson)
    }

    editProfileAvatar(data) {
        return fetch(`${this._path}/users/me/avatar`, {
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