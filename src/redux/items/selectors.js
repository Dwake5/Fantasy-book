export const getItems = (state) => state.items.items;
export const getMoney = (state) => state.items.items?.find(item => item.name === 'Gold').amount;
export const getProvisions = (state) => state.items.items?.find(item => item.name === 'Provisions').amount;