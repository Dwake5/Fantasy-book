import {
  LOCKSMASH_PREVIOUS,
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

export const playerLearnsJann = (dispatch) => {
  dispatch({ type: PLAYER_LEARNS_JANN });
};

export const passPilferGrass = (dispatch) => {
  dispatch({ type: PILFER_GRASS });
};

export const pitfallPrevious = (dispatch, number) => {
  dispatch({ type: PITFALL_PREVIOUS, payload: number });
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

export const nightCreaturePrevious = (dispatch, number) => {
  dispatch({ type: NIGHT_CREATURE_PREVIOUS, payload: number });
};

export const nightCreatureFight = (dispatch, boolean) => {
  dispatch({ type: NIGHT_CREATURE_FIGHT, payload: boolean });
};

export const swordRefund = (dispatch, boolean) => {
  dispatch({ type: SWORD_REFUND, payload: boolean });
};
