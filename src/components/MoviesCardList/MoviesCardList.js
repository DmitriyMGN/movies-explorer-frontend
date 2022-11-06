import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from '../../utils/useWindowSize'
import { useState } from 'react';


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
    props.setPageMovies((previousValue) => {
      return previousValue.concat(props.checkboxMovies.slice(previousValue.length, previousValue.length + count));
    })
  }


  return (
    <section className="movies">
      <ul className="movies__list">
      {props.films.map((film) => {
            return (
              <MoviesCard
                film={film}
                key={film.id}
              />
            )
          })}
      </ul>
      {props.checkboxMovies.length > props.pageMovies.length &&
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
