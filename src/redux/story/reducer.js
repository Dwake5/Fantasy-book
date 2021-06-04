import { SET_PAGE, SET_TRADER_VIEWS } from "./action-types";

const initialState = {
  page: 1000,
  traderViews: 0
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
    default:
      return state;
  }
};

export default reducer;
