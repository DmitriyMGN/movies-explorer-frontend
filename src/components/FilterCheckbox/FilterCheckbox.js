import React from "react";

function FilterCheckbox() {
const [value, setValue] = React.useState(true);


function handleChange(e) {
  setValue(!value);
}


return (
  <div className="filter">
    <input id="checkbox" className="filter__checkbox" type="checkbox" value={value} onChange={handleChange}></input>
    <label htmlFor="checkbox" className="filter__style"></label>
    <span className="filter__text">Короткометражки</span>
  </div>
);
}

export default FilterCheckbox;