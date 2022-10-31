import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="movies">
      <ul className="movies__list">
          <MoviesCard />
      </ul>
      <button className="movies__button-still" type="button">Еще</button>
    </section>
  );
}

export default MoviesCardList;
