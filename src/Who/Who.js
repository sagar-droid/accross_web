import React from "react";
import "./Who.css";
import SmallLogo from "../Details/SmallLogo";
const Who = () => {
  return (
    <div className="who-container container">
      <div className="who-container-left">
        <div className="box circle-container">
          <div className="bigCircle">
            <div className="midCircle">
              <div className="smallCircle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="who-container-right">
        <h2>Who is ACROSS for?</h2>
        <div className="who-small-details">
          <ul>
            <li className="who-small-details-lists">
              <SmallLogo />
              Global freelancers, Social influencers, gig workers, content
              creators, gamers etc.
            </li>
            <li className="who-small-details-lists">
              <SmallLogo />
              Residents in countries experiencing high inflation rates and
              currency instability
            </li>
            <li className="who-small-details-lists">
              <SmallLogo />
              Global residents who wants to invest in the US markets
            </li>
            <li className="who-small-details-lists">
              <SmallLogo />
              Students traveling to the US
            </li>
            <li className="who-small-details-lists">
              <SmallLogo />
              Frequent US travelers for both business and pleasure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Who;
