import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loseStat, takeDamage } from "../../redux/stats/actions";
import { getStat } from "../../redux/stats/selectors";
import { getPitfallPrevious } from "../../redux/story/selectors";
import { diceRolls, unblockChoice } from "../../utils";

// Used on node 277. Got here from 24,290,439,330,424.
// 330 + 3 to die roll
// 424 - 3 to die roll + can't die
const PitFall = ({ rerender }) => {
  const dispatch = useDispatch();
  const _luck = useSelector((state) => getStat(state, "luck"));
  const [rollText, setRollText] = useState([]);
  const [alreadyFell, setAlreadyFell] = useState(false);
  const _cameFrom = useSelector(getPitfallPrevious);

  const modifierText = (roll) => {
    return roll ? `(${roll > 0 ? "+" : ""}${roll})` : "";
  };

  const getText = (type, rolled, rollChange) => {
    const newRolled = rolled.toString().replace(",", ", ");
    const textMap = {
      doubleSix: `Broken Neck. <br> You rolled a ${newRolled} ${modifierText(rollChange)}`,
      highScore: `Minor Brusing. <br> You rolled a ${newRolled} ${modifierText(rollChange)} and <b>lost 1 Stamina Point.</b>`,
      lowScore: `Twisted Arm. <br> You rolled a ${newRolled} ${modifierText(rollChange)} and <b>lost 3 Stamina Points.</b>`
    };

    return textMap[type];
  };

  const checkDamage = () => {
    let rolled = diceRolls(2);
    let rollTotal = rolled.reduce((a, b) => a + b);
    const doubleSix = rollTotal === 12;
    setAlreadyFell(true);
    let rollChange = 0;
    if (_cameFrom !== 0) {
      if (_cameFrom === 330) {
        rollTotal += 3;
        rollChange = 3;
      }
      if (_cameFrom === 424) {
        rollTotal -= 3;
        rollChange = -3;
      }
    }
    const success = rollTotal < _luck;

    if (doubleSix && _cameFrom !== 424) {
      setRollText(getText("doubleSix", rolled, rollChange));
      // todo lose all hp
      loseStat(dispatch, "stamina", 24);
      unblockChoice(277, 1);
      rerender(true);
    } else if (success) {
      setRollText(getText("highScore", rolled, rollChange));
      takeDamage(dispatch, 1);
      unblockChoice(277, 0);
    } else {
      setRollText(getText("lowScore", rolled, rollChange))
      takeDamage(dispatch, 3);
      unblockChoice(277, 0);
    }
  };

  return (
    <Container className="text-center">
      <p className="mb-0">Less than {_luck}: 1 Stamina loss</p>
      <p className={`${_cameFrom === 424 ? "mb-3" : "mb-0"}`}>
        More or equal to {_luck}: 3 Stamina loss
      </p>
      {_cameFrom !== 424 && <p className="mb-3">Roll a double 6: Death</p>}

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
