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

    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    let location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

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
                <div className="l-main-layout">
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