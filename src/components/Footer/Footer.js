function Footer () {
  return (
    <footer className="footer">
      <p className="footer__copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="navbar navbar_footer">
        <p className="footer__text">© 2022</p>
        <div className="navbar__list">
           <a className="navbar__element navbar__element_footer" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a> 
           <a className="navbar__element navbar__element_footer" href="https://github.com/" target="_blank">Github</a> 
        </div>
    </div>
    </footer>
  )
}

export default Footer;