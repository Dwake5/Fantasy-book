import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../assets/css/Stats.css";
import { changeItemAmount, payMoney } from "../redux/items/actions";
import { changeEatenToday, gainStat } from "../redux/stats/actions";

const EatOption = ({ eatOptions, eatenToday, food, money }) => {
  const dispatch = useDispatch();
  const fixedFoodHealth = useRef(null);

  const [usedOption, setUsedOption] = useState(false);

  const firstMealHealth = eatOptions.haveNotEaten;
  const mealHealth = eatOptions.haveEaten;
  const foodHeals = eatenToday ? mealHealth : firstMealHealth;

  const costsMoney = eatOptions.cost;
  const mealName = eatOptions.name;

  const handleEatFood = () => {
    gainStat(dispatch, "stamina", foodHeals);
    changeEatenToday(dispatch, true);
    setUsedOption(true);
    if (costsMoney !== undefined) {
      payMoney(dispatch, costsMoney);
    } else {
      changeItemAmount(dispatch, { name: "provisions", amount: -1 });
    }
  };

  const [firstRun, setFirstRun] = useState(true);
  if (firstRun) {
    fixedFoodHealth.current = foodHeals
    setFirstRun(false);
  }

  return (
    <Container className="mb-4">
      {/* Costs Food */}
      {!costsMoney && food > 0 ? (
        <button
          disabled={usedOption}
          type="button"
          className="btn btn-success mb-3"
          onClick={handleEatFood}
        >
          Eat 1 Provision for {fixedFoodHealth.current || foodHeals} Stamina
        </button>
      ) : (
        food <= 0 && <p>You are out of Provisions</p>
      )}
      {/* Costs money */}
      {costsMoney && money >= costsMoney ? (
        <button
          disabled={usedOption}
          type="button"
          className="btn btn-success mb-3"
          onClick={handleEatFood}
        >
          Eat the {mealName} for {fixedFoodHealth.current || foodHeals} Stamina, -
          {costsMoney} Gold Pieces
        </button>
      ) : (
        money <= costsMoney && <p>You don't have enough money for the meal</p>
      )}
    </Container>
  );
};

export default EatOption;
