import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from '../../utils/useWindowSize'

function MoviesCardList(props) {

  const size = useWindowSize();

  function loadMovies() {
    let count;
    if (size.width >= 1280) {
     count = 3
    } else if (size.width >= 768) {
     count = 2
    } else if (size.width >= 320) {
     count = 1
    }

    props.setPageMovies(props.pageMovies.concat(props.checkboxMovies.slice(props.pageMovies.length, props.pageMovies.length + count)));
  }

  return (
    <section className="movies">
      <ul className="movies__list">
       {props.films.map((film) => {
            return (
              <MoviesCard
                film={film}
                key={props.savedMoviesPage ? film._id : film.id}
                onSave= {props.onSave}
                onRemove={props.onRemove}
                savedMoviesPage = {props.savedMoviesPage}
                savedMovies = {props.savedMovies}
              />
            )
          })}
      </ul>
      {!props.savedMoviesPage && props.checkboxMovies.length > props.films.length &&
      <button 
      className="movies__button-still" 
      type="button" 
      onClick={loadMovies}
      >
      Еще
      </button>
      }
     
    </section>
  );
}

export default MoviesCardList;
