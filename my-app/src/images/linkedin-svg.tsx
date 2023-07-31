


import React from 'react';

type ArrowSvgProps = {
    className: string;
};

const LinkedInSvg: React.FC<ArrowSvgProps> = ({ className }) => (
    <div className={className} onClick={() => window.location.href = 'https://www.linkedin.com/in/winston-lam-0b444324b/'}>
        <svg xmlns="http://www.w3.org/2000/svg" role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-linkedin">
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
            </path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>

    </div >
);

export default LinkedInSvg;


