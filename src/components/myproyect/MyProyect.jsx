import React from "react";
import Card from "../card/Card";
import "./myProyect.css";
import {
  GameCenter,
  MyTinerary,
  GameCenterNative,
  MyTineraryNative,
  MyPorfolioElectron,
  Touken1, Touken2, Touken3, Touken4, Touken5, Touken6, Touken7,
  ToukenMobile,
} from "../../assets/img/index";

export default function MyProyect() {
  return (
    <>
      <div className="ctn-img-myproyect" id="proyect">
        {/* <Card /> */}
        <Card
          imgCard={Touken1}
          title="→ Touken"
          text='Bienvenido a la web de pre-lanzamiento de StartUp Chile. ¡Nuestra app móvil! En esta plataforma, tanto usuarios como empresas pueden inscribirse para el próximo lanzamiento. Simplemente, elige tu categoría de proyecto para invertir y registrarse como usuario o empresa.'
          imgOne={Touken1}
          imgTwo={Touken2}
          imgThree={Touken3}
          imgFour={Touken4}
          imgFive={Touken5}
          imgSix={Touken6}
          imgSeven={Touken7}
          modalTitle='Imagenes del trabajo'
        />
        <Card
          imgCard={Touken1}
          title="→ Touken"
          text='Bienvenido a la web de pre-lanzamiento de StartUp Chile. ¡Nuestra app móvil! En esta plataforma, tanto usuarios como empresas pueden inscribirse para el próximo lanzamiento. Simplemente, elige tu categoría de proyecto para invertir y registrarse como usuario o empresa.'
          imgOne='https://porfolio-gabriel-cornide.netlify.app/assets/GameCenter-ac9a6fe0.png'
          imgTwo='https://porfolio-gabriel-cornide.netlify.app/assets/MyTinerary-aea424d2.png'
          imgThree='https://porfolio-gabriel-cornide.netlify.app/assets/MyPorfolioElectron-b1cbdb98.png'
          modalTitle='Imagenes del trabajo'
        />
      </div>
    </>
  );
}
