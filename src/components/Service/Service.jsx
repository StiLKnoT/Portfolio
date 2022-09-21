import React from "react";
import "./Service.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 },

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
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3,delay: custom * 0.1 },
  }),
};
const createBoxs = (HText, text1, text2, text3, custom, svg) => {
  return { HText, text1, text2, text3, custom, svg };
};



function Service() {
  const {t, i18n} = useTranslation()
  const arr = [
    createBoxs(
      `${t("service1.type")}`,
      `${t("service1.text1")}`,
      `${t("service1.text2")}`,
      `${t("service1.text3")}`,
      1,
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    ),
    createBoxs(
      `${t("service2.type")}`,
      `${t("service2.text1")}`,
      `${t("service2.text2")}`,
      `${t("service2.text3")}`,
      2,
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  
    ),
    createBoxs(
      `${t("service3.type")}`,
      `${t("service3.text1")}`,
      `${t("service3.text2")}`,
      `${t("service3.text3")}`,
      3,
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  
    ),
    // createBoxs(
    //   "Business Strategy",
    //   "I throw my self down among the",
    //   "tall grass by the stream as I lie",
    //   "close to the earth",
    //   4,
    //   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  
    // ),
    // createBoxs(
    //   "Business Strategy",
    //   "I throw my self down among the",
    //   "tall grass by the stream as I lie",
    //   "close to the earth",
    //   5,
    //   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  
    // ),
    // createBoxs(
    //   "Business Strategy",
    //   "I throw my self down among the",
    //   "tall grass by the stream as I lie",
    //   "close to the earth",
    //   6,
    //   <svg
    //   stroke="currentColor"
    //   fill="none"
    //   stroke-width="2"
    //   viewBox="0 0 24 24"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   height="1em"
    //   width="1em"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
    //   <line x1="2" y1="20" x2="2" y2="20"></line>
    // </svg>
    // ),
  ];

  return (
    <div className="service component__space" id="Services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="heading"
      >
        <motion.h1 custom={1} variants={textAnimation} className="heading">
        {t("service.title")}
        </motion.h1>
        <motion.p
          custom={2}
          variants={textAnimation}
          className="heading p__color"
        >
          {" "}
          {t("service.text1")}

        </motion.p>
        <motion.p
          custom={3}
          variants={textAnimation}
          className="heading p__color"
        >
        {t("service.text2")}
        </motion.p>
      </motion.div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2,  once: true  }}
          className="row"
          id="boxRow"
        >
          {arr.map((box, index) => {
            return (
              <motion.div
                custom={`${box.custom}`}
                variants={BlockAnimation}
                className="col__3"
              >
                <div className="service__box pointer">
                  <div className="icon">
                    {box.svg}
                  </div>
                  <div className="service__meta">
                    <h1 className="service__text">{box.HText}</h1>
                    <p className="service__text p__color">{box.text1}</p>
                    <p className="service__text p__color">{box.text2}</p>
                    <p className="service__text p__color">{box.text3}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* <motion.div custom={2} variants={BlockAnimation} className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">
                                Website Development
                            </h1>
                            <p className="service__text p__color">
                                I throw my self down among the
                            </p>
                            <p className="service__text p__color">
                                tall grass by the stream as I lie
                            </p>
                            <p className="service__text p__color">
                               close to the earth
                            </p>
                        </div>
                    </div>-
                </motion.div>

                <motion.div custom={3} variants={BlockAnimation} className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">
                                Marketing & Reporting
                            </h1>
                            <p className="service__text p__color">
                                I throw my self down among the
                            </p>
                            <p className="service__text p__color">
                                tall grass by the stream as I lie
                            </p>
                            <p className="service__text p__color">
                               close to the earth
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div custom={4} variants={BlockAnimation} className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">
                                Mobile App Development
                            </h1>
                            <p className="service__text p__color">
                                I throw my self down among the
                            </p>
                            <p className="service__text p__color">
                                tall grass by the stream as I lie
                            </p>
                            <p className="service__text p__color">
                               close to the earth
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={5} variants={BlockAnimation} className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">
                                Marketing & Reporting
                            </h1>
                            <p className="service__text p__color">
                                I throw my self down among the
                            </p>
                            <p className="service__text p__color">
                                tall grass by the stream as I lie
                            </p>
                            <p className="service__text p__color">
                               close to the earth
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={6} variants={BlockAnimation} className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">
                                Mobile App Development
                            </h1>
                            <p className="service__text p__color">
                                I throw my self down among the
                            </p>
                            <p className="service__text p__color">
                                tall grass by the stream as I lie
                            </p>
                            <p className="service__text p__color">
                               close to the earth
                            </p>
                        </div>
                    </div>
                </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Service;
