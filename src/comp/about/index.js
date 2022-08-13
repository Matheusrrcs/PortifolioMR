import "./about.css"
import tec from "../../assets/svg/tec.svg"
import tecMais from "../../assets/svg/tecMais.svg"

export default function About() {
    return (
        <section className="about pt" id="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6">
                        <img id="svg-about" class="img-fluid" src={tec} alt="imagem em svg da experiencia" />

                        <div className="row body-card-about">
                            <div className="col-lg-6 col-md-6 align-self-center  card-about">
                                <div className="detalhes">
                                    <div className="container">
                                        <h2><i class="fa-brands fa-linkedin"></i> Mais detalhes</h2>
                                        <a className="button" href="https://www.linkedin.com/in/matheusrrcs/" target='_blank'>
                                            Ver mais
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 align-self-center card-about">
                                <img id="svg-tecMais" class="img-fluid" src={tecMais} alt="imagem em svg da experiencia" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="title">
                            <h3>Sobre mim</h3>
                        </div>
                        <div className="text">
                            <p>
                                Olá! Meu nome é Matheus e gosto de criar coisas para  a internet. Meu interesse em desenvolvimento web começou em 2018, quando na faculdade observei um dos trabalhos que meu colega realizou e fiquei apaixonado. Depois tentei editar sites já prontos e esse foi o começo da minha jornada de dedicação e estudo.
                            </p>
                            <p>
                                Eu sempre costumo dizer que acredito que qualquer habilidade possa ser alcançada através do estudo e trabalho persistentes e levo isso comigo para todos os desafios que encontro. Me considero curioso e apaixonado por programação pois nela encontrei um forma de poder criar tudo que eu sempre quis.

                            </p>
                            <p>Avançando para hoje, foquei na criação de projetos pessoais e alguns trabalhos freelancers, almejando sempre a minha evolução como profissional.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

