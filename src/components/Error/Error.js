import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Error () {
  const history = useHistory();

  const handlerGoBack = () => history.go(-1)
  
  return (
  <section className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link className='error__exit-link' onClick={handlerGoBack}>Назад</Link>
  </section>
  )
}

export default Error;