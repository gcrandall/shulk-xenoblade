// React
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Bootstrap
import { ThemeProvider } from 'react-bootstrap';

// Custom Components
import TitleBar from '../../components/Layout/TitleBar';
import SidebarNav from '../../components/Layout/SidebarNav';
import Footer from '../../components/Layout/Footer';


function Layout() {

    //--------------------------------------------------
    // BASIC VARIABLES
    //--------------------------------------------------

    const [sidebarExpanded, setSidebarExpanded] = useState(false);


    //--------------------------------------------------
    // SWIPE DETECTION
    //--------------------------------------------------

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [touchEndY, setTouchEndY] = useState<number | null>(null);

    // Required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        // Prevent swipe from firing with usual touch events
        setTouchEndX(null);
        setTouchEndY(null);

        setTouchStartX(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY);
    }

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
                <div
                    className="l-main-layout"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
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