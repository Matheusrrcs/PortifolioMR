import "../support/support.css"

export default function Projects() {
  return (
    <section className="projects pt" id="projects">


      <div data-aos="fade-up">

        <div className="container title">
          <h2>
            Projetos com meu suporte
          </h2>
        </div>


        <div className="container">
          <div className="row body-projects">

            <div className="col-lg-4 card-projects">
              <a className="group-text" href="https://palacetetirachapeu.com.br/" target="_blank">
                <header>


                  <div className="subtitle">
                    <h3>
                      Palacete Tira Chapéu
                    </h3>
                    <a href="https://palacetetirachapeu.com.br/" target="_blank">  <i class="fa-solid fa-globe"></i></a>

                  </div>

                  <div className="text">
                    <p>Atuando na correção de bugs, melhorias de performance e atualização de conteúdos, garantindo que o site se mantenha eficiente e seguro para seus usuários.</p>
                  </div>
                </header>

              </a>

            </div>



            <div className="col-lg-4 card-projects">
              <a className="group-text" href="https://andreavelame.com.br/" target="_blank">
                <header>


                  <div className="subtitle">
                    <h3>
                      Andrea Velame

                    </h3>
                    <a href="https://andreavelame.com.br/" target="_blank">  <i class="fa-solid fa-globe"></i></a>


                  </div>

                  <div className="text">
                    <p>Atuando na correção de bugs, melhorias de performance e atualização de conteúdos, garantindo que o site se mantenha eficiente e seguro para seus usuários.</p>
                  </div>
                </header>

              </a>

            </div>

          </div>
        </div>
      </div>


    </section >
  );
}

