import { SET_ITEMS } from "./action-types";

const initialState = {
  gold: {
    name: "Gold Pieces",
    amount: 20,
    info: "Basic currency used throughout the land",
    alwaysShow: true,
  },
  provisions: {
    name: "Provisions",
    amount: 2,
    info: "Enough food for 1 good meal",
    alwaysShow: true,
  },
  sword: {
    name: "Basic Sword",
    owned: false,
    info: "Weak starting sword",
    equipped: true,
  },
  potion: {
    name: "Blimberry Potion",
    owned: false,
    info: "Pungant Blimberry Juice. Use in magic or to consume 3 stamina points anytime outside of battle",
  },
  broadSword: {
    name: "Broadsword",
    owned: false,
    info: "A fine-edged weapon. Adds 1 point to Attack Strength when in use.",
    equipped: false,
  },
  pipe: {
    name: "Bamboo Pipe",
    owned: false,
    info: "A music pipe made of bamboo",
  },
  axe: {
    name: "Axe",
    owned: false,
    info: "An old axe, -1 Attack Strength when used.",
    equipped: false,
  },
  iceJewel: { name: "Ice Jewel", owned: false, info: "A mounted Ice Jewel" },
  bomba: {
    name: "Bomba Fruit",
    amount: 1,
    info: "A nourishing Bomba. Use to double the stamina gain of your next meal",
    use: false,
  },
  oldKey: {
    name: "Old Key",
    owned: false,
    info: "An old and rusty key.",
  },
  goblinKey: {
    name: "Goblin Key",
    owned: false,
    info: "Stolen from a dead Goblin.",
  },
  khareKey: {
    name: "Khare Gate Key",
    owned: false,
    info: "A large key used to open the Khare city gates",
  },
  khareKey2: {
    name: "Khare Dungeon Key",
    owned: false,
    info: "Can be used to unlock dungeons in Khare.",
  },
  net: {
    name: "Giant Net",
    owned: false,
    info: "A large net stolen from a giant's cave",
  },
  waterfallPass: {
    name: "Waterfall Pass",
    owned: false,
    info: "Allows free entry into the Crystal Waterfall",
  },
  vialOfGlue: { name: "Vial of Glue", owned: false, info: "Used in spells" },
  nosePlugs: { name: "Noseplugs", owned: false, info: "Used in spells" },
  pebbles: {
    name: "Pebbles",
    owned: false,
    info: "Small round pebbles, useful for spells",
  },
  spellbookPage: {
    name: "Spellbook Page",
    owned: false,
    info: "Part of a pest repelling spell",
  },
  beezwax: {
    name: "Beezwax",
    amount: 0,
    info: "Gathered from a beehive. Used in spells",
  },
  locket: {
    name: "Locket",
    amount: 0,
    info: "A locket with a portrait of a woman inside",
  },
  luckAmulet: {
    name: "Lucky Amulet",
    owned: false,
    info: "Stolen from a dead troll. Improves Test your Luck odds, -1 from dice roll.",
    equipped: true,
  },
  armband: {
    name: "Armband of Swordmastery",
    owned: false,
    info: "A magical armband that improves your combat skill with a sword. Gives +2 Attack Strength if using a sword",
    equipped: true,
  },
  craftedSword: {
    name: "A Finely Crafted Sword",
    owned: false,
    info: "Finely crafted sword with a sharpened blade. Does 3 damage instead of the normal 2 in combat.",
  },
  skullcap: {
    name: "Skullcap",
    owned: false,
    info: "A woven skullcap. No magical properties but useful for magic.",
  },
  apeTeeth: { name: "Apes Teeth", amount: 0, info: "Ape Teeth" },
  goblinTeeth: {
    name: "Goblins Teeth",
    amount: 0,
    info: "Goblin Teeth, used in magic",
  },
  giantsTeeth: {
    name: "Giants Teeth",
    amount: 0,
    info: "Giant Teeth, used in magic",
  },
  snattacatTeeth: {
    name: "Snattacat Teeth",
    amount: 0,
    info: "Snattacat Teeth, used in magic",
  },
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
