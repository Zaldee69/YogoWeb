import React from 'react';
import TravelingImg from '../../assets/explore.png';
import './Traveling.css';
import Secondary from '../../items/Secondary-btn/Secondary';

export default function Explore() {
  return (
    <div>
      <section id="traveling">
        <div className="traveling-container-row">
          <div className="traveling-left-col">
            <img src={TravelingImg} alt="" />
          </div>
          <div className="traveling-right-col">
            <div className="left-title">
              <h1>
                How does YOGO make <br /> life better
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis, repellat.
              </p>
              <Secondary title="explore now" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
