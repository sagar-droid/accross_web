import React from "react";
import Logo from "../Header/Logo";
import "./Footer.css";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="footer">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-label">
          <p className="footer-text-wrapper">
            <span className="map-logo">
              <BiMap />
            </span>
            302 S Abel St Milpitas,
            <br />
            <span className="footer-text-wrapper-2">CA 95035, USA</span>
          </p>
          <div className="footer-ending">
            <p>
              All the banking services are provided through our Platform
              Provider and its Bank Partners.
            </p>
            <br />
            <p>
              Account opening and other banking services provided by Platform
              Provider and its Partner bank are subject to applicable United
              States law. By creating an account via ACROSS you agree to ACROSS’
              Terms of Service, all applicable laws and regulations, and agree
              that you are responsible for compliance with any and all
              applicable local laws.
            </p>
            <br />
            <p>
              FDIC insurance coverage is limited to USD 250,000 per customer
              account. For more information on FDIC insurance coverage, visit{" "}
              <a href="www.FDIC.gov" className="anchor-tag">
                www.FDIC.gov
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
