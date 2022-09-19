import React from "react";
import "./News.css";
import gits from "../../img/gitsUz.png";
import Astr from '../../img/Astr.jpg'
import Astr2 from '../../img/Astr2.jpg'
import { motion } from "framer-motion";

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

function Blesk() {
  return (
    <div style={{background:"black"}} className=" component__space" id="Blog">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="heading"
        >
            <motion.h1 custom={1} variants={textAnimation} className="heading">
              My Blog
            </motion.h1>
        </motion.div>
      <div className="wrapperCard">
        {/* <h2>
          <strong>
            All Games<span>( 4 )</span>
          </strong>
        </h2> */}

        <div className="cards">
          <figure className="card">
            <img src="https://i.pinimg.com/originals/65/b7/43/65b743cb3fcf0e32690826bfefc6a63c.jpg" />

            <figcaption><span className="active__text">Gits.uz</span></figcaption>
          </figure>

          <figure className="card">
            <img src={Astr} />

            <figcaption><span className="active__text">Stick Fight</span></figcaption>
          </figure>

          <figure className="card">
            <img src={Astr2} />

            <figcaption><span className="active__text">Minion Masters</span></figcaption>
          </figure>

          <figure className="card">
            <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

            <figcaption><span className="active__text">KoseBoz!</span></figcaption>
          </figure>
        </div>       
      </div>
    </div>
  );
}

export default Blesk;
