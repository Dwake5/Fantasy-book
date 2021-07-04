import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setEnemyStats } from "../redux/combat/actions";
import { gainStat } from "../redux/stats/actions";
import { nightCreatureFight } from "../redux/story/actions";
import { getNightCreaturePrevious } from "../redux/story/selectors";
import { diceRolls } from "../utils";
import NightCreaturesTable from "./NightCreaturesTable";

// Used in node 123, arrived from many places 84, 108, 283, combat leads 396, 421, 437
const NightCreatures = ({ cancelPause }) => {
  const dispatch = useDispatch();
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);
  const plusTwoNodes = [108, 283];
  const doAddTwo = plusTwoNodes.includes(_nightCreaturePrevious);
  const [alreadyRolled, setAlreadyRolled] = useState(false);
  const [rollText, setRollText] = useState("");
  const [healthText, setHealthText] = useState("");
  const nightCreatures = [
    { skill: 5, stamina: 5, name: "Giant Bat" },
    { skill: 5, stamina: 5, name: "Giant Bat" },
    { skill: 7, stamina: 8, name: "Wolfhound" },
    { skill: 8, stamina: 9, name: "Werewolf" },
  ];

  const handleRoll = () => {
    let dieRoll = diceRolls(1, true);
    if (doAddTwo) dieRoll = 4;
    setAlreadyRolled(true);
    cancelPause();
    if (dieRoll <= 4) {
      const monster = nightCreatures[dieRoll - 1];
      setEnemyStats(dispatch, monster.skill, monster.stamina, monster.name);
      setRollText(`You rolled a ${dieRoll} and a ${monster.name} attacks you!`);
      nightCreatureFight(dispatch, true);
      if (doAddTwo) {
        setHealthText(
          "You will gain 1 Stamina point for the disturbed rest after the fight."
        );
      }
    } else {
      setRollText(`You rolled a ${dieRoll} and have a peaceful nights sleep.`);
      nightCreatureFight(dispatch, false);
      if (doAddTwo) {
        setHealthText("You gain 2 Stamina points for the restful sleep.");
        gainStat(dispatch, "stamina", 2);
      }
    }
  };

  return (
    <Container>
      <NightCreaturesTable />
      <div className="text-center">
        {doAddTwo && (
          <div>
            <p className="mb-0">As you are in a safer place</p>
            <p>two points will be added to your die roll.</p>
          </div>
        )}
        <button
          onClick={handleRoll}
          type="button"
          className="btn btn-info mb-3"
          disabled={alreadyRolled}
        >
          Roll die
        </button>
        {rollText && <p className={`${healthText.length ? "mb-0" : "mb-3"}`}>{rollText}</p>}
        {healthText.length > 0 && <p>{healthText}</p>}
      </div>
    </Container>
  );
};

export default NightCreatures;
