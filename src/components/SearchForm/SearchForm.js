import searchLogo from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';

function SearchForm(props) {

  return (
   <section className="searchForm">
    <form className="searchForm__form" onSubmit={props.onButtonSearchClick}>
      <img className="searchForm__loop-img" src={searchLogo} alt="Картинка лупы" />
      <input className="searchForm__input" type="text" placeholder="Фильм" required></input>
      <button className="searchForm__search-button" type="submit"></button>
    </form>
    <FilterCheckbox 
    checkboxValue={props.checkboxValue}
    checkboxOnChange={props.checkboxOnChange}
    />
   </section>
  );
}

export default SearchForm;