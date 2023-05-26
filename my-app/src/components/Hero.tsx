import React, { useState, useEffect } from 'react';

import "../styles/Hero.css";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        setLoaded(true);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };

        function circleResize() {
            const heroCircle = document.querySelector('.hero-circle');
            if (heroCircle instanceof HTMLElement) {
              heroCircle.style.height = getComputedStyle(heroCircle).width;
            }
            
        window.addEventListener('circleresize', circleResize);
        window.addEventListener('windowresize', handleResize);

        // Call the function once to set the height when the component mounts
        circleResize();
        
        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize); 
        window.removeEventListener('circleresize', circleResize);
        };
    }}, []);

    


    return (
        <>
        <div className="hero">
            <div className="hero-inner">
            <div className="hero-box1">
                <div className="hero-box1-inner1"></div>
                <div className="hero-box1-inner2"></div>
                <div className="hero-box1-inner3">Hi there! 
                I'm Winston a Software Engineer
                <img src={require("../images/user.png")} alt="emojuseri" />
                </div>
            </div>
            <div className="hero-box2">
            <div className="title"> <h1>Winston Lam</h1></div>
                <div className="hero-circle">
                    {/* import image from images folder */}
                    <img className={`${loaded ? 'fadeIn' : ''}`} src={require("../images/business-man-cartoon-character-png.webp")} alt="hero-circle" />
                </div>
                <div className="hero-bar">
                    <div className="hero-bar-box1">GitHub</div>
                    <div className="hero-bar-box2">LinkedIn</div>
                    <div className="hero-bar-box3">Slack</div>
                </div>
            </div>
            <div className="hero-box3">
                <div className="hero-box3-inner1">qwe</div>
                <div className="hero-box3-inner2">qwe</div>
                <div className="hero-box3-inner3">qwe</div>
            </div>
            </div>
        </div>
        </>
    );
    };

export default Hero;