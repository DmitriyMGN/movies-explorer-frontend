import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader'

function Movies(props) {

  const [checkboxValue, setCheckboxValue] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryMovies, setQueryMovies] =  useState([]);
  const [checkboxMovies, setCheckboxMovies] = useState([]);
  const [queryError, setQueryError] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [inputValue, setInputValue] = useState("");

function handleCheckboxValueChange() {
  setCheckboxValue(!checkboxValue);
}

function handleInputValueChange(e) {
  setInputValue(e.target.value);
}

function handleShowFilms(e) {
  e.preventDefault();
  if (inputValue) {
    setSearchActive(false)
    ShowFilms(inputValue)
  } else {
    setSearchActive(true)
  }
}

function ShowFilms(inputValue) {
  setLoading(true);
  if (movies.length === 0) {
    MoviesApi
    .getFilms()
      .then((res) => {
        setMovies(res)
        localStorage.setItem('movies', JSON.stringify(res));
        const queryMoviesSearchArray = res.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        })
        setQueryMovies(queryMoviesSearchArray)
        localStorage.setItem('queryMovies', JSON.stringify(queryMoviesSearchArray));
        console.log(queryMovies)
        checkArraySearch(queryMoviesSearchArray)

      })
      .catch((err) => {
        setQueryError(true)
        console.log(err)
      })
      .finally(() => setLoading(false))
    } else {
      const queryMoviesSearchArray = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
      })

    setQueryMovies(queryMoviesSearchArray)
    localStorage.setItem('queryMovies', JSON.stringify(queryMoviesSearchArray));
    setLoading(false)
    checkArraySearch(queryMoviesSearchArray)
  }

}

  function checkArraySearch(arr) {
    if(arr.length === 0) {
      setSearchError(true)
    } else {
      setSearchError(false)
    }
  }

  useEffect(() => {
    if(checkboxValue) {
      setCheckboxMovies(queryMovies.filter((movie) => movie.duration <= 40))
    } else {
      setCheckboxMovies(queryMovies);
    }
  }, [checkboxValue, queryMovies])

  return (
   <>
    <SearchForm 
    checkboxValue={checkboxValue}
    checkboxOnChange={handleCheckboxValueChange}
    inputValue = {inputValue}
    inputOnChange = {handleInputValueChange}
    onButtonSearchClick={handleShowFilms}
    queryError={queryError}
    searchActive = {searchActive}
    searchError = {searchError}
    />
     { loading && <Preloader /> }
    <MoviesCardList 
    films={checkboxMovies}
    />
    <Footer />
   </>
  );
}

export default Movies;
