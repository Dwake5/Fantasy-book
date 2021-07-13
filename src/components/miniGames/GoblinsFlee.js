import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExtraEnemies, setEnemyStats } from "../../redux/combat/actions";
import { diceRolls, unblockChoice } from "../../utils";

// Node 407, came from 217
const GoblinsFlee = ({ rerender }) => {
  const dispatch = useDispatch();
  const [goblin1Fled, setGoblin1Fled] = useState(false);
  const [goblin1Rolled, setGoblin1Rolled] = useState(false);
  const [goblin2Fled, setGoblin2Fled] = useState(false);
  const [goblin2Rolled, setGoblin2Rolled] = useState(false);
  const [rolledTimes, setRolledTimes] = useState(0);
  const [goblin1Text, setGoblin1Text] = useState("");
  const [goblin2Text, setGoblin2Text] = useState("");

  const roll = (number) => {
    setRolledTimes((r) => r + 1);
    const rolled = diceRolls(2, true);
    let pass;
    if (number === 0) {
      pass = rolled >= 6;
      setGoblin1Fled(pass);
      setGoblin1Rolled(true);
      setGoblin1Text(
        `You rolled a ${rolled}, the Goblin ${
          pass ? "runs off." : "advances towards you."
        }`
      );
    }
    if (number === 1) {
      pass = rolled >= 5;
      setGoblin2Fled(pass);
      setGoblin2Rolled(true);
      setGoblin2Text(
        `You rolled a ${rolled}, the Goblin ${
          pass ? "runs off." : "advances towards you."
        }`
      );
    }
  };

  useEffect(() => {
    if (rolledTimes < 2) return;
    const goblin1alive = !goblin1Fled;
    const goblin2alive = !goblin2Fled;
    if (goblin1alive || goblin2alive) {
      unblockChoice(407, 0);
    }
    if (goblin1alive && goblin2alive) {
      setEnemyStats(dispatch, 6, 4, "Goblin 2");
      addExtraEnemies(dispatch, [{ skill: 5, stamina: 5, name: "Goblin 3" }]);
    } else if (goblin1alive) {
      setEnemyStats(dispatch, 6, 4, "Goblin 2");
    } else if (goblin2alive) {
      setEnemyStats(dispatch, 5, 5, "Goblin 3");
    } else {
      unblockChoice(407, 1);
    }
    rerender(true);
  }, [dispatch, goblin1Fled, goblin2Fled, rolledTimes, rerender]);

  return (
    <Row>
      <Col>
        <p>Their scores are:</p>
        <Row>
          <Col xs={5} className="d-flex">
            <p>
              <b>SECOND GOBLIN Skill 6 Stamina 4</b>
            </p>
          </Col>
          <Col xs={1}>
            <button
              disabled={goblin1Rolled}
              onClick={() => roll(0)}
              className="btn btn-sm btn-info ml-3 mb-3"
            >
              Roll
            </button>
          </Col>
          <Col>
            {goblin1Text && <p className="text-center">{goblin1Text}</p>}
          </Col>
        </Row>
        <Row>
          <Col xs={5} className="d-flex">
            <p>
              <b>THIRD GOBLIN Skill 5 Stamina 5</b>
            </p>
          </Col>
          <Col xs={1}>
            <button
              disabled={goblin2Rolled}
              onClick={() => roll(1)}
              className="btn btn-sm btn-info ml-3 mb-3"
            >
              Roll
            </button>
          </Col>
          <Col>
            {goblin2Text && <p className="text-center">{goblin2Text}</p>}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GoblinsFlee;
