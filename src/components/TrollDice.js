import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import gameData from "../assets/gameData";
import { ownItem } from "../redux/items/selectors";
import { loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { diceRolls, testYourLuck } from "../utils";

// Used on node 38, which then impacts 23. Lots of places lead here, 27 for example
const TrollDice = ({ cancelPause }) => {
  const dispatch = useDispatch();

  // handle die state
  const [alreadyRolled, setAlreadyRolled] = useState(false);
  const [rolledText, setRolledText] = useState(null);

  // handle luck state
  const [luckTested, setLuckTested] = useState(false);
  const [luckText, setLuckText] = useState(null);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const fixedLuckNeeded = useRef(null);
  const luckNeedToPass = _haveLuckAmulet ? _luck + 1 : _luck

  const handleDieRoll = () => {
    cancelPause(true);
    setAlreadyRolled(true);
    const rolled = diceRolls(1, true);
    setRolledText(`You rolled a ${rolled}.`);
    const unblock = Math.floor(rolled / 2)
    gameData[23].choices[unblock].blocked = false;
  };

  const handleTestLuck = () => {
    const [total, pass] = testYourLuck(luckNeedToPass);
    loseStat(dispatch, "luck", 1);
    setLuckText(`Test your Luck: ${pass ? "Success!" : "Failed."} You rolled a ${total}.`)
    setLuckTested(true);
    if (pass) {
      gameData[23].choices[0].blocked = true;
      gameData[23].choices[1].blocked = true;
      gameData[23].choices[2].blocked = true;
      gameData[23].choices[3].blocked = false;
    }
  };

  const [firstRun, setFirstRun] = useState(true);
  if (firstRun) {
    fixedLuckNeeded.current = luckNeedToPass;
    setFirstRun(false);
  }

  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <button
            onClick={handleDieRoll}
            type="button"
            className="btn btn-info mb-3"
            disabled={alreadyRolled}
          >
            Roll 1 Die
          </button>
          {rolledText && <p>{rolledText}</p>}
        </Col>
        <Col>
          <button
            onClick={handleTestLuck}
            type="button"
            className="btn btn-warning mb-3"
            disabled={luckTested}
          >
            Test your Luck
          </button>
          <p className="mb-1">
            You would need a {fixedLuckNeeded.current || luckNeedToPass} or lower to
            pass.
          </p>
          {luckText && <p>{luckText}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default TrollDice;
