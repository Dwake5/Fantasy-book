import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import { getItem } from "../redux/items/actions";
import {
  getMoney,
  getOwnedItems,
  getProvisions,
} from "../redux/items/selectors";
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
  getHaveJann,
  getLibra,
  getPlague,
  getSpiritCurse,
} from "../redux/stats/selectors";
import { playerLearnsJann, setPage } from "../redux/story/actions";
import {
  getCantUseMagic,
  getPage,
  getTraderViews,
} from "../redux/story/selectors";
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
  const _itemsOwned = useSelector(getOwnedItems);

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [luckPassed, setLuckPassed] = useState(null);

  const [itemVariableCost, setItemVariableCost] = useState(null);
  const [costChanged, setCostChanged] = useState(null); // This line makes a feature work. Literally no idea why
  const _traderViews = useSelector(getTraderViews);

  // Jann
  const _haveJann = useSelector(getHaveJann);
  const _cantUseMagic = useSelector(getCantUseMagic);

  // Ailments
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _haveLibra = useSelector(getLibra);

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

  const canAfford = (choice) => {
    const choiceCost = choice.cost;
    if (choiceCost === undefined) return true;
    if (choiceCost === "must roll") return false;
    return choiceCost <= _money;
  };

  const filterCanAfford = (choices) => {
    return choices.filter((choice) => canAfford(choice));
  };

  const haveItem = (choice) => {
    const requires = choice.requires;
    if (requires === undefined) return true;
    return _itemsOwned.includes(requires);
  };

  const filterNeedItems = (choices) => {
    return choices.filter((choice) => haveItem(choice));
  };

  const isSpellAndHaveJann = (choice) => {
    const isSpell = choice.text.slice(0, 5) === "Magic";
    if (!isSpell) return true;
    if (_haveJann && _cantUseMagic) return false;
    return true;
  };

  const filterMagic = (choices) => {
    return choices.filter((choice) => isSpellAndHaveJann(choice));
  };

  const needAndHaveLibra = (choice) => {
    const needLibra = choice.needLibra;
    if (needLibra === undefined) return true;
    return _haveLibra;
  };

  const filterNeedLibra = (choices) => {
    return choices.filter((choice) => needAndHaveLibra(choice));
  };

  const checkLuckOptions = (choice) => {
    // See if luck is involved, if luck is not involved, return the choice
    const involvesLuck = choice.luck;
    if (involvesLuck === undefined) return true;

    // try to show a choice that is only blocked after a luck role where possible
    if (pauseChoices === undefined && choice.luck === "blocked") return true;

    // if the page forced a pause (i.e. needed luck role) then only show the result of Test your Luck
    if (pauseChoices !== undefined) {
      if (luckPassed && choice.luck === "success") return true;
      if (!luckPassed && choice.luck === "failed") return true;
    }
    return false;
  };

  const filterLuckOptions = (choices) => {
    return choices.filter((choice) => checkLuckOptions(choice));
  };

  const filterChoices = (choices) => {
    if (_pageNumber === 100) {
      return _haveJann ? [choices[0]] : [choices[1]];
    }
    if (_pageNumber === 280) {
      if (_traderViews >= 3) return choices.slice(-1);
      if (_traderViews < 3) return choices.filter((choice) => !choice.visited);
    }
    let filtered = filterNeedItems(choices);
    filtered = filterLuckOptions(filtered);
    filtered = filterCanAfford(filtered);
    filtered = filterNeedLibra(filtered);
    filtered = filterMagic(filtered);
    return filtered;
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
          setLuckPassed={setLuckPassed}
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
      {!pauseChoices && (
        <PlayerChoices
          choices={filterChoices(pageChoices)}
          setStayShowing={setStayShowing}
        />
      )}
    </Container>
  );
};

export default StoryMain;
