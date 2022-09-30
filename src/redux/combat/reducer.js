import {
  START_COMBAT,
  END_COMBAT,
  ENEMY_STATS,
  DAMAGE_ENEMY,
  NEXT_PAGE,
  DOUBLE_ENEMY_AS,
  REMOVE_ENEMY,
  ADD_EXTRA_ENEMIES,
  ADD_ALLY,
  APPLY_BEESWAX,
  DAMAGE_ALLY,
} from "./action-types";

const initialState = {
  inCombat: false,
  enemyStats: { skill: 0, maxStamina: 0, stamina: 0, name: "" },
  extraEnemies: [],
  allies: [],
  pageAfterCombat: 0,
  appliedBeeswax: false,
};

const damageFirstAlly = (state, damage) => {
  const moreAllies = state.allies.slice(1);
  const ally = state.allies[0];
  ally.stamina -= damage;
  if (ally.stamina <= 0) {
    if (moreAllies) return [...moreAllies]
    return
  }
  return [ally, ...moreAllies]
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
        appliedBeeswax: false,
      };
    case ENEMY_STATS:
      return {
        ...state,
        enemyStats: { ...action.payload },
      };
    case DAMAGE_ENEMY:
      const healthAfter = Math.min(state.enemyStats.stamina - action.payload, 0)
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
    case ADD_ALLY:
      return {
        ...state,
        allies: action.payload,
      };
    case DAMAGE_ALLY:
      return {
        ...state,
        allies: damageFirstAlly(state, action.payload)
      };
    case APPLY_BEESWAX:
      return {
        ...state,
        appliedBeeswax: true,
      };
    default:
      return state;
  }
};

export default reducer;
