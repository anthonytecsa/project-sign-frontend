import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <header className="footer-content">
      <img src={"/images/logo.png"} alt="ProjectSign Logo" className="footer-logo"/>
      <Link to="/" className="footer-button">Home</Link>
      <Link to="/learn" className="footer-button">Learn</Link> 
      <a className="footer-button" href="">About</a>
      <a className="footer-button" href="">Test</a>
    </header>
  );
}

export default Footer;
