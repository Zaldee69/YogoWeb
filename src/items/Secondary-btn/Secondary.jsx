import React from 'react';
import './Secondary.css';

export default function Secondary(props) {
  return (
    <div>
      <button className="btn-secondary">{props.title}</button>
    </div>
  );
}
