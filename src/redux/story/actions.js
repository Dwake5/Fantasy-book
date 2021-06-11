import { SET_PAGE, SET_TRADER_VIEWS, PLAYER_LEARNS_JANN } from "./action-types";

export const setPage = (dispatch, number) => {
  dispatch({
    type: SET_PAGE,
    payload: number,
  });
};

export const addOneToTraderItem = (dispatch) => {
  dispatch({ type: SET_TRADER_VIEWS });
};

export const playerLearnsJann = (dispatch) => {
  dispatch({ type: PLAYER_LEARNS_JANN });
};
