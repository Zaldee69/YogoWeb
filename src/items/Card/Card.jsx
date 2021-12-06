import React from 'react';
// import Icon1 from '../../assets/Icon-1.png';
import Arrow from '../../assets/arrow.svg';
import './Card.css';
export default function Card(props) {
  return (
    <div>
      <div className="features-col">
        <div className="features-title">
          <img src={props.image} alt="" />
          <h1>{props.title}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a href="">
            <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
