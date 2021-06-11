import { SET_PAGE, SET_TRADER_VIEWS, PLAYER_LEARNS_JANN } from "./action-types";

const initialState = {
  page: 1000,
  traderViews: 0,
  noMagicJann: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_TRADER_VIEWS:
      return {
        ...state,
        traderViews: state.traderViews + 1,
      };
    case PLAYER_LEARNS_JANN:
      return {
        ...state,
        noMagicJann: true,
      };
    default:
      return state;
  }
};

export default reducer;
