import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import logo from "../../img/snake.png";
import About from "../About/About";
import { useRef } from "react";
import { useEffect } from "react";
import { TweenMax, Power3, Power2, Power4, Elastic, SlowMo, Sine, Expo} from "gsap";
import gsap from 'gsap'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { useTranslation } from "react-i18next";


// gsap.registerPlugin(TextPlugin, RoughEase);

// const textAnimation = {
//   hidden: {
//     x: -100,
//     opacity: 0,
//   },
//   visible: (custom) => ({
//     x: 0,
//     opacity: 1,
//     transition: { delay: custom * 0.2 },
//   }),
// };

function Home() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (e)=>{
    i18n.changeLanguage(e.target.value);
  }

  useEffect(()=>{
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language){
        element.setAttribute("selected", "true")
      }
    }
  })
  
    const words = ["Nurlan", "A Frontend Developer", "Good Man"]
  let mainText = useRef(null);
  let mainText2 = useRef(null);
  let mainText3 = useRef(null);
  let mainText4 = useRef(null);
  let cursor = useRef(null)
  let textTL = useRef(null)

  useEffect(() => {
    TweenMax.to(mainText, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut});
    TweenMax.to(mainText2, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut});
    TweenMax.to(mainText3, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut });
    TweenMax.to(mainText4, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut });
    gsap.to(cursor, 2, {opacity: 0, color: "red", ease: Power2.inOut, repeat: -1});


  
  }, []);

 

  return (
    <div className="home">
      <div className="home__bg">
        <div className="container header d__flex align__items__center pxy__30">
          <div className="row">
            <div className="logo"></div>
            <div className="navigation pxy__30">
              <ul className="navbar d__flex">
                <a href="#Home">
                  <li className="col-12 nav__items mx__15">{t("navbar.Home")}</li>
                </a>
                <a href="#about">
                  <li className="col-12 nav__items mx__15">{t("navbar.About")}</li>
                </a>
                <a href="#Services">
                  <li className="col-12 nav__items mx__15">{t("navbar.Services")}</li>
                </a>
                <a href="#Portfolio">
                  <li className="col-12 nav__items mx__15">{t("navbar.Portfolio")}</li>
                </a>
                <a href="#Blog">
                  <li className="col-12 nav__items mx__15">{t("navbar.Blog")}</li>
                </a>
                <a href="#Contact">
                  <li className="col-12 nav__items mx__15">{t("navbar.Contact")}</li>
                </a>
                <li>
                    <select className="uz" aria-label="Default select example" onChange={changeLanguage} defaultValue="uz" >
                      <option className="uz lang" value="uz" selected="true">UZ</option>
                      <option className="uz lang" value="ru">RU</option>
                      <option className="uz lang" value="en">EN</option>
                    </select>                  
              </li>
              </ul>
            
            </div>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 ref={el=>{mainText=el}} className="home__text pz__10">{t("title.welcome")}</h1>
              <h2 ref={el=>{mainText2=el}} className="home__text pz__10">
                {t("title.salom")} <span className="cursorSpan" id="neon" style={{display: "inline-block"}}ref={el=>{textTL=el}}>{t("title.Nurlan")}</span><span className="cursorSpan" ref={el=>{cursor=el}}>_</span>
              </h2>
              <h3 ref={el=>{mainText3=el}} className="home__text sweet pz__10">JS {t("title.developer")}</h3>
              <h4 ref={el=>{mainText4=el}} className="home__text pz__10">{t("title.based")}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
