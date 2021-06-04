import {
  // SKILL,
  MAX_SKILL,
  // STAMINA,
  MAX_STAMINA,
  // LUCK,
  MAX_LUCK,
} from './action-types';

export const setMaxSkill = (dispatch, number) => {
  dispatch({
    type: MAX_SKILL,
    payload: number,
  })
}

export const setMaxStamina = (dispatch, number) => {
  dispatch({
    type: MAX_STAMINA,
    payload: number,
  })
}

export const setMaxLuck = (dispatch, number) => {
  dispatch({
    type: MAX_LUCK,
    payload: number,
  })
}