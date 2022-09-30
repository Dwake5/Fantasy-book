import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAllies } from "../../redux/combat/actions";
import { changeItemAmount } from "../../redux/items/actions";
import { howManyItem } from "../../redux/items/selectors";
import { takeDamage } from "../../redux/stats/actions";
import { getSpiritCurse, getStat } from "../../redux/stats/selectors";

// Used on node 425 and 369
const MakeGoblins = ({ cancelPause }) => {
  const dispatch = useDispatch();
  const _goblinTeethAmount = useSelector((state) =>
    howManyItem(state, "goblinTeeth")
  );
  const _stamina = useSelector((state) => getStat(state, "stamina"));
  const _curse = useSelector(getSpiritCurse);

  const [maxGoblins, setMaxGoblins] = useState(1);
  const [goblinsSelected, setGoblinsSelected] = useState(1);
  const [madeGoblins, setMadeGoblins] = useState(false);

  useEffect(() => {
    let hpAmount = _stamina - 1;
    if (_curse) hpAmount -= 1
    const max = Math.min(hpAmount, _goblinTeethAmount);
    setMaxGoblins(max);
  }, [_goblinTeethAmount, _stamina, _curse]);

  // todo implement spirit curse here
  const makeTheGoblins = () => {
    setMadeGoblins(true);
    cancelPause();
    takeDamage(dispatch, goblinsSelected);
    changeItemAmount(dispatch, {
      name: "goblinTeeth",
      amount: -goblinsSelected,
    });
    const newAllies = [];
    for (let i = 1; i <= goblinsSelected; i++) {
      newAllies.push({ skill: 5, stamina: 5, name: `Goblin ${i}` });
    }
    addAllies(dispatch, newAllies);
  };

  return (
    <Container className="text-center">
      <p>How many Goblins do you want to conjure?</p>
      <p className="mb-2">
        <small>Each costs 1 Stamina and 1 Goblin Tooth*</small>
      </p>
      <div className="d-flex align-items-baseline justify-content-center">
        <input
          onChange={(e) => setGoblinsSelected(e.target.value)}
          className="mr-4"
          type="range"
          min={1}
          max={maxGoblins}
          value={goblinsSelected}
        />
        <p>{goblinsSelected}</p>
      </div>
      <button
        disabled={madeGoblins}
        type="button"
        className="btn btn-success mb-3"
        onClick={makeTheGoblins}
      >
        Conjure {goblinsSelected} Goblins
      </button>
    </Container>
  );
};

export default MakeGoblins;
