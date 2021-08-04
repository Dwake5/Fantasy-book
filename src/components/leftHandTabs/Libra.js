import React from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { getLibra } from "../../redux/stats/selectors";
import { libraRestore, libraCure } from "../../redux/stats/actions";

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
    <Container className="customBorder sideBox text-center mb-2">
      <p className="h3 text-center">Libra</p>
      {_haveLibra && (
        <div className="d-flex flex-column">
          <p className="mb-3">Libra is with you!</p>
          <p className="mb-1 textSmall">
            Use Libra to:
          </p>
          <Button
            onClick={() => handleLibra("restore")}
            variant="secondary"
            className="mb-3"
          >
            Revitalize
          </Button>
          <Button
            onClick={() => handleLibra("cure")}
            variant="secondary"
            className="mb-3"
          >
            Cure
          </Button>
        </div>
      )}
      {!_haveLibra && <p>Libra will join you in the next adventure</p>}
    </Container>
  );
};

export default Stats;
