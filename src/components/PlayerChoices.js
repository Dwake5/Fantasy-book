import { Text } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import gameData from "../assets/gameData";
import useHandleKeydown from "../hooks/useHandleKeydown";
import {
  addExtraEnemies,
  setEnemyStats,
  setPageAfterCombat,
  startCombat,
  applyBeeswax,
  addAllies,
} from "../redux/combat/actions";
import {
  changeItemAmount,
  equipSpecificWeapon,
  loseEquippedWeapon,
  payMoney,
  robbedByBandits,
} from "../redux/items/actions";
import { getEquippedWeapon, ownItem } from "../redux/items/selectors";
import {
  changeEatenToday,
  gainStat,
  loseLibra,
  playerGetsJann,
  playerLosesJann,
  visitWaterfall,
} from "../redux/stats/actions";
import { eatenToday } from "../redux/stats/selectors";
import {
  addToTraderItems,
  locksmashPrevious,
  nightCreaturePrevious,
  pitfallPrevious,
  seenBox1,
  seenBox2,
  setPage,
  usedFireball,
} from "../redux/story/actions";
import {
  getNightCreaturePrevious,
  getPreviousPage,
} from "../redux/story/selectors";
import { resetNightCreatures } from "../utils";

const PlayerChoices = ({ choices, setStayShowing, pause, clearSpellState }) => {
  const dispatch = useDispatch();
  const _eatenToday = useSelector(eatenToday);
  const _equippedWeapon = useSelector(getEquippedWeapon);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);
  const _previousPage = useSelector(getPreviousPage);

  const _haveWaterfallPass = useSelector((state) =>
    ownItem(state, "waterfallPass")
  );

  const handleChoice = useCallback(
    (choice, NCP, previous, waterfallPass) => {
      const addItems = (items) => {
        items.forEach((item) => {
          changeItemAmount(dispatch, item);
        });
      };

      const nodeVisiting = choice.goToPage;

      if (choice.appliedBeeswax) applyBeeswax(dispatch);

      if (choice.cost && !choice.dontPay) {
        if (nodeVisiting === 204 && waterfallPass) {
          changeItemAmount(dispatch, { name: "waterfallPass", amount: -1 });
          gameData[204].text = gameData[204].text.replace(
            "3 Gold Pieces",
            "Waterfall Pass"
          );
        } else {
          payMoney(dispatch, choice.cost);
        }
      }

      // Night creatures lead to a dynamic node so start a fight and check after
      if (choice.fightNC) {
        startCombat(dispatch);
        return;
      }

      if (choice.nightContinue) {
        const nightCreatureMap = {
          84: 31,
          108: 36,
          283: 31,
        };
        const nextPage = nightCreatureMap[NCP];
        const plusOneHealthNodes = [108, 283];
        const doAddOneHealth = plusOneHealthNodes.includes(NCP);
        if (doAddOneHealth) gainStat(dispatch, "stamina", 1);
        setPage(dispatch, nextPage);
        resetNightCreatures();
        return;
      }

      // Block magic from double casting
      if (choice.text.slice(0, 5) === "Magic") {
        choice.blocked = true;
      }
      // Block single use nodes, currently unused
      if (choice.singleUse) {
        choice.blocked = true;
      }

      // night creatures
      const leadsToNightCreatures = [84, 108, 283];
      if (leadsToNightCreatures.includes(nodeVisiting)) {
        nightCreaturePrevious(dispatch, nodeVisiting);
      }

      if (choice.fight) {
        let enemySkill = choice.fight.skill;
        const enemyStamina = choice.fight.stamina;
        const enemyName = choice.fight.name;
        const pageAfter = choice.goToPage;
        const { extraEnemies, allies } = choice;
        if (extraEnemies !== undefined) addExtraEnemies(dispatch, extraEnemies);
        if (allies !== undefined) addAllies(dispatch, allies);

        if (previous === 325) enemySkill /= 2; // Half Manticore skill

        // set stats, start combat and exit this function
        setEnemyStats(dispatch, enemySkill, enemyStamina, enemyName);
        setPageAfterCombat(dispatch, pageAfter); // where should we go after combat?
        startCombat(dispatch);
        return;
      }

      // Has to be done dynamically because you can fight 0, 1 or 2 enemies
      if (nodeVisiting === 155 && choice.cameFrom === 407) {
        startCombat(dispatch, true);
        setPageAfterCombat(dispatch, 155);
      }

      // Cast fireball at Manticore
      if (nodeVisiting === 346) {
        usedFireball(dispatch);
      }

      const oneTimeNodes = [107, 214, 22, 141, 5, 60]; // trader 1 items
      if (oneTimeNodes.includes(nodeVisiting)) {
        addToTraderItems(dispatch, nodeVisiting);
      }

      const changeLockSmash = 360;
      const lockSmashNode = 142;
      if (
        nodeVisiting === lockSmashNode &&
        choice.cameFrom === changeLockSmash
      ) {
        locksmashPrevious(dispatch, 360);
      }

      const changeFallNodes = [330, 424];
      if (changeFallNodes.includes(nodeVisiting)) {
        pitfallPrevious(dispatch, nodeVisiting);
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
      if (choice.needLibra) loseLibra(dispatch);
      if (choice.items) addItems(choice.items);

      switch (nodeVisiting) {
        case 204:
          visitWaterfall(dispatch);
          break;
        case 37:
          playerGetsJann(dispatch);
          break;
        case 111:
          playerGetsJann(dispatch);
          break;
        case 251:
          seenBox1(dispatch);
          break;
        case 258:
          seenBox2(dispatch);
          break;
        case 185:
          loseEquippedWeapon(dispatch);
          break;
        case 261:
          robbedByBandits(dispatch, _equippedWeapon);
          break;
        case 205:
          playerLosesJann(dispatch);
          break;
        default:
      }
      setPage(dispatch, choice.goToPage);
      setStayShowing(false);
    },
    [_eatenToday, _equippedWeapon, dispatch, setStayShowing]
  );

  useHandleKeydown(choices, pause, handleChoice);

  const displayOptions = () => {
    if (pause) return null;
    return choices.map((choice, i) => {
      const dontBlock = choice.blocked !== true;
      return (
        <p
          key={i}
          className={`${dontBlock ? "userChoice" : "blockedChoice"}`}
          onClick={() =>
            dontBlock
              ? handleChoice(
                  choice,
                  _nightCreaturePrevious,
                  _previousPage,
                  _haveWaterfallPass
                )
              : null
          }
        >
          {i + 1}: {choice.text}
        </p>
      );
    });
  };

  return <Text textAlign="center" mt={4}>{displayOptions()}</Text>;
};

export default PlayerChoices;
