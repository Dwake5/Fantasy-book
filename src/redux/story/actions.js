import { SET_PAGE, SET_TRADER_VIEWS } from "./action-types";

export const setPage = (dispatch, number) => {
  dispatch({
    type: SET_PAGE,
    payload: number,
  });
};

export const addOneToTraderItem = (dispatch) => {
  dispatch({ type: SET_TRADER_VIEWS });
};
