import {
  ATTEMPT_DOOR,
  DOOR_BROKEN,
  GLANDRAGOR,
  PILFER_GRASS,
  PITFALL_PREVIOUS,
  PITFALL_STATUS,
  PLAYER_LEARNS_JANN,
  SENTRY_DIE,
  SENTRY_LUCK,
  SET_PAGE,
  SET_TRADER_VIEWS,
  DOOR_OPEN,
  FORK_DIE,
  SEEN_BOX1,
  SEEN_BOX2,
  LOCKSMASH_PREVIOUS,
  LOCK_OPEN,
  ATTEMPT_LOCKSMASH,
} from "./action-types";

const initialState = {
  page: 47,
  traderItemsViewed: [],
  cantUseMagic: false,
  glandragorChoices: "blocked",
  pilferGrass: false,
  doorBroken: { broken: false, tried: false },
  pitFallPrevious: 0,
  pitFallStatus: null,
  sentryDie: 0,
  sentryLuck: false,
  doorOpen: null,
  forkDie: 0,
  seenBox1: false,
  seenBox2: false,
  lockSmashPrevious: 0,
  lockSmash: { broken: false, tried: false },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
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
    case DOOR_BROKEN:
      return {
        ...state,
        doorBroken: { ...state.doorBroken, broken: true },
      };
    case ATTEMPT_DOOR:
      return {
        ...state,
        doorBroken: { ...state.doorBroken, tried: true },
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
    case SENTRY_DIE:
      return {
        ...state,
        sentryDie: action.payload,
      };
    case SENTRY_LUCK:
      return {
        ...state,
        sentryLuck: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
