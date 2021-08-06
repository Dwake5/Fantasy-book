# Things to do

<ul>
  <li>Add P tags to text to format it better (done?)</li>
  <li>Progress bars to combat (maybe)</li>
  <li>Get no change for buying with gems (15) might not do this, a lot of work for little payoff, maybe just give 5gp a piece</li>
  <li>Handle death</li>
  <li>Workout when the user has to know about Jann... (305, 306, 321, 394, 387, 286) all tell you, but are optional choices except 286!) Requires a lot of testing (I think its fine though, based on base story path)</li>
  <li>Add bold text to important info the player recieves, and stat loss / increases</li>
  <li>Make Pilfer grass look more like backpack robbed (possibly unneccessary</li>
  <li>Handle using Libra during combat</li>
  <li>Fix right hand tooltips going to the right and off the screen</li>
  <li>Create a well done screen after game completion</li>
</ul>

# Done

<ul>
  <li>Improve progress bars styling</li>
  <li>Handle spirit curse in combat</li>
  <li>Convert to magic damage and regular damage, purpose of this is for the spirit curse and to handle death when a node kills and then heals you</li>
  <li>Handle using spells causing extra damage to you if you don't have items</li>
  <li>Handle GOB, 425, 369 (S5 HP5)</li>
  <li>Handle YOB, 361, 388 (S8 HP9)</li>
  <li>Find a way to adapt story text based on users stats for example when you dont have a magic item</li>
  <li>Handle spells requiring certain items</li>
  <li>Fixed: Spells fail if you have exactly the right amount of items needed</li>
  <li>Item furskin boots at 110</li>
  <li>Fireball manticore now working (its doubled though?)</li>
  <li>Fixed the combat, last chance luck issue, health can go negative</li>
  <li>All minigames complete</li>
  <li>Full restore and + 1 luck at 456 / end</li>
  <li>Bug Fixed: What if no items at pilfer Grass</li>
  <li>Waterfall ticket now accepted</li>
  <li>Find a way to fight night creatures and return to previous node (84, 108 || 283, 396, 421, 437, 453)</li>
  <li>Go through each spell and see which ones circle back. All magic is now blocked.</li>
  <li>Handle Bomba. Now just gives 1 provision</li>
  <li>Write usefilters a lot better</li>
  <li>Fixed 194, sword refund</li>
  <li>Bug: testing luck in combat after you roll equal scores to the enemy does nothing</li>
  <li>When theres an enemy block same spell being cast twice</li>
  <li>108, 283 adds +2 to night creatures roll</li>
  <li>Can only use a magic spell once with singleUse: true</li>
  <li>Let you spare Flanker</li>
  <li>Handle the 3 pages that affect yours on the enemies stats</li>
  <li>Disable swapping weapons or drinking potion in combat</li>
  <li>Handle items changing your AS in combat (passively)</li>
  <li>Integrate combat</li>
  <li>Cant equip/ change weapons in combat</li>
  <li>(refactor) getItem now unequips your weapon if you lose it</li>
  <li>Seperate the item component into weapons and items then do a weapon subheading</li>
  <li>Horrible Bug: Combat doesnt show death text in auto combat mode. Fixed but the solution is horrible and no idea what was the issue</li>
  <li>Lose 4 skill points if you have no weapon</li>
  <li>Look into greying out unselectable choices instead</li>
  <li>A lot of minigames, nearly all done</li>
  <li>Dont let player see same box twice 145,403,251,258</li>
  <li>Test Luck doesnt fully incorporate luck amulet</li>
  <li>Fixed Bug: Only the first item you pick at 280 reshows</li>
  <li>Completely fixed the overly complicated first trader</li>
  <li>All filters now swapped to a map, whereby bad options are greyed out with blocked attribute</li>
  <li>Fixed: Luck is currently broken</li>
  <li>Only show puchased options at 126</li>
  <li>Created weighted dice function for creating starts increasing average starting stats from 38 to 40</li>
  <li>Implement getting items at nodes, not choices</li>
  <li>Implement luck item, 177</li>
  <li>Add in Glamdragors sword 233 (item)</li>
  <li>Add in soft brown sand 213 (item)</li>
  <li>Gain HP when going to some nodes, staminaGain variable</li>
  <li>Write staminaLoss for non magic nodes</li>
  <li>Gain/lose luck when going to some nodes, luckGain/loss variable</li>
  <li>Write list of story nodes which need to have extra code written</li>
  <li>Create a luck table success chance in the tutorial</li>
  <li>Remove items from choices list that are too expensive (money-wise)</li>
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
  <li>You lose 3 hp if you havent eaten, can be up to 7 with plague (3) and spirits curse (1)</li>
  <li>Stop user choices going into new line (also on hover)</li>
  <li>Write most of eat options, for when the player can choose to eat provisions</li>
  <li>Write list of all items, because current item implementation is bad.</li>
  <li>Rewrite item implementation, will be more manageable going forwards</li>
  <li>Can now equip a weapon and change weapon</li>
  <li>Can drink blimberry potion, gaining health and using it up. Doesnt let user drink if they are at max health.</li>
  <li>Put a requires on choices, and filter them based on if user has that item i.e. need provisions to eat</li>
  <li>Used a useRef hook to store a value so EatOption has a fixed health after clicking it.</li>
  <li>Implement have eaten today (fully)</li>
  <li>Require libra to pick a choice and use her.</li>
  <li>Waterfall at 204 removes disease(s) and restores all stats to max</li>
  <li>Block magic if both the player has Jann and knows she blocks magic.</li>
  <li>Can't cast spells if Jann is with you (and the player knows Jann is anti magic)</li>
  <li>Actually recieve curses and disease when going to nodes 123, 213, 79</li>
  <li>Implement test luck</li>
</ul>

Try to prioritize getting items at a node, rather than a choice.


# Extra content story nodes to do

<ul>
<!-- <li>2: Fight Serpent Skill 7 Stamina 8</li> -->
<!-- <li>4: Use Key if have it</li> -->
<!-- <li>20: Fight Skunkbear Skill 7 Stamina 5 (you lose 2 AS)</li> -->
<!-- <li>21: Add eat food option </li> -->
<!-- <li>22: Trader Pipe roll </li> -->
<!-- <li>23: Check if tested luck at node 38</li> -->
<!-- <li>25: Use up Libra</li> -->
<!-- <li>29: Choose artefact to give</li> -->
<!-- <li>31: Possibly lose 3 hp</li> -->
<!-- <li>32: Choose 2 items to give up</li> -->
<!-- <li>33: Choice costs 2 gp</li> -->
<!-- <li>35: Can eat food if you wish 2 or 1 hp</li> -->
<!-- <li>36: Possibly lose 3 hp</li> -->
<!-- <li>37: Get Jann</li> -->
<!-- <li>45: Possibly lose 3 hp</li> -->
<!-- <li>47: Fight Goblin Skill 7 Stamina 6</li> -->
<!-- <li>48: Takes either spell book or 2 magic items</li> -->
<!-- <li>50: Get collar</li> -->
<!-- <li>57: Get 12 gold, lose 1 item user chooses</li> -->
<!-- <li>72: Lose 1 AS when using axe</li> -->
<!-- <li>74: Fight Wolfhound skill 7 stamina 6</li> -->
<!-- <li>79: Get plague (-3 hp per day)</li> -->
<!-- <li>82: Test luck</li> -->
<li>87: Fight Wood Golem skill 8 stamina 6</li>
<!-- <li>88: Options depend on items (pipe)</li> -->
<!-- <li>93: Must roll 2 dice once, - stamina each time, try more times if wanted</li> -->
<li>99: Fight Troll skill 8 stamina 7</li>
<!-- <li>100: Options depend on Jann</li> -->
<!-- <li>101: Nothing leads here</li> -->
<li>102: Could be free</li>
<!-- <li>104: Fight 2 Bandit's skill 7,7 stamina 6,5</li> -->
<!-- <li>106: Merchant</li> -->
<!-- <li>108: add +2 to night creatures roll</li> -->
<!-- <li>112: Libra choice</li> -->
<li>117: Fight Assassin skill 8 stamina 6, you can spare him conditionally</li>
<!-- <li>122: Get item Armband + 2 AS if using sword</li> -->
<!-- <li>123: Go to previous reference, roll to determine who we fight</li> -->
<!-- <li>124: Get cursed, from now on lose +1 stamina for all stamina loss actions except magic</li> -->
<!-- <li>126: Only view purchased items</li> -->
<!-- 130: Libra option -->
<!-- <li>133: Test luck if you want</li> -->
<!-- <li>141: Barter or not for the axe</li> -->
<!-- <li>142: Try to roll lower than skill, unlimited tries, - AS for weapon chosen each try</li> -->
<!-- <li>144: Test luck</li> -->
<li>151: Get Svinn girl? (maybe)</li>
<!-- <li>161: You have to pay, so block this option if not enough GP</li> -->
<!-- <li>162: Fight Hill Gaint skill 9 stamina 11</li> -->
<!-- <li>165: Keep testing your luck, until success 3 times in a row. -3 hp each time</li> -->
<!-- <li>168: Lose all provisions </li> -->
<!-- <li>171: Either option means Jann stays</li> -->
<!-- <li>177: Luck item</li> -->
<!-- <li>182: Give him axe if have it, or give him something else</li> -->
<!-- <li>185: Lose weapon, -4 skill if no weapon</li> -->
<li>187: Get friend for second book Flanker</li>
<!-- <li>194: Can take sword and leave the old one behind, does +1 damage. If unwanted you can test your luck, if pass, sell it again.</li> -->
<!-- <li>203: Fight Elvin skill 6+2 stamina 4</li> -->
<!-- <li>204: Waterfall cures you of all except disease</li> -->
<!-- <li>205: Lose Jann</li> -->
<!-- <li>206: Dead if no Libra</li> -->
<!-- <li>207: Fight Hill Giant skill 9 stamina 11</li> -->
<!-- <li>213: Curse of Alianna -2 skill until removed</li> -->
<!-- <li>214: Trader broadsword barter</li> -->
<!-- <li>218: Remove each item based on Test your Luck roll</li> -->
<li>227: Manticore fight. Each hit has a 1/3 chance of doing 6 hp, Succesful Luck roll can make this 2 instead.</li>
<!-- <li>228: Roll one die three times, if less than skill, you escape, if not call Libra, if not you die.</li> -->
<!-- <li>233: Get free waterfall pass</li> -->
<!-- <li>254: A dice determines where you go</li> -->
<!-- <li>257: The option to buy food 2 gp for 2 provisions</li> -->
<!-- <li>258: Minigame, 5 coins and a key up for grabs, for each pick one and Test Luck, if fail lose half hp rounded down. If you get key, can view it at 199</li> -->
<!-- <li>261: Lose all items except equipped weapon</li> -->
<!-- <li>269: Test Luck - if fail you die</li> -->
<!-- <li>270: Roll dice if 1 - 4 take that damage</li> -->
<!-- <li>276: Can kill you if Jann is with you. Text is dynamic.</li> -->
<!-- <li>277: Roll 2 dice, If equals luck, -1 hp, if over luck, -3 hp. If two 6's you die. Other pages affect these numbers.</li> -->
<!-- <li>283: Get 2 hp if no enemies fought or 1 hp if fought</li> -->
<li>285: Fight Ogre skill 8 stamina 7</li>
</ul>

# Magic

<ul>
<li>295: Roll dice, 1 is bad: fight</li>
<!-- <li>303: Need pebbles and dynamic text</li> -->
<!-- <li>317: Weaken troll skill 4 stamina 7, 50/50 it gets strong after round 4</li> -->
<!-- <li>325: Fights at half skill for 4 rounds Manticore</li> -->
<!-- <li>328: Dyanmic text, requires beeswax</li> -->
<!-- <li>330: Add + 3 to roll at 277</li> -->
<!-- <li>338: Fight weakened Hill Giant skill 6 stamina 11</li> -->
<!-- <li>339: requires bamboo flutes dynamic text</li> -->
<!-- <li>356: Can test luck, if success no fight, if fail fight with double skill.</li> -->
<!-- <li>366: Take 1d damage, if 6 test luck, if unlucky you die.</li> -->
<!-- <li>417: Take 1d damage for 1-5, if 6 you die.</li> -->
</ul>
