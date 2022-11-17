import searchLogo from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';

function SearchForm(props) {
  
  return (
    <>
   <section className="searchForm">
    <form className="searchForm__form" onSubmit={props.onButtonSearchClick} noValidate>
      <img className="searchForm__loop-img" src={searchLogo} alt="Картинка лупы" />
      <input 
      className="searchForm__input" 
      type="text" 
      placeholder="Фильм" 
      onChange={props.inputOnChange}
      value = {props.inputValue || ""}
      required></input>
      <button className="searchForm__search-button" type="submit"></button>
    </form>
    <FilterCheckbox 
    checkboxValue={props.checkboxValue}
    checkboxOnChange={props.checkboxOnChange}
    />
   </section>
  {props.queryError  ? <span className='form__span form__span_error form__span-search_error '>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</span> : ""}
  {props.searchActive ? <span className='form__span form__span_error form__span-search_error '>Нужно ввести ключевое слово</span> : ""}
  {props.searchError && !props.searchActive ? <span className='form__span form__span_error form__span-search_error '>Ничего не найдено</span> : ""}
   </>
  );
}

export default SearchForm;