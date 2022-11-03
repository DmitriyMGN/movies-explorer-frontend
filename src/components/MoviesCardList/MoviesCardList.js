import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="movies">
      <ul className="movies__list">
      {props.films.map((film) => {
            return (
              <MoviesCard
                film={film}
                key={film.id}
                // onFilmClick={props.onCardClick}
                // onCardLike={props.onCardLike}
                // onCardDelete={props.onCardDelete}
              />
            )
          })}
      </ul>
      <button className="movies__button-still" type="button">Еще</button>
    </section>
  );
}

export default MoviesCardList;
