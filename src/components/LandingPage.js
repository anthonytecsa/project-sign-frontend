import React, { useRef } from 'react';
import Header from './Header';
import Timeline from './Timeline';
import Footer from './Footer';
import About from './About';
import './styles.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; 

function LandingPage() {
    const refTimeline = useRef(null);
    const refAbout = useRef(null);
    const refTeam = useRef(null);

    // Set up the intersection observer options
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    // Use the intersection observer hook
    useIntersectionObserver(refTimeline, options);
    useIntersectionObserver(refAbout, options);
    useIntersectionObserver(refTeam, options);

    return (
        <div className="landing-page-container">
            <div className="header-section">
                <Header />
            </div>
            <div className="logo-container">
                <img src={"/images/logo.png"} alt="ProjectSign Logo" className="home-logo"/>
                <img src={"/images/logo-text.png"} alt="ProjectSign Logo" className="home-logo-text"/>
            </div>

            <div className="timeline-container fade-in-section" ref={refTimeline}>
                <h1 className="container-title">A Brief History of ASL</h1>
                <Timeline />
                <p>Source: <a href="https://www.startasl.com/history-of-american-sign-language/">StartASL</a></p>
            </div>

            <div className="about-container fade-in-section" ref={refAbout}>
                <About />
            </div>

            <div className="team-container">
                <h1 className="container-title">The Team</h1>
                <div className="team-container fade-in-section" ref={refTeam}>
                <   div class="person one"></div>
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

