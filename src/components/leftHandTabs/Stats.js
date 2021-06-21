import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import {
  eatenToday,
  getHaveJann,
  getAliannaCurse,
} from "../../redux/stats/selectors";
import { getWeaponSkillLoss } from "../../redux/items/selectors";
import { getPage } from "../../redux/story/selectors";

const Stats = ({ skill, maxSkill, stamina, maxStamina, luck, maxLuck }) => {
  const _haveAliannaCurse = useSelector(getAliannaCurse);
  const _eatenToday = useSelector(eatenToday);
  const _pageNumber = useSelector(getPage);
  const _haveJann = useSelector(getHaveJann);
  const _weaponSkillLoss = useSelector(getWeaponSkillLoss);
  const totalSkillLoss = _weaponSkillLoss + _haveAliannaCurse;

  return (
    <Container className="border text-center statsBox mb-2">
      <p className="h3 text-center">Stats</p>
      {maxStamina > 0 && (
        <>
          <p className="m-0">
            Stamina: {stamina} / {maxStamina}
          </p>
          <ProgressBar
            variant="danger"
            className="mb-2"
            now={(stamina / maxStamina) * 100}
          />
        </>
      )}
      {maxSkill > 0 && (
        <>
          <p className="m-0">
            Skill: {skill} / {maxSkill}
            {totalSkillLoss > 0 && ` (-${totalSkillLoss})`}
          </p>
          <ProgressBar className="mb-2" now={(skill / maxSkill) * 100} />
        </>
      )}
      {maxLuck > 0 && (
        <>
          <p className="m-0">
            Luck: {luck} / {maxLuck}
          </p>
          <ProgressBar
            variant="warning"
            className="mb-2"
            now={(luck / maxLuck) * 100}
          />
        </>
      )}
      {_pageNumber < 1000 && <p>Eaten today: {_eatenToday ? "Yes" : "No"}</p>}
      {_haveJann && <p>Jann flies around your shoulders</p>}
    </Container>
  );
};

export default Stats;
