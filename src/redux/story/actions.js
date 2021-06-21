import {
  SET_PAGE,
  SET_TRADER_VIEWS,
  PLAYER_LEARNS_JANN,
  GLANDRAGOR,
  PILFER_GRASS,
  DOOR_BROKEN,
  ATTEMPT_DOOR,
  PITFALL_PREVIOUS,
  PITFALL_STATUS,
  SENTRY_DIE,
  SENTRY_LUCK,
  DOOR_OPEN,
  FORK_DIE,
  SEEN_BOX1,
  SEEN_BOX2,
  LOCKSMASH_PREVIOUS,
  ATTEMPT_LOCKSMASH,
  LOCK_OPEN,
} from "./action-types";

export const setPage = (dispatch, number) => {
  dispatch({
    type: SET_PAGE,
    payload: number,
  });
};

export const addToTraderItems = (dispatch, number) => {
  dispatch({
    type: SET_TRADER_VIEWS,
    payload: number,
  });
};

export const changeGlandragor = (dispatch, data) => {
  dispatch({
    type: GLANDRAGOR,
    payload: data,
  });
};

export const playerLearnsJann = (dispatch) => {
  dispatch({ type: PLAYER_LEARNS_JANN });
};

export const passPilferGrass = (dispatch) => {
  dispatch({ type: PILFER_GRASS });
};

export const breakDoor = (dispatch) => {
  dispatch({ type: DOOR_BROKEN });
};

export const attemptDoor = (dispatch) => {
  dispatch({ type: ATTEMPT_DOOR });
};

export const pitfallPrevious = (dispatch, number) => {
  dispatch({ type: PITFALL_PREVIOUS, payload: number });
};

export const pitfallStatus = (dispatch, data) => {
  dispatch({ type: PITFALL_STATUS, payload: data });
};

export const sentryDie = (dispatch, number) => {
  dispatch({ type: SENTRY_DIE, payload: number });
};

export const sentryLuck = (dispatch, data) => {
  dispatch({ type: SENTRY_LUCK, payload: data });
};

export const smashOpenDoor = (dispatch, data) => {
  dispatch({ type: DOOR_OPEN, payload: data });
};

export const setForkDie = (dispatch, data) => {
  dispatch({ type: FORK_DIE, payload: data });
};

export const seenBox1 = (dispatch) => {
  dispatch({ type: SEEN_BOX1 });
};

export const seenBox2 = (dispatch) => {
  dispatch({ type: SEEN_BOX2 });
};

export const locksmashPrevious = (dispatch, number) => {
  dispatch({ type: LOCKSMASH_PREVIOUS, payload: number });
};

export const breakLockSmash = (dispatch) => {
  dispatch({ type: LOCK_OPEN });
};

export const attemptLockSmash = (dispatch) => {
  dispatch({ type: ATTEMPT_LOCKSMASH });
};