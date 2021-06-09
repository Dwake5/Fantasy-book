import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import knight from "../assets/images/knight.jpeg";
import wolf from "../assets/images/wolf.jpeg";
import "../assets/css/Combat.css";
import { diceRolls } from "../utils";

function Magic() {
  const [text, setText] = useState([]);
  const [health, setHealth] = useState(20);
  const [whoWasDamaged, setWhoWasDamaged] = useState(null);
  const [canUseLuck, setCanUseLuck] = useState(false);
  const [someoneDead, setSomeoneDead] = useState(false);

  const [autoFight, setAutoFight] = useState(false);

  const maxHealth = 20;
  const skill = 12;
  const [luck, setLuck] = useState(8);
  const maxLuck = 8;

  const [enemyHealth, setEnemyHealth] = useState(6);
  const maxEnemyHealth = 10;
  const enemySkill = 9;

  const checkDeath = () => {
    let localText = "";
    let someoneDead = false;
    if (health <= 0) {
      someoneDead = true;
      localText = "Oh no, you have died.";
    }
    if (enemyHealth <= 0) {
      someoneDead = true;
      localText = "You have won. The enemy is dead.";
    }

    const deadText = <p>{localText}</p>;

    if (someoneDead) {
      setText([...text, deadText]);
      setSomeoneDead(true);
    }
  };

  const handleAttack = () => {
    setCanUseLuck(true);
    const playerRoll = diceRolls(2, true);
    const enemyRoll = diceRolls(2, true);

    const playerTotal = playerRoll + skill;
    const enemyTotal = enemyRoll + enemySkill;

    let damagedText = "";

    if (playerTotal > enemyTotal) {
      setEnemyHealth(enemyHealth - 2);
      setWhoWasDamaged("enemy");
      damagedText = "You damaged the enemy for 2 points!";
    } else if (enemyTotal > playerTotal) {
      setHealth(health - 2);
      setWhoWasDamaged("player");
      damagedText = "The enemy damaged you for 2 points.";
    } else {
      damagedText = "You miss each other causing no damage.";
    }

    const div = (
      <div>
        <p className="mb-0">
          You rolled a {playerRoll}, for a total of: {playerTotal}. Enemy rolled
          a {enemyRoll}, for a total of: {enemyTotal}
        </p>
        <p>{damagedText}</p>
      </div>
    );

    setText([...text, div]);
  };

  useEffect(() => {
    checkDeath();
  }, [health, enemyHealth]);

  const handleLuck = () => {
    setCanUseLuck(false);
    let localText = "";
    const luckRoll = diceRolls(2, true);
    const rollPassed = luckRoll <= luck;
    setLuck(luck - 1);

    if (whoWasDamaged === "player") {
      if (rollPassed) {
        localText =
          "Test your Luck - Pass: The enemy merely grazed you and you recover 1 damage.";
        setHealth(health + 1);
      } else {
        localText =
          "Test your Luck - Fail: The enemy hit an artery, you lose an additional point of damage.";
        setHealth(health - 1);
      }
    }

    if (whoWasDamaged === "enemy") {
      if (rollPassed) {
        localText =
          "Test your Luck - Pass: You land a devestating blow on the enemy, scoring an extra point of damage!";
        setEnemyHealth(enemyHealth - 1);
      } else {
        localText =
          "Test your Luck - Fail: Your attack merely grazed the monster and he recovers a point of damage.";
        setEnemyHealth(enemyHealth + 1);
      }
    }

    const luckText = <p>{localText}</p>;
    setText([...text, luckText]);
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
  }

  const shouldIntervalRun = autoFight && !someoneDead;
  useInterval(handleAttack, shouldIntervalRun ? 1000 : null);

  return (
    <Container>
      <p className="h2 text-center">Combat</p>
      <Row>
        <Col className="border">
          <p className="text-center h3">You</p>
          <div className="imageContainer mb-3">
            <img src={knight} alt="You fighting the enemy" />
          </div>
          <p className="mb-0">
            Constitution: {health} / {maxHealth}
          </p>
          <p className="mb-0">Attack Strength: {skill}</p>
          <p className="mb-3">
            Luck: {luck} / {maxLuck}
          </p>

          <div className="d-flex flex-column align-items-start">
            <button
              disabled={someoneDead || autoFight}
              onClick={handleAttack}
              className="mb-2"
            >
              Attack
            </button>
            <button
              onClick={handleLuck}
              disabled={!canUseLuck || someoneDead || autoFight}
              className="mb-4"
            >
              Test your Luck
            </button>
            <div className="d-flex align-items-center mb-2">
              <button
                className="mr-2"
                onClick={autoFight}
                disabled={someoneDead}
              >
                Auto Fight
              </button>
              <input className="autoCombat" onChange={() => setAutoFight(!autoFight)} type="checkbox"></input>
            </div>
          </div>
        </Col>

        <Col className="border">
          <p className="text-center h3">Wolf</p>
          <div className="imageContainer ml-auto mb-3">
            <img src={wolf} alt="You fighting the enemy" />
          </div>
          <div className="text-right">
            <p className="mb-0">
              Constitution: {enemyHealth} / {maxEnemyHealth}
            </p>
            <p className="mb-0">Attack Strength: {enemySkill}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>{text.map((text) => text)}</Col>
      </Row>
    </Container>
  );
}

export default Magic;
