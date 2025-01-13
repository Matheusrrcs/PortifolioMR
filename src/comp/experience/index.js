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
                                    Setembro 2021 - Setembro 2022.
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                    Desenvolvimento de um aplicativo educacional como parte de uma
                                    estratégia inovadora para o ensino de Cálculo Diferencial e Integral,
                                    com foco em interação e aprendizado prático;
                                </p>
                                <p>
                                    Colaboração no desenvolvimento de um jogo educacional utilizando
                                    Unity, contribuindo com a implementação de mecânicas de jogo, testes
                                    e ajustes técnicos para garantir uma experiência fluida e envolvente;
                                </p>
                                <p>
                                    Criação de assets visuais (sprites, animações e interfaces) para o jogo,
                                    garantindo que os elementos gráficos fossem coesos e visivelmente
                                    atraentes, alinhados ao conceito pedagógico do projeto.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-1  colunas line">
                            <div className="line-v">
                            </div>
                        </div>
                        <div className="col-lg-5 colunas right mt-0">

                            <div className="subtitle">
                                <h3>    Infocraft   <span class="tec-color"> Desenvolvedor Frontend </span>
                                </h3>
                            </div>

                            <div className="date">
                                <small>
                                    Setembro 2022 - Presente. Tempo integral
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                    Desenvolvimento de um sistema de gestão educacional utilizando
                                    tecnologias como HTML, CSS, JavaScript, PHP, Laravel e ScriptCase;
                                </p>
                                <p>
                                    Participação em projetos de desenvolvimento de software, trabalhando
                                    em equipe e colaborando em todas as fases do ciclo de vida do projeto;
                                </p>
                                <p>
                                    Criação e manutenção de bancos de dados MySQL e PostgreSQL;
                                </p>
                                <p>
                                    Integração de APIs externas para consumo de serviços e dados;
                                </p>
                                <p>
                                    Utilização de ferramentas de controle de versão como Git;
                                </p>
                                <p>
                                    Criação de novos templates e gerenciamento de toda a parte visual do
                                    sistema;
                                </p>
                                <p>
                                    Documentação de novas funcionalidades e funções do sistema,
                                    garantindo a clareza e a rastreabilidade do projeto para o time
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-5 colunas left ">
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
                                    Setembro 2020 - 2022. Estágio
                                </small>

                            </div>
                            <div className="text">
                                <p>
                                    Manutenção e solução de problemas de software e hardware,
                                    garantindo o pleno funcionamento dos sistemas e equipamentos dos
                                    usuários, identificando e resolvendo problemas de forma rápida e
                                    eficiente;
                                </p>
                                <p>
                                    Interação direta com usuários para entender suas necessidades e
                                    problemas técnicos, fornecendo soluções claras e de fácil compreensão;
                                </p>
                                <p>
                                    Configuração e manutenção de redes, garantindo a conectividade e a
                                    segurança de sistemas locais e remotos, além de configurar e ajustar
                                    equipamentos de rede para maximizar a performance.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}

