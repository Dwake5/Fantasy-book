export const getItems = (state) => state.items;
export const getMoney = (state) => state.items.gold.amount;
export const getProvisions = (state) => state.items.provisions.amount;
export const ownItem = (state, item) => state.items[item].amount > 0;

export const getOwnedItems = (state) => {
  let itemsOwned = []
  Object.keys(state.items).forEach((key) => {
    const item = state.items[key];
    if (item.amount > 0) itemsOwned.push(key)
  })
  return itemsOwned
}