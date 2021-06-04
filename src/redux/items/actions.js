import { SET_ITEMS } from "./action-types";

export const setItems = (dispatch, data) => {
  dispatch({
    type: SET_ITEMS,
    payload: data,
  });
};
