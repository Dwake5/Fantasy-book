import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../assets/css/Stats.css";
import {
  getSpiritCurse,
} from "../redux/stats/selectors";
import "../assets/css/Stats.css";

const Stats = ({ skill, maxSkill, stamina, maxStamina, luck, maxLuck }) => {
  const _haveSpiritCurse = useSelector(getSpiritCurse);

  const getSkill = () => {
    return _haveSpiritCurse ? skill-2 : skill
  }

  return (
    <Container className="border text-center statsBox mb-2">
      <p className="h3 text-center">Stats</p>
      {skill > 0 && (
        <>
          <p className="m-0">
            Skill: {getSkill()}{_haveSpiritCurse && " (-2)"} / {maxSkill}
          </p>
          <ProgressBar className="mb-2" now={getSkill()/maxSkill * 100} />
        </>
      )}
      {maxStamina > 0 && (
        <>
          <p className="m-0">
            Stamina: {stamina} / {maxStamina}
          </p>
          <ProgressBar variant="danger" className="mb-2" now={stamina/maxStamina * 100} />
        </>
      )}
      {luck > 0 && (
        <>
          <p className="m-0">
            Luck: {luck} / {maxLuck}
          </p>
          <ProgressBar variant="warning" className="mb-2" now={luck/maxLuck * 100} />
        </>
      )}
    </Container>
  );
};

export default Stats;
