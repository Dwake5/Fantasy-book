import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import { ownItem } from "../redux/items/selectors";
import { loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { testYourLuck } from "../utils";
 
const TestLuck = ({ setLuckPassed, cancelPause }) => {
  const dispatch = useDispatch();
  const [luckTested, setLuckTested] = useState(false);
  const [luckSuccess, setLuckSuccess] = useState(false);
  const [luckTotal, setLuckTotal] = useState(null);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const fixedLuckNeeded = useRef(null);

  const testLuck = () => {
    const [total, pass] = testYourLuck(_luck);
    loseStat(dispatch, "luck", 1);
    setLuckSuccess(pass);
    setLuckTested(true);
    setLuckTotal(total);
    setLuckPassed(pass); // Tell the parent if pass/success
    cancelPause(true); // Tell the parent to display options again
  };

  useEffect(() => {
    fixedLuckNeeded.current = _luck;
  }, [_luck]);

  return (
    <Container className="mb-4">
      <button
        disabled={luckTested}
        type="button"
        className="btn btn-warning mb-3"
        onClick={() => testLuck()}
        >
        Test your Luck
      </button>
      {!_haveLuckAmulet && <p>You would need a {fixedLuckNeeded.current || _luck} or lower to pass.</p>}
      {_haveLuckAmulet && <p>Due to your luck amulet, you would need a {(fixedLuckNeeded.current || _luck) + 1} or lower to pass.</p>}
      {luckTested && (
        <>
          <p className="mb-1">You rolled a {luckTotal},</p>
          <p>Test your Luck: {luckSuccess ? "Success!" : "Failed"}</p>
        </>
      )}
    </Container>
  );
};

export default TestLuck;
