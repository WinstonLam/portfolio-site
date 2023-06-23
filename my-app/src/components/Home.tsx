import React from "react";
import ParticlesBackdrop from "./ParticlesBackdrop";


import "../styles/Home.css";

const Hero = () => {
    return (
        <>

            <div className="home">

                <div className="home-inner">
                    <ParticlesBackdrop />
                    <div className="home-box1">
                        <div className="home-box1-greet">
                            <p>------ Hi there!</p>
                        </div>
                        <div className="home-box1-name">
                            <h1>My name is <span className="highlight">Winston</span> Lam</h1>
                        </div>
                        <div className="home-box1-desc">
                            <p>I am a Software Enineer graduated at the University of Amsterdam.
                                Specializing in full-stack development, cloud computing, and blockchain.
                            </p>
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