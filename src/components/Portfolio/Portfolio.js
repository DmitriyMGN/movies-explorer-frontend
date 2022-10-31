function Portfolio(props) {
  return (
  <div className="portfolio">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__list">
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/DmitriyMGN/how-to-learn" target="_blank">
        Статичный сайт
        <p className="portfolio__link-arrow">↗</p>
        </a>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/DmitriyMGN/russian-travel" target="_blank">
        Адаптивный сайт
        <p className="portfolio__link-arrow">↗</p>
        </a>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/DmitriyMGN/react-mesto-api-full" target="_blank">
        Одностраничное приложение
        <p className="portfolio__link-arrow">↗</p>
        </a>
      </li>
    </ul>
   </div>
  );
}

export default Portfolio;
