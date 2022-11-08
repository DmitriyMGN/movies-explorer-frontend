import { useLocation, Link} from 'react-router-dom';
import React from 'react';

function Burger (props) {
  const [value, setValue] = React.useState(false);

  function handleBurger(e) {
    setValue(!value);
  }
  
  const location = useLocation()
  return (
  <>
      {location.pathname === '/movies' && <button onClick={handleBurger} className="navbar__button-burger"></button> }
      {location.pathname === '/saved-movies' && <button onClick={handleBurger} className="navbar__button-burger"></button> }
      {location.pathname === '/profile' && <button onClick={handleBurger} className="navbar__button-burger"></button> }
      <div className={`
    burger 
    ${value ? "burger_open" : ""}
    `}
    >
      <div className="burger__content">
        <button className="burder__button-cross" onClick={handleBurger}></button>
        <div className='burger__links'>
          {<Link className="burger__link" to="/">Главная</Link>} 
          {<Link className="burger__link burger__link_active" to="/movies">Фильмы</Link>} 
          {<Link className="burger__link" to="/saved-movies">Сохраненные фильмы</Link>}
        </div>
      <div className="burger__links-bottom">
        {<Link className="navbar__element navbar__element_burger" to="/profile">Аккаунт</Link>}
        <button className="navbar__element navbar__avatar-icon"></button>
      </div>
      </div>
    </div>
  </>

  )
}

export default Burger;