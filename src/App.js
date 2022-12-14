import './App.css';
import github from "./assets/svg/github.svg";
import linkedin from "./assets/svg/linkedin.svg";
import codepen from "./assets/svg/codepen.svg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Begin from './comp/begin/';

function App() {



  useEffect(() => {

    AOS.init({ duration: 1500, disable: "false", once: true })

  }, [])


  return (
    <div className="App">

      <Begin />

      <div className="icons">
        <ul>
          <li>
            <a href="https://github.com/Matheusrrcs" target="_blank">
              <img src={github} />
            </a>

          </li>
          <li>
            <a href="https://www.linkedin.com/in/matheusrrcs/" target="_blank">
              <img src={linkedin} />
            </a>

          </li>
          <li>
            <a href="https://codepen.io/matheusrrcs/pens/public" target="_blank">
              <img src={codepen} />
            </a>

          </li>
        </ul>
      </div>


    </div>
  );
}

export default App;
