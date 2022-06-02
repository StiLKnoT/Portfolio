import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import logo from "../../img/snake.png"
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
    // window.addEventListener("scroll", function(){
    //     const header = this.document.querySelector(".header");
    //     header.classList.toggle("active", this.window.scrollY>0)
    // })
  return (
    <div className="home">
        <div className="home__bg">
            <div className="container header d__flex align__items__center pxy__30">
                <div className="row">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className="col-12 nav__items mx__15">Home</li></a>
                            <a href="#About"><li className="col-12 nav__items mx__15">About</li></a>
                            <a href="#Services"><li className="col-12 nav__items mx__15">Services</li></a>
                            <a href="#Portfolio"><li className="col-12 nav__items mx__15">Portfolio</li></a>
                            <a href="#Blog"><li className="col-12 nav__items mx__15">Blog</li></a>
                            <a href="#Contact"><li className="col-12 nav__items mx__15">Contact</li></a>
                        </ul>
                    </div>
                    {/* Toggle menu  */}
                    {/* <div className="toggle_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify white pointer" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div> */}
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
