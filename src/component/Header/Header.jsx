import React from "react";
import "./Header.css";
import HeaderImg from "../../assets/home-pic.png";
import Primary from "../../items/Primary-btn/Primary";
import Secondary from "../../items/Secondary-btn/Secondary";

export default function Header() {
  return (
    <div>
      <div className="header-row">
        <div className="header-col-left">
          <h1>Let's Start The Magic</h1>
          <p>
            YOGO helps poeple to learn new things without <br /> spending to
            much money on unnecessary things
          </p>
          <div className="btn">
            <Primary />
            <Secondary title="Explore Now" />
          </div>
        </div>
        <div className="header-col-right ">
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
}
