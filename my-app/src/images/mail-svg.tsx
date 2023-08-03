
import React from 'react';

type ArrowSvgProps = {
    className: string;
};

const MailSvg: React.FC<ArrowSvgProps> = ({ className }) => (
    <div className={className} onClick={() => (window.location.href = 'mailto:winston.lam@outlook.com')}
    >
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            stroke-width="1"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            >
                <path d="M361 4349 c-172 -34 -318 -182 -351 -358 -14 -74 -14 -2788 0 -2862
34 -180 179 -325 359 -359 74 -14 4308 -14 4382 0 180 34 325 179 359 359 14
74 14 2788 0 2862 -34 180 -179 325 -359 359 -67 12 -4325 12 -4390 -1z m3364
-1165 c-600 -597 -897 -886 -935 -909 -140 -85 -320 -85 -460 0 -38 23 -335
312 -935 909 l-880 875 2045 0 2045 0 -880 -875z m-2530 -223 l400 -401 -500
-501 c-275 -275 -566 -564 -647 -641 l-148 -140 0 1282 0 1282 248 -240 c136
-132 427 -421 647 -641z m3623 -1043 l-3 -643 -645 643 -645 642 645 642 645
642 3 -642 c1 -353 1 -931 0 -1284z m-2903 321 c181 -182 286 -255 435 -301
63 -19 97 -23 210 -23 154 0 234 19 350 82 86 46 131 84 277 226 l122 120 238
-231 c131 -127 422 -415 648 -641 l410 -411 -2045 0 -2045 1 643 639 c354 352
646 640 650 640 4 0 52 -45 107 -101z"
                />
            </g>
        </svg>

    </div >
);

export default MailSvg;




