import {
  GLANDRAGOR,
  PILFER_GRASS,
  PITFALL_PREVIOUS,
  PITFALL_STATUS,
  PLAYER_LEARNS_JANN,
  SET_PAGE,
  SET_TRADER_VIEWS,
  DOOR_OPEN,
  FORK_DIE,
  SEEN_BOX1,
  SEEN_BOX2,
  LOCKSMASH_PREVIOUS,
  LOCK_OPEN,
  ATTEMPT_LOCKSMASH,
  SKUNK_DIE,
  BYPASS_GOBLINS,
  NIGHT_CREATURE_PREVIOUS,
  NIGHT_CREATURE_FIGHT,
  SWORD_REFUND,
} from "./action-types";

const initialState = {
  page: 1000,
  previousPage: 0,
  traderItemsViewed: [],
  cantUseMagic: false,
  glandragorChoices: "blocked",
  pilferGrass: false,
  doorBroken: { broken: false, tried: false },
  pitFallPrevious: 0,
  pitFallStatus: null,
  doorOpen: null,
  forkDie: 0,
  skunkDie: 0,
  seenBox1: false,
  seenBox2: false,
  lockSmashPrevious: 0,
  lockSmash: { broken: false, tried: false },
  bypassGoblins: null,
  nightCreaturePrevious: 0,
  nightCreatureFight: null,
  userJourney: [],
  swordRefund: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
        previousPage: state.page,
        userJourney: [...state.userJourney, action.payload]
      };
    case PITFALL_PREVIOUS:
      return {
        ...state,
        pitFallPrevious: action.payload,
      };
    case PITFALL_STATUS:
      return {
        ...state,
        pitFallStatus: action.payload,
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
    case GLANDRAGOR:
      return {
        ...state,
        glandragorChoices: action.payload,
      };
    case PILFER_GRASS:
      return {
        ...state,
        pilferGrass: true,
      };
    case DOOR_OPEN:
      return {
        ...state,
        doorOpen: action.payload,
      };
    case FORK_DIE:
      return {
        ...state,
        forkDie: action.payload,
      };
    case SKUNK_DIE:
      return {
        ...state,
        skunkDie: action.payload,
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
    case LOCK_OPEN:
      return {
        ...state,
        lockSmash: { ...state.lockSmash, broken: true },
      };
    case ATTEMPT_LOCKSMASH:
      return {
        ...state,
        lockSmash: { ...state.lockSmash, tried: true },
      };
    case BYPASS_GOBLINS:
      return {
        ...state,
        bypassGoblins: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
