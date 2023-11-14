import { Link, useLocation } from "react-router-dom";

function SidebarNav(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const {show, linkCallback} = props;

    const currentPath = useLocation().pathname;

    const internalLinks = [
        { title: "Home", path: "/" },
        { title: "About/Credits", path: "/about" }
    ];

    const externalLinks = [
        { title: "Dobercorgi", path: "https://dobercorgi.info" },
        { title: "Shulk Discord", path: "https://discord.com/invite/NpXtA3f" }
    ];
    

    //--------------------------------------------------
    // BUILD MARKUP
    //--------------------------------------------------

    const linksMarkup = [];

    for (let i = 0; i < internalLinks.length; i++) {
        linksMarkup.push(
            <Link
                to={internalLinks[i].path}
                className={(internalLinks[i].path === currentPath) ? "active" : ""}
                onClick={linkCallback}
                key={`nav-intLink-${i}`}
            >
                {internalLinks[i].title}
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
                {externalLinks[i].title}
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
