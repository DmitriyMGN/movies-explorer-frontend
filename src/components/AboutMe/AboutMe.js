import myPhoto from '../../images/my_image.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(props) {
  return (
  <section>
   <h2 className="title title_about-me" id="about-me">Студент</h2>
   <div className="about-me">
      <div className="about-me__info">
        <h3 className="about-me__title">Дмитрий</h3>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 27 лет</h4>
        <p className="about-me__paragraph">Я родился и живу в Москве, закончил факультет экономики МГПУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className="about-me__link" href="https://github.com/DmitriyMGN" target="_blank">Github</a>
      </div>
      <img className="about-me__img" alt="Моё фото" src={myPhoto} />
   </div>
   <Portfolio />
   </section>
  );
}

export default AboutMe;