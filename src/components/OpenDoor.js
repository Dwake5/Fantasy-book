import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getSkill } from "../redux/stats/selectors";
import { blockChoice, diceRolls, unblockChoice } from "../utils";

// Used in 228, got here from 66
const OpenDoor = () => {
  const [rollText, setRollText] = useState([]);
  const [rolls, setRolls] = useState(0);
  const [rollTotal, setRollTotal] = useState(0);
  const [text, setText] = useState("");
  const _skill = useSelector(getSkill);

  const rollDie = () => {
    const rolled = diceRolls(1, true);
    setRolls(rolls + 1);
    setRollTotal(rollTotal + rolled);
    setRollText([...rollText, `${rolled}`]);
    if (rolls === 2) handleFunction();
  };

  const handleFunction = () => {
    const success = rollTotal < _skill;
    if (success) {
      unblockChoice(228, 0);
      blockChoice(228, 1);
      blockChoice(228, 2);
    } else {
      blockChoice(228, 0);
      unblockChoice(228, 1);
      unblockChoice(228, 2);
    }
    setText(success ? "Success" : "Fail")
  };

  return (
    <Container>
      <div className="d-flex align-items-baseline">
        <button
          disabled={rolls >= 3}
          type="button"
          className="btn btn-info mb-3 mr-3"
          onClick={rollDie}
        >
          Roll a die
        </button>
        {rollText.length >= 1 && <p>You have rolled: {rollText.join(", ")}</p>}
      </div>
      <p className="mb-1">
        Need less than {_skill} total to break open the door.
      </p>
      <p>Total: {rollTotal}</p>
      {text && <p>{text}</p>}
    </Container>
  );
};

export default OpenDoor;
