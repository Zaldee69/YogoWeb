import React from 'react';
import Nav from '../component/Nav/Nav.jsx';
import './Container.css';
import Header from '../component/Header/Header';

export default function Container() {
  return (
    <div className="container">
      <Nav />
      <Header />
    </div>
  );
}
