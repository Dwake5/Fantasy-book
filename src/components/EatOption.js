import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../assets/css/Stats.css";
import { changeEatenToday, gainStat } from "../redux/stats/actions";

const EatOption = ({ eatOptions, eatenToday, food }) => {
  const dispatch = useDispatch();

  const [usedOption, setUsedOption] = useState(false);

  const firstMealHealth = eatOptions.haveNotEaten;
  const mealHealth = eatOptions.haveEaten;
  const foodHeals = eatenToday ? mealHealth : firstMealHealth;

  // const costsMoney = eatOptions.cost; come back to this

  const handleEatFood = () => {
    gainStat(dispatch, "stamina", foodHeals);
    changeEatenToday(dispatch, true);
    setUsedOption(true);
  };

  return (
    <Container>
      {food > 0 && (
        <button disable={usedOption} onClick={handleEatFood}>
          Eat 1 Provision for {foodHeals} Stamina
        </button>
      )}
      {food <= 0 && <p>You are out of Provisions</p>}
    </Container>
  );
};

export default EatOption;
