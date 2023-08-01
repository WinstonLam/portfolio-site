import "../styles/Projects.css";
import GithubSvg from "../images/github-svg";

const Projects = () => {
    return (
        <>

            <div className="projects-inner">
                <h1>My Projects</h1>

                <div className="projects-box1">
                    <div className="projects-box1-content">
                        <div className="projects-box1-content-title">
                            <p>My Projects</p>
                        </div>
                        <div className="projects-box1-content-sub">
                            <p>Here you can find some of my projects.</p>
                        </div>
                        <div className="projects-box1-content-desc">
                            <p>You're correct that using position: absolute can make layouts less
                                responsive and harder to manage. A good alternative approach to this
                                situation is using CSS Flexbox or Grid, which can provide a lot of control
                                over element positioning while also being responsive. In this case,
                                I'd suggest using CSS Flexbox and adjust the margins to create the overlap
                                effect.Here's how you can modify your CSS: </p>
                        </div>
                        <div className="projects-box1-content-footer">
                            <div className="projects-box-content-tags">
                                <p>Solidity</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </div>
                            <GithubSvg className="githubsvg" />
                        </div>
                    </div>
                    <div className="projects-box1-circle">

                        <img src={require("../images/pf.jpeg")} alt="hero-circle" />
                    </div>
                </div>

                <div className="projects-box2">
                    <div className="projects-box2-circle">
                        <img src={require("../images/pf.jpeg")} alt="hero-circle" />
                    </div>

                    <div className="projects-box2-content">
                        <div className="projects-box2-content-title">
                            <p>My Projects</p>
                        </div>
                        <div className="projects-box2-content-sub">
                            <p>Here you can find some of my projects.</p>
                        </div>
                        <div className="projects-box2-content-desc">
                            <p>You're correct that using position: absolute can make layouts less
                                responsive and harder to manage. A good alternative approach to this
                                situation is using CSS Flexbox or Grid, which can provide a lot of control
                                over element positioning while also being responsive. In this case,
                                I'd suggest using CSS Flexbox and adjust the margins to create the overlap
                                effect.Here's how you can modify your CSS: </p>
                        </div>
                        <div className="projects-box2-content-footer">
                            <div className="projects-box-content-tags">
                                <p>Solidity</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </div>
                            <GithubSvg className="githubsvg" />

                        </div>
                    </div>

                </div>
                <div className="projects-box1">
                    <div className="projects-box1-content">
                        <div className="projects-box1-content-title">
                            <p>My Projects</p>
                        </div>
                        <div className="projects-box1-content-sub">
                            <p>Here you can find some of my projects.</p>
                        </div>
                        <div className="projects-box1-content-desc">
                            <p>You're correct that using position: absolute can make layouts less
                                responsive and harder to manage. A good alternative approach to this
                                situation is using CSS Flexbox or Grid, which can provide a lot of control
                                over element positioning while also being responsive. In this case,
                                I'd suggest using CSS Flexbox and adjust the margins to create the overlap
                                effect.Here's how you can modify your CSS: </p>
                        </div>
                        <div className="projects-box1-content-footer">
                            <div className="projects-box-content-tags">
                                <p>Solidity</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </div>
                            <GithubSvg className="githubsvg" />
                        </div>
                    </div>
                    <div className="projects-box1-circle">
                        <img src={require("../images/pf.jpeg")} alt="hero-circle" />
                    </div>
                </div>


            </div>

        </>
    );

}

export default Projects;