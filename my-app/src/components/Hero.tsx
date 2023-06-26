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
  
            <div className="hero">
                <div className="hero-inner">
                    <div className="hero-box1">
                    <div className="hero-box1-greet">
                            <div className="colors" >
                                <div className="color1" />
                                <div className="color2" />
                                <div className="color3" />
                                <div className="color4" />
                            </div>
                            <div className="text">
                                <p>About Me</p>
                            </div>
                        </div>
                        <div className="hero-circle">
                            <img className={`${loaded ? 'fadeIn' : ''}`} src={require("../images/pf.jpeg")} alt="hero-circle" />
                        </div>
            
                     </div>
                    <div className="hero-box2">
                </div>
            </div>
            </div>
 
    );
};

export default Hero;