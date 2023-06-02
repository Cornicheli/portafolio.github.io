import React from "react";
import "./skills.css";
import {
  LogoFront,
  Html,
  Css,
  Javascript,
  Bootstrap,
  ReactNative,
  Redux,
  Electron,
  MongoDB,
  Express,
  NodeJS,
  Firebase,
  GitHub,
  Postman,
  styledComponents,
  LogoBack,
  Tools,
  Npm,
  Yarn,
} from "../../assets/icon";

export default function Skills() {
  return (
    <>
      <div className="cnt-skills" id="skill">
        <div className="ctn-title-skill">
          <h1 className="title-skill">My skills as a fullstack developer</h1>
        </div>
        <div className="ctn-skill-icon">
          <div className="ctn-img-skill">
            <img className="icon-skill" src={LogoFront} alt="logo front" />
          </div>
          <h3 className="title-skill-logo">Front End</h3>
          <div className="ctn-skill-card">
            <ul className="wrapper">
              <li className="icon html">
                <span className="tooltip">HTML</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img className="icon-skill-card" alt="html" src={Html} />
                  </i>
                </span>
              </li>

              <li className="icon css">
                <span className="tooltip">CSS</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img className="icon-skill-card" src={Css} alt="Css" />
                  </i>
                </span>
              </li>

              <li className="icon javascript">
                <span className="tooltip">JavaScript</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Javascript}
                      alt="Javascript"
                    />
                  </i>
                </span>
              </li>

              <li className="icon bootstrap">
                <span className="tooltip">Bootstrap</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Bootstrap}
                      alt="Bootstrap"
                    />
                  </i>
                </span>
              </li>

              <li className="icon react">
                <span className="tooltip">
                  React <br /> React Native
                </span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={ReactNative}
                      alt="ReactNative"
                    />
                  </i>
                </span>
              </li>

              <li className="icon redux">
                <span className="tooltip">Redux Toolkit</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img className="icon-skill-card" src={Redux} alt="Redux" />
                  </i>
                </span>
              </li>

              <li className="icon electron">
                <span className="tooltip">Electron Js</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Electron}
                      alt="Electron"
                    />
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ctn-skill-icon">
          <div className="ctn-img-skill">
            <img className="icon-skill" src={LogoBack} alt="Logo Back-End" />
          </div>
          <h3 className="title-skill-logo">Back End</h3>
          <div className="ctn-skill-card">
            <ul className="wrapper">
              <li className="icon mongodb">
                <span className="tooltip">Mongo DB</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={MongoDB}
                      alt="MongoDB"
                    />
                  </i>
                </span>
              </li>

              <li className="icon express">
                <span className="tooltip">Express</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Express}
                      alt="Express"
                    />
                  </i>
                </span>
              </li>

              <li className="icon nodejs">
                <span className="tooltip">Node JS</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={NodeJS}
                      alt="NodeJS"
                    />
                  </i>
                </span>
              </li>

              <li className="icon firebase">
                <span className="tooltip">FireBase</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Firebase}
                      alt="Firebase"
                    />
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ctn-skill-icon">
          <div className="ctn-img-skill">
            <img className="icon-skill" src={Tools} alt="Tools" />
          </div>
          <h3 className="title-skill-logo">Tools</h3>
          <div className="ctn-skill-card">
            <ul className="wrapper">
              <li className="icon gitHub">
                <span className="tooltip">Git Hub</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={GitHub}
                      alt="GitHub"
                    />
                  </i>
                </span>
              </li>

              <li className="icon npm">
                <span className="tooltip">Npm</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img className="icon-skill-card" src={Npm} alt="Npm" />
                  </i>
                </span>
              </li>

              <li className="icon yarn">
                <span className="tooltip">Yarn</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img className="icon-skill-card" src={Yarn} alt="Yarn" />
                  </i>
                </span>
              </li>

              <li className="icon postman">
                <span className="tooltip">Postman</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={Postman}
                      alt="Postman"
                    />
                  </i>
                </span>
              </li>

              <li className="icon styled">
                <span className="tooltip">Styled Components</span>
                <span>
                  <i className="ctn-icon-skill-card">
                    <img
                      className="icon-skill-card"
                      src={styledComponents}
                      alt="Styled Components"
                    />
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
