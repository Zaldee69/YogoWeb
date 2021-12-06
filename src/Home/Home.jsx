import React from "react";
import Container from "../Container/Container";
import "./Home.css";
import Features from "../component/Features/Features";
import Explore from "../component/Explore/Explore";
import Traveling from "../component/Traveling/Traveling";
import Footer from "../component/Footer/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Container />
      <section id="services">
        <div className="title-container">
          <h1>
            We provide a wide range <br /> Of services
          </h1>
          <p>Let's start ordering with YOGO app to save a huge money today</p>
        </div>
      </section>
      <Features />
      <Explore />
      <Traveling />
      <Footer />
    </div>
  );
}
