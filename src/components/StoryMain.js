import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import useFilters from "../hooks/useFilters";
import { getItem } from "../redux/items/actions";
import { getMoney, getProvisions } from "../redux/items/selectors";
import {
  changeEatenToday,
  gainStat,
  loseStat,
  playerRecieveCurseAlianna,
  playerRecieveCurseSpirit,
  playerRecievePlague,
} from "../redux/stats/actions";
import {
  eatenToday,
  getPlague,
  getSpiritCurse,
} from "../redux/stats/selectors";
import { playerLearnsJann, setPage } from "../redux/story/actions";
import { getPage, getTraderViews } from "../redux/story/selectors";
import BeeStings from "./BeeStings";
import BuyProvisions from "./BuyProvisions";
import CreateStats from "./CreateStats";
import EatOption from "./EatOption";
import PlayerChoices from "./PlayerChoices";
import TestLuck from "./TestLuck";
import Trader from "./Trader";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [itemVariableCost, setItemVariableCost] = useState(null);
  const [costChanged, setCostChanged] = useState(null); // This line makes a feature work. Literally no idea why
  const _traderViews = useSelector(getTraderViews);

  // Ailments
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);

  const pageData = gameData[_pageNumber];
  let pageChoices = pageData.choices;
  const pageText = pageData.text;
  let pauseChoices = pageData.pause;
  const extraText = pageData.extraText;
  const skillLoss = pageData.skillLoss;
  const skillGain = pageData.skillGain;
  let staminaLoss = pageData.staminaLoss;
  const staminaGain = pageData.staminaGain;
  const luckLoss = pageData.luckLoss;
  const luckGain = pageData.luckGain;
  const playerGetsItems = pageData.getItems;
  const eatOption = pageData.eatOption;
  const testLuck = pageData.testLuck;
  const newDay = pageData.newDay;
  const eaten = pageData.eaten;

  const playerGetPlague = pageData.plague;
  const playerGetCurse = pageData.curse;
  const playerGetCurseAlianna = pageData.curseOfAlianna;

  const [stayShowing, setStayShowing] = useState(false);

  const discoverJannSecret = [286, 305, 306, 321, 394, 387];

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
      case 270:
        return <BeeStings cancelPause={cancelPause} />;
      default:
    }
    alreadyMapped = true;
  };

  const handleItemVariableCost = (money) => {
    setItemVariableCost(money);
  };

  const mapExtraText = () => {
    switch (_pageNumber) {
      case 280:
        return <Trader itemViews={_traderViews} />;
      case 214:
        return (
          <Trader
            dice={2}
            changeCost={handleItemVariableCost}
            key={214}
            itemName={"broadsword"}
          />
        );
      case 22:
        return (
          <Trader
            dice={1}
            changeCost={handleItemVariableCost}
            key={22}
            itemName={"pipe"}
          />
        );
      case 141:
        return (
          <Trader
            dice={2}
            changeCost={handleItemVariableCost}
            key={141}
            itemName={"axe"}
            optional
          />
        );
      case 257:
        return <BuyProvisions amount={2} cost={2} playerMoney={_money} />;
      default:
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const page = event.target.value;
      setPage(dispatch, page);
    }
  };

  const addItems = (items) => {
    items.forEach((item) => {
      getItem(dispatch, item);
    });
  };

  useEffect(() => {
    pageChoices[0].cost = itemVariableCost;
    setCostChanged(itemVariableCost);
  }, [itemVariableCost]);

  const handleNewDay = () => {
    let loseStamina = 0;
    if (!_eatenToday) loseStamina += 3;
    if (_havePlague) loseStamina += 3;
    if (loseStamina > 0) {
      if (_haveSpiritCurse) loseStamina++;
      loseStat(dispatch, "stamina", loseStamina);
    }
    changeEatenToday(dispatch, false);
  };

  // This function is used to handle stat changes on a new node
  useEffect(() => {
    if (discoverJannSecret.includes(_pageNumber)) {
      playerLearnsJann(dispatch);
    }

    if (playerGetsItems !== undefined) addItems(playerGetsItems);

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
    if (eaten !== undefined) changeEatenToday(dispatch, true);

    // stats gain
    if (skillGain !== undefined) gainStat(dispatch, "skill", skillGain);
    if (staminaGain !== undefined) gainStat(dispatch, "stamina", staminaGain);
    if (luckGain !== undefined) gainStat(dispatch, "luck", luckGain);

    // does player recieve ailments?
    if (playerGetPlague !== undefined) playerRecievePlague(dispatch);
    if (playerGetCurse !== undefined) playerRecieveCurseSpirit(dispatch);
    if (playerGetCurseAlianna !== undefined)
      playerRecieveCurseAlianna(dispatch);

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
      {testLuck && (
        <TestLuck
          cancelPause={cancelPause}
          pageNumber={_pageNumber}
        />
      )}
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
      <PlayerChoices
        choices={useFilters(pageChoices)}
        setStayShowing={setStayShowing}
        pause={pauseChoices}
      />
    </Container>
  );
};

export default StoryMain;
