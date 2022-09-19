import React from 'react'
import './Contact.css'
import Astr from '../../img/Astr.jpg'


function Contact() {
  return (
    <div className="contact component__space" id='Contact'>
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">I am availabe for freelance work. Connect with me via phone:</p>
              <p className="hire__text white"><strong>+998 90 012 35 43</strong> or email <strong>stilknot@gmail.com</strong></p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder="Your name *" />
              <input type="text" className="contact email" placeholder="Your Email *" />
              <input type="text" className="contact subject" placeholder="Write a Subject " />
              <textarea name="message" id="message" placeholder="Write Your message"></textarea>
              <button className="btn contact pointer" type="submit">Submit</button>
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
