import React from 'react'
import './About.css';
import aboutImg from "../../img/aboutNur.jpg"
import { motion } from 'framer-motion'

const btnAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible:{
        y: 0,
        opacity: 1,
    },
}

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom =>({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}
const imgAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.1},
    },
}

function About() {
  return (
    <div className="about component__space">
        <div className="container">
            <div className="row">
                <motion.div
                   initial="hidden"
                   whileInView="visible" 
                   variants={imgAnimation}
                    className="col__2">
                    <img src={aboutImg} className="about__img"/>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible" 
                    className="col__2">
                    <motion.h1 custom={1} variants={textAnimation} className="about__heading">
                        About me
                    </motion.h1>
                    <div className="about__meta">
                        <motion.h2 custom={2} variants={textAnimation} className="about__text p__color">
                            Name: Nurlan<br/>
                            Surname: Qarshiyev<br/>
                        </motion.h2>
                        <motion.h2 custom={3} variants={textAnimation} className="about__text p__color">
                            Age: 22<br/>
                            Occupation: Student<br/>
                            Live: Tashkent<br/>
                            Education: TUIT<br/>
                            Course: 2
                        </motion.h2>
                        <motion.p custom={4} variants={textAnimation} className="about__text p__color">
                        My name is Nurlan.<br/>
                        I'm beginner frontend
                        developer, currently<br/>
                        learning React JS, there are several
                        goals:<br/>
                        - become a pro at my
                        specializations<br/>
                        - creation of high-quality projects
                        and launch them online<br/>
                        - be in demand
                        specialist<br/><br/>

                        Hobby :<br/>
                        Sports games, participate in mini<br/>
                        travelling, photographing nature.
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible" 
                            variants={btnAnimation}
                            
                            className="about__button d__flex align__items__center">
                            <a href="#"><button className="about btn pointer">Download CV</button></a>
                            <a href="#"><button className="about btn pointer">Hire Me</button></a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
