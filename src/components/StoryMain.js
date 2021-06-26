import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import useFilters from "../hooks/useFilters";
import { changeItemAmount } from "../redux/items/actions";
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
import { getNightCreaturePrevious, getPage, getTraderViews } from "../redux/story/selectors";
import BackpackRobbed from "./BackpackRobbed";
import BreakDoor from "./BreakDoor";
import BuyProvisions from "./BuyProvisions";
import EatOption from "./EatOption";
import ForkDie from "./ForkDie";
import KillSnakes from "./KillSnakes";
import LockSmash from "./LockSmash";
import OfferArtefact from "./OfferArtefact";
import OpenDoor from "./OpenDoor";
import PickpocketBox from "./PickpocketBox";
import PilferGrass from "./PilferGrass";
import PitFall from "./PitFall";
import PlayerChoices from "./PlayerChoices";
import TestLuck from "./TestLuck";
import Trader from "./Trader";
import TrollDice from "./TrollDice";
import WitchSteals from "./WitchSteals";
import Combat from "./combat/Combat";
import { getInCombat } from "../redux/combat/selectors";
import GoblinsFlee from "./GoblinsFlee";
import NightCreatures from "./NightCreatures";
import SnakeBites from "./SnakeBites";
import RollDie from "./RollDie";
import CreateStats2 from "./CreateStats2";

const StoryMain = () => {
  const dispatch = useDispatch();
  const _pageNumber = useSelector(getPage);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious)

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [itemVariableCost, setItemVariableCost] = useState(null);
  const [, setCostChanged] = useState(); // Leave the line please, it makes trader items block when too expensive
  const [, setRerender] = useState();
  const _traderViews = useSelector(getTraderViews);

  const [luckPassed, setLuckPassed] = useState(null);

  // Combat
  const _inCombat = useSelector(getInCombat);

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
      case 123:
        return (
          <NightCreatures key={_nightCreaturePrevious} cancelPause={cancelPause} />
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
        return <OfferArtefact setRerender={setRerender} />;
      case 32:
        return <PilferGrass amount={2} />;
      case 57:
        return <PilferGrass amount={1} />;
      case 48:
        return <WitchSteals pageNumber={_pageNumber} />;
      case 93:
        return <BreakDoor />;
      case 142:
        return <LockSmash setRerender={setRerender} />;
      case 228:
        return <OpenDoor setRerender={setRerender} />;
      case 254:
        return <ForkDie type="regular" setRerender={setRerender} />;
      case 295:
        return <ForkDie type="skunk" setRerender={setRerender} />;
      case 258:
        return <PickpocketBox />;
      case 277:
        return <PitFall />;
      case 366:
        return <SnakeBites />;
      case 407:
        return <GoblinsFlee setRerender={setRerender} />;
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
