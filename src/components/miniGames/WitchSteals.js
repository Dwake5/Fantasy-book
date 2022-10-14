import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeItemAmount } from "../../redux/items/actions";
import { getItems, getOwnedItems } from "../../redux/items/selectors";

// Used in node 48, arrived from 243 choice 1
const WitchSteals = () => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
  const magicalItems = [
    "potion",
    "pipe",
    "glue",
    "nosePlugs",
    "pebbles",
    "beeswax",
    "apeTeeth",
    "goblinTeeth",
    "giantsTeeth",
    "snattacatTeeth",
    "skullcap",
    "collar",
    "sand",
  ];
  const magicalItemsOwned = _itemsOwned.filter((item) =>
    magicalItems.includes(item)
  );
  const [itemsTaken, setItemsTaken] = useState([]);
  const [firstRun, setFirstRun] = useState(true);

  const exitFunction = _itemsOwned.includes("spellbookPage")

  const getRandomItems = (arr, n) => {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) return arr;
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  useEffect(() => {
    if (!firstRun || exitFunction) return;
    const items = getRandomItems(magicalItemsOwned, 2);
    setItemsTaken(items);
    setFirstRun(false);
    items.forEach((item) => {
      changeItemAmount(dispatch, { name: item, amount: -100 });
    });
  }, [dispatch, exitFunction, firstRun, magicalItemsOwned]);

  if (exitFunction) return null;
  return (
    <Container className="text-center mb-4">
      <p className="mb-1">
        The witch rummages through your stuff{itemsTaken.length ? " and takes:" : ","}
      </p>
      {itemsTaken.length > 0 &&
        itemsTaken.map((item) => {
          return (
            <p className="mb-0 text-danger" key={item}>
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
