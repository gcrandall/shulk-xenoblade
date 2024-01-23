// React
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";

// Bootstrap
import { ThemeProvider } from 'react-bootstrap';

// Custom Components
import TitleBar from "../../components/Layout/TitleBar";
import SidebarNav from '../../components/Layout/SidebarNav';
import Footer from "../../components/Layout/Footer";

// Analytics
import ReactGA from "react-ga4";

function Layout() {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    // Google Analytics
    let location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);


    //--------------------------------------------------
    // SWIPE DETECTION
    //--------------------------------------------------

    const [touchStartX, setTouchStartX] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);

    // Required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        // Prevent swipe from firing with usual touch events
        setTouchEndX(null);
        setTouchEndY(null);

        setTouchStartX(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY);
    }

    const onTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    }

    const onTouchEnd = () => {
        if (!touchStartX || !touchStartY || !touchEndX || !touchEndY) return;

        const distanceX = touchStartX - touchEndX;
        const distanceY = touchStartY - touchEndY;
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;

        // Left Swipe
        if (isLeftSwipe && (distanceX > distanceY)) {
            setSidebarExpanded(false);
        }

        // Right swipe
        if (isRightSwipe && (Math.abs(distanceX) > Math.abs(distanceY))) {
            setSidebarExpanded(true);
        }
    }


    return (
        <>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
                minBreakpoint="xs"
            >
                <TitleBar
                    menuExpanded={sidebarExpanded}
                    menuButtonCallback={() => setSidebarExpanded(!sidebarExpanded)}
                />
                <div className="l-main-layout" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <SidebarNav
                        show={sidebarExpanded}
                        linkCallback={() => setSidebarExpanded(false)}
                    />
                    <main className="l-main-layout__content">
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Layout;