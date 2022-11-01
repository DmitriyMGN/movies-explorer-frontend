import searchLogo from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';

function SearchForm(props) {

const [checkboxValue, setCheckboxValue] = React.useState(true);

function handleCheckboxValueChange(e) {
  setCheckboxValue(!checkboxValue);
  console.log(checkboxValue)
}

function showFilms() {

}

  return (
   <section className="searchForm">
    <form className="searchForm__form" onSubmit={props.onRegister}>
      <img className="searchForm__loop-img" src={searchLogo} alt="Картинка лупы" />
      <input className="searchForm__input" type="text" placeholder="Фильм" required></input>
      <button className="searchForm__search-button" type="submit"></button>
    </form>
    <FilterCheckbox 
    checkboxValue={checkboxValue}
    checkboxOnChange={handleCheckboxValueChange}
    />
   </section>
  );
}

export default SearchForm;