// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import FighterCard from './FighterCard';

// Data
import type { FighterListing } from '../../../data/dataTypes';

type FighterGridProps = {
    fighters: FighterListing[];
}

const FighterGrid = ({ fighters }: FighterGridProps) => {

    const cards: JSX.Element[] = fighters.map((f) => {
        return (
            <Col xs="12" md="6" xxl="4" xxxl="3" key={f.id}>
                <FighterCard fighter={f} />
            </Col>
        );
    });

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