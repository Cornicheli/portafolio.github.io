import React from "react";
import "./myProyect.css";
import {
      gameCenter,
      myTineraryWeb,
      touken1,
      touken2,
      touken3,
      touken4,
      touken5,
      touken6,
      touken7,
      homedeluxe1,
      homedeluxe2,
      homedeluxe3,
      homedeluxe4,
      homedeluxe5,
      homedeluxe6,
      homedeluxe7,
      bluerabbit0,
      bluerabbit1,
      bluerabbit2,
      bluerabbit3,
      bluerabbit4,
      bluerabbit5,
      bluerabbit6,
      bluerabbitAdmin7,
      bluerabbitAdmin8,
      bluerabbitAdmin9,
      bluerabbitAdmin10,
      GameCenterNative,
      MyTineraryNative,
      techforb1,
      techforb2,
      techforb3,
      techforb4,
      techforb5,
      techforb6,
      techforb7,
      techforb12,
      toukenMobile1,
      toukenMobile2,
      toukenMobile3,
      toukenMobile4,
      toukenMobile5,
      toukenMobile6,
      toukenMobile7,
      myTinerary0,
      myTinerary1,
      myTinerary2,
      myTinerary3,
      myTinerary4,
      myTinerary5,
      gameCenter1,
      gameCenter2,
      gameCenter3,
      gameCenter4,
      gameCenter5,
      gameCenter6,
      myTineraryWeb6,
      myTineraryWeb7,
      myTineraryWeb8,
      myTineraryWeb9,
      myTineraryWeb10,
      myTineraryWeb11,
      myTineraryWeb12,
      gameCenterWeb1,
      gameCenterWeb2,
      gameCenterWeb3,
      gameCenterWeb4,
      gameCenterWeb5,
      gameCenterWeb6,
      gameCenterWeb7,
      bluerabbitAdmin11,
      bluerabbitAdmin12,
      bluerabbitAdmin13,
      myTineraryWeb13,
} from "../../assets/img/index";
import { CardWeb } from "../card/CardWeb.tsx";
import "../card/card.css";
import { CardMobile } from "../card/CardMobile.tsx";

export const MyProyect = () => {
      return (
            <div className="ctn-img-myproyect" id="proyect">
                  <div className="flex flex-col justify-center items-center">
                        <h1 className="fs-1 text-black my-4">Desktop</h1>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                              <CardWeb
                                    image={bluerabbit0}
                                    title={"Bluerabbit"}
                                    titleModal={"Bluerabbit Web"}
                                    subTitle={
                                          "Web de para usuarios que estén en búsqueda de crear o ingresar a una red social donde estén todos unidos con la posibilidad de compartir archivo, encuestas o imágenes mediando publicaciones, agendarse a eventos que se realicen."
                                    }
                                    imageOne={bluerabbit0}
                                    imageTwo={bluerabbit1}
                                    imageThree={bluerabbit2}
                                    imageFour={bluerabbit3}
                                    imageFive={bluerabbit4}
                                    imageSix={bluerabbit5}
                                    imageSeven={bluerabbit6}
                              />
                              <CardWeb
                                    image={bluerabbitAdmin10}
                                    title={"Admin"}
                                    titleModal={"Admin"}
                                    subTitle={
                                          "Web de para usuarios que estén en busca de integrar automatizaciones de varias redes sociales a una red social donde estén todos unidos y simplificando el manejo de la empresa."
                                    }
                                    imageOne={bluerabbitAdmin7}
                                    imageTwo={bluerabbitAdmin8}
                                    imageThree={bluerabbitAdmin9}
                                    imageFour={bluerabbitAdmin10}
                                    imageFive={bluerabbitAdmin11}
                                    imageSix={bluerabbitAdmin12}
                                    imageSeven={bluerabbitAdmin13}

                              />
                              <CardWeb
                                    image={homedeluxe1}
                                    title={"HomeDeluxe"}
                                    titleModal={"HomeDeluxe"}
                                    subTitle={
                                          "Web de una constructora de casas y piscinas. Se realizó con el fin de tener una presentación en internet a la hora de mostrar el trabajo con sus clientes y servicios."
                                    }
                                    imageOne={homedeluxe1}
                                    imageTwo={homedeluxe2}
                                    imageThree={homedeluxe3}
                                    imageFour={homedeluxe4}
                                    imageFive={homedeluxe5}
                                    imageSix={homedeluxe6}
                                    imageSeven={homedeluxe7}
                              />
                              <CardWeb
                                    image={touken1}
                                    title={"Touken"}
                                    titleModal={"Touken"}
                                    subTitle={
                                          "Bienvenido a la web de pre-lanzamiento de StartUp Chile. En esta plataforma, tanto usuarios como empresas pueden inscribirse para el próximo lanzamiento. Simplemente, elige tu categoría de proyecto para invertir y registrarse como usuario o empresa."
                                    }
                                    imageOne={touken1}
                                    imageTwo={touken2}
                                    imageThree={touken3}
                                    imageFour={touken4}
                                    imageFive={touken6}
                                    imageSix={touken6}
                                    imageSeven={touken7}
                              />
                              <CardWeb
                                    image={gameCenter}
                                    title={"GamerCenter"}
                                    titleModal={"GamerCenter"}
                                    subTitle={
                                          "WebSite de compra videos juegos. Junto a un SignUp para el cliente lo cual le permite destacar sus juegos favoritos para realizar la compra junto con el carrito acumulable para finalizar su compro y un LogOut."
                                    }
                                    imageOne={gameCenterWeb1}
                                    imageTwo={gameCenterWeb2}
                                    imageThree={gameCenterWeb3}
                                    imageFour={gameCenterWeb4}
                                    imageFive={gameCenterWeb5}
                                    imageSix={gameCenterWeb6}
                                    imageSeven={gameCenterWeb7}
                              />
                              <CardWeb
                                    image={myTineraryWeb}
                                    title={"Tinerary"}
                                    titleModal={"My Tinerary"}
                                    subTitle={
                                          "Web de hoteles y espectáculos con la posibilidad de registrarse, entrar y navegar en los diferentes hoteles con sus espectáculos específicos. También dispone de una sección de administrador, pudiendo eliminar, editar o añadir tanto hoteles como espectáculos."
                                    }
                                    imageOne={myTineraryWeb6}
                                    imageTwo={myTineraryWeb7}
                                    imageThree={myTineraryWeb8}
                                    imageFour={myTineraryWeb9}
                                    imageFive={myTineraryWeb13}
                                    imageSix={myTineraryWeb12}
                                    imageSeven={myTineraryWeb11}
                              />
                        </div>
                        <div className="flex flex-col justify-center items-center my-4">
                              <h1 className="fs-1 text-black my-4">Mobile</h1>
                              <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
                                    <CardMobile
                                          image={techforb12}
                                          title={"Techforb"}
                                          titleModal={"Techforb"}
                                          subTitle={
                                                "App mobile, una página de e-commerce que cuenta con varias marcas. El usuario puede registrarse e ingresar dando la posibilidad de añadir a favoritos sus productos destacados, agendarlo en el carrito de compra y también registro de su dirección para los envios."
                                          }
                                          imageOne={techforb1}
                                          imageTwo={techforb2}
                                          imageThree={techforb3}
                                          imageFour={techforb4}
                                          imageFive={techforb5}
                                          imageSix={techforb6}
                                          imageSeven={techforb7}
                                    />
                                    <CardMobile
                                          image={toukenMobile1}
                                          title={"ToukenMobile"}
                                          titleModal={"ToukenMobile"}
                                          subTitle={
                                                "App mobile, lanzamiento de StartUp Chile. En esta plataforma, tanto usuarios como empresas pueden inscribirse para el próximo lanzamiento. Simplemente, elige tu categoría de proyecto para invertir y registrase como usuario o empresa.."
                                          }
                                          imageOne={toukenMobile1}
                                          imageTwo={toukenMobile2}
                                          imageThree={toukenMobile3}
                                          imageFour={toukenMobile4}
                                          imageFive={toukenMobile5}
                                          imageSix={toukenMobile6}
                                          imageSeven={toukenMobile7}
                                    />
                                    <CardMobile
                                          image={GameCenterNative}
                                          title={"Game Center"}
                                          titleModal={"Game Center"}
                                          subTitle={
                                                "App mobile de compra videos juegos. Junto a un SignUp para el cliente lo cual le permite destacar sus juegos favoritos para realizar la compra junto con el carrito acumulable para finalizar su compro y un LogOut."
                                          }
                                          imageOne={gameCenter1}
                                          imageTwo={gameCenter2}
                                          imageThree={gameCenter3}
                                          imageFour={gameCenter4}
                                          imageFive={gameCenter5}
                                          imageSix={gameCenter6}
                                    />
                                    <CardMobile
                                          image={MyTineraryNative}
                                          title={"MyTinerary"}
                                          titleModal={"MyTinerary"}
                                          subTitle={
                                                "App mobile de hoteles y espectáculos con la posibilidad de registrarse, entrar y navegar en los diferentes hoteles con sus espectáculos específicos. También dispone de una sección de administrador, pudiendo eliminar, editar o añadir tanto hoteles como espectáculos."
                                          }
                                          imageOne={myTinerary0}
                                          imageTwo={myTinerary1}
                                          imageThree={myTinerary2}
                                          imageFour={myTinerary3}
                                          imageFive={myTinerary4}
                                          imageSix={myTinerary5}
                                    />
                              </div>
                        </div>

                  </div>
            </div>
      );
};
