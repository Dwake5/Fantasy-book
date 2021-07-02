import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import useFilters from "../hooks/useFilters";
import { getInCombat } from "../redux/combat/selectors";
import { changeItemAmount } from "../redux/items/actions";
import {
  getMoney,
  getOwnedItems,
  getProvisions,
} from "../redux/items/selectors";
import {
  changeEatenToday,
  fullRestore,
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
import {
  getNightCreaturePrevious,
  getPage,
  getTraderViews,
} from "../redux/story/selectors";
import BackpackRobbed from "./BackpackRobbed";
import BreakDoor from "./BreakDoor";
import BuyProvisions from "./BuyProvisions";
import Combat from "./combat/Combat";
import CreateStats2 from "./CreateStats2";
import EatOption from "./EatOption";
import ForkDie from "./ForkDie";
import GoblinsFlee from "./GoblinsFlee";
import KillSnakes from "./KillSnakes";
import LockSmash from "./LockSmash";
import MakeGoblins from "./MakeGoblins";
import NightCreatures from "./NightCreatures";
import OfferArtefact from "./OfferArtefact";
import OpenDoor from "./OpenDoor";
import PickpocketBox from "./PickpocketBox";
import PilferGrass from "./PilferGrass";
import PitFall from "./PitFall";
import PlayerChoices from "./PlayerChoices";
import RollDie from "./RollDie";
import SnakeBites from "./SnakeBites";
import TestLuck from "./TestLuck";
import Trader from "./Trader";
import TrollDice from "./TrollDice";
import WitchSteals from "./WitchSteals";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [itemVariableCost, setItemVariableCost] = useState(undefined);
  const [, setCostChanged] = useState(); // Leave the line please, it makes trader items block when too expensive
  const [, setRerender] = useState();
  const _traderViews = useSelector(getTraderViews);

  const [luckPassed, setLuckPassed] = useState(null);

  // Combat
  const _inCombat = useSelector(getInCombat);

  // Ailments
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);

  const _itemsOwned = useSelector(getOwnedItems);
  const pageData = gameData[_pageNumber];

  const {
    spellOptions,
    extraText,
    skillLoss,
    skillGain,
    staminaGain,
    luckGain,
    luckLoss,
    eatOption,
    testLuck,
    newDay,
    eaten,
    winGame,
  } = pageData;
  let spellText = "";
  let pageChoices = pageData.choices; // spellsOptions will change this
  const pageText = pageData.text;
  let pauseChoices = pageData.pause;
  let staminaLoss = pageData.staminaLoss;
  const playerGetsItems = pageData.getItems;

  const playerGetPlague = pageData.plague;
  const playerGetCurse = pageData.curse;
  const playerGetCurseAlianna = pageData.curseOfAlianna;

  const [lostItem, setLostItem] = useState(false);
  const loseSpellItem = (item, amount) => {
    if (lostItem) return;
    setLostItem(true);
    changeItemAmount(dispatch, { name: item, amount });
  };

  // These 3 hooks are needed because item loss resets the component
  // Causing a bug if the user has exactly the right amount
  const [spellChoices, setSpellChoices] = useState(null);
  const [spellTextTemp, setSpellText] = useState(null);
  const [spellPauseTemp, setSpellPause] = useState(false);
  if (spellOptions !== undefined && spellChoices === null) {
    const neededItem = spellOptions.requires;
    const success = _itemsOwned.includes(neededItem);
    const loseAmount = spellOptions.loseItem;
    let spellPause;
    if (success) {
      if (spellOptions.loseItem) loseSpellItem(neededItem, -loseAmount);
      spellText = spellOptions.success.text;
      pageChoices = spellOptions.success.choices;
      if (spellOptions.success.pause) {
        spellPause = true;
      }
    } else {
      spellText = spellOptions.fail.text;
      pageChoices = spellOptions.fail.choices;
      const extraStaminaLoss = spellOptions.fail.extraStaminaLoss;
      if (extraStaminaLoss !== undefined) {
        staminaLoss += extraStaminaLoss;
      }
    }
    setSpellChoices(pageChoices);
    setSpellText(spellText);
    setSpellPause(spellPause);
  }

  if (pageChoices === undefined) pageChoices = spellChoices;
  if (spellText === "") spellText = spellTextTemp;
  if (spellPauseTemp) pauseChoices = true;

  const clearSpellState = () => {
    setSpellChoices(null);
    setSpellText(null);
    setSpellPause(false);
  };

  useEffect(() => {
    // dont carry over spell text when moving to a new page
    clearSpellState();
  }, [_pageNumber]);

  const [stayShowing, setStayShowing] = useState(false);

  // Places the player is specifically told about Jann's magic blocking
  // In manticore cave, assasin, meet jann spell * 2, lotus * 2
  const discoverJannSecret = [286, 305, 306, 387, 321, 394];

  const cancelPause = (keepShowing) => {
    pageData.pause = false;
    pauseChoices = false;
    setStayShowing(keepShowing);
    setSpellPause(false);
  };

  let alreadyMapped = false;
  const mapWhatToDo = () => {
    if (alreadyMapped) return;
    switch (_pageNumber) {
      case 1002:
        return <CreateStats2 cancelPause={cancelPause} />;
      case 270:
        return <RollDie cancelPause={cancelPause} pageType={"beeStings"} />;
      case 417:
        return <RollDie cancelPause={cancelPause} pageType={"snakeBites"} />;
      case 218:
        return <BackpackRobbed cancelPause={cancelPause} />;
      case 38:
        return <TrollDice cancelPause={cancelPause} />;
      case 165:
        return <KillSnakes cancelPause={cancelPause} />;
      case 425:
      case 369:
        return <MakeGoblins cancelPause={cancelPause} />;
      case 123:
        return (
          <NightCreatures
            key={_nightCreaturePrevious}
            cancelPause={cancelPause}
          />
        );
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
        return <Trader itemViews={_traderViews.length} />;
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
      case 29:
        return <OfferArtefact rerender={setRerender} />;
      case 32:
        return (
          <PilferGrass amount={2} pageNumber={32} rerender={setRerender} />
        );
      case 57:
        return (
          <PilferGrass amount={1} pageNumber={57} rerender={setRerender} />
        );
      case 48:
        return <WitchSteals pageNumber={_pageNumber} />;
      case 93:
        return <BreakDoor />;
      case 142:
        return <LockSmash rerender={setRerender} />;
      case 228:
        return <OpenDoor rerender={setRerender} />;
      case 254:
        return <ForkDie type="regular" rerender={setRerender} />;
      case 295:
        return <ForkDie type="skunk" rerender={setRerender} />;
      case 258:
        return <PickpocketBox />;
      case 277:
        return <PitFall rerender={setRerender} />;
      case 366:
        return <SnakeBites />;
      case 407:
        return <GoblinsFlee rerender={setRerender} />;
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
      changeItemAmount(dispatch, item);
    });
  };

  useEffect(() => {
    if (itemVariableCost === undefined) return;
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

    if (winGame !== undefined) fullRestore(dispatch);

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
    if (playerGetCurseAlianna !== undefined) {
      playerRecieveCurseAlianna(dispatch);
    }

    // new day
    if (newDay) handleNewDay();
  }, [_pageNumber]);

  // This is probably a bad way to handle this.
  const availableChoices = useFilters(pageChoices, luckPassed, pauseChoices);

  if (_inCombat) return <Combat pageNumber={parseInt(_pageNumber)} />;
  return (
    <Container className="border storyBody">
      <p className="h3 mb-3 text-center">
        Adventure! Current Page: {_pageNumber}
      </p>
      <label>Go to page:</label>
      <input type="text" onKeyDown={handleKeyDown}></input>
      <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
      {spellText && <p dangerouslySetInnerHTML={{ __html: spellText }}></p>}
      {testLuck && (
        <TestLuck
          setLuckPassed={setLuckPassed}
          cancelPause={cancelPause}
          pageNumber={_pageNumber}
        />
      )}
      {eatOption && (
        <EatOption
          key={_pageNumber}
          eatOptions={eatOption}
          eatenToday={_eatenToday}
          food={_provisions}
          money={_money}
        />
      )}
      {(pauseChoices || stayShowing) && mapWhatToDo()}
      {extraText && mapExtraText()}
      <PlayerChoices
        choices={availableChoices}
        setStayShowing={setStayShowing}
        pause={pauseChoices}
      />
    </Container>
  );
};

export default StoryMain;
