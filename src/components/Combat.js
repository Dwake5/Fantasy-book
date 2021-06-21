import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import knight from "../assets/images/knight.jpeg";
import wolf from "../assets/images/wolf.jpeg";
import "../assets/css/Combat.css";
import { diceRolls } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { getSkill, getStat } from "../redux/stats/selectors";
import { gainStat, loseStat } from "../redux/stats/actions";
import { getEnemyStats, getNextPage } from "../redux/combat/selectors";
import { damageEnemy, endCombat } from "../redux/combat/actions";
import { setPage } from "../redux/story/actions";
import { getEquippedWeapon, ownItem } from "../redux/items/selectors";

const Combat = () => {
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

  const _nextPage = useSelector(getNextPage);

  const [text, setText] = useState([]);
  const [deathText, setDeathText] = useState("");
  const [whoWasDamaged, setWhoWasDamaged] = useState(null);
  const [canUseLuck, setCanUseLuck] = useState(false);
  const [someoneDead, setSomeoneDead] = useState(false);

  const [autoFight, setAutoFight] = useState(false);
  const _haveArmband = useSelector((state) => ownItem(state, "armband"));
  const _equippedWeapon = useSelector(getEquippedWeapon);

  let asModifier = 0;
  let damage = 2;
  if (_equippedWeapon === "craftedSword") {
    damage++;
  } else if (_equippedWeapon === "broadsword") {
    asModifier++;
  } else if (_equippedWeapon === "axe") {
    asModifier--;
  }

  const swordList = ["sword", "craftedSword", "broadsword", "glandragorSword"];
  if (_haveArmband && swordList.includes(_equippedWeapon)) {
    asModifier += 2;
  }

  const attackStrength = _skill + asModifier;

  const checkDeath = () => {
    let localText = "";
    let someoneDead = false;
    if (_stamina <= 0) {
      someoneDead = true;
      localText = <p><b>Oh no, you have died.</b></p>;
    }
    if (enemyStamina <= 0) {
      someoneDead = true;
      localText = <p><b>You have won, the enemy is dead!</b></p>;
    }

    if (someoneDead) {
      const deadText = <p>{localText}</p>;
      setDeathText(deadText);
      setAutoFight(false);
      setSomeoneDead(true);
    }
  };

  const handleAttack = () => {
    setCanUseLuck(true);
    const playerRoll = diceRolls(2, true);
    const enemyRoll = diceRolls(2, true);

    const playerTotal = playerRoll + attackStrength;
    const enemyTotal = enemyRoll + enemySkill;

    let damagedText = "";

    if (playerTotal > enemyTotal) {
      damageEnemy(dispatch, damage);
      setWhoWasDamaged("enemy");
      damagedText = (
        <p className="text-success">You damaged the enemy for {damage} points!</p>
      );
    } else if (enemyTotal > playerTotal) {
      loseStat(dispatch, "stamina", 2);

      setWhoWasDamaged("player");
      damagedText = (
        <p className="text-danger">The enemy damaged you for 2 points.</p>
      );
    } else {
      damagedText = <p>You miss each other causing no damage.</p>;
    }

    const div = (
      <div>
        <p className="mb-0">
          You rolled a {playerRoll}, for a total of: {playerTotal}. Enemy rolled
          a {enemyRoll}, for a total of: {enemyTotal}
        </p>
        {damagedText}
      </div>
    );

    setText([...text, div]);
  };

  useEffect(() => {
    checkDeath();
  }, [_stamina, enemyStamina]);

  const handleLuck = () => {
    setCanUseLuck(false);
    let localText = "";
    const luckRoll = diceRolls(2, true);
    const rollPassed = luckRoll <= _luck;
    loseStat(dispatch, "luck", 1);

    if (whoWasDamaged === "player") {
      if (rollPassed) {
        localText = (
          <p>
            <span className="text-success">Test your Luck - Success:</span> The
            enemy merely grazed you and you recover 1 Stamina.
          </p>
        );
        gainStat(dispatch, "stamina", 1);
      } else {
        localText = (
          <p>
            <span className="text-danger">Test your Luck - Fail:</span> The
            enemy hit an artery, you lose an additional point of damage.
          </p>
        );
        loseStat(dispatch, "stamina", 1);
      }
    }

    if (whoWasDamaged === "enemy") {
      if (rollPassed) {
        localText = (
          <p>
            <span className="text-success">Test your Luck - Success:</span> You
            land a devestating blow on the enemy, scoring an extra point of
            damage!
          </p>
        );
        damageEnemy(dispatch, 1);
      } else {
        localText = (
          <p>
            <span className="text-danger">Test your Luck - Fail:</span> Your
            attack merely grazed the monster and he recovers a point of damage.
          </p>
        );
        damageEnemy(dispatch, -1);
      }
    }

    setText([...text, localText]);
  };

  const useInterval = (callback, delay) => {
    const intervalId = useRef(null);
    const savedCallback = useRef(callback);
    useEffect(() => {
      savedCallback.current = callback;
    });
    useEffect(() => {
      const tick = () => savedCallback.current();
      if (typeof delay === "number") {
        intervalId.current = window.setInterval(tick, delay);
        return () => window.clearInterval(intervalId.current);
      }
    }, [delay]);
    return intervalId.current;
  };

  const shouldIntervalRun = autoFight && !someoneDead;
  useInterval(handleAttack, shouldIntervalRun ? 750 : null);

  const choices = [{ goToPage: _nextPage, text: "Continue" }];

  const handleChoice = () => {
    endCombat(dispatch);
    setPage(dispatch, _nextPage);
  };

  return (
    <Container>
      <Row>
        <Col className="border">
          <p className="text-center h3">You</p>
          <div className="imageContainer mb-3">
            <img src={knight} alt="You fighting the enemy" />
          </div>
          <p className="mb-0">
            Stamina: {_stamina} / {_maxStamina}
          </p>
          <p className="mb-0">
            Attack Strength: {_skill}{" "}
            {asModifier !== 0
              ? `(${asModifier > 0 ? "+" : ""}${asModifier})`
              : ""}
          </p>
          <p className="mb-3">
            Luck: {_luck} / {_maxLuck}
          </p>

          <div className="d-flex flex-column align-items-start">
            <div>
              <button
                disabled={someoneDead || autoFight}
                onClick={handleAttack}
                className="btn btn-danger mb-4 mr-3"
              >
                Attack
              </button>
              <button
                onClick={handleLuck}
                disabled={!canUseLuck || someoneDead || autoFight}
                className="btn btn-warning mb-4"
              >
                Test your Luck
              </button>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <button
                className="mr-2 btn border"
                onClick={() => setAutoFight(!autoFight)}
                disabled={someoneDead}
              >
                Auto Fight
              </button>
              <p className="mb-0">{autoFight ? "ON" : "OFF"}</p>
            </div>
          </div>
        </Col>

        <Col className="border">
          <p className="text-center h3">{enemyName}</p>
          <div className="imageContainer ml-auto mb-3">
            <img src={wolf} alt="You enemy" />
          </div>
          <div className="text-right">
            <p className="mb-0">
              Stamina: {enemyStamina} / {enemyMaxStamina}
            </p>
            <p className="mb-0">Attack Strength: {enemySkill}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>{text.map((text) => text)}{deathText && deathText}</Col>
      </Row>
      {someoneDead && (
        <Row>
          <Col className="text-center">
            {choices.map((choice, i) => {
              return (
                <p
                  key={i}
                  className="userChoice"
                  onClick={() => handleChoice(choice)}
                >
                  {i + 1}: {choice.text}
                </p>
              );
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Combat;
