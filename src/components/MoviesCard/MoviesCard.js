import { useState, useEffect } from 'react';

function MoviesCard(props) {
  const [savedMovies, setSavedMovies] = useState({});
 
  useEffect(() => {
    if(!props.savedMoviesPage) {
        setSavedMovies(props.savedMovies.find(movie => movie.movieId === props.film.id))
      }
  },[props.savedMoviesPage,props.savedMovies,props.film.id])

 

  function toggleButton(evt) {
    evt.preventDefault();
    if(savedMovies) {
      props.onRemove(savedMovies._id)
    } else {
      console.log(props.film.id)
      props.onSave({
        country: props.film.country,
        director: props.film.director ,
        duration: props.film.duration,
        year: props.film.year,
        description: props.film.description,
        image: 'https://api.nomoreparties.co/' + props.film.url,
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
        src={props.savedMoviesPage ? props.film.image.url : 'https://api.nomoreparties.co/' + props.film.image.url} 
        alt={props.film.nameRU}>
        </img>
      </a>
      { !props.savedMoviesPage
         ?
        <button className={`movies__button ${savedMovies && 'movies__button_active'}`} onClick={toggleButton} type="button">Сохранить</button>
        :
        <button className={`movies__button ${savedMovies && 'movies__button_active'}`} onClick={removeFilm} type="button">Сохранить</button>
      }
    </li>
  );
}

export default MoviesCard;
