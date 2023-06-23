import React, { useState, useEffect } from 'react';

import "../styles/Hero.css";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const windowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const circleResize = () => {
        const heroCircle = document.querySelector('.hero-circle');
        if (heroCircle instanceof HTMLElement) {
            heroCircle.style.height = getComputedStyle(heroCircle).width;
            console.log(heroCircle.style.height);
        }
    };

    useEffect(() => {
        setLoaded(true);
        window.addEventListener('resize', () => { windowResize(); circleResize(); });

        return () => {
            window.removeEventListener('resize', () => { windowResize(); circleResize(); });
        }
    }, []);

    let titleClass = 's';
    if (windowWidth > 1200) {
        titleClass = 'l';
    } else if (windowWidth > 600) {
        titleClass = 'm';
    }

    return (
        <>
            <div className={`hero-${titleClass}`}>
                {/* <div className="particles-container">
                <ParticlesBackdrop/>
            </div> */}
                <div className={`hero-inner-${titleClass}`}>

                    <div className={`hero-box1${titleClass !== 'l' ? "-ms" : ""}`}>
                        <div className="hero-box1-inner1"></div>
                        <div className="hero-box1-inner2"></div>
                        <div className="hero-box1-inner3">
                            <p>Hi there!
                                My name is Winston Lam  </p>
                            <img src={require("../images/user.png")} alt="emojuseri" />
                        </div>
                    </div>
                    <div className={`hero-box2${titleClass !== 'l' ? "-ms" : ""}`}>

                        <div className="title"> <h1>Winston Lam</h1></div>
                        <div className="hero-circle">

                            {/* import image from images folder */}
                            <img className={`${loaded ? 'fadeIn' : ''}`} src={require("../images/business-man-cartoon-character-png.webp")} alt="hero-circle" />
                        </div>
                        <div className={`hero-bar-${titleClass}`}>

                            <div className="hero-bar-box1">GitHub</div>
                            <div className="hero-bar-box2">LinkedIn</div>
                            <div className="hero-bar-box3">Slack</div>
                        </div>
                    </div>
                    <div className={`hero-box3${titleClass !== 'l' ? "-ms" : ""}`}>
                        <div className="hero-box3-inner1">
                            {/* display svg image */}

                        </div>
                        <div className="hero-box3-inner2">qwe</div>
                        <div className="hero-box3-inner3">qwe</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;