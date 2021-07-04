import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import { ownItem } from "../redux/items/selectors";
import { gainStat, loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { swordRefund } from "../redux/story/actions";
import { testYourLuck } from "../utils";

// 236 is a good node to test
const TestLuck = ({ setLuckPassed, cancelPause, pageNumber }) => {
  const dispatch = useDispatch();
  const [luckTested, setLuckTested] = useState(false);
  const [luckSuccess, setLuckSuccess] = useState(false);
  const [luckTotal, setLuckTotal] = useState(null);
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _haveLuckAmulet = useSelector((state) => ownItem(state, "luckAmulet"));
  const fixedLuckNeeded = useRef(null);

  const testLuck = () => {
    let [total, pass] = testYourLuck(_luck, _haveLuckAmulet);
    pass = true;
    loseStat(dispatch, "luck", 1);
    setLuckSuccess(pass);
    setLuckTested(true);
    setLuckTotal(total);
    setLuckPassed(pass); // Tell the parent if pass/success
    cancelPause(); // Tell the parent to display options again
    if (pageNumber === 428 && pass) {
      gainStat(dispatch, "stamina", 2);
    }
    if (pageNumber === 194 && pass) {
      swordRefund(dispatch);
    }
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
      {!_haveLuckAmulet && (
        <p>
          You would need a {fixedLuckNeeded.current || _luck} or lower to pass.
        </p>
      )}
      {_haveLuckAmulet && (
        <p>
          Due to your Luck Amulet, you would need a{" "}
          {(fixedLuckNeeded.current || _luck) + 1} or lower to pass.
        </p>
      )}
      {luckTested && (
        <>
          <p className="mb-1">
            {luckSuccess ? "Success!" : "Fail:"} You rolled a {luckTotal}.
          </p>
        </>
      )}
    </Container>
  );
};

export default TestLuck;
