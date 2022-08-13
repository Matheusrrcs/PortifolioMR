import "../navbar/navbar.css"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import $ from 'jquery'
import curriculo from '../../assets/curriculo/curriculoMRCS.pdf'

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


    $(".nav-link").on("click", function (e) {
      if (!e.target.className == "nav-link button")
        e.preventDefault();

        $('.nav-link').removeClass('active');
        $(this).addClass('active');


      var section = $(this).attr('href')
      var top = $(section).offset().top + 10
    
      $('html').scrollTop(top)
    })

    $(".item").on("click", function (e) {
      if (!e.target.className == "item button")
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');


      console.log(e.target.className)
      const menuBody = document.querySelector('.menu-body');
      const html = document.querySelector('#body')
      const sctn = document.querySelector('#body-principal')

      Setactive("");
      sctn.classList.remove("active")
      menuBody.classList.remove("active")
      html.classList.remove("desfocus")


      var section = $(this).attr('href')
      var top = $(section).offset().top + 10

      $('html').scrollTop(top)
    })

    const icons = document.querySelector('.icons');
    const menuTrigger = document.querySelector('.navbar-toggler');

    menuTrigger.addEventListener("click", () => { activeAnimation() })

    rolar();

    const timeline = anime.timeline({
      loop: false,

    });
    const icon = anime.timeline({
      loop: false,

    });

    timeline.add({
      targets: '.navbar-brand',
      scale: [0, 1],
      duration: 400,
      elasticity: 600,

      delay: (el, i) => 45 * (i + 1)
    }

    )

    timeline.add({
      targets: '.nav-item',
      duration: 400,
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: (el, i) => {
        return 50 + 50 * i;
      }

    })

    timeline.add({
      targets: '.fade-up-text',
      duration: 1500,
      opacity: [0, 1],
      translateY: [100, 0],
      delay: (el, i) => {
        return 100 + 50 * i;
      }

    })

    icon.add({
      targets: '.icons',
      duration: 1000,
      translateY: [100, 0],
      opacity: [0, 1],

      delay: (el, i) => {
        return 2000 + 50 * i;
      }
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

  function activeAnimation() {
    console.log("entrei")
    const menu = anime.timeline({
      loop: false,

    });
    menu.add({
      targets: '.item-menu',
      duration: 2500,
      translateY: [100, 0],
      opacity: [0, 1],

      delay: (el, i) => {
        return 300 + 50 * i;
      }
    })
  }

  return (
    <header>

      <nav className={`navbar navbar-expand-lg fixed-top ${active}`} id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">mrcs</a>
          <button className="navbar-toggler" type="button" onClick={() => { activeAnim() }}>


            <span className="menu-trigger">
              <i className={`menu-trigger-bar top ${active}`}></i>
              <i className={`menu-trigger-bar middle ${active}`}></i>
              <i className={`menu-trigger-bar  bottom ${active}`}></i>
            </span>

            <span className="close-trigger">
              <i className={`close-trigger-bar left ${active}`} ></i>
              <i className={`close-trigger-bar right ${active}`}></i>
            </span>

          </button>
          <aside>

            <div className={`menu-body ${active}`}>
              <ul className="menu-list">
                <li className="item-menu">
                  <a className="item" href="#about">Sobre</a>
                </li  >
                <li className="item-menu">
                  <a className="item" href="#experience">Experiencia</a>
                </li>
                <li className="item-menu">
                  <a className="item" href="#work">Projetos</a>
                </li>
                <li className="item-menu">
                  <a className="item" href="#contato">Contato</a>
                </li>
                <li className="item-menu">
                  <a className=" item button" href={curriculo} target="_blank" >Resumo</a>
                </li>
              </ul>

            </div>

          </aside>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"  >
                <a className="nav-link  " href="#about" >Sobre</a>
              </li>
              <li className="nav-item  "  >
                <a className="nav-link" href="#experience" >Experiencia</a>
              </li>
              <li className="nav-item  " >
                <a className="nav-link" href="#work" >Projetos</a>
              </li>
              <li className="nav-item  "  >
                <a className="nav-link" href="#contato" >Contato</a>
              </li>
              <li className="nav-item  "  >
                <a className="nav-link button" href={curriculo} target="_blank" >Resumo</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>




    </header>
  );
}

