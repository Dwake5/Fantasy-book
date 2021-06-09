import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../redux/items/actions";
import { addOneToTraderItem, setPage } from "../redux/story/actions";

const PlayerChoices = ({choices, playerItems, setStayShowing}) => {
  const dispatch = useDispatch();

  const handleChoice = (choice) => {
    if (choice === null || choice === undefined) return;
    if (choice.items?.length) {
      setItems(dispatch, choice.items, playerItems);
    }
    if (choice.goToPage === 280) {
      addOneToTraderItem(dispatch);
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
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [handleUserKeyPress]);

  
  const displayOptions = () => {
    return choices
      .map((choice, i) => {
        return (
          <p
            key={i}
            className="userChoice"
            onClick={() => handleChoice(choice)}
          >
            {i + 1}: {choice.text}
          </p>
        );
      });
  };

  return (
    <div className="text-center">{displayOptions()}</div>
  );
};

export default PlayerChoices;
