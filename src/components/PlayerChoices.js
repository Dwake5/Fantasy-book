import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItem,
  robbedByBandits,
  payMoney,
  loseEquippedWeapon,
  equipSpecificWeapon,
} from "../redux/items/actions";
import { getEquippedWeapon } from "../redux/items/selectors";
import {
  changeEatenToday,
  gainStat,
  loseLibra,
  playerGetsJann,
  playerLosesJann,
  visitWaterfall,
} from "../redux/stats/actions";
import { eatenToday } from "../redux/stats/selectors";
import {
  addToTraderItems,
  pitfallPrevious,
  setPage,
} from "../redux/story/actions";

const PlayerChoices = ({ choices, setStayShowing, pause }) => {
  const dispatch = useDispatch();
  const _eatenToday = useSelector(eatenToday);
  const _equippedWeapon = useSelector(getEquippedWeapon);

  const addItems = (items) => {
    items.forEach((item) => {
      getItem(dispatch, item);
    });
  };

  const handleChoice = (choice) => {
    const nodeVisiting = choice.goToPage;

    const oneTimeNodes = [107, 214, 22, 141, 5, 60]; // trader 1 items
    if (oneTimeNodes.includes(nodeVisiting)) {
      addToTraderItems(dispatch, nodeVisiting);
    }

    const changeFallNodes = [330, 424];
    if (changeFallNodes.includes(nodeVisiting)) {
      pitfallPrevious(dispatch, nodeVisiting);
    }

    if (nodeVisiting === 18) {
      const gainStamina = _eatenToday ? 1 : 2;
      gainStat(dispatch, "stamina", gainStamina);
      changeEatenToday(dispatch, true);
    }

    if (nodeVisiting === 75 && choice.loseWeapon) {
      loseEquippedWeapon(dispatch);
      equipSpecificWeapon(dispatch, "craftedSword");
    }

    if (nodeVisiting === 261) {
      // bandits rob you
      robbedByBandits(dispatch, _equippedWeapon);
    }

    if (choice === null || choice === undefined) return;

    if (choice.cost > 0) payMoney(dispatch, choice.cost);

    if (choice.items) addItems(choice.items);

    switch (nodeVisiting) {
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
      if (key <= choices.length && key !== "0" && pause !== true) {
        const choice = choices[key - 1];
        if (choice.blocked) return;
        handleChoice(choice);
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
    if (pause) return null;
    return choices.map((choice, i) => {
      return (
        <>
          {choice.blocked !== true ? (
            <p
              key={choice.goToPage + i}
              className="userChoice"
              onClick={() => handleChoice(choice)}
            >
              {i + 1}: {choice.text}
            </p>
          ) : (
            <p key={i} className="blockedChoice">
              {i + 1}: {choice.text}
            </p>
          )}
        </>
      );
    });
  };

  return <div className="text-center">{displayOptions()}</div>;
};

export default PlayerChoices;
