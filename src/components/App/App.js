import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import { useLocation } from 'react-router-dom';
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";

function App() {
  const location = useLocation()

return (

    // <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header  />
      {location.pathname === '/' &&  <Main /> }
      {location.pathname === '/movies' &&  <Movies /> }
      {location.pathname === '/saved-movies' &&  <SavedMovies /> }
      {location.pathname === '/profile' &&  <Profile /> }
      </div>
    // </CurrentUserContext.Provider>
);
}

export default App;
