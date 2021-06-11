import { uppercase } from "../../utils";
import {
  MAX_STAT,
  STAT_LOSS,
  STAT_GAIN,
  EATEN_TODAY,
  LIBRA_CURE,
  LIBRA_RESTORE,
  LOSE_LIBRA,
  WATERFALL,
  RECEIVE_JANN,
  LOSE_JANN,
} from "./action-types";

const initialState = {
  skill: 0,
  maxSkill: 0,
  stamina: 0,
  maxStamina: 0,
  luck: 0,
  maxLuck: 0,
  eatenToday: false,
  libra: true,
  plague: false,
  spiritCurse: false,
  aliannaCurse: false,
  jann: false,
};

export const reducer = (state = initialState, action) => {
  let stat, amount, currentAmountOfStat, maxStat, newStat;
  switch (action.type) {
    case STAT_LOSS:
      stat = action.payload.stat;
      amount = action.payload.amount;
      currentAmountOfStat = state[action.payload.stat];

      newStat = currentAmountOfStat - amount;
      if (newStat < 0) newStat = 0;

      return {
        ...state,
        [stat]: newStat,
      };
    case STAT_GAIN:
      stat = action.payload.stat;
      amount = action.payload.amount;
      maxStat = uppercase(stat, true);
      currentAmountOfStat = state[action.payload.stat];

      newStat = currentAmountOfStat + amount;
      if (newStat > state[maxStat]) newStat = state[maxStat];

      return {
        ...state,
        [stat]: newStat,
      };
    case EATEN_TODAY:
      return {
        ...state,
        eatenToday: action.payload,
      };
    case LOSE_LIBRA:
      return {
        ...state,
        libra: false,
      };
    case LIBRA_CURE:
      return {
        ...state,
        libra: false,
        plague: false,
        spiritCurse: false,
        aliannaCurse: false,
      };
    case LIBRA_RESTORE:
      return {
        ...state,
        skill: state.maxSkill,
        stamina: state.maxStamina,
        luck: state.maxLuck,
        libra: false,
      };
    case WATERFALL:
      return {
        ...state,
        skill: state.maxSkill,
        stamina: state.maxStamina,
        luck: state.maxLuck,
        plague: false,
      };
    case MAX_STAT:
      maxStat = uppercase(action.payload.stat, true);
      stat = action.payload.stat;
      return {
        ...state,
        [maxStat]: action.payload.number,
        [stat]: action.payload.number,
      };
    case RECEIVE_JANN:
      return {
        ...state,
        jann: true,
      };
    case LOSE_JANN:
      return {
        ...state,
        jann: false,
      };
    default:
      return state;
  }
};

export default reducer;
