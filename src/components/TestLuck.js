import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Stats.css";
import { loseStat } from "../redux/stats/actions";
import { getStat } from "../redux/stats/selectors";
import { testYourLuck } from "../utils";

const TestLuck = () => {
  const dispatch = useDispatch();
  const [luckTested, setLuckTested] = useState(false);
  const _luck = useSelector((state) => getStat(state, "luck"));

  const testLuck = () => {
    const [rolls, pass] = testYourLuck(_luck);
    console.log('rolls, pass :', rolls, pass);
    loseStat(dispatch, "luck", 1);
  };

  return <Container className="mb-4"><button onClick={() => testLuck()}>Test your luck</button></Container>;
};

export default TestLuck;
