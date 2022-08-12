import "../navbar/navbar.css"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';

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


  useEffect(() => {

    rolar();
    anime.timeline({loop: false})
    .add({
      targets: '.navbar-brand',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i+1)
    }) 
    
  }, [])

  function rolar() {

    const navbar = document.getElementById("navbar");


    window.onscroll = function (e) {

      if (window.scrollY == 0) {
        navbar.classList.add("scrollDefault")
        navbar.classList.remove("scroll")
        navbar.classList.remove("scrollUp")
      }


      else if (this.oldScroll > this.scrollY) {
        navbar.classList.add("scrollUp")
        navbar.classList.remove("scroll")
        navbar.classList.remove("scrollDefault")
      }
      else {
        navbar.classList.add("scroll")
        navbar.classList.remove("scrollUp")
        navbar.classList.remove("scrollDefault")
      }
      this.oldScroll = this.scrollY;
    }


  }


  return (
    <header>

      <nav class={`navbar navbar-expand-lg fixed-top ${active}`} id="navbar">
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

