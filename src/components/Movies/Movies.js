import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';

function Movies(props) {

  const [checkboxValue, setCheckboxValue] = React.useState(true);
  const [films, setFilms] = React.useState([]);

function handleCheckboxValueChange(e) {
  setCheckboxValue(!checkboxValue);
  console.log(checkboxValue)
}

function handleShowFilms(e) {
    e.preventDefault()
    MoviesApi.getFilms()
      .then((res) => {
        console.log(res)
        setFilms(res)
      })
}

  return (
   <>
    <SearchForm 
    checkboxValue={checkboxValue}
    checkboxOnChange={handleCheckboxValueChange}
    onButtonSearchClick={handleShowFilms}
    />
    <MoviesCardList 
    films={films}
    />
    <Footer />
   </>
  );
}

export default Movies;
