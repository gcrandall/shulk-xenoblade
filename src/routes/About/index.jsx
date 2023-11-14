// React
import { useEffect } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {

    useEffect(() => {
        document.title = "About | ShulkXenoblade.com";
    }, []);
    

    return (
        <>
            <div className="l-background-image l-background-image--frontier-village"></div>
            <div className="c-fighter-grid">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" lg="10" xxl="4">
                            <div className="c-card c-card--dark">
                                <h2 className="c-card__header">About</h2>
                                <Container>
                                    <Row>
                                        <Col xs="12">
                                            <p className="small">ShulkXenoblade.com is a web app meant to provide easy access to matchup-specific information for Shulk in Super Smash Bros. Ultimate. In a game with 80+ matchups, it's simply unreasonable to expect yourself to be able to remember everything at any one time.</p>
                                            <p className="small">This web app seeks to help Shulk players by allowing them to quickly reference everything they are most likely to need before a set, all in one place.</p>
                                            <p className="small">The source code for this app can be viewed in the <a href="https://github.com/gcrandall/shulk-xenoblade" target="_blank">GitHub Repository</a>.</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col xs="12" lg="10" xxl="8">
                            <div className="c-card c-card--transparent">
                                <h2 className="c-card__header">Team</h2>
                                <Container>
                                    <Row className="c-about-team">
                                        <Col xs="12">
                                            <a href="https://linktr.ee/gabrielcrandall" className="c-about-team__member text-md-center" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">Gabriel</h3>
                                                <div className="c-about-team__member-title small">Developer / UI Designer / Project Manager</div>
                                            </a>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <a href="https://github.com/npham2003" className="c-about-team__member" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">Nick</h3>
                                                <div className="c-about-team__member-title small">JSON Data Curator / QA Tester / Advisor</div>
                                            </a>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <a href="https://twitter.com/daven_mons" className="c-about-team__member" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">Shunk</h3>
                                                <div className="c-about-team__member-title small">Data Contributor / QA Tester / Advisor</div>
                                            </a>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <a href="https://twitter.com/MageBagel" className="c-about-team__member" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">MeB</h3>
                                                <div className="c-about-team__member-title small">QA Tester / Advisor</div>
                                            </a>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <a href="https://twitter.com/SandfallSSB" className="c-about-team__member" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">Sandfall</h3>
                                                <div className="c-about-team__member-title small">Frame Data Provider / Advisor</div>
                                            </a>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <a href="https://twitter.com/imbenstaudt" className="c-about-team__member" target="_blank" rel="noreferrer">
                                                <h3 className="c-about-team__member-name">Coach Ben</h3>
                                                <div className="c-about-team__member-title small">Advisor</div>
                                            </a>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col xs="12" lg="10" xxl="12">
                            <div className="c-card c-card--teal">
                                <h2 className="c-card__header">Data Sources</h2>
                                <Container>
                                    <Row>
                                        <Col xs="12">
                                            <ul className="c-about-sources small">
                                                <li>
                                                    <a href="https://docs.google.com/spreadsheets/d/1ZlrbCLPZ7LhbSyDpCxupBy9dKbt3D6XwHKpYRfMuSzs/edit#gid=0" target="_blank" rel="noreferrer">Ben's Big Shulk Chart</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/spreadsheets/d/1VRZ2n95aU6uJNGJ-JmXfaennt6DpdH3TLWSexuKwm_Y/edit?usp=drivesdk" target="_blank" rel="noreferrer">Mace & ArtAtk's Monado Arts Safety Spreadsheet</a>
                                                </li>
                                                <li>
                                                    <a href="https://discord.com/invite/NpXtA3f" target="_blank" rel="noreferrer">Shulk Discord's Migaga Bot</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/1GZq4ZBdH4HoPkVnXrRUAkY0DcX4Pq67fiC9lTFZnSDY/edit" target="_blank" rel="noreferrer">Dusty Carpet's Diddy Write-up</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/1UHhTSu5oelqm587bx6i3EM9v20MXvi0USCONnxe85II/edit" target="_blank" rel="noreferrer">Vedhan's ROB Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/1BBugC-tZ7CFJ_KMI1ebB9wshQNMAuanQG5Im9qfJhlI/edit" target="_blank" rel="noreferrer">Vedhan's Palutena Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://drive.google.com/file/d/1wvtNefJAwxP3TqTf-86lXS15GWsWTqou/view?usp=sharing" target="_blank" rel="noreferrer">Uzair's Wolf Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://drive.google.com/file/d/1St8jVJJLmoMbJSweoNqUqksGSRA-CjbF/view" target="_blank" rel="noreferrer">Uzair's Meta Knight Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/1731l-Vl6F_fQ8GZlsSDgB5msjBmueLxLsSR1yVgz7nM/edit" target="_blank" rel="noreferrer">Tanark's translation of Rizeasu's Bayonetta Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/1CtAM6YwpD97-FpVZ_h99ZgVlRy8zwvRKp_-O7yLo3Ug/edit" target="_blank" rel="noreferrer">Tanark's translation of Rizeasu's Banjo Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/document/d/15mfnuupiz_oCfIdbjFoucKxEMDIHy2uFAratsfGF-QQ/edit" target="_blank" rel="noreferrer">Tanark's translation of Rizeasu's Bowser Write-Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.twitlonger.com/show/n_1srohl0" target="_blank" rel="noreferrer">Peli's Anti-Dedede Guide</a>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;