import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import { getItem } from "../redux/items/actions";
import {
  getItems,
  getMoney,
  getOwnedItems,
  getProvisions,
} from "../redux/items/selectors";
import { changeEatenToday, gainStat, loseStat } from "../redux/stats/actions";
import {
  eatenToday,
  getHaveJann,
  getLibra,
  getPlague,
  getSpiritCurse,
} from "../redux/stats/selectors";
import { playerLearnsJann, setPage } from "../redux/story/actions";
import { getCantUseMagic, getPage } from "../redux/story/selectors";
import BuyProvisions from "./BuyProvisions";
import CreateStats from "./CreateStats";
import EatOption from "./EatOption";
import PlayerChoices from "./PlayerChoices";
import TestLuck from "./TestLuck";
import Trader from "./Trader";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [luckPassed, setLuckPassed] = useState(null);

  // Jann
  const _haveJann = useSelector(getHaveJann);
  const _cantUseMagic = useSelector(getCantUseMagic);

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
  const testLuck = pageData.testLuck;
  const newDay = pageData.newDay;
  const eaten = pageData.eaten;

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
      default:
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
    // See if luck is involved
    const involvesLuck = choice.luck;
    // If luck is not involved, return the choice
    if (involvesLuck === undefined) return true;

    if (pauseChoices === undefined) {
      if (choice.luck === "blocked") return true;
    }
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
