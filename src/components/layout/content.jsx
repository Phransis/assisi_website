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
          <p className="account">Parish MoMo Account</p>

          <img src={image3} alt="assisi3" className="assisi3"></img>
        </div>
        <div class="dos">
          <div className="church-name">
            St. Francis of Assisi Catholic Church
          </div>
          <p className="account">Parish Bank Account</p>

          <div>
            <p className="bank-name">Standard Chatered Bank</p>
            Account Name: St Francis of Assisi Catholic Church
            <p>Account Number: 0000000000000</p>
          </div>

          <div>
            <p className="bank-name">Standard Chatered Bank</p>
            Account Name: St Francis of Assisi Catholic Church
            <p>Account Number: 0000000000000</p>
          </div>

          
        </div>
        <div class="tres">Tres</div>
        <div class="cuatro">Cuatro</div>
      </div>
    </div>
  );
}

export default Content;
