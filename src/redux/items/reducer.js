import { SET_ITEMS, EQUIP_WEAPON, DRINK_POTION } from "./action-types";

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
    info: "Enough food for 1 good meal, replenishes Stamina.",
    alwaysShow: true,
  },
  sword: {
    name: "Basic Sword",
    owned: true,
    info: "Weak starting sword",
    equipped: true,
  },
  potion: {
    name: "Blimberry Potion",
    owned: false,
    info: "<p>Replenish 3 Stamina points outside of battle</p> Pungant Blimberry Juice. Useful in magic or to recover Stamina.",
    use: false
  },
  broadSword: {
    name: "Broadsword",
    owned: false,
    info: "<p>+1 Attack Strength when equipped.</p> A fine-edged weapon.",
    equipped: false,
  },
  pipe: {
    name: "Bamboo Pipe",
    owned: false,
    info: "A musical pipe made of bamboo",
  },
  axe: {
    name: "Axe",
    owned: false,
    info: `<p>-1 Attack Strength when equipped.</p> 
    The carvings read: This axe was crafted in the Year of the Ox for Glandragor the Protector. 
    Its powers may be realized only by its owner.`,
    equipped: false,
  },
  iceJewel: { name: "Ice Jewel", owned: false, info: "A mounted Ice Jewel" },
  bomba: {
    name: "Bomba Fruit",
    amount: 0,
    info: "<p>Double Stamina gain from next meal</p> A nourishing Bomba. Given to you by a friendly hill farmer.",
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
    info: "A large key used to open the Khare city gates.",
  },
  khareKey2: {
    name: "Khare Dungeon Key",
    owned: false,
    info: "Can be used to unlock dungeons in Khare.",
  },
  net: {
    name: "Giant Net",
    owned: false,
    info: "A large net stolen from a giant's cave.",
  },
  waterfallPass: {
    name: "Waterfall Pass",
    owned: false,
    info: "Allows free entry into the Crystal Waterfall.",
  },
  vialOfGlue: { name: "Vial of Glue", owned: false, info: "Used in spells." },
  nosePlugs: { name: "Noseplugs", owned: false, info: "Used in spells." },
  pebbles: {
    name: "Pebbles",
    owned: false,
    info: "Small round pebbles, useful for spells.",
  },
  spellbookPage: {
    name: "Spellbook Page",
    owned: false,
    info: "Part of a pest repelling spell.",
  },
  beezwax: {
    name: "Beezwax",
    amount: 0,
    info: "Gathered from a beehive. Used in spells.",
  },
  locket: {
    name: "Locket",
    owned: false,
    info: "A locket with a portrait of a woman inside.",
  },
  luckAmulet: {
    name: "Amulet",
    owned: false,
    info: "<p>-1 from Test your Luck die roll</p> Stolen from a dead troll. Improves Test your Luck chances.",
  },
  armband: {
    name: "Armband",
    owned: false,
    info: "<p>+2 Attack Strength when a sword is equipped</p> Ragnar's Armband of Swordmastery. A magical armband that improves your combat skill with a sword.",
  },
  craftedSword: {
    name: "Finely Crafted Sword",
    owned: false,
    info: "<p>Does 3 damage instead of 2 in combat</p> Finely crafted sword with a sharpened blade.",
    equipped: false,
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

// Im well aware this is bad code.
// The goal was to map over state and turn the single equipped: true to false
// and for the weapon given switch it to equipped: true
const equipSpecificWeapon = (state, weapon) => {
  return {
    sword: {
      ...state.sword,
      equipped: weapon === "sword"
    },
    broadSword: {
      ...state.broadSword,
      equipped: weapon === "broadSword"
    },
    axe: {
      ...state.axe,
      equipped: weapon === "axe"
    },
    craftedSword: {
      ...state.craftedSword,
      equipped: weapon === "craftedSword"
    },
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case EQUIP_WEAPON: 
      const weapon = action.payload
      return {
        ...state,
        ...equipSpecificWeapon(state, weapon)
      };
    case DRINK_POTION: 
      return {
        ...state,
        potion: {
          ...state.potion,
          own: false,
        }
      };
    default:
      return state;
  }
};

export default reducer;
