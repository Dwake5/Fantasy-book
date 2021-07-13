import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { takeDamage } from "../../redux/stats/actions";
import { getSkill } from "../../redux/stats/selectors";
import { blockChoice, diceRolls, unblockChoice } from "../../utils";

// Used on node 93. Got here from 268.
const BreakDoor = () => {
  const dispatch = useDispatch();
  const _skill = useSelector(getSkill);
  const [rollText, setRollText] = useState([]);
  const [success, setSuccess] = useState(false);

  const tryToBreakDoor = () => {
    const rolled = diceRolls(2, true);
    const success = rolled < _skill;
    takeDamage(dispatch, 1);
    unblockChoice(93, 1);
    if (success) {
      setSuccess(true);
      unblockChoice(93, 0);
      blockChoice(93, 1)
      setRollText([...rollText, `Success: You rolled a ${rolled}!`]);
    } else {
      setRollText([...rollText, `Fail: You rolled a ${rolled}.`]);
    }
  };

  return (
    <Container>
      <p className="mb-0">Try to break open the door</p>
      <p>To succeed, you would need to roll a {_skill - 1} or lower</p>
      <button
        type="button"
        className="btn btn-danger mb-3"
        disabled={success}
        onClick={() => tryToBreakDoor()}
      >
        Attempt
      </button>
      {rollText.length > 0 &&
        rollText.map((text) => <p className="mb-0">{text}</p>)}
    </Container>
  );
};

export default BreakDoor;
