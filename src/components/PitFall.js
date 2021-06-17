import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { pitfallStatus } from "../redux/story/actions";
import { getPitfallPrevious } from "../redux/story/selectors";
import { diceRolls } from "../utils";

// Used on node 277. Got here from 24,290,439,330,424.
// 330 + 3 to die roll
// 424 - 3 to die roll + can't die
// This should be refactored...
const PitFall = () => {
  const dispatch = useDispatch();
  const _luck = useSelector((state) => getStat(state, "luck"));
  const [rollText, setRollText] = useState([]);
  const [alreadyFell, setAlreadyFell] = useState(false);
  const cameFrom = useSelector(getPitfallPrevious);

  const checkDamage = () => {
    let rolled = diceRolls(2);
    let rollTotal = rolled.reduce((a, b) => a + b);
    const doubleSix = rollTotal === 12;
    setAlreadyFell(true);
    let rollChange = 0;
    if (cameFrom !== 0) {
      if (cameFrom === 330) {
        rollTotal += 3;
        rollChange = 3;
      }
      if (cameFrom === 424) {
        rollTotal -= 3;
        rollChange = -3;
      }
    }
    const success = rollTotal < _luck;
    const modifierText = () =>
      rollChange ? `(${rollChange > 0 ? "+" : ""}${rollChange})` : "";

    if (doubleSix && cameFrom !== 424) {
      setRollText(
        `Broken Neck. <br> You rolled a ${rolled
          .toString()
          .replace(",", ", ")} ${modifierText()}`
      );
      loseStat(dispatch, "stamina", 24);
      pitfallStatus(dispatch, "dead");
    } else if (success) {
      setRollText(
        `Minor Brusing. <br> You rolled a ${rolled
          .toString()
          .replace(
            ",",
            ", "
          )} ${modifierText()} and <b>lost 1 Stamina Point.</b>`
      );
      loseStat(dispatch, "stamina", 1);
      pitfallStatus(dispatch, "passed");
    } else {
      setRollText(
        `Twisted Arm. <br> You rolled a ${rolled
          .toString()
          .replace(
            ",",
            ", "
          )} ${modifierText()} and <b>lost 3 Stamina Points.</b>`
      );
      loseStat(dispatch, "stamina", 3);
      pitfallStatus(dispatch, "passed");
    }
  };

  return (
    <Container className="text-center">
      <p className="mb-0">Less than {_luck}: 1 Stamina loss</p>
      <p className={`${cameFrom === 424 ? "mb-3" : "mb-0"}`}>
        More or equal to {_luck}: 3 Stamina loss
      </p>
      {cameFrom !== 424 && <p className="mb-3">Roll a double 6: Death</p>}

      <button
        type="button"
        className={`btn btn-danger ${alreadyFell ? "mb-1" : "mb-5"}`}
        disabled={alreadyFell}
        onClick={() => checkDamage()}
      >
        Check Fall Damage
      </button>
      {rollText.length > 0 && (
        <p dangerouslySetInnerHTML={{ __html: rollText }}></p>
      )}
    </Container>
  );
};

export default PitFall;
