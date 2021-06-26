import {
  ATTEMPT_LOCKSMASH,
  BYPASS_GOBLINS,
  DOOR_OPEN,
  FORK_DIE,
  GLANDRAGOR,
  LOCKSMASH_PREVIOUS,
  LOCK_OPEN,
  NIGHT_CREATURE_FIGHT,
  NIGHT_CREATURE_PREVIOUS,
  PILFER_GRASS,
  PITFALL_PREVIOUS,
  PITFALL_STATUS,
  PLAYER_LEARNS_JANN,
  SEEN_BOX1,
  SEEN_BOX2,
  SET_PAGE,
  SET_TRADER_VIEWS,
  SKUNK_DIE,
  SWORD_REFUND,
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

export const swordRefund = (dispatch, boolean) => {
  dispatch({ type: SWORD_REFUND, payload: boolean });
};
