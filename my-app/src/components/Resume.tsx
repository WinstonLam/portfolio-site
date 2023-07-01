
import { useState } from "react";
import Selector from "./Selector";
import "../styles/Resume.css";

const Resume = () => {
    const [education, setEducation] = useState<number>(0);

    return (
        <div className="resume-inner">
            <div className="resume-box1">
                <div className="resume-box1-title">
                    <h1>My Education</h1>
                </div>
                <div className="resume-box1-selector">
                    <Selector boxNames={["VWO", "BSc IS", "MSc SE"]} onChange={setEducation} />
                </div>
                <div className="resume-box1-inner">
                    <div className="resume-box1-inner-title">

                        {education === 0 &&
                            <>
                                <h1> <span className="highlight1">VWO Degree </span>- <span className="highlight">Veluws College Walterbosch</span></h1>
                                <h4>September 2011 - June 2017</h4>
                            </>
                        }

                        {education === 1 &&
                            <>
                                <h1> <span className="highlight1">BSc Information Science </span>- <span className="highlight">University of Amsterdam</span></h1>
                                <h4>Setpember 2017 - April 2021</h4>
                            </>
                        }

                        {education === 2 &&
                            <>
                                <h1> <span className="highlight1">MSc Software Engineering </span>- <span className="highlight">University of Amsterdam</span></h1>
                                <h4>September 2021 - June 2023</h4>
                            </>
                        }

                    </div>
                    <div className="resume-box1-inner-content">
                        {education === 0 &&
                            <dl>
                                <dd>Attended the highest high school education in The Netherlands</dd>
                                <dd>Continued having classes in Java, HTML, CSS, Adobe programs and more</dd>
                                <dd>Graduated with a GPA of 7</dd>
                            </dl>
                        }

                        {education === 1 &&
                            <dl>
                                <dd>Studied Information Science at the University of Amsterdam</dd>
                                <dd>Attended courses about Information System Modelling, Machine Learning, Python, Big Data and SQL</dd>
                                <dd>Attended a minor program E-commerce and Online Business at the Vrije Universiteit Amsterdam</dd>
                            </dl>
                        }

                        {education === 2 &&
                            <dl>
                                <dd>Studied Software Engineering at the University of Amsterdam</dd>
                                <dd>Attended courses about Compiler Construction, Cyberphysical Software Systems, Cloud Computing,<br /> Software Testing, C, Haskell, and Javascript</dd>

                            </dl>
                        }


                    </div>
                </div>


            </div>
            <div className="resume-box2">

            </div>
        </div>)

}

export default Resume;