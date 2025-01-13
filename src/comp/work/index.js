import "../work/work.css";
import breno from "../../assets/svg/breno_alegria.svg";
import casa_conceito from "../../assets/svg/casa_conceito.svg";
import levin from "../../assets/svg/clinica_levin.svg";
import felipe_roth from "../../assets/svg/felipe_roth.svg";
import herois_mente from "../../assets/svg/herois_da_mente.svg";

export default function work() {
  return (
    <section className="work pt" id="work">

      <div data-aos="fade-up">

        <div className="title">
          <h2>Meus trabalhos recentes</h2>
        </div>

        <div className="container">



        <div className="row center">
            <div className="col-lg-5 card-work left txt">
              <div className="subtitle">
                <h4>Casa Conceito</h4>
              </div>
              <div className="text left">
                Um website sobre um evento de arquitetura e design de interiores realizado em Salvador, Bahia. O site destaca a história do evento desde sua criação em 2018
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
              <a className="button" href="https://mostracasasconceito.com.br/" target="_blank">
                Ver site
              </a>
            </div>
            <div className="col-lg-6 card-work svg">
              <img className="work-svg meio  img-fluid" src={casa_conceito} />
            </div>
          </div>
          
          <div className="row">

            <div className="col-lg-6 card-work right svg">
              <img className="work-svg img-fluid" src={herois_mente} />
            </div>

            <div className="col-lg-5 card-work right txt">
              <div className="subtitle">
                <h3>Heróis da Mente</h3>
              </div>
              <div className="text right">
               Programa para estimular as funções executivas em crianças de contextos vulneráveis
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
              <a className="button" href="https://heroisdamente.com.br/" target="_blank">
                Ver site
              </a>
            </div>

          </div>


          <div className="row center">
            <div className="col-lg-5 card-work left txt">
              <div className="subtitle">
                <h4>Dr. Felipe Roth</h4>
              </div>
              <div className="text left">
                Um website sobre um Ortopedista, Traumatologista, Cirurgião de Mão e Microcirurgião. Consagrado com diversos prêmios em microcirurgia, atuante no estado do Mato Grosso do Sul.
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
              <a className="button" href="https://feliperoth.com.br/" target="_blank">
                Ver site
              </a>
            </div>
            <div className="col-lg-6 card-work svg">
              <img className="work-svg meio  img-fluid" src={felipe_roth} />
            </div>
          </div>


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
                <h5>Breno Alegria – Advocacia e Consultoria</h5>
              </div>
              <div className="text left">
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
            <div className="col-lg-6 card-work left svg">
              <img className="work-svg img-fluid" src={breno} />
            </div>

          </div>


        </div>

      </div>


    </section>
  );
}

