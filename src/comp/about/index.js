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
                                Olá! Meu nome é Matheus e dedico-me à criação de soluções para o ambiente online. Meu interesse pelo desenvolvimento web despertou em 2018, enquanto observava um projeto realizado por um colega durante a faculdade. Desde então, mergulhei na edição de websites existentes, marcando o início de minha jornada dedicada ao estudo e aperfeiçoamento.

                            </p>
                            <p>

                                Acredito sinceramente que todas as habilidades podem ser adquiridas por meio de estudo persistente e trabalho árduo, princípio que aplico a todos os desafios que enfrento. Sou movido pela curiosidade e apaixonado pela programação, pois encontrei nela uma maneira de materializar tudo aquilo que sempre desejei criar.
                            </p>
                            <p>
                                Atualmente, estou concentrado na execução de projetos pessoais e na realização de trabalhos freelance, buscando constantemente o aprimoramento de minhas competências profissionais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

