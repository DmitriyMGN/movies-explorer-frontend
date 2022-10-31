import { useLocation } from 'react-router-dom';

function NavTab(props) {
  const location = useLocation()
  return (
      <div className="navtab">
        {location.pathname === '/' && <a className="navtab__link" href="#project-about">О проекте</a> }
        {location.pathname === '/' && <a className="navtab__link" href="#techs">Технологии</a> }
        {location.pathname === '/' && <a className="navtab__link" href="#about-me">Студент</a> }
      </div>
  );
}

export default NavTab;