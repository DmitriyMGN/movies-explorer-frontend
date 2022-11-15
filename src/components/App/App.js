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
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import MainApi from "../../utils/MainApi";


function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies ] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
<<<<<<< HEAD
const [isReady, setReady] = useState(false);
=======
  const [isReady, setReady] = useState(false);
>>>>>>> 6f56e2b156da331ff98ae69a770fb100bdc77cec

  const mainApi = new MainApi();

  function handleSubmitLogin(password, email) {

    if (!email || !password) {
      return;
    }
    mainApi
      .authorize(password, email)
      .then(() => {
          history.push('/movies');
          history.go("/")
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
        history.go("/")
      })
      .catch((err) => {
        setLoggedIn(false);
        if(err === "Ошибка: 409") {
          setPopupOpen(true)
        }
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
        setSavedMovies(res.filter((movie) => movie.owner === currentUser?._id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    uploadMovies()
  }, [loggedIn])

  function signOut(e) {
    e.preventDefault()
    mainApi
    .signOut()
    .then(() => {
        setLoggedIn(false)
        localStorage.removeItem('movies')
        localStorage.removeItem('queryMovies')
        localStorage.removeItem('checkboxMovies')
    })
    .catch((err) => console.log(err));
  }

  function updateData(item) { 
    const data = {
      name: item.name,
      email: item.email,
    };
    return data;
  }

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err))
<<<<<<< HEAD
.finally(() => setReady(true))
  }, [loggedIn, history])
=======
      .finally(() => setReady(true))
  },[loggedIn, history])

>>>>>>> 6f56e2b156da331ff98ae69a770fb100bdc77cec

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
      {isReady && <Switch>
<<<<<<< HEAD

=======
>>>>>>> 6f56e2b156da331ff98ae69a770fb100bdc77cec
        <Route path='/signin'>
          <Login 
          onLogin={handleSubmitLogin} 
          />
<<<<<<< HEAD
{loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
=======
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
>>>>>>> 6f56e2b156da331ff98ae69a770fb100bdc77cec
        </Route>

        <Route path="/signup">
          <Register 
            onRegister={handleSubmitRegister}
            popupOpen={popupOpen}
            setPopupOpen={setPopupOpen}        
          />
<<<<<<< HEAD
{loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
=======
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
>>>>>>> 6f56e2b156da331ff98ae69a770fb100bdc77cec
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

   
   </Switch>}

    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
