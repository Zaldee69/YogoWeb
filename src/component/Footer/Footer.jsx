import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container-footer">
          <div className="content">
            <h1>Subscribe To Our Newsletter</h1>
            <form action="">
              <input type="email" placeholder="Input Your Email..." />
              <button>Subscribe</button>
              <small>Copyright @ 2021, Muhammad Rizaldy</small>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
