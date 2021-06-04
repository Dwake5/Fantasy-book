import React from "react";
import { Container } from "react-bootstrap";
import "../assets/css/Stats.css"

const Stats = ({ skill, maxSkill, stamina, maxStamina, luck, maxLuck }) => {
  return (
    <Container className="border text-center statsBox">
      <p className="h3 text-center">Stats</p>
      {skill > 0 && (
        <p className="mb-1">
          Skill: {skill} / {maxSkill}
        </p>
      )}
      {stamina > 0 && (
        <p className="mb-1">
          Stamina: {stamina} / {maxStamina}
        </p>
      )}
      {luck > 0 && (
        <p className="mb-1">
          Luck: {luck} / {maxLuck}
        </p>
      )}
    </Container>
  );
};

export default Stats;
