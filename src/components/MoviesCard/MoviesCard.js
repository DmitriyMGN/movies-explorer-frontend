function MoviesCard(props) {



  return (
    <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">{props.film.nameRU}</p>
        <p className="movies__duration">{props.film.duration} м.</p>
      </div>
      <img className="movies__img" src={'https://api.nomoreparties.co/' + props.film.image.url} alt={props.film.nameRU} ></img>
      <button className="movies__button movies__button_active">Сохранить</button>
    </li>
  );
}

export default MoviesCard;
