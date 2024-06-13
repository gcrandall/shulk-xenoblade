// React
import { Link, useLocation } from 'react-router-dom';

// Util
import { useWindowSize } from '../../../util/utilMethods';

type SidebarNavProps = {
    id: string;
    show: boolean;
    linkCallback: () => void;
}

type NavLink = {
    title: string;
    path: string;
}

const SidebarNav = ({ id, show, linkCallback }: SidebarNavProps) => {

    //--------------------------------------------------
    // BASIC VARIABLES
    //--------------------------------------------------

    const [screenWidth, screenHeight] = useWindowSize();

    const isDesktop = (screenWidth >= 1200);
    const navbarVisible = (show || isDesktop);

    const currentPath = useLocation().pathname;

    const internalLinks: NavLink[] = [
        { title: "Home", path: "/" },
        { title: "About / Credits", path: "/about" }
    ];

    const externalLinks: NavLink[] = [
        { title: "Dobercorgi", path: "https://dobercorgi.info" },
        { title: "Shulk Discord", path: "https://discord.com/invite/NpXtA3f" }
    ];
    

    //--------------------------------------------------
    // BUILD MARKUP
    //--------------------------------------------------

    const internalLinkElements: JSX.Element[] = internalLinks.map((link, i) => {
        return (
            <Link
                to={link.path}
                className={(link.path === currentPath) ? "active" : ""}
                onClick={linkCallback}
                key={`nav-intLink-${i}`}
                tabIndex={(navbarVisible) ? 0 : -1}
            >
                <span>{link.title}</span>
            </Link>
        );
    })

    const externalLinkElements: JSX.Element[] = externalLinks.map((link, i) => {
        return (
            <a
                href={link.path}
                target="_blank"
                rel="noreferrer"
                onClick={linkCallback}
                key={`nav-extLink-${i}`}
                tabIndex={(navbarVisible) ? 0 : -1}
            >
                <span>{link.title}</span>
            </a>
        );
    })


    return (
        <>
            <nav id={id} className={`l-main-layout__sidebar ${show ? "active" : ""}`} aria-hidden={!navbarVisible}>
                <div className="l-main-layout__sidebar-click-target" onClick={linkCallback}></div>
                {internalLinkElements}
                {externalLinkElements}
            </nav>
        </>
    );
}

export default SidebarNav;
