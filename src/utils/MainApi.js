import baseUrl from "./utils.js"
class MainApi {

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${baseUrl}/signup`, {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      })
      .then(this._checkResponse)
  }

  authorize(password, email) {
    return fetch(`${baseUrl}/signin`, {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
      .then(this._checkResponse)
  }

  signOut() {
    return fetch(`${baseUrl}/signout`, {
      credentials: 'include',
      method: 'GET',
    }).then((this._checkResponse));
  }

  getUserInfo() {
    return fetch(`${baseUrl}/users/me`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  setUserInfo(item) {
    return fetch(`${baseUrl}/users/me`, {
      credentials: 'include',
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        email: item.email,
      }),
    }).then(this._checkResponse);
  }

  getSavedFilms() {
  return fetch(`${baseUrl}/movies`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(this._checkResponse);
}

  saveFilm (data) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },   
    credentials: 'include',
    body: JSON.stringify({
      country: data.country,
      director: data.director ,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: 'https://api.nomoreparties.co/' + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    })
  })
  .then(this._checkResponse);
}

  removeFilm(id) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },   
    credentials: 'include',
  })
  .then(this._checkResponse);
}

}

export default MainApi