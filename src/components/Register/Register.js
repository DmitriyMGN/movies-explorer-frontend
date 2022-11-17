import { Link } from 'react-router-dom';
import  useFormWithValidation   from '../ValidationForm/ValidationForm'

function Register (props) {

const { values, handleChange, errors, isValid } = useFormWithValidation();

const handleInputValue = (e) => {
  handleChange(e);
}

const handleSubmitForm = (e) => {
  e.preventDefault()
  props.onRegister(values.name, values.email, values.password)
}

const handlePopup = (e) => {
  e.preventDefault()
  props.setPopupOpen(false)
}

  return (
    <section className='login'>
      <h1 className='login__title'>Добро пожаловать!</h1>
      <form className='form' onSubmit={handleSubmitForm}>
          <div className='form__inputs'>
            <span className='form__span'>Имя</span>
            <input 
            className='form__input' 
            placeholder="Введите имя"
            name="name"
            value={values.name || ""}
            onChange={handleInputValue}
            pattern="^[A-Za-zА-Яа-я-\s]+$"
            minLength="2"
            maxLength="30"
            required></input>
            <span className='form__span form__span_error'>{errors.name}</span>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>E-mail</span>
            <input 
            className='form__input' 
            placeholder="Введите E-mail"
            name="email" 
            value={values.email || ""}
            onChange={handleInputValue}
            type="email"
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            required></input>
             <span className='form__span form__span_error'>{errors.email}</span>
          </div>
          <div className='form__inputs'>
            <span className='form__span'>Пароль</span>
            <input className='form__input' 
            type="password" 
            placeholder="Введите пароль" 
            name="password" 
            value={values.password || ""}
            onChange={handleInputValue}
            required></input>
            <span className='form__span form__span_error'>{errors.password}</span>
          </div>
        <button className={`form__submit form__submit_reg ${!isValid && 'form__submit_error'}`}  type="submit">Зарегестрироваться</button>
        <div className='form__links'> 
          <span className='form__span form__span_link'>Уже зарегистрированы?</span>
          <Link className='form__link' to="signin">Войти</Link>
        </div>
      </form>
      <div className={`popup ${props.popupOpen && 'popup_open'}`}>
        <div className="popup__content">
          <h2 className="popup__title">Данный email уже зарегестрирован</h2>
          <button className="popup__cross" onClick={handlePopup}></button>
        </div>
      </div>
    </section>
  )
}

export default Register;