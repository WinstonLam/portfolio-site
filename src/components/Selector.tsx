import React, { useState, useRef, useEffect } from 'react';
import '../styles/Selector.css';

interface SelectorProps {
    boxNames?: string[];
    onChange?: (index: number) => void;

}

const Selector: React.FC<SelectorProps> = ({ boxNames = [], onChange }) => {
    const [boxNumber, setBoxNumber] = useState<number>(0);
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const boxRef = useRef<HTMLDivElement>(null);

    const updateWidth = () => {
        if (boxRef.current) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

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
                    <div
                        ref={boxRef}
                        className={`selector-box ${index === boxNumber ? 'selector-box-active' : ''}`}
                        key={boxName}
                        onClick={(event) => handleBoxClick(event, index)}>
                        {boxName}
                    </div>
                )}
            </div>
            <div className="selector-bar-wrapper" >
                <div className="selection-bar-background" style={{ width: `${boxNames.length * boxWidth}px` }} />
                <div className="selection-bar"
                    style={{
                        transform: `translateX(${boxNumber * boxWidth}px)`,
                    }} />
            </div >


        </div>
    );
};

export default Selector;
