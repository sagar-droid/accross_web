import React, { useState } from "react";
import "./Header.css";
import Logo from "./Logo";
import "../container/Container.css";
import { FcNext } from "react-icons/fc";

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <>
      <header className="navbar container">
        <div className="logo">
          <Logo />
        </div>
        <div
          class={`menu-btn ${menuExpanded ? "expanded" : ""}`}
          onClick={toggleMenu}
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div className={`icon ${menuExpanded ? "visible" : ""}`}>
            {<FcNext />}
          </div>
          {/* <div className={`bar ${menuExpanded ? "cross" : ""}`}></div>
          <div className={`bar ${menuExpanded ? "cross" : ""}`}></div>
          <div className={`bar ${menuExpanded ? "cross" : ""}`}></div> */}
        </div>
        <div className="navbar-menu">
          <nav className={`nav-links ${menuExpanded ? "expanded" : ""}`}>
            <a href="#home">Why Across</a>
            <a href="#who">Who is this account for</a>
            <a href="#services">FAQs</a>
            <a href="#contact">About</a>
          </nav>
        </div>
        <button>Login</button>
      </header>
    </>
  );
};

export default Header;
