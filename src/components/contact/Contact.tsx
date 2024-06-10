import React, { useEffect, useState } from "react";
import "./contact.css";
import { LogoContact } from "../../assets/img";
import { Button } from "./components/Button";
import { storage } from '../../../firebase'
import { getDownloadURL, ref } from "firebase/storage";


export const Contact = () => {

  const [pdfUrl, setPdfUrl] = useState("");
  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const pdfRef = ref(storage, 'gs://myporfolio-446cf.appspot.com/CornideGabriel.pdf')
        const url = await getDownloadURL(pdfRef)
        setPdfUrl(url)
        console.log('url', url)
        console.log('setPdfUrl', setPdfUrl)
      } catch (error) {
        console.error("Error al obtener el archivo PDF:", error);
      }
    }
    fetchPdfUrl();
  }, [])

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
          {pdfUrl && (
            <Button
              url={pdfUrl}
              title={'Mi CV'}
              download="CornideGabriel.pdf"
            />
          )}
          <Button title={'LinkedIn'} url={'https://www.linkedin.com/in/gabriel-cornide-99624923b/'} />
          <Button title={'Git Hub'} url={'https://github.com/Cornicheli'} />
          <Button title={'Discord'} url={'https://discord.com/channels/@me'} />
        </div>
      </div>
    </div>
  );
}
