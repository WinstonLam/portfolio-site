import React from "react";
import Selector from "./Selector";
import "../styles/Resume.css";

const Resume = () => {

    return (
        <div className="resume-inner">
            <div className="resume-box1">
                <div className="resume-box1-title">
                    <h1>Resume</h1>
                </div>
                <Selector boxNames={["VWO", "BSc IS", "MSc SE"]} />
                <div className="resume-box1-inner">
                    <div className="resume-box1-inner-title">
                        <h1>VWO Degree - Veluws College Walterbosch</h1>
                        <h4>Date - Date</h4>

                    </div>
                    <div className="resume-box1-inner-content">
                        <ul>
                            <li>Subjects</li>
                            <li>Subjects</li>
                            <li>Subjects</li>
                            <li>Subjects</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="resume-box2">

            </div>
        </div>)

}

export default Resume;