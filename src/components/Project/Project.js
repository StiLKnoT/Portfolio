import React, {useState} from "react";
import "./Project.css";
import { motion } from "framer-motion";
import Project__Olig from "../../img/portfolio-olig.jpg";
import Project__Sneak from "../../img/portfolio-sneak.jpg";
import Project3 from "../../img/portfolio-3.jpg";
import Project4 from "../../img/portfolio-4.jpg";
import Project5 from "../../img/portfolio-5.jpg";
import gits from "../../img/gitsUz.png";
import kozimxon from "../../img/kozimxon.png";
import taqi from "../../img/taqi.png";
import smm from "../../img/smm.png";
import bolajon from "../../img/bolajon.png";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const BlockAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};


const createProjects = (img, dev, title, link, custom) => {
  return { img, dev, title, link, custom };
};

const projectArr = [
  createProjects(
    gits,
    "Development",
    "Getting tickets to the gig show",
    "http://gits.uz/",
    1
  ),
  createProjects(
    kozimxon,
    "Development",
    "Getting tickets to the gig show",
    "https://kozimxon.uz/",
    2
  ),
  createProjects(
    taqi,
    "Development",
    "Getting tickets to the gig show",
    "https://tiace.netlify.app",
    3
  ),
  createProjects(
    smm,
    "Development",
    "Getting tickets to the gig show",
    "https://smmonline.netlify.app/",
    4
  ),
  createProjects(
    bolajon,
    "Development",
    "Getting tickets to the gig show",
    "https://kindergard.netlify.app/",
    5
  ),
  createProjects(
    Project__Sneak,
    "Development",
    "Getting tickets to the gig show",
    "https://reactjs-sneakers.netlify.app",
    6
  ),
];

const createOthers = (img, dev, title, link, custom) => {
  return { img, dev, title, link, custom };
};

const arrOther = [
    createOthers(
    gits,
    "Development",
    "Getting tickets to the gig show",
    "http://gits.uz/",
    1
  ),
    createOthers(
    Project__Olig,
    "Development",
    "Getting tickets to the gig show",
    "https://onlineshop075-20.netlify.app",
    2
  ),
//     createOthers(
//     gits,
//     "Development",
//     "Getting tickets to the gig show",
//     "http://gits.uz/",
//     3
//   ),
];

function Project() {
    const [others, setOthers] = useState(false)
    const [click, setClick] = useState(false)
    function btnClick(){
        setOthers(!others)
        setClick(!click)
    }

  return (
    
    <div className="project component__space" id="Portfolio">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        className="heading"
      >
        <motion.h1 custom={1} variants={textAnimation} className="heading2">
          My Latest Project
        </motion.h1>
        <motion.p
          custom={2}
          variants={textAnimation}
          className="heading2 p__color"
        >
          {" "}
          There are many variations of passages of Lorem Ipsum availables
        </motion.p>
        <motion.p
          custom={3}
          variants={textAnimation}
          className="heading2 p__color"
        >
          but the majority have suffered alteration.
        </motion.p>
      </motion.div>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="row"
        >
          {projectArr.map((project, index) => {
            return (
              <motion.div
                custom={`${project.custom}`}
                variants={BlockAnimation}
                className="col__3"
              >
                <div className="project__box pointer">
                  <div className="project__box__img pointer relative">
                    <div className="project__box__img pointer relative">
                      <div className="project__img__box">
                        <img
                          src={project.img}
                          alt="portfolio1"
                          className="project__img"
                        />
                      </div>
                      <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                      <h5 className="project__text">{project.dev}</h5>
                      <h4 className="project__text">{project.title}</h4>
                      <a
                        target="_blank"
                        href={project.link}
                        className="project__btn"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* <motion.div custom={2} variants={BlockAnimation} className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project__Sneak} alt="portfolio2" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the gig show</h4>
                                <a href="https://reactjs-sneakers.netlify.app" className="project__btn">View Details</a>
                            </div>
                        </div>   
                    </div>
                </motion.div>

                <motion.div custom={3} variants={BlockAnimation} className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="portfolio3" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the gig show</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>   
                    </div>
                </motion.div>

                <motion.div custom={4} variants={BlockAnimation} className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="portfolio4" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the gig show</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>   
                    </div>
                </motion.div>

                <motion.div custom={5} variants={BlockAnimation} className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="portfolio3" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the gig show</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>   
                    </div>
                </motion.div>

                <motion.div custom={6} variants={BlockAnimation} className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project__Sneak} alt="portfolio2" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the gig show</h4>
                                <a href="https://reactjs-sneakers.netlify.app/" className="project__btn">View Details</a>
                            </div>
                        </div>   
                    </div>
                </motion.div>
                
 */}
 
    
    {others ? 
   <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.2 }}
  className="row"> {arrOther.map((project, index) => {
    return (
      <motion.div
        custom={`${project.custom}`}
        variants={BlockAnimation}
        className="col__3"
      >
        <div className="project__box pointer">
          <div className="project__box__img pointer relative">
            <div className="project__box__img pointer relative">
              <div className="project__img__box">
                <img
                  src={project.img}
                  alt="portfolio1"
                  className="project__img"
                />
              </div>
              <div className="mask__effect"></div>
            </div>
            <div className="project__meta absolute">
              <h5 className="project__text">{project.dev}</h5>
              <h4 className="project__text">{project.title}</h4>
              <a
                target="_blank"
                href={project.link}
                className="project__btn"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  })}</motion.div> : null}
        </motion.div>
        <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
          <button className="view__more pointer btn" onClick={()=>btnClick()}>{click ? <>Close</>:<>View more</>}</button>
        </div>
       
      </div>
    </div>
  );
}

export default Project;
