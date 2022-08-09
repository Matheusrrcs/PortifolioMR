import "../experience/experience.css"
import moon from "../../assets/imagens/moon.png"


export default function Experience() {
    return (
        <section className="experience pt">
            <div className="moon">
                <img src={moon} alt="imagem da lua" />

            </div>

            <div className="title">
                <h2>Por onde trabalhei</h2>
            </div>

            <div className="container">
                <div className="row experience-row">

                    <div className="col-lg-5 colunas left ">
                        <div className="subtitle">
                            <h2> <span class="tec-color">Iniciação científica</span>  - Unijorge </h2>
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
                            <h3>    Defensoria Publica - <span class="tec-color">Suporte tecnico</span>
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


                </div>
            </div>
        </section>
    );
}

