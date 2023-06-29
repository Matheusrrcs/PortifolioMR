import "../work/work.css";
import breno from "../../assets/svg/breno_alegria.svg";
import pai from "../../assets/svg/pai_do_elojob.svg";
import levin from "../../assets/svg/clinica_levin.svg";

export default function work() {
  return (
    <section className="work pt" id="work">

      <div data-aos="fade-up">

        <div className="title">
          <h2>Meus trabalhos recentes</h2>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-lg-6 card-work right svg">
              <img className="work-svg img-fluid" src={levin} />
            </div>

            <div className="col-lg-5 card-work right txt">
              <div className="subtitle">
                <h3>Clinica Levin</h3>
              </div>
              <div className="text right">
                Um website de uma clinica de nutrologia, que tem um foco em venda de alguns produtos e serviços pelo site, além da apresentação da empresa como um todo
              </div>
              <div className="tec-list">
                <ul className="tec-color">
                  <li >HTML</li>
                  <li >CSS</li>
                  <li >JavaScript</li>
                  <li >Bootstrap</li>
                  <li >PHP</li>
                  <li >Wordpress</li>
                </ul>
              </div>
              <a className="button" href="https://www.clinicalevin.com.br/" target="_blank">
                Ver site
              </a>
            </div>

          </div>


          <div className="row center">
            <div className="col-lg-5 card-work left txt">
              <div className="subtitle">
                <h4>Pai do elojob</h4>
              </div>
              <div className="text left">
                Um website que oferece serviços de elojob. Um trabalho freelancer na qual fui o desenvolvedor e o web designer.
              </div>
              <div className="tec-list">
                <ul className="tec-color">
                  <li >HTML</li>
                  <li >CSS</li>
                  <li >JavaScript</li>
                  <li >Bootstrap</li>
                  <li >Laravel</li>
                  <li >MySql</li>
                  <li >PHP</li>
                </ul>
              </div>
              <a className="button" href="https://www.paidoelojob.com.br" target="_blank">
                Ver site
              </a>
            </div>
            <div className="col-lg-6 card-work svg">
              <img className="work-svg meio  img-fluid" src={pai} />
            </div>
          </div>


 


          <div className="row">

            <div className="col-lg-6 card-work right svg">
              <img className="work-svg img-fluid" src={breno} />
            </div>

            <div className="col-lg-5 card-work right txt">
              <div className="subtitle">
                <h5>Breno Alegria – Advocacia e Consultoria</h5>
              </div>
              <div className="text right">
                Um website para um escritorio de advocacia, especializado em processos éticos
              </div>
              <div className="tec-list">
                <ul className="tec-color">
                  <li >HTML</li>
                  <li >CSS</li>
                  <li >JavaScript</li>
                  <li >Bootstrap</li>
                  <li >Wordpress</li>
                  <li >PHP</li>
                </ul>
              </div>
              <a className="button" href="https://brenoalegria.com.br/" target="_blank">
                Ver site
              </a>
            </div>

          </div>
        </div>

      </div>


    </section>
  );
}

