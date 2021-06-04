import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import { setItems } from "../redux/items/actions";
import { getItems, getMoney } from "../redux/items/selectors";
import { addOneToTraderItem, setPage } from "../redux/story/actions";
import { getPage } from "../redux/story/selectors";

import CreateStats from "./CreateStats";
import Trader from "./Trader";

const Story = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _items = useSelector(getItems);
  const _money = useSelector(getMoney);
  console.log("_money :", _money);

  const pageData = gameData[_pageNumber];
  const pageChoices = pageData.choices;
  const pageText = pageData.text;
  let shouldPause = pageData.pause;
  const extraText = pageData.extraText;

  const [stayShowing, setStayShowing] = useState(false);

  const recieveItems = (items) => {
    console.log("items :", items);
    let newItems = [];
    if (_items) newItems = [..._items];

    items.forEach((newItem) => {
      // Do we already have the item?
      const findItem = newItems.find(
        (oldItem) => newItem.name === oldItem.name
      );

      if (!!findItem) {
        // Amend the quantity, if less than 0 make it zero
        if (findItem.amount) findItem.amount += newItem.amount;
        if (findItem.amount < 0) findItem.amount = 0;
        // Reinsert it in the same place
        const findIndex = _items.findIndex(
          (oldItem) => oldItem.name === findItem.name
        );
        newItems[findIndex] = findItem;
      } else {
        newItems.push(newItem);
      }

      if (newItem.cost) {
        let money = newItems.find((item) => (item.name = "Gold"));
        money.amount -= newItem.cost;
      }
    });

    setItems(dispatch, newItems);
  };

  const handleChoice = (choice) => {
    if (choice === null || choice === undefined) return;
    if (choice.items?.length) {
      recieveItems(choice.items);
    }
    if (choice.goToPage === 280) {
      addOneToTraderItem(dispatch);
    }
    setPage(dispatch, choice.goToPage);
    setStayShowing(false);
  };

  const cancelPause = (keepShowing) => {
    pageData.pause = false;
    shouldPause = false;
    setStayShowing(keepShowing);
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      const key = event.key;
      if (key <= pageChoices.length) {
        handleChoice(pageChoices[key - 1]);
      }
    },
    [pageChoices]
  );

  useEffect(() => {
    if (shouldPause) return;
    window.addEventListener("keydown", handleUserKeyPress);
  }, [handleUserKeyPress, shouldPause]);

  let alreadyMapped = false;
  const mapWhatToDo = () => {
    if (alreadyMapped) return;
    switch (_pageNumber) {
      case 1002:
        return <CreateStats cancelPause={cancelPause} />;
      default:
        console.log("mapWhatToDo did nothing");
    }
    alreadyMapped = true;
  };

  const mapExtraText = () => {
    console.log("_pageNumber :", _pageNumber);
    switch (_pageNumber) {
      case 280:
        return <Trader itemViews />;
      case 214:
        console.log("call trader");
        return <Trader dice={2} setItem={214} />;
      case 22:
        return <Trader dice={1} setItem={22} />;
      default:
        console.log("mapExtraText did nothing");
    }
  };

  const canAfford = (choice) => {
    if (choice.items === undefined) return true
    if (choice.items?.length > 1) return true

    if (choice.items[0].cost === undefined) return false
    return choice.items[0].cost <= _money ? true : false
  }

  const displayOptions = () => {
    return pageData.choices
      .filter((choice) => canAfford(choice))
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const page = event.target.value;
      setPage(dispatch, page);
    }
  };

  return (
    <Container className="border storyBody">
      <p className="h3 mb-3 text-center">
        Adventure! Current Page: {_pageNumber}
      </p>
      <label>Go to page:</label>
      <input onKeyDown={handleKeyDown}></input>
      <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
      {(shouldPause || stayShowing) && mapWhatToDo()}
      {extraText && mapExtraText()}
      {!shouldPause && <div className="text-center">{displayOptions()}</div>}
    </Container>
  );
};

export default Story;
