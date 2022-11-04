import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { getInCombat } from "../../redux/combat/selectors";
import { drinkPotion } from "../../redux/items/actions";
import { gainStat } from "../../redux/stats/actions";
import { BlueButton } from '../shared';

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
  const _inCombat = useSelector(getInCombat);

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
          <span className="hoverText"
          dangerouslySetInnerHTML={{ __html: info }} />
        )}
      </p>
      {/* Drink potion */}
      {reduxKey === "potion" && (
        <BlueButton
          onClick={handleDrinkPotion}
          disabled={healthMax || _inCombat}
          className="btn btn-info btn-sm"
        >
          Drink
        </BlueButton>
      )}
    </div>
  );
};

export default Item;
