import React, { useEffect, useState } from "react";
import "../styles/Load.css";

const Load = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2400);

        // Cleanup function to clear the timeout if the component unmounts before the 3 seconds.
        return () => clearTimeout(timer);
    }, []); // Pass an empty dependency array to run this effect only once on mount.

    return (
        <div className={`load-wrapper ${isLoading ? "" : "load-wrapper-completed"}`}>
            <div className="circle"></div>
            <h1 className="loading-text">WL</h1>
        </div>
    );
}

export default Load;
