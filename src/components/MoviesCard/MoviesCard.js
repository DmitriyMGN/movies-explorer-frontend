import { useState, useEffect } from 'react';

function MoviesCard(props) {
  const [savedMovie, setSavedMovie] = useState({});
  let time;

  const removeFilm = () => props.onRemove(props.film._id);
  const toggleButton =() => savedMovie ?  props.onRemove(savedMovie._id) : props.onSave(props.film);
 
  useEffect(() => {
    if(!props.savedMoviesPage) {
        setSavedMovie(props.savedMovies.find(movie => movie.movieId === props.film.id ))
      }
  },[props.film.id, props.savedMovies, props.savedMoviesPage])

    if(Math.round(props.film.duration / 60 < 1)) {
      time = props.film.duration + "м.";
    } else {
      time =  Math.round(props.film.duration / 60)+ 'ч.' + props.film.duration % 60 + "м.";
    }

  return (
    <li className="movies__item">
      <a className="movies__link" href={props.film.trailerLink} target="_blank" rel="noreferrer">
        <div className="movies__about">
          <p className="movies__title">{props.film.nameRU}</p>
          <p className="movies__duration">{time}</p>
        </div>
        <img className="movies__img" 
          src={props.savedMoviesPage ? props.film.image : 'https://api.nomoreparties.co/' + props.film.image.url} 
          alt={props.film.nameRU}>
        </img>
      </a>
      {!props.savedMoviesPage ? <button className={`movies__button ${savedMovie && 'movies__button_active'}`} onClick={toggleButton} type="button">Сохранить</button> : ""}
      { props.savedMoviesPage ? <button className="movies__button movies__button_cross" onClick={removeFilm} type="button"></button> : ""}
    </li>
  );
}

export default MoviesCard;
