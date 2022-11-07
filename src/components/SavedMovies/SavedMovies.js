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

console.log(props.films)

  return (
   <>
    <SearchForm 
    checkboxValue={checkboxValue}
    checkboxOnChange={handleCheckboxValueChange}
    inputValue = {inputValue}
    inputOnChange = {handleInputValueChange}
    queryError={queryError}
    searchActive = {searchActive}
    searchError = {searchError}
    />
    {props.films.length !== 0 &&
    <MoviesCardList 
        films={props.films}
        onRemove = {props.onRemove}
        setPageMovies = {[]}
    /> }
    <Footer />
   </>
  );
}

export default SavedMovies;
