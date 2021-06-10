import {
  MAX_STAT,
  STAT_LOSS,
  STAT_GAIN,
  LIBRA_RESTORE,
  LIBRA_CURE,
  EATEN_TODAY,
} from "./action-types";

export const setMaxStat = (dispatch, stat, number) => {
  dispatch({
    type: MAX_STAT,
    payload: { stat, number },
  });
};

export const loseStat = (dispatch, stat, amount) => {
  const data = { stat, amount };
  dispatch({
    type: STAT_LOSS,
    payload: data,
  });
};

export const gainStat = (dispatch, stat, amount) => {
  const data = { stat, amount };
  dispatch({
    type: STAT_GAIN,
    payload: data,
  });
};

export const libraRestore = (dispatch) => {
  dispatch({ type: LIBRA_RESTORE });
};

export const libraCure = (dispatch) => {
  dispatch({ type: LIBRA_CURE });
};

export const changeEatenToday = (dispatch, boolean) => {
  dispatch({
    type: EATEN_TODAY,
    payload: boolean,
  });
};
