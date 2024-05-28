// React
import { Link, useLocation } from 'react-router-dom';

type SidebarNavProps = {
    show: boolean;
    linkCallback: () => void;
}

type NavLink = {
    title: string;
    path: string;
}

const SidebarNav = ({ show, linkCallback }: SidebarNavProps) => {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

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

    const linksMarkup: JSX.Element[] = [];

    for (let i = 0; i < internalLinks.length; i++) {
        linksMarkup.push(
            <Link
                to={internalLinks[i].path}
                className={(internalLinks[i].path === currentPath) ? "active" : ""}
                onClick={linkCallback}
                key={`nav-intLink-${i}`}
            >
                <span>{internalLinks[i].title}</span>
            </Link>
        );
    }

    for (let i = 0; i < externalLinks.length; i++) {
        linksMarkup.push(
            <a
                href={externalLinks[i].path}
                target="_blank"
                rel="noreferrer"
                onClick={linkCallback}
                key={`nav-extLink-${i}`}
            >
                <span>{externalLinks[i].title}</span>
            </a>
        );
    }


    return (
        <>
            <nav className={`l-main-layout__sidebar ${show ? "active" : ""}`}>
                <div className="l-main-layout__sidebar-click-target" onClick={linkCallback}></div>
                {linksMarkup}
            </nav>
        </>
    );
}

export default SidebarNav;
