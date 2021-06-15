import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loseStat } from "../redux/stats/actions";
import { diceRolls, pluralize } from "../utils";

// Used in node 270
const BeeStings = ({ cancelPause }) => {
  const dispatch = useDispatch();
  const [alreadyStung, setAlreadyStung] = useState(false);
  const [stungText, setStungText] = useState("");

  const handleSting = () => {
    setAlreadyStung(true);
    cancelPause(true);

    const dieRoll = diceRolls(1, true);
    if (dieRoll > 4) {
      setStungText(`You rolled a ${dieRoll}, got lucky and avoided any damage!`);
    } else {
      loseStat(dispatch, "stamina", dieRoll);
      setStungText(`You rolled a ${dieRoll}, and <b>lost ${dieRoll} Stamina ${pluralize("point", dieRoll)}</b>.`);
    }
  };

  return (
    <Container className="text-center">
      <button
        onClick={handleSting}
        type="button"
        className="btn btn-success mb-3"
        disabled={alreadyStung}
      >
        Roll die
      </button>
      {alreadyStung && <p dangerouslySetInnerHTML={{ __html: stungText }}></p>}
    </Container>
  );
};

export default BeeStings;
