// React
import { useState } from 'react';

type LoadingScreenProps = {
    show: boolean;
}

const LoadingScreen = ({ show }: LoadingScreenProps) => {

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
