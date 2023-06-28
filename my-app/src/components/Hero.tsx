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



    return (
        <div className="hero-inner">
            <div className="hero-box1">

                <div className="hero-circle">
                    <img className={`${loaded ? 'fadeIn' : ''}`} src={require("../images/pf.jpeg")} alt="hero-circle" />
                </div>

            </div>
            <div className="hero-box2">
                <div className="hero-box2-inner">
                    <div className="colors" >
                        <div className="color4" />
                        <div className="color2" />
                        <div className="color1" />
                        <div className="color3" />

                    </div>
                    <div className="title">
                        <h1>About Me</h1>
                    </div>
                    <div className="text">
                        <p>I am a Software Enineer graduated at the University of Amsterdam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;