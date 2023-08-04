import "../styles/Projects.css";
import GithubSvg from "../images/github-svg";

const Projects = () => {
    return (
        <>

            <div className="projects-inner">
                <div className="projects-inner-title">
                    <h1>03. <span className="highlight"> My Projects </span></h1>
                </div>

                <div className="projects-box1">
                    <div className="projects-box1-content">
                        <div className="projects-box1-content-title">
                            <p>Etheruem Layer-2 Scaling Framework</p>
                        </div>
                        <div className="projects-box1-content-sub">
                            <p>Testing of Layer-2 scaling for Ethereum using Polygon</p>
                        </div>
                        <div className="projects-box1-content-desc">
                            <p> This project was my master thesis for 2023,
                                it is my biggest individual project thus far,
                                and also the most complex project I have done.
                                The project consists of multiple parts of which
                                the most important part is the automated
                                smartcontract testing capabilites.
                                The other parts consist of briding data from the main Ethereum network
                                to sidechains developed on the Polygon network, and testing
                                for improvements. </p>
                        </div>
                        <div className="projects-box1-content-footer">
                            <div className="projects-box-content-tags">
                                <p>Solidity</p>
                                <p>Python</p>
                                <p>JavaScript</p>
                                <p>Node.js</p>
                            </div>
                            <GithubSvg className="githubsvg" link="https://github.com/WinstonLam/Eth-Layer2-Scaling-Framework" />
                        </div>
                    </div>
                    <div className="projects-box1-circle">
                        <div className="circle-image-container">
                            <img src={require("../images/framework.png")} alt="hero-circle" />
                        </div>
                    </div>
                </div>

                <div className="projects-box2">
                    <div className="projects-box2-circle">
                        <div className="circle-image-container">
                            <img src={require("../images/timeitin.png")} alt="hero-circle" />
                        </div>
                    </div>

                    <div className="projects-box2-content">
                        <div className="projects-box2-content-title">
                            <p>TimeItIn</p>
                        </div>
                        <div className="projects-box2-content-sub">
                            <p>Personalized Employee's Daily Kickstart Dashboard</p>
                        </div>
                        <div className="projects-box2-content-desc">
                            <p>TimeItIn is a workday management tool designed to kick-start an employee's
                                day as soon as they clock in. It displays their clock-in time
                                for effective schedule management and presents a
                                summary of the day's tasks, allowing for efficient
                                planning. The application also keeps them updated
                                with the latest workplace news. With a user-friendly
                                interface, TimeItIn integrates important daily
                                information into a single dashboard, acting
                                as a personal assistant and planner for
                                a productive workday. </p>
                        </div>
                        <div className="projects-box2-content-footer">
                            <div className="projects-box-content-tags">
                                <p>TypeScript</p>
                                <p>React</p>
                                <p>Express</p>
                                <p>Node.js</p>
                                <p>MongoDB</p>
                            </div>
                            <GithubSvg className="githubsvg" link="https://github.com/WinstonLam/TimeitIn" />

                        </div>
                    </div>

                </div>
                <div className="projects-box1">
                    <div className="projects-box1-content">
                        <div className="projects-box1-content-title">
                            <p>Lingo as a Service</p>
                        </div>
                        <div className="projects-box1-content-sub">
                            <p>E-learning Game for Vocabulary via Lingo.</p>
                        </div>
                        <div className="projects-box1-content-desc">
                            <p>Lingo as a Service is a web-based
                                application designed to make learning new words, definitions, and phrases more engaging and
                                enjoyable. By offering a custom-tailored user experience, Lingo as a Service provides a fun and
                                interactive way to learn. With Lingo as a Service, users can create their own word lists and turn
                                them into games, adding an element of gamification to the otherwise tedious process of memo-
                                rization. This innovative approach to language learning is suitable for anyone looking for a re-
                                freshing and effective way to learn! </p>
                        </div>
                        <div className="projects-box1-content-footer">
                            <div className="projects-box-content-tags">
                                <p>AWS</p>
                                <p>Docker</p>
                                <p>React</p>
                                <p>JavaScript</p>
                            </div>
                            <GithubSvg className="githubsvg" link="https://github.com/WinstonLam/Clout/tree/Development" />
                        </div>
                    </div>
                    <div className="projects-box1-circle">
                        <div className="circle-image-container">
                            <img src={require("../images/WordleExample.png")} alt="hero-circle" />
                        </div>
                    </div>
                </div>


            </div>

        </>
    );

}

export default Projects;