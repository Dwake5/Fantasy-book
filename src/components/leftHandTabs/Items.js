import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItems, getOwnedItems } from "../../redux/items/selectors";
import "../../assets/css/Items.css";
import Item from "./Item";
import WeaponItem from "./WeaponItem";
import { isStatMax } from "../../redux/stats/selectors";

const Items = () => {
  const _items = useSelector(getItems);
  const _isHealthMax = useSelector((state) => isStatMax(state, "stamina"));
  const _itemsOwned = useSelector(getOwnedItems);
  const weaponList = ["sword", "axe", "broadsword", "glamdragorSword", "craftedSword"]
  const haveWeapon = _itemsOwned.some(item => weaponList.includes(item))

  return (
    <Container className="border text-center itemsBox mb-2">
      <div>
        <p className="h3 text-center">Items</p>
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
        {haveWeapon && <p className="h4 text-center mt-3">Weapons</p>}
        {Object.keys(_items).map((key) => {
          const item = _items[key];
          const isWeapon = item.equipped !== undefined;
          if (!isWeapon) return null;
          return (
            <WeaponItem
              key={item.name}
              name={item.name}
              amount={item.amount}
              equipped={item.equipped}
              info={item.info}
              reduxKey={key}
              skillLoss={item.skillLoss}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Items;
