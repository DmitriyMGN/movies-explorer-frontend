import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import { useLocation } from 'react-router-dom';
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Error from "../Error/Error.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js"
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

function App() {
  const location = useLocation()
  const [currentUser, setCurrentUser] = useState(null);

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header  />
      <Switch>
        <Route path='/signin'><Login /></Route>
        <Route path="/signup"><Register /></Route>
        <Route path="/movies"><Movies /></Route>
        <Route path="/saved-movies"><SavedMovies /></Route>
        <Route path="/profile"><Profile /></Route>
        <Route exact path="/"><Main /></Route>
        {/* <ProtectedRoute path="/saved-movies"></ProtectedRoute>
        <ProtectedRoute path="/movies"></ProtectedRoute>
        <ProtectedRoute path="/profile"></ProtectedRoute> */}
      </Switch>


    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
