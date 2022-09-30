import React, { useState } from "react";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";
import { setMaxStat } from "../redux/stats/actions";
import { useDispatch } from "react-redux";
import InputNumber from "./InputNumber";
import { setPage } from "../redux/story/actions";

const CreateStats2 = ({ cancelPause }) => {
  const dispatch = useDispatch();
  const [statPoints, setStatPoints] = useState(8);

  const [stamina, setStamina] = useState(14);
  const minStamina = 14;
  const maxStamina = 24;
  const [skill, setSkill] = useState(7);
  const minSkill = 7;
  const maxSkill = 12;
  const [luck, setLuck] = useState(7);
  const minLuck = 7;
  const maxLuck = 12;

  const handleStatsConfirm = () => {
    setPage(dispatch, 1003)
    setMaxStat(dispatch, "stamina", stamina);
    setMaxStat(dispatch, "skill", skill);
    setMaxStat(dispatch, "luck", luck);
    cancelPause()
  };

  // Remove this in production
  // const autoAssign = () => {
  //   setPage(dispatch, 1003)
  //   setMaxStat(dispatch, "stamina", 20);
  //   setMaxStat(dispatch, "skill", 10);
  //   setMaxStat(dispatch, "luck", 10);
  //   cancelPause()
  // }

  return (
    <Container>
      {/* <button className="btn btn-lg btn-info mb-3" onClick={autoAssign}>Auto assign it</button> */}

      <p className="h4">Stamina</p>
      <p>Represents your overall health and ability to survive. (2 per point)</p>

      <Row className="mb-4 d-flex align-items-center">
        <Col md={5}>
          <InputNumber
            stat={stamina}
            maxStat={maxStamina}
            minStat={minStamina}
            statPoints={statPoints}
            increment={2}
            setStatPoints={setStatPoints}
            onChange={setStamina}
          />
        </Col>
        <Col>
          <ProgressBar
            striped
            variant="danger"
            className={`progressBar ${stamina === maxStamina ? "progress-max" : ""}`} 
            min={minStamina - 2}
            max={maxStamina}
            now={stamina}
          />
        </Col>
      </Row>

      <p className="h4">Skill</p>
      <p>Improves your success in battle and some skill based tasks.</p>
      <Row className="mb-4 align-items-center">
        <Col md={5}>
          <InputNumber
            stat={skill}
            maxStat={maxSkill}
            minStat={minSkill}
            statPoints={statPoints}
            increment={1}
            setStatPoints={setStatPoints}
            onChange={setSkill}
          />
        </Col>
        <Col>
          <ProgressBar
            striped
            className={`progressBar ${skill === maxSkill ? "progress-max" : ""}`} 
            min={minSkill - 1}
            max={maxSkill}
            now={skill}
          />
        </Col>
      </Row>

      <p className="h4">Luck</p>
      <p>
        Indicates how lucky you are. Helpful in games of chance and to avoid
        traps.
      </p>

      <Row className="mb-4 align-items-center">
        <Col md={5}>
          <InputNumber
            stat={luck}
            maxStat={maxLuck}
            minStat={minLuck}
            increment={1}
            statPoints={statPoints}
            setStatPoints={setStatPoints}
            onChange={setLuck}
          />
        </Col>
        <Col>
          <ProgressBar
            striped
            variant="warning"
            className={`progressBar ${luck === maxLuck ? "progress-max" : ""}`} 
            min={minLuck - 1}
            max={maxLuck}
            now={luck}
          />
        </Col>
      </Row>

      <p className="text-center mb-5 h5">
        Stat points remaining: <span className="h4">{statPoints}</span>
      </p>

      <Row>
        <Col md={6}>
          <p>Allocate all your stats to continue!</p>
        </Col>
        {statPoints === 0 && (
          <Col>
            <button className="btn btn-success" onClick={handleStatsConfirm}>
              Confirm
            </button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CreateStats2;
