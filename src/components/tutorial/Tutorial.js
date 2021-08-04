import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import TutorialModal from "./TutorialModal";
import "../../assets/css/Tutorial.css";

const Tutorial = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="customBorder sideBox text-center mb-2">
      <p className="h3 text-center">Tutorial</p>
      <Button onClick={handleShow} className="mb-3">
        View
      </Button>

      <Modal show={show} onHide={handleClose} className="tutorialModal">
        <Modal.Header  closeButton>
          <h3 className="modalHeader">Tutorial</h3>
        </Modal.Header>
        <TutorialModal />
      </Modal>
    </Container>
  );
};

export default Tutorial;
