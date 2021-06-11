import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import { getItems, getMoney, getOwnedItems, getProvisions, ownItem } from "../redux/items/selectors";
import { loseStat, gainStat, changeEatenToday } from "../redux/stats/actions";
import { setPage } from "../redux/story/actions";
import { getPage } from "../redux/story/selectors";
import BuyProvisions from "./BuyProvisions";
import CreateStats from "./CreateStats";
import PlayerChoices from "./PlayerChoices";
import Trader from "./Trader";
import {
  getPlague,
  getSpiritCurse,
  eatenToday,
  getLibra,
} from "../redux/stats/selectors";
import EatOption from "./EatOption";
import { getItem } from "../redux/items/actions";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  // Ailments
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _haveLibra = useSelector(getLibra);

  const pageData = gameData[_pageNumber];
  const pageChoices = pageData.choices;
  const pageText = pageData.text;
  let pauseChoices = pageData.pause;
  const extraText = pageData.extraText;
  const skillLoss = pageData.skillLoss;
  const skillGain = pageData.skillGain;
  let staminaLoss = pageData.staminaLoss;
  const staminaGain = pageData.staminaGain;
  const luckLoss = pageData.skillLoss;
  const luckGain = pageData.skillGain;
  const playerGetsItems = pageData.getItems;
  const eatOption = pageData.eatOption;
  const newDay = pageData.newDay;
  const eaten = pageData.eaten;

  const [stayShowing, setStayShowing] = useState(false);

  const cancelPause = (keepShowing) => {
    pageData.pause = false;
    pauseChoices = false;
    setStayShowing(keepShowing);
  };

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
    switch (_pageNumber) {
      case 280:
        return <Trader itemViews />;
      case 214:
        return <Trader dice={2} setItem={214} />;
      case 22:
        return <Trader dice={1} setItem={22} />;
      case 257:
        return <BuyProvisions amount={2} cost={2} playerMoney={_money} />;
      default:
        console.log("mapExtraText did nothing");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const page = event.target.value;
      setPage(dispatch, page);
    }
  };

  const canAfford = (choice) => {
    if (choice.cost === undefined) return true;
    return choice.cost <= _money;
  };

  const filterCanAfford = (choices) => {
    return choices.filter((choice) => canAfford(choice));
  };

  const haveItem = (choice) => {
    const requires = choice.requires;
    if (requires === undefined) return true;
    return _itemsOwned.includes(requires);
  }

  const filterNeedItems = (choices) => {
    return choices.filter((choice) => haveItem(choice));
  };

  const needAndHaveLibra = (choice) => {
    const needLibra = choice.needLibra;
    if (needLibra === undefined) return true
    return _haveLibra
  }

  const filterNeedLibra = (choices) => {
    return choices.filter(choice => needAndHaveLibra(choice))
  }

  const filterChoices = (choices) => {
    let filtered = filterNeedItems(choices)
    filtered = filterCanAfford(filtered)
    filtered = filterNeedLibra(filtered)
    return filtered
  }

  const addItems = (items) => {
    items.forEach((item) => {
      getItem(dispatch, item);
    });
  };


  const handleNewDay = () => {
    let loseStamina = 0;
    if (!_eatenToday) loseStamina += 3;
    if (_havePlague) loseStamina += 3;
    if (loseStamina > 0) {
      if (_haveSpiritCurse) loseStamina++;
      loseStat(dispatch, "stamina", loseStamina);
    }
    changeEatenToday(dispatch, false);
  }

  // This function is used to handle stat changes on a new node
  useEffect(() => {
    // get items
    if (playerGetsItems !== undefined) addItems(playerGetsItems)

    // stats loss
    if (skillLoss !== undefined) loseStat(dispatch, "skill", skillLoss);
    if (staminaLoss !== undefined) {
      if (_haveSpiritCurse) {
        const magicStart = 287;
        if (_pageNumber < magicStart) staminaLoss++;
      }
      loseStat(dispatch, "stamina", staminaLoss);
    }
    if (luckLoss !== undefined) loseStat(dispatch, "luck", luckLoss);

    // The player ate at this node
    if (eaten !== undefined) changeEatenToday(dispatch, true)

    // stats gain
    if (skillGain !== undefined) gainStat(dispatch, "skill", skillGain);
    if (staminaGain !== undefined) gainStat(dispatch, "stamina", staminaGain);
    if (luckGain !== undefined) gainStat(dispatch, "luck", luckGain);

    // new day
    if (newDay) handleNewDay();
  }, [_pageNumber]);

  return (
    <Container className="border storyBody">
      <p className="h3 mb-3 text-center">
        Adventure! Current Page: {_pageNumber}
      </p>
      <label>Go to page:</label>
      <input type="text" onKeyDown={handleKeyDown}></input>
      <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
      {eatOption && (
        <EatOption
          eatOptions={eatOption}
          eatenToday={_eatenToday}
          food={_provisions}
          money={_money}
          pageNumber={_pageNumber}
        />
      )}
      {(pauseChoices || stayShowing) && mapWhatToDo()}
      {extraText && mapExtraText()}
      {!pauseChoices && (
        <PlayerChoices
          choices={filterChoices(pageChoices)}
          playerMoney={_money}
          playerItems={_items}
          setStayShowing={setStayShowing}
          pause={pauseChoices}
        />
      )}
    </Container>
  );
};

export default StoryMain;
