import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItems, getOwnedItems, ownItem } from "../redux/items/selectors";
import { getStat } from "../redux/stats/selectors";
import ItemRobbed from "./ItemRobbed";

// Used in node 218, arrived from 132,279,353,376,401
// Tested to be working, with luck amulet included
const BackpackRobbed = ({ cancelPause }) => {
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
  const fixedItems = useRef(null);
  const totalItems = useRef(null);
  const testedItems = useRef(0);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const rollNeeded = _haveLuckAmulet ? _luck + 1 : _luck;

  const itemTested = () => {
    testedItems.current++;
    if (testedItems.current >= totalItems.current) {
      cancelPause();
    }
  };

  const [firstRun, setFirstRun] = useState(true);
  if (firstRun) {
    fixedItems.current = _itemsOwned;
    totalItems.current = fixedItems.current.length;
    setFirstRun(false);
  }

  return (
    <Container className="text-center">
      <p className="mb-0">Test to see what items they take,</p>
      <p>roll {rollNeeded} or lower to keep the item</p>
      {(fixedItems.current || _itemsOwned).length > 0 &&
        (fixedItems.current || _itemsOwned).map((item) => {
          return (
            <ItemRobbed
              rollNeeded={rollNeeded}
              items={_items}
              item={item}
              itemRolledFor={itemTested}
            />
          );
        })}
    </Container>
  );
};

export default BackpackRobbed;
