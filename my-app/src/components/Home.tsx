import React from "react";
import ParticlesBackdrop from "./ParticlesBackdrop";
import { Link } from 'react-scroll';


import "../styles/Home.css";

const Hero = () => {
    return (
        <>

            <div className="home">



                <div className="home-inner">

                    <div className="home-box1">
                        <div className="home-box1-greet">
                            <div className="colors" >
                                <div className="color3" />
                                <div className="color2" />
                                <div className="color1" />
                                <div className="color4" />
                            </div>
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
                            <div>
                                <Link to="hero" smooth={true} duration={1000}>
                                    <button className="button">About Me</button>
                                </Link>

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

