// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data
import type { SortOption } from '../../../data/dataTypes';

type SearchSortControlsProps = {
    searchTerm: string;
    sortOrder: number;
    reverseSort: boolean;
    sortOptions: SortOption[];
    searchCallback: (val: string) => void;
    searchEnterCallback: () => void;
    sortCallback: (val: number) => void;
    reverseSortCallback: () => void;
    clearCallback: () => void;
}

const SearchSortControls = ({
    searchTerm,
    sortOrder,
    reverseSort,
    sortOptions,
    searchCallback,
    searchEnterCallback,
    sortCallback,
    reverseSortCallback,
    clearCallback
}: SearchSortControlsProps) => {

    let sortOptionsMarkup = sortOptions.map((option, i) => {
        return (
            <option key={`sort-option-${i}`} value={i}>{option.name}</option>
        );
    })

    // Callback on pressing enter when searching
    const searchKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchEnterCallback();
        }
    }


    return (
        <>
            <div className="c-controls">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="c-card">
                                {/* <div className="c-card__header">Hello.</div> */}
                                <Row>
                                    <Col xs="12" md="12" xl="4" xxxl="5" className="text-center">
                                        <div className="input-container c-controls__search">
                                            <label className="input-label" htmlFor="controls-search">
                                                Search
                                            </label>
                                            <input
                                                type="search"
                                                className="input-field"
                                                id="controls-search"
                                                placeholder=""
                                                value={searchTerm}
                                                onChange={(e) => searchCallback(e.target.value)}
                                                onKeyDown={searchKeyDownHandler}
                                                autoComplete="off"
                                                autoFocus
                                            />
                                            {/* <button title="Search"></button> */}
                                        </div>
                                    </Col>
                                    <Col xs="8" md="6" xl="4" xxxl="5" className="text-center">
                                        <div className="input-container c-controls__sort">
                                            <label className="input-label" htmlFor="controls-sort">
                                                Sort
                                            </label>
                                            <select
                                                id="controls-sort"
                                                className="input-field"
                                                value={sortOrder}
                                                onChange={(e) => sortCallback(parseInt(e.target.value))}
                                            >
                                                {sortOptionsMarkup}
                                            </select>
                                            <button
                                                className={`c-controls__sort-reverse ${(reverseSort) ? "reversed" : ""}`}
                                                title={`${(reverseSort) ? "Unreverse" : "Reverse"} Sort Order`}
                                                onClick={reverseSortCallback}
                                            >
                                                <i className="icon-arrow-down"/>
                                            </button>
                                        </div>
                                    </Col>
                                    <Col xs="4" md="6" xl="4" xxxl="2" className="justify-content-end justify-content-md-center">
                                        <div className="input-container c-controls__clear">
                                            <button className="btn" onClick={clearCallback}>Clear</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SearchSortControls;
