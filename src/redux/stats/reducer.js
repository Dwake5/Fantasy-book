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
  GAIN_CURSE_SPIRIT,
  GAIN_CURSE_ALIANNA,
  GAIN_PLAGUE,
  SCORPION_STING,
  FULL_RESTORE,
} from "./action-types";

const initialState = {
  skill: 10,
  maxSkill: 10,
  stamina: 10,
  maxStamina: 10,
  luck: 10,
  maxLuck: 10,
  eatenToday: false,
  libra: true,
  plague: false,
  spiritCurse: false,
  aliannaCurse: false,
  jann: false,
};

const halfHpRoundDown = (state) => {
  const currentHp = state.stamina;
  const newHp = Math.floor(currentHp / 2);
  return newHp;
};

export const reducer = (state = initialState, action) => {
  let stat, amount, currentAmountOfStat, maxStat, newStat;
  switch (action.type) {
    case STAT_LOSS:
      stat = action.payload.stat;
      amount = action.payload.amount;
      currentAmountOfStat = state[action.payload.stat];

      newStat = currentAmountOfStat - amount;
      if (newStat < 0 && stat !== "stamina") newStat = 0;

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
    case GAIN_CURSE_SPIRIT:
      return {
        ...state,
        spiritCurse: true,
      };
    case GAIN_CURSE_ALIANNA:
      return {
        ...state,
        aliannaCurse: true,
      };
    case GAIN_PLAGUE:
      return {
        ...state,
        plague: true,
      };
    case SCORPION_STING:
      return {
        ...state,
        stamina: halfHpRoundDown(state),
      };
    case FULL_RESTORE:
      return {
        ...state,
        stamina: state.maxStamina,
        skill: state.maxSkill,
        luck: state.maxLuck + 1,
        maxLuck: state.maxLuck + 1,
        eatenToday: true,
        libra: true,
        plague: false,
        spiritCurse: false,
        aliannaCurse: false,
        jann: false,
      };
    default:
      return state;
  }
};

export default reducer;
