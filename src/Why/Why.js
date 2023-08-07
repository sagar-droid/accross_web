import React from "react";
import SmallLogo from "../Details/SmallLogo";
import "./Why.css";
const Why = () => {
  return (
    <div className="why-container container">
      <div className="why-container-left">
        <h2>Why ACROSS?</h2>
        <ul>
          <li className="why-details-lists">
            <SmallLogo />
            We understand the pain of receiving, spending the sending USD
            payments
            <br /> when you don't have the access to a USD Bank Account{" "}
          </li>
          <li className="why-details-lists">
            <SmallLogo />
            Maintain & operate your US bank account almost exactly as a US
            citizen
          </li>
          <li className="why-details-lists">
            <SmallLogo />
            Transfer money for FREE around the world
          </li>
          <li className="why-details-lists">
            <SmallLogo />
            Get access to both Virtual and Physical MasterCard debit card to
            spend your money
          </li>
          <li className="why-details-lists">
            <SmallLogo />
            All your funds are FDIC insured upto $250,000
          </li>
        </ul>
      </div>
      <div className="why-container-right">
        <div className="cardImage2"></div>
        <div className="cardImage1">
          <div className="mastercardlogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="40"
              viewBox="0 0 59 40"
              fill="none"
            >
              <circle
                opacity="0.4"
                cx="20.2143"
                cy="19.8035"
                r="19.2857"
                fill="white"
              />
              <circle
                opacity="0.4"
                cx="39.4999"
                cy="19.8034"
                r="19.2857"
                fill="white"
              />
            </svg>
          </div>
          <div className="small-box"></div>
          <div className="label">
            <h1 className="text-wrapper">**** **** **** ****</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
