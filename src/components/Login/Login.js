import { Link } from 'react-router-dom';

function Login (props) {

  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='form' onSubmit={props.onLogin}>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input 
            value={props.email || ""}
            onChange={props.handleChangeEmail}
            className='form__input' 
            placeholder="Введите E-mail" 
            required
            ></input>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input 
            value={props.password || ""}
            onChange={props.handleChangePassword}
            className='form__input' 
            placeholder="Введите пароль"
            type="password" 
            required
            ></input>
          </div>
        <button className='form__submit' type='submit'>Войти</button>
        <div className='form__links'>
          <span className='form__span form__span_link'>Ещё не зарегистрированы?</span>
          <Link className='form__link' to="/signup">Регистрация</Link>
        </div>
      </form>
    </section>
  )
}

export default Login;