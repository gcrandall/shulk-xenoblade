// React
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import HelpModal from './HelpModal';

// Images
import logo from '../../../assets/images/logo.svg';

function TitleBar(props) {

    const { menuExpanded, menuButtonCallback } = props;

    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
            <header className="l-header">
                <Link to={`/`} className="text-decoration-none">
                    <img src={logo} className="l-header__logo" alt="Shulk Xenoblade"/>
                </Link>
                <button className="l-header__help" title="Help" onClick={() => setShowHelp(true)}>
                    <i className="icon-help"></i>
                </button>

                <button
                    className="l-header__menu"
                    title={`${(menuExpanded) ? "Hide" : "Show"} Nav Menu`}
                    onClick={menuButtonCallback}
                    aria-expanded={menuExpanded}
                >
                    {
                        (menuExpanded)
                            ? <i className="icon-x"></i>
                            : <i className="icon-hamburger"></i>
                    }
                    
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