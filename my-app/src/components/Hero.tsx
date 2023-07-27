import React, { useState } from 'react';
import Colors from './Colors'
import "../styles/Hero.css";

type Theme = {
    primary: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
};

type ColorsProps = {
    changeTheme: (newTheme: Theme) => void;
};


const Hero: React.FC<ColorsProps> = ({ changeTheme }) => {
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
                    <Colors changeTheme={changeTheme} />
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