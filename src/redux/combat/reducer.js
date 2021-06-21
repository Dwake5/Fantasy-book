import {
  START_COMBAT,
  END_COMBAT,
  ENEMY_STATS,
  DAMAGE_ENEMY,
  NEXT_PAGE,
} from "./action-types";

const initialState = {
  inCombat: false,
  enemyStats: { skill: 0, maxStamina: 0, stamina: 0, name: "" },
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
      return {
        ...state,
        enemyStats: {
          ...state.enemyStats,
          stamina: state.enemyStats.stamina - action.payload,
        },
      };
    case NEXT_PAGE:
      return {
        ...state,
        pageAfterCombat: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
