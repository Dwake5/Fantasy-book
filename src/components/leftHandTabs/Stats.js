import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import {
  eatenToday,
  getHaveJann,
  getSpiritCurse,
} from "../../redux/stats/selectors";
import { getPage } from "../../redux/story/selectors";

const Stats = ({ skill, maxSkill, stamina, maxStamina, luck, maxLuck }) => {
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _eatenToday = useSelector(eatenToday);
  const _pageNumber = useSelector(getPage);
  const _haveJann = useSelector(getHaveJann);

  const getSkill = () => {
    return _haveSpiritCurse ? skill-2 : skill
  }

  return (
    <Container className="border text-center statsBox mb-2">
      <p className="h3 text-center">Stats</p>
      {maxSkill > 0 && (
        <>
          <p className="m-0">
            Skill: {getSkill()} / {maxSkill} {_haveSpiritCurse && " (-2)"}
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
      {maxLuck > 0 && (
        <>
          <p className="m-0">
            Luck: {luck} / {maxLuck}
          </p>
          <ProgressBar variant="warning" className="mb-2" now={luck/maxLuck * 100} />
        </>
      )}
      {_pageNumber < 1000 && (
        <p>Eaten today: {_eatenToday ? "Yes" : "No"}</p>
      )}
      {_haveJann && (
        <p>Jann flies around your shoulders</p>
      )}
    </Container>
  );
};

export default Stats;
