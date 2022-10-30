import { useLocation, Link } from 'react-router-dom';

function NavTab(props) {
  const location = useLocation()
  return (
      <div className="navtab">
        {location.pathname === '/' && <button className="navtab__button">О проекте</button> }
        {location.pathname === '/' && <button className="navtab__button">Технологии</button> }
        {location.pathname === '/' && <button className="navtab__button">Студент</button> }
      </div>
  );
}

export default NavTab;