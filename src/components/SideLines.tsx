import '../styles/SideLines.css'
import GithubSvg from "../images/github-svg";
import LinkedInSvg from "../images/linkedin-svg";
import InstagramSvg from "../images/instagram-svg";

const SideLines = () => {
    return (
        <div className="side-lines">
            <div className="side-lines-inner">
                <div className="side-lines-left">
                    <div className='side-lines-content-left'>
                        <div className="side-lines-left-contentline1"></div>
                        <div className='side-lines-icons'>

                            <div className="icon-container">
                                <GithubSvg className="githubsvg" link="https://github.com/WinstonLam" />
                            </div>
                            <div className="icon-container">
                                <LinkedInSvg className="linkedinsvg" />
                            </div>
                            <div className="icon-container">
                                <InstagramSvg className="instagramsvg" />
                            </div>
                        </div>
                        <div className="side-lines-left-contentline2"></div>
                    </div>
                    <div className="side-lines-fullline"></div>


                </div>

                <div className="side-lines-right">
                    <div className='side-lines-content-right'>
                        <div className="side-lines-right-contentline2"></div>

                        <div className='side-lines-mail'>
                            <p onClick={(e) => {
                                window.location.href = "mailto:winston.lam@outlook.com";
                                e.preventDefault();
                            }}>winston.lam@outlook.com</p>
                        </div>
                        <div className="side-lines-right-contentline1"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SideLines;