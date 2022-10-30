import movie from '../../images/movie.png';
import { useLocation} from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation()

  return (
    <>
     {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_active">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_active">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_active">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_cross">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_cross">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button">Сохранить</button>
    </li>}
    {location.pathname === '/saved-movies' && <li className="movies__item">
      <div className="movies__about">
        <p className="movies__title">В погоне за Бенкси</p>
        <p className="movies__duration">27 минут</p>
      </div>
      <img className="movies__img" src={movie} alt="Фото фильма" ></img>
      <button className="movies__button movies__button_cross">Сохранить</button>
    </li>}
    
      </>
  );
}

export default MoviesCard;
