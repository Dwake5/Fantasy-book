import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bluntWeapon } from "../redux/items/actions";
import {
  getEquippedWeapon,
  getItems,
  getOwnedItems,
} from "../redux/items/selectors";
import { getSkill } from "../redux/stats/selectors";
import { getLockSmashPrevious } from "../redux/story/selectors";
import { blockChoice, diceRolls, unblockChoice } from "../utils";

// Used on node 142. Got here from 4 or 360.
// 360 = -2 from roll, if first hit is succesful no skill loss.
const LockSmash = ({setRerender}) => {
  const dispatch = useDispatch();
  const _skill = useSelector(getSkill);
  const _equippedWeapon = useSelector(getEquippedWeapon);
  const _items = useSelector(getItems);
  let weaponName = null;
  if (_equippedWeapon) {
    weaponName = _items[_equippedWeapon].name;
  }

  const betterChances = useSelector(getLockSmashPrevious) === 360;
  const [firstTry, setFirstTry] = useState(true);
  const [rollText, setRollText] = useState([]);
  const [success, setSuccess] = useState(false);
  const [noWeapon, setNoWeapon] = useState(false);
  const skillNeeded = betterChances ? _skill + 1 : _skill - 1;

  const _itemsOwned = useSelector(getOwnedItems);
  const weaponList = [
    "sword",
    "axe",
    "broadsword",
    "glamdragorSword",
    "craftedSword",
  ];
  const haveAnyWeapon = _itemsOwned.some((item) => weaponList.includes(item));

  useEffect(() => {
    if (!haveAnyWeapon) unblockChoice(142, 1);
    if (weaponName) setNoWeapon(false);
    if (!weaponName) setNoWeapon(true);
  }, [haveAnyWeapon, dispatch, weaponName]);

  const tryToSmashLock = () => {
    const rolled = diceRolls(2, true);
    const success = rolled <= skillNeeded;
    let shouldBluntWeapon = true;

    if (!betterChances || !firstTry) bluntWeapon(dispatch, _equippedWeapon);
    if (betterChances && firstTry) shouldBluntWeapon = false;

    if (firstTry && !success) {
      unblockChoice(142, 1)
      setRerender(true)
    }

    setFirstTry(false);
    
    let newRollText = success ? "Success:" : "Fail:";
    newRollText += ` You rolled a ${rolled}.`;
    if (success) {
      setSuccess(true);
      unblockChoice(142, 0)
      blockChoice(142, 1)
      setRerender(true)
    } else {
    }
    newRollText += shouldBluntWeapon
      ? ` -1 Skill when using ${weaponName}.`
      : "";
    setRollText([...rollText, newRollText]);
  };

  if (!haveAnyWeapon) {
    return (
      <Container>
        <p>You do not have a weapon to smash open the lock with!</p>
      </Container>
    );
  }

  if (noWeapon && haveAnyWeapon) {
    return (
      <Container>
        <p>Please equip a weapon to smash the lock with.</p>
      </Container>
    );
  }

  return (
    <Container className="mb-5">
      <p className="mb-0">Try to smash open the lock.</p>
      {skillNeeded >= 2 && (
        <p className="mb-0">
          To succeed, you would need to roll a {_skill - 1 + (betterChances ? 2 : 0)}{" "}
          {betterChances ? "(+2)" : ""} or lower.
        </p>
      )}
      {skillNeeded < 2 && (
        <b className="mb-0">
          It is impossible for you to succedd with this weapon.
        </b>
      )}
      <p>Currently equipped: {weaponName}</p>
      <button
        type="button"
        className="btn btn-info mb-3"
        disabled={success || skillNeeded < 2}
        onClick={() => tryToSmashLock()}
      >
        Attempt
      </button>
      {rollText.length > 0 &&
        rollText.map((text, i) => (
          <p key={i} className="mb-0">
            {text}
          </p>
        ))}
    </Container>
  );
};

export default LockSmash;
