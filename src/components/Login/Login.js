import { Link } from 'react-router-dom';
import  useFormWithValidation   from '../ValidationForm/ValidationForm'

function Login (props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleInputValue = (e) => {
    handleChange(e);
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    props.onLogin(values.password, values.email)
  }

  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='form' onSubmit={handleSubmitForm}>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input 
            name="email"
            value={values.email || ""}
            onChange={handleInputValue}
            className='form__input' 
            placeholder="Введите E-mail" 
            type="email"
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            required
            ></input>
            <span className='form__span form__span_error'>{errors.email}</span>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input 
            className='form__input' 
            placeholder="Введите пароль"
            type="password" 
            name="password" 
            value={values.password || ""}
            onChange={handleInputValue}
            required
            ></input>
            <span className='form__span form__span_error'>{errors.password}</span>
          </div>
        <button className={`form__submit form__submit_reg ${!isValid && 'form__submit_error'}`} type='submit'>Войти</button> 
        <div className='form__links'>
          <span className='form__span form__span_link'>Ещё не зарегистрированы?</span>
          <Link className='form__link' to="/signup">Регистрация</Link>
        </div>
      </form>
    </section>
  )
}

export default Login;