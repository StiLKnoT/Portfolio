import React,{useState} from 'react'
import './About.css';
import aboutImg from "../../img/aboutNur.jpg"
import videoPlay from "../../img/videoPlay.jpg"
import { motion } from 'framer-motion'
import Skills from '../SKills/Skills';
import { useTranslation } from "react-i18next";


const btnAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible:{
        y: 0,
        opacity: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 }

        
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
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }


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
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }

    },
}
const videoAnimation = {
    hidden: {
        x: 0,
        opacity: 1,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }

    },
}

function About() {
    const {t, i18n} = useTranslation()
    const [players, setPlayers] = useState(false);
  
  return (
    <div className="about component__space" id='about'>
        <div className="container">
            <div className="row">
                <motion.div
                   initial="hidden"
                   whileInView="visible" 
                   variants={videoAnimation}
                    className="col__2 myMainImg">
                    <img src={aboutImg} className="about__img"/>
                    <div style={{position:"relative"}}>
                    <img src={videoPlay} className="PlayBtn" onClick={()=>{setPlayers(!players)}}/>
                    </div>
                    {players ?
                     <motion.div
                     variants={videoAnimation}>
                        <div className='fixedPlayer'>{" "}
                        <div className='player'>
                            <button className='btnESC' onClick={()=>{setPlayers(!players)}}>X</button>
                            <video
                                src="http://165.232.76.226/media/gid/video/2022/08/23/VID_127280513_040752_3030.mp4"
                                allowFullScreen
                                className="VideoPlayer" 
                                controls
                              ></video>

                        </div>
                        </div>

                    </motion.div>:null }
                    {/* {video.player.state ? (
                          <div className="fixedPlayer">
                            {" "}
                            <div className="player">
                            <button
                              className="btnESC"
                              onClick={() =>video.player.set(!video.player.state)}
                            >
                              X
                            </button>

                              <video
                                src={video.link}
                                allowFullScreen
                                className="VideoPlayer" 
                                controls
                              ></video>
                            </div>
                          </div>
                        ) : null} */}
                     
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible" 
                    className="col__2">
                    <motion.h1 custom={1} variants={textAnimation} className="about__heading">
                        {t("about.aboutMe")}
                    </motion.h1>
                    <div className="about__meta">
                        <motion.h2 custom={2} variants={textAnimation} className="about__text p__color">
                            {t("about.name")}<br/>
                            {t("about.surname")}<br/>
                            {t("about.age")}<br/>
                            {t("about.education")}<br/>
                            {t("about.course")}
                        </motion.h2>
                        {/* <motion.h2 custom={3} variants={textAnimation} className="about__text p__color">
                            Age: 22<br/>
                            Occupation: Student<br/>
                            Live: Tashkent<br/>
                            Education: TUIT<br/>
                            Course: 3
                        </motion.h2> */}
                        <motion.p custom={3} variants={textAnimation} className="about__text p__color">
                        {t("about.iAm")}<br/>
                        {t("about.goals")}<br/>
                        {t("about.specialist")}<br/>
                        {t("about.creation")}<br/>
                        {t("about.demand")}<br/><br/>

                        {/* Hobby :<br/>
                        Sports games, participate in mini<br/>
                        travelling, photographing nature. */}
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible" 
                            variants={btnAnimation}
                            
                            className="about__button d__flex align__items__center">
                            <a href="#"><button className="about btn pointer" id="aboutBtn">{t("about.CV")}</button></a>
                            <a href="#"><button className="about btn pointer" id="aboutBtn">{t("about.hireME")}</button></a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
        <Skills/>
    </div>
  )
}

export default About
