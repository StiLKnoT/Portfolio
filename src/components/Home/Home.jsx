import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import logo from "../../img/logo.png"
import About from '../About/About'


const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom =>({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

function Home() {
  return (
    <div className="home">
        <div className="home__bg">
            <div className="header d__flex align__items__center pxy__30">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navigation pxy__30">
                    <ul className="navbar d__flex">
                        <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                        <a href="#About"><li className="nav__items mx__15">About</li></a>
                        <a href="#Services"><li className="nav__items mx__15">Services</li></a>
                        <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
                        <a href="#Blog"><li className="nav__items mx__15">Blog</li></a>
                        <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>

                    </ul>

                </div>
            </div>
            {/* HOME CONTENT */}
            <div className="container">
                <div className="home__content">
                    <motion.div
                        initial="hidden"
                        whileInView="visible" variants={textAnimation}
                        className="home__meta">
                        <motion.h1 custom={1} variants={textAnimation} className="home__text pz__10">
                            WELCOME TO MY WORLD
                        </motion.h1>
                        <motion.h2 custom={2} variants={textAnimation} className="home__text pz__10">
                            Hi, I'm Nurlan 
                        </motion.h2>        
                        <motion.h3 custom={3} variants={textAnimation} className="home__text sweet pz__10">
                        JS Developer
                        </motion.h3>  
                        <motion.h4 custom={4} variants={textAnimation} className="home__text pz__10">
                            based in TASHKENT
                        </motion.h4>        
                    </motion.div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
