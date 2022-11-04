import React from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import { getWeaponSkillLoss } from "../../redux/items/selectors";
import {
  eatenToday, getAliannaCurse, getHaveJann
} from "../../redux/stats/selectors";
import { getPage } from "../../redux/story/selectors";
import { SideTabContainer, SideTabHeader } from "../shared/SideTabComponents";

const Stats = ({ skill, maxSkill, stamina, maxStamina, luck, maxLuck }) => {
  const _haveAliannaCurse = useSelector(getAliannaCurse);
  const _eatenToday = useSelector(eatenToday);
  const _pageNumber = useSelector(getPage);
  const _haveJann = useSelector(getHaveJann);
  const _weaponSkillLoss = useSelector(getWeaponSkillLoss);

  const totalSkillLoss = _weaponSkillLoss + _haveAliannaCurse;
  const staminaDisplay = stamina >= 0 ? stamina : 0;

  return (
    <SideTabContainer>
      <SideTabHeader>Stats</SideTabHeader>

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
    </SideTabContainer>
  );
};

export default Stats;
