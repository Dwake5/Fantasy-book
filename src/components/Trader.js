import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTraderViews } from "../redux/story/selectors";
import { diceRolls } from "../../src/utils";
import gameData from "../assets/gameData";

const Trader = ({ itemViews, dice, setItem }) => {
  const _traderViews = useSelector(getTraderViews);
  const [haveRolled, setHaveRolled] = useState(false);
  const [diceText, setDiceText] = useState("");

  const handleDiceRolls = () => {
    setHaveRolled(true);
    const rolls = diceRolls(dice);
    let localDiceText = `You rolled ${rolls.toString().replace(",", ", ")}`;

    const totalRoll = rolls.reduce((a, b) => a + b);
    if (dice > 1) {
      localDiceText += ` for a total of ${totalRoll}`;
    }

    setDiceText(localDiceText);
    const findItem = gameData[setItem].choices[0].items[0];
    findItem.cost = totalRoll;
  };

  if (itemViews !== undefined) {
    if (_traderViews < 1) return null;
    return (
      <Container>
        <p>
          You have viewed {_traderViews} item{_traderViews === 1 ? "" : "s"}
        </p>
      </Container>
    );
  }

  if (dice > 0) {
    return (
      <Container className="text-center mb-3">
        {!haveRolled && (
          <>
            <p>
              Roll {dice} {dice === 1 ? "die" : "dice"}
            </p>
            <button onClick={handleDiceRolls}>Roll</button>
          </>
        )}
        {haveRolled && <p>{diceText}</p>}
      </Container>
    );
  }
};

export default Trader;
