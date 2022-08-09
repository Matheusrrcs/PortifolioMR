import "../navbar/navbar.css"

export default function Experience() {
  return (
    <header>

      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">mrcs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Experiencia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
              </li>
              <li class="nav-item">
                <a class="nav-link button" href="#">Resumo</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </header>
  );
}

