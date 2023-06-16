import React from "react";
import "./modus.css";
import ReelTree from "../../img/ReelLeftTree.png";
import Cal from "../../img/CalendarIcon.png";
import Clock from "../../img/ClockIcon.png";
import Language from "../../img/LanguageIcon.png";
import Subtitle from "../../img/SubtitleIcon.png";
import Genre from "../../img/DramaMaskIcon.png";
import RightTree from "../../img/RightTree.png";
import Temple from "../../img/TempleIcon.png";
import Boat from "../../img/BoatIcon.png";
import Ticket from "../../img/TicketIcon.png";
import Rupee from "../../img/RupeeIcon.png";
import CameraIcon from "../../img/CameraIcon.png";
import Dance from "../../img/DancerIcon.png";

const Modus = () => {
  return (
    <>
      <div className="container text-white modus-container">
        <div className="modus-header">
          <img src={ReelTree} alt="left-tree" />
          <h3 className="text-centre">
            The modus operandi is very simple <br /> for any filmmaker to follow
          </h3>
        </div>
        <div className="reel-container1">
          <img className="reel-image" src={Temple} alt="right-tree" />
          <div className="modus-card">
            <img src={Cal} alt="calender" />
            <div className="card-content">
              <span>Short Film Submission Period:</span>
              <small>
                15th June 2022 to <br /> 20th July 2023
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={Clock} alt="clock" />
            <div className="card-content">
              <span>Allowed Film Duration:</span>
              <small>
                5 minutes to <br /> 25 minutes
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={Language} alt="language" />
            <div className="card-content">
              <span>Language of the film:</span>
              <small>Malayalam</small>
            </div>
          </div>
          <div className="modus-card">
            <img src={Subtitle} alt="subtitle" />
            <div className="card-content">
              <span>Sub-Title:</span>
              <small>
                English <br /> (Cumpulsory)
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={Genre} alt="mask" />
            <div className="card-content">
              <span>Genre:</span>
              <small>Any</small>
            </div>
          </div>
          <img className="reel-image" src={RightTree} alt="right-tree" />
        </div>
        <div className="reel-container1">
          <img className="boat-image" src={Boat} alt="boat-icon" />
          <div className="modus-card">
            <img src={Ticket} alt="ticket-icon" />
            <div className="card-content">
              <span>Short Film Submission Period:</span>
              <small>
                15th June 2022 to <br /> 20th July 2023
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={Rupee} alt="rupee-icon" />
            <div className="card-content">
              <span>Allowed Film Duration:</span>
              <small>
                5 minutes to <br /> 25 minutes
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={CameraIcon} alt="camera-icon" />
            <div className="card-content">
              <span>Language of the film:</span>
              <small>Malayalam</small>
            </div>
          </div>
          
          <img className="dance-image" src={Dance} alt="dance-icon" />
        </div>
      </div>
    </>
  );
};

export default Modus;
