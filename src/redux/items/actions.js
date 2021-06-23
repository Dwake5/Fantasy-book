import {
  PAY_MONEY,
  EAT_PROVISION,
  EQUIP_WEAPON,
  DRINK_POTION,
  CHANGE_ITEM_AMOUNT,
  LOSE_EVERYTHING,
  LOSE_WEAPON,
  BLUNT_WEAPON,
} from "./action-types";

export const changeItemAmount = (dispatch, { name, amount }) => {
  dispatch({
    type: CHANGE_ITEM_AMOUNT,
    payload: { item: name, amount },
  });
};

export const payMoney = (dispatch, data) => {
  dispatch({
    type: PAY_MONEY,
    payload: data,
  });
};

export const eatProvision = (dispatch) => {
  dispatch({
    type: EAT_PROVISION,
  });
};

export const equipSpecificWeapon = (dispatch, data) => {
  dispatch({
    type: EQUIP_WEAPON,
    payload: data,
  });
};

export const drinkPotion = (dispatch) => {
  dispatch({ type: DRINK_POTION });
};

export const robbedByBandits = (dispatch, equippedWeapon) => {
  dispatch({
    type: LOSE_EVERYTHING,
    payload: equippedWeapon,
  });
};

export const loseEquippedWeapon = (dispatch) => {
  dispatch({ type: LOSE_WEAPON });
};

export const bluntWeapon = (dispatch, name) => {
  dispatch({ type: BLUNT_WEAPON, payload: name });
};
