import "../contato/contato.css"

export default function Contato() {
  return (
    <section className="contato pt"  id='contato'>

      <header className="container" data-aos="fade-up">


        <div className="title">
          <h2>
            Contato
          </h2>
        </div>

        <div className="container">
          <div className="row body-contato">
            <div className=" col-lg-5 col-md-6 col-sm-12">

              <div className="text">
                <p>
                  Estou interessado em oportunidades de trabalho. No entanto, se você tiver outra solicitação ou pergunta, não hesite em mandar um email.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="group-btn">
          <a href="mailto:matheus-santana-msn@hotmail.com" className="button">Dizer oi</a>
        </div>

      </header>


    </section>
  );
}

