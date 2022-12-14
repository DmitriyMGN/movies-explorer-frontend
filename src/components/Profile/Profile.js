import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useContext, useState } from "react";
import  useFormWithValidation   from '../ValidationForm/ValidationForm'


function Profile (props) {
const currentUser = useContext(CurrentUserContext)
const [popupOpen, setPopupOpen] = useState(false);
const [popupMessage, setPopupMessage] = useState("")

const { values, handleChange, errors, isValid } = useFormWithValidation();

const handleInputValue = (e) => {
  handleChange(e);
}

const handleSubmitForm = (e) => {
  e.preventDefault()

  if(!values.name) {
    values.name = currentUser?.name
  }
  if(!values.email) {
    values.email = currentUser?.email
  }

  if(values.name === currentUser?.name && values.email === currentUser?.email) {
    props.setProfileConflict(false)
    setPopupMessage("Данные совпадают с предыдущими")
    setPopupOpen(true)
  } else {
    props.onUpdateUser({name:values.name, email:values.email})
    setPopupMessage("Данные успешно обновлены")
    setPopupOpen(true)
  }
}


const handlePopup = (e) => {
  e.preventDefault()
  setPopupOpen(false)
}

  return (
  <section className="profile">
    <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
    <form className="profile__info" onSubmit={handleSubmitForm}>  
      <div className="profile__inputs">
        <span className="profile__span profile__span_name">Имя</span>
        <input 
        className="profile__input" 
        value={values.name || currentUser?.name}
        name="name"
        onChange={handleInputValue}
        pattern="^[A-Za-zА-Яа-я-\s]+$"
        minLength="2"
        maxLength="30"
        required></input>
        <span className='form__span form__span_error'>{errors.name}</span>
      </div>
      <div className="profile__inputs">
        <span className="profile__span">E-mail</span>
        <input 
        className="profile__input" 
        name="email" 
        value={values.email || currentUser?.email}
        onChange={handleInputValue}
        type="email"
        pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
        required></input>
            <span className='form__span form__span_error'>{errors.email}</span>
      </div>
    <div className="profile__links">
      <button className={`profile__link ${!isValid && 'profile__link_error'}`} href="/profile">Редактировать</button>
    </div>
    </form>
    <button className="profile__link profile__link_signout" onClick={props.signOut} type="button">Выйти из аккаунта</button>
    <div className={`popup ${popupOpen && !props.profileConflict && 'popup_open'}`}>
      <div className="popup__content">
        <h2 className="popup__title">{popupMessage}</h2>
        <button className="popup__cross" onClick={handlePopup}></button>
      </div>
    </div>
  </section>

  )
}

export default Profile;