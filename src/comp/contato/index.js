import "../contato/contato.css"

export default function Contato() {
  return (
    <section className="contato pt">

      <header className="container">


        <div className="title">
          <h2>
            Contato
          </h2>
        </div>

        <div className="text ">
          <p>
            Estou interessado em oportunidades de trabalho. No entanto, se você tiver outra solicitação ou pergunta, não hesite em mandar um email.
          </p>
        </div>

        <div className="group-btn">
          <a href="mailto:matheus-santana-msn@hotmail.com" className="button">Dizer oi</a>
        </div>

      </header>


    </section>
  );
}

