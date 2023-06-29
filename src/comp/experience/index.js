import "../experience/experience.css"
import moon from "../../assets/imagens/moon.png"


export default function Experience() {
    return (
        <section className="experience pt" data-aos="fade-up" id="experience">
            <aside>
                <div className="moon">
                    <img src={moon} alt="imagem da lua" />

                </div>

            </aside>

            <div data-aos="fade-up">

                <div className="title">
                    <h2>Por onde trabalhei</h2>
                </div>

                <div className="container">
                    <div className="row experience-row">

                        <div className="col-lg-5 colunas left ">
                            <div className="subtitle">
                                <h3>    Unijorge <span class="tec-color">Iniciação científica </span></h3>
                            </div>

                            <div className="date">
                                <small>
                                    Setembro 2020 - Presente. Estágio
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                    Construção de Aplicativo como estratégia para ensino de Cálculo Diferencial e Integral
                                </p>
                                <p>
                                    Construção de um aplicativo que possa ser usado como um
                                    auxílio para profissionais da área de educação no ensino de
                                    conteúdos mais abrangentes nas disciplinas de Cálculo Diferencial
                                    e Integral
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-1  colunas line">
                            <div className="line-v">
                            </div>
                        </div>

                        <div className="col-lg-5 colunas right">

                            <div className="subtitle">
                                <h3>    Defensoria Publica  <span class="tec-color"> Suporte tecnico</span>
                                </h3>
                            </div>

                            <div className="date">
                                <small>
                                    Setembro 2020 - Presente. Estágio
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                    Manutenção de software e hardware
                                </p>
                                <p>

                                    Testes de funcionamento e acompanhamento de desempenho
                                    dos recursos técnicos.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-5 colunas left ">
                        </div>

                        <div className="col-lg-1  colunas line">
                            <div className="line-v">
                            </div>
                        </div>

                        <div className="col-lg-5 colunas right mt-0">

                            <div className="subtitle">
                                <h3>    Infocraft   <span class="tec-color"> Desenvolvedor PHP</span>
                                </h3>
                            </div>

                            <div className="date">
                                <small>
                                    Setembro 2022 - Presente. Tempo integral
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                Trabalho no desenvolvimento de um sistema de gestão educacional usando JavaScript, CSS, HTML, Laravel  PHP e ScriptCase. 
                                </p>
                                <p>

                                Faço manutenção em banco de dados e criação de lading pages
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
               
                 
            </div>
        </section>
    );
}

