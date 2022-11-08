import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";

import { useState, useEffect } from 'react';

function SavedMovies(props) {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryMovies, setQueryMovies] =  useState([]);
  const [checkboxMovies, setCheckboxMovies] = useState([]);
  const [pageMovies, setPageMovies] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const savedMoviesPage = true;

  useEffect(() => {
    setQueryMovies(props.films)
  },[props.films])

  useEffect(() => {
    if(checkboxValue) {
      setQueryMovies(props.films.filter((movie) => movie.duration <= 40))
    } else {
      setQueryMovies(props.films);
    }
  }, [checkboxValue])

function handleCheckboxValueChange() {
  setCheckboxValue(!checkboxValue);
}

function handleInputValueChange(e) {
  setInputValue(e.target.value);
}

function handleShowSavedFilms(e) {
  e.preventDefault();
  if (inputValue) {
    setSearchActive(false)
    handleSavedShowFilms(inputValue)
  } else {
    setSearchActive(true)
  }
}

function handleSavedShowFilms(inputValue) {
  console.log(props.films)
  const queryMoviesSearchArray = props.films.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
  })
  if(queryMoviesSearchArray.length === 0) {
    setSearchError(true)
  } else {
    setSearchError(false)
  }
  setQueryMovies(queryMoviesSearchArray)
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
