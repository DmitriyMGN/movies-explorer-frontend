import { Link } from 'react-router-dom';

function Register (props) {

  return (
    <div className='login'>
      <h1 className='login__title'>Добро пожаловать!</h1>
      <form className='form'>
          <div className='form__inputs'>
            <span className='form__span'>Имя</span>
            <input className='form__input' placeholder="Введите имя" required></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input className='form__input' placeholder="Введите E-mail" required></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input className='form__input' type="password" placeholder="Введите пароль" required></input>
            <span className='form__span form__span_error'>Что-то пошло не так...</span>
          </div>
        <button className='form__submit form__submit_reg'>Зарегестрироваться</button>
        <div className='form__links'>
          <span className='form__span form__span_link'>Уже зарегистрированы?</span>
          <Link className='form__link' to="signin">Войти</Link>
        </div>
      </form>
    </div>
  )
}

export default Register;