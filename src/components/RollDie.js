import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeItemAmount } from "../redux/items/actions";
import { loseStat } from "../redux/stats/actions";
import { diceRolls, pluralize, unblockChoice } from "../utils";

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
        setText(
          `You rolled a ${dieRoll}, and <b>lost ${dieRoll} Stamina ${pluralize(
            "point",
            dieRoll
          )}</b>.`
        );
      }
      changeItemAmount(dispatch, {name: "provisions", amount: 1})
      changeItemAmount(dispatch, {name: "beeswax", amount: 1})
    }

    if (pageType === "snakeBites") {
      loseStat(dispatch, "stamina", dieRoll);
      setText(
        `You rolled a ${dieRoll}, and <b>lost ${dieRoll} Stamina ${pluralize(
          "point",
          dieRoll
        )}</b>.`
      );
      if (dieRoll === 6) {
        unblockChoice(417, 1);
      } else {
        unblockChoice(417, 1);
      }
    }
  };

  return (
    <Container className="text-center px-0">
      <button
        onClick={handleDie}
        type="button"
        className="btn btn-danger mb-3"
        disabled={alreadyRolled}
      >
        Roll die
      </button>
      {alreadyRolled && <p className="mb-4" dangerouslySetInnerHTML={{ __html: text }}></p>}

      {alreadyRolled && pageType === "beeStings" && (
        <p className="text-left">
          Cutting open the hive on the ground, <b>you take with you the wax and the
          honey.</b> The honey will provide you with enough nourishment for one
          meal.
        </p>
      )}
    </Container>
  );
};

export default RollDie;
