export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  editUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
      name: name,
      about: about,
    })
   }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  addNewCard(cardName, cardLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
      name: cardName,
      link: cardLink,
    })
   }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
   }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  giveLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }

  editUserAvatar(value) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: value,
    })
   }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Где-то ошибочка:( : ${response.status}`);
    })
  }


  }

