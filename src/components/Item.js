import React from "react";
import { useDispatch } from "react-redux";
import "../assets/css/Stats.css";
import { equipSpecificWeapon } from "../redux/items/actions";

const Item = ({
  name,
  info,
  amount,
  owned,
  equipped,
  use,
  alwaysShow,
  reduxKey,
}) => {
  const dispatch = useDispatch();

  const shouldShow = alwaysShow || owned || amount > 0;
  // if (!shouldShow) return null;

  const equipWeapon = (weapon) => {
    equipSpecificWeapon(dispatch, weapon);
  };

  return (
    <div className="">
      <p className="mb-1 hoverItem">
        {name}
        {amount !== undefined && `: ${amount}`}
        {info && (
          <span
            className="hoverText"
            dangerouslySetInnerHTML={{ __html: info }}
          ></span>
        )}
      </p>
      {equipped !== "undefined" && equipped && (
        <button type="button" className="btn btn-secondary btn-sm">
          Equiped
        </button>
      )}
      {equipped !== "undefined" && equipped === false && (
        <button
          onClick={() => equipWeapon(reduxKey)}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Equip
        </button>
      )}
    </div>
  );
};

export default Item;
