import '../styles/SubProjects.css'
import GithubSvg from '../images/github-svg';

const SubProjects = () => {
    return (
        <div className='subprojects'>
            <div className='subprojects-inner'>
                <h1>Additional Projects</h1>
                <div className='subprojects-grid'>
                    <div className='subprojects-grid-item'>
                        <div className='grid-item-content'
                            onClick={() => window.location.href = "https://github.com/WinstonLam/Compiler-Construction"}>
                            <h1>&lt;&gt;</h1>
                            <div className='title'>
                                <h2>Compiler Construction</h2>
                                <GithubSvg className="githubsvg" link="https://github.com/WinstonLam/Compiler-Construction" />
                            </div>

                            <p>Construction of a compiler for a subset of the C programming language. The compiler is written in C and compiles code for the CiviC language.
                                The compiler consists of a scanner, parser, semantic analyzer, and code generator.
                            </p>


                            <div className="subprojects-grid-item-footer">
                                <div className="subprojects-grid-item-tags">
                                    <p>Yaml</p>
                                    <p>C</p>
                                    <p>CiviC</p>
                                </div>
                            </div>
                            <h1 className='closing-brackets'>&lt;/&gt;</h1>
                        </div>
                    </div>

                    <div className='subprojects-grid-item'>
                        <div className='grid-item-content'
                            onClick={() => window.location.href = "https://github.com/WinstonLam/Originals-Website"}>
                            <h1>&lt;&gt;</h1>
                            <div className='title'>
                                <h2>Originals Website</h2>
                                <GithubSvg className="githubsvg" link="https://github.com/WinstonLam/Originals-Website" />
                            </div>

                            <p>Website for a restaurant Originals.
                                The website is written in basic HTML and CSS
                                and uses Jquery for animations.
                            </p>


                            <div className="subprojects-grid-item-footer">
                                <div className="subprojects-grid-item-tags">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Jquery</p>
                                </div>
                            </div>
                            <h1 className='closing-brackets'>&lt;/&gt;</h1>
                        </div>
                    </div>

                    {/* <div className='subprojects-grid-item'>
                        <div className='grid-item-content'>
                            <h1>&lt;&gt;</h1>
                            <div className='title'>
                                <h2>Project 1</h2>
                                <GithubSvg className="githubsvg" link="https://github.com/WinstonLam" />
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                            </p>


                            <div className="subprojects-grid-item-footer">
                                <div className="subprojects-grid-item-tags">
                                    <p>Solidity</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                </div>
                            </div>
                            <h1 className='closing-brackets'>&lt;/&gt;</h1>
                        </div>


                    </div>
                    <div className='subprojects-grid-item'>
                        <div className='grid-item-content'>
                            <h1>&lt;&gt;</h1>
                            <div className='title'>
                                <h2>Project 1</h2>
                                <GithubSvg className="githubsvg" link="https://github.com/WinstonLam" />
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                            </p>


                            <div className="subprojects-grid-item-footer">
                                <div className="subprojects-grid-item-tags">
                                    <p>Solidity</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                </div>
                            </div>
                            <h1 className='closing-brackets'>&lt;/&gt;</h1>
                        </div> 
                </div>
                */}
                </div>

            </div>


        </div >
    );
}

export default SubProjects;