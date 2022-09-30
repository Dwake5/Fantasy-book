import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { changeItemAmount } from "../../redux/items/actions";
import { ownItem } from "../../redux/items/selectors";
import { loseStat, scorpionSting } from "../../redux/stats/actions";
import { getStat } from "../../redux/stats/selectors";
import { testYourLuck } from "../../utils";

// Used on node 258, arrived from 145, 403
const PickpocketBox = () => {
  const dispatch = useDispatch();
  const [keyLeft, setKeyLeft] = useState(1);
  const [goldLeft, setGoldLeft] = useState(5);
  const [keyText, setKeyText] = useState([]);
  const [goldText, setGoldText] = useState([]);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const luckNeedToPass = _haveLuckAmulet ? _luck + 1 : _luck;

  const grabItem = (item) => {
    const [total, pass] = testYourLuck(luckNeedToPass);
    if (!pass) scorpionSting(dispatch)
    loseStat(dispatch, "luck", 1);

    if (item === "oldKey") {
      setKeyText([
        ...keyText,
        `${pass ? "Success!" : "Fail."} You rolled ${total} and ${
          pass
            ? "took the key."
            : "were stung by the Scorpion, losing half your Stamina!"
        }`,
      ]);
      if (pass) {
        changeItemAmount(dispatch, { name: item, amount: 1 });
        setKeyLeft(0);
      }
    }
    if (item === "gold") {
      setGoldText([
        ...goldText,
        `${pass ? "Success!" : "Fail."} You rolled ${total} and ${
          pass
            ? "took a gold piece."
            : "were stung by the Scorpion, losing half your Stamina!"
        }`,
      ]);
      if (pass) {
        changeItemAmount(dispatch, { name: item, amount: 1 });
        setGoldLeft(goldLeft - 1);
      }
    }
  };

  return (
    <Container className="mb-4">
      <p className="mb-3">
        You would need a {luckNeedToPass} or lower to avoid the scorpion.
      </p>
      <Row className="mb-5">
        <Col>
          <p className="mb-1">Try to take the key:</p>
          <button
            onClick={() => grabItem("oldKey")}
            type="button"
            className="btn btn-warning mb-3"
            disabled={keyLeft === 0}
          >
            Test your Luck
          </button>
          {keyText.length >= 1 &&
            keyText.map((text) => {
              return <p className="mb-1">{text}</p>;
            })}
        </Col>
        <Col>
          <p className="mb-1">Try to take a coin, {goldLeft} left.</p>
          <button
            onClick={() => grabItem("gold")}
            type="button"
            className="btn btn-warning mb-3"
            disabled={goldLeft === 0}
          >
            Test your Luck
          </button>
          {goldText.length >= 1 &&
            goldText.map((text) => {
              return <p className="mb-1">{text}</p>;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default PickpocketBox;
