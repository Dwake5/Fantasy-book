import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { libraCure, libraRestore } from "../../redux/stats/actions";
import { getLibra } from "../../redux/stats/selectors";
import { SideTabContainer, SideTabHeader } from "../shared/SideTabComponents";

const Stats = () => {
  const dispatch = useDispatch();
  const _haveLibra = useSelector(getLibra);

  const [usingRestore, changeRestore] = useState(false);
  const [usingCure, changeCure] = useState(false);

  // Because libra is one use only, we add in a safe check. 
  // 1st click: Show text "Are you sure?"
  // 2nd click: Actually performs the function
  // After 5 seconds of "Are you sure?" it reverts, else it would show forever.
  const handleLibra = (type) => {
    if (type === "restore") {
      if (usingRestore) {
        libraRestore(dispatch);
      } else {
        changeRestore(true);
        setTimeout(() => changeRestore(false), 5000);
      }
    }

    if (type === "cure") {
      if (usingCure) {
        libraCure(dispatch);
      } else {
        changeCure(true);
        setTimeout(() => changeCure(false), 5000);
      }
    }
  };

  return (
    <SideTabContainer>
      <SideTabHeader>Libra</SideTabHeader>
      {_haveLibra && (
        <div className="d-flex flex-column">
          <p className="mb-3">Libra is with you!</p>
          <p className="mb-1 textSmall">Use her to:</p>
          <Button
            onClick={() => handleLibra("restore")}
            variant="secondary"
            className="mb-3"
          >
            {usingRestore ? "Are you sure?" : "Revitalize"}
          </Button>
          <Button
            onClick={() => handleLibra("cure")}
            variant="secondary"
            className="mb-3"
          >
            {usingCure ? "Are you sure?" : "Cure"}
          </Button>
        </div>
      )}
      {!_haveLibra && <p>Libra will join you in the next adventure</p>}
    </SideTabContainer>
  );
};

export default Stats;
