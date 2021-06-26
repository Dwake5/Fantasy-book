import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import { ownItem } from "../redux/items/selectors";
import { loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { diceRolls, testYourLuck, unblockChoice } from "../utils";

// Used on node 366, came from 63
const SnakeBites = () => {
  const dispatch = useDispatch();

  // handle die state
  const [alreadyRolled, setAlreadyRolled] = useState(false);
  const [rolledText, setRolledText] = useState(null);

  // handle luck state
  const [luckText, setLuckText] = useState(null);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const fixedLuckNeeded = useRef(null);
  const luckNeedToPass = _haveLuckAmulet ? _luck + 1 : _luck;
  const [canRoll, setCanRoll] = useState(false);

  const handleDieRoll = () => {
    setAlreadyRolled(true);
    const rolled = diceRolls(1, true);
    if (rolled === 6) {
      setCanRoll(true);
    } else {
      unblockChoice(366, 1);
    }
    setRolledText(`You rolled a ${rolled}, and lost that much Stamina.`);
    // loseStat(dispatch, "stamina", rolled);
  };

  const handleTestLuck = () => {
    const [total, pass] = testYourLuck(luckNeedToPass);
    loseStat(dispatch, "luck", 1);
    setLuckText(
      `Test your Luck: ${pass ? "Success!" : "Failed."} You rolled a ${total}.`
    );
    setCanRoll(false);
    if (pass) {
      unblockChoice(366, 1);
    } else {
      unblockChoice(366, 0);
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
            className="btn btn-danger mb-3"
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
            disabled={!canRoll}
          >
            Test your Luck
          </button>
          <p className="mb-1">
            You would need a {fixedLuckNeeded.current || luckNeedToPass} or
            lower to pass.
          </p>
          {luckText && <p>{luckText}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default SnakeBites;
