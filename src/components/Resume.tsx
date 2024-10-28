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
      <div className="resume-inner-title">
        <h1>
          02. <span className="highlight"> Experience </span>
        </h1>
      </div>
      <div className="resume-box1">
        <div className="resume-box1-title">
          <h1>My Education</h1>
        </div>
        <div className="resume-box1-selector">
          <Selector
            boxNames={["MSc SE", "BSc IS", "VWO"]}
            onChange={setEducation}
          />
        </div>

        <div className="resume-box1-inner">
          <div className="resume-box1-inner-title">
            {/* MSc SE */}
            <div
              className={`resume-box1-content${
                education === 0 ? "-active" : ""
              }`}
            >
              <h1>
                <span className="highlight1">MSc Software Engineering </span>-{" "}
                <span className="highlight">University of Amsterdam</span>
              </h1>
              <h3>September 2021 - June 2023</h3>
            </div>

            {/* BSc IS */}
            <div
              className={`resume-box1-content${
                education === 1 ? "-active" : ""
              }`}
            >
              <h1>
                <span className="highlight1">BSc Information Science </span>-{" "}
                <span className="highlight">University of Amsterdam</span>
              </h1>
              <h3>September 2017 - April 2021</h3>
            </div>

            {/* VWO */}
            <div
              className={`resume-box1-content${
                education === 2 ? "-active" : ""
              }`}
            >
              <h1>
                <span className="highlight1">VWO Degree </span>-{" "}
                <span className="highlight">Veluws College Walterbosch</span>
              </h1>
              <h3>September 2011 - June 2017</h3>
            </div>
          </div>

          <div
            className={`resume-box1-inner-content${
              education === 0 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                Studied <span className="highlight">Software Engineering</span>{" "}
                at the University of Amsterdam
              </dd>
              <dd className="highlight">
                Attended courses about{" "}
                <span className="highlight">Compiler Construction</span>,{" "}
                <span className="highlight">Cloud Computing</span>,{" "}
                <span className="highlight">Software Testing</span>, and more
              </dd>
              <dd>
                Graduated with a GPA of <span className="highlight">7.5</span>
              </dd>
            </dl>
          </div>

          <div
            className={`resume-box1-inner-content${
              education === 1 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                Studied <span className="highlight">Information Science</span>{" "}
                at the University of Amsterdam
              </dd>
              <dd className="highlight">
                Attended courses about{" "}
                <span className="highlight">Information System Modelling</span>,{" "}
                <span className="highlight">Machine Learning</span>,{" "}
                <span className="highlight">Python</span>,{" "}
                <span className="highlight">Big Data</span>, and{" "}
                <span className="highlight">SQL</span>
              </dd>
              <dd>
                Attended a minor program in{" "}
                <span className="highlight">
                  E-commerce and Online Business
                </span>{" "}
                at the Vrije Universiteit Amsterdam
              </dd>
            </dl>
          </div>

          <div
            className={`resume-box1-inner-content${
              education === 2 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                Attended the highest high school education in The Netherlands
              </dd>
              <dd className="highlight">
                Continued having classes in{" "}
                <span className="highlight">Java</span>,{" "}
                <span className="highlight">HTML</span>,{" "}
                <span className="highlight">CSS</span>, Adobe programs, and more
              </dd>
              <dd>
                Graduated with a GPA of <span className="highlight">7</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="resume-box2">
        <div className="resume-box1-title">
          <h1>Work Experience</h1>
        </div>
        <div className="resume-box1-selector">
          <Selector
            boxNames={["ING", "Originals", "CargoLedger"]}
            onChange={setWork}
          />
        </div>

        <div className="resume-box1-inner">
          <div className="resume-box1-inner-title">
            {/* ING */}
            <div
              className={`resume-box1-content${work === 0 ? "-active" : ""}`}
            >
              <h1>
                <span className="highlight1">ING </span>-{" "}
                <span className="highlight">Software Engineer</span>
              </h1>
              <h3>September 2024 - Present</h3>
            </div>

            {/* Originals */}
            <div
              className={`resume-box1-content${work === 1 ? "-active" : ""}`}
            >
              <h1>
                <span className="highlight1">Originals </span>-{" "}
                <span className="highlight">
                  Co-Founder & Chief of Operations
                </span>
              </h1>
              <h3>December 2019 - Present</h3>
            </div>

            {/* CargoLedger */}
            <div
              className={`resume-box1-content${work === 2 ? "-active" : ""}`}
            >
              <h1>
                <span className="highlight1">CargoLedger </span>-{" "}
                <span className="highlight">Blockchain Developer Intern</span>
              </h1>
              <h3>April 2023 - August 2023</h3>
            </div>
          </div>

          <div
            className={`resume-box1-inner-content${
              work === 0 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                At <span className="highlight">ING</span>, a global financial
                institution renowned for innovation in banking, I work as a{" "}
                <span className="highlight">Software Engineer</span> focusing on
                developing and optimizing financial software systems. Leveraging
                various technologies and{" "}
                <span className="highlight">microservices architecture</span>, I
                contribute to building secure and scalable applications.
                Collaborate with cross-functional teams to implement new
                features, enhance system performance, and ensure compliance with
                industry regulations. This role has enriched my expertise in{" "}
                <span className="highlight">backend development</span>,{" "}
                <span className="highlight">cloud services</span>, and{" "}
                <span className="highlight">cybersecurity practices</span>{" "}
                within the finance sector.
              </dd>
            </dl>
          </div>

          <div
            className={`resume-box1-inner-content${
              work === 1 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                Co-founded and currently oversee a thriving restaurant, applying
                strategic planning and leadership skills. Implement various{" "}
                <span className="highlight">software systems</span> for workflow
                optimization and operational efficiency. Maintain high standards
                in daily operations while ensuring customer satisfaction.
                Utilize <span className="highlight">multitasking</span> and{" "}
                <span className="highlight">team management</span> abilities,
                fostering skills transferable to{" "}
                <span className="highlight">software engineering</span> and{" "}
                <span className="highlight">project management</span>.
              </dd>
            </dl>
          </div>

          <div
            className={`resume-box1-inner-content${
              work === 2 ? "-active" : ""
            }`}
          >
            <dl>
              <dd>
                At <span className="highlight">CargoLedger</span>, a premier
                logistics firm known for{" "}
                <span className="highlight">blockchain solutions</span>, I
                researched{" "}
                <span className="highlight">consensus mechanisms</span> with an
                emphasis on partial migration strategies. I sharpened my skills
                in <span className="highlight">Solidity</span>,{" "}
                <span className="highlight">smart contract development</span>,
                and{" "}
                <span className="highlight">
                  Ethereum-Polygon communication
                </span>
                , contributing to the company's advanced blockchain integration
                in logistics.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
