// React
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from "react-router-dom";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import LoadingScreen from '../../components/Layout/LoadingScreen';

import MatchupQuestLog from '../../components/Details/MatchupQuestLog';
import MatchupBusterDthrowWindows from '../../components/Details/MatchupBusterDthrowWindows';
import MatchupLedgeOptions from '../../components/Details/MatchupLedgeOptions';
import MatchupSafetyOnBlock from '../../components/Details/MatchupSafetyOnBlock';
import MatchupVods from '../../components/Details/MatchupVods';

// Data
import { getFighter } from '../../data/fighterList';

export async function loader({ params }) {
    return getFighter(params.fighterId);
}


function FighterDetails(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const fighter = useLoaderData();
    const navigate = useNavigate();

    const [details, setDetails] = useState(null);
    const [basicNotes, setBasicNotes] = useState(null);
    const [vods, setVods] = useState(null);
    const [errorLoadingData, setErrorLoadingData] = useState(false);

    // Determine whether to stop showing loading screen
    let finishedLoading = ((details != null) && (basicNotes != null) && (vods != null));

    // Character portrait
    const portrait = `/images/fighters/portrait/${fighter?.image}`;

    useEffect(() => {
        if (fighter != null) {
            document.title = `${fighter.name} - ShulkXenoblade.com`;

            import(`../../data/fighters/${fighter.number}-${fighter.id}.json`)
                .then((result) => setDetails(result))
                .catch((error) => {console.log("Error loading data file", error); setErrorLoadingData(true)});
        }
    }, []);

    useEffect(() => {
        if (details != null) {
            if (details.inheritNotesFrom === null) {
                setBasicNotes(details.notesShort);
            }
            if (details.inheritVodsFrom === null) {
                setVods(details.vods);
            }
            if ((details.inheritNotesFrom != null) || (details.inheritVodsFrom != null)) {
                loadInheritedData();
            }
        }
    }, [details]);

    const loadInheritedData = () => {
        let sameParent = (details.inheritNotesFrom === details.inheritVodsFrom);
        if (details.inheritNotesFrom != null) {
            import(`../../data/fighters/${details.inheritNotesFrom}.json`)
                .then((data) => {
                    setBasicNotes(data.notesShort);
                    if (sameParent) {
                        setVods(data.vods);
                    }
                })
                .catch((error) => {console.log("Error loading inherited notes", error); setErrorLoadingData(true)});
        }
        if (!sameParent && (details.inheritVodsFrom !== null)) {
            import(`../../data/fighters/${details.inheritVodsFrom}.json`)
                .then((data) => setVods(data.vods))
                .catch((error) => {console.log("Error loading inherited vods", error); setErrorLoadingData(true)});
        }
    }

    if (!fighter) {
        navigate("/");
        return <></>;
    }


    return (
        <>
        <div className="l-background-image l-background-image--central-factory"></div>
        <LoadingScreen show={!finishedLoading} />
        {
            errorLoadingData &&
            <div className="c-fighter-details">
                <Container>
                    <Row className="align-items-start">
                        <Col xs="12">
                            <div className="c-card">
                                <h1>Error loading matchup data.</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        }
        {
            finishedLoading &&
            <div className="c-fighter-details">
                <Container>
                    <Row>
                        <Col xs="12" className="d-flex justify-content-center">
                            <div className="c-fighter-details__header">
                                <h1>
                                    <span className="c-fighter-details__header-extras">
                                        <span className="c-fighter-details__header-lvl"></span>
                                        <span className="c-fighter-details__header-eye"></span>
                                    </span>
                                    <span>{fighter.name}</span>
                                </h1>
                            </div>
                        </Col>
                        <Col xs="12">
                            <MatchupQuestLog fighter={fighter} notes={basicNotes} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="d-flex align-items-stretch">
                        <Col xs="12" md="6">
                            <MatchupBusterDthrowWindows data={details.busterDthrowComboTree} />
                        </Col>
                        <Col xs="12" md="6">
                            <MatchupLedgeOptions data={details.ledgeOptions} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="d-flex align-items-stretch">
                        <Col xs="12" xxl="6">
                            <MatchupSafetyOnBlock fighter={fighter} />
                        </Col>
                        <Col xs="12" xxl="6">
                            <MatchupVods vods={vods} />
                        </Col>
                    </Row>
                </Container>
            </div>
        }
        </>
    );
}

export default FighterDetails;