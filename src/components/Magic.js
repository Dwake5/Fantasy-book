import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loseStat } from "../redux/stats/actions";
import { getPage } from "../redux/story/selectors";
import MagicModal from "./MagicModel";

const Magic = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    if (dangerousPage()) {
      loseStat(dispatch, "stamina", 2);
    }
  };

  const dangerousPage = () => {
    const acceptablePages = [1000, 1001, 1002, 1];
    return !acceptablePages.includes(_pageNumber);
  };

  return (
    <Container className="border text-center">
      <p className="h3 text-center">Magic</p>
      <Button onClick={handleShow} className={`mb-3 ${dangerousPage() ? "hoverWarning" : ""}`}>
        View Spell Book
      </Button>

      <Modal show={show} onHide={handleClose} className="tutorialModal">
        <Modal.Header closeButton className="mb-2">
          <h3 className="modalHeader mb-0">Spell Book</h3>
        </Modal.Header>
        <MagicModal />
      </Modal>
    </Container>
  );
};

export default Magic;
