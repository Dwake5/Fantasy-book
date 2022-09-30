import React, { useState } from "react";
import { diceRolls } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { getStat } from "../../redux/stats/selectors";
import { ownItem } from "../../redux/items/selectors";
import { loseStat } from "../../redux/stats/actions";

// Used in 165, got here from 63
const KillSnakes = ({ cancelPause }) => {
  const dispatch = useDispatch();
  const [successCount, setSuccessCount] = useState(0);
  const [luckText, setLuckText] = useState([])
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const luckNeedToPass = _haveLuckAmulet ? _luck + 1 : _luck;

  const testLuck = () => {
    const rolled = diceRolls(2, true);
    const success = rolled <= luckNeedToPass;
    const newSuccess = success ? successCount + 1 : 0;
    loseStat(dispatch, 'luck', 1)
    if (success) {
      setSuccessCount(newSuccess)
      setLuckText([...luckText, `Success! You rolled a ${rolled}.`])
    } else {
      setSuccessCount(newSuccess)
      loseStat(dispatch, 'stamina', 3)
      setLuckText([...luckText, `Fail. You rolled a ${rolled} and lost 3 Stamina points.`])
    }
    if (newSuccess >= 3) cancelPause()
  };

  return (
    <Container>
      <b>Try to kill all the snakes</b>
      <p>Successful attempts in a row: {successCount}</p>
      <div className="d-flex align-items-baseline">
        <button
          disabled={successCount >= 3}
          type="button"
          className="btn btn-warning mb-3 mr-3"
          onClick={() => testLuck()}
        >
          Test your Luck
        </button>
        <p>You would need a {luckNeedToPass} or lower to pass.</p>
      </div>
      {luckText.length > 0 && luckText.slice(-5).map((text, i) => {
        return <p key={i} className="mb-1">{text}</p>
      })}
    </Container>
  );
};

export default KillSnakes;
