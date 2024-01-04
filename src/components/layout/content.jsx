import React from "react";
import image from "../assets/assisi.jpg";
import image3 from "../assets/assisi3.jpg";
import image4 from "../assets/assisi2.jpg";


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
            <p className="bank-name">EcoBank</p>
            Account Name: St Francis of Assisi Catholic Church
            <p>Account Number: 0000000000000</p>
          </div> 
        </div>



        <div class="tres">
          <div className="contact">Contact Us</div>
          <p className="love">Love to hear from you</p>

          <label>Your name</label>
          <p>
            <input type="text"></input>
          </p>

        </div>



        <div class="cuatro">
        <img src={image4} alt="" className="assisi4"></img>
        <p className="portrait">Portrait of St Francis of Assisi</p>


        </div>
      </div>
    </div>
  );
}

export default Content;
