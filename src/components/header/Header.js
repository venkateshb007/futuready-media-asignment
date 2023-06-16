import React from "react";

import Img1 from "../../img/LeftLogoTree.png";
import Img2 from "../../img/BigShortsLogo.png";
import Img21 from "../../img/MalayalamEdition.png";
import Img3 from "../../img/RightLogoTree.png";
import Shadow from "../../img/shadow.png";


import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-items-center col-left">
            <img className="img-left" src={Img1} alt="error" />
          </div>

          <div className="col-md-6 col-middle  text-center">
            <div className="d-flex justify-content-center">
              <img className="img-fluid mb-3 img-top bigger-width" src={Img2} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-fluid mb-3 img-bottom smaller-width" src={Img21} alt="" />
            </div>
            <h1 className="ignite-you">Ignite Your Filmmaking Dreams!</h1>
            <p className="para-1">Do you have a knack for creating beautiful cinematic experiences?</p>
            <p className="para-2">Promote your film and contest on your Social Media platforms from 25th July to 31st Aug</p>
            <h3>
              Grab the chance to win an amazing
            </h3>
              <p className="span-text">cash prize worth Rs 1,00,000/-</p>
          </div>

          <div className="col-md-3 d-flex justify-content-center align-items-center col-right">
            <img className="img-right" src={Img3} alt="error" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;