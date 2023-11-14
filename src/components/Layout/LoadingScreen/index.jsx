// React
import React from 'react';
import { useState } from 'react';


function LoadingScreen(props) {

    const { show } = props;

    const [preventRender, setPreventRender] = useState(!show);

    if (preventRender) {
        return <></>;
    }

    return (
        <>
            <div className={`c-loading-screen ${show ? "active" : ""}`} title="Loading..." onTransitionEnd={() => setPreventRender(!show)}></div>
        </>
    );
}

export default LoadingScreen;
