import React from 'react';
import'./styles.css';

const Footer = () => {
    return (
        <header className="footer-content">
            <img src={"/images/logo.png"} alt="ProjectSign Logo" className="footer-logo"/>
            
            <a className="footer-button" href="">Home</a>
            <a className="footer-button" href="">Learn</a>
            <a className="footer-button" href="">Test</a>
        </header>
    );
}

export default Footer;
