// React
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import FighterCard from './FighterCard';


function FighterGrid(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { fighters } = props;

    const cards = [];
    for (let i = 0; i < fighters.length; i++) {
        cards.push(
            <Col xs="12" md="6" xxl="4" xxxl="3" key={fighters[i].id}>
                <FighterCard fighter={fighters[i]} />
            </Col>
        );
    }

    if (cards.length === 0) {
        cards.push(
            <Col xs="12" key={"no-fighters"} className="text-center text-light">
                <div className="c-card">
                    NO RESULTS
                </div>
            </Col>
        );
    }


    return (
        <>
            <div className="c-fighter-grid">
                <Container>
                    <Row>
                        {cards}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FighterGrid;