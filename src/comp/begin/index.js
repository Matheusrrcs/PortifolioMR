import "../begin/begin.css"
import Navbar from '../navbar/';
import beginSvg from "../../assets/svg/begin.svg"
import About from "../about"
import Experience from "../experience"
import Work from "../work"
import Projects from "../projects";
import Contato from "../contato";


export default function Begin() {


    return (

        <main className="begin-body" id="begin">

            <Navbar />



            <main id="body-principal">
                <section className="begin" id="begin" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center" >
                                <div className="Apr fade-up-text" >
                                    <h1>Oi, meu nome é</h1>
                                </div>
                                <div className="name fade-up-text ">
                                    <h2>Matheus Rosário.</h2>
                                </div>
                                <div className="adjective fade-up-text">
                                    <h3>Este é meu portifolio.</h3>
                                </div>
                                <div className="apresentation fade-up-text">
                                    <p>
                                        Eu sou um desenvolvedor web (que ocasio nalmente  faz alguns
                                        trabalhos de designer), e estou focado na minha evoluação
                                        profissional.
                                    </p>
                                </div>

                                <div className='code fade-up-text'>
                                    <p>
                                        Digite <span>“SIM”</span> se quer saber mais sobre mim
                                    </p>
                                    <hr />
                                    <div className="input-begin">
                                        <p>
                                            ./resposta -s : |
                                        </p>
                                        <input type="text"></input>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center fade-up-text" >
                                <img id="svg-begin" class="img-fluid" src={beginSvg} alt="imagem em svg do inicio" />
                            </div>
                        </div>
                    </div>
                </section>
                <About />
                <Experience />
                <Work />
                <Projects />
                <Contato />

                <footer className="text">
                    <small>Projetado e construído por Matheus Rosario</small>
                </footer>
            </main>


        </main>
    );
}

