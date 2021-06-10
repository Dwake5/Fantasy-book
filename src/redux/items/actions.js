import { SET_ITEMS, EQUIP_WEAPON } from "./action-types";

export const setItems = (dispatch, itemsRecieved, oldItems) => {
  let newItems = [];
  if (oldItems) newItems = [...oldItems];

  itemsRecieved.forEach((newItem) => {
    // Do we already have the item?
    const findItem = newItems.find((oldItem) => newItem.name === oldItem.name);

    if (!!findItem) {
      // Amend the quantity, if less than 0 make it zero
      if (findItem.amount) findItem.amount += newItem.amount;
      if (findItem.amount < 0) findItem.amount = 0;
      // Reinsert it in the same place
      const findIndex = oldItems.findIndex(
        (oldItem) => oldItem.name === findItem.name
      );
      newItems[findIndex] = findItem;
    } else {
      newItems.push(newItem);
    }
  });

  dispatch({
    type: SET_ITEMS,
    payload: newItems,
  });
};

export const payMoney = (dispatch, cost, oldItems) => {
  const money = oldItems.find((oldItem) => oldItem.name === "Gold");
  const index = oldItems.findIndex((oldItem) => oldItem.name === "Gold");

  money.amount -= cost;
  oldItems[index] = money;
  let newItems = [...oldItems];

  dispatch({
    type: SET_ITEMS,
    payload: newItems,
  });
};

export const equipSpecificWeapon = (dispatch, data) => {
  dispatch({
    type: EQUIP_WEAPON,
    payload: data,
  });
}