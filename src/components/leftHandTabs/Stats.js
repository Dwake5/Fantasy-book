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
  const staminaDisplay = stamina >= 0 ? stamina : 0;

  return (
    <Container className="customBorder text-center statsBox sideBox mb-2">
      <p className="h3 text-center">Stats</p>

      {/* Stamina */}
      <p className={`m-0 ${maxStamina < 1 ? "mb-4" : ""}`}>
        Stamina: {stamina} / {maxStamina}
      </p>
      <ProgressBar
        variant="danger"
        className={`mb-2 statsProgressBar ${maxStamina < 1 ? "d-none" : ""}`}
        now={(staminaDisplay / maxStamina) * 100}
      />

      {/* Skill */}
      <p className={`m-0 ${maxSkill < 1 ? "mb-4" : ""}`}>
        Skill: {skill} / {maxSkill}
        {totalSkillLoss > 0 && ` (-${totalSkillLoss})`}
      </p>
      <ProgressBar
        className={`mb-2 statsProgressBar ${maxSkill < 1 ? "d-none" : ""}`}
        now={(skill / maxSkill) * 100}
      />

      {/* Luck */}
      <p className={`m-0 ${maxLuck < 1 ? "mb-4" : ""}`}>
        Luck: {luck} / {maxLuck}
      </p>
      <ProgressBar
        variant="warning"
        className={`mb-2 statsProgressBar ${maxLuck < 1 ? "d-none" : ""}`}
        now={(luck / maxLuck) * 100}
      />
      {_pageNumber < 1000 && <p>Eaten today: {_eatenToday ? "Yes" : "No"}</p>}
      {_haveJann && <p>Jann flies around your shoulders</p>}
    </Container>
  );
};

export default Stats;
