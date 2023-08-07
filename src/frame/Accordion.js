import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
// import HoriLine from "./HoriLine";
import "./Frame.css";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "What is ACROSS USD bank account service?",
      content: "It is an International service for money transaction",
    },
    {
      title: "Is the Bank Account insured?",
      content: "Yes, the bank account is insured and safe to use",
    },
    {
      title: "What do you need to provide to open the USD account?",
      content:
        "You only need a photocopy of your citizenship and 3 of your photos",
    },
  ];

  const toggleSection = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {accordionData.map((item, index) => (
        <div className="main-frame">
          <div className="frame" key={index}>
            <p className="frame-details" onClick={() => toggleSection(index)}>
              {item.title}{" "}
              <span className="icon">
                <AiFillPlusSquare />
              </span>
            </p>
            {openIndex === index && (
              <>
                <div className="frame-content">{item.content}</div>
              </>
            )}
            {/* <HoriLine /> */}
          </div>
        </div>
      ))}
      <p className="go-to-faq">Go To FAQs</p>
    </>
  );
};

export default Accordion;
