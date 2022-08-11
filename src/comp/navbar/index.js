import "../navbar/navbar.css"
import React, { useState } from 'react';

export default function Experience() {


  const [active, Setactive] = useState("");

  function activeAnim() {

    const body = document.getElementById("body");
    const bodyPrincipal = document.getElementById("body-principal")


    if (active == "") {
      Setactive("active");
      body.classList.add("desfocus");
      bodyPrincipal.classList.add("active")
    }
    else {
      Setactive("");
      body.classList.remove("desfocus");
      bodyPrincipal.classList.remove("active");
    }
  }

  return (
    <header>

      <nav class={`navbar navbar-expand-lg fixed-top ${active}`}>
        <div class="container">
          <a class="navbar-brand" href="#">mrcs</a>
          <button class="navbar-toggler" type="button" onClick={() => { activeAnim() }}>


            <span class="menu-trigger">
              <i class={`menu-trigger-bar top ${active}`}></i>
              <i class={`menu-trigger-bar middle ${active}`}></i>
              <i class={`menu-trigger-bar  bottom ${active}`}></i>
            </span>

            <span class="close-trigger">
              <i class={`close-trigger-bar left ${active}`} ></i>
              <i class={`close-trigger-bar right ${active}`}></i>
            </span>

          </button>
          <aside>

            <div className={`menu-body ${active}`}>
              <ul className="menu-list">
                <li className="item-menu">
                  <a className="item active" href="#">Sobre</a>
                </li>
                <li className="item-menu">
                  <a className="item" href="#">Experiencia</a>
                </li>
                <li className="item-menu">
                  <a className="item" href="#">Projetos</a>
                </li>
                <li className="item-menu">
                  <a className="item" href="#">Contato</a>
                </li>
                <li className="item-menu">
                  <a className="button" href="#">Resumo</a>
                </li>
              </ul>

            </div>

          </aside>

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

