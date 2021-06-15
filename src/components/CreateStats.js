import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { setMaxStat } from "../redux/stats/actions";
import { useDispatch } from "react-redux";

const CreateStats = ({ cancelPause }) => {
  const dispatch = useDispatch();

  const [step, changeStep] = useState(1);
  const [rolls, updateRolls] = useState([]);

  const weightedDice = () => {
    const sixth = 1 / 6;
    const weights = [
      0,
      sixth * 0.4,
      sixth * 0.7,
      sixth * 1.3,
      sixth * 1.3,
      sixth * 1.2,
      sixth * 1.1,
    ];
    const sumWeights = weights.map(
      (
        (sum) => (value) =>
          (sum += value)
      )(0)
    );
    const random = Math.random();
    return sumWeights.filter((el) => random >= el).length;
  };

  const handleDice = (stat) => {
    let rolled;
    if (stat === "skill" || stat === "luck") {
      rolled = weightedDice();
    }
    if (stat === "stamina") {
      const roll1 = weightedDice();
      const roll2 = weightedDice();
      rolled = roll1 + roll2;
    }

    updateRolls([...rolls, rolled]);

    rolled += stat === "stamina" ? 12 : 6;

    setMaxStat(dispatch, stat, rolled);
    changeStep(step + 1);

    if (step === 3) cancelPause(true);
  };

  return (
    <Container className="text-center">
      <p className="h3 mb-4">Determine your stats</p>
      <p className="m-0">Roll for Skill</p>
      {step === 1 && (
        <button onClick={() => handleDice("skill")}>Throw Dice</button>
      )}
      {step > 1 && (
        <p className="mb-4">
          You rolled a {rolls[0]} (+6), your total skill is {rolls[0] + 6}
        </p>
      )}

      {step > 1 && <p className="m-0">Roll for Stamina ( 2 Dice )</p>}
      {step === 2 && (
        <button onClick={() => handleDice("stamina")}>Throw Dice</button>
      )}
      {step > 2 && (
        <p className="mb-4">
          You rolled a {rolls[1]} (+12), your total skill is {rolls[1] + 12}
        </p>
      )}

      {step > 2 && <p className="m-0">Roll for Luck</p>}
      {step === 3 && (
        <button onClick={() => handleDice("luck")}>Throw Dice</button>
      )}
      {step > 3 && (
        <p className="mb-4">
          You rolled a {rolls[2]} (+6), your total skill is {rolls[2] + 6}
        </p>
      )}
    </Container>
  );
};

export default CreateStats;
