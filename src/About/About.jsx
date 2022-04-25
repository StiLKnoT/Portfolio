import React from 'react'
import './About.css';
import aboutImg from "../img/aboutNur.jpg"

function About() {
  return (
    <div className="about component__space">
        <div className="container">
            <div className="row">
                <div className="col__2">
                    <img src={aboutImg} className="about__img"/>
                </div>
                <div className="col__2">
                    <h1 className="about__heading">
                        About me
                    </h1>
                    <div className="about__meta">
                        <p className="about__text p__color">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere libero nesciunt voluptas laudantium ex velit cum voluptatum minus. Fuga quia animi iusto quaerat alias autem cumque, placeat error quo reprehenderit consequatur, eos, labore amet totam. Debitis fugiat quam iste quod eum rerum necessitatibus adipisci dolorum at. Nihil, qui sapiente!
                        </p>
                        <p className="about__text p__color">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere libero nesciunt voluptas laudantium ex velit cum voluptatum minus. Fuga quia animi iusto quaerat alias autem cumque, placeat error quo reprehenderit consequatur, eos, labore amet totam. Debitis fugiat quam iste quod eum rerum necessitatibus adipisci dolorum at. Nihil, qui sapiente!
                        </p>
                        <p className="about__text p__color">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere libero nesciunt voluptas laudantium ex velit cum voluptatum minus. Fuga quia animi iusto quaerat alias autem cumque, placeat error quo reprehenderit consequatur, eos, labore amet totam. Debitis fugiat quam iste quod eum rerum necessitatibus adipisci dolorum at. Nihil, qui sapiente!
                        </p>
                        <div className="about__button d__flex align__items__center">
                            <a href="#"><button className="about btn pointer">Download CV</button></a>
                            <a href="#"><button className="about btn pointer">Hire Me</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
