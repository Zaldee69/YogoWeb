import React, { useState } from "react";
import NavImage from "../../assets/YOGO.png";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="nav">
        <div className="nav-logo">
          <img src={NavImage} />
        </div>
        <div className={`nav-title `}>
          <ul className={isOpen ? "slide" : ""}>
            <li>
              <a href="#">
                <span className="border">Home</span>
              </a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            {/* <li>
              <a href="#">Pricing</a>
            </li> */}
            <li>
              <a href="#explore">About</a>
            </li>
            <li>
              <a href="#footer">Subscribe</a>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={clickHandler}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
