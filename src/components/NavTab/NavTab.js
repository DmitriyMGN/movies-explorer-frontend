

function NavTab(props) {

  return (
   <div className="navtab">
      <h2 className="navtab__title">О проекте</h2>
        <div className="navtab__info">
          <div className="navtab-about">
            <h3 className="navtab-about__title">Дипломный проект включал 5 этапов</h3>
            <p className="navtab-about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="navtab-about">
            <h3 className="navtab-about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="navtab-about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="navtab-graph">
          <p className="navtab-graph__backend">1 неделя</p>
          <p className="navtab-graph__frontend">4 недели</p>
        </div>
        <div className="navtab-graph">
          <p className="navtab-graph__backend navtab-graph__backend_text">Back-end</p>
          <p className="navtab-graph__frontend navtab-graph__frontend_text">Front-end</p>
        </div>
    </div>
  );
}

export default NavTab;
