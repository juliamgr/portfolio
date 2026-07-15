import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="habilidades">

      <h2>Habilidades Técnicas</h2>

      <p className="subtitle">
        Tecnologias que utilizo para desenvolver projetos.
      </p>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Front-End</h3>

          <div className="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Ferramentas</h3>

          <div className="tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Figma</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Back-End</h3>

          <div className="tags">
            <span>Node.js</span>
            <span>MySQL</span>
            <span>PHP</span>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Skills;