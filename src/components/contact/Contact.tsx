import React from "react";
import "./contact.css";
import { LogoContact } from "../../assets/img";
import { Button } from "./components/Button";

export const Contact = () => {
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
          <Button title={'CV'} />
          <Button title={'LinkedIn'} url={'https://www.linkedin.com/in/gabriel-cornide-99624923b/'} />
          <Button title={'Git Hub'} url={'https://github.com/Cornicheli'} />
          <Button title={'Discord'} url={'https://discord.com/channels/@me'} />
        </div>
      </div>
    </div>
  );
}
