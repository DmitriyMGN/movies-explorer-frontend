import mestoLogo from '../../images/logo.svg';
import { useLocation, Link} from 'react-router-dom';

function Header (props) {

  const location = useLocation()
  return (
  <header className="header">
    <img src={mestoLogo} alt="Картинка логотипа сайта" />
    <div className="navbar">
      {location.pathname === '/' && <Link className="navbar__element" to="/signup">Регистрация</Link> }
      {location.pathname === '/' && <button onClick={props.signIn} className="navbar__element navbar__element_type_button">Войти</button> }
      {/* {location.pathname === '/' && <p className="navbar__element">{props.email}</p> } */}
      {/* {location.pathname === '/h' && <button onClick={props.signOut} className="navbar__element navbar__element_type_button">Выйти</button> } */}
    </div>
  </header>
  )
}

export default Header;