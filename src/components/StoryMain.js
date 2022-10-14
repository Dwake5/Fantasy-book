import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Story.css";
import gameData from "../assets/gameData";
import useFilters from "../hooks/useFilters";
import { useMapExtraText } from "../hooks/useMapExtraText";
import { useMapWhatToDo } from "../hooks/useMapWhatToDo";
import { changeItemAmount } from "../redux/items/actions";
import {
  getMoney,
  getOwnedItems,
  getProvisions
} from "../redux/items/selectors";
import {
  changeEatenToday,
  fullRestore,
  gainStat,
  loseStat,
  playerReceiveCurseAlianna,
  playerReceiveCurseSpirit,
  playerReceivePlague,
  takeDamage,
  takePureDamage
} from "../redux/stats/actions";
import { eatenToday, getPlague } from "../redux/stats/selectors";
import { playerLearnsJann } from "../redux/story/actions";
import EatOption from "./miniGames/EatOption";
import PlayerChoices from "./PlayerChoices";
import TestLuck from "./TestLuck";

const StoryMain = ({ pageNumber }) => {
  const dispatch = useDispatch();

  const _money = useSelector(getMoney);
  const _provisions = useSelector(getProvisions);
  const _eatenToday = useSelector(eatenToday);

  const [itemVariableCost, setItemVariableCost] = useState(undefined);
  const [, setCostChanged] = useState(); // Leave the line please, it makes trader items block when too expensive
  const [, setRerender] = useState();

  const [luckPassed, setLuckPassed] = useState(null);

  // Ailments
  const _havePlague = useSelector(getPlague);

  const _itemsOwned = useSelector(getOwnedItems);
  const pageData = gameData[pageNumber];

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
    magicCost,
  } = pageData;

  let spellText = "";
  let pageChoices = pageData.choices; // spellsOptions will change this
  const pageText = pageData.text;
  let pauseChoices = pageData.pause;
  let { staminaLoss } = pageData;
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
  }, [pageNumber]);

  const [stayShowing, setStayShowing] = useState(false);

  // Places the player is specifically told about Jann's magic blocking
  // In manticore cave, assassin, meet jann spell * 2, lotus * 2
  const discoverJannSecret = [286, 305, 306, 387, 321, 394];

  const cancelPause = () => {
    pageData.pause = false;
    pauseChoices = false;
    setStayShowing(true);
    setSpellPause(false);
  };

  // Remove this in production
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     const page = event.target.value;
  //     setPage(dispatch, page);
  //   }
  // };

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
    if (!_eatenToday) takeDamage(dispatch, 3);
    if (_havePlague) takeDamage(dispatch, 3);
    changeEatenToday(dispatch, false);
  };

  // This function is used to handle stat changes on a new node
  useEffect(() => {
    if (discoverJannSecret.includes(pageNumber)) {
      playerLearnsJann(dispatch);
    }

    if (winGame !== undefined) fullRestore(dispatch);
    if (playerGetsItems !== undefined) addItems(playerGetsItems);

    // stats loss
    // Ensure magic cost is at the start?
    if (magicCost !== undefined) takePureDamage(dispatch, magicCost);
    if (skillLoss !== undefined) loseStat(dispatch, "skill", skillLoss);
    if (staminaLoss !== undefined) takeDamage(dispatch, staminaLoss);
    if (luckLoss !== undefined) loseStat(dispatch, "luck", luckLoss);

    // The player ate at this node
    if (eaten !== undefined) changeEatenToday(dispatch, true);

    // stats gain
    if (skillGain !== undefined) gainStat(dispatch, "skill", skillGain);
    if (staminaGain !== undefined) gainStat(dispatch, "stamina", staminaGain);
    if (luckGain !== undefined) gainStat(dispatch, "luck", luckGain);

    // does player receive ailments?
    if (playerGetPlague !== undefined) playerReceivePlague(dispatch);
    if (playerGetCurse !== undefined) playerReceiveCurseSpirit(dispatch);
    if (playerGetCurseAlianna !== undefined) {
      playerReceiveCurseAlianna(dispatch);
    }

    // new day
    if (newDay) handleNewDay();
  }, [pageNumber, dispatch]);

  return (
    <Container>
      {/* <p className="h3 mb-3 text-center">
        Adventure! Current Page: {pageNumber}
      </p>
      <label>Go to page:</label>
      <input type="text" onKeyDown={handleKeyDown}></input> */}
      <p dangerouslySetInnerHTML={{ __html: pageText }} />
      {spellText && <p dangerouslySetInnerHTML={{ __html: spellText }} />}
      {testLuck && (
        <TestLuck
          setLuckPassed={setLuckPassed}
          cancelPause={cancelPause}
          pageNumber={pageNumber}
        />
      )}
      {eatOption && (
        <EatOption
          key={pageNumber}
          eatOptions={eatOption}
          eatenToday={_eatenToday}
          food={_provisions}
          money={_money}
        />
      )}
      {useMapWhatToDo(pageNumber, cancelPause, pauseChoices, stayShowing)}
      {useMapExtraText(pageNumber, setItemVariableCost, setRerender, extraText)}
      <PlayerChoices
        choices={useFilters(pageChoices, luckPassed, pauseChoices)}
        setStayShowing={setStayShowing}
        pause={pauseChoices}
      />
    </Container>
  );
};

export default StoryMain;
