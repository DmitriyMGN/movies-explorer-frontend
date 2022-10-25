import mestoLogo from '../../images/logo.svg';
import { useLocation, Link} from 'react-router-dom';

function Header (props) {

  const location = useLocation()
  return (
  <header className="header">
    <div className="navbar">
      <img src={mestoLogo} alt="Картинка логотипа сайта" />
      {location.pathname === '/movies' && <Link className="navbar__element" to="">Фильмы</Link> } 
      {location.pathname === '/movies' && <Link className="navbar__element" to="">Сохраненные фильмы</Link> }
    </div> 
    <div className="navbar">
      {location.pathname === '/' && <Link className="navbar__element" to="">Регистрация</Link> }
      {location.pathname === '/' && <button onClick={props.signIn} className="navbar__element navbar__element_type_button">Войти</button> }
      {location.pathname === '/movies' && <Link className="navbar__element" to="">Аккаунт</Link> }
      {location.pathname === '/movies' && <button onClick={props.signIn} className="navbar__element navbar__element_avatar-icon"></button> }

    </div>
  </header>
  )
}

export default Header;