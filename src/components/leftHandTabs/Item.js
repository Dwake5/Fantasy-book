import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/css/Stats.css";
import { drinkPotion } from "../../redux/items/actions";
import { gainStat } from "../../redux/stats/actions";

const Item = ({
  name,
  info,
  amount,
  singular,
  alwaysShow,
  use,
  reduxKey,
  healthMax,
}) => {
  const dispatch = useDispatch();

  const shouldShow = alwaysShow || amount > 0;
  if (!shouldShow) return null;

  const handleDrinkPotion = () => {
    gainStat(dispatch, "stamina", 3);
    drinkPotion(dispatch);
  };

  return (
    <div>
      {/* Generic text for all items */}
      <p className="mb-1 hoverItem">
        {name}
        {amount !== undefined && singular !== true && `: ${amount}`}
        {info && (
          <span
            className="hoverText"
            dangerouslySetInnerHTML={{ __html: info }}
          ></span>
        )}
      </p>
      {/* Drink potion */}
      {reduxKey === "potion" && (
        <button
          onClick={handleDrinkPotion}
          disabled={healthMax}
          className="btn btn-info btn-sm"
        >
          Drink
        </button>
      )}
    </div>
  );
};

export default Item;
