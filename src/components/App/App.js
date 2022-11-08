import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Error from "../Error/Error.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js"
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import MainApi from "../../utils/MainApi";


function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savedMovies, setSavedMovies ] = useState([]);

  const mainApi = new MainApi();

  function handleChangeLogin(e) {
    setLogin(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    mainApi
      .authorize(password, email)
      .then(() => {
          history.push('/movies');
          console.log("вход")
          setLoggedIn(true)
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    mainApi
      .register(login, email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
        console.log("!!")
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err)
      });
  }

  function handleSaveFilm(data) {
    mainApi
    .saveFilm(data)
      .then(() => {
        uploadMovies()
        setSavedMovies(savedMovies.concat(data))
        })
      .catch((err) => {
        console.log(err)
      })
    
  }
  
  function handleRemoveSavedFilm(id) {
    mainApi
    .removeFilm(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((film) => film._id !== id));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function uploadMovies() {
    mainApi
    .getSavedFilms()
      .then((res) => {
        setSavedMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function updateData(item) {
    const data = {
      name: item.name,
      email: item.email,
    };
    return data;
  }

  useEffect(() => {
    uploadMovies()
  }, [loggedIn])

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        setLoggedIn(true);
        history.push("/");
      })
      .catch((err) => console.log(err));
  }, [loggedIn, history])

  function handleUpdateUser(item) {
    mainApi
      .setUserInfo(item)
      .then((item) => {
        setCurrentUser(updateData(item));
      })
      .catch((err) => {
        console.log(err);
      });
  }

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header 
      loggedIn={loggedIn}  
       />
      <Switch>

        <Route path='/signin'>
          <Login 
          onLogin={handleSubmitLogin}
          password={password}
          email={email}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}  
          />
        </Route>

        <Route path="/signup">
          <Register 
            onRegister={handleSubmitRegister}
            login={login}
            email={email}
            password={password}
            handleChangeLogin={handleChangeLogin}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}         
          />
          </Route>


        <ProtectedRoute 
          path="/movies"
          loggedIn={loggedIn}  
          component={Movies} 
          savedMovies = {savedMovies}
          onSave= {handleSaveFilm}
          onRemove= {handleRemoveSavedFilm}
        /> 
      
        <ProtectedRoute 
            path="/saved-movies"
            loggedIn={loggedIn}  
            component={SavedMovies} 
            films= {savedMovies}
            onRemove= {handleRemoveSavedFilm}
            setSavedMovies = {setSavedMovies}

        /> 

        <ProtectedRoute 
            path="/profile"
            loggedIn={loggedIn}  
            component={Profile} 
            email={email}
            login={login}
            handleChangeLogin={handleChangeLogin}
            handleChangeEmail={handleChangeEmail}
            onUpdateUser={handleUpdateUser}
        /> 

        <Route exact path="/"><Main /></Route>
        <Route path="*"><Error /></Route>

   
   </Switch>

    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
