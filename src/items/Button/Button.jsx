import React from 'react';
import './Button.css';
import Primary from '../Primary-btn/Primary.jsx';
import Secondary from '../Secondary-btn/Secondary';

export default function Button() {
  return (
    <div>
      <div className="header-btn">
        <Primary />
        <Secondary title="explore now" />
      </div>
    </div>
  );
}
