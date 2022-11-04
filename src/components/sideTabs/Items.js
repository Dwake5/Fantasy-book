import React from "react";
import { useSelector } from "react-redux";
import "../../assets/css/Items.css";
import { getItems, getOwnedItems } from "../../redux/items/selectors";
import { isStatMax } from "../../redux/stats/selectors";
import { SideTabContainer, SideTabHeader, SideTabSubHeader } from "../shared/SideTabComponents";
import Item from "./Item";
import WeaponItem from "./WeaponItem";

const WEAPON_LIST = [
  "sword",
  "axe",
  "broadsword",
  "glamdragorSword",
  "craftedSword",
];

const Items = () => {
  const _items = useSelector(getItems);
  const _isHealthMax = useSelector((state) => isStatMax(state, "stamina"));
  const _itemsOwned = useSelector(getOwnedItems);

  const haveWeapon = _itemsOwned.some((item) => WEAPON_LIST.includes(item));

  return (
    <SideTabContainer>
      <SideTabHeader>Items</SideTabHeader>
      {Object.keys(_items).map((key) => {
        const item = _items[key];
        const isWeapon = item.equipped !== undefined;
        if (isWeapon) return null;
        return (
          <Item
            key={item.name}
            name={item.name}
            amount={item.amount}
            singular={item.singular}
            info={item.info}
            use={item.use}
            alwaysShow={item.alwaysShow}
            reduxKey={key}
            healthMax={_isHealthMax}
          />
        );
      })}
      {haveWeapon && <SideTabSubHeader>Weapons</SideTabSubHeader>}
      {Object.keys(_items).map((key) => {
        const item = _items[key];
        const isWeapon = item.equipped !== undefined;
        if (!isWeapon) return null;
        return (
          <WeaponItem
            key={item.name}
            reduxKey={key}
            name={item.name}
            amount={item.amount}
            equipped={item.equipped}
            info={item.info}
            skillLoss={item.skillLoss}
          />
        );
      })}
    </SideTabContainer>
  );
};

export default Items;
