import {
  START_COMBAT,
  END_COMBAT,
  ENEMY_STATS,
  DAMAGE_ENEMY,
  NEXT_PAGE,
  DOUBLE_ENEMY_AS,
  REMOVE_ENEMY,
  ADD_EXTRA_ENEMIES,
  APPLY_BEESWAX,
  ADD_ALLY,
  DAMAGE_ALLY,
} from "./action-types";

export const startCombat = (dispatch) => {
  dispatch({ type: START_COMBAT });
};

export const endCombat = (dispatch) => {
  dispatch({ type: END_COMBAT });
};

export const setEnemyStats = (dispatch, skill, stamina, name) => {
  const data = { skill, stamina, maxStamina: stamina, name };
  dispatch({ type: ENEMY_STATS, payload: data });
};

export const damageEnemy = (dispatch, amount) => {
  dispatch({ type: DAMAGE_ENEMY, payload: amount });
};

export const setPageAfterCombat = (dispatch, number) => {
  dispatch({ type: NEXT_PAGE, payload: number });
};

export const setDoubleEnemySkill = (dispatch, number) => {
  dispatch({ type: DOUBLE_ENEMY_AS, payload: number });
};

export const removeEnemyFromQueue = (dispatch) => {
  dispatch({ type: REMOVE_ENEMY });
};

export const addExtraEnemies = (dispatch, array) => {
  dispatch({ type: ADD_EXTRA_ENEMIES, payload: array });
};

export const addAllies = (dispatch, array) => {
  for (const monster of array) {
    monster.maxStamina = monster.stamina
  }
  dispatch({ type: ADD_ALLY, payload: array });
};

export const damageAlly = (dispatch, number) => {
  dispatch({ type: DAMAGE_ALLY, payload: number });
};

export const applyBeeswax = (dispatch, boolean) => {
  dispatch({ type: APPLY_BEESWAX, payload: boolean });
};
