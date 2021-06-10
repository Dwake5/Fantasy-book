import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import { getItems, getMoney, getProvisions } from "../redux/items/selectors";
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
  getAliannaCurse,
  eatenToday,
} from "../redux/stats/selectors";
import EatOption from "./EatOption";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _items = useSelector(getItems);
  // console.log('_items :', _items);
  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);

  // Ailments
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _haveAliannaCurse = useSelector(getAliannaCurse);

  const _eatenToday = useSelector(eatenToday);

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

  const eatOption = pageData.eatOption;

  const newDay = pageData.newDay;

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
        return <BuyProvisions amount={2} cost={2} money={_money} />;
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
    if (choices.items === null) return choices;
    return choices.filter((choice) => canAfford(choice));
  };

  // This function is used to handle stat changes on a new node
  useEffect(() => {
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

    // stats gain
    if (skillGain !== undefined) gainStat(dispatch, "skill", skillGain);
    if (staminaGain !== undefined) gainStat(dispatch, "stamina", staminaGain);
    if (luckGain !== undefined) gainStat(dispatch, "luck", luckGain);

    // new day
    if (newDay) {
      let loseStamina = 0;
      if (!_eatenToday) loseStamina += 3;
      if (_havePlague) loseStamina += 3;
      if (loseStamina > 0) {
        if (_haveSpiritCurse) loseStamina++;
        loseStat(dispatch, "stamina", loseStamina);
      }
      changeEatenToday(dispatch, false);
    }
  }, [_pageNumber]);

  return (
    <Container className="border storyBody">
      <p className="h3 mb-3 text-center">
        Adventure! Current Page: {_pageNumber}
      </p>
      <label>Go to page:</label> 
      <input type="text" onKeyDown={handleKeyDown}></input>
      <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
      {eatOption && <EatOption eatOptions={eatOption} eatenToday={_eatenToday} food={_provisions} />}
      {(pauseChoices || stayShowing) && mapWhatToDo()}
      {extraText && mapExtraText()}
      {!pauseChoices && (
        <PlayerChoices
          choices={filterCanAfford(pageChoices)}
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
