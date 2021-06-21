import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSkill } from "../redux/stats/selectors";
import { smashOpenDoor } from "../redux/story/actions";
import { diceRolls } from "../utils";

// Used in 228, got here from 66
const OpenDoor = () => {
  const dispatch = useDispatch();
  const [rollText, setRollText] = useState([]);
  const [rolls, setRolls] = useState(0);
  const [rollTotal, setRollTotal] = useState(0);
  const _skill = useSelector(getSkill);

  const rollDie = () => {
    const rolled = diceRolls(1, true);
    setRolls(rolls + 1);
    setRollTotal(rollTotal + rolled);
    setRollText([...rollText, `${rolled}`]);
  };

  useEffect(() => {
    if (rolls >= 3) {
      const success = rollTotal < _skill
      smashOpenDoor(dispatch, success);
    }
  }, [rolls, _skill, rollTotal, dispatch]);

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
    </Container>
  );
};

export default OpenDoor;
