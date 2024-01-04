import React from 'react'
import image from "../assets/assisi2.jpg";


function Footer() {
  return (
    <div>
      <div class="container2">

        <div class="un">
        <img src={image} alt="" className="image-con"></img>
        St Francis of Assisi Catholic Church is one of the churches in the sunyani catholic.
        It is a place of nourishment for all those who seek spiritual pastoral care.
        We're a church that is open to all people of walks of life.
        Our slogan is: St Francis of Assisi...

        </div>
        <div class="deux">
          <div className='useful'>Useful links</div>
          <p><a href='cdsunyani'>Catholic Diocese of Sunyani</a></p>
          <p><a href='sfaschool'>St Francis of Assisi School</a></p>
          <p><a href='registration'>Online registration form</a></p>

          <p className='contact'>Contact us</p>
          <p typeof='email'>sfacc@gmail.com</p>
          <p typeof='tel'>+233-00000000</p>
          <p typeof='tel'>+233-00000000</p>

          <p className='useful'>Social Media</p>
          <p><a href='facebook'>Facebook</a></p>
          <p><a href='whatsapp'>Whatsapp</a></p>
          <p><a href='x'>X</a></p>
          <p><a href='instagram'>Instagram</a></p>
          <p><a href='youtube'>Youtube</a></p>

        </div>
         <div class="trois">
          <p className='useful'>Locate us</p>
         </div>
         <div class="quatre">
          Copyrights reserved 2024 St Francis of Assisi Catholic Church
         </div>
      </div>
    </div>
  )
}

export default Footer