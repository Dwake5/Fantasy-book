// Rolls an a number of dice.
// If no second argument, returns the sum of rolls
// If second argument is true, return an array of values
export const diceRolls = (number, returnSum) => {
  let rolls = []
  for (let d = 0; d < number; d++) {
    const roll = Math.ceil(Math.random() * 6);
    rolls.push(roll)
  }
  if (returnSum) return rolls.reduce((a,b) => a + b)
  return rolls
}