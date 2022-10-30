import { Link } from 'react-router-dom';

function Login (props) {

  return (
    <div className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='form'>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input className='form__input'></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input className='form__input' required></input>
          </div>
        <button className='form__submit'>Войти</button>
        <div className='form__links'>
          <span className='form__span form__span_link'>Ещё не зарегистрированы?</span>
          <Link className='form__link'>Регистрация</Link>
        </div>
      </form>

    </div>



  )
}

export default Login;