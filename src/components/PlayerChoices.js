import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import gameData from "../assets/gameData";
import useHandleKeydown from "../hooks/useHandleKeydown";
import {
  startCombat,
  setEnemyStats,
  setPageAfterCombat,
  addExtraEnemies,
} from "../redux/combat/actions";
import {
  changeItemAmount,
  robbedByBandits,
  payMoney,
  loseEquippedWeapon,
  equipSpecificWeapon,
} from "../redux/items/actions";
import { getEquippedWeapon } from "../redux/items/selectors";
import {
  changeEatenToday,
  gainStat,
  loseLibra,
  loseStat,
  playerGetsJann,
  playerLosesJann,
  visitWaterfall,
} from "../redux/stats/actions";
import { eatenToday } from "../redux/stats/selectors";
import {
  addToTraderItems,
  locksmashPrevious,
  pitfallPrevious,
  nightCreaturePrevious,
  seenBox1,
  seenBox2,
  setPage,
} from "../redux/story/actions";
import { getNightCreaturePrevious } from "../redux/story/selectors";
import { resetNightCreatures } from "../utils";

const PlayerChoices = ({ choices, setStayShowing, pause }) => {
  const dispatch = useDispatch();
  const _eatenToday = useSelector(eatenToday);
  const _equippedWeapon = useSelector(getEquippedWeapon);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious)

  const handleChoice = useCallback((choice, NCP) => {
    const addItems = (items) => {
      items.forEach((item) => {
        changeItemAmount(dispatch, item);
      });
    };
    
    // Night creatures lead to a dynamic node so start a fight and check after
    console.log(choice)
    if (choice.fightNC) {
      startCombat(dispatch)
      return
    }
    
    if (choice.nightContinue) {
      const nightCreatureMap = {
        84: 31,
        108: 36,
        283: 31
      }
      const nextPage = nightCreatureMap[NCP]
      const plusOneHealthNodes = [108, 283];
      const doAddOneHealth = plusOneHealthNodes.includes(NCP);
      if (doAddOneHealth) gainStat(dispatch, 'stamina', 1)
      setPage(dispatch, nextPage)
      resetNightCreatures()
      return
    }

    // Block magic from double casting
    if (choice.text.slice(0,5) === "Magic") choice.blocked = true;
    // Block single use nodes
    if (choice.singleUse) choice.blocked = true;

    const nodeVisiting = choice.goToPage;

    // night creatures
    const leadsToNightCreatures = [84,108,283]
    if (leadsToNightCreatures.includes(nodeVisiting)) {
      nightCreaturePrevious(dispatch, nodeVisiting)
    }

    if (choice.fight) {
      const enemySkill = choice.fight.skill;
      const enemyStamina = choice.fight.stamina;
      const enemyName = choice.fight.name;
      const pageAfter = choice.goToPage;
      const extraEnemies = choice.extraEnemies;
      if (extraEnemies !== undefined) {
        addExtraEnemies(dispatch, extraEnemies)
      }
      // set stats, start combat and exit this function
      setEnemyStats(dispatch, enemySkill, enemyStamina, enemyName);
      setPageAfterCombat(dispatch, pageAfter); // where should we go after combat?
      startCombat(dispatch);
      return;
    }

    // Has to be done dynamically because you can fight 0,1 or 2 enemies
    if (nodeVisiting === 155 && choice.cameFrom === 407) {
      startCombat(dispatch, true)
      setPageAfterCombat(dispatch, 155)
    }

    const oneTimeNodes = [107, 214, 22, 141, 5, 60]; // trader 1 items
    if (oneTimeNodes.includes(nodeVisiting)) {
      addToTraderItems(dispatch, nodeVisiting);
    }

    const changeLockSmash = 360;
    const lockSmashNode = 142;
    if (nodeVisiting === lockSmashNode && choice.cameFrom === changeLockSmash) {
      locksmashPrevious(dispatch, 360);
    }

    const changeFallNodes = [330, 424];
    if (changeFallNodes.includes(nodeVisiting)) {
      pitfallPrevious(dispatch, nodeVisiting);
    }

    if (nodeVisiting === 120 && choice.caveIn) {
      loseStat(dispatch, "skill", 1)
    }

    if (nodeVisiting === 18) {
      const gainStamina = _eatenToday ? 1 : 2;
      gainStat(dispatch, "stamina", gainStamina);
      changeEatenToday(dispatch, true);
    }

    if (nodeVisiting === 75 && choice.loseWeapon) {
      loseEquippedWeapon(dispatch);
      equipSpecificWeapon(dispatch, "craftedSword");
    }

    if (choice === null || choice === undefined) return;
    if (choice.cost > 0) payMoney(dispatch, choice.cost);
    if (choice.needLibra) loseLibra(dispatch);
    if (choice.items) addItems(choice.items);

    switch (nodeVisiting) {
      case 204:
        visitWaterfall(dispatch);
        break;
      case 37:
      case 111:
        playerGetsJann(dispatch);
        break;
      case 251:
        seenBox1(dispatch);
        break
      case 258:
        seenBox2(dispatch);
        break
      case 185:
        loseEquippedWeapon(dispatch);
        break
      case 261:
        robbedByBandits(dispatch, _equippedWeapon);
        break
      case 205:
        playerLosesJann(dispatch);
        break;
      default:
    }
    setPage(dispatch, choice.goToPage);
    setStayShowing(false);
  }, [_eatenToday, _equippedWeapon, dispatch, setStayShowing]);

  useHandleKeydown(choices, pause, handleChoice)

  const displayOptions = () => {
    if (pause) return null;
    return choices.map((choice, i) => {
      const dontBlock = choice.blocked !== true;
      return (
        <p
          key={i}
          className={`${dontBlock ? "userChoice" : "blockedChoice"}`}
          onClick={() => (dontBlock ? handleChoice(choice, _nightCreaturePrevious) : null)}
        >
          {i + 1}: {choice.text}
        </p>
      );
    });
  };

  return <div className="text-center">{displayOptions()}</div>;
};

export default PlayerChoices;
