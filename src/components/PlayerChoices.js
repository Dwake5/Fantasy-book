import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, payMoney } from "../redux/items/actions";
import {
  changeEatenToday,
  gainStat,
  loseLibra,
  playerGetsJann,
  playerLosesJann,
  visitWaterfall,
} from "../redux/stats/actions";
import { eatenToday } from "../redux/stats/selectors";
import { addOneToTraderItem, setPage } from "../redux/story/actions";

const PlayerChoices = ({ choices, setStayShowing, cost }) => {
  const dispatch = useDispatch();
  const _eatenToday = useSelector(eatenToday);

  const addItems = (items) => {
    items.forEach((item) => {
      getItem(dispatch, item);
    });
  };

  const handleChoice = (choice) => {
    const nodeVisiting = choice.goToPage;

    const oneTimeNodes = [107, 214, 22, 141, 5, 60];
    if (oneTimeNodes.includes(nodeVisiting)) {
      choice.visited = true;
    }

    if (nodeVisiting === 18) {
      const gainStamina = _eatenToday ? 1 : 2;
      gainStat(dispatch, "stamina", gainStamina);
      changeEatenToday(dispatch, true)
    }

    if (choice === null || choice === undefined) return;

    if (choice.cost > 0) payMoney(dispatch, choice.cost);

    if (choice.items) addItems(choice.items);

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
      default:
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
      if (key <= choices.length && key !== "0") {
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
