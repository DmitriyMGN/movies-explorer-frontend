import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import { useLocation } from 'react-router-dom';
import Movies from "../Movies/Movies.js";

function App() {
  const location = useLocation()

return (

    // <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header  />
      {location.pathname === '/' &&  <Main /> }
      {location.pathname === '/movies' &&  <Movies /> }
      <Footer />
      </div>
    // </CurrentUserContext.Provider>
);
}

export default App;
