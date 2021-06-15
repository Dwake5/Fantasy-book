import {
  EQUIP_WEAPON,
  DRINK_POTION,
  PAY_MONEY,
  EAT_PROVISION,
  GET_ITEM,
} from "./action-types";

const initialState = {
  gold: {
    name: "Gold Pieces",
    amount: 0,
    info: "Basic currency used throughout the land",
    alwaysShow: true,
  },
  provisions: {
    name: "Provisions",
    amount: 0,
    info: "Enough food for 1 good meal, replenishes Stamina.",
    alwaysShow: true,
  },
  sword: {
    name: "Basic Sword",
    amount: 0,
    singular: true,
    info: "Weak starting sword",
    equipped: true,
  },
  potion: {
    name: "Blimberry Potion",
    amount: 0,
    singular: true,
    info: "<p>Replenish 3 Stamina points outside of battle</p> Pungant Blimberry Juice. Useful in magic or to recover Stamina.",
    use: false,
  },
  broadsword: {
    name: "Broadsword",
    amount: 0,
    singular: true,
    info: "<p>+1 Attack Strength when equipped.</p> A fine-edged weapon.",
    equipped: false,
  },
  pipe: {
    name: "Bamboo Pipe",
    amount: 0,
    singular: true,
    info: "A musical pipe made of bamboo",
  },
  axe: {
    name: "Axe",
    amount: 0,
    singular: true,
    info: `<p>-1 Attack Strength when equipped.</p> 
    The carvings read: This axe was crafted in the Year of the Ox for Glandragor the Protector. 
    Its powers may be realized only by its owner.`,
    equipped: false,
  },
  iceJewel: {
    name: "Ice Jewel",
    amount: 0,
    singular: true,
    info: "A mounted Ice Jewel",
  },
  bomba: {
    name: "Bomba Fruit",
    amount: 0,
    info: "<p>Double Stamina gain from next meal</p> A nourishing Bomba. Given to you by a friendly hill farmer.",
    use: false,
  },
  oldKey: {
    name: "Old Key",
    amount: 0,
    singular: true,
    info: "An old and rusty key.",
  },
  goblinKey: {
    name: "Goblin Key",
    amount: 1,
    singular: true,
    info: "Stolen from a dead Goblin.",
  },
  khareKey: {
    name: "Khare Gate Key",
    amount: 0,
    singular: true,
    info: "A large key used to open the Khare city gates.",
  },
  khareKey2: {
    name: "Khare Dungeon Key",
    amount: 0,
    singular: true,
    info: "Can be used to unlock dungeons in Khare.",
  },
  net: {
    name: "Giant Net",
    amount: 0,
    singular: true,
    info: "A large net, stolen from a giant's cave.",
  },
  waterfallPass: {
    name: "Waterfall Pass",
    amount: 0,
    singular: true,
    info: "Allows free entry into the Crystal Waterfall.",
  },
  glue: {
    name: "Vial of Glue",
    amount: 0,
    singular: true,
    info: "Used in spells.",
  },
  nosePlugs: {
    name: "Noseplugs",
    amount: 0,
    singular: true,
    info: "Used in spells.",
  },
  pebbles: {
    name: "Pebbles",
    amount: 0,
    info: "Small round pebbles, useful for spells.",
  },
  spellbookPage: {
    name: "Spellbook Page",
    amount: 0,
    singular: true,
    info: "Part of a pest repelling spell.",
  },
  beeswax: {
    name: "Beeswax",
    amount: 0,
    info: "Gathered from a beehive. Used in spells.",
  },
  locket: {
    name: "Locket",
    amount: 0,
    singular: true,
    info: "A locket with a portrait of a woman inside.",
  },
  luckAmulet: {
    name: "Amulet",
    amount: 1,
    singular: true,
    info: "<p>-1 from Test your Luck die roll</p> A small amulet made of twisted metal, stolen from a dead troll. Improves Test your Luck chances.",
  },
  armband: {
    name: "Armband",
    amount: 0,
    singular: true,
    info: "<p>+2 Attack Strength when a sword is equipped</p> Ragnar's Armband of Swordmastery. A magical armband that improves your combat skill with a sword.",
  },
  craftedSword: {
    name: "Finely Crafted Sword",
    amount: 0,
    singular: true,
    info: "<p>Does 3 damage instead of 2 in combat</p> Finely crafted sword with a sharpened blade.",
    equipped: false,
  },
  skullcap: {
    name: "Skullcap",
    amount: 0,
    singular: true,
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
  deathhoundTeeth: {
    name: "Death-hound Teeth",
    amount: 0,
    info: "Death-hound Teeth, used in magic",
  },
  gems: {
    name: "Black Gems",
    amount: 0,
    info: "<p>Exchance for items</p> Valuable black rock gems. Can be used to buy items with, worth up to 10 Gold Pieces, but no change will be given.",
  },
  sand: {
    name: "Pouch of Sand",
    amount: 0,
    singular: true,
    info: "A pouch of soft brown sand, pillaged from Alianna's house"
  },
  collar: {
    name: "Green Gem Collar",
    amount: 0,
    singular: true,
    info: "A collar studded with green gems and looks quite valuable. Looted from a wolfhound."
  },
  glandragorSword: {
    name: "Glandragor's Sword",
    amount: 0,
    singular: true,
    equipped: false,
    info: "A replacement sword given to you by Glandragor the Protector, no special properties."
  }
};

// Im well aware this is bad code.
// The goal was to map over state and turn the single equipped: true to false
// and for the weapon given switch it to equipped: true
const equipSpecificWeapon = (state, weapon) => {
  return {
    sword: {
      ...state.sword,
      equipped: weapon === "sword",
    },
    broadSword: {
      ...state.broadSword,
      equipped: weapon === "broadSword",
    },
    axe: {
      ...state.axe,
      equipped: weapon === "axe",
    },
    craftedSword: {
      ...state.craftedSword,
      equipped: weapon === "craftedSword",
    },
    glandragorSword: {
      ...state.glandragorSword,
      equipped: weapon === 'glandragorSword'
    }
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_MONEY:
      return {
        ...state,
        gold: {
          ...state.gold,
          amount: state.gold.amount - action.payload,
        },
      };
    case EAT_PROVISION:
      return {
        ...state,
        provisions: {
          ...state.provisions,
          amount: state.provisions.amount - 1,
        },
      };
    case GET_ITEM:
      const relevantItem = action.payload.item
      const amountGained = action.payload.amount
      let amountAfter = state[relevantItem].amount + amountGained
      if (amountAfter < 0) amountAfter = 0
      return {
        ...state,
        [relevantItem]: {
          ...state[relevantItem],
          amount: amountAfter,
        }
      };
    case EQUIP_WEAPON:
      const weapon = action.payload;
      return {
        ...state,
        ...equipSpecificWeapon(state, weapon),
      };
    case DRINK_POTION:
      return {
        ...state,
        potion: {
          ...state.potion,
          own: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
