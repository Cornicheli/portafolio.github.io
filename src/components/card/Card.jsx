import React from "react";
import "./card.css";
import {
  GameCenter,
  MyTinerary,
  GameCenterNative,
  MyTineraryNative,
  MyPorfolioElectron,
  Touken,
  ToukenMobile,
} from "../../assets/img/index";
import Slide from "react-reveal/Slide";

export default function Card() {
  return (
    <>
      <div className="container">
        <div className="ctn-main-card">
          <div className="main-card-website">
            <h1 className="title-card">Desktop WebSite</h1>
            <div className="ctn-card-web">
              <Slide left cascade>
                <div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          className="img-card"
                          src={GameCenter}
                          alt="proyect"
                        />
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
                          WebSite de compra videos juegos. Junto a un SignUp
                          para el cliente lo cual le permite destacar sus juegos
                          favoritos para realizar la compra junto con el carrito
                          acumulable para finalizar su compro y un LogOut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          className="img-card"
                          src={MyTinerary}
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
                          → My Tinerary
                        </a>
                        <p className="text-details-card">
                          Website of hotels and shows with the possibility to
                          register, enter and navigate in the different hotels
                          with their specific shows. It also has an
                          administrator section, being able to delete, edit or
                          add hotels as well as shows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
                          My portfolio with projects done by me, some
                          individual, others in group and for a client. The
                          purpose of this is to show my full stack mern skills
                          more than just a CV and to attract the attention of
                          other recruiters.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="img-card" src={Touken} alt="proyect" />
                      </div>
                      <div className="flip-card-back">
                        <a
                          className="ancor-youtube"
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                        >
                          → Touken
                        </a>
                        <p className="text-details-card">
                          Pre-launch web for startUp chile presentation for
                          users and companies to register for our mobile app
                          launch. It has a section to subscribe as a user or
                          company choosing the category of project you want to
                          invest with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <hr />

          {/* <------------- Native -------------> */}
          <div className="main-card-native">
            <h1 className="title-card">Mobile Native</h1>
            <Slide top cascade>
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
                        with details and a video of each one. It also has a
                        section of favorites and search by name or price.
                        Finalizing the purchase in the cart and being able to
                        close your session.
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
                        register, enter and navigate in the different hotels
                        with their specific shows. It also has an administrator
                        section, being able to delete, edit or add hotels as
                        well as shows.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <------------- Native -------------> */}

                <div class="native-flip-card">
                  <div class="native-flip-card-inner">
                    <div class="native-flip-card-front">
                      <img
                        className="native-img-card"
                        src={ToukenMobile}
                        alt="proyect"
                      />
                    </div>
                    <div class="native-flip-card-back">
                      <a
                        className="ancor-youtube"
                        target="_blank"
                        rel="noreferrer"
                        href="#"
                      >
                        → Touken Mobile
                      </a>
                      <p class="native-text-details-card">
                        Mobile app for presentation of stratUp chile for users
                        and companies to sign up for the launch of our mobile
                        app. It has a section to subscribe as a user or company
                        choosing the category of project you want to invest with
                        us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>

            <div className="main-card-electron">
              {/* <------------- Electron -------------> */}
              <h1 className="title-card">Application Electron</h1>
              <Slide bottom>
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
                          electron.js application showing my portfolio with
                          projects done by me, some individual, others in group
                          and for a client. The purpose of this is to show my
                          full stack mern skills more than just a CV.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          {/* <------------- Electron -------------> */}
        </div>
      </div>
    </>
  );
}
