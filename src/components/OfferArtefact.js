import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem, loseEquippedWeapon } from "../redux/items/actions";
import { getEquippedWeapon, getItems, getOwnedItems } from "../redux/items/selectors";
import { changeGlandragor } from "../redux/story/actions";

// Used in node 29, arrived from 182
const OfferArtefact = ({ pageNumber }) => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
  const _equippedWeapon = useSelector(getEquippedWeapon);
  const fixedArtefacts = useRef(null);
  const notArtefacts = [
    "gold",
    "provisions",
    "goblinTeeth",
    "apeTeeth",
    "giantsTeeth",
    "snattacatTeeth",
    "bomba",
  ];
  const artefacts = _itemsOwned.filter((item) => !notArtefacts.includes(item));
  
  const [gaveArtefact, setGaveArtefact] = useState(false);
  
  const handleGiveArtefact = (item) => {
    setGaveArtefact(true);
    changeGlandragor(dispatch, "topUnblocked");
    if (item === _equippedWeapon) loseEquippedWeapon(dispatch)
    getItem(dispatch, { name: item, amount: -10 });
  };

  useEffect(() => {
    fixedArtefacts.current = artefacts;
  }, [pageNumber]);

  useEffect(() => {
    if (fixedArtefacts.current.length === 0) {
      changeGlandragor(dispatch, "topBlocked");
    }
  }, [artefacts.length, dispatch]);

  return (
    <Container className="text-center">
      {(fixedArtefacts.current || artefacts).length ? (
        <p>Which artefact do you want to give him?</p>
      ) : (
        <p>You don't have any suitable artefacts to give him</p>
      )}
      {(fixedArtefacts.current || artefacts).map((item) => {
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
              disabled={gaveArtefact}
            >
              Give
            </button>
          </div>
        );
      })}
    </Container>
  );
};

export default OfferArtefact;
