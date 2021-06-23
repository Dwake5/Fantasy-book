import {
  START_COMBAT,
  END_COMBAT,
  ENEMY_STATS,
  DAMAGE_ENEMY,
  NEXT_PAGE,
  DOUBLE_ENEMY_AS,
  REMOVE_ENEMY,
  ADD_EXTRA_ENEMIES,
} from "./action-types";

const initialState = {
  inCombat: false,
  enemyStats: { skill: 0, maxStamina: 0, stamina: 0, name: "" },
  extraEnemies: [],
  pageAfterCombat: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COMBAT:
      return {
        ...state,
        inCombat: true,
      };
    case END_COMBAT:
      return {
        ...state,
        inCombat: false,
      };
    case ENEMY_STATS:
      return {
        ...state,
        enemyStats: { ...action.payload },
      };
    case DAMAGE_ENEMY:
      let healthAfter = state.enemyStats.stamina - action.payload;
      if (healthAfter < 0) healthAfter = 0;
      return {
        ...state,
        enemyStats: {
          ...state.enemyStats,
          stamina: healthAfter,
        },
      };
    case NEXT_PAGE:
      return {
        ...state,
        pageAfterCombat: action.payload,
      };
    case DOUBLE_ENEMY_AS:
      return {
        ...state,
        enemyStats: { ...state.enemyStats, skill: state.enemyStats.skill * 2 },
      };
    case REMOVE_ENEMY:
      const newArray = state.extraEnemies.slice(1) || [];
      return {
        ...state,
        extraEnemies: newArray,
      };
    case ADD_EXTRA_ENEMIES:
      return {
        ...state,
        extraEnemies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
