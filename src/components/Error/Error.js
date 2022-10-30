import { Link } from 'react-router-dom';

function Error (props) {
  return (
  <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link className='error__exit-link'>Назад</Link>
  </div>
  )
}

export default Error;