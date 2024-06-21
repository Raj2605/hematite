import React from "react";
import "./Home.css"
import image from './Images/img1.jpg'
import imagebottom from './Images/img2.jpg'

function Home(){

  return(
    <>
    <div className="home-container">
    <div className="home-info">
    <p className="home-fn">Best Online & Offline Institute</p>
    <b className="home-fs">Master IT Skills</b><br/>
    <b className="home-fm">Transfrom Your Future in <br/>IT with Our Expertise</b>
    </div>
    <img
        src={image}
        alt="image top"
        className="home-image"
      />
    </div>
    <div className="wrapper">
    <img
        src={imagebottom}
        alt="image bottom"
        className="home-image-bottom"
      />
      <body>
    <div className="text-box">
        <b className="about-home">About</b><br/>
        <b className="name-fn">Hematite Infotech</b>
        <p className="para-info">
          Hematite Infotech Pvt. Ltd. is an organization dedicated to the
          spread of IT Education. Ever since its inception in 2017, the
          Academy has fulfilled its goals of providing Quality Computer
          Education, transforming aspiring students into tomorrow’s IT
          professionals. Hematite Infotech has continuously upgraded
          its performance, creating a focus on advanced information
          technologies, high-end academics, and training.
        </p>
        <br/>
        <p>
          With the best faculty in the industry. Besides lectures
          from experts and visiting faculty, we also organize video-
          based sessions, seminars.
        </p>
      </div>
      </body>
      </div>
    </>
  )
}

export default Home;