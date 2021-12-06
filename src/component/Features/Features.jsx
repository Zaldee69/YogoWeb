import React from 'react';
import Card from '../../items/Card/Card';
import './Features.css';
import Icon1 from '../../assets/Icon-1.png';
import Icon2 from '../../assets/Icon-2.png';
import Icon3 from '../../assets/Icon-3.png';

export default function Features() {
  return (
    <div>
      <section id="services">
        <div className="features-row">
          <Card image={Icon1} title="Express Delivery" />
          <Card image={Icon2} title="Offer Around You" />
          <Card image={Icon3} title="Pocket Friendly" />
        </div>
      </section>
    </div>
  );
}
