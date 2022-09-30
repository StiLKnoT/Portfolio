import React from 'react'
import './Contact.css'
import Astr from '../../img/Astr.jpg'
import { useTranslation } from "react-i18next";
import CanvasMars from '../3DModels/CanvasMars';


function Contact() {
  const {t, i18n} = useTranslation()

  return (
    <div className="contact" id='Contact'>
            <CanvasMars/>

      <div className="row component__space" >
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">{t("contact.hireMe")}.</h1>
              <p className="hire__text white">{t("contact.aboutMe")} {t("contact.connect")}</p>
              <p className="hire__text white"><strong>+998 90 012 35 43</strong> {t("contact.or")} <strong>stilknot@gmail.com</strong></p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder= {t("contact.name")+" *"} />
              <input type="text" className="contact email" placeholder={t("contact.email")+" *"} />
              <input type="text" className="contact subject" placeholder={t("contact.subject")} />
              <textarea name="message" id="message" placeholder={t("contact.message")}></textarea>
              <button className="btn contact pointer" type="submit">{t("contact.submit")}</button>
            </div>
          </div>
        </div>
        <div className="col__2" id='col__2__contact__img'>
          <img src={Astr} alt="" className="contact__img"/>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
