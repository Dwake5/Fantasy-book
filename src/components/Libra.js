import React from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import { getLibra } from "../redux/stats/selectors";
import { libraRestore, libraCure } from "../redux/stats/actions";

const Stats = () => {
  const dispatch = useDispatch();
  const _haveLibra = useSelector(getLibra);

  const handleLibra = (type) => {
    if (type === "restore") {
      libraRestore(dispatch);
    }
    if (type === "cure") {
      libraCure(dispatch);
    }
  };

  return (
    <Container className="border text-center mb-2">
      <p className="h3 text-center">Libra</p>
      {_haveLibra && (
        <>
          <p className="mb-3">Libra is with you!</p>
          <p className="mb-1 textSmall">
            Fully restore all stats to thier initial values:
          </p>
          <Button
            onClick={() => handleLibra("restore")}
            variant="secondary"
            className="mb-3"
          >
            Restore
          </Button>
          <p className="mb-1 textSmall">Cure all diseases and curses:</p>
          <Button
            onClick={() => handleLibra("cure")}
            variant="secondary"
            className="mb-3"
          >
            Cure
          </Button>
        </>
      )}
      {!_haveLibra && <p>Libra will join you in the next adventure</p>}
    </Container>
  );
};

export default Stats;
