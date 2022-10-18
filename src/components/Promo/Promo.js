import { useLocation } from 'react-router-dom';

function Promo(props) {
  const location = useLocation()
  return (
   <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo-navbar">
        {location.pathname === '/' && <button className="promo-navbar__button">О проекте</button> }
        {location.pathname === '/' && <button className="promo-navbar__button">Технологии</button> }
        {location.pathname === '/' && <button className="promo-navbar__button">Студент</button> }
      </div>
   </div>
  );
}

export default Promo;
