import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader'
import useWindowSize from '../../utils/useWindowSize'

function Movies(props) {

  const size = useWindowSize();

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
  const [firstQuery, setFirstQuery] = useState(false);
  let count;

function handleCheckboxValueChange () {
  setCheckboxValue(!checkboxValue);
  if (inputValue) {
    setSearchActive(false)
    ShowFilms(inputValue)
  } else {
    setSearchActive(true)
  }
}

const handleInputValueChange = (e) => setInputValue(e.target.value);

const handleShowFilms = (e) => {
  e.preventDefault();
  if (inputValue) {
    setSearchActive(false)
    ShowFilms(inputValue)
  } else {
    setSearchActive(true)
  }
}

const ShowFilms = (inputValue)  => {
  setLoading(true);
  if (movies.length === 0) {
    MoviesApi
    .getFilms()
      .then((res) => {
        setFirstQuery(true);
        setMovies(res)
        localStorage.setItem('movies', JSON.stringify(res));
        const queryMoviesSearchArray = res.filter((movie) => {
          return movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
                 movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        })
        setQueryMovies(queryMoviesSearchArray)
        localStorage.setItem('queryMovies', JSON.stringify(queryMoviesSearchArray));
        checkArraySearch(queryMoviesSearchArray)

        if(checkboxValue) {
          localStorage.setItem('checkboxValue', true)
          setCheckboxMovies(queryMoviesSearchArray.filter((movie) => movie.duration <= 40))
          localStorage.setItem('checkboxMovies', JSON.stringify((queryMoviesSearchArray.filter((movie) => movie.duration <= 40))));
        } else {
          setCheckboxMovies(queryMoviesSearchArray)
          localStorage.removeItem('checkboxValue')
        }

      })
      .catch((err) => {
        setQueryError(true)
        console.log(err)
      })
      .finally(() => setLoading(false))
    } else {
      setFirstQuery(false);
      const queryMoviesSearchArray = movies.filter((movie) => {
        return movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
                movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
      })
      setQueryMovies(queryMoviesSearchArray)
      localStorage.setItem('queryMovies', JSON.stringify(queryMoviesSearchArray));
      setLoading(false)
      checkArraySearch(queryMoviesSearchArray)
    
      if(checkboxValue) {
        localStorage.setItem('checkboxValue', true)
        setCheckboxMovies(queryMoviesSearchArray.filter((movie) => movie.duration <= 40))
        localStorage.setItem('checkboxMovies', JSON.stringify((queryMoviesSearchArray.filter((movie) => movie.duration <= 40))));
        checkArraySearch(queryMoviesSearchArray.filter((movie) => movie.duration <= 40))
      } else {
        setCheckboxMovies(queryMoviesSearchArray)
        localStorage.removeItem('checkboxValue')
        checkArraySearch(queryMoviesSearchArray)
      }

  }
  localStorage.setItem('inputValue', inputValue)
}

useEffect(() => {
if(checkboxValue) {
  checkArraySearch(queryMovies.filter((movie) => movie.duration <= 40))
  setCheckboxMovies(queryMovies.filter((movie) => movie.duration <= 40))
  localStorage.setItem('checkboxMovies', JSON.stringify(queryMovies.filter((movie) => movie.duration <= 40)));
  localStorage.setItem('checkboxValue', true)

} else if(checkboxMovies.length > 0 || queryMovies.length > 0) {
  setCheckboxMovies(queryMovies)
  localStorage.setItem('checkboxMovies', JSON.stringify(queryMovies));
  localStorage.removeItem('checkboxValue')
  checkArraySearch(queryMovies)
  if(firstQuery) {
    setSearchError(false)
  }

}},[checkboxValue, queryMovies])

useEffect(() => {
  if(localStorage.getItem('inputValue')) {
    setInputValue(localStorage.getItem('inputValue'))
  }
  if(localStorage.getItem('checkboxValue')) {
    setCheckboxValue(true)
  }
  if(localStorage.getItem('movies')) {
    setMovies(JSON.parse(localStorage.getItem('movies')))
  }
  if(localStorage.getItem('queryMovies')) {
    setQueryMovies(JSON.parse(localStorage.getItem('queryMovies')))
  }
  if(localStorage.getItem('checkboxMovies')) {
    setCheckboxMovies(JSON.parse(localStorage.getItem('checkboxMovies')))
  }
},[])

  const checkArraySearch = (arr) => arr.length === 0 ? setSearchError(true) : setSearchError(false)

  useEffect(() => {
    if (size.width >= 1280) {
     count = 12
    } else if (size.width >= 768) {
     count = 8
    } else if (size.width >= 320) {
     count = 5
    }
   checkboxMovies.length > count ? setPageMovies(checkboxMovies.slice(0,count)) : setPageMovies(checkboxMovies);
  }, [size.width, checkboxMovies])

  useEffect(() => {
    if(!props.loggedIn) {
      setMovies(null)
      setQueryMovies(null)
      setCheckboxMovies(null)
    }
  },[props.loggedIn])

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
    films={pageMovies}
    checkboxMovies = {checkboxMovies}
    pageMovies = {pageMovies}
    setPageMovies = {setPageMovies}
    savedMovies = {props.savedMovies}
    onSave= {props.onSave}
    onRemove= {props.onRemove}
    />
    <Footer />
   </>
  );
}

export default Movies;
