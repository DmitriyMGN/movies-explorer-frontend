import { Link } from 'react-router-dom';

function Profile (props) {

  return (
  <div className="profile">
  <h1 className="profile__title">Привет, Дмитрий!</h1>
  <div className="profile__info">  
    <div className="profile__inputs">
      <span className="profile__span profile__span_name">Имя</span>
      <input className="profile__input" placeholder="Дмитрий"></input>
    </div>
    <div className="profile__inputs">
      <span className="profile__span">E-mail</span>
      <input className="profile__input" placeholder="pochta@yandex.ru"></input>
    </div>
  </div>
  <div className="profile__links">
    <Link className="profile__link" to="">Редактировать</Link>
    <Link className="profile__link profile__link_signout" to="">Выйти из аккаунта</Link>
  </div>

 </div>

  )
}

export default Profile;