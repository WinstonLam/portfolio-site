import React, {useState} from 'react';
import SideNav  from './SideNav';

import '../styles/Header.css';
import '../styles/Nav.css';

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = () => {
    setIsChecked(!isChecked);
  }
    return (
        <>
        <div className='header'>
        <div className='header-inner'>
        <div className='header-box1'><h1>Winston Lam</h1></div>
        <div className='header-box2'><h1>LOGO</h1></div>
        <div className='header-box3'>
        <div className={`hamburger ${isChecked ? 'checked' : ''}`} onClick={handleOnClick}>
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
        </div>
        </div>
        </div>
        </div>

        <SideNav checked = {isChecked} />
        </>
    );
    };

export default Header;
