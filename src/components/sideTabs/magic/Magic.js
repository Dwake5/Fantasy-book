import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { takePureDamage } from "../../../redux/stats/actions";
import { getStat } from "../../../redux/stats/selectors";
import { getPage } from "../../../redux/story/selectors";
import { SideTabContainer, SideTabHeader } from "../../shared/SideTabComponents";
import MagicModal from "./MagicModel";
import { BlueButton } from '../../shared'

const Magic = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _stamina = useSelector((state) => getStat(state, "stamina"));
  const spellbookViewPenalty = 2;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // Numbers greater than 1000 are starting / tutorial pages
  const tutorialStart = 1000;
  const leftTutorial = _pageNumber < tutorialStart;

  const handleShow = () => {
    setShow(true);
    if (leftTutorial) takePureDamage(dispatch, 2);
  };

  return (
    <SideTabContainer>
      <SideTabHeader>Spell Book</SideTabHeader>
      <BlueButton
        onClick={handleShow}
        className={`mb-3 ${leftTutorial ? "hoverWarning" : ""}`}
        disabled={leftTutorial && _stamina <= spellbookViewPenalty}
      >
        View
      </BlueButton>

      <Modal show={show} onHide={handleClose} className="tutorialModal">
        <Modal.Header closeButton className="mb-2">
          <h3 className="modalHeader mb-0">Spell Book</h3>
        </Modal.Header>
        <MagicModal />
      </Modal>
    </SideTabContainer>
  );
};

export default Magic;
