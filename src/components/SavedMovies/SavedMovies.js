import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";

import { useState, useEffect } from 'react';

function SavedMovies(props) {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [queryMovies, setQueryMovies] =  useState([]);
  const [checkboxMovies, setCheckboxMovies] =  useState([]);
  const [searchMovies, setSearchMovies] =  useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [queryActive, setQueryActive] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const savedMoviesPage = true;

  useEffect(() => {
    setQueryMovies(props.films);
    if(checkboxValue && !queryActive) {
      setQueryMovies(props.films.filter((movie) => movie.duration <= 40))
    } 
    if(checkboxValue && queryActive) {
      setQueryMovies(searchMovies.filter((movie) => movie.duration <= 40))
    }
    if(!checkboxValue && queryActive) {
      setQueryMovies(searchMovies)
    }
  }, [checkboxValue,props.films, checkboxMovies, queryActive, searchMovies])

function handleCheckboxValueChange() {
  setCheckboxValue(!checkboxValue);
  if (inputValue) {
    setSearchActive(false)
    handleSavedShowFilms(inputValue)
    setQueryActive(true)
  } else {
    setQueryActive(false)
  }
}

function handleInputValueChange(e) {
  setInputValue(e.target.value);
}

function handleShowSavedFilms(e) {
  e.preventDefault();
  if (inputValue) {
    handleSavedShowFilms(inputValue)
    setSearchActive(false)
    setQueryActive(true)
  } else {
    setQueryActive(false)
    setSearchActive(true)
  }
}

function handleSavedShowFilms(inputValue) {
  const queryMoviesSearchArray = props.films.filter((movie) => {
    return movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
           movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
  })
  setSearchMovies(queryMoviesSearchArray)
  if(checkboxValue) {
    setCheckboxMovies(queryMoviesSearchArray.filter((movie) => movie.duration <= 40))
  } 
  if(queryMoviesSearchArray.length === 0) {
    setSearchError(true)
  } else {
    setSearchError(false)
  }
}

  return (
   <>
    <SearchForm 
    checkboxValue={checkboxValue}
    checkboxOnChange={handleCheckboxValueChange}
    inputValue = {inputValue}
    inputOnChange = {handleInputValueChange}
    onButtonSearchClick={handleShowSavedFilms}
    searchActive = {searchActive}
    searchError = {searchError}
    />
    {props.films.length !== 0  &&
    <MoviesCardList 
        films = {queryMovies}
        onRemove = {props.onRemove}
        setPageMovies = {props.setSavedMovies}
        savedMoviesPage = {savedMoviesPage}
    /> }
    <Footer />
   </>
  );
}

export default SavedMovies;
