import { MAX_SKILL, MAX_STAMINA, MAX_LUCK, STAT_LOSS, STAT_GAIN, LIBRA_RESTORE, LIBRA_CURE, EATEN_TODAY } from "./action-types";

export const setMaxSkill = (dispatch, number) => {
  dispatch({
    type: MAX_SKILL,
    payload: number,
  });
};

export const setMaxStamina = (dispatch, number) => {
  dispatch({
    type: MAX_STAMINA,
    payload: number,
  });
};

export const setMaxLuck = (dispatch, number) => {
  dispatch({
    type: MAX_LUCK,
    payload: number,
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
  dispatch({type: LIBRA_RESTORE})
}

export const libraCure = (dispatch) => {
  dispatch({type: LIBRA_CURE})
}

export const changeEatenToday = (dispatch, boolean) => {
  dispatch({
    type: EATEN_TODAY,
    payload: boolean,
  })
}