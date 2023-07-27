import React from "react";
import { LogoContact } from "../../assets/img";
import "./contact.css";

export default function contact() {
  return (
    <div className="ctn-contact" id="contact">
      <div className="ctn-title-contact">
        <h1 className="title-contact">Contáctame y hablemos ✉️</h1>
      </div>
      <div className="ctn-btn-contact">
        <div className="ctn-contact-redes">
          <div className="ctn-img-contact">
            <img
              className="img-contact"
              src={LogoContact}
              alt="figure contact"
            />
          </div>
          <button className="cta">
            <span className="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://www.linkedin.com/in/gabriel-cornide-99624923b/"
                target="_blank"
                rel="noreferrer"
              >
                → LinkedIn
              </a>
            </span>
          </button>
          <button className="cta">
            <span className="hover-underline-animation">
              <a
                target="_blank"
                rel="noreferrer"
                className="ancor-aboutme"
                href="https://github.com/Cornicheli"
              >
                → Git Hub
              </a>
            </span>
          </button>
          <button className="cta">
            <span className="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noreferrer"
              >
                → Discord
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
