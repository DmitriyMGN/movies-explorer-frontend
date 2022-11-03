import { Link } from 'react-router-dom';

function Register (props) {

  return (
    <section className='login'>
      <h1 className='login__title'>Добро пожаловать!</h1>
      <form className='form' onSubmit={props.onRegister}>
          <div className='form__inputs'>
            <span className='form__span'>Имя</span>
            <input className='form__input' 
            placeholder="Введите имя" 
            value={props.login || ""}
            onChange={props.handleChangeLogin}
            required></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input className='form__input' 
            placeholder="Введите E-mail" 
            value={props.email || ""}
            onChange={props.handleChangeEmail}
            required></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input className='form__input' 
            type="password" 
            placeholder="Введите пароль" 
            value={props.password || ""}
            onChange={props.handleChangePassword}
            required></input>
            <span className='form__span form__span_error'>Что-то пошло не так...</span>
          </div>
        <button className='form__submit form__submit_reg' type="submit">Зарегестрироваться</button>
        <div className='form__links'>
          <span className='form__span form__span_link'>Уже зарегистрированы?</span>
          <Link className='form__link' to="signin">Войти</Link>
        </div>
      </form>
    </section>
  )
}

export default Register;