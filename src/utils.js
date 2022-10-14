// Rolls a number of dice.
// If no second argument, returns the sum of rolls

import gameData from "./assets/gameData";

// If second argument is true, return an array of values
export const diceRolls = (number, returnSum) => {
  const rolls = [];
  for (let d = 0; d < number; d++) {
    const roll = Math.ceil(Math.random() * 6);
    rolls.push(roll);
  }
  if (returnSum) return rolls.reduce((a, b) => a + b);
  return rolls;
};

// Determines weather to pluralize a number or not.
// If amount is 1 don't add an 's' otherwise do
export const pluralize = (word, amount) => {
  if (amount === 1) return word;
  return `${word}s`;
};

// Gets the sum of two dice and compares it to luck
// Returns a boolean depending on if the role is less than or equal to
// the die roll. The luck amulet adds 1 to luck, increasing chances.

// This should be a hook?
export const testYourLuck = (luck, amulet) => {
  const rolled = diceRolls(2, true);
  if (amulet) luck++;
  return [rolled, rolled <= luck];
};

// Used to uppercase a word
// Because this was being used with "max" a lot
// stamina => maxStamina, I incorporated it in.
export const uppercase = (word, max) => {
  word = word[0].toUpperCase() + word.slice(1);
  if (max) return `max${word}`;
  return word;
};

export const resetNightCreatures = () => {
  gameData[123].pause = true;
  unblockChoice(123, 0);
  unblockChoice(123, 1);
  unblockChoice(123, 2);
  unblockChoice(123, 3);
  unblockChoice(123, 4);
};

export const blockChoice = (page, choice) => {
  gameData[page].choices[choice].blocked = true;
};

export const unblockChoice = (page, choice) => {
  gameData[page].choices[choice].blocked = false;
};

export const chanceToHit = (skillDifference) => {
  const chanceMapPositive = {
    10: 99.925,
    9: 99.637,
    8: 98.846,
    7: 97.334,
    6: 94.703,
    5: 90.317,
    4: 84.172,
    3: 76.197,
    2: 66.534,
    1: 55.674,
    0: 44.174,
  };
  const chanceMapNegative = {
    1: 33.419,
    2: 22.813,
    3: 15.943,
    4: 9.801,
    5: 5.302,
    6: 2.741,
    7: 1.18,
    8: 0.388,
    9: 0.072,
  };
  if (skillDifference > 10) return 100;
  if (skillDifference < -9) return 0;
  if (skillDifference >= 0) return chanceMapPositive[skillDifference];
  return chanceMapNegative[-skillDifference];
};
