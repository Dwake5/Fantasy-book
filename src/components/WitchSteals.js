import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../redux/items/actions";
import { getItems, getOwnedItems } from "../redux/items/selectors";

// Used in node 48, arrived from 243
const WitchSteals = ({ pageNumber }) => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
  const magicalItems = [
    "glue",
    "nosePlugs",
    "pebbles",
    "beeswax",
    "apeTeeth",
    "goblinTeeth",
    "giantsTeeth",
    "snattacatTeeth",
    "luckAmulet",
    "skullcap",
    "collar",
    "sand",
  ];
  const magicalItemsOwned = _itemsOwned.filter((item) =>
    magicalItems.includes(item)
  );
  const [itemsTaken, setItemsTaken] = useState([]);
  const [firstRun, setFirstRun] = useState(false);

  const exitFunction = _itemsOwned.includes("spellbookPage")

  const getRandomItems = (arr, n) => {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) return arr;
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  useEffect(() => {
    if (firstRun || exitFunction) return;
    const items = getRandomItems(magicalItemsOwned, 2);
    setItemsTaken(items);
    setFirstRun(false);
    items.forEach((item) => {
      getItem(dispatch, { name: item, amount: -100 });
    });
  }, [pageNumber]);

  if (exitFunction) return null;
  return (
    <Container className="text-center mb-4">
      <p className="mb-1">
        The witch rummages through your stuff{itemsTaken.length ? " and takes:" : ","}
      </p>
      {itemsTaken.length > 0 &&
        itemsTaken.map((item) => {
          return (
            <p className="mb-0" key={item}>
              {_items[item].name}
            </p>
          );
        })}
      {!itemsTaken.length && (
        <p>but due to having no magical items on your possession she leaves you alone.</p>
      )}
    </Container>
  );
};

export default WitchSteals;
