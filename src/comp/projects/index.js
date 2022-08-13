import "../projects/projects.css"

export default function Projects() {
  return (
    <section className="projects pt" id="projects">


      <div data-aos="fade-up">

        <div className="container title">
          <h2>
            Outros projetos
          </h2>
        </div>


        <div className="container">
          <div className="row body-projects">
            <div className="col-lg-4 card-projects">
              <a className="group-text" href="https://hospdata.herokuapp.com/" target="_blank">
                <header>


                  <div className="subtitle">
                    <h3>
                      Hospdata

                    </h3>
                    <a href="https://github.com/Matheusrrcs/TCC-HospDat/" target="_blank">  <i class="fa-brands fa-github"></i></a>


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
              </a>

            </div>

            <div className="col-lg-4 card-projects">

              <a className="group-text" href="https://filipe-roberta.vercel.app/" target="_blank">
                <header>


                  <div className="subtitle">
                    <h3>
                      Galeria

                    </h3>
                    <a href="https://github.com/Matheusrrcs/Flipe-Roberta" target="_blank"> <i class="fa-brands fa-github"></i>
                    </a>
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


              </a>

            </div>




          </div>


        </div>
      </div>


    </section >
  );
}

