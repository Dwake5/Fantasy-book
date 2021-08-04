import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { takePureDamage } from "../../redux/stats/actions";
import { loseStat } from "../../redux/stats/actions";
import { getStat } from "../../redux/stats/selectors";
import { getPage } from "../../redux/story/selectors";
import MagicModal from "./MagicModel";

const Magic = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _stamina = useSelector((state) => getStat(state, "stamina"));
  const spellbookViewPenalty = 2;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  setShow(true);
  
  const hasLeftTutorialPages = () => {
    const acceptablePages = [1000, 1001, 1002, 1003];
    return !acceptablePages.includes(_pageNumber);
  };

  const leftTutorial = hasLeftTutorialPages();
  
  if (leftTutorial) {
    loseStat(dispatch, "stamina", spellbookViewPenalty);
  }

  const handleShow = () => {
    setShow(true);
    if (leftTutorial) takePureDamage(dispatch, 2);
  };

  return (
    <Container className="customBorder sideBox text-center mb-2">
      <p className="h3 text-center">Magic</p>
      <Button
        onClick={handleShow}
        className={`mb-3 ${leftTutorial ? "hoverWarning" : ""}`}
        disabled={_stamina <= spellbookViewPenalty}
      >
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
