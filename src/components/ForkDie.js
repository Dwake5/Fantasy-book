import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setForkDie } from "../redux/story/actions";
import { diceRolls } from "../utils";

// Used on node 254. Got here from 25.
// A dice determines which of three routes you take.
const ForkDie = () => {
  const dispatch = useDispatch();
  const [rollText, setRollText] = useState(null);

  const rollDie = () => {
    const rolled = diceRolls(1, true);
    setRollText(rolled);
    setForkDie(dispatch, rolled)
  };

  return (
    <Container>
        <button
          disabled={rollText !== null}
          type="button"
          className={`btn btn-success mr-3 ${rollText !== null ? "mb-2" : "mb-5"}`}
          onClick={rollDie}
        >
          Roll a die
        </button>
      {rollText !== null && <p className="mb-4">You rolled a {rollText}</p>}
    </Container>
  );
};

export default ForkDie;
