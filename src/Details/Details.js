import React from "react";
import "./Details.css";
import SmallLogo from "./SmallLogo";
import iphoneImage from "../assets/iphone_13_pro_max_1_720.png";

const Details = () => {
  return (
    <div className="details-container container">
      {" "}
      <div className="details-left">
        <h2>USD bank account for non U.S residents</h2>
        <div className="details">
          <ul>
            <li className="details-lists">
              <SmallLogo />
              Open a U.S. bank account just with your Passport
            </li>
            <li className="details-lists">
              <SmallLogo />
              Get a Debit Card to spend and withdraw the funds
            </li>
            <li className="details-lists">
              <SmallLogo />
              Free international transfers{" "}
            </li>
          </ul>
          <button className="apply-button">Apply for the account</button>
        </div>
      </div>
      <div className="details-right">
        <img className="details-image" alt="Iphone pro max" src={iphoneImage} />
      </div>
    </div>
  );
};

export default Details;
