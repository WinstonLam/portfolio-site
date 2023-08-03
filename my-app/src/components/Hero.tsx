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
                        <h1>01.<span className='highlight'> About Me </span></h1>
                    </div>
                    <div className="text">
                        <p>Hello! I'm Winston, a Software Engineer specializing in multidisciplinary systems.
                            My passion was ignited in 2019, combining my work in the restaurant industry
                            with my studies at the University of Amsterdam. This experience highlighted
                            the potential of software systems to improve workflows, an idea central
                            to my bachelor's thesis.
                            <br />
                            <hr />
                            I've been fascinated by technology since high school, leading me to graduate
                            from <span className='highlight2'>Veluws College Walterbosch</span> in 2017.
                            My interest in leveraging computers to solve real-world problems led me to study
                            <span className='highlight2'> Information Science</span> at the
                            University of Amsterdam, where I earned my bachelor's degree in 2020.
                            Keen to enhance my <span className='highlight2'>Software Engineering</span> skills, I continued at the
                            same university for my master's degree. My ongoing pursuit of knowledge
                            reflects my commitment to harness software to effect real-world change.
                            <br />
                            <br />
                            Some technologies I have worked with include:

                        </p>
                        <div className="tech">
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>React</li>
                            </ul>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Python</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;