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
              ¿ About Me ? I am Gabriel Cornide <br />
              Hi, Welcome to my profile, who am I? FullStack MERN Developer, I
              am passionate about technology and programming languages, as well
              as the IT world. Along with the ability to develop scalable web
              and mobile projects, personal and group. I did several jobs for
              clients and I was trained in an intensive bootcamp in +800 hs of
              Full-Stack JavaScript development course. <br />
              <a className="link-aboutme" href="#contact">
                → My Contact ←
              </a>
            </p>
          </div>
        </Slide>
      </div>
    </>
  );
}
