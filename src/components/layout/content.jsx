import React from "react";
import image from "../assets/assisi.jpg";
import image3 from "../assets/assisi3.jpg";

function Content() {
  return (
    <div className="">
      <img src={image} alt="" className="image-con"></img>

      <div class="container">
        <div class="uno">
          <div className="church-name">
            St. Francis of Assisi Catholic Church
          </div>
          <img src={image3} alt="assisi3" className="assisi3"></img>
        </div>
        <div class="dos">Dos</div>
        <div class="tres">Tres</div>
        <div class="cuatro">Cuatro</div>
      </div>
    </div>
  );
}

export default Content;
