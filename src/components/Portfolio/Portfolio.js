function Portfolio(props) {
  return (
  <div className="portfolio">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__list">
      <li className="portfolio__item">
        <a className="portfolio__link" href="#d">Статичный сайт</a>
        <p className="portfolio__link-arrow">↗</p>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="#d">Адаптивный сайт</a>
        <p className="portfolio__link-arrow">↗</p>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="#d">Одностраничное приложение</a>
        <a className="portfolio__link-arrow" href="#d">↗</a>
      </li>
    </ul>
   </div>
  );
}

export default Portfolio;
