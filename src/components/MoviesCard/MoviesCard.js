import { useState, useEffect } from 'react';

function MoviesCard(props) {
  const [savedMovie, setSavedMovie] = useState(null);
 
  useEffect(() => {
    if(!props.savedMoviesPage) {
        setSavedMovie(props.savedMovies.find(movie => movie.movieId === props.film.id ))
      }
  },[props.film.id, props.savedMovies, props.savedMoviesPage])

  function toggleButton(evt) {
    evt.preventDefault();
    if(savedMovie) {
      props.onRemove(savedMovie._id)
    } else {
      props.onSave({
        country: props.film.country,
        director: props.film.director ,
        duration: props.film.duration,
        year: props.film.year,
        description: props.film.description,
        image: 'https://api.nomoreparties.co/' + props.film.image.url,
        trailerLink: props.film.trailerLink,
        thumbnail: 'https://api.nomoreparties.co/' + props.film.image.formats.thumbnail.url,
        movieId: props.film.id,
        nameRU: props.film.nameRU,
        nameEN: props.film.nameEN,
      })
    }
  }

  function removeFilm(e) {
    e.preventDefault();
    props.onRemove(props.film._id);
  }

  return (
    <li className="movies__item">
      <a className="movies__link" href={props.film.trailerLink} target="_blank" rel="noreferrer">
        <div className="movies__about">
          <p className="movies__title">{props.film.nameRU}</p>
          <p className="movies__duration">{props.film.duration} м.</p>
        </div>
        <img className="movies__img" 
        src={props.savedMoviesPage ? props.film.image : 'https://api.nomoreparties.co/' + props.film.image.url} 
        alt={props.film.nameRU}>
        </img>
      </a>
      { !props.savedMoviesPage
         ?
        <button className={`movies__button ${savedMovie && 'movies__button_active'}`} onClick={toggleButton} type="button">Сохранить</button>
        :
        <button className="movies__button movies__button_cross" onClick={removeFilm} type="button"></button>
      }
    </li>
  );
}

export default MoviesCard;
