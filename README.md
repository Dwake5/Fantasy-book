# Things to do
<ul>
  <li>Find a way to adapt story text based on users stats</li>
  <li>Write staminaLoss for non magic nodes</li>
  <li>Add P tags to text to format it better</li>
  <li>Lose 2 hp when viewing magic book (not during tutorial though)</li>
  <li>Progress bars to combat</li>
  <li>Implement Jann</li>
  <li>Implement have eaten today</li>
  <li>Find a way to fight night creatures and return to previous node (84, 108, 283 || 396, 421, 437, 453)</li>
  <li>108, 283 adds +2 to night creatures roll</li>
  <li>Get no change for buying with gems (15) might not do this, a lot of work for little payoff, maybe just give 5gp a piece</li>
  <li>Implement getting items at nodes, not choices</li>
  <li>Implement losing hp if not eaten, notEaten variable</li>
  <li>Handle death</li>
  <li>Implement test luck</li>
  <li>Implement new days: should be tied to not eaten</li>
  <li>Can't cast spells if Jann is with you</li>
  <li>Use up libra in choices: 160</li>
  <li>Implement luck item, 177</li>
  <li>Drink blimberry juice for 3 HP</li>
  <li>Handle spells requiring certain items</li>
  <li>Handle spells causing extra damage if you dont have items</li>
</ul>

# Done
<ul>
  <li>Gain HP when going to some nodes, staminaGain variable</li>
  <li>Gain/lose luck when going to some nodes, luckGain/loss variable</li>
  <li>Write list of story nodes which need to have extra code written</li>
  <li>Create a luck table success chance in the tutorial</li>
  <li>Remove items from choices list that are too expensive</li>
  <li>Refactor choices into its own component</li>
  <li>Move logic for paying and getting items into redux action (feel like this has been doing poorly)</li>
  <li>Move filter options into storyMain so that press a button to go to a choice works</li>
  <li>Find a way to show + hide choices (filtered on cost)</li>
  <li>Lose HP when going to some nodes, staminaLoss variable</li>
  <li>Made it so a stat cant go below zero</li>
  <li>Used useeffect cleanup to remove event listener thus making pauceChoices work correctly</li>
  <li>Created test your luck function in utils, including use of luck amulet</li>
  <li>Add stamina cost for viewing spellbook with info in tutorial and hover warning</li>
  <li>Use Libra in other ways (restore fully working)</li>
  <li>Implement Libra (can cure and revitilize)</li>
  <li>Implement Curses and Diseases (curses done)</li>
</ul>

eatOption: [{ haveEaten: 1, haveNotEaten: 2 }],
notEaten: 3,
enemies: [{ name: "Elvin", skill: "6", stamina: "4" }],
getItems: [{name: ""}]

plague: true
curse: true
dead: true
getJann: true

# Extra content story nodes
2: Fight Serpent Skill 7 Stamina 8
4: Use Key if have it
20: Fight Skunkbear Skill 7 Stamina 5 (you lose 2 AS)
21: Add eat food option
22: Trader Pipe roll
23: Check if tested luck at node 38
25: Use up Libra
29: Choose artefact to give
31: Possibly lose 3 hp
32: Choose 2 items to give up
33: Choice costs 2 gp
35: Can eat food if you wish 2 or 1 hp
36: Possibly lose 3 hp
37: Get Jann
45: Possibly lose 3 hp
47: Fight Goblin Skill 7 Stamina 6
48: Takes either spell book or 2 magic items
50: Get collar
57: Get 12 gold, lose 1 item user chooses
72: Lose 1 AS when using axe
74: Fight Wolfhound skill 7 stamina 6
79: Get plague (-3 hp per day)
82: Test luck
87: Fight Wood Golem skill 8 stamina 6
88: Options depend on items (pipe)
93: Must roll 2 dice once, - stamina each time, try more itmes if wanted
99: Fight Troll skill 8 stamina 7
100: Options depend on Jann
101: Nothing leads here
102: Could be free
104: Fight 2 Bandit's skill 7,7 stamina 6,5
106: Merchant
108: add +2 to night creatures roll
112: Libra choice
117: Fight Assassin skill 8 stamina 6, you can spare him conditionally
122: Get item Armband + 2 AS if using sword
123: Go to previous reference, roll to determine who we fight
124: Get cursed, from now on lose +1 stamina for all stamina loss actions except magic
130: Libra option
133: Test luck if you want
141: Barter or not for the axe
142: Try to roll lower than skill, unlimited tries, - AS for weapon chosen each try
144: Test luck
151: Get Svinn girl? 
161: You have to pay, so block this option if not enough GP
162: Fight Hill Gaint skill 9 stamina 11
165: Keep testing your luck, until success 3 times in a row. -3 hp each time
168: Lose all provisions
171: Either option means Jann stays
177: Luck item
182: Give him axe if have it, or give him something else
185: Lose weapon, -4 skill if no weapon
187: Get friend for second book Flanker
194: Can take sword and leave the old one behind, does +1 damage. If unwanted you can test your luck, if pass, sell it again. 
203: Fight Elvin skill 6+2 stamina 4
204: Waterfall cures you of all except disease
205: Lose Jann
206: Dead if no Libra
207: Fight Hill Giant skill 9 stamina 11
213: Curse of Alianna -2 skill until removed
214: Trader broadsword barter
215: Remove each item based on Test your Luck roll
227: Manticore fight. Each hit has a 1/3 chance of doing 6 hp, Succesful Luck roll can make this 2 instead.
228: Roll one die three times, if less than skill, you escape, if not call Libra, if not you die.
230: option 2 requires axe
234: Get free waterfall pass
254: A dice determines where you go
257: The option to buy food 2 gp for 2 provisions
258: Minigame, 5 coins and a key up for grabs, for each pick one and Test Luck, if fail lose half hp rounded down. If you get key, can view it at 199
261: Lose all items except equipped sword
269: Test Luck - if fail you die
270: Roll dice if 1 - 4 take that damage
276: Can kill you if Jann is with you. Text is dynamic.
277: Roll 2 dice, If equals luck, -1 hp, if over luck, -3 hp. If two 6's you die. Other pages affect these numbers.
283: Get 2 hp if no enemies fought or 1 hp if fought
285: Fight Ogre skill 8 stamina 7

Magic
295: Roll dice, 1 is bad: fight
303: Need pebbles and dynamic text
317: Weaken troll skill 4 stamina 7, 50/50 it gets strong after round 4
325: Fights at half skill for 4 rounds Manticore
328: Dyanmic text, requires beeswax
330: Add + 3 to roll at 277
338: Fight weakened Hill Giant skill 6 stamina 11
339: requires bamboo flutes dynamic text
356: Can test luck, if success no fight, if fail fight with double skill.