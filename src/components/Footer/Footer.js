import { useLocation, Link} from 'react-router-dom';

function Footer () {
  const location = useLocation()
  return (
    <footer className="footer">
      <p className="footer__copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="navbar navbar_footer">
        <p className="footer__text">© 2022</p>
        <div className="navbar__list">
          {location.pathname === '/' && <Link className="navbar__element navbar__element_footer" to="/signup">Яндекс.Практикум</Link> }
          {location.pathname === '/' && <Link className="navbar__element navbar__element_footer" to="/signup">Github</Link> }
        </div>
    </div>
    </footer>
  )
}

export default Footer;