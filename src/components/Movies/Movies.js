import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer.js";

function Movies(props) {

  return (
   <>
    <SearchForm />
    <MoviesCardList />
    <Footer />
   </>
  );
}

export default Movies;
