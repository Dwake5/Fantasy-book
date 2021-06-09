import { SET_ITEMS } from "./action-types";

const initialState = {
  gold: { name: "Gold Pieces", amount: 20, info: "", alwaysShow: true},
  provisions: { name: "", amount: 2, info: "", alwaysShow: true},
  sword: { name: "", own: false, info: "", alwaysShow: false, equipped: true},
  potion: { name: "", own: false, info: "", alwaysShow: false},
  broadsword: { name: "", own: false, info: "", alwaysShow: false, equipped: false},
  pipe: { name: "", own: false, info: "", alwaysShow: false},
  axe: { name: "", own: false, info: "", alwaysShow: false, equipped: false},
  iceJewel: { name: "", own: false, info: "", alwaysShow: false},
  bomba: { name: "", amount: 1, info: "", alwaysShow: false},
  oldKey: { name: "", own: false, info: "", alwaysShow: false},
  goblinKey: { name: "", own: false, info: "", alwaysShow: false},
  khareKey: { name: "", own: false, info: "", alwaysShow: false},
  khareKey2: { name: "", own: false, info: "", alwaysShow: false},
  net: { name: "", own: false, info: "", alwaysShow: false},
  waterfallPass: { name: "", own: false, info: "", alwaysShow: false},
  vialOfGlue: { name: "", own: false, info: "", alwaysShow: false},
  nosePlugs: { name: "", own: false, info: "", alwaysShow: false},
  pebbles: { name: "", own: false, info: "", alwaysShow: false},
  spellbookPage: { name: "", own: false, info: "", alwaysShow: false},
  beezwax: { name: "", own: false, info: "", alwaysShow: false},
  armband: { name: "", own: false, info: "", alwaysShow: false, equipped: true},
  craftedSword: { name: "", own: false, info: "", alwaysShow: false},
  skullcap: { name: "", own: false, info: "", alwaysShow: false},
  apeTeeth: { name: "", own: false, info: "", alwaysShow: false},
  goblinTeeth: { name: "", own: false, info: "", alwaysShow: false},
  giantsTeeth: { name: "", own: false, info: "", alwaysShow: false},
  snattacatTeeth: { name: "", own: false, info: "", alwaysShow: false},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
