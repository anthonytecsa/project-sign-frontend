import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import Footer from './Footer';
import About from './About';
import './styles.css';


function LandingPage() {
    return (
        <div class="landing-page-container">
            <div class="header-section">
                <Header/>
            </div>
            <div class="logo-container">
                <img src={"/images/logo.png"} alt="ProjectSign Logo" className="home-logo"/>

                <img src={"/images/logo-text.png"} alt="ProjectSign Logo" className="home-logo-text"/>
            </div>

            <div class="timeline-container">
                <h1 class="container-title">A Brief History of ASL</h1>
                <Timeline />
                <p>Source: <a href="https://www.startasl.com/history-of-american-sign-language/">StartASL</a></p>
            </div>

            <div class="about-container">
                <About />
            </div>

            <div class="team-container">
                <h1 class="container-title">The Team</h1>
                <div class="team-container">
                    <div class="person one"></div>
                    <div class="person two"></div>
                    <div class="person three"></div>
                    <div class="person four"></div>
                </div>
                <div class="team-names">
                    <div class="info at">
                        <p>Anthony Tecsa</p>
                    </div>
                    <div class="info py">
                        <p>Patrick Yang</p>
                    </div>
                    <div class="info kp">
                        <p>Krish Patel</p>
                    </div>
                    <div class="info kz">
                        <p>Kevin Zhou</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        
    );
}

export default LandingPage;