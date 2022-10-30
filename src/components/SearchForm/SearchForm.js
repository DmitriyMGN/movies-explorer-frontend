import searchLogo from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  return (
   <div className="searchForm">
    <form className="searchForm__form" onSubmit={props.onRegister}>
      <img className="searchForm__loop-img" src={searchLogo} alt="Картинка лупы" />
      <input className="searchForm__input" type="text" placeholder="Фильм"></input>
      <button className="searchForm__search-button" onClick={props.signIn}></button>
    </form>
    <FilterCheckbox />
   </div>
  );
}

export default SearchForm;