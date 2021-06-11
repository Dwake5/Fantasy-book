const tutorialData = [
  {
    header: `The Simple and Advanced Games`,
    info: `<p>Beginners may wish to start with the simple game, ignoring the use of 
    magic. Rules for fighting creatures with swords and other weapons 
    are given in each adventure book, using a combat system similar to 
    that used in Puffin's The Warlock of Firetop Mountain, the original 
    Fighting Fantasy Game book. By rolling dice, you battle creatures with 
    weapons only.</p>
    
    <p>More experienced players will wish to progress quickly on to the 
    advanced game, in which your fighting ability is somewhat limited 
    but your most powerful weapon will be your knowledge of magic, a 
    much more powerful tool. In actual fact, the advanced game is fairly 
    simple to learn. There is no reason why beginners should not proceed 
    with the use of magic from the start. But learning spells will take some 
    time and practice with the Spell Book, and the 'simple' option is given 
    for players who wish to start their adventure with minimum delay.</p>`,
  },
  {
    header: `How are Stats Determined`,
    info: `<p>Before setting off on your journey, you must first build up your own 
    personality profile.</p>

    <h3>Skill, Stamina and Luck</h3>

    <p>Roll one die. If you are playing as a warrior (the simple game), add 6 to 
    this number and enter the total in the skill box on your Adventure 
    Sheet. If you are playing as a wizard (the advanced game), add only 4 to 
    this number and enter the total. Wizards are worse fighters than 
    warriors, but they more than make up for this by the use of magic 
    spells.</p>
    
    <p>Roll both dice. Add 12 to the number rolled and enter this total in the STAMINA box.</p>
    
    <p>There is also a luck box. Roll one die, add 6 to this number and enter 
    this total in the luck box.</p>
    
    <p>For reasons that will be explained below, skill, stamina and luck 
    scores change constantly during an adventure. You must keep an 
    accurate record of these scores and for this reason you are advised 
    either to write small in the boxes or to keep an eraser handy. But never 
    rub out your Initial scores. Although you may be awarded additional 
    skill, stamina and luck points, these totals may never exceed your 
    Initial scores, except on very rare occasions, when you will be in- 
    structed on a particular page.</p>
    
    <p>Your skill score reflects your swordsmanship and general fighting 
    expertise; the higher the better. Your stamina score reflects your 
    general constitution, your will to survive, your determination and 
    overall fitness; the higher your stamina score, the longer you will be 
    able to survive. Your luck score indicates how naturally lucky a 
    person you are. Luck and magic are facts of life in the fantasy world 
    you are about to explore.</p>`,
  },
  {
    header: `How to Battle`,
    info: `<p>You will often come across pages in the book which instruct you to 
    fight a creature of some sort. An option to flee may be given, but if not 
    - or if you choose to attack the creature anyway - you must resolve the 
    battle as described below.</p>
    
    <p>First record the creature's skill and stamina scores in the first 
    vacant Monster Encounter Box on your Adventure Sheet, The scores for 
    each creature are given in the book each time you have an encounter. 
    The sequence of combat is then:</p>
    
    <ol>
    <li>Roll the two dice once for the creature. Add its skill score. This 
    total is the creature's Attack Strength.</li>
    
    <li>Roll the two dice once for yourself. Add the number rolled to your 
    current skill score. This total is your Attack Strength.</li> 
    
    <li>If your Attack Strength is higher than that of the creature, you have 
    wounded it. Proceed to step 4. If the creature's Attack Strength is 
    higher than yours, it has wounded you. Proceed to step 5. If both 
    Attack Strength totals are the same, you have avoided each other's 
    blows - start the next Attack Round from step 1 above.</li> 
    
    <li>You have wounded the creature, so subtract 2 points from its 
    stamina score. You may use your luck here to do additional 
    damage.</li>
    
    <li>The creature has wounded you, so subtract 2 points from your sta- 
    mina score. Again, you may use luck at this stage.</li>
    
    <li>Make the appropriate adjustments to either the creature's or your 
    own stamina score.</li>
    
    <li>Begin the next Attack Round (repeat steps 1-6). This sequence 
    continues until the stamina score of either you or the creature 
    you are fighting has been reduced to zero (death).</li>
    </ol>

    <h3>Fighting More Than One Creature</h3>
    
    <p>If you come across more than one creature in a particular encounter, 
    the instructions will tell you how to handle the battle. 
    Sometimes you will treat them as a single monster; sometimes you 
    will fight each one in turn.</p>`,
  },
  {
    header: `Luck`,
    info: `<p>At various times during your adventure, either in battles or when you 
    come across situations in which you could be either Lucky or Unlucky 
    (details of these are given on the pages themselves), you may call on 
    your luck to make the outcome more favourable. But beware! Using 
    luck is a risky business and if you are unlucky, the results could be 
    disastrous.</p> 
    
    <p>The procedure for using your luck is as follows: roll two dice. If the 
    number rolled is equal to or less than your current luck score, you have 
    been Lucky and the result will go in your favour. If the number rolled 
    is higher than your current luck score, you have been Unlucky and 
    you will be penalized.</p> 

    <p>On certain pages of the book you will be told to Test your Luck and will 
    be told the consequences of your being Lucky or Unlucky. However, in 
    battles you always have the option of using your luck either to inflict 
    a more serious wound on a creature you have just wounded, or to 
    minimize the effects of a wound the creature has just inflicted on you.</p> 
    
    <p>This procedure is known as Testing your Luck. Each time you Test your 
    Luck you lose one point from your current luck score. 
    Thus you will soon realize that the more you rely on your luck, the 
    more risky this will become.</p>`,
  },
  {
    header: `Using Luck in Battle`,
    info: `
    <p>If you have just wounded the creature, you may Test your Luck as 
    described above. If you are Lucky, you have inflicted a severe wound 
    and may subtract an extra 2 points from the creature's stamina score. 
    However, if you are Unlucky, the wound was a mere graze and you 
    must restore 1 point to the creature's stamina (i.e. instead of scoring 
    the normal 2 points of damage, you have now scored only 1).</p>
    
    <p>If the creature has just wounded you, you may Test your Luck to try to 
    minimize the wound. If you are Lucky, you have managed to avoid the 
    full damage of the blow. Restore 1 point of stamina (i.e. instead of 
    doing 2 points of damage it has done only 1). If you are Unlucky, you 
    have taken a more serious blow. Subtract 1 extra stamina point.</p> 
    
    <p>Remember that you lose 1 point from your own luck score 
    each time you Test your Luck.</p>`,
  },
  {
    header: `Restoring Skill, Stamina and Luck`,
    info: `<h3>Skill</h3>

    <p>Your skill score will not change much during your adventure. 
    Occasionally, you may be given instructions to increase or decrease 
    your skill score. A Magic Weapon may increase your skill, but 
    remember that only one weapon can be used at a time. You cannot 
    claim 2 skill bonuses for carrying two Magic Swords. Your skill 
    score can never exceed its Initial value unless specifically instructed.</p> 
    
    <h3>Stamina and Provisions</h3>
    
    <p>Your stamina score will change a lot during your adventure as you 
    fight monsters and undertake arduous tasks. As you near your goal, 
    your stamina level may be dangerously low and battles may be 
    particularly risky, so be careful.</p>
    
    <p>You start with enough Provisions for two meals. You may rest and eat 
    only when allowed by the instructions, and you may eat only one 
    meal at a time. When you eat a meal, add points to your stamina 
    score as instructed. Remember that you have a long way to go, so 
    manage your Provisions wisely!</p> 
    
    <p>Remember also that your stamina score will never exceed its Initial 
    value unless specifically instructed.</p>
    
    <h3>Luck</h3>
    
    <p>Additions to your luck score are awarded through the adventure 
    when you have been particularly lucky. Details are given whenever 
    this occurs. Remember that, as with skill and stamina, your luck 
    score may never exceed its Initial value unless specifically instructed.</p>
    
    <p>Skill, stamina and luck scores can be restored to their Initial 
    values by calling on your goddess (see Libra).</p>`,
  },
  {
    header: `Wizards: How to use Magic`,
    info: `<p>If you have chosen to become a wizard you will have the option, 
    throughout the adventure, of using magic spells. All the spells known 
    to the sorcerers of Analand are listed in a separate volume, The Spell Book, 
    and you should study this before you set off on your adventure.</p>
    
    <p>All spells are coded with a three-letter code and you must learn and 
    practise your spells until you are able to identify a reasonable number 
    of them from their codes. Casting a spell drains your stamina and 
    each has a cost, in stamina points, for its use. Recommended basic 
    spells will get you started quickly, but are very uneconomical; an 
    experienced wizard will use these only if faced with choices of 
    unknown spells or if he/she has not found the artefact required for a 
    less costly spell.</p> 
    
    <p>Full rules for using spells are given in the Spell Book.</p> 
    
    <p>Don't forget! Looking at your spellbook during your adventure is risky. You will lose 2 stamina points for doing so.</p>`,
  },
  {
    header: `Libra - The Goddess of Justice`,
    info: `<p>During your adventure you will be watched over by your own 
    goddess, Libra, If the going gets tough, you may call on her for aid. 
    But she will only help you once in each adventure, Once you have called on 
    her help in the Shamutanti Hills, she will not listen to you again until 
    you reach Khare.<p/> 
    
    <p>There are three ways in which she may help you:<p/> 
    
    <p>Restore: You may call on her at any time to restore your skill, 
    stamina and luck scores to their Initial values. This is not given as 
    an option; you may do this if and when you wish, but only 
    once in each adventure.<p/> 
    
    <p>Escape: Occasionally, when you are in danger, the text will offer you 
    the option of calling on Libra to help you. <p/>
    
    <p>Cure: She will remove any curses or 
    diseases you may pick up on your adventure. This is not given as an 
    option in the text; you may do this if and when you wish, but only 
    once in each adventure.<p/>`,
  },
  {
    header: `Equipment and Items`,
    info: `// todo write this yourself as the game develops`,
  },
];

export default tutorialData;
