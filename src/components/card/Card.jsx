import React from "react";
import "./card.css";
import {
  GameCenter,
  MyTinerary,
  GameCenterNative,
  MyTineraryNative,
  MyPorfolioElectron,
} from "../../assets/img/index";

export default function Card() {
  return (
    <>
      <div className="container">
        <div className="main-card-website">
          <h1 className="title-card">Desktop WebSite</h1>
          <div className="ctn-card-web">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="img-card" src={GameCenter} alt="proyect" />
                </div>
                <div className="flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/uJ-Su6GDFis"
                  >
                    → Game Center
                  </a>
                  <p className="text-details-card">
                    WebSite de compra videos juegos. Junto a un SignUp para el
                    cliente lo cual le permite destacar sus juegos favoritos
                    para realizar la compra junto con el carrito acumulable para
                    finalizar su compro y un LogOut.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="img-card" src={MyTinerary} alt="proyect" />
                </div>
                <div className="flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/RnZTvk1Lq9g"
                  >
                    → My Tinerary
                  </a>
                  <p className="text-details-card">
                    Website of hotels and shows with the possibility to
                    register, enter and navigate in the different hotels with
                    their specific shows. It also has an administrator section,
                    being able to delete, edit or add hotels as well as shows.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="img-card"
                    src={MyPorfolioElectron}
                    alt="proyect"
                  />
                </div>
                <div className="flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/RnZTvk1Lq9g"
                  >
                    → My Porfolio
                  </a>
                  <p className="text-details-card">
                    My portfolio with projects done by me, some individual,
                    others in group and for a client. The purpose of this is to
                    show my full stack mern skills more than just a CV and to
                    attract the attention of other recruiters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <------------- Native -------------> */}
        <div className="main-card-native">
          <h1 className="title-card">Mobile Native</h1>
          <div className="ctn-card-native">
            <div class="native-flip-card">
              <div class="native-flip-card-inner">
                <div class="native-flip-card-front">
                  <img
                    className="native-img-card"
                    src={GameCenterNative}
                    alt="proyect"
                  />
                </div>
                <div class="native-flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/nnEdLvlspW0"
                  >
                    → Game Center Native
                  </a>
                  <p class="native-text-details-card">
                    Website for buying video games with the possibility of
                    registering, logging in and browsing the different games
                    with details and a video of each one. It also has a section
                    of favorites and search by name or price. Finalizing the
                    purchase in the cart and being able to close your session.
                  </p>
                </div>
              </div>
            </div>

            <div class="native-flip-card">
              <div class="native-flip-card-inner">
                <div class="native-flip-card-front">
                  <img
                    className="native-img-card"
                    src={MyTineraryNative}
                    alt="proyect"
                  />
                </div>
                <div class="native-flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/y43jhsvLLv4"
                  >
                    → My Tinerary Native
                  </a>
                  <p class="native-text-details-card">
                    Website of hotels and shows with the possibility to
                    register, enter and navigate in the different hotels with
                    their specific shows. It also has an administrator section,
                    being able to delete, edit or add hotels as well as shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <------------- Native -------------> */}
        </div>

        {/* <------------- Electron -------------> */}
        <div className="main-card-electron">
          <h1 className="title-card">Application Electron</h1>
          <div className="ctn-card-web">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="img-card"
                    src={MyPorfolioElectron}
                    alt="proyect"
                  />
                </div>
                <div className="flip-card-back">
                  <a
                    className="ancor-youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/DLcXHoEyVPo"
                  >
                    → Game Center
                  </a>
                  <p className="text-details-card">
                    electron.js application showing my portfolio with projects
                    done by me, some individual, others in group and for a
                    client. The purpose of this is to show my full stack mern
                    skills more than just a CV.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <------------- Electron -------------> */}
        </div>
      </div>
    </>
  );
}
