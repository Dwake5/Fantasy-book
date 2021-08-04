import {
  LOCKSMASH_PREVIOUS,
  NIGHT_CREATURE_FIGHT,
  NIGHT_CREATURE_PREVIOUS,
  PITFALL_PREVIOUS,
  PLAYER_LEARNS_JANN,
  SEEN_BOX1,
  SEEN_BOX2,
  SET_PAGE,
  SET_TRADER_VIEWS,
  SWORD_REFUND,
  FIREBALL_MANTICORE,
  KILL_PLAYER,
} from "./action-types";

const initialState = {
  page: 1000, // set to 1000 to start
  previousPage: 0,
  dead: false,
  traderItemsViewed: [],
  cantUseMagic: false,
  pitFallPrevious: 0,
  seenBox1: false,
  seenBox2: false,
  lockSmashPrevious: 0,
  nightCreaturePrevious: 0,
  nightCreatureFight: null,
  userJourney: [],
  swordRefund: false,
  fireball: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
        previousPage: state.page,
        userJourney: [...state.userJourney, action.payload],
      };
    case PITFALL_PREVIOUS:
      return {
        ...state,
        pitFallPrevious: action.payload,
      };
    case SET_TRADER_VIEWS:
      return {
        ...state,
        traderItemsViewed: [...state.traderItemsViewed, action.payload],
      };
    case PLAYER_LEARNS_JANN:
      return {
        ...state,
        cantUseMagic: true,
      };
    case SEEN_BOX1:
      return {
        ...state,
        seenBox1: true,
      };
    case SEEN_BOX2:
      return {
        ...state,
        seenBox2: true,
      };
    case LOCKSMASH_PREVIOUS:
      return {
        ...state,
        lockSmashPrevious: action.payload,
      };
    case NIGHT_CREATURE_PREVIOUS:
      return {
        ...state,
        nightCreaturePrevious: action.payload,
      };
    case NIGHT_CREATURE_FIGHT:
      return {
        ...state,
        nightCreatureFight: action.payload,
      };
    case SWORD_REFUND:
      return {
        ...state,
        swordRefund: true,
      };
    case FIREBALL_MANTICORE:
      return {
        ...state,
        fireball: true,
      };
    case KILL_PLAYER:
      return {
        ...state,
        dead: true,
      };
    default:
      return state;
  }
};

export default reducer;
