import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';



import '../styles/Header.css';
import '../styles/Nav.css';


const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);


  const handleOnClick = () => {
    setIsChecked(!isChecked);
  }

  const handleLogoClick = () => {
    setIsHovered(false);
    setIsClicked(true);
    setIsChecked(false);
    setTimeout(() => setIsClicked(false), 300); // reset after 1 second, adjust as needed
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div className={`header ${visible ? "" : "hidden"}`}>
        <div className='header-inner'>
          <div className='header-box1'>
            <Link className="button-wrapper" to="home" smooth={true} duration={1000}>


              <div className="header-box1-logo"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleLogoClick}>
                <div className={`header-box1-circle ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}></div>
                <h1 className={`header-box1-initials ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}>WL</h1>
              </div>
            </Link>
          </div>

          <div className='header-box2'>
            <div className='header-box2-inner'>

              <div className='header-box2-inner-box'>
                <Link className="button-wrapper" to="hero" smooth={true} duration={1000}
                  onClick={handleOnClick}>
                  <p>01. <span className='highlight'> About Me </span> </p>
                </Link>
              </div>

              <div className='header-box2-inner-box'>
                <Link className="button-wrapper" to="resume" smooth={true} duration={1000}
                  onClick={handleOnClick}>
                  <p>02. <span className='highlight'>  Work </span></p>
                </Link>
              </div>

              <div className='header-box2-inner-box'>
                <Link className="button-wrapper" to="projects" smooth={true} duration={1000}
                  onClick={handleOnClick}>
                  <p>03. <span className='highlight'> Projects </span></p>
                </Link>
              </div>

              <div className='header-box2-inner-box'>
                <Link className="button-wrapper" to="contact" smooth={true} duration={1000}
                  onClick={handleOnClick}>
                  <p>04. <span className='highlight'> Contact</span></p>
                </Link>
              </div>


              <button className="resume-button"
                onClick={() => window.open(require('../images/CV.pdf'), "_blank")}>Resume</button>


            </div>
          </div>

          <div className='header-box3'>
            <div className={`side-nav ${isChecked ? 'checked' : ''}`} >
              <div className="side-nav-inner">

                <div className="side-nav-inner-box" >
                  <Link className="button-wrapper" to="hero" smooth={true} duration={1000}
                    onClick={handleOnClick}>
                    <p>01. <br /> <span className='highlight'> About Me </span> </p>
                  </Link>
                </div>

                <div className="side-nav-inner-box">
                  <Link className="button-wrapper" to="resume" smooth={true} duration={1000}
                    onClick={handleOnClick}>
                    <p>02. <br /> <span className='highlight'>  Work </span></p>
                  </Link>
                </div>

                <div className="side-nav-inner-box">
                  <Link className="button-wrapper" to="projects" smooth={true} duration={1000}
                    onClick={handleOnClick}>
                    <p>03. <br /> <span className='highlight'> Projects </span></p>
                  </Link>
                </div>

                <div className="side-nav-inner-box">
                  <Link className="button-wrapper" to="contact" smooth={true} duration={1000}
                    onClick={handleOnClick}>
                    <p>04. <br /> <span className='highlight'> Contact</span></p>
                  </Link>
                </div>

                <button
                  className="resume-button"
                  onClick={() => window.open(require('../images/CV.pdf'), "_blank")}
                >
                  Resume
                </button>              </div>
            </div>
            <div className={`side-nav-filter ${isChecked ? 'checked' : ''}`} onClick={handleOnClick} />

            <div className={`hamburger ${isChecked ? 'checked' : ''}`} onClick={handleOnClick}>
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;
