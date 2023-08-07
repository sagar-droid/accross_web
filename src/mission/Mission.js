import React from "react";
import img2 from "../assets/jason-goodman-vbxyFxlgpjM-unsplash 1.png";
import "./Mission.css";
const Mission = () => {
  return (
    <div className="mission-container container">
      <div className="mission-container-left">
        <img src={img2} alt="jason-goodman"></img>
      </div>
      <div className="mission-container-right">
        <h2>Mission</h2>
        <p>
          Our mission is to enable everyone, regardless of their location and
          citizenship, to receive payments from the rest of the world. We are
          creating the next generation personal banking system that empowers
          everyone to open a global bank account with a USD balance on their
          mobile phone or computer.
        </p>
      </div>
    </div>
  );
};

export default Mission;
