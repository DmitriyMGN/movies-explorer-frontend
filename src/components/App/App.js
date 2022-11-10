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
import { Route, Switch, useHistory } from "react-router-dom";
import MainApi from "../../utils/MainApi";


function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies ] = useState([]);

  const mainApi = new MainApi();

  function handleSubmitLogin(password, email) {

    if (!email || !password) {
      return;
    }
    mainApi
      .authorize(password, email)
      .then(() => {
          history.push('/movies');
          setLoggedIn(true)
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
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

  function signOut(e) {
    e.preventDefault()
    mainApi
    .signOut()
    .then(() => {
        setLoggedIn(false)
    })
    .catch((err) => console.log(err));
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
        history.push("/movies");
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
          />
        </Route>

        <Route path="/signup">
          <Register 
            onRegister={handleSubmitRegister}        
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
            onUpdateUser={handleUpdateUser}
            signOut={signOut}
        /> 

        <Route exact path="/"><Main /></Route>
        <Route path="*"><Error /></Route>

   
   </Switch>

    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
