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
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  getSavedFilms() {
  return fetch(`${this._url}/movies`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(this._checkResponse);
}

  saveFilm ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
  }) {
  return fetch(`${this._url}/movies`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },   
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    })
  })
  .then(this._checkResponse);
}

  removeFilm(id) {
  return fetch(`${this._url}/movies/${id}`, {
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