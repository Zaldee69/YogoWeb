import React from 'react';
import ExploreImg from '../../assets/feature.png';
import './Explore.css';
import Secondary from '../../items/Secondary-btn/Secondary';

export default function Explore(props) {
  return (
    <div>
      <section id="explore">
        <div className="explore-container-row">
          <div className="explore-left-col">
            <img src={ExploreImg} alt="" />
          </div>
          <div className="explore-right-col">
            <div className="left-title">
              <h1>
                We always love to hear from <br /> our costumers
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis, repellat.
              </p>
              <Secondary title="watch now" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
