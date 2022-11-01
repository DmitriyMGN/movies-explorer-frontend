import React from "react";

function FilterCheckbox(props) {

return (
  <div className="filter">
    <input id="checkbox" className="filter__checkbox" type="checkbox" value={props.checkboxValue} onChange={props.checkboxOnChange}></input>
    <label htmlFor="checkbox" className="filter__style"></label>
    <span className="filter__text">Короткометражки</span>
  </div>
);
}

export default FilterCheckbox;