import {
  MAX_STAT,
  STAT_LOSS,
  STAT_GAIN,
  LOSE_LIBRA,
  LIBRA_RESTORE,
  LIBRA_CURE,
  EATEN_TODAY,
  WATERFALL,
  RECEIVE_JANN,
  LOSE_JANN,
  GAIN_CURSE_SPIRIT,
  GAIN_CURSE_ALIANNA,
  GAIN_PLAGUE,
  SCORPION_STING,
  FULL_RESTORE,
  DAMAGE,
  PURE_DAMAGE,
} from "./action-types";

export const setMaxStat = (dispatch, stat, number) => {
  dispatch({
    type: MAX_STAT,
    payload: { stat, number },
  });
};

export const takeDamage = (dispatch, number) => {
  dispatch({ type: DAMAGE, payload: number });
};

export const takePureDamage = (dispatch, number) => {
  dispatch({ type: PURE_DAMAGE, payload: number });
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

export const playerRecieveCurseSpirit = (dispatch) => {
  dispatch({ type: GAIN_CURSE_SPIRIT })
}

export const playerRecieveCurseAlianna = (dispatch) => {
  dispatch({ type: GAIN_CURSE_ALIANNA })
}

export const playerRecievePlague = (dispatch) => {
  dispatch({ type: GAIN_PLAGUE })
}

export const visitWaterfall = (dispatch) => {
  dispatch({ type: WATERFALL })
}

export const loseLibra = (dispatch) => {
  dispatch({ type: LOSE_LIBRA })
}

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

export const playerGetsJann = (dispatch) => {
  dispatch({ type: RECEIVE_JANN })
}

export const playerLosesJann = (dispatch) => {
  dispatch({ type: LOSE_JANN })
}

export const scorpionSting = (dispatch) => {
  dispatch({ type: SCORPION_STING })
}

export const fullRestore = (dispatch) => {
  dispatch({ type: FULL_RESTORE })
}