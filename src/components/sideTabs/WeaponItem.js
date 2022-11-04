import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { getInCombat } from "../../redux/combat/selectors";
import { equipSpecificWeapon } from "../../redux/items/actions";
import { BlueButton, GreenButton } from '../shared';

const Item = ({ name, info, amount, equipped, reduxKey, skillLoss }) => {
  const dispatch = useDispatch();
  const _inCombat = useSelector(getInCombat);

  if (!amount) return null;

  const equipWeapon = (weapon) => {
    equipSpecificWeapon(dispatch, weapon);
  };

  if (skillLoss && skillLoss > 0) {
    info += `<p>Blunt: -${skillLoss} Skill</p>`;
  }

  return (
    <>
      {/* Generic text for all items */}
      <p className="mb-1 hoverItem">
        {name}
        {info && (
          <span
            className="hoverText"
            dangerouslySetInnerHTML={{ __html: info }}
          />
        )}
      </p>
      {/* Weapons */}
      {equipped && (
        <GreenButton>Equipped</GreenButton>
      )}
      {!equipped && (
        <BlueButton
          onClick={() => equipWeapon(reduxKey)}
          disabled={_inCombat}
        >
          Equip
        </BlueButton>
      )}
    </>
  );
};

export default Item;
