import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Combat.css";
import useHandleKeyDown from "../../hooks/useHandleKeydown";
import useInterval from "../../hooks/useInterval";
import {
  damageEnemy,
  endCombat,
  removeEnemyFromQueue,
  setDoubleEnemySkill,
  setEnemyStats,
} from "../../redux/combat/actions";
import {
  getEnemyStats,
  getExtraEnemies,
  getNextPage,
} from "../../redux/combat/selectors";
import { getEquippedWeapon, ownItem } from "../../redux/items/selectors";
import { gainStat, loseStat } from "../../redux/stats/actions";
import { getSkill, getStat } from "../../redux/stats/selectors";
import { nightCreatureFight, setPage } from "../../redux/story/actions";
import {
  getNightCreatureFight,
  getNightCreaturePrevious,
  getPreviousPage,
} from "../../redux/story/selectors";
import { diceRolls, resetNightCreatures } from "../../utils";
import CombatText from "./CombatText";
import EnemyStats from "./EnemyStats";
import PlayerStats from "./PlayerStats";

const Combat = ({ pageNumber }) => {
  const dispatch = useDispatch();
  // Player stats
  const _skill = useSelector(getSkill);
  const _stamina = useSelector((state) => getStat(state, "stamina"));
  const _maxStamina = useSelector((state) => getStat(state, "maxStamina"));
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _maxLuck = useSelector((state) => getStat(state, "maxLuck"));
  // Enemy stats
  const _enemyStats = useSelector(getEnemyStats);
  const enemySkill = _enemyStats.skill;
  const enemyStamina = _enemyStats.stamina;
  const enemyMaxStamina = _enemyStats.maxStamina;
  const enemyName = _enemyStats.name;
  const _extraEnemies = useSelector(getExtraEnemies);
  // Night Creatures
  const _nightCreatureFight = useSelector(getNightCreatureFight);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);

  const _previousPage = useSelector(getPreviousPage);

  let _nextPage = useSelector(getNextPage);

  const [text, setText] = useState([]);
  const [whoWasDamaged, setWhoWasDamaged] = useState(null);
  const [canUseLuck, setCanUseLuck] = useState(false);
  const [someoneDead, setSomeoneDead] = useState(false);
  const [round, setRound] = useState(0);
  const [alreadyDoubled, setAlreadyDoubed] = useState(false);
  const [autoFight, setAutoFight] = useState(false);

  const _haveArmband = useSelector((state) => ownItem(state, "armband"));
  const _equippedWeapon = useSelector(getEquippedWeapon);

  let playerAttStrModifier = 0;
  let damage = 2;
  if (_equippedWeapon === "craftedSword") {
    damage++;
  } else if (_equippedWeapon === "broadsword") {
    playerAttStrModifier++;
  } else if (_equippedWeapon === "axe") {
    playerAttStrModifier--;
  }

  
  const manticorePages = [227];
  const onManticorePage = manticorePages.includes(pageNumber);
  
  const swordList = ["sword", "craftedSword", "broadsword", "glandragorSword"];
  if (_haveArmband && swordList.includes(_equippedWeapon)) {
    playerAttStrModifier += 2;
  }
  
  // Comabt mods
  let enemyAttStrModifier = 0;
  let enemyDamage = 2;
  let skill = _skill;
  if (pageNumber === 453) skill *= 2;
  if (pageNumber === 20) playerAttStrModifier -= 2;
  if (pageNumber === 203) enemyAttStrModifier += 2;
  if (pageNumber === 386) enemyAttStrModifier -= 2;
  if (pageNumber === 411) skill *= 2;
  if (pageNumber === 442) damage *= 2;

  const attackStrength = skill + playerAttStrModifier;
  const enemyAS = enemySkill + enemyAttStrModifier;

  const handleAttack = () => {
    setCanUseLuck(true);
    setRound((r) => r + 1);
    const playerRoll = diceRolls(2, true);
    const enemyRoll = diceRolls(2, true);

    const playerTotal = playerRoll + attackStrength;
    const enemyTotal = enemyRoll + enemyAS;

    let newText = {
      line1: "",
      line2: "",
      line1style: "",
      line2style: "mb-0 ",
    };

    if (playerTotal > enemyTotal) {
      damageEnemy(dispatch, damage);
      setWhoWasDamaged("enemy");
      newText.line2 = `You damaged the enemy for ${damage} points!`;
      newText.line2style += "text-success";
    } else if (enemyTotal > playerTotal) {
      loseStat(dispatch, "stamina", enemyDamage);
      setWhoWasDamaged("player");
      newText.line2 = `The ${enemyName} damaged you for ${enemyDamage} points.`;
      newText.line2style += "text-danger";
    } else {
      setCanUseLuck(false);
      newText.line2 = "You clash in battle and do no damage to each other.";
    }

    newText.line1 = `You rolled a ${playerRoll} (+${attackStrength}), for a total of: ${playerTotal}. The
    ${enemyName} rolled a ${enemyRoll} (+${enemyAS}), for a total of: ${enemyTotal}.`;
    newText.line1style = "mb-0 mt-3";
    const doubleSkillPages = [317, 383];
    if (doubleSkillPages.includes(pageNumber) && !alreadyDoubled && round > 2) {
      doubleEnemySkill(pageNumber);
    }
    if (_previousPage === 325 && !alreadyDoubled && round > 2) {
      doubleEnemySkill(pageNumber);
    }
    setText([...text, newText]);
  };

  const doubleEnemySkill = (page) => {
    if (page === 317) {
      const shouldDouble = Math.ceil(Math.random() * 2) === 2;
      if (shouldDouble) {
        setAlreadyDoubed(true);
        setDoubleEnemySkill(dispatch, enemyAS);
      }
    }
    if (page === 383 || page === 227) {
      setAlreadyDoubed(true);
      setDoubleEnemySkill(dispatch, enemyAS);
    }
  };

  useEffect(() => {
    const checkDeath = () => {
      let newText = {
        line1: "",
        line1style: "mt-3 mb-0 ",
        line2: "",
        line2style: "mb-0",
      };

      let someoneDead = false;
      if (_stamina <= 0) {
        setCanUseLuck(false);
        someoneDead = true;
        newText.line1 = "Oh no, you have died!";
        newText.line1style += " font-weight-bold";
      }
      if (enemyStamina <= 0) {
        setCanUseLuck(false);
        someoneDead = true;
        newText.line1 = "You have won, the enemy is dead!";
        newText.line1style += " font-weight-bold";
        if (_extraEnemies.length > 0) {
          const nextEnemyName = _extraEnemies[0].name;
          newText.line2 = `${nextEnemyName} steps up to fight you.`;
          handleExtraEnemies();
        } else {
          setAutoFight(false);
          setSomeoneDead(true);
        }
      }

      if (someoneDead) {
        setText((text) => [...text, newText]);
      }
    };

    const handleExtraEnemies = () => {
      const nextEnemy = _extraEnemies[0];
      const enemySkill = nextEnemy.skill;
      const enemyStamina = nextEnemy.stamina;
      const enemyName = nextEnemy.name;
      setEnemyStats(dispatch, enemySkill, enemyStamina, enemyName);
      removeEnemyFromQueue(dispatch);
    };

    checkDeath();
  }, [_enemyStats, _extraEnemies, _stamina, dispatch, enemyStamina]);

  const handleLuck = () => {
    setCanUseLuck(false);
    const luckRoll = diceRolls(2, true);
    const rollPassed = luckRoll <= _luck;
    loseStat(dispatch, "luck", 1);

    let newText = {
      line1: "",
      line1style: "mt-0",
    };

    if (whoWasDamaged === "player") {
      if (rollPassed) {
        newText.line1 =
          "Test your Luck - Success. The enemy merely grazed you and you recover 1 Stamina.";
        gainStat(dispatch, "stamina", 1);
      } else {
        newText.line1 =
          "Test your Luck - Fail: The enemy hit an artery, you lose an additional point of damage.";
        loseStat(dispatch, "stamina", 1);
      }
    }

    if (whoWasDamaged === "enemy") {
      if (rollPassed) {
        newText.line1 =
          "Test your Luck - Success: You land a devestating blow on the enemy, scoring an extra point of damage!";
        damageEnemy(dispatch, 1);
      } else {
        newText.line1 =
          "Test your Luck - Fail: Your attack merely grazed the monster and he recovers a point of damage.";
        damageEnemy(dispatch, -1);
      }
    }

    setText([...text, newText]);
  };

  const shouldIntervalRun = autoFight && !someoneDead;
  useInterval(handleAttack, shouldIntervalRun ? 750 : null);

  const handleChoice = () => {
    console.log('_nightCreatureFight :', _nightCreatureFight);
    if (_nightCreatureFight) {
      const nightCreatureMap = {
        84: 31,
        108: 36,
        283: 31,
      };
      _nextPage = nightCreatureMap[_nightCreaturePrevious];
      resetNightCreatures();
      nightCreatureFight(dispatch, false)
    }
    const plusOneHealthNodes = [108, 283];
    const doAddOneHealth = plusOneHealthNodes.includes(_nightCreaturePrevious);
    if (doAddOneHealth) gainStat(dispatch, "stamina", 1);
    endCombat(dispatch);
    setPage(dispatch, _nextPage);
  };

  const handleSpareHim = () => {
    endCombat(dispatch);
    setPage(dispatch, 187);
  };

  const choices = [{ text: "Continue" }];
  useHandleKeyDown(choices, !someoneDead, handleChoice);

  return (
    <Container>
      <Row>
        <PlayerStats
          stamina={_stamina}
          maxStamina={_maxStamina}
          skill={skill}
          playerAttStrModifier={playerAttStrModifier}
          damage={damage}
          luck={_luck}
          maxLuck={_maxLuck}
          someoneDead={someoneDead}
          autoFight={autoFight}
          handleAttack={handleAttack}
          handleLuck={handleLuck}
          canUseLuck={canUseLuck}
          setAutoFight={setAutoFight}
          pageNumber={pageNumber}
          enemyStamina={enemyStamina}
          handleSpareHim={handleSpareHim}
          doubleSkill={skill / _skill === 2}
        />

        <EnemyStats
          enemyName={enemyName}
          enemyStamina={enemyStamina}
          enemySkill={enemySkill}
          enemyAttStrModifier={enemyAttStrModifier}
          enemyMaxStamina={enemyMaxStamina}
          extraEnemies={_extraEnemies}
        />
      </Row>
      {text.slice(-5).map((text, i) => (
        <CombatText text={text} key={i} />
      ))}
      {someoneDead && (
        <Row>
          <Col className="text-center">
            <p className="userChoice" onClick={handleChoice}>
              1: Continue
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Combat;
