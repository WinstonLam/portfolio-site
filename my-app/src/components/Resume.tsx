
import { useState, useEffect } from "react";
import Selector from "./Selector";

import "../styles/Resume.css";

const Resume = () => {
    const [education, setEducation] = useState<number>(0);
    const [work, setWork] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    // Trigger fade out when education changes
    useEffect(() => {
        setVisible(false);
    }, [education]);


    return (
        <div className="resume-inner">
            <div className="resume-box1">
                <div className="resume-box1-title">
                    <h1>My Education</h1>
                </div>
                <div className="resume-box1-selector">
                    <Selector boxNames={["VWO", "BSc IS", "MSc SE"]} onChange={setEducation} />
                </div>

                <div className="resume-box1-inner" >
                    <div className="resume-box1-inner-title">



                        <div className={`resume-box1-content${education === 0 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">VWO Degree </span>- <span className="highlight">Veluws College Walterbosch</span></h1>
                            <h4>September 2011 - June 2017</h4>
                        </div>

                        <div className={`resume-box1-content${education === 1 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">BSc Information Science </span>- <span className="highlight">University of Amsterdam</span></h1>
                            <h4>Setpember 2017 - April 2021</h4>
                        </div>

                        <div className={`resume-box1-content${education === 2 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">MSc Software Engineering </span>- <span className="highlight">University of Amsterdam</span></h1>
                            <h4>September 2021 - June 2023</h4>
                        </div>
                    </div>


                    <div className={`resume-box1-inner-content${education === 0 ? '-active' : ''}`} >
                        <dl>
                            <dd>Attended the highest high school education in The Netherlands</dd>
                            <dd>Continued having classes in Java, HTML, CSS, Adobe programs and more</dd>
                            <dd>Graduated with a GPA of 7</dd>
                        </dl>
                    </div>

                    <div className={`resume-box1-inner-content${education === 1 ? '-active' : ''}`} >
                        <dl>
                            <dd>Studied Information Science at the University of Amsterdam</dd>
                            <dd>Attended courses about Information System Modelling, Machine Learning, Python, Big Data and SQL</dd>
                            <dd>Attended a minor program E-commerce and Online Business at the Vrije Universiteit Amsterdam</dd>
                        </dl>
                    </div>

                    <div className={`resume-box1-inner-content${education === 2 ? '-active' : ''}`} >
                        <dl>
                            <dd>Studied Software Engineering at the University of Amsterdam</dd>
                            <dd>Attended courses about Compiler Construction, Cyberphysical Software Systems, Cloud Computing,<br /> Software Testing, C, Haskell, and Javascript</dd>

                        </dl>
                    </div>



                </div>

            </div>
            <div className="resume-box2">
                <div className="resume-box1-title">
                    <h1>Work Experience</h1>
                </div>
                <div className="resume-box1-selector">
                    <Selector boxNames={["SAR", "Originals"]} onChange={setWork} />
                </div>

                <div className="resume-box1-inner" >
                    <div className="resume-box1-inner-title">



                        <div className={`resume-box1-content${work === 0 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">Schiphol Airport Retail </span>- <span className="highlight">Sales Representitive</span></h1>
                            <h4>September 2017 - February 2020</h4>
                        </div>

                        <div className={`resume-box1-content${work === 1 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">Originals </span>- <span className="highlight">Co-Founder & Chief of Operations</span></h1>
                            <h4>December 2019 - Present</h4>
                        </div>

                        {/* <div className={`resume-box1-content${work === 2 ? '-active' : ''}`} >
                            <h1> <span className="highlight1">MSc Software Engineering </span>- <span className="highlight">University of Amsterdam</span></h1>
                            <h4>September 2021 - June 2023</h4>
                        </div> */}
                    </div>


                    <div className={`resume-box1-inner-content${work === 0 ? '-active' : ''}`} >

                        <dl>
                            <dd>Provided high-quality customer service in a fast-paced airport setting, demonstrating effective communication and problem-solving skills.
                                Managed cash transactions and inventory with keen attention to detail. Collaborated effectively within a team to meet sales goals.
                                Developed resilience and adaptability skills, transferable to software engineering roles.</dd>
                        </dl>
                    </div>

                    <div className={`resume-box1-inner-content${work === 1 ? '-active' : ''}`} >
                        <dl>
                            <dd>Co-founded and currently oversee a thriving restaurant, applying strategic planning and leadership skills. Implement various
                                software systems for workflow optimization and operational efficiency. Maintain high standards in daily operations while
                                ensuring customer satisfaction. Utilize multitasking and team management abilities, fostering skills transferable to software
                                engineering and project management.</dd>
                        </dl>
                    </div>

                    {/* {education === 2 &&
                            <dl>
                                <dd>Studied Software Engineering at the University of Amsterdam</dd>
                                <dd>Attended courses about Compiler Construction, Cyberphysical Software Systems, Cloud Computing,<br /> Software Testing, C, Haskell, and Javascript</dd>

                            </dl>
                        } */}



                </div>

            </div>
        </div>)

}

export default Resume;