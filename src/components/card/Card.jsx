import PropTypes from 'prop-types';
import React from "react";
import "./card.css";
import {
  GameCenter,
  MyTinerary,
  GameCenterNative,
  MyTineraryNative,
  MyPorfolioElectron,
  Touken1,
  ToukenMobile,
} from "../../assets/img/index";

export default function Card({ title, text, imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, modalTitle, imgCard }) {
  return (
    <>

      <div className="container">
        <div className="ctn-main-card">
          <div className="main-card-website">
            <h1 className="title-card">Desktop WebSite</h1>
            <div className="ctn-card-web">
              <div>
                {/* props */}
                <div className="item-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img style={{ borderRadius: '1rem' }} alt="Card Image" src={imgCard} />
                  <div className="txt">
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-4 text-dark text-center" id="exampleModalLabel">{modalTitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" className="bg-dark" aria-label="Slide 4" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" className="bg-dark" aria-label="Slide 5" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="5" className="bg-dark" aria-label="Slide 6" />
                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="6" className="bg-dark" aria-label="Slide 7" />
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgOne} className="d-block w-100 c-img" alt="Slide 1" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgTwo} className="d-block w-100 c-img" alt="Slide 2" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgThree} className="d-block w-100 c-img" alt="Slide 3" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgFour} className="d-block w-100 c-img" alt="Slide 4" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgFive} className="d-block w-100 c-img" alt="Slide 5" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgSix} className="d-block w-100 c-img" alt="Slide 6" />
                            </div>
                            <div className="carousel-item c-item">
                              <img style={{ width: '100%', height: '100%' }} src={imgSeven} className="d-block w-100 c-img" alt="Slide 7" />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* props */}
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
                      <img className="img-card" src={Touken1} alt="proyect" />
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
            </div>
          </div>

          <hr />

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

            <div className="main-card-electron">
              {/* <------------- Electron -------------> */}
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
                        electron.js application showing my portfolio with
                        projects done by me, some individual, others in group
                        and for a client. The purpose of this is to show my
                        full stack mern skills more than just a CV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <------------- Electron -------------> */}
        </div >
      </div >
    </>
  );
}

Card.propTypes = {
  imgCard: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  imgOne: PropTypes.string,
  imgTwo: PropTypes.string,
  imgThree: PropTypes.string,
  imgFour: PropTypes.string,
  imgFive: PropTypes.string,
  imgSix: PropTypes.string,
  imgSeven: PropTypes.string,
  modalTitle: PropTypes.string
};
