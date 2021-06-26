import React from "react";
import about from "../img/about.jpeg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          My name's <span>Thai Bang HOANG</span>
        </h4>
        <p className="about-text">
          After finishing my Doctorat in 2019, I have decided to continue
          following my dream to become a developer and researcher in Web
          development. You can find some pieces of information about me here!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>City</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Thai Bang HOANG</p>
            <p>: 37 years old</p>
            <p>: Vietnamese</p>
            <p>: French, English, Vietnam</p>
            <p>: 12 rue du Périgord</p>
            <p>: 59370, Mons en Baroeul</p>
            <p>: France</p>
          </div>
        </div>
        <button className="btn">
          <a
            href="https://thaibanghoang.rocks/"
            target="_blank"
            rel="noreferrer"
          >
            Download my CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
