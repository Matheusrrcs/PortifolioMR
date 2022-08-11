import "../projects/projects.css"

export default function Projects() {
  return (
    <section className="projects pt">
      <div className="container title">
        <h2>
          Outros projetos
        </h2>
      </div>


      <div className="container">
        <div className="row body-projects">
          <div className="col-lg-4 card-projects">
            <div className="group-text">
              <header>


                <div className="subtitle">
                  <h3>
                    Hospdata

                  </h3>
                  <i class="fa-brands fa-github"></i>

                </div>

                <div className="text">
                  <p>Foi meu projeto de conclusão de curso, que pegava dados abertos sobre a saúde e deixa esses dados de forma visual.</p>
                </div>
              </header>
              <footer>
                <div className="tec-list">
                  <ul className="tec-color">
                    <li >HTML</li>
                    <li >CSS</li>
                    <li >JavaScript</li>
                    <li >Bootstrap</li>
                    <li >Node.js</li>
                  </ul>
                </div>
              </footer>
            </div>

          </div>

          <div className="col-lg-4 card-projects">

            <div className="group-text">
              <header>


                <div className="subtitle">
                  <h3>
                    Galeria

                  </h3>
                  <i class="fa-brands fa-github"></i>

                </div>

                <div className="text">
                  <p>Uma simples galeria de fotos para um casamento.</p>
                </div>
              </header>
              <footer  >

                <div className="tec-list">
                  <ul className="tec-color">
                    <li >HTML</li>
                    <li >CSS</li>
                    <li >JavaScript</li>
                    <li >Bootstrap</li>
                    <li >Node.js</li>
                  </ul>
                </div>
              </footer>


            </div>

          </div>

  
          

        </div>


      </div>
    </section >
  );
}

