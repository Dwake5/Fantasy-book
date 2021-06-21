import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/css/Stats.css";
import { equipSpecificWeapon } from "../../redux/items/actions";

const Item = ({
  name,
  info,
  amount,
  equipped,
  reduxKey,
  skillLoss,
}) => {
  const dispatch = useDispatch();

  if (!amount) return null;

  const equipWeapon = (weapon) => {
    equipSpecificWeapon(dispatch, weapon);
  };

  if (skillLoss && skillLoss > 0) {
    info += `<p>Blunt: -${skillLoss} Skill</p>`
  }

  return (
    <div >
      {/* Generic text for all items */}
      <p className="mb-1 hoverItem">
        {name}
        {info && (
          <span
            className="hoverText"
            dangerouslySetInnerHTML={{ __html: info }}
          ></span>
        )}
      </p>
      {/* Weapons */}
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
