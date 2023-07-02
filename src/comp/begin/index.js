import "../begin/begin.css"
import Navbar from '../navbar/';
import beginSvg from "../../assets/svg/begin.svg"
import About from "../about"
import Experience from "../experience"
import Work from "../work"
import Projects from "../projects";
import Contato from "../contato";
import { useEffect, useState } from "react";
import anime from "animejs";


export default function Begin() {

    const [valueInput, inputValues] = useState("");
    useEffect(() => {


 
        textInput();
        const digit = anime.timeline({
            loop: true,

        });


        digit.add({
            targets: '.digit',
            opacity: [0, 1],
            duration: 1500,
            delay: (el, i) => {
                return 250 + 50 * i;
            }
        }

        )

    }, [])


    function textInput() {
        let text = document.getElementById('text-input');

        text.addEventListener("click", () => {
            document.querySelector('.digit').classList.add('d-none')


        })
    }

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
                                    Sou um profissional especializado em desenvolvimento web, com habilidades complementares em design. Estou empenhado em aprimorar constantemente minha trajetória profissional.
                                    </p>
                                </div>

                                <div className='code fade-up-text'>
                                    <p>
                                        Digite <span>“SIM”</span> se quer saber mais sobre mim
                                    </p>
                                    <hr />

                                    <div className={`input-begin ${valueInput.toLowerCase() == "sim" ? "correct" : "error"}`}>
                                        <p>
                                            ./resposta -s :
                                        </p>
                                        <span className="digit">|</span>

                                        <input type="text" id="text-input" value={valueInput} onChange={(e) => {
                                            inputValues(`${e.target.value}`)

                                        }} />

                                        <span className={`entrar ${valueInput.toLowerCase() == "sim" ? "correct" : ""}`} onClick={(e) => {
                                            if (valueInput.toLowerCase() == "sim") {
                                                e.preventDefault();
                                                window.location.href = '/#about'
                                            }
                                        }}>

                                            <i class="fa-solid fa-circle-arrow-right"></i>
                                        </span>
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


        </main >
    );
}

