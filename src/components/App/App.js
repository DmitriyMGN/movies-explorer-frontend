import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import { useLocation } from 'react-router-dom';
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Error from "../Error/Error.js";

function App() {
  const location = useLocation()

return (
      <div className="page">
      <Header  />
      {location.pathname === '/' &&  <Main /> }
      {location.pathname === '/movies' &&  <Movies /> }
      {location.pathname === '/saved-movies' &&  <SavedMovies /> }
      {location.pathname === '/profile' &&  <Profile /> }
      {location.pathname === '/signin' &&  <Login /> }
      {location.pathname === '/signup' &&  <Register /> }
      {location.pathname === '/404' &&  <Error /> }
      </div>
);
}

export default App;
