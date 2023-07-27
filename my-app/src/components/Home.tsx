import React, { useState } from "react";
import ParticlesBackdrop from "./ParticlesBackdrop";
import { Link } from 'react-scroll';
import arrowImage from '../images/right-arrow.svg';
import Colors from './Colors'


import "../styles/Home.css";

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
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return (
        <>

            <div className="home">



                <div className="home-inner">

                    <div className="home-box1">
                        <div className="home-box1-greet">
                            <Colors changeTheme={changeTheme} />
                            <div className="text">
                                <p>Hi there!</p>
                            </div>
                        </div>
                        <div className="home-box1-name">
                            <h1>My name is <span className="highlight">Winston</span> Lam</h1>
                        </div>
                        <div className="home-box1-desc">
                            <div className="text">
                                <p>I am a <span className="highlight">Software Enineer</span> graduated at the <span className="highlight">University of Amsterdam</span>.
                                    Specializing in full-stack development, cloud computing, and blockchain.
                                </p>
                            </div>
                            <div className="buttons">
                                <Link className="button-wrapper" to="hero" smooth={true} duration={1000}>
                                    <button className="about-button">About Me</button>
                                </Link>

                                <div className="intouch-button-wrapper">

                                    <button className="intouch-button"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => {
                                            window.location.href = "mailto:winston.lam@outlook.com";
                                            e.preventDefault();
                                        }}>
                                        Get In Touch
                                    </button>
                                    <img className={hovered ? 'arrow-hover' : 'arrow'} src={arrowImage} alt="arrow" />
                                    <img className={hovered ? 'arrow2-hover' : 'arrow2'} src={arrowImage} alt="arrow" />
                                    <img className={hovered ? 'arrow3-hover' : 'arrow3'} src={arrowImage} alt="arrow" />
                                </div>




                            </div>

                        </div>
                    </div>
                    <div className="home-box2">
                        <div className="home-box2-circle">

                        </div>
                        <img src={require("../images/programming.png")} alt="programming" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;

