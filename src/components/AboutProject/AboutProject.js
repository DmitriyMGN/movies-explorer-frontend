function AboutProject(props) {

  return (
   <div className="project">
      <h2 className="title" id="project-about">О проекте</h2>
        <div className="project__info">
          <div className="project-about">
            <h3 className="project-about__title">Дипломный проект включал 5 этапов</h3>
            <p className="project-about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="project-about">
            <h3 className="project-about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="project-about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="project-graph">
          <p className="project-graph__backend">1 неделя</p>
          <p className="project-graph__frontend">4 недели</p>
        </div>
        <div className="project-graph">
          <p className="project-graph__backend project-graph_text">Back-end</p>
          <p className="project-graph__frontend project-graph_text">Front-end</p>
        </div>
    </div>
  );
}

export default AboutProject;