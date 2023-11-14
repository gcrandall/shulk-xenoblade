// React
import React from 'react';

// Bootstrap
import Modal from 'react-bootstrap/Modal';


function HelpModal(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { show, handleClose } = props;


    return (
        <>
            <Modal className="c-help-modal" show={show} onHide={handleClose} animation={true} centered aria-labelledby="helpModal-title">
                <div className="c-help-modal__circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Modal.Header>
                    <h2 id="helpModal-title">Help</h2>
                </Modal.Header>
                <Modal.Body>
                    <h3>How to use</h3>
                    <p>
                        Simply choose a character from the grid on the homepage, using search and filter options if needed. Clicking a character's tile will bring up their details page with all of the information related to that character.
                    </p>
                    <p>
                        Pressing enter while searching will automatically open the details page for the first result.
                    </p>
                    <br />

                    <h3>How do I submit new vods?</h3>
                    <p>Simply use the <a href="https://forms.gle/tCGt8sYxRBjeJqNJ8" target="_blank" rel="noreferrer">ShulkXenoblade.com Feedback Form</a> to submit new vods to be added to the app.</p>
                    <br />

                    <h3>A piece of information is wrong, how do I report it?</h3>
                    <p>If there is a mistake and a piece of information within the app is wrong, please report it using the <a href="https://forms.gle/tCGt8sYxRBjeJqNJ8" target="_blank" rel="noreferrer">feedback form</a>. If it can be verified to be wrong, it will be corrected as soon as possible.</p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HelpModal;