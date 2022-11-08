import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useContext } from "react";


function Profile (props) {
const currentUser = useContext(CurrentUserContext)


function handleSubmit(e) {
  e.preventDefault();

  props.onUpdateUser({
    name: props.login,
    email: props.email
  });

} 

  return (
  <section className="profile">
    <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
    <div className="profile__info">  
      <div className="profile__inputs">
        <span className="profile__span profile__span_name">Имя</span>
        <input 
        className="profile__input" 
        placeholder={currentUser?.name}
        value={props.login || ""}
        onChange={props.handleChangeLogin}
        >
        </input>
      </div>
      <div className="profile__inputs">
        <span className="profile__span">E-mail</span>
        <input 
        className="profile__input" 
        placeholder={currentUser?.email}
        value={props.email || ""}
        onChange={props.handleChangeEmail}
        ></input>
      </div>
    </div>
    <div className="profile__links">
      <a className="profile__link" href="/profile" onClick={handleSubmit}>Редактировать</a>
      <Link className="profile__link profile__link_signout" to="/profile">Выйти из аккаунта</Link>
    </div>
  </section>

  )
}

export default Profile;