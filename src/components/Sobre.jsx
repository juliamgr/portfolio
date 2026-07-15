import "./Sobre.css";

function About() {
  return (
    <section className="about" id="sobre">

      <h2>Sobre Mim</h2>

      <p className="about-text">
        Sou estudante do Senac Distrito Criativo, escola técnica em informática.
      </p>

      <h3>Minha Abordagem</h3>

      <div className="cards">

        <div className="card">
          <span>01</span>
          <h4>Entender o problema</h4>
          <p>
            Analiso as necessidades antes de iniciar qualquer projeto.
          </p>
        </div>

        <div className="card">
          <span>02</span>
          <h4>Desenvolver</h4>
          <p>
            Construo interfaces modernas, limpas e responsivas.
          </p>
        </div>

        <div className="card">
          <span>03</span>
          <h4>Melhorar</h4>
          <p>
            Sempre busco otimizar desempenho e experiência do usuário.
          </p>
        </div>

      </div>

      <div className="numbers">

        <div>
          <h2>02+</h2>
          <p>Anos estudando programação</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Projetos desenvolvidos</p>
        </div>

        <div>
          <h2>05+</h2>
          <p>Tecnologias aprendidas</p>
        </div>

      </div>

    </section>
  );
}

export default About;