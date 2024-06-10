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
  MongoDB,
  Next,
  NodeJS,
  Firebase,
  GitHub,
  Postman,
  styledComponents,
  LogoBack,
  Tools,
  npm,
  Yarn,
  Tailwind,
  Jira,
  Slack,
} from "../../assets/icon";
import { Card } from "./components/Card";

export default function Skills() {
  return (
    <>
      <div className="cnt-skills" id="skill">
        <div className="ctn-title-skill">
          <h1 className="title-skill">Tecnologías usadas

          </h1>
        </div>
        <div className="ctn-skill-icon">
          <div className="ctn-img-skill">
            <img className="icon-skill" src={LogoFront} alt="logo front" />
          </div>
          <h3 className="title-skill-logo">Front End</h3>
          <div className="ctn-skill-card">
            <ul className="wrapper">
              <li className="icon html">
                <Card
                  title={'HTML'}
                  alt={'html'}
                  image={Html}
                />
              </li>
              <li className="icon css">
                <Card
                  title={'CSS'}
                  alt={'css'}
                  image={Css}
                />
              </li>
              <li className="icon javascript">
                <Card
                  title={'JavaScript'}
                  alt={'javascript'}
                  image={Javascript}
                />
              </li>
              <li className="icon bootstrap">
                <Card
                  title={'Bootstrap'}
                  alt={'bootstrap'}
                  image={Bootstrap}
                />
              </li>
              <li className="icon tailwind">
                <Card
                  title={'Tailwind'}
                  alt={'tailwind'}
                  image={Tailwind}
                />
              </li>
              <li className="icon react">
                <Card
                  title={'React React Native'}
                  alt={'ReactNative'}
                  image={ReactNative}
                />
              </li>
              <li className="icon redux">
                <Card
                  title={'Redux Toolkit'}
                  alt={'Redux'}
                  image={Redux}
                />
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
              <li className="icon firebase">
                <Card
                  title={'FireBase'}
                  alt={'Firebase'}
                  image={Firebase}
                />
              </li>
              <li className="icon express">
                <Card
                  title={'Next JS'}
                  alt={'next.js'}
                  image={Next}
                />
              </li>
              <li className="icon nodejs">
                <Card
                  title={'Node JS'}
                  alt={'NodeJS'}
                  image={NodeJS}
                />
              </li>
              <li className="icon mongodb">
                <Card
                  title={'Mongo DB'}
                  alt={'MongoDB'}
                  image={MongoDB}
                />
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
                <Card
                  title={'GitHub'}
                  alt={'gitHub'}
                  image={GitHub}
                />
              </li>

              <li className="icon npm">
                <Card
                  title={'Npm'}
                  alt={'npm'}
                  image={npm}
                />
              </li>

              <li className="icon yarn">
                <Card
                  title={'Yarn'}
                  alt={'yarn'}
                  image={Yarn}
                />
              </li>
              <li className="icon jira">
                <Card
                  title={'Jira'}
                  alt={'jira'}
                  image={Jira}
                />
              </li>
              <li className="icon slack">
                <Card
                  title={'Slack'}
                  alt={'Slack'}
                  image={Slack}
                />
              </li>
              <li className="icon postman">
                <Card
                  title={'Postman'}
                  alt={'postman'}
                  image={Postman}
                />
              </li>
              <li className="icon styled">
                <Card
                  title={'Styled Components'}
                  alt={'styledComponents'}
                  image={styledComponents}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
