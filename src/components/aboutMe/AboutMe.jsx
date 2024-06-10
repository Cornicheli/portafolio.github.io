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
              Hola Soy Gabriel Cornide,<br />
              Un programador full-stack especializado, con un enfoque sólido en el desarrollo front-end y una inclinación hacia el aprendizaje proactivo. Disfruto aplicando la creatividad para ofrecer soluciones innovadoras que superen las expectativas, entregando resultados sobresalientes. Mi pasión por el desarrollo personal y el mundo IT se refleja en mi dedicación como autodidacta, donde he adoptado metodologías ágiles para gestionar eficientemente el tiempo y fomentar una colaboración efectiva en equipos. Estoy comprometido con la mejora continua y la excelencia en cada proyecto que emprendo.<br />
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
