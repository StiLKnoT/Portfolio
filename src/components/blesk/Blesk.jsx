import React from "react";
import "./Blesk.css";
import gits from "../../img/gitsUz.png";
import Astr from '../../img/Astr.jpg'
import Astr2 from '../../img/Astr2.jpg'


function Blesk() {
  return (
    <div>
      <div className="wrapperCard">
        {/* <h2>
          <strong>
            All Games<span>( 4 )</span>
          </strong>
        </h2> */}

        <div className="cards">
          <figure className="card">
            <img src="https://i.pinimg.com/originals/65/b7/43/65b743cb3fcf0e32690826bfefc6a63c.jpg" />

            <figcaption>Gits.uz</figcaption>
          </figure>

          <figure className="card">
            <img src={Astr} />

            <figcaption>Stick Fight</figcaption>
          </figure>

          <figure className="card">
            <img src={Astr2} />

            <figcaption>Minion Masters</figcaption>
          </figure>

          <figure className="card">
            <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

            <figcaption>KoseBoz!</figcaption>
          </figure>
        </div>       
      </div>
    </div>
  );
}

export default Blesk;
