import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header (props) {
  const location = useLocation();
  return (
    <>
  {location.pathname === '/' &&  <header className="header">
    <Navigation 
    loggedIn={props.loggedIn}  
    />
    </header> } 
  {location.pathname === '/movies' &&  <header className="header"><Navigation /></header> } 
  {location.pathname === '/saved-movies' &&  <header className="header"><Navigation /></header> } 
  {location.pathname === '/profile' &&  <header className="header"><Navigation /></header> } 
  {location.pathname === '/signin' && <header className="header header_form"><Navigation /></header> }
  {location.pathname === '/signup' && <header className="header header_form"><Navigation /></header> } 
  </>
  )
}

export default Header;