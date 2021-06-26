// Rolls a number of dice.
// If no second argument, returns the sum of rolls

import gameData from "./assets/gameData";

// If second argument is true, return an array of values
export const diceRolls = (number, returnSum) => {
  let rolls = [];
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
  return word + "s";
};

// Gets the sum of two dice and compares it to luck
// Returns a boolean depending on if the role is less than or equal to
// the die roll. The luck amulet adds 1 to luck, increasing chances.

// This should be a hook? 
export const testYourLuck = (luck, amulet) => {
  const rolled = diceRolls(2, true);
  if (amulet) luck++;
  return [rolled, rolled <= luck]
};

// Used to uppercase a word
// Because this was being used with "max" a lot
// stamina => maxStamina, I incorporated it in.
export const uppercase = (word, max) => {
  word = word[0].toUpperCase() + word.slice(1);
  if (max) return "max" + word;
  return word
};

export const resetNightCreatures = () => {
  gameData[123].pause = true;
  unblockChoice(123, 0)
  unblockChoice(123, 1)
  unblockChoice(123, 2)
  unblockChoice(123, 3)
  unblockChoice(123, 4)
}

export const blockChoice = (page, choice) => {
  gameData[page].choices[choice].blocked = true;
}

export const unblockChoice = (page, choice) => {
  gameData[page].choices[choice].blocked = false;
}