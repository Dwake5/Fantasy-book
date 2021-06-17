import {
  ATTEMPT_DOOR, DOOR_BROKEN, GLANDRAGOR,
  PILFER_GRASS, PITFALL_PREVIOUS, PITFALL_STATUS, PLAYER_LEARNS_JANN, SET_PAGE,
  SET_TRADER_VIEWS
} from "./action-types";

const initialState = {
  page: 24,
  traderItemsViewed: [],
  cantUseMagic: false,
  glandragorChoices: "blocked",
  pilferGrass: false,
  doorBroken: { broken: false, tried: false },
  pitFallPrevious: 0,
  pitFallStatus: null,
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
    default:
      return state;
  }
};

export default reducer;
