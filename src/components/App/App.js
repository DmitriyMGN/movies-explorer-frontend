import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
function App() {


return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header  />
      <Main />
      <Footer />
      </div>
    // </CurrentUserContext.Provider>
);
}

export default App;
