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
  DOOR_OPEN,
  FORK_DIE,
  SEEN_BOX1,
  SEEN_BOX2,
  LOCKSMASH_PREVIOUS,
  ATTEMPT_LOCKSMASH,
  LOCK_OPEN,
  SKUNK_DIE,
  BYPASS_GOBLINS,
  NIGHT_CREATURE_PREVIOUS,
  NIGHT_CREATURE_FIGHT,
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

export const smashOpenDoor = (dispatch, data) => {
  dispatch({ type: DOOR_OPEN, payload: data });
};

export const setForkDie = (dispatch, type, data) => {
  if (type === "regular") {
    dispatch({ type: FORK_DIE, payload: data });
  }
  if (type === "skunk") {
    dispatch({ type: SKUNK_DIE, payload: data });
  }
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

export const bypassGoblins = (dispatch, boolean) => {
  dispatch({ type: BYPASS_GOBLINS, payload: boolean });
};

export const nightCreaturePrevious = (dispatch, number) => {
  dispatch({ type: NIGHT_CREATURE_PREVIOUS, payload: number });
};

export const nightCreatureFight = (dispatch, boolean) => {
  dispatch({ type: NIGHT_CREATURE_FIGHT, payload: boolean });
};