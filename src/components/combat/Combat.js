import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Combat.css";
import useHandleKeyDown from "../../hooks/useHandleKeydown";
import useInterval from "../../hooks/useInterval";
import {
  damageAlly,
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
  getAppliedBeeswax,
  getAllies,
} from "../../redux/combat/selectors";
import { getEquippedWeapon, ownItem } from "../../redux/items/selectors";
import { gainStat, loseStat, takeDamage } from "../../redux/stats/actions";
import { getSpiritCurse } from "../../redux/stats/selectors";
import { nightCreatureFight, setPage } from "../../redux/story/actions";
import {
  getNightCreatureFight,
  getNightCreaturePrevious,
  getPreviousPage,
  getFireball,
} from "../../redux/story/selectors";
import { diceRolls, resetNightCreatures } from "../../utils";
import AllyStats from "./AllyStats";
import CombatText from "./CombatText";
import EnemyStats from "./EnemyStats";
import PlayerStats from "./PlayerStats";

const Combat = ({ pageNumber, skill, stamina, maxStamina, luck, maxLuck }) => {
  const dispatch = useDispatch();

  // Are you dead but TYL will revive you?
  const [lastLife, setLastLife] = useState(false);

  // + 1 damage, this is done in the redux, but needs to be displyed visually to the user
  const _curse = useSelector(getSpiritCurse);

  // Enemy stats
  const _enemyStats = useSelector(getEnemyStats);
  const enemySkill = _enemyStats.skill;
  const enemyStamina = _enemyStats.stamina;
  const enemyMaxStamina = _enemyStats.maxStamina;
  const enemyName = _enemyStats.name;
  const _extraEnemies = useSelector(getExtraEnemies);

  // Allies
  const _allies = useSelector(getAllies);
  const currentAlly = _allies[0];
  let playerFighting = true;
  if (_allies.length > 0) playerFighting = false;

  let allyName, allyStamina, allyMaxStamina, allySkill;
  if (_allies.length) {
    allyName = currentAlly.name;
    allyStamina = currentAlly.stamina;
    allyMaxStamina = currentAlly.maxStamina;
    allySkill = currentAlly.skill;
  }

  const curseText = playerFighting && _curse ? "(+1)" : "";

  useEffect(() => {
    if (_allies.length === 0) {
      // All allies have died so reset some stats
      setAutoFight(false);
      setCanUseLuck(false);
    }
  }, [_allies.length]);

  // Night Creatures
  const _nightCreatureFight = useSelector(getNightCreatureFight);
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);

  const _beeswax = useSelector(getAppliedBeeswax);
  // Manticore
  const [manticorePoison, setManticorePoison] = useState(false);
  const [fireballDamage, setFireballDamage] = useState(false);
  const _fireball = useSelector(getFireball);
  if (_fireball && !fireballDamage) {
    setFireballDamage(true);
    damageEnemy(dispatch, 6);
  }

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

  // Regular, gob, yob.
  const manticorePages = [227, 369, 388];
  const onManticorePage = manticorePages.includes(pageNumber);

  const swordList = ["sword", "craftedSword", "broadsword", "glandragorSword"];
  if (_haveArmband && swordList.includes(_equippedWeapon)) {
    playerAttStrModifier += 2;
  }

  // Comabt mods
  let enemyAttStrModifier = 0;
  let enemyDamage = 2;
  let playerSkill = skill;
  if (pageNumber === 453) playerSkill *= 2;
  if (pageNumber === 20) playerAttStrModifier -= 2;
  if (pageNumber === 203) enemyAttStrModifier += 2;
  if (pageNumber === 386) enemyAttStrModifier -= 2;
  if (pageNumber === 411) playerSkill *= 2;
  if (pageNumber === 442 && _beeswax) damage *= 2;
  if (pageNumber === 328 && _beeswax) damage *= 2;

  const attackStrength = skill + playerAttStrModifier;
  const enemyAS = enemySkill + enemyAttStrModifier;

  const handleAttack = () => {
    setRound((r) => r + 1);
    setCanUseLuck(true);
    setManticorePoison(false);
    let localPoison = false;
    const playerRoll = diceRolls(2, true);
    const enemyRoll = diceRolls(2, true);

    let playerTotal = playerRoll;
    playerTotal += playerFighting ? attackStrength : allySkill;
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
      newText.line2 = `Damaged the enemy for ${damage} points!`;
      newText.line2style += "text-success";
    } else if (enemyTotal > playerTotal) {
      if (onManticorePage) {
        const roll = Math.ceil(Math.random() * 3);
        if (roll === 1) {
          enemyDamage = 6;
          localPoison = true;
          setManticorePoison(true);
        }
      }

      if (playerFighting) {
        let cursedDamage = enemyDamage;
        if (_curse) cursedDamage++
        const healthAfter = stamina - cursedDamage;
        if (healthAfter <= 0) {
          // about to die
          const luckHeal = enemyDamage === 6 ? 4 : 1;
          if (luckHeal + healthAfter > 0) {
            // luck will revive player
            setLastLife(true);
          }
        }
      }

      if (playerFighting) {
        takeDamage(dispatch, enemyDamage);
        setWhoWasDamaged("player");
      } else {
        damageAlly(dispatch, enemyDamage);
        setWhoWasDamaged("ally");
      }
      const whoWasHurt = playerFighting ? "you" : "your champion";
      let textToAdd = `The ${enemyName} damaged ${whoWasHurt} for ${enemyDamage}${curseText} points.`;
      let critText = playerFighting ? ", you've been poisoned!" : ".";
      if (localPoison) textToAdd += ` Critical hit${critText}`;
      newText.line2 = textToAdd;
      newText.line2style += "text-danger";
    } else {
      setCanUseLuck(false);
      const whoClashes = playerFighting ? "You" : "They";
      newText.line2 = `${whoClashes} clash in battle and do no damage to each other.`;
    }
    const whoRolled = playerFighting ? "You" : "Your champion";
    newText.line1 = `${whoRolled} rolled a ${playerRoll} (+${attackStrength}), for a total of: ${playerTotal}. The
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
      if (lastLife) {
        newText.line1 =
          "The enemy has killed you unless you succesfully test your luck!";
        newText.line1style += " font-weight-bold";
      } else if (stamina <= 0) {
        setCanUseLuck(false);
        setSomeoneDead(true);
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

      if (someoneDead || lastLife) {
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
  }, [_enemyStats, _extraEnemies, stamina, dispatch, enemyStamina, lastLife]);

  const handleLuck = () => {
    setCanUseLuck(false);
    const luckRoll = diceRolls(2, true);
    const rollPassed = luckRoll <= luck;
    loseStat(dispatch, "luck", 1);

    let newText = {
      line1: "",
      line1style: "mt-0",
    };

    if (whoWasDamaged === "player") {
      if (manticorePoison) {
        if (rollPassed) {
          newText.line1 =
            "Test your Luck - Success. The Manticore only scored a normal attack and you recover 4 Stamina.";
          newText.line1style = " mb-0";
          gainStat(dispatch, "stamina", 4);
        } else {
          newText.line1 = "Test your Luck - Fail. You take the full damage.";
        }
      }

      if (!manticorePoison) {
        if (rollPassed) {
          newText.line1 =
            "Test your Luck - Success. The enemy merely grazed you and you recover 1 Stamina.";
          gainStat(dispatch, "stamina", 1);
        } else {
          newText.line1 =
            "Test your Luck - Fail: The enemy hit an artery, you lose an additional point of damage.";
          takeDamage(dispatch, 1);
        }
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

    setLastLife(false);
    setText([...text, newText]);
  };

  const shouldIntervalRun = autoFight && !someoneDead;
  useInterval(handleAttack, shouldIntervalRun ? 750 : null);

  const playerDead = stamina <= 0;

  const handleChoice = () => {
    if (playerDead) {
      handleDeath();
      return;
    }
    if (_nightCreatureFight) {
      const nightCreatureMap = {
        84: 31,
        108: 36,
        283: 31,
      };
      _nextPage = nightCreatureMap[_nightCreaturePrevious];
      resetNightCreatures();
      nightCreatureFight(dispatch, false);
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

  const handleDeath = () => {
    endCombat(dispatch);
    setPage(dispatch, 0);
  };

  const choices = [{ text: `${playerDead ? "Death" : "Continue"}` }];
  useHandleKeyDown(choices, !someoneDead, handleChoice);

  const getSkillDifference = () => {
    if (playerFighting) return attackStrength - enemyAS;
    return allySkill - enemyAS;
  };

  return (
    <Container>
      <Row className="borderBottom">
        {playerFighting && (
          <PlayerStats
            stamina={stamina}
            maxStamina={maxStamina}
            skill={skill}
            playerAttStrModifier={playerAttStrModifier}
            damage={damage}
            luck={luck}
            maxLuck={maxLuck}
            someoneDead={someoneDead}
            autoFight={autoFight}
            handleAttack={handleAttack}
            handleLuck={handleLuck}
            canUseLuck={canUseLuck}
            setAutoFight={setAutoFight}
            pageNumber={pageNumber}
            enemyStamina={enemyStamina}
            handleSpareHim={handleSpareHim}
            doubleSkill={playerSkill / skill === 2}
            lastLife={lastLife}
            skillDifference={getSkillDifference()}
          />
        )}

        {!playerFighting && (
          <AllyStats
            name={allyName}
            stamina={allyStamina}
            maxStamina={allyMaxStamina}
            skill={allySkill}
            autoFight={autoFight}
            setAutoFight={setAutoFight}
            skillDifference={getSkillDifference()}
          />
        )}

        <EnemyStats
          enemyName={enemyName}
          enemyStamina={enemyStamina}
          enemySkill={enemySkill}
          enemyAttStrModifier={enemyAttStrModifier}
          enemyMaxStamina={enemyMaxStamina}
          extraEnemies={_extraEnemies}
          skillDifference={-getSkillDifference()}
        />
      </Row>
      {text.slice(-5).map((text, i) => (
        <CombatText text={text} key={i} />
      ))}
      {someoneDead && (
        <Row>
          <Col className="text-center">
            <p className="userChoice" onClick={handleChoice}>
              {`1: ${choices[0].text}`}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Combat;
