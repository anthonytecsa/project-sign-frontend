import React from 'react';
import { Link } from 'react-router-dom';
import'./styles.css';

const Header = () => {
    return (
        <header className="header-content">
            <img src={"/images/logo.png"} alt="ProjectSign Logo" className="header-logo"/>
            <img src={"/images/logo-text.png"} alt="ProjectSign Logo" className="header-logo-text"/>

            <div className="navbar">
                <Link to="/" className="header-button">Home</Link>
                <Link to="/learn" className="header-button">Learn</Link> 
                <Link to="/test" className="header-button">Test</Link> 
            </div>
        </header>
    );
}

export default Header;