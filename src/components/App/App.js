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
import MainApi from "../../utils/MainApi.js";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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
          history.go('/');
          setLoggedIn(true)
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    // setEmail("");
    // setPassword("");
    // setLogin("");
    mainApi
      .register(login, email, password)
      .then(() => {
        setLoggedIn(true);
        console.log("!!")
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }

  function updateData(item) {
    const data = {
      name: item.name,
      about: item.about,
      avatar: item.avatar,
    };
    return data;
  }
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
      <Header  />
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
        <Route path="/movies"><Movies /></Route>
        <Route path="/saved-movies"><SavedMovies /></Route>
        <Route path="/profile">
          <Profile 
          onUpdateUser={handleUpdateUser}
          />
          </Route>
        <Route exact path="/"><Main /></Route>
        <Route path="*"><Error /></Route>
        {/* <ProtectedRoute path="/saved-movies"></ProtectedRoute>
        <ProtectedRoute path="/movies"></ProtectedRoute>
        <ProtectedRoute path="/profile"></ProtectedRoute> */}
      </Switch>


    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
