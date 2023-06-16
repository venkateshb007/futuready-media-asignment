import React from "react";
import "./about.css";

import Img5 from "../../img/CameraLight.png";
import Img6 from "../../img/Camera.png";

const About = () => {
  return (
    <>
      <div className="container text-white">
        <h3 className="text-center mb-5">ABOUT THE CHALLENGE</h3>
        <div className="grid">
          <div className="row justify-content-center  g-5 ">
            <div className=" col-md-5  about-left">
            <h5 style={{ color: "#1ca48c", textAlign: "start" }}>
            The spotlight shifts to God’s Own Country – Kerala!
          </h5>
          <p style={{ textAlign: "justify" }}>
            Malayalam cinema is known for its content. It is an industry driven
            by content and not just by stars. Year after year, it has been an
            industry churning out films that are now finding audience not just
            in the Malayalam speaking crowd but also across the country. It is
            an industry that does not shy away from giving chances to newcomers
            and new ideas. And that’s why, it became an obvious choice for the
            next edition of The Big Shorts Challenge. <br />
            Film submissions are invited to participate in the challenge. Short
            Films (5 mins to 20 mins) in Malayalam language (with English
            subtitles) uploaded by Filmmakers on the platform between{" "}
            <span style={{ color: "#1ca48c" }}>
              15th June 2022 to 20th July 2023
            </span>{" "}
            will be allowed to participate in the challenge. The films will go
            live on the platform on 25th July 2023 and the film which garners
            the maximum no. of views (unique consumer tickets sold) between
            <span style={{ color: "#1ca48c" }}>25th July 2023</span> to 31st
            August 2023 will be declared as the Most Watched Film and will win a
            cash prize of Rs 50,000. The film with the highest earnings (Number
            of Tickets Sold X Ticket Price) between{" "}
            <span style={{ color: "#1ca48c" }}>
              25th July 2023 to 31st August 2023
            </span>{" "}
            will be declared the{" "}
            <span style={{ color: "#1ca48c" }}>
              Highest Grossing Film and will also win a cash prize of Rs 50,000.
            </span>
          </p>
            </div>
            <div className="center-block col-md-5 about-right">
              <div className="camera-container d-flex">
                <div className="camera-light">
                  <img className="img-fluid" src={Img5} alt="camera-light" />
                </div>
                <div className="camera-right">
                  <img className="img-fluid" src={Img6} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
