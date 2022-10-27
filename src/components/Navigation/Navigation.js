import mestoLogo from '../../images/logo.svg';
import { useLocation, Link} from 'react-router-dom';
import Burger from '../Burger/Burger';

function Navigation (props) {

  const location = useLocation()
  return (
  <>
    <div className="navbar">
      <img src={mestoLogo} alt="Картинка логотипа сайта" />
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="">Фильмы</Link> } 
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="">Сохраненные фильмы</Link> }
    </div> 
    <div className="navbar">
      {location.pathname === '/' && <Link className="navbar__element" to="">Регистрация</Link> }
      {location.pathname === '/' && <button onClick={props.signIn} className="navbar__element navbar__element_type_button">Войти</button> }
      {location.pathname === '/movies' && <Link className="navbar__element navbar__element_hidden" to="">Аккаунт</Link> }
      {location.pathname === '/movies' && <button onClick={props.signIn} className="navbar__element navbar__button_avatar-icon navbar__element_hidden"></button> }
      <Burger />
    </div>
  </>
  )
}

export default Navigation;