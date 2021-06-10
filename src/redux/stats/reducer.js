import { uppercase } from "../../utils";
import {
  MAX_SKILL,
  MAX_STAMINA,
  MAX_LUCK,
  STAT_LOSS,
  STAT_GAIN,
  EATEN_TODAY,
  LIBRA_CURE,
  LIBRA_RESTORE,
} from "./action-types";

const initialState = {
  skill: 0,
  maxSkill: 0,
  stamina: 10,
  maxStamina: 20,
  luck: 0,
  maxLuck: 0,
  eatenToday: false,
  libra: true,
  plague: false,
  spiritCurse: false,
  aliannaCurse: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STAT_LOSS:
      const statL = action.payload.stat;
      const amountL = action.payload.amount;
      const currentAmountOfStatL = state[action.payload.stat];

      let newStatL = currentAmountOfStatL - amountL;
      if (newStatL < 0) newStatL = 0;

      return {
        ...state,
        [statL]: newStatL,
      };
    case STAT_GAIN:
      const stat = action.payload.stat;
      const amount = action.payload.amount;
      const maxStat = uppercase(stat, true);
      console.log('maxStat :', maxStat);
      const currentAmountOfStat = state[action.payload.stat];
      console.log('currentAmountOfStat :', currentAmountOfStat);

      let newStat = currentAmountOfStat + amount;
      if (newStat > state[maxStat]) newStat = state[maxStat];
      console.log('newStat :', newStat);

      return {
        ...state,
        [stat]: newStat,
      };
    case EATEN_TODAY:
      return {
        ...state,
        eatenToday: action.payload
      }
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
    case MAX_SKILL:
      return {
        ...state,
        maxSkill: action.payload,
        skill: action.payload,
      };
    case MAX_STAMINA:
      return {
        ...state,
        maxStamina: action.payload,
        stamina: action.payload,
      };
    case MAX_LUCK:
      return {
        ...state,
        maxLuck: action.payload,
        luck: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
