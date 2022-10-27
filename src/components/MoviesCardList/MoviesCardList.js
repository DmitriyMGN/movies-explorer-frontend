import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <div className="movies">
    <ul className="movies__list">
        <MoviesCard />
    </ul>
    <button className="movies__button-still">Еще</button>
    </div>
  );
}

export default MoviesCardList;
