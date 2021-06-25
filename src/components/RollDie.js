import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import gameData from "../assets/gameData";
import { loseStat } from "../redux/stats/actions";
import { diceRolls, pluralize } from "../utils";

// Used in node 270, arrived from 200
// Used on node 417, arrived from 63
const RollDie = ({ cancelPause, pageType }) => {
  const dispatch = useDispatch();
  const [alreadyRolled, setAlreadyRolled] = useState(false);
  const [text, setText] = useState("");

  const handleDie = () => {
    setAlreadyRolled(true);
    cancelPause(true);
    const dieRoll = diceRolls(1, true);

    if (pageType === "beeStings") {
      if (dieRoll > 4) {
        setText(`You rolled a ${dieRoll}, got lucky and avoided any damage!`);
      } else {
        loseStat(dispatch, "stamina", dieRoll);
        setText(`You rolled a ${dieRoll}, and <b>lost ${dieRoll} Stamina ${pluralize("point", dieRoll)}</b>.`);
      }
    }
    if (pageType === "snakeBites") {
      loseStat(dispatch, "stamina", dieRoll);
      setText(`You rolled a ${dieRoll}, and <b>lost ${dieRoll} Stamina ${pluralize("point", dieRoll)}</b>.`);
      if (dieRoll === 6) {
        gameData[417].choices[1].blocked = false
      } else {
        gameData[417].choices[0].blocked = false
      }
    }
  };

  return (
    <Container className="text-center">
      <button
        onClick={handleDie}
        type="button"
        className="btn btn-danger mb-3"
        disabled={alreadyRolled}
      >
        Roll die
      </button>
      {alreadyRolled && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
    </Container>
  );
};

export default RollDie;
