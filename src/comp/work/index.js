import "../work/work.css"
import burn from "../../assets/svg/burn.svg"
import dream from "../../assets/svg/dream.svg"
import mg from "../../assets/svg/mg.svg"

export default function work() {
  return (
    <section className="work pt">
      <div className="title">
        <h2>Meus trabalhos recentes</h2>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-lg-6 card-work right svg">
            <img className="work-svg img-fluid" src={burn} />
          </div>

          <div className="col-lg-5 card-work right txt">
            <div className="subtitle">
              <h3>Elojob Burn</h3>
            </div>
            <div className="text right">
              Um website que oferece serviços de elojob , basicamente  um jogador
              paga para que outro jogador  coloque sua conta em um elo
              (Classificação) mais alta. Foi um trabalho freelancer na qual fui o desenvolvedor e o web designer.
            </div>
            <div className="tec-list">
              <ul className="tec-color">
                <li >HTML</li>
                <li >CSS</li>
                <li >JavaScript</li>
                <li >Bootstrap</li>
              </ul>
            </div>
            <a className="button" href="https://www.elojobburn.com" target="_blank">
              Ver site
            </a>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-5 card-work left txt">
            <div className="subtitle">
              <h4>Elojob Dream</h4>
            </div>
            <div className="text left">
              Um website que oferece serviços de elojob. Também um trabalho freelancer na qual fui o desenvolvedor e o web designer.
            </div>
            <div className="tec-list">
              <ul className="tec-color">
                <li >HTML</li>
                <li >CSS</li>
                <li >JavaScript</li>
                <li >Bootstrap</li>
              </ul>
            </div>
            <a className="button" href="https://www.elojobdream.com" target="_blank">
              Ver site
            </a>
          </div>
          <div className="col-lg-6 card-work svg">
            <img className="work-svg img-fluid" src={dream} />
          </div>
        </div>



        <div className="row">

          <div className="col-lg-6 card-work right svg">
            <img className="work-svg img-fluid" src={mg} />
          </div>

          <div className="col-lg-5 card-work right txt">
            <div className="subtitle">
              <h5>Mg contabilidade</h5>
            </div>
            <div className="text right">
              Um website que gera boletos e gerencia os dados cadastrados.  trabalho freelancer, desenvolvedor / web designer.
            </div>
            <div className="tec-list">
              <ul className="tec-color">
                <li >HTML</li>
                <li >CSS</li>
                <li >JavaScript</li>
                <li >Bootstrap</li>
                <li >React</li>
              </ul>
            </div>
            <a className="button" href="https://formulario-mg.herokuapp.com" target="_blank">
              Ver site
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

