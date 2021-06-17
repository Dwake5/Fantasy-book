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
