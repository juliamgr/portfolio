import "./Projetos.css";

function Projects() {

  const projetos = [
    {
      titulo: "Portfólio Pessoal",
      descricao: "Site responsivo desenvolvido com React e CSS.",
      link: "https://github.com/juliamgr/portfolio.git"
    },
    {
      titulo: "Dashboard Saúde",
      descricao: "Projeto utilizando banco de dados e mapas interativos.",
      link: "https://github.com/senacrs-emti/2025-2MA-cidadeconectada-G08.git"
    },
  ];

  return (
    <section className="projects" id="projetos">

      <h2>Projetos</h2>

      <div className="projects-grid">

        {projetos.map((item, index) => (

          <div className="project-card" key={index}>

            <div className="project-image"></div>

            <h3>{item.titulo}</h3>

            <p>{item.descricao}</p>

            <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-button"
>
  Ver Projeto
</a>

          </div>

        ))}

      </div>

    </section>
  );

}

export default Projects;