// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import HelpModal from './HelpModal';

// Images
import logo from '../../../assets/images/logo.svg';

type TitleBarProps = {
    menuExpanded: boolean;
    menuButtonCallback: () => void;
    sidebarNavId: string;
}

const TitleBar = ({ menuExpanded, menuButtonCallback, sidebarNavId }: TitleBarProps) => {

    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
            <header className="l-header">
                <button
                    className="l-header__menu"
                    title={`${(menuExpanded) ? "Hide" : "Show"} Nav Menu`}
                    onClick={menuButtonCallback}
                    aria-controls={sidebarNavId}
                    aria-expanded={menuExpanded}
                >
                    {
                        (menuExpanded)
                            ? <i className="icon-x"></i>
                            : <i className="icon-hamburger"></i>
                    }
                    
                </button>

                <Link to={`/`} className="text-decoration-none">
                    <img src={logo} className="l-header__logo" alt="Shulk Xenoblade"/>
                </Link>
                
                <button
                    className="l-header__help"
                    title="Help"
                    onClick={() => setShowHelp(true)}
                >
                    <i className="icon-help"></i>
                </button>

                <HelpModal
                    show={showHelp}
                    handleClose={() => setShowHelp(false)}
                />
            </header>
        </>
    );
}

export default TitleBar;