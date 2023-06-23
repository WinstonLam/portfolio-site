import React from 'react';
import '../styles/Nav.css';

interface SideNavProps {
    checked: boolean;
  }

const SideNav: React.FC<SideNavProps> = ({checked}) => {

    return (
        <>
       <div className={`side-nav ${checked ? 'checked' : ''}`}>
        </div>
        </>
    );
    };

export default SideNav;