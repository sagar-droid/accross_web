import React from "react";
import "./OurStory.css";
import img1 from "../assets/chris-montgomery-smgTvepind4-unsplash 1.png";
const OurStory = () => {
  return (
    <div className="our-story-container container">
      <div className="our-story-container-left">
        <h2>Our Story</h2>
        <p>
          We founded ACROSS to enable global individual workers to spend less
          time in figuring out how to receive payments from their clients and
          rather focus on growth. <br />
          <br />
          Being in the cross-border payment industry, we learnt that most people
          in the developing and under-developed countries don't have access to a
          global bank account that would allow them to receive payments from
          their international clients and make payments in foreign currencies.
          We saw a huge need of such a banking instrument to truly democratize
          the world of Remote Working and global entrepreneurship. <br />
          <br />
          This key insight led us to starting ACROSS where we focus on providing
          a secure and insured USD Bank Account to non U.S. residents to
          receive, pay and spend like an global citizen.
        </p>
      </div>
      <div className="our-story-container-right">
        <img alt="Chris montgomery" src={img1}></img>
      </div>
    </div>
  );
};

export default OurStory;
