import React from "react";
import Slide from "react-reveal/Slide";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="ctn-aboutme" id="home">
        <Slide left>
          <div className="ctn-text-aboutme">
            <p className="text-aboutme">
              ¡Hola! Soy Gabriel Cornide, <br />
              Bienvenida/o a mi portfolio. Soy un desarrollador FullStack MERN, con un enfoque especializado en el front-end. Me apasionan las tecnologías de la computación y el mundo de la IT. Además, tengo experiencia en el desarrollo de proyectos móviles tanto personales como para distintas start-ups. He trabajado como freelancer en diversos proyectos y mi formación incluye un bootcamp intensivo de desarrollo Full-Stack JavaScript. Actualmente, sigo formándome y aprendiendo de start-ups y de manera autodidacta.<br />
              <a className="link-aboutme" href="#contact">
                → Mi contacto ←
              </a>
            </p>
          </div>
        </Slide>
      </div>
    </>
  );
}
