import mestoLogo from '../../images/logo.svg';
import { useLocation, Link} from 'react-router-dom';
import Burger from '../Burger/Burger';

function Navigation (props) {

  const location = useLocation()
  return (
  <>
    <div className="navbar">
      <a href="/" className='navbar__logo'><img src={mestoLogo} alt="Картинка логотипа сайта" /></a>
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="/movies">Фильмы</Link> } 
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="/saved-movies">Сохраненные фильмы</Link> }
      {location.pathname === '/saved-movies' && <Link className="navbar__element navbar__element_hidden" to="/movies">Фильмы</Link> } 
      {location.pathname === '/saved-movies' && <Link className="navbar__element navbar__element_hidden" to="/saved-movies">Сохраненные фильмы</Link> }
      {location.pathname === '/profile' && <Link className="navbar__element navbar__element_hidden" to="/movies">Фильмы</Link> } 
      {location.pathname === '/profile' && <Link className="navbar__element navbar__element_hidden" to="/saved-movies">Сохраненные фильмы</Link> }
    </div> 
    <div className="navbar">
      {location.pathname === '/' && <Link className="navbar__element" to="/signup">Регистрация</Link> }
      {location.pathname === '/' && <Link className="navbar__element navbar__element_type_button-link" to="/signin">Войти</Link> }
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="/profile">Аккаунт</Link> }
      {location.pathname === '/movies' && <Link  className="navbar__element navbar__avatar-icon navbar__element_hidden" to="/profile"></Link> }
      {location.pathname === '/saved-movies' && <Link className="navbar__element navbar__element_hidden" to="/profile">Аккаунт</Link> }
      {location.pathname === '/saved-movies' && <Link className="navbar__element navbar__avatar-icon navbar__element_hidden" to="/profile"></Link> }
      {location.pathname === '/profile' && <Link className="navbar__element navbar__element_hidden" to="/profile">Аккаунт</Link> }
      {location.pathname === '/profile' && <Link className="navbar__element navbar__avatar-icon navbar__element_hidden" to="/profile"></Link> }
      {location.pathname === '/movies' && <Burger /> }
      {location.pathname === '/saved-movies' && <Burger /> }
      {location.pathname === '/profile' && <Burger /> }
    </div>
  </>
  )
}

export default Navigation;