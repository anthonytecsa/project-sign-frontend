import React from 'react';
import Footer from './Footer';
import './styles.css';


function LandingPage() {
    return (
        <div class="landing-page-container">
            <div class="logo-container">
            <img src={"/images/logo.png"} alt="ProjectSign Logo" className="home-logo"/>

                <img src={"/images/logo-text.png"} alt="ProjectSign Logo" className="home-logo-text"/>
            </div>
            
            <h1>Insert some bs here</h1>
            <p>fuckth8sifuckthis</p>
            <div class="footer-section">
                <Footer/>
            </div>
        </div>
        
    );
}

export default LandingPage;