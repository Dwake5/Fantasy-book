import { uppercase } from "../../utils";

export const getStat = (state, stat) => state.stats[stat];

export const getSkill = (state) => {
  const haveAlianna = getAliannaCurse(state);
  const { skill } = state.stats;

  const equippedWeapon = Object.values(state.items).find(
    (item) => item.equipped
  );

  const skillLoss = equippedWeapon ? equippedWeapon.skillLoss : 4;

  const actualSkill = skill - skillLoss;
  return haveAlianna ? actualSkill - 2 : actualSkill;
};

export const isStatMax = (state, stat) => {
  const maxStat = uppercase(stat, true);
  return state.stats[stat] >= state.stats[maxStat];
};

export const eatenToday = (state) => state.stats.eatenToday;

export const getLibra = (state) => state.stats.libra;
export const getPlague = (state) => state.stats.plague;
export const getSpiritCurse = (state) => state.stats.spiritCurse;
export const getAliannaCurse = (state) => state.stats.aliannaCurse;

export const getHaveJann = (state) => state.stats.jann;
