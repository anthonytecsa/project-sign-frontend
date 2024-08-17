import React from 'react';
import { Link } from 'react-router-dom';
import'./styles.css';

const Header = () => {
    return (
        <header className="header-content">
            <img src={"/images/logo.png"} alt="ProjectSign Logo" className="header-logo"/>
            <div className="navbar">
                <Link to="/" className="header-button">Home</Link>
                <Link to="/learn" className="header-button">Learn</Link> 
                <a className="header-button" href="">Test</a>
            </div>
        </header>
    );
}

export default Header;