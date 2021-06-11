import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getItem } from "../redux/items/actions";
import {
  loseLibra,
  playerGetsJann,
  playerLosesJann,
  visitWaterfall,
} from "../redux/stats/actions";
import { addOneToTraderItem, setPage } from "../redux/story/actions";

const PlayerChoices = ({ choices, setStayShowing }) => {
  const dispatch = useDispatch();

  const handleChoice = (choice) => {
    if (choice === null || choice === undefined) return;
    const nodeVisiting = choice.goToPage;

    switch (nodeVisiting) {
      case 280:
        addOneToTraderItem(dispatch);
        break;
      case 204:
        visitWaterfall(dispatch);
        break;
      case 37:
      case 111:
        playerGetsJann(dispatch);
        break;
      case 205:
        playerLosesJann(dispatch);
        break;
      case 184: // lose spell book page
        getItem(dispatch, { name: "spellbookPage", amount: -1 });
        break;
      
      default:
        console.log("uneventful node");
    }
    if (choice.needLibra) {
      loseLibra(dispatch);
    }
    setPage(dispatch, choice.goToPage);
    setStayShowing(false);
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      const key = event.key;
      if (key <= choices.length) {
        handleChoice(choices[key - 1]);
      }
    },
    [choices]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const displayOptions = () => {
    return choices.map((choice, i) => {
      return (
        <p key={i} className="userChoice" onClick={() => handleChoice(choice)}>
          {i + 1}: {choice.text}
        </p>
      );
    });
  };

  return <div className="text-center">{displayOptions()}</div>;
};

export default PlayerChoices;
