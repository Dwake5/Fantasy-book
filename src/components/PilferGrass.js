import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../redux/items/actions";
import { getItems, getOwnedItems } from "../redux/items/selectors";
import { passPilferGrass } from "../redux/story/actions";

// Used in node 32, arrived from 105 (-2 items)
// Used in node 57, arrived from 105 (-1 items)
const PilferGrass = ({ pageNumber, amount }) => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
  const fixedArtefacts = useRef(null);
  const notArtefacts = ["gold", "provisions"];
  const realArtefacts = _itemsOwned.filter(
    (item) => !notArtefacts.includes(item)
  );

  const [lostArtefacts, addLostArtefact] = useState([]);

  const handleGiveArtefact = (item) => {
    addLostArtefact([...lostArtefacts, item]);
    getItem(dispatch, { name: item, amount: -100 });
    let realLostArtefacts = lostArtefacts.length;
    realLostArtefacts++
    if (realLostArtefacts >= amount || realArtefacts.length === 0) {
      passPilferGrass(dispatch)
    }
  };

  useEffect(() => {
    fixedArtefacts.current = _itemsOwned;
  }, [pageNumber]);

  const disabledList = (item) => {
    if (lostArtefacts.includes(item)) return true;
    if (lostArtefacts.length >= amount) return true;
    if (notArtefacts.includes(item) && realArtefacts.length !== 0) return true;
    return false;
  };
  return (
    <Container className="text-center">
      {_itemsOwned.length ? (
        <p>Pick {amount === 1 ? "one" : "two"} artefacts to lose</p>
      ) : (
        <p>You have nothing else to give</p>
      )}
      {(fixedArtefacts.current || _itemsOwned).map((item) => {
        return (
          <div
            className="d-flex justify-content-center align-items-center"
            key={item}
          >
            <p>{_items[item].name}</p>
            <button
              type="button"
              onClick={() => handleGiveArtefact(item)}
              className="btn btn-sm btn-danger ml-3 mb-3"
              disabled={disabledList(item)}
            >
              Lose
            </button>
          </div>
        );
      })}
    </Container>
  );
};

export default PilferGrass;