import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { diceRolls } from "../../src/utils";

const Trader = ({ itemViews, dice, changeCost, optional, itemName }) => {
  const [haveRolled, setHaveRolled] = useState(false);
  const [diceText, setDiceText] = useState("");

  const handleDiceRolls = () => {
    setHaveRolled(true);
    const rolls = diceRolls(dice);
    let localDiceText = `You rolled ${dice === 1 ? "a" : ""} ${rolls
      .toString()
      .replace(",", " + ")}.`;

    const totalRoll = rolls.reduce((a, b) => a + b);
    if (dice > 1) {
      localDiceText += ` The ${itemName}'s cost is now ${totalRoll}.`;
    }
    if (dice === 1) {
      localDiceText += ` Which is now the ${itemName}'s cost.`;
    }

    setDiceText(localDiceText);
    changeCost(totalRoll);
  };

  if (itemViews !== undefined) {
    if (itemViews < 1) return null;
    return (
      <Container>
        <p>
          You have viewed {itemViews} item{itemViews === 1 ? "" : "s"}
        </p>
      </Container>
    );
  }

  if (dice > 0) {
    return (
      <Container className="text-center mb-3">
        <>
          <p>
            Barter with {dice} {dice === 1 ? "die" : "dice"}
          </p>
          <button
            onClick={handleDiceRolls}
            type="button"
            className="btn btn-success mb-3"
            disabled={haveRolled}
          >
            Barter?
          </button>
        </>

        {(haveRolled || optional) && (
          <p>{diceText || `The ${itemName} currently costs 7 Gold Pieces`}</p>
        )}
      </Container>
    );
  }
};

export default Trader;
