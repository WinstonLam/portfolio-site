import React, { useState } from 'react';
import '../styles/Selector.css';

interface SelectorProps {
    boxNames?: string[];
    onChange?: (index: number) => void;

}

const Selector: React.FC<SelectorProps> = ({ boxNames = [], onChange }) => {
    const [boxNumber, setBoxNumber] = useState<number>(0);

    const handleBoxClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setBoxNumber(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <div className="selector">
            <div className="selector-inner">
                {boxNames.map((boxName, index) =>
                    <div className={`selector-box ${index === boxNumber ? 'selector-box-active' : ''}`}

                        key={boxName}
                        onClick={(event) => handleBoxClick(event, index)}>
                        {boxName}
                    </div>
                )}
            </div>
            <div className="selector-bar-wrapper" >
                <div className="selection-bar-background" style={{ width: `${boxNames.length * 150}px` }} />
                <div className="selection-bar"
                    style={{
                        transform: `translateX(${boxNumber * 150}px)`,
                    }} />
            </div >


        </div>
    );
};

export default Selector;
