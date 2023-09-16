import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="footer-heading">Who are we?</h4>
            <p className="footer-text">We are a team of passionate individuals who are committed to making the world a better place.</p>
          </div>
          <div className="col-md-12">
            <h4 className="footer-heading">Our mission</h4>
            <p className="footer-text">Our mission is to make the world a more just and equitable place for all.</p>
          </div>
          <div className="col-md-12">
            <h4 className="footer-heading">Share</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;