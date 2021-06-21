import {
  START_COMBAT,
  END_COMBAT,
  ENEMY_STATS,
  DAMAGE_ENEMY,
  NEXT_PAGE,
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
