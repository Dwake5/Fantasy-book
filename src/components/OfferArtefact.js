import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeItemAmount } from "../redux/items/actions";
import { getItems, getOwnedItems } from "../redux/items/selectors";
import { unblockChoice } from "../utils";

// Used in node 29, arrived from 182
const OfferArtefact = ({ setRerender }) => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);
  const _itemsOwned = useSelector(getOwnedItems);
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
    unblockChoice(29, 0);
    changeItemAmount(dispatch, { name: item, amount: -10 });
    setRerender(true);
  };

  const [firstRun, setFirstRun] = useState(true);
  if (firstRun) {
    fixedArtefacts.current = artefacts;
    setFirstRun(false);
  }

  useEffect(() => {
    if (fixedArtefacts.current.length === 0) {
      unblockChoice(29, 1);
      unblockChoice(29, 2);
      setRerender(true)
    }
  }, [artefacts.length, dispatch, setRerender]);

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
