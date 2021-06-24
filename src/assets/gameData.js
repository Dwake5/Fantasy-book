const gameData = {
  0: {
    text: "You are dead",
    choices: [{ goToPage: 0, text: "Death" }],
  },
  1000: {
    text: `<p>You are about to embark on an epic adventure a quest for the Crown 
    of Kings. Your journey will take you from Analand, your home, 
    across the unruly territories of Kakhabad to the Mampang Fortress 
    where in lies the treasured crown.</p>
    
    <p>You play as a sword wielding wizard. As would a real wizard, you will 
    have to learn your spells for now. As you progress through your adventure, spells will be available to you to cast.
    Knowing and utilizing the best spell for the situation will be key to your success.
    You can however always choose to defeat enemies with combat.</p>

    <p>Take time to view your Spell Book now and learn some of the core spells. Due to the dangerous nature of your quest, 
    viewing it on your journey will be risky and a penalty will be inccured. No wizard would be expected to memorize all of the spells 
    and a small handful will usually be sufficient.</p>

    <p>Through the multi-choice system, you will choose which 
    paths to take, whether to fight or flee from combat and how you will 
    solve problems. If death takes you, you will have to begin your 
    adventure again. But if your Skill is great and if Luck and your god are 
    with you, you may survive your overland journey to the Mampang 
    Fortress.</p>`,
    choices: [
      {
        goToPage: 1001,
        text: "Continue..",
      },
    ],
  },
  1001: {
    text: `<p>You start your adventure with the bare necessities of life. You have a 
    sword as your weapon, and a backpack to hold your equipment, 
    treasures, artefacts and provisions. Due to the dangerous nature of your adventure, 
    looking at your spellbook during your adventure will often prove perilious and 
    you will lose 2 Stamina points each time. You also wouldn't want to risk the book 
    falling into the wrong hands!</p> 
    
    <p>You have a pouch around your waist containing 20 Gold Pieces, the 
    universal currency of all the known lands. You will need money for 
    food, shelter, purchases and bribery throughout your adventure, and 
    20 Gold Pieces will not go far. You will find it necessary to collect more 
    gold as you progress on your way.</p>
    
    <p>You are also carrying Provisions (food and drink) sufficient for 2 
    meals only. As you will find, food is an important commodity and you 
    will have to be careful how you use it. Make sure you do not waste 
    food: you cannot afford to run out of Provisions.</p>`,
    choices: [
      {
        goToPage: 1002,
        text: "Determine your starting stats!",
      },
    ],
    getItems: [
      { name: "gold", amount: 20 },
      { name: "provisions", amount: 2 },
      { name: "sword", amount: 1 },
    ],
  },
  1002: {
    text: `Before setting off you roll to determine your starting stats:`,
    choices: [{ goToPage: 1003, text: "Continue.." }],
    pause: true,
  },
  1003: {
    text: `<p>You awake at sunrise. After dressing, you breakfast on bread and 
    goat's milk and collect your belongings. Outside, the Outpost Settlement 
    is stirring: the womenfolk emerge to wash and prepare their 
    meals as the day's guard takes over.</p>
    
    <p>Eyes follow you as you leave your hut and walk towards the Shamutanti Wall. 
    The frontiers people are well aware of your mission and a 
    small crowd of well-wishers follows some distance behind you.</p>
    
    <p>Before you stands the Cantopani Gate. Guarded constantly by Sight 
    master Warriors, chosen for their powers of telescopic vision, the 
    Gate is the final doorway between Analand and Kakhabad. Once 
    more you check your pack.</p>
    
    <p>Satisfied that your preparations are complete, you nod to the Sight 
    master Sergeant. For the last time he glances at the look-out atop the 
    gate, who signals the all-clear. The Sergeant orders the bolt to be 
    withdrawn. A doorway opens up in front of you and you get your first 
    view of the Shamutanti foothills, the first stage of your journey.</p>
    
    <p>The Sight master Sergeant strides over and grasps your hand. I will 
    not wish you a safe journey, for the way ahead will not be safe. 
    Kakhabad is a treacherous land inhabited by devils. But this you 
    already know.</p> 
    
    <p>Take the path ahead to Cantopani, a small settlement of traders - 
    although most are rogues and thieves which you should reach 
    within the hour. From Cantopani onwards there are three routes 
    through Birritanti to Khare, a city port on the Jabaji river. From Khare 
    you must cross the Baklands, which are unknown, it is said that day 
    and night in the Baklands are controlled not by the sun but by 
    supernatural forces; and bear in mind also that, from Khare onwards, 
    your progress will be watched.</p>
    
    <p>His warnings do little to inspire confidence in you. He continues: But 
    I have observed your training and you are indeed a worthy champion. 
    I wish you Luck and success with your quest. My thoughts, and the 
    good wishes of all the peoples of Analand, will be with you. With 
    Libra on your side may you live lo lift the curse and depression which 
    rack our kingdom.</p>
    
    <p>You shake his hand, thank him for his good wishes and step up to the 
    Gate. Resolutely, you pass through the doorway. The faces of the folk 
    watching your departure reveal the hopes that rest with you and with 
    the success of your quest.</p> 
    
    <p>With a wave, you turn and face the hills. The early morning air is crisp 
    and the rising sun paints the hills in colours of natural beauty which 
    conceal the devilry ahead.</p>
    
    <p><strong>Note: From here on out it will cost you 2 Stamina to view your spellbook!</strong></p>

    <p>Setting off determinedly, you follow the path. Your quest has begun!</p>`,
    choices: [{ goToPage: 178, text: "Start the adventure!" }],
  },
  1: {
    text: `Doing this so it doesnt break`,
    choices: [{ goToPage: 178, text: "Continue" }],
  },
  2: {
    text: `As you draw your weapon, you hear a hissing noise and the body of a 
    huge, two-tailed SERPENT materializes before your eyes. One of its 
    tails is wrapped around your arm and now, with a flick, the creature 
    sends you flying into the undergrowth. You lose 1 Stamina point. You 
    pick yourself up and face the creature. Resolve your combat;`,
    choices: [
      { goToPage: 105, text: "Continue" },
      { goToPage: 275, text: "Cast a spell" },
    ],
    enemies: [{ name: "Serpent", skill: "7", stamina: "8" }],
    staminaLoss: 1,
  },
  3: {
    text: `Following the passage down for some distance, you reach a T-junction where you may turn left or right.`,
    choices: [
      { goToPage: 63, text: "Turn left" },
      { goToPage: 26, text: "Turn right" },
    ],
  },
  4: {
    text: `The cage door is firmly locked. If you have a key with you, you may 
    try using it on the door, or you may try a spell.
    
    Alternatively, you may try breaking the lock.`,
    choices: [
      { goToPage: 443, text: "Magic: GOP" },
      { goToPage: 409, text: "Magic: OOP" },
      { goToPage: 320, text: "Magic: BAM" },
      { goToPage: 429, text: "Magic: PEP" },
      { goToPage: 360, text: "Magic: RAZ" },
      { goToPage: 142, text: "Try breaking the lock", blocked: false },
      { goToPage: 101, text: "Try the Goblin Key", requires: "goblinKey" },
    ],
  },
  5: {
    text: `You ask what sort of teeth the bag contains, but he will only tell you 
    "creature teeth" and he certainly will not trust you to look through the 
    bag. <b>He will charge you 3 Gold Pieces</b> for the bag of teeth. Buy if you 
    will.`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the teeth and return to the merchant",
        cost: 3,
        items: [
          {
            name: "apeTeeth",
            amount: 3,
          },
          {
            name: "deathhoundTeeth",
            amount: 3,
          },
          {
            name: "snattacatTeeth",
            amount: 2,
          },
          {
            name: "giantsTeeth",
            amount: 1,
          },
          {
            name: "goblinTeeth",
            amount: 4,
          },
        ],
      },
      { goToPage: 280, text: "Do not buy the teeth, return to the merchant" },
    ],
  },
  6: {
    text: `As you tread carefully along the passage, dust falls from the low 
    ceiling. Precarious wooden beams hold the walls back and you 
    stumble and curse as your foot strikes one of the beams. Suddenly a 
    pile of rubble falls from the ceiling in front of you and a cracking of 
    wood stops you cold. The roof is collapsing! Will you turn and run 
    back to the door or run on ahead to avoid the 
    falling rocks?`,
    choices: [
      { goToPage: 66, text: "Run back to the door" },
      { goToPage: 128, text: "Run on ahead" },
    ],
  },
  7: {
    text: `Running ahead quickly, you are eventually out of range of the 
    annoying little creatures. You follow the path for the rest of the 
    afternoon until you reach a point where you can see that it is running 
    into a hill village.`,
    choices: [{ goToPage: 28, text: "Continue.." }],
  },
  8: {
    text: `You settle down and relax on the bed. Outside the inn there is a 
    commotion and you spring up as several Svinns burst into your room 
    and surround you. Before you can react, two grasp your hands and 
    you are marched from the inn to a hut at the edge of the village.`,
    choices: [{ goToPage: 71, text: "Continue.." }],
  },
  9: {
    text: `You may continue your journey either by following the path into the 
    valley or by taking the high path up into the hills.`,
    choices: [
      { goToPage: 157, text: "Take the high way into the hills" },
      { goToPage: 164, text: "The low way along the valley" },
    ],
  },
  10: {
    text: `Eventually the path peters out and ahead of you is a wood. A 
    signpost, reading To Alianna, points into the wood. Will you set 
    off into the woods or return to the junction and continue heading northwards as you were before?`,
    choices: [
      { goToPage: 150, text: "Set off into the woods" },
      { goToPage: 46, text: "Return to the junction and continue northwards" },
    ],
  },
  11: {
    text: `You pull out your Bamboo Flute and begin to play. Somehow the 
    unseen musicians adapt their tune to accommodate you and play 
    away merrily for half an hour or so. You <b>gain 3 Stamina points 
    and 1 Luck point</b> for your restful encounter. Then you pick yourself 
    up, leave the hut and make your way out of the village.`,
    choices: [{ goToPage: 196, text: "Continue.." }],
    staminaGain: 3,
    luckGain: 1,
  },
  12: {
    text: `As they see you, they all point and gabble excitedly to one another. 
    One of them rises into the air and flies across, hovering over you to 
    take a closer look. Will you attempt to speak with him or 
    will you hold your ground and prepare to take defensive action?`,
    choices: [
      { goToPage: 113, text: "Try to speak to them" },
      { goToPage: 203, text: "Prepare to fight" },
    ],
  },
  13: {
    text: `You follow a path leading sharply downhill into a narrow valley. You 
    cross a stream on a wooden bridge and start to climb the next hill. 
    Half-way up, you hear twigs break in the undergrowth and suddenly 
    a large creature - about the size of a bear - stands before you. It has 
    black and white fur, and a long bushy tail which trails out behind it. 
    This animal bars your way and is snarling menacingly at you. Will you 
    prepare to attack it or try to edge round it peacefully?`,
    choices: [
      { goToPage: 252, text: "Prepare to attack" },
      { goToPage: 236, text: "Try to avoid it" },
    ],
  },
  14: {
    text: `Outside the village you climb up into the woods. You find a suitable 
    sheltered spot not far from another path. Will you camp for the night 
    or continue through the night?`,
    choices: [
      { goToPage: 108, text: "Camp for the night" },
      { goToPage: 49, text: "Continue through the night" },
    ],
  },
  15: {
    text: `As the dying Ogre is heaving its last breath, you investigate the room. 
    You try grinding some of the black rock as the creature was doing but 
    you cannot turn the handle. However, two valuable gems have 
    already been processed and are lying on the table. You may take these 
    with you. Each is worth 10 Gold Pieces but if you wish to buy 
    anything with them, you will not be given change. In other words, it 
    will cost you a whole gem to buy an item costing, for instance, only 2 
    Gold Pieces. You may now leave the room and the cave, and return to 
    the junction.`,
    choices: [{ goToPage: 144, text: "Continue.." }],
    getItems: [
      {
        name: "gems",
        amount: 2,
      },
    ],
  },
  16: {
    text: `The passage slopes downhill and you soon reach a fork where you 
    may go either right or left.`,
    choices: [
      { goToPage: 174, text: "Go right" },
      { goToPage: 151, text: "Go left" },
    ],
  },
  17: {
    text: `"In this wood I have collected all sorts of magical artefacts," she says. 
    "Release me from this cage and I will give you three useful items." Will 
    you try to free her or search for the items anyway?`,
    choices: [
      { goToPage: 4, text: "Try to free her" },
      { goToPage: 213, text: "Search for the items" },
    ],
  },
  18: {
    text: `You sit down and eat and admire the fine view of the surrounding 
    hillside. If this is your first meal today, you gain 2 Stamina points. If you 
    have already eaten since leaving Analand, gain only 1 Stamina point.`,
    choices: [{ goToPage: 168, text: "Continue.." }],
    getItems: [{ name: "provisions", amount: -1 }],
  },
  19: {
    text: `The path winds up and over the hill and you stop and marvel at a 
    grassy verge in which are growing some of the most beautiful and 
    delicate flowers you have ever seen.`,
    choices: [{ goToPage: 40, text: "Continue.." }],
  },
  20: {
    text: `<p>The creature is a SKUNKBEAR and, when you draw your weapon, it 
    raises its tail, releasing a nauseating odour. The smell is horrendous, 
    but you must fight:</p> 
    
    <p><b>SKUNKBEAR Skill 7 Stamina 5</b></p>
    
    <p>The effect of the smell is so powerful that you lose 2 points 
    from your Attack Strength.</p>`,
    choices: [
      {
        goToPage: 193,
        text: "Fight the Skunkbear",
        fight: { skill: 7, stamina: 5, name: "Skunkbear" },
      },
    ],
  },
  21: {
    text: `You find a quiet place to rest outside the village. Away from the bustle 
    of the festival of youth you are able to get a good night's sleep. The 
    Minimite curls up near you. You may eat provisions before you go to 
    sleep and add 2 Stamina points (1 point if you have already eaten). 
    <b>Gain 3 Stamina points for the rest.</b>`,
    choices: [{ goToPage: 67, text: "Continue.." }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
    staminaGain: 3,
  },
  22: {
    text: `Roll 1 die. This is the price, in Gold Pieces, that the merchant is asking 
    for the Flute. If you will pay this price, purchase the instrument.`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the Flute, and return to the trader",
        cost: "must roll",
        items: [
          {
            name: "pipe",
            amount: 1,
          },
        ],
      },
      { goToPage: 280, text: "Do not buy the Flute, return to the trader" },
    ],
    extraText: true,
  },
  23: {
    text: `A TROLL guard uses this hut as his sentry post. He patrols the area 
    for ten minutes and then sits in his hut for twenty, throughout the 
    day. With a little luck, you will pass by him during one of his 
    twenty-minute rests.`,
    choices: [
      { goToPage: 245, text: "Rolled a 1 or 2", blocked: true },
      { goToPage: 69, text: "Rolled a 3 or 4", blocked: true },
      { goToPage: 99, text: "Rolled a 5 or 6", blocked: true },
      { goToPage: 245, text: "Succesfully tested your luck", blocked: true },
    ],
  },
  24: {
    text: `The crashing shaft behind you makes you run faster along the black 
    passage. Suddenly you gasp as your foot fails to touch the ground 
    below and you fall downwards into a pit! You may cast a spell if you wish:`,
    choices: [
      { goToPage: 290, text: "Magic: SUD" },
      { goToPage: 399, text: "Magic: FAL" },
      { goToPage: 439, text: "Magic: RIS" },
      { goToPage: 330, text: "Magic: ZEN" },
      { goToPage: 424, text: "Magic: SUS" },
      { goToPage: 277, text: "Don't use a spell" },
    ],
  },
  25: {
    text: `You plead with your goddess - but nothing happens! You try again, 
    but she appears not to be listening. A short time later, your captors 
    bundle you out of your cage and towards the large pot, warming over 
    the fire. Three of them pick you up and heave you into the water, 
    which is now uncomfortably warm. Then it happens...
    
    Dark clouds rumble in low over the camp. When they are directly 
    overhead they release a torrential downpour which douses the fire 
    and cools your bath. Your bindings slide loose and you are able to 
    scramble from the pot. Libra has not ignored you! The Head Hunters, 
    sensing something supernatural, have scattered into the woods and 
    you are now free to escape. But you may not call on Libra again in this 
    part of your adventure to help you. Not until you reach the city of 
    Khare will she listen to you. 
    
    You collect your belongings and run off into the woods.`,
    choices: [{ goToPage: 254, text: "Continue.." }],
  },
  26: {
    text: `You turn down the passage and follow it cautiously for several 
    minutes. You stop to listen and, in the distance, you can hear a low 
    rumbling. You wait to see what happens. The rumbling gets louder 
    and your hair stands on end as you see a large, rounded boulder 
    rolling swiftly down the passage towards you! This rock is almost a 
    perfect fit in the tunnel and its speed is increasing as you dither. Will 
    you use your magic to help you?

    Or will you try some other means of escape? 
    You may call on Libra's help if you have not yet summoned her.`,
    choices: [
      { goToPage: 367, text: "Magic: GUM" },
      { goToPage: 446, text: "Magic: BAM" },
      { goToPage: 323, text: "Magic: WAL" },
      { goToPage: 343, text: "Magic: FIX" },
      { goToPage: 391, text: "Magic: SIT" },
      { goToPage: 83, text: "Try another method" },
      { goToPage: 53, text: "Call Libra!", needLibra: true },
    ],
  },
  27: {
    text: `By the bridge is a small wooden hut. As you approach, an ugly 
    hunch-backed creature emerges and stands between you and the 
    bridge, barring your way. In a gruff voice he speaks to you: 
    
    "Halt stranger. If you wish to pass 
    Two answers must you give Vancass."
    
    The guardian of the bridge has dark, glaring eyes but looks no match 
    for you physically, although you suspect he may have magical 
    powers. Do you wish to try answering his questions or 
    will you instead retrace your steps and take the other path down into 
    the valley?`,
    choices: [
      { goToPage: 41, text: "Answer his questions" },
      { goToPage: 38, text: "Return down the valley" },
    ],
  },
  28: {
    text: `You walk into the village. Young Hill Dwellers pass you and stare at 
    your strange clothes. Their own attire is rough by comparison and 
    everyone wears their hair long, but piled up on their heads. You pass 
    without incident into the centre of the village. Will you look for an inn 
    for the night or find an ale-house and relax?`,
    choices: [
      { goToPage: 211, text: "Look for an inn" },
      { goToPage: 266, text: "Look for an ale-house" },
    ],
  },
  29: {
    text: `If you offer him an artefact which you have found on your travels, he 
    will accept it, offer you a mug of ale and chat to you, If 
    you cannot offer him an artefact, you must leave immediately and 
    head either for the inn or out of the village.`,
    choices: [
      { goToPage: 191, text: "Give him an artefact and chat" }, // to do lose an artefact
      { goToPage: 92, text: "Head for the inn" },
      { goToPage: 21, text: "Leave the village" },
    ],
    extraText: true,
  },
  30: {
    text: `You rise early to leave Dhumpus.`,
    choices: [{ goToPage: 144, text: "Continue.." }],
  },
  31: {
    text: `Did you eat at all on the first day of your journey since you left 
    Analand? If not, you are feeling very hungry and must lose 3 
    Stamina points.`,
    choices: [{ goToPage: 246, text: "Continue.." }],
    newDay: true,
  },
  32: {
    text: `You press on through the grass and, after half an hour or so, you 
    reach the river-bank, well upstream of the village you were avoiding. 
    You notice that your backpack feels lighter than normal and you take 
    it off to examine it. Looking inside, you find that you have lost two 
    items of equipment! You must cross off your Adventure Sheet any two 
    artefacts that you have collected on your journey (but gold and/or 
    Provisions only if you have nothing else to lose). 
    
    As you search for the missing items, the tops of the grasses bend 
    towards you and wrap themselves around your bag, belt and boots. 
    You realize you have been walking through PILFER GRASS which 
    is able to pickpocket items from passing travellers. These two items 
    are now lost for ever.`,
    choices: [{ goToPage: 231, text: "Continue.." }],
    extraText: true,
  },
  33: {
    text: `You explain that you are travelling to Khare and ask him for advice on 
    the way ahead. "I myself have never left this village" says the man, 
    "but you have two paths ahead. My advice, though, is not free. <b>For 2 
    Gold Pieces I will tell you what I know.</b>" You may accept his offer, or refuse and press 
    onwards.`,
    choices: [
      {
        goToPage: 225,
        text: "Accept his offer",
        cost: 2,
      },
      { goToPage: 81, text: "Refuse to pay and carry onwards" },
    ],
  },
  34: {
    text: `You pass along the main path through the village and stop outside a 
    hut where several Hill Dwellers are sitting and eating. They are deep 
    in discussion about something. Will you introduce yourself or ignore them and continue?`,
    choices: [
      { goToPage: 86, text: "Introduce yourself" },
      { goToPage: 106, text: "Ignore them" },
    ],
  },
  35: {
    text: `You stop at the edge of the village and prepare to bed down for the 
    night. You may eat provisions if you have any. If you do so you may 
    add 2 Stamina points if this is your first meal of the day (1 point if you 
    have already eaten). You soon drift off but are awakened rudely by 
    three Svinns who hold you to the ground, pinning your arms. They 
    carry you to a small hut at the edge of the village.`,
    choices: [{ goToPage: 71, text: "Continue.." }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  36: {
    text: `Did you eat at all yesterday? If not, you must lose 3 Stamina points as 
    you are now very hungry.`,
    choices: [{ goToPage: 147, text: "Continue.." }],
    newDay: true,
  },
  37: {
    text: `"I'm sure you would, I'm sure you would!" chuckles the little creature. 
    "But I will come anyway." You try to swat it away but it is much too 
    quick for you. Faced with no alternative, you continue down the hill 
    with Jann, who has hitched a ride on your shoulder.`,
    choices: [{ goToPage: 111, text: "Continue.." }],
    getJann: true,
  },
  38: {
    text: `The path drops sharply downhill into the valley and then up the other 
    side. The going is very tiring and you must lose 2 Stamina points. 
    Half-way up the hill is a clearing in which a small wooden hut stands. 
    Throw one die and then Test your Luck if you wish.`,
    choices: [{ goToPage: 23, text: "Continue.." }],
    staminaLoss: 2,
    pause: true,
  },
  39: {
    text: `The room is quite large and is evidently a storeroom of some kind. In 
    one corner is a pile of black rocks, and more rocks are held in a bucket 
    near by, these ones glistening dully in the flickering candlelight. In 
    the centre of the room is a strange-shaped mechanical apparatus - 
    perhaps a press or stone-cutter of some kind - and this is being 
    operated by a large, powerful OGRE, He is dropping stones in at one 
    end and turning a metal handle, which crunches the rock. As you 
    enter, the Ogre stops and turns towards you, growling fiercely. Will 
    you run from the room and out of the cave or will you face 
    the creature?`,
    choices: [
      { goToPage: 144, text: "Run!" },
      { goToPage: 285, text: "Fight the Ogre" },
    ],
  },
  40: {
    text: `You follow the path carefully downwards, trying to avoid breaking 
    branches as you go. Do you want to stop and eat or press on?`,
    choices: [
      { goToPage: 180, text: "Stop and eat" },
      { goToPage: 133, text: "Press on" },
    ],
  },
  41: {
    text: `The hunchback chuckles and asks his first question: 

    "A witch held in captivity lives in the woods. 
    First tell to me if you know of this cunning dame.
    How is she known, what is her name?" `,
    choices: [
      { goToPage: 238, text: "Allina" },
      { goToPage: 253, text: "Allanna" },
      { goToPage: 143, text: "Alianna" },
      { goToPage: 59, text: "I don't know" },
    ],
  },
  42: {
    text: `You walk up to the fire in the centre of the village and call out loudly. 
    There is no response. As you wait for some sign of life you begin to 
    feel dizzy. Too late, you realize that the fumes from the fire are 
    overpowering you! You fight to keep consciousness, but without 
    success, and you slump to the ground.`,
    choices: [{ goToPage: 279, text: "Continue.." }],
  },
  43: {
    text: `The broadsword is a fine weapon and you are amazed at your 
    bargain. You may use the sword to fight and may add 1 point to 
    Attack Strength when in use.`,
    choices: [{ goToPage: 126, text: "Continue.." }], // todo probably dont need this
  },
  44: {
    text: `The key opens the lock and you open the cage door to release her. She 
    springs from the cage, 'Stranger, I am indebted to you' she thanks 
    you. 'And Alianna will reward you!'. Do you want a magical item or an aid in combat?`,
    choices: [
      { goToPage: 248, text: "Magical item" },
      { goToPage: 122, text: "Combat aid" },
    ],
  },
  45: {
    text: `Did you eat at all yesterday? If you ate at the inn or took Provisions, 
    you suffer no penalty, but if you have not eaten during the day you 
    are now hungry and must lose 3 Stamina points. 
    
    There are two ways on from the village of Kristatanti. Choose your 
    path by turning either left or right.`,
    choices: [
      { goToPage: 125, text: "Go left" },
      { goToPage: 226, text: "Go right" },
    ],
    newDay: true,
  },
  46: {
    text: `You continue along the path for most of the afternoon until you reach 
    a gate which is ajar.`,
    choices: [{ goToPage: 234, text: "Continue.." }],
  },
  47: {
    text: `<p>The Goblin senses your defiance and rises, with a large stone club in 
    his hand. You may fight him or cast a spell:</p> 
    
    <p><b>GOBLIN SKILL 7 STAMINA 6</b></p>`,
    choices: [
      { goToPage: 328, text: "Magic: RAZ" },
      { goToPage: 397, text: "Magic: BAM" },
      { goToPage: 309, text: "Magic: TEL" },
      { goToPage: 438, text: "Magic: ZAP" },
      { goToPage: 289, text: "Magic: YAC" },
      {
        goToPage: 186,
        text: "Fight the Goblin",
        fight: { skill: 7, stamina: 6, name: "Goblin" },
      },
    ],
  },
  48: {
    text: `You chat to her and drink your - or rather her - tea. Suddenly a pain 
    grips your stomach. You wince and cough and are horrified to find 
    you are starting to seize up! Desperately you try to keep moving, but 
    the paralysis drug takes effect, 'Ho, suspicious stranger!' she laughs, 
    I can count on travellers suspecting my witchcraft!' You are powerless 
    to watch as she goes through your bag looking for magical artefacts. Do 
    you have a page from a Spell Book? Otherwise she will take 
    any two random objects in your bag which you know are useful in magic spells.
    Then she magically transports you and your miniature companion 
    (together with the rest of your possessions) out into the woods 
    where the drug eventually wears off.`,
    choices: [
      {
        goToPage: 77,
        text: "I have a spellbook page",
        requires: "spellbookPage",
      },
      {
        goToPage: 232,
        text: "I don't have a spellbook page. Continue..",
        blockItem: "spellbookPage",
      },
    ],
    extraText: true,
  },
  49: {
    text: `You may rest and eat Provisions (if you have any) before 
    your all-night trek. If you take a meal, you may add 2 Stamina points 
    if you have not already eaten today but only 1 Stamina point if you 
    have eaten anything. Then you set off. You soon leave the woods 
    following an uphill path and you pause again at daybreak to get your 
    bearings. You must lose 2 Stamina points for travelling all night 
    without sleep.`,
    choices: [{ goToPage: 36, text: "Continue.." }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
    staminaLoss: 2,
  },
  50: {
    text: `Around the creature's neck is a collar which interests you. It is 
    studded with green gems and looks quite valuable. You take it with 
    you and then you had better leave the village.`,
    choices: [
      {
        goToPage: 196,
        text: "Continue..",
      },
    ],
    getItems: [{ name: "collar", amount: 1 }],
  },
  51: {
    text: `You travel downhill along the valley for an hour, but then the path 
    turns uphill again. The hill you are now climbing is not too steep and 
    as noon approaches you are again on a descending path. You may 
    stop and eat Provisions if you wish and may add 2 Stamina points if 
    you do. Further along the path in the afternoon, Jann- who has been 
    chattering incessantly to you - warns you to stop. You are being 
    watched. As you are now in a wood, you proceed cautiously. Suddenly the 
    bushes part and a figure steps forward. Dressed in black, 
    this tall man bars your way. Will you prepare to do battle 
    or try to talk with him?`,
    choices: [
      { goToPage: 117, text: "Prepare for battle" },
      { goToPage: 103, text: "Talk with him" },
    ],
    eatOption: { haveEaten: 2, haveNotEaten: 2 },
  },
  52: {
    text: `The little creature chatters loudly across the river to its friends. They 
    are obviously not keen that you are refusing their welcome and you 
    decide you had better prepare yourself for defensive action.`,
    choices: [{ goToPage: 203, text: "Prepare for battle" }],
  },
  53: {
    text: `You wait with bated breath. But your prayers are answered as the 
    boulder slows down. It squeals and screeches as invisible brakes take 
    a hold and eventually stop the deadly ball. After a moment, it begins 
    to roll again - but in the opposite direction - and eventually it rolls out 
    of view back up the passage. You decide to return to the main 
    chamber, where you may take either the left-hand or the 
    right-hand passage. You may not call upon 
    Libra again during this adventure.`,
    choices: [
      { goToPage: 16, text: "Take the left-hand paage" },
      { goToPage: 3, text: "Take the left-right paage" },
    ],
  },
  54: {
    text: `You follow the path for the rest of the afternoon until you stand on a 
    hilltop. The path runs down the hill into a small village set on a river 
    and you follow it down.`,
    choices: [{ goToPage: 176, text: "Continue.." }],
  },
  55: {
    text: `The noise outside eventually subsides as darkness spreads over the 
    village. You have a good night's sleep. <b>Add 3 Stamina points.</b>`,
    choices: [{ goToPage: 67, text: "Continue.." }],
    staminaGain: 3,
  },
  56: {
    text: `You search through the pockets of the bandits but find nothing there. 
    Setting off again along the path you continue for half an hour until the 
    way ahead becomes an uphill incline. You reach a fork which offers 
    you two ways forward.`,
    choices: [{ goToPage: 183, text: "Continue.." }],
  },
  57: {
    text: `Your brisk walk through the grass ends when your foot kicks a small 
    sack of some kind. Bending down to pick it up, you find it is <b>a pouch 
    containing 12 Gold Pieces!</b> You put this in your backpack. But as you 
    do so, you find you have lost one item that you were carrying. Choose 
    which item you have lost - it may only be gold or Provisions if you had 
    nothing else to lose. As you 
    search your pack for this missing object, you notice that the grass is 
    bending towards you and trying to wrap itself round parts of your 
    equipment! You are standing in a meadow of PILFER GRASS and, 
    unless you are careful, it will attempt to steal any items it may pick 
    from your pack. Since you are now aware of this, you may guard your 
    belongings and continue.`,
    choices: [{ goToPage: 159, text: "Continue.." }],
    getItems: [{ name: "gold", amount: 12 }],
    extraText: true,
  },
  58: {
    text: `You follow the path for half the morning and reach a fork where you 
    may either continue straight on or turn westwards.`,
    choices: [
      { goToPage: 46, text: "Continue straight on" },
      { goToPage: 10, text: "Turn westward" },
    ],
  },
  59: {
    text: `The hunchback waves his hand in the air and you feel a sharp pain 
    surge through your body. <b>Lose 2 Stamina points and 1 Luck point</b>
    and return to the junction to take the other path.`,
    choices: [{ goToPage: 38, text: "Continue.." }], // todo lose Stamina and luck
    staminaLoss: 2,
    luckLoss: 1,
  },
  60: {
    text: `The jewel is large and looks very valuable; it is set in a tarnished 
    mount. <b>His price is 10 Gold Pieces.</b> Buy the jewel if you wish.`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the jewel and return to the merchant",
        cost: 10,
        items: [{ name: "iceJewel", amount: 1 }],
      },
      { goToPage: 280, text: "Do not buy the jewel, return to the merchant" },
    ],
  },
  61: {
    text: `You knock at the door of one of the huts. There is no reply. You may 
    enter anyway or try another hut.`,
    choices: [
      { goToPage: 158, text: "Enter the hut" },
      { goToPage: 271, text: "Try another one" },
    ],
  },
  62: {
    text: `You creep off to the edge of the village and settle down under a tree. 
    You may eat Provisions if you wish which will add 2 Stamina points 
    if this is your first meal of the day or 1 Stamina point if you have 
    eaten before. You try to sleep under the tree but you are woken 
    continually by strange noises. <b>Add 1 Stamina point</b> for getting some 
    rest and leave at daybreak.`,
    choices: [{ goToPage: 45, text: "Continue.." }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
    staminaGain: 1,
  },
  63: {
    text: `You walk down the passage for several minutes. You slip on the dirt 
    and below your feet the ground gives way! You plunge into a hidden 
    pit and land on something soft. Your hand reaches out and touches 
    something which slithers between your fingers, A snake pit! You are 
    sitting on a mound of the deadly reptiles! Will you use your magic to 
    help you, or will you look for another means of escape? If you have 
    not yet used your call to Libra, you had better do so now.`,
    choices: [
      { goToPage: 366, text: "Magic: ZEN" },
      { goToPage: 417, text: "Magic: RIS" },
      { goToPage: 303, text: "Magic: POP" },
      { goToPage: 433, text: "Magic: LAW" },
      { goToPage: 344, text: "Magic: FIL" },
      { goToPage: 165, text: "Look for another escape route" },
      { goToPage: 273, text: "Call on Libra", needLibra: true },
    ],
  },
  64: {
    text: `No one in the history of the Shamutanti Hills has found a way of 
    escaping the Demon's Deluge and you are not likely to be the first. 
    You are still trying desperately to think of a way out as the air leaves 
    the cave and your lungs fill with water. You are dead . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
  },
  65: {
    text: `You continue along the path for several hours, taking you deeper into 
    the valley. Presently, the sun begins to set, the air becomes cooler, 
    and you start to consider whether to find a suitable site to camp for the 
    night or whether to continue onwards without sleep.`,
    choices: [
      { goToPage: 76, text: "Find a place to camp" },
      { goToPage: 224, text: "Continue through the night" },
    ],
  },
  66: {
    text: `The door is locked (perhaps as some sort of safety device to seal off the 
      upper parts of the mine from pit disasters - after all, the lives of 
      worker Goblins are expendable), and you will not break through the 
      solid rock. You may either try breaking the door down or 
      casting a spell?`,
    choices: [
      { goToPage: 329, text: "Magic: HUF" },
      { goToPage: 423, text: "Magic: HOW" },
      { goToPage: 310, text: "Magic: GOP" },
      { goToPage: 373, text: "Magic: DOP" },
      { goToPage: 350, text: "Magic: DOM" },
      { goToPage: 228, text: "Try breaking the door down" },
    ],
  },
  67: {
    text: `You rise early and leave soon after dawn with Jann still hovering 
    around your head as you set off. Did you eat at all yesterday? If not, 
    you lose 3 Stamina points. 
    
    There are two paths ahead: one uphill to the east, and 
    one downhill to the west. Which will you choose?`,
    choices: [
      { goToPage: 135, text: "Uphill to the east" },
      { goToPage: 51, text: "Downhill to the west" },
    ],
    newDay: true,
  },
  68: {
    text: `You press on, climbing up the hillside for several hours until you are 
    not far from the top. Then you hear a faint sound of bustling activity. 
    Tramping feet, grunting voices and the clanking of metal against rock 
    make you stop and listen. You decide to leave the path and continue 
    cautiously through the woods. A short distance onwards you hide 
    behind a tree and survey a clearing ahead. A number of GOBLINS 
    are in the clearing, in front of an open cave. It appears that they are 
    mining the cave as they trudge in and out of the opening, carrying 
    large bowls full of glistening rocks and dull metallic nuggets. From 
    your position you may easily slip into the cave to see whether you can 
    find anything of value, or you may ignore the mine and 
    slip around the side to a path leading onwards and down the far side 
    of the hill.`,
    choices: [
      { goToPage: 175, text: "Slip into the cave" },
      { goToPage: 13, text: "Go down the hill" },
    ],
  },
  69: {
    text: `You creep by the sentry post unnoticed.`,
    choices: [{ goToPage: 237, text: "Continue.." }],
  },
  70: {
    text: `Too late, you try to leap clear of the pitfall trap which has opened 
    beneath you. You drop some three metres into the pit and collapse 
    unconscious in a heap.`,
    choices: [{ goToPage: 139, text: "Continue.." }],
  },
  71: {
    text: `You are thrown into the hut and the door is locked. You are their 
    prisoner. You spend half an hour looking for a possible escape but 
    there does not appear to be one. If you wish you may sit down and eat 
    Provisions (add 2 Stamina points if this is your first meal today; 1 if 
    you have already eaten), then you may either settle down to sleep for 
    the rest of the night or keep awake and on your guard in 
    case anything should happen.`,
    choices: [
      { goToPage: 109, text: "Sleep for the night" },
      { goToPage: 140, text: "Stay awake and keep guard" },
    ], // todo add eating choice
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  72: {
    text: `Examining the carvings on the axe, you can make out a message 
    which reads: This axe was crafted in the Year of the Ox for Glandragor the Protector. 
    Its powers may be realized only by its owner." It also 
    has the number 233 carved on it. If you keep it as a reserve weapon you 
    must subtract 1 point from your Attack Strength roll when using it.`,
    choices: [{ goToPage: 126, text: "Continue.." }],
  },
  73: {
    text: `The smell gets sweeter as you pass on through the fields of Black 
    Lotus flowers. You feel light-headed as you continue and you start to 
    skip and jump with merriment. Jann, still on your shoulder, is 
    likewise full of glee. Your head swims. Before you can stop yourself, 
    you are feeling dizzy and falling to the ground. You fall into the 
    flowers on to something hard. A surge of horror passes through you 
    as you realize it is a skeleton! But the horror is short-lived as you lose 
    consciousness. The sweet aroma of the Black Lotus is a deadly poison 
    and you have breathed your last. You will rest for ever in the fields of 
    the black death . . .`,
    choices: [{ goToPage: 0, text: "Death" }],
    // todo handle death
  },
  74: {
    text: `<p>You approach the hut and call through the doorway. No reply. You 
    pull back the drapes and step inside. The hut is obviously an abode of 
    some kind, with pots, pans and clothes strewn about. In front of an 
    open fireplace is a skin rug on the ground and you have not noticed 
    that, as you look around, an eye opens on the skin's head.</p> 
    
    <p>Your back is towards the rug and you cannot see it rising up and 
    taking on its natural shape - that of a WOLFHOUND - until it snarls 
    menacingly and attacks. You will have to fight it or cast a spell:</p> 
    
    <p><b>WOLFHOUND Skill 7 Stamina 6</b></p>`,
    choices: [
      { goToPage: 315, text: "Magic: KIL" },
      { goToPage: 402, text: "Magic: YAP" },
      { goToPage: 425, text: "Magic: GOB" },
      { goToPage: 335, text: "Magic: ZAP" },
      { goToPage: 440, text: "Magic: BAG" },
      {
        goToPage: 50,
        text: "Fight the Wolfhound",
        fight: { skill: 7, stamina: 6, name: "Wolfhound" },
      },
    ],
  },
  75: {
    text: `You leave in search of the local inn.`,
    choices: [{ goToPage: 134, text: "Continue.." }],
  },
  76: {
    text: `You find a suitable shelter in the rocks on the bank of the stream and 
    bed down for the night. If you have not eaten since you left the 
    Outpost Settlement, you may take some Provisions if you have any 
    and add 2 Stamina points. If you have already eaten, you will gain 
    only 1 Stamina point from the food. 
    
    Eventually you drift off to sleep, soothed by the babbling of the 
    stream. A short while later you are awakened by a splashing noise. 
    Looking out from your shelter you see a strange sight. Three small, 
    thin, man-like creatures, glowing with a dull red luminescence, are 
    throwing stones into the stream. Every so often they chirp with glee 
    as a good shot sends a fish flying into the air. As if pulled by a magical 
    force, each fish floats across the water and lands at their feet. Will you 
    sit tight and hope they don't see you or stand up and hail 
    them? `,
    choices: [
      { goToPage: 281, text: "Sit tight" },
      { goToPage: 12, text: "Hail them" },
    ], // todo add eating
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  77: {
    text: `She comes across the Spell Book page and drops your backpack. 'My 
    book!' she cries. The missing page! Why did you not tell me you had 
    my missing spell?' She scurries off into the kitchen and returns with a 
    cup of liquid which she pours into your mouth. This antidote gradually takes effect, 
    unfreezing your body. She slaps you gently to bring you round.`,
    choices: [{ goToPage: 114, text: "Continue.." }],
    getItems: [{ name: "spellbookPage", amount: -1 }],
  },
  78: {
    text: `'I can give you all sorts of aids for your journey' she says. 'Are you 
    aligned to the magical or physical arts?' Will you ask her for help with 
    your spells or your abilities at swordplay? `,
    choices: [
      { goToPage: 17, text: "Help with spells" },
      { goToPage: 240, text: "Help with swordplay" },
    ],
  },
  79: {
    text: `The man shuffles nervously over and shakes your hand. 'Are you 
    magical, stranger?' he asks. 'Are you not afraid of us? Or perhaps you 
    are a healer who can cure us of this plague' At his last word, you 
    spring back, but it is too late. You have made contact with a <b>plague 
    carrier</b> and from now onwards you will <b>lose 3 Stamina points each 
    day</b> until you either die or you find someone who can cure you of 
    the plague. Points are deducted first thing in the morning. You are 
    horrified at your discovery, back out of the hut and leave the village 
    quickly.`,
    choices: [{ goToPage: 220, text: "Continue.." }],
    plague: true,
  },
  80: {
    text: `You enter the village cautiously, creeping round the huts, but the 
    place appears to be deserted. A fire burns in the centre of the camp in 
    a pit and a pile of logs stands near by. Will you look around the huts 
    or call out to see whether you can attract someone's 
    attention?`,
    choices: [
      { goToPage: 189, text: "Look around the huts" },
      { goToPage: 42, text: "Try to attract someones attention" },
    ],
  },
  81: {
    text: `You pass along the main path through the centre of the village. There 
    is a small inn offering food for sale at which you may stop at
    or you may press on through the village.`,
    choices: [
      { goToPage: 257, text: "Stop at the inn" },
      { goToPage: 131, text: "Pass through the village" },
    ],
  },
  82: {
    text: `You creep past the caves, Test your Luck.`,
    choices: [
      { goToPage: 250, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 181, text: "Test your Luck - Fail", luck: "failed" },
    ],
    testLuck: { optional: false },
    pause: true,
  },
  83: {
    text: `Unfortunately for you, there is no other way of escape. As you try to 
    think of a plan the boulder is on you, flattening you on the floor. Yet 
    again a Svinn champion has failed to rescue the chief's daughter . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    dead: true,
  },
  84: {
    text: `You lose 2 Stamina points for going without sleep. As you 
    make your way onwards, there is a chance that your noises will attract 
    night creatures.`,
    choices: [{ goToPage: 123, text: "Check if any creatures attack you" }],
    staminaLoss: 2,
  },
  85: {
    text: `You take 3 Stamina points worth of damage as you cover your 
    head and make your way through this downpour of acorns.`,
    choices: [{ goToPage: 7, text: "Continue.." }],
    staminaLoss: 3,
  },
  86: {
    text: `They stop and look at you. They invite you over but become agitated 
    at the sight of your weapon. You may leave your weapon and join 
    them or thank them for their offer of hospitality and press 
    on.`,
    choices: [
      { goToPage: 185, text: "Leave weapon and join them" },
      { goToPage: 106, text: "Thank them and leave" },
    ],
  },
  87: {
    text: `<p>In addition, she hands you a bag containing <b>7 Gold Pieces</b>. Then she 
    chuckles. You turn to leave the house quickly, but she stops you with 
    a hand on your shoulder. 'But Alianna does not give up her prized 
    possessions without a fight!' You turn round to see her casting a spell 
    of some sort over a chair. The chair begins to crack and creak, moving 
    violently in front of you. It forms itself into a WOOD GOLEM which 
    now advances towards you! Will you fight the creature or cast a spell?</p>
    
    <p><b>WOOD GOLEM Skill 8 Stamina 6</b></p>`,
    choices: [
      { goToPage: 339, text: "Magic: JIG" },
      { goToPage: 383, text: "Magic: DOZ" },
      { goToPage: 297, text: "Magic: HOT" },
      { goToPage: 410, text: "Magic: KIN" },
      { goToPage: 287, text: "Magic: MUG" },
      {
        goToPage: 169,
        text: "Fight the Wood Golem",
        fight: { skill: 8, stamina: 6, name: "Wood Golem" },
      },
    ],
    getItems: [{ name: "gold", amount: 7 }],
  },
  88: {
    text: `You stand at the door and call inside. There is no reply. You draw 
    back the drapes and enter the small hut. Cushions ring the room and, 
    as you enter, a strange music played on invisible pipes fills the room. 
    The tune is pleasant and relaxing and you sit down on the cushions. 
    Do you have a musical flute with you? If so, you may take it out and 
    play along.`,
    choices: [
      { goToPage: 11, text: "Play your Flute", requires: "pipe" },
      { goToPage: 179, text: "Continue.." },
    ],
  },
  89: {
    text: `You leap ahead just in time as a pitfall caves in beneath you. You look 
    back to see a gaping pit which you would have fallen into.`,
    choices: [{ goToPage: 170, text: "Continue.." }],
  },
  90: {
    text: `The lock breaks and she jumps from the cage. 'Stranger, I am 
    indebted to you' she says, 'Alianna will reward you'. Would you like 
    as your reward a magical item or an aid in combat?`,
    choices: [
      { goToPage: 248, text: "Magical item" },
      { goToPage: 122, text: "Aid in combat" },
    ],
  },
  91: {
    text: `You bid the merchant farewell and leave the hut. 
    You are anxious to look at your new items, but if you bought nothing from him continue onwards`,
    choices: [
      { goToPage: 126, text: "View artefacts" },
      { goToPage: 163, text: "Continue.." },
    ],
  },
  92: {
    text: `The inn is not cheap. A bed for the night is 5 Gold Pieces and a meal is 
    4, If you eat, pay the price and add 2 Stamina points (1 if you have 
    already eaten today). Do you want to sleep here? If not you 
    had better leave the village and find a place to bed down.`,
    choices: [
      { goToPage: 55, text: "Sleep here", cost: 5 },
      { goToPage: 21, text: "Leave the village and make camp" },
    ],
    eatOption: { haveEaten: 1, haveNotEaten: 2, cost: 4, name: "meal" },
  },
  93: {
    text: `Roll two dice. If the number rolled is less than your Skill score, you 
    succeed in breaking the door open. If not, then you may try again. 
    Whether or not you succeed, you must deduct 1 Stamina point at 
    each attempt. If you decide to 
    give up on your attempts, you may return to the junction and leave the cave.`,
    choices: [
      { goToPage: 39, text: "Break down the door - success" },
      { goToPage: 144, text: "Leave the cave" },
    ],
    extraText: true,
  },
  94: {
    text: `Surprisingly enough, although you can still feel the force on your 
    arm, it does not hamper your progress and you can make your way 
    onwards. In fact, the going seems to be easier, as if you are being led 
    by some invisible guide who is coaxing you along the best route. 
    Eventually, the going gets easier as the dense undergrowth thins and 
    you are soon walking through a prairie with grass up to your waist. 
    As you leave the heavy foliage, the grip on your arm is released. <b>Add 1 
    Luck point.</b> Still you cannot see who, or what, was responsible for the 
    guidance.`,
    choices: [{ goToPage: 105, text: "Continue.." }],
    luckGain: 1,
  },
  95: {
    text: `You press onwards, out through Cantopani along the path leading to 
    the Shamutanti Hills. However, you feel a little uneasy while passing 
    the huts on the fringes of the village. Hissings from within and sly 
    faces which disappear from the doorways as you pass make you feel 
    decidedly unwelcome and you are glad to be leaving. At the edge of 
    the town you pass a large boulder and as you do so, two rough-cut 
    villagers spring out with swords drawn. BANDITS! They demand 
    that you hand over your backpack. Will you do as they ask or fight them?`,
    choices: [
      { goToPage: 261, text: "Hand over your bagpack" },
      { goToPage: 104, text: "Fight them" },
    ],
  },
  96: {
    text: `You sit down and the young man turns towards you eagerly. 
    Eventually your presence is tolerated at the ale-house and the others get 
    back to drinking and talking. You question the young man about the 
    village. He becomes serious, looks at you grimly and says 'Snattacats!' 
    You ask him what he means, but his reply is silence. Grimly he hangs 
    his head. You try another line of conversation and suddenly he perks 
    up and starts rambling on about his grandmother. The more you talk 
    to him, the more you realize that you have chosen to sit next to the 
    village idiot, hopelessly drunk. After an hour or so you leave the 
    ale-house. Will you look for the inn to spend the night or 
    leave the village and sleep rough?`,
    choices: [
      { goToPage: 211, text: "Look for an inn" },
      { goToPage: 62, text: "Sleep rough" },
    ],
  },
  97: {
    text: `You take these Provisions with you.`,
    choices: [{ goToPage: 75, text: "Continue.." }],
    getItems: [{ name: "provisions", amount: 3 }],
  },
  98: {
    text: `You emerge from the woods on to a river-bank. The path leads over a 
    rough wooden bridge and along the bank.`,
    choices: [{ goToPage: 231, text: "Continue.." }],
  },
  99: {
    text: `<p>As you pass by the sentry post, the Troll emerges from behind the 
    hut armed with a halberd, and sees you. You will have to fight him or choose a spell:</p>
    
    <p><b>TROLL Skill 8 Stamina 7</b></p>`,
    choices: [
      { goToPage: 386, text: "Magic: WOK" },
      { goToPage: 363, text: "Magic: SUN" },
      { goToPage: 432, text: "Magic: LAM" },
      { goToPage: 414, text: "Magic: KIL" },
      { goToPage: 317, text: "Magic: DUM" },
      {
        goToPage: 177,
        text: "Fight the Troll",
        fight: { skill: 8, stamina: 7, name: "Troll" },
      },
    ],
  },
  100: {
    text: `You are lowered down through the blackness until eventually you 
    reach the ground below. Do you still have Jann, the Minimite, with you?`,
    choices: [
      { goToPage: 286, text: "I still have Jann" },
      { goToPage: 197, text: "I don't have Jann" },
    ],
  },
  101: {
    text: `You try the key but it does not fit. Try another choice.`,
    choices: [{ goToPage: 4, text: "Continue.." }],
  },
  102: {
    text: `You travel along a path leading upwards a little way until you reach a 
    large natural waterfall. The only path to it leads past a small hut where 
    a ruffian is collecting money. It seems that the price to pay for visiting 
    this waterfall is 3 Gold Pieces. It is a beautiful sight, with large crystal 
    stalactites hanging from the rocks all the way down. Will you pay the 
    price and visit the waterfall or return to the village and 
    head for the inn or onwards out of town.`,
    choices: [
      {
        goToPage: 204,
        text: "Visit the waterfall",
        cost: 3,
        requires: "waterfallPass",
      }, // or waterfall ticket
      { goToPage: 92, text: "Head to the inn" },
      { goToPage: 21, text: "Onwards out of town" },
    ],
  },
  103: {
    text: `The stranger ignores your words and grips a sharp scimitar.`,
    choices: [{ goToPage: 117, text: "Continue.." }],
  },
  104: {
    text: `<p>The bandits growl and advance. Yon may fight them in turn or use magic:</p> 

    <p><b>First BANDIT Skill 7 Stamina 6</b></p>
    <p><b>Second BANDIT Skill 7 Stamina 5</b></p>`,
    choices: [
      { goToPage: 288, text: "Magic: FOF" }, // they run
      { goToPage: 308, text: "Magic: JIG" }, // they dance off (flute)
      { goToPage: 327, text: "Magic: BAM" }, // not a spell
      { goToPage: 348, text: "Magic: LAW" }, // they are too smart
      { goToPage: 371, text: "Magic: YAZ" },
      {
        goToPage: 56,
        text: "Fight the Bandits",
        fight: { skill: 7, stamina: 6, name: "Bandit 1" },
        extraEnemies: [{ skill: 7, stamina: 5, name: "Bandit 2" }],
      },
    ],
  },
  105: {
    text: `The going is easy through the grass. You happen across a parting 
    where it seems someone has been before, making a trail which is 
    heading in the general direction you wish to continue. Will you follow 
    this path or do you mistrust it and wish to make your own 
    way through the grass?`,
    choices: [
      { goToPage: 57, text: "Follow the path" },
      { goToPage: 32, text: "Make your own way" },
    ],
  },
  106: {
    text: `<p>Further along the way you come across a couple of merchants' huts 
    and you browse through the items for sale. If you wish, and if you can 
    afford it, you may buy any of the following items:</p> 
    
    <ul>
    <li>A finely crafted sword: 6 Gold Pieces</li>
    <li>A woven skullcap: 4 Gold Pieces</li>
    <li>Provisions for three meals: 6 Gold Pieces</li>
    </ul>
    
    <p>You may also ask them whether they know of any 
    work that may be going, or if you don't wish to deal with 
    them at all, you may head for the inn for the night.</p>`,
    choices: [
      { goToPage: 194, text: "A finely crafted sword", cost: 6 },
      { goToPage: 247, text: "A woven skullcap", cost: 4 },
      { goToPage: 97, text: "Provisions for 3 meals", cost: 6 },
      { goToPage: 229, text: "Ask for work" },
      { goToPage: 134, text: "Head to the inn" },
    ],
  },
  107: {
    text: `For this potion, <b>he demands 4 Gold Pieces</b> and the price is not 
      negotiable. If you wish to buy, pay him the money and take the flask. 
      Otherwise you may refuse his offer.`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the potion, and return to the trader",
        cost: 4,
        items: [
          {
            name: "potion",
            amount: 1,
          },
        ],
      },
      { goToPage: 280, text: "Do not buy the potion, return to the trader" },
    ],
  },
  108: {
    text: `You find a suitable spot in the woods to make your camp.
    You may stop and eat provisions if you have any.
    You will gain 2 Stamina points if its the first meal of the day. 
    If you have already eaten today you will gain only 1 Stamina point instead. 
    
    You settle down and sleep, but there is a chance that you may be 
    discovered by night creatures who will disturb your rest. You may add 2 points to the 
    die roll you will have to make as night creatures are less likely to 
    approach a camp. 
    
    You set off again the next morning. If you have had a peaceful 
    night's sleep, add 2 Stamina points. If you encountered any night 
    creatures, you may add only 1 Stamina point. You follow a path 
    onwards which climbs steadily up a hill.`,
    choices: [{ goToPage: 123, text: "Check if any creatures attack you" }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  109: {
    text: `You <b>add 2 Stamina points</b> for your rest. If you did not eat at 
    all yesterday you must deduct 3 Stamina points. You wake early the 
    next morning.`,
    choices: [{ goToPage: 222, text: "Continue.." }],
    staminaGain: 2,
    newDay: true,
  },
  110: {
    text: `You pick yourself up off the floor and look around, A shaft of light 
    penetrates the pit and you are relieved to see a passage leading to the 
    daylight outside. Your hand is resting on a furry object which at first 
    you thought was some kind of creature, but now you are able to see 
    that it is a dusty boot. Not far from it is another, and you collect the 
    pair and dust them clean. You now own a pair of fur-skinned boots, 
    which you may take with you. The fur is Borrinskin, and you put the 
    boots in your backpack. Following the passage, you emerge from the 
    mine into the woods by a pathway that runs downhill.`,
    choices: [{ goToPage: 202, text: "Continue.." }], // todo get boots
  },
  111: {
    text: `There seems to be a good deal of merriment in the village. 'It is the 
    festival of the young' whispers Jann. 'Once a year the children are 
    allowed the freedom of the village. It is a time of great fun and 
    pranks.' A number of children sit in the street ahead, drinking ale. A 
    little too much, it seems, as they are laughing loudly. Ahead a young 
    boy holds an old woman over his knee and is spanking her, A group 
    of boys is fighting outside a hut with a sign which reads: 'Glandragors 
    Tavern'. A group of girls is standing at a signpost pointing to the 
    'Crystal Waterfall', tripping up their elders as they pass and giggling to 
    each other. Would you like to avoid this festival and make for the inn, 
    visit the tavern, head for the Crystal Waterfall or leave town straight away?`,
    choices: [
      { goToPage: 92, text: "To the inn" },
      { goToPage: 230, text: "Visit the tavern" },
      { goToPage: 102, text: "Head for the Crystal Waterfall" },
      { goToPage: 21, text: "Leave town" },
    ],
  },
  112: {
    text: `The little men carry you off and you soon arrive at the Head Hunter 
    camp. There is much commotion as you are led into the centre of the 
    settlement. Several natives rush off to fill a large pot with water to be 
    heated over a fire - the implications of which you do not relish! 
    Meanwhile, you are put into a bamboo cage, guarded by a strong 
    warrior. Do you wish to pray to Libra for assistance?`,
    choices: [
      { goToPage: 25, text: "Pray to Libra", needLibra: true },
      { goToPage: 242, text: "Don't pray to Libra" }, // leads to death
    ],
  },
  113: {
    text: `The creature jumps in the air as you greet him and cautiously comes 
    closer. Seeing that you mean no harm, he invites you to join with his 
    companions. Will you join them or say that you would 
    rather stay where you are and rest?`,
    choices: [
      { goToPage: 216, text: "Join them" },
      { goToPage: 52, text: "Stay and rest" },
    ],
  },
  114: {
    text: `'Four days ago I was visited by a traveller such as yourself' she 
    explains. The rogue was leafing through my book when I caught him 
    and as I challenged him he raced off, taking this page with him. He 
    must have been a wizard of some power, considering the speed with 
    which he vanished. I cast an Ageing Spell at him, but it seemed to do 
    no good. She thanks you for bringing it back and offers to show you 
    how useful it is. She will rid you of the Minimite pest if you wish to regain your ability to use spells.
    If you would prefer to keep Jann, she allows you to leave and set off again along the path.`,
    choices: [
      { goToPage: 232, text: "Keep Jann" },
      { goToPage: 205, text: "Remove Jann" }, // todo remove Jann
    ], // todo go to reference number
  },
  115: {
    text: `You pay the 3 Gold Pieces and settle down for the night. You <b>add 
    2 Stamina points</b> for a refreshing night's sleep.`,
    choices: [{ goToPage: 30, text: "Continue.." }],
    staminaGain: 2,
  },
  116: {
    text: `The meal is warm and nourishing. <b>Add 2 Stamina points.</b>`,
    choices: [{ goToPage: 131, text: "Continue.." }],
    staminaGain: 2,
    eaten: true,
  },
  117: {
    text: `<p>You prepare to fight the tall Assassin, or you may cast a spell:</p> 

    <p><b>ASSASSIN Skill 8 Stamina 6</b><p/>
  
    <p>If you fight the assassin you can choose to kill him, alternatively you may elect to spare 
    his life when he is reduced to 3 Stamina points or less, so long as you 
    are clearly winning (i.e. your own Stamina is at least 6).</p>`,
    choices: [
      { goToPage: 368, text: "Magic: MUG" },
      { goToPage: 452, text: "Magic: WOK" },
      { goToPage: 305, text: "Magic: ZAP" },
      { goToPage: 393, text: "Magic: KIL" },
      { goToPage: 342, text: "Magic: FIX" },
      {
        goToPage: 153,
        text: "Fight the Assassin",
        fight: { skill: 8, stamina: 6, name: "Assassin" },
      }, // He is spared at 187
    ],
  },
  118: {
    text: `You manage to creep around the creature and, although it snarls 
    menacingly, it does not attack you.`,
    choices: [{ goToPage: 193, text: "Continue.." }],
  },
  119: {
    text: `You open the door. The hut is neatly laid out inside; obviously the 
    touch of a fastidious woman. Chairs are around a table. A mattress 
    lies in one corner and a large kitchen area indicates that whoever lives 
    here is fond of cooking. You hear a cry from a corner hidden by a large 
    cupboard, and as you move over to look you can see a large cage in 
    which a young woman - and quite a pretty one at that - is imprisoned, 
    'Good stranger' she pleads, 'let me out of this cage! I have been 
    locked in here for two days by those mischievous Elvins. Can you 
    please help me?' Will you help her, ask what's in it for you 
    or look around the hut for goods to steal? `,
    choices: [
      { goToPage: 4, text: "Help her" },
      { goToPage: 78, text: "Ask: Whats in it for me?" },
      { goToPage: 213, text: "Look for items to steal" },
    ],
  },
  120: {
    text: `You return to the junction and can continue either by taking the other 
    passage or by returning to the cave entrance.`,
    choices: [
      { goToPage: 149, text: "Take the other passage" },
      { goToPage: 144, text: "Return to the cave entrance" },
    ],
  },
  121: {
    text: `Seeing the death of their comrade, the other two Elvins chatter to each 
    other, then rise into the air and nip off. Soon they have disappeared 
    completely. After half an hour they have still not returned, so you 
    gather your possessions together and decide to continue your journey.`,
    choices: [{ goToPage: 224, text: "Continue.." }],
  },
  122: {
    text: `She hands you Ragnar's Armband of Swordmastery. While wearing 
    this Item you may add 2 points to your dice roll for Attack Strength if 
    you are using a sword as a weapon. Your powers will be normal if you 
    are using any other weapon.`,
    choices: [{ goToPage: 87, text: "Continue.." }], // todo get bracelet
    getItems: [
      {
        name: "armband",
        amount: 1,
      },
    ],
  },
  123: {
    text: `Roll one die to see whether you encounter any night creatures.`,
    choices: [
      { goToPage: 396, text: "Magic: RAN" }, // not a spell
      { goToPage: 421, text: "Magic: GUM" }, // need glue??
      { goToPage: 448, text: "Magic: LAW" }, // Its runs off
      { goToPage: 437, text: "Magic: WIK" }, // not a spell
      { goToPage: 453, text: "Magic: BIG" }, // Triple in size (it runs or you double your skill)
      { fightNC: true, text: "Fight it" },
      { nightContinue: true, text: "Continue.." },
    ],
    pause: true,
    extraText: true,
  },
  124: {
    text: `'You cannot escape the Spirit of Mananka!' cries the face. 'And your 
    mission is cursed!' You watch as the smoke contracts and disappears 
    back inside the box. You wonder at the <b>Spirit's curse</b>, but there is little 
    you can do. Until you find some way of ridding yourself of this curse, 
    your Stamina has been weakened. <b>Each time you lose Stamina 
    points for any reason except casting spells, you lose 1 extra 
    Stamina point.</b> You may search for some means of ridding yourself 
    of the Spirit's curse, but until you do, you are more vulnerable to 
    dangers. You may now leave the hut and continue your journey 
    onwards.`,
    choices: [{ goToPage: 196, text: "Continue.." }], // todo cursed lose 1 extra Stamina always
    curse: true,
  },
  125: {
    text: `You leave Kristatanti along a path which snakes out into the hills. All 
    morning you follow it as it twists through the woods of gnarled trees 
    until eventually you reach a clearing where another path joins from 
    the east. A signpost at the junction indicates straight on to Dhumpus 
    and westwards to Alianna. Will you continue onwards or 
    westwards?`,
    choices: [
      { goToPage: 54, text: "Continue onwards" },
      { goToPage: 154, text: "Continue westwards" },
    ],
  },
  126: {
    text: `You may investigate your purchases now. 
    But a brief description can be seen by hovering over the item in the item box.
    
    You will return here after investigating all your new acquisitions.
    Continue onwards, once you are ready.`,
    choices: [
      { goToPage: 274, text: "View the Potion", requires: "potion" },
      { goToPage: 43, text: "View the Broadsword", requires: "broadsword" },
      { goToPage: 249, text: "View the Flute", requires: "pipe" },
      { goToPage: 72, text: "View the Axe", requires: "axe" },
      { goToPage: 190, text: "View the Teeth", requires: "giantsTeeth" },
      { goToPage: 152, text: "View the Jewel", requires: "iceJewel" },
      { goToPage: 95, text: "Continue onwards" },
    ],
  },
  127: {
    text: `You follow a meandering path around the side of a hill for most of the 
    morning. You may stop and eat Provisions along the way if you wish 
    and you will gain 2 Stamina points if you do. As noon approaches 
    you can see the path offering you two ways onwards. One path 
    follows the hill downwards into a shallow valley and then climbs the 
    next hill. Your other choice is a path which leads to a rope-and-wood 
    bridge which spans the hills. Will you cross this bridge or 
    follow a course down the hillside?`,
    choices: [
      { goToPage: 27, text: "Cross the bridge" },
      { goToPage: 38, text: "Go down the hillside" },
    ],
    eatOption: { haveEaten: 2, haveNotEaten: 2 },
  },
  128: {
    text: `You dash on ahead but suddenly realize you are running into an 
    unknown mine with perhaps your only exit sealed off behind you! 
    Do you want to continue downwards or turn round and head back for the door?`,
    choices: [
      { goToPage: 24, text: "Continue downwards" },
      { goToPage: 66, text: "Head back" },
    ],
  },
  129: {
    text: `The driver is a cheerful fellow and prefers company to travelling 
    alone. You may <b>add 1 Luck point</b> for getting this lift. You travel for 
    most of the morning at a pace not much faster than you could walk 
    until he finally reaches a field where he is collecting vegetables. You 
    may offer to help him for an hour or so in return for the lift or you may 
    leave him and continue your journey.`,
    choices: [
      { goToPage: 173, text: "Help him" },
      { goToPage: 46, text: "Continue your journey" },
    ],
    luckGain: 1,
  },
  130: {
    text: `The door opens slowly until, at one point, a catch clicks and some 
    ominous rumblings start. Behind you, a wall is rising through the 
    floor to seal off your escape, A great splashing makes you whirl round 
    and you gasp as you see hundreds of gallons of water come gushing 
    around you from within the room! You are swept off the ground as 
    the room and corridor fill. If you do not react quickly you will be 
    drowned as the water fills all the available space. 
    Will you cast a spell, or do you have another plan?
    If you have not yet called on help from your goddess, you may do so now.`,
    choices: [
      { goToPage: 390, text: "Magic: SUS" },
      { goToPage: 324, text: "Magic: HUF" },
      { goToPage: 416, text: "Magic: DIP" },
      { goToPage: 365, text: "Magic: FOF" },
      { goToPage: 445, text: "Magic: SUD" },
      { goToPage: 64, text: "I have another plan" }, // leads to death
      { goToPage: 260, text: "Call Libra", needLibra: true },
    ],
  },
  131: {
    text: `You continue along the path, leaving the village behind. About half 
    an hour later, you reach the start of the climb into the hills and 
    continue upwards. Five minutes later, you reach a fork offering you 
    two ways onwards.`,
    choices: [{ goToPage: 183, text: "Continue.." }],
  },
  132: {
    text: `They release your hands, allowing you to impress them with:`,
    choices: [
      { goToPage: 353, text: "Magic: KID" },
      { goToPage: 376, text: "Magic: JAP" },
      { goToPage: 292, text: "Magic: DVD" },
      { goToPage: 401, text: "Magic: GOB" },
      { goToPage: 316, text: "Magic: SIX" },
      { goToPage: 218, text: "I don't know any of these" },
      { goToPage: 218, text: "Don't use a spell" },
    ],
  },
  133: {
    text: `You continue along the trail and the undergrowth around you gets 
    thicker. Suddenly there is a cracking beneath your feet and something 
    gives way underfoot. You may Test your Luck if you wish.`,
    choices: [
      { goToPage: 89, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 70, text: "Test your Luck - Fail", luck: "failed" },
      { goToPage: 70, text: "Don't test your luck", luck: "blocked" },
    ], // todo add test your Luck choice
    testLuck: { optional: true },
  },
  134: {
    text: `The inn charges 3 Gold Pieces for a hearty meal and 3 Gold Pieces for a 
    bed. If you can afford it, you may eat. The meal (Hillfox broth and rice) 
    will restore 3 Stamina points if you have not yet eaten today or 2 
    Stamina points if you have. You can stay at the 
    inn for the night, or if you cannot afford it or will not pay, 
    you may leave the village in search of a suitable place to camp for the 
    night.`,
    choices: [
      { goToPage: 115, text: "Sleep at the inn" },
      { goToPage: 14, text: "Find a place to camp" },
    ],
    eatOption: {
      haveEaten: 2,
      haveNotEaten: 3,
      cost: 3,
      name: "Hillfox broth and rice",
    },
  },
  135: {
    text: `You travel along the path for some time. Passing out of a shrubby 
    woodland a pleasant smell hits your nostrils. Off to the right is a field 
    of beautiful black flowers. The path through the field leads on over 
    the brow of the hill into a valley below. Jann believes this is the 
    quickest path to Torrepani, the next village on your route. If you don't 
    trust his judgement you may use a spell. Alternatively you can continue onwards 
    or take the other route downhill from Birritanti.`,
    choices: [
      { goToPage: 435, text: "Magic: FIF" },
      { goToPage: 341, text: "Magic: SUD" },
      { goToPage: 419, text: "Magic: HUF" },
      { goToPage: 321, text: "Magic: MAG" },
      { goToPage: 394, text: "Magic: SUS" },
      { goToPage: 73, text: "Continue onwards" },
      { goToPage: 51, text: "Take the other route" },
    ],
  },
  136: {
    text: `Refactored this into 164, there were 11~ places you could eat conditionally, this was an outlier, forcing you to eat.
    If you got to here, I have no idea how, please inform Danny`,
    choices: [{ goToPage: 65, text: "Continue.." }],
  },
  137: {
    text: `You continue through the bush until you reach a point where the 
    undergrowth thins and becomes a waist-high grassland.`,
    choices: [{ goToPage: 105, text: "Continue.." }],
  },
  138: {
    text: `The passage continues until you reach a large stone-cut door blocking 
    your progress. Will you try the door handle or return to 
    the junction and take the other passage?`,
    choices: [
      { goToPage: 255, text: "Try the door handle" },
      { goToPage: 149, text: "Return and take the other passage" },
    ],
  },
  139: {
    text: `When you regain consciousness, you are bound hand and foot. The 
    excited jabberings of a small group of black-skinned HEAD HUNTERS 
    around you make you fear for your life. You may try to cast a spell.
    Or you may wait to see what they intend to do with you.`,
    choices: [
      { goToPage: 357, text: "Magic: RIS" },
      { goToPage: 406, text: "Magic: RUD" },
      { goToPage: 333, text: "Magic: HOT" },
      { goToPage: 450, text: "Magic: KID" },
      { goToPage: 379, text: "Magic: WIK" },
      { goToPage: 112, text: "Wait and see what they do" },
    ],
  },
  140: {
    text: `You remain diligently awake, watching the door, but no one comes 
    during the night. Lose 2 Stamina points for not sleeping and a 
    further 3 Stamina points if you did not eat yesterday.`,
    choices: [{ goToPage: 222, text: "Continue.." }],
    staminaLoss: 2,
    newDay: true,
  },
  141: {
    text: `The strange carvings are in a familiar language, but the quality of the 
    shaft and head indicate that the axe is well used and may not last 
    many more battles. <b>The merchant wants 7 Gold Pieces for the 
    weapon.</b> You may pay his price and take the axe, or you may bargain. 
    If you wish to bargain, roll two dice. A roll lower than 7 indicates you 
    are a hard bargainer and he will accept this roll, in Gold Pieces, as his 
    price. If you roll over 7, your bartering angers him and he insists on 
    raising the price to this level.`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the axe, and return to the merchant",
        cost: 7,
        items: [
          {
            name: "axe",
            amount: 1,
          },
        ],
      },
      { goToPage: 280, text: "Do not buy the sword, return to the merchant" },
    ],
    extraText: true,
  },
  142: {
    text: `You draw your weapon and try to smash the lock. Roll two dice and 
    compare the total with your Skill score. If the roll is lower than your 
    skill, you succeed in breaking the lock and releasing the woman, 
    If the roll equals or exceeds your skill, the lock remains 
    intact. Each time you try, the blow blunts your weapon and you must 
    deduct 1 point from your Skill when you use this weapon. If you 
    have multiple weapons, you may equip the less favoured one so as to suffer 
    no penalty when using your preffered one. You must try at least 
    once but, after this, you may stop at any time, give up and leave the 
    house.`,
    choices: [
      { goToPage: 90, text: "Successful roll - Break the lock", blocked: true },
      { goToPage: 278, text: "Give up and leave the house", blocked: true },
    ],
    extraText: true,
  },
  143: {
    text: `The hunchback smiles. 

    'Your answer is correct and true. 
    
    Now you must answer question two: 
    
    Through villages three you now have passed 
    What was the first, second and last? 
    
    How will you answer him?`,
    choices: [
      { goToPage: 262, text: "Cantopani, Kristatanti and Dhumpus" },
      { goToPage: 253, text: "Kristatanti, Birritanti and Dhumpus" },
      { goToPage: 59, text: "Cantopani, Gorretanti and Dhumpus" },
    ],
  },
  144: {
    text: `You emerge carefully from the cave, trying not to be spotted by 
    wandering Goblins. Test your Luck.`,
    choices: [
      { goToPage: 259, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 217, text: "Test your Luck - Fail", luck: "failed" },
    ],
    testLuck: { optional: false },
    pause: true,
  },
  145: {
    text: `Both boxes look like fairly uninteresting wooden cases, each fastened 
    with a catch. Will you try opening the one on the left or the right?`,
    choices: [
      { goToPage: 251, text: "Open the left box", box1: true }, // Box 1
      { goToPage: 258, text: "Open the right box", box2: true }, // Box 2
    ],
  },
  146: {
    text: `The tea is refreshing and you <b>gain 1 Stamina point and also 1 
    Luck point</b> for making the right choice. You notice that the woman is 
    cursing and her actions are becoming slower. She creeps slowly off 
    into the kitchen and you see her gulping down another drink. Then 
    she comes back and questions you about your journey. She is particularly 
    interested in knowing whether you came across an old man. Do
    you have with you a page from a Spell Book?`,
    choices: [
      {
        goToPage: 184,
        text: "I have a Spell Book page",
        requires: "spellbookPage",
      },
      { goToPage: 219, text: "I do not have a Spell Book page" },
    ],
    staminaGain: 1,
    luckGain: 1,
  },
  147: {
    text: `The gentle upward slope becomes a steep climb and you must rest 
    several times during the morning. Finally you reach the top and can 
    look over the hill to see that the path leads into a small settlement of 
    crudely made huts. You follow the path down and into the village. As 
    you arrive, the villagers notice you and make for their huts, almost as 
    if in fear. They are a sorry looking bunch, short and squat with tough, 
    leathery skin. Several of them are missing limbs and some are only 
    able to drag themselves along with their hands. Will you try to talk 
    with the villagers or continue onwards through the village?`,
    choices: [
      { goToPage: 61, text: "Talk to the villagers" },
      { goToPage: 220, text: "Continue onwards" },
    ],
  },
  148: {
    text: `Have you eaten since leaving the Outpost Settlement yesterday? If 
    not, you are extremely hungry and lose 3 Stamina points 
    for going without food for the day. 
    
    You continue on your way and approach a rope bridge strung 
    precariously between two boulders. You may either continue along 
    the path on your side of the water or you may cross the 
    river on the bridge and follow a path running over a small hill.`,
    choices: [
      { goToPage: 209, text: "Continue along your side" },
      { goToPage: 19, text: "Go over the bridge" },
    ],
    newDay: true,
  },
  149: {
    text: `The passage twists round to the right until it finally ends at a 
    doorway. Will you try the door or leave the cave entirely?`,
    choices: [
      { goToPage: 268, text: "Try the door" },
      { goToPage: 144, text: "Leave the cave" },
    ],
  },
  150: {
    text: `You press on through the wood and soon come across another 
    path which crosses it. You follow this path northwards until you 
    come to a junction. A signpost at the junction points westwards to 
    Alianna and straight on to Dhumpus. Will you head for Alianna or Dhumpus?`,
    choices: [
      { goToPage: 154, text: "To Alianna" },
      { goToPage: 54, text: "To Dhumpus" },
    ],
  },
  151: {
    text: `Some way down the corridor you hear whimpering and your torch 
    lights up a frail shape. Hiding in the shadows is the young Svinn girl! 
    You take her up and comfort her, and she clings to you for safety. 
    Now all you have to do is escape!`,
    choices: [{ goToPage: 195, text: "Continue.." }],
  },
  152: {
    text: `The glittering jewel in its mount is cold to the touch but has an 
    unusual sparkle. You put it in your pack. However, it is in fact an Ice 
    Jewel and sometime later will melt away to worthless liquid. You have 
    wasted your money.`,
    choices: [{ goToPage: 126, text: "Continue.." }],
  },
  153: {
    text: `Looking through his pockets <b>you find 3 Gold Pieces.</b> You set 
    off ahead, continuing along the path.`,
    choices: [{ goToPage: 212, text: "Continue.." }],
    getItems: [{ name: "gold", amount: 3 }],
  },
  154: {
    text: `Some way down the path you come across a hut in a rather picturesque setting, 
    among trees with leaves of contrasting shades of green. 
    Flowers decorate the walls of the hut and the door is painted in ornate 
    designs. You approach the door and knock but there is no reply. Will 
    you enter the house or leave it well alone?`,
    choices: [
      { goToPage: 119, text: "Enter the house" },
      { goToPage: 278, text: "Leave it alone" },
    ],
  },
  155: {
    text: `Searching the bodies, you find a miserable <b>2 Gold Pieces</b> in their 
    pockets. You also take <b>8 teeth</b>, which lie on the ground next to 
    the first Goblin.`,
    choices: [{ goToPage: 202, text: "Continue.." }],
    getItems: [
      { name: "gold", amount: 2 },
      { name: "goblinTeeth", amount: 8 },
    ],
  },
  156: {
    text: `You climb into the undergrowth from the path and plan a wide sweep 
    around the village. The going is heavy as you climb through the 
    vegetation Bushes and tall grasses are constant obstacles which catch 
    and scratch you. Suddenly you feel a strong hand on your arm which 
    makes you whirl round - but you can see nothing gripping you! Will 
    you try to continue or prepare to defend yourself?`,
    choices: [
      { goToPage: 94, text: "Continue regardless" },
      { goToPage: 241, text: "Prepare to defend" },
    ],
  },
  157: {
    text: `The path winds upwards into the hills and you enter a wood. The 
    afternoon sun glints through the trees, playing tricks on your eyes. 
    Every so often you catch a glimpse of some strange-shaped animal or 
    other watching you, only to find that it is the silhouetted branches 
    and leaves caught at an odd angle. You reach a position where you 
    may rest and eat Provisions if you wish or continue your journey.`,
    choices: [
      { goToPage: 18, text: "Eat Provisions", requires: "provisions" },
      { goToPage: 210, text: "Continue" },
    ],
  },
  158: {
    text: `Inside, the hut has no furniture. A small fire burns in the middle of the 
    floor and against the far wall stands a family of three, cowering away 
    from you. Will you hold out your hand in friendship or cast a spell?
    
    Alternatively you may leave the village.`,
    choices: [
      { goToPage: 385, text: "Magic: GAK" },
      { goToPage: 431, text: "Magic: FOF" },
      { goToPage: 337, text: "Magic: RAN" },
      { goToPage: 413, text: "Magic: FAM" },
      { goToPage: 299, text: "Magic: DOC" },
      { goToPage: 79, text: "Hold out your hand in friendship" },
      { goToPage: 220, text: "Leave the village" },
    ],
  },
  159: {
    text: `Further along the path, you come across another object, this time a 
    locket containing a small portrait of a woman, obviously pilfered from 
    a previous traveller unaware of the grasses habits. You take this 
    with you. Eventually you reach the river-bank again, well past the 
    village.`,
    choices: [{ goToPage: 231, text: "Continue.." }], // todo get locket
    getItems: [{ name: "locket", amount: 1 }],
  },
  160: {
    text: `<p>You pray to your goddess and, amidst the crashing of rubble, you can 
    hear a great creaking as the door slowly opens. When it has opened 
    wide enough, you nip through it into the room, just in time, as you 
    hear a great crashing from the tunnel.</p>
    
    <p>You have now called on Libra for help, your one and only time 
    allowable in the Shamutanti Hills. Should you attempt to seek her 
    assistance again between here and Khare, she will ignore you (i.e. 
    you may not choose this option if it is given in the text). You are on 
    your own!</p>
    
    <p>You return to the junction.</p>`,
    choices: [{ goToPage: 120, text: "Continue.." }],
  },
  161: {
    text: `The meal is just being served. If you wish to sit down to eat, pay the 2 
    Gold Pieces and have your bowl of Skunkbear stew. You may add 3 
    Stamina points if you eat. You will not be able to eat your own 
    Provisions at the inn. If you wish to rest for the night, it will cost you 3 Gold 
    Pieces. The bed you will be given is not particularly clean, but is comfortable
    and will grant you 5 Stamina points for a good night's rest.`,
    choices: [
      { goToPage: 62, text: "Sleep rough" },
      { goToPage: 45, text: "Stay the night", cost: 3 },
    ],
    eatOption: {
      haveEaten: 3,
      haveNotEaten: 3,
      cost: 2,
      name: "Skunkbear stew",
    },
  },
  162: {
    text: `<p>You must fight the Giant or cast a spell:</p>

    <p><b>HILL GIANT Skill 9 Stamina 11</b></p>`,
    choices: [
      { goToPage: 385, text: "Magic: YOB" },
      { goToPage: 431, text: "Magic: KIL" },
      { goToPage: 337, text: "Magic: DUM" },
      { goToPage: 413, text: "Magic: BIG" },
      { goToPage: 299, text: "Magic: YAZ" },
      {
        goToPage: 265,
        text: "Fight the Hill Giant",
        fight: { skill: 9, stamina: 11, name: "Hill Giant" },
      },
    ],
  },
  163: {
    text: `The villagers are becoming curious about you and you decide to make 
    your way onwards. Following the path out of Cantopani you 
    approach the Shamutanti Hills themselves. After half an hour or so, a 
    fork in the path gives you a choice of two ways.`,
    choices: [{ goToPage: 183, text: "Continue.." }],
  },
  164: {
    text: `The path winds alongside a bubbling stream and you follow it 
    onwards along the west bank. The valley you are in becomes narrower, 
    but you soon come across a flat, grassy bank where you may stop and 
    eat Provisions. If this is your first meal today, add 2 Stamina points. If you have 
    already eaten, add only 1 Stamina point. You rest for half an hour or 
    so and then continue your journey.`,
    choices: [{ goToPage: 65, text: "Continue.." }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  165: {
    // unique node
    text: `You try to kill all the snakes in the pit with your weapon. Test your 
    Luck. If you are Lucky, Test your Luck again. You must keep trying 
    until you are Lucky three times in succession. Each time you are 
    Unlucky you are bitten by a snake for 3 Stamina points of damage. If 
    you are Lucky three times in succession, you manage to kill all the 
    snakes.`,
    choices: [{ goToPage: 206, text: "Lucky 3 times in a row - continue" }],
    pause: true,
  },
  166: {
    text: `Which spell will you choose?
    You can use your weapon if you prefer.`,
    choices: [
      { goToPage: 332, text: "Magic: NAP" },
      { goToPage: 295, text: "Magic: SIX" },
      { goToPage: 313, text: "Magic: BAG" },
      { goToPage: 380, text: "Magic: LAW" },
      { goToPage: 427, text: "Magic: KIL" },
      { goToPage: 20, text: "Use weapon instead" },
    ],
  },
  167: {
    text: `It was indeed an incredibly comfortable bed, you <b>recover 5 Stamina points</b>. 
    Feeling refreshed you set off for the day.`,
    choices: [{ goToPage: 45, text: "Continue.." }],
    staminaGain: 5,
  },
  168: {
    text: `You turn to your pack and pick it up. But you drop it again in fear as it 
    moves in your hands. Something is inside. Ill cautiously, you open 
    the top and, as you do so, a green squirrel-like creature with a huge 
    belly leaps out and into the woods. You curse and examine the 
    contents, but it is too late: <b>the little creature has eaten all your 
    Provisions.</b> You are angry at your own carelessness and set off briskly 
    along the trail again.`,
    choices: [{ goToPage: 210, text: "Continue.." }],
    getItems: [{ name: "provisions", amount: -100 }],
  },
  169: {
    text: `Hurriedly, you leave the house and follow the path back to the 
    junction where you head north towards Dhumpus.`,
    choices: [{ goToPage: 54, text: "Continue.." }],
  },
  170: {
    text: `Your relief is somewhat premature, however, as you discover when 
    you take your next step forward. Your foot triggers a release 
    mechanism and three saplings snap up In front of you. Each is fitted with 
    sharpened stakes which whip towards you at heart level. You are 
    impaled on this fiendish device and your journey has ended here. 
    Your head will soon join the others on the posts you have just 
    passed . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    dead: true,
  },
  171: {
    text: `The creature is a MINIMITE and calls itself Jann. It is very friendly 
    and tells you you are looking down on Birritanti, the largest village 
    in the Shamutanti Hills. Birritanti is a friendly village, where all 
    travellers spend at least one night. Consequently, prices are a little on 
    the high side. The Minimite would like to come with you. Will you 
    allow it to stay on your shoulder and follow the path down into 
    Birritanti or will you tell it you would rather travel alone?`,
    choices: [
      { goToPage: 111, text: "Allow Jann to stay" },
      { goToPage: 37, text: "Say you'd rather travel alone" },
    ],
  },
  172: {
    text: `You call into the hut but there is no reply. Parting the drapes, you look 
    in. A low table and three stools are in the middle of the floor and two 
    boxes stand on the table. Will you enter and investigate the boxes or 
    try one of the other two huts, the green one or the brown?`,
    choices: [
      { goToPage: 145, text: "Enter and investigate the boxes" },
      { goToPage: 88, text: "Try the green hut" },
      { goToPage: 74, text: "Try the brown hut" },
    ],
  },
  173: {
    text: `He is grateful for the help and <b>offers you vegetables</b> to take with you 
    on your journey - <b>enough for one meal</b> - as payment. Then you leave 
    him and set off along the path.`,
    choices: [{ goToPage: 46, text: "Continue.." }],
    getItems: [{ name: "provisions", amount: 1 }],
  },
  174: {
    text: `Further along the corridor you come to a door. Will you try the door 
    or return to the junction and take the other passage?`,
    choices: [
      { goToPage: 130, text: "Try the door" },
      { goToPage: 151, text: "Take the other passage" },
    ],
  },
  175: {
    text: `You creep closer, round the side of the hill, to the entrance of the cave. 
    You seize your chance when all is quiet to nip inside and hide in the 
    shadows. Following the passage cautiously, you come to a junction 
    where you may fork to the left or the right. 
    Which will you choose?`,
    choices: [
      { goToPage: 138, text: "To the left" },
      { goToPage: 149, text: "To the right" },
    ],
  },
  176: {
    text: `As you follow the path downwards you pass a sign. You are entering 
    the village of Dhumpus. Will you find an inn to rest for the night or try to make contact with the villagers? `,
    choices: [
      { goToPage: 134, text: "Find an inn" },
      { goToPage: 34, text: "Try to talk to the villagers" },
    ],
  },
  177: {
    text: `You search the Troll's body and hut. Inside the hut you <b>find a pouch 
    containing 3 Gold Pieces</b>, around the Troll's neck is a small amulet 
    made of twisted metal. This is a <b>Lucky Charm</b> - although it brought 
    little Luck to the Troll. While wearing this charm, you may subtract 
    one point from your dice roll each time you Test your Luck`,
    choices: [{ goToPage: 237, text: "Continue.." }],
    getItems: [
      { name: "gold", amount: 3 },
      {
        name: "luckAmulet",
        amount: 1,
      },
    ],
  },
  178: {
    text: `<p>The path winds through fields of wild scrubland. The countryside is 
    deserted and an eerie silence is broken only by the cawing of an 
    occasional crow. The birds appear to pause in the air to examine you 
    as they pass and you feel uneasy in their presence. You pass over a 
    small hillock, from the top of which you can see the path continuing 
    downwards into a small settlement of huts at the base of the Shamutanti Hills. 
    You follow the path and, as you approach the village, 
    noises and movements indicate that it is populated. As the path runs 
    straight through the village, you have little choice but to follow it.</p> 
    
    <p>The round huts are made of a hard-baked, bright clay with thatched 
    roofs. As you pass, eyes appear at dark doorways watching your 
    movements. Suddenly a villager appears from one of the dwellings 
    and stands before you. He is five feet tall with thick-set arms and 
    thighs half clothed in tattered breeches. His eyes are wild and his long 
    red hair and beard stand out on his face in a wiry tangle. 'Halt, 
    stranger!' he commands. 'What business have you in Cantopani?' 
    What is your response?</p>`,
    choices: [
      { goToPage: 264, text: "Tell him you are a trader" },
      { goToPage: 33, text: "Ask for directions onwards" },
      { goToPage: 198, text: "Tell him you are hungry and need Provisions" },
    ],
  },
  179: {
    text: `You realize that a few more minutes of this music and you will be 
    dropping off to sleep. But the effect is so relaxing that you cannot help 
    yourself. Slowly you drift away.`,
    choices: [{ goToPage: 279, text: "Continue.." }],
  },
  180: {
    text: `You pick a clearing where you may open your backpack and get out 
    your Provisions. Your ears are peeled to the sounds around you and 
    you arc startled when a flock of Woodgulls fly up into the air near by. 
    You may, if you wish, pack up your bags and continue your trek or stay to finish your meal.`,
    choices: [
      { goToPage: 133, text: "Pack up and continue" },
      { goToPage: 272, text: "Stay and finish your meal" },
    ],
  },
  181: {
    text: `You step on a twig which snaps loudly. A stirring comes from within 
    one of the caves and a noise indicates something is approaching. A 
    large figure emerges in ragged clothes and you now face a GIANT, 
    armed with a heavy club. Will you prepare to attack the creature or attempt to talk with it?`,
    choices: [
      { goToPage: 162, text: "Prepare to attack" },
      { goToPage: 256, text: "Try to talk to the giant" },
    ],
  },
  182: {
    text: `What will you give the man? If you have an axe, you give it to him. 
    If you do not have an axe, you will now have to give 
    him something else.`,
    choices: [
      { goToPage: 233, text: "Give him the axe", requires: "axe" },
      { goToPage: 29, text: "I don't have an axe", blockItem: "axe" },
    ],
  },
  183: {
    text: `<p>You ponder the two trails. As you consider the paths onwards, you 
    hear weak cries from a large tree ahead of you. Cautiously, you step 
    up to see an old man sitting on the lowest branch, apparently afraid to 
    jump down to the ground, which considering his age is not surprising. 
    He pleads with you to assist and you help him down. It transpires 
    that he has been travelling from Dhumpus and is headed towards the 
    Outpost Settlement in Analand. His journey had been safe enough 
    until he was waylaid by Elvins, robbed, and left in the tree. In return 
    for your kindness, he relates a rhyme which he feels may help you;</p> 
    
    <address>
    See him though he sees you not;<br>
    The black-eyed creature creeps.<br>
    A guardian once, but now his lot:<br>
    The key to freedom keeps.<br>
    </address>
    
    <p>He is not sure exactly what the rhyme signifies, but he knows that the 
    Elvins are particularly keen on finding the key in question. He also 
    presses on you his only possession: <b>a page from a Spell Book</b>. The spell described is incomplete; you have only part of 
    it. Looking at it, it appears to be some sort of pest-repelling spell. He 
    then bids you farewell and heads off towards Cantopani.</p>
    
    <p>You may now choose your way onwards:</p>`,
    choices: [
      { goToPage: 157, text: "Take the high way into the hills" },
      { goToPage: 164, text: "The low way along the valley" },
      {
        goToPage: 200,
        text: "Investigate a buzzing coming from around the tree",
      },
    ],
    getItems: [{ name: "spellbookPage", amount: 1 }],
  },
  184: {
    text: `You describe the old man you encountered and her eyes light up. She 
    asks whether you stole from him a page from a Spell Book and is 
    overjoyed as you pull the page from your pack. Giggling with glee, 
    she snatches it from you.`,
    choices: [{ goToPage: 114, text: "Continue.." }],
    getItems: [{ name: "spellbookPage", amount: -1 }],
  },
  185: {
    text: `<p>You sit and talk with them. They seem to be amongst the senior 
    members of the village society and this has been a lucky encounter 
    <b>(add 2 Luck points)</b>. They offer you food, which you eat for a 
    <b>gain of 1 Stamina point.</b> As the conversation becomes lighter, you 
    jokingly refer to the 'buffoons at Kristatanti' a comment which does 
    not go down well with one of your hosts who happens to be from that 
    village. In anger, he rises and challenges you. As you are on his own 
    territory this would not be a wise challenge to accept, so you back off. 
    He chases you angrily through Dhumpus and you flee before him. On 
    the edge of the village he gives up the chase and you head 
    onwards — but you realize with dismay that you have left your 
    weapon behind!</p>
    
    <p>You must now continue weaponless and, unless you 
    have a reserve in your pack, you must <b>deduct 4 Skill points until you 
    find another weapon.</b></p>`,
    choices: [{ goToPage: 14, text: "Continue.." }],
    gainLuck: 2,
  },
  186: {
    text: `There is little in the room of value, but the dead Goblin wears a silver 
    key around its neck with the number 111 on it. You take this key 
    with you and continue either onwards through the door ahead or back the way you came`,
    choices: [
      { goToPage: 239, text: "Through the door" },
      { goToPage: 120, text: "Back the way you came" },
    ],
    getItems: [
      {
        name: "goblinKey",
      },
    ],
  },
  187: {
    text: `He begs for mercy and, when you step back from the battle, he is 
    overwhelmingly grateful. Picking himself up and nursing his wounds 
    he tells you he is Flanker, an assassin and thief. He always picks on 
    wayfarers for combat practice and thought you would be no match. 
    He too is headed for Khare and, in return for your mercy, he promises 
    he will remain your friend. This will be a valuable asset in the cityport. 
    When you reach Khare you will meet Flanker again and he promises 
    he will aid you. Call upon him in the second adventure 
    to find out how he will help. He will not accompany you to Khare 
    and instead disappears into the woods. You have made a valuable contact here. 
    <b>Gain 2 Luck points</b> and continue.`,
    choices: [{ goToPage: 212, text: "Continue.." }],
    luckGain: 2,
  },
  188: {
    text: `Soon it becomes dark and you must decide whether to set up camp for 
    the night or to continue without rest.`,
    choices: [
      { goToPage: 108, text: "Set up camp for the night" },
      { goToPage: 49, text: "Continue without rest" },
    ],
  },
  189: {
    text: `All the huts have brightly coloured drapes hanging in their doorways, 
    and each is a different colour. You may investigate one with a red, green or brown doorway.`,
    choices: [
      { goToPage: 172, text: "Red doorway" },
      { goToPage: 88, text: "Green doorway" },
      { goToPage: 74, text: "Brown doorway" },
    ],
  },
  190: {
    text: `The teeth in the bag are indeed from various creatures: several from 
    Death-hounds, three from an Ape, four from a Goblin, two from a 
    Snattacat and a large molar from a Giant. You take all of 
    these and continue.`,
    choices: [{ goToPage: 126, text: "Continue.." }],
  },
  191: {
    text: `You chat for some time. When you tell him you are heading for Khare 
    he tells you that you will have to pass through Torrepani and that you 
    will find it a different place as the Svinns that live there seem to be in a 
    permanent state of depression these days. Through Torrepani you 
    have a day's travel to Khare and the going is easy down the hills. You 
    <b>gain 2 Stamina points</b> for the ale and <b>1 Luck point</b> for the 
    information, Jann, the Minimite, has been sipping at your ale and is 
    now quite drunk. You try to creep off either to the inn or 
    out of the village but try as you might, you cannot lose the little creature`,
    choices: [
      { goToPage: 92, text: "To the inn" },
      { goToPage: 21, text: "Out of the village" },
    ],
    staminaGain: 2,
    luckGain: 1,
  },
  192: {
    text: `You sit down and mutter some comment about the mud on the trails 
    at this time of year. The old man grunts in agreement. Eventually the 
    silence gives way to noisy chatter once more and you talk to the old 
    man. He is a hill farmer on the outskirts of the village and sees much 
    of what comes and goes in Kristatanti. He has heard of the capture of 
    the Crown of Kings but has little interest in world affairs. You tell him 
    a little of yourself and soon you are both laughing heartily as you 
    exchange Goblin jokes. Eventually, he stands to leave. 'There are two 
    ways onwards from Kristatanti, stranger' he says. 'One will take you 
    past Alianna's home - and you will need your wits about you if she is 
    there. The other leads up into the hills to the Lea-Ki, domain of the 
    great ones. I wish you the Luck of Sindla on your journey. Perhaps this 
    will help you on your way. <b>He hands you an apple-like fruit</b> which he 
    has grown on his farm. It is a nourishing Bomba and, if you eat this 
    along with a normal meal, it will double your gain in Stamina. You 
    thank him and wish him a good night. 
    
    You also <b>gain 2 Luck points</b> for your encounter. Then you must 
    decide whether to spend the night in the inn or wander 
    off into the woods outside the village to sleep rough.`,
    choices: [
      { goToPage: 211, text: "Spend the night in the inn" },
      { goToPage: 62, text: "Sleep rough" },
    ],
    getItems: [
      {
        name: "bomba",
        amount: 1,
      },
    ],
    luckGain: 2,
  },
  193: {
    text: `You continue onwards, up the path for a couple of hours, down 
    another valley and back up another hill. It is now late afternoon and 
    you begin to think about where you will stay for the night. Ahead of 
    you, however, is a small village set into the hill.`,
    choices: [{ goToPage: 28, text: "Continue.." }],
  },
  194: {
    // unique node
    text: `The sword has a specially sharpened blade and will inflict 3 Stamina 
    points' worth of damage instead of the normal 2. However, you will 
    not be able to take this sword if you already have a sword unless you 
    leave your equipped one behind. If you don't consider this new sword is as 
    good as your old one, you can choose to ask the merchant for your money back 
    (Test your Luck - if you are Lucky he will give you a refund).`,
    choices: [
      {
        goToPage: 75,
        text: "Test your Luck - Success, keep your money and weapon",
        luck: "success",
        items: [
          {
            name: "gold",
            amount: 6,
          },
        ],
      },
      {
        goToPage: 75,
        text: "Continue",
        luck: "blocked",
        loseWeapon: true,
        items: [
          {
            name: "craftedSword",
            amount: 1,
          },
        ],
      },
    ],
    testLuck: { optional: true },
  },
  195: {
    text: `Behind you a roaring puts you on your guard. The walls of the 
    corridor begin to shake and crumble and you are forced to venture 
    further to avoid the collapse which is sealing off your exit. Ahead of 
    you now, a narrow shaft of light gives you cause for hope. Perhaps 
    this is another exit? The roaring sound gets louder as you step from 
    the corridor into a large cavern. Suddenly you gasp as you back 
    against the wall, shielding the child from the sight you have seen. 
    
    Standing before you on four legs is a huge MANTICORE a hybrid 
    creature with a lion's body and a scorpion's tail. Its face is that of an 
    old man and as it sees you it rears back, flapping two great wings. Will 
    you fight the creature or cast a spell? `,
    choices: [
      { goToPage: 302, text: "Magic: PEP" },
      { goToPage: 389, text: "Magic: BAG" },
      { goToPage: 345, text: "Magic: HOP" },
      { goToPage: 415, text: "Magic: FOF" },
      { goToPage: 325, text: "Magic: DOZ" },
      { goToPage: 227, text: "Fight the Manticore" },
    ],
  },
  196: {
    text: `Cautiously, you leave the village and follow the river upstream for an hour.`,
    choices: [{ goToPage: 231, text: "Continue.." }],
  },
  197: {
    text: `You peer around in the blackness. The Svinns throw you down a 
    torch and tinderbox to light your way. Lighting up the torch you can 
    see you are in a large cavern. Two passageways lead onwards. Will 
    you take the one on the right or the left?`,
    choices: [
      { goToPage: 3, text: "The right passage" },
      { goToPage: 16, text: "The left passage" },
    ],
  },
  198: {
    text: `He motions on ahead, telling you that you will find the village inn 
    shortly on the right. 
    
    By choosing this option, you will now discover one of the rules of the 
    game which you will otherwise only discover by trial and error. The
    adventure is divided into days and each day you will need to eat one 
    meal, otherwise you will lose Stamina points due to undernourishment. 
    Options will be given either to eat Provisions from your pack or 
    to buy food at local inns during the day. If you go for a day without 
    food, you will suffer. When night comes, you will be given the option 
    to sleep or continue through the night. Likewise, if you miss a night's 
    sleep you will also lose Stamina points as you will be tired the next 
    day, although taking a night's rest will usually replenish your 
    stamina. But you will have to choose your times to eat and sleep 
    carefully as sometimes a seemingly 'safe' place to rest and eat may 
    hold hidden dangers! 
    
    You walk on ahead as the villager indicated.`,
    choices: [{ goToPage: 257, text: "Continue.." }],
  },
  199: {
    text: `This node has been refactored out, you shouldnt be here`,
    choices: [{ goToPage: 0, text: "Pretend Death" }],
  },
  200: {
    text: `As you look up, you can see a beehive around which a small swarm of 
    bees are buzzing. Do you want to climb up the tree to investigate or ignore it and continue onwards.`,
    choices: [
      { goToPage: 270, text: "Climb up and investigate" },
      { goToPage: 9, text: "Ignore it and continue" },
    ],
  },
  201: {
    text: `The job is indeed unpleasant. The villager feeds you <b>(gain 2 Stamina 
      points)</b> but you <b>lose 3 Stamina points</b> for missing a night's sleep. 
      You may, if you wish, use your magic to help you with the job`,
    choices: [
      { goToPage: 298, text: "Magic: BIG" },
      { goToPage: 444, text: "Magic: DIP" },
      { goToPage: 362, text: "Magic: FEP" },
      { goToPage: 412, text: "Magic: FIL" },
      { goToPage: 318, text: "Magic: ZAP" },
      { goToPage: 263, text: "Don't use magic" },
    ],
    eaten: true,
    staminaGain: 2,
    staminaLoss: 3,
  },
  202: {
    text: `You leave the mine along the path downwards through the woods. 
    Continuing for a couple of hours it is now late afternoon - you are 
    relieved to see a small village ahead of you, set into the hillside.`,
    choices: [{ goToPage: 28, text: "Continue.." }],
  },
  203: {
    text: `<p>Sensing your attitude, the creature pulls a short sword from its belt. It 
    drops sharply out of the air and nips in at you, slashing at your arm 
    with its weapon, its speed astounds you and before you realize what 
    has happened, the sharp sword has grazed your arm, <b>inflicting 1 
    Stamina point's worth of damage</b>. You may fight this little ELVIN, 
    but during the fight its speed adds two points to its dice roll when 
    calculating Attack Strength:</p>
    
    <p><b>ELVIN Skill 6 Stamina 4</p></b>`,
    choices: [
      { goToPage: 405, text: "Magic: HOT" },
      { goToPage: 294, text: "Magic: ZEL" },
      { goToPage: 441, text: "Magic: WOK" },
      { goToPage: 356, text: "Magic: BIG" },
      { goToPage: 378, text: "Magic: YAZ" },
      {
        goToPage: 121,
        text: "Fight the Elvin",
        fight: { skill: 6, stamina: 4, name: "Elvin" },
      },
    ],
    staminaLoss: 1,
  },
  204: {
    // or waterfall ticket
    text: `The ruffian takes your 3 Gold Pieces and hands you a piece of cloth to 
    use as a towel. Along with two other villagers - and of course Jann the 
    Minimite - you take off your clothes and bathe in the waterfall. You 
    begin to glow and the cool water is not only refreshing but also 
    invigorating. You are bathing in a waterfall with magical healing 
    properties. Your skill, Stamina and Luck scores are restored to 
    their max values for washing away your wounds. The waterfall will 
    also cure you of any diseases you may have picked up (but not 
    curses). Then you return to the village where you pass through the inn.`,
    choices: [{ goToPage: 92, text: "Continue.." }],
  },
  205: {
    text: `Squealing loudly, the Minimite disappears from your shoulder. You 
    are relieved to find that you will be able to make use of your magic 
    once more. The old woman allows you to leave and you continue 
    along the path.`,
    choices: [{ goToPage: 232, text: "Continue.." }],
    loseJann: true,
  },
  206: {
    text: `<p>You are surrounded by dead snakes. Your Luck held out, but your 
    success will not. You have no means of climbing back up to the 
    passage! The rest of your life will now be spent starving to death 
    although if you can stomach raw snake you will live a little longer . . .</>
    <p>Your only remaining chance is if you have not yet called upon Libra</p>`,
    choices: [
      { goToPage: 273, text: "Call on Libra", needLibra: true },
      { goToPage: 0, text: "Death" },
    ],
  },
  207: {
    text: `<p>You enter the cave and can hear a faint whistling which gets louder 
    the deeper you go. A little deeper still into the cave you stumble and 
    fall, and as you do so, the whistling stops. To your horror you realize 
    you have tripped over an enormous foot and, in front of you, a 
    Giant is rubbing its eyes and looking towards you! It grabs a club 
    and picks itself slowly up. You will have to fight it, either with a 
    weapon or magic.</p>
    
    <p><b>HILL GIANT Skill 9 Stamina 11</b></p>`,
    choices: [
      { goToPage: 430, text: "Magic: KIL" },
      { goToPage: 411, text: "Magic: BIG" },
      { goToPage: 384, text: "Magic: YAZ" },
      { goToPage: 361, text: "Magic: YOB" },
      { goToPage: 338, text: "Magic: DUM" },
      {
        goToPage: 265,
        text: "Fight the Hill Giant",
        fight: { skill: 9, stamina: 11, name: "Hill Giant" },
      },
    ],
  },
  208: {
    text: `You may leave the village along one of two paths. One winds up into 
    the hills. The other takes a downhill route into a wood.`,
    choices: [
      { goToPage: 147, text: "Into the hills" },
      { goToPage: 127, text: "Down into the woods" },
    ],
  },
  209: {
    text: `You continue along a riverside path for several hours until you reach a 
    wide bend. In the elbow of the bend ahead you can see a cluster of 
    huts made out of thatched branches and twigs. A fire in the centre of 
    the huts wafts smoke into the air, but not a sound comes from the 
    village. Will you continue ahead into the village or leave 
    the path and go up into the hills to try to avoid it?`,
    choices: [
      { goToPage: 80, text: "Continue into the village" },
      { goToPage: 156, text: "Go up into the hills" },
    ],
  },
  210: {
    text: `The climb continues for two or three hours as the path twists this way 
    and that up the hillside. Soon the air gets cold and the sun sets, 
    making it difficult for you to see. However, the moon is full and will 
    be able to light the way as it gets darker. Would you like to continue 
    further, marching through the night or will you stop and 
    make camp to get some sleep?`,
    choices: [
      { goToPage: 84, text: "March through the night" },
      { goToPage: 283, text: "Stop and make camp" },
    ],
  },
  211: {
    text: `The village inn will charge you 3 Gold Pieces for a night's rest and 2 
    Gold Pieces for nourishing food. Do you wish to buy either of these?`,
    choices: [
      { goToPage: 161, text: "Purchase from the inn", cost: 2 },
      { goToPage: 62, text: "Decline the sale" },
    ],
  },
  212: {
    text: `Continuing along the path and round the side of a hill, you are now 
    becoming increasingly irritated by the Minimite's chattering. You 
    come across a small wooden hut where an old woman sits on the front 
    step. As you pass she calls out to you, inviting you over. Will you see 
    what she wants or ignore her and continue?`,
    choices: [
      { goToPage: 243, text: "See what she wants" },
      { goToPage: 235, text: "Ignore her" },
    ],
  },
  213: {
    text: `She curses as you search the hut. This curse, however, is no idle 
    threat. The <b>Curse of Alianna reduces your Skill score by 2 points</b>
    from now until such time as the curse is removed. Quickly you look 
    through drawers and cupboards but succeed only in finding a <b>pouch 
    containing soft brown sand</b>, and <b>2 Gold Pieces</b>. You take these 
    with you, leave the house and set off again.`,
    choices: [{ goToPage: 278, text: "Continue.." }],
    curseOfAlianna: true,
    getItems: [
      { name: "gold", amount: 2 },
      { name: "sand", amount: 1 },
    ],
  },
  214: {
    text: `The sword has a fine cutting edge and has been honed by a master 
    craftsman. Roll two dice. This is the price in Gold Pieces that the 
    merchant requires for the sword. If you are prepared to pay this price 
    you may purchase it`,
    choices: [
      {
        goToPage: 280,
        text: "Buy the sword, and return to the trader",
        cost: "must roll",
        items: [
          {
            name: "broadsword",
            amount: 1,
          },
        ],
      },
      { goToPage: 280, text: "Do not buy the sword, return to the trader" },
    ],
    extraText: true,
  },
  215: {
    text: `Three Svinns chase you as you run down the hill. They tackle and 
    grapple with you, finally pinning you down. Lose 2 Stamina points 
    for the struggle. They tie you into the rope basket and lower you 
    down the pit.`,
    choices: [{ goToPage: 100, text: "Continue.." }],
    staminaLoss: 2,
  },
  216: {
    text: `The creatures are ELVINS, mischievous little half-humans. They live 
    in a village not far up the river and they are fond of impish pranks. 
    Every so often they will disappear and, as you search round nervously, 
    reappear suddenly in front of you just to make you jump. They are 
    able to turn their glow on and off at will, and another favourite trick is 
    to extinguish their glow and drop down in front of you. More often 
    than not, this means you trip over them, causing considerable merriment 
    to all but you. Nevertheless, you keep your temper. You do 
    appear to be hindering their progress and after an hour or so they tire 
    of you and vanish into the woods along the riverside. You wait in vain 
    for them to reappear and eventually decide to find another suitable 
    shelter for the night to get some sleep. You awake again at sunrise and 
    continue along the path.`,
    choices: [{ goToPage: 148, text: "Continue.." }],
  },
  217: {
    text: `<p>You have been unlucky and are noticed by a small group of 3 Goblins 
    who come at you armed with pickaxes:</p>
    
    <p><b>FIRST GOBLIN Skill 5 Stamina 4</b></p>
    <p><b>SECOND GOBLIN Skill 6 Stamina 4</b></p>
    <p><b>THIRD GOBLIN Skill 5 Stamina 5</b></p>
    
    <p>Attack each in turn.</p>`,
    choices: [
      { goToPage: 428, text: "Magic: HOP" },
      { goToPage: 407, text: "Magic: ZAP" },
      { goToPage: 358, text: "Magic: RAP" },
      { goToPage: 381, text: "Magic: RAW" },
      { goToPage: 442, text: "Magic: RAZ" }, // todo
      {
        goToPage: 155,
        text: "Fight the Goblins",
        fight: {
          skill: 5,
          stamina: 4,
          name: "Goblin 1",
        },
        extraEnemies: [
          { skill: 6, stamina: 4, name: "Goblin 2" },
          { skill: 5, stamina: 5, name: "Goblin 3" },
        ],
      },
    ],
  },
  218: {
    text: `They have taken your backpack and are sorting through it, taking any 
    items they wish. Having done this, and regarding you as fairly 
    harmless, they let you go. 
    
    To decide which items they want, go through all the items you 
    possess one by one and Test your Luck on each. Each time that you are 
    Lucky, the item in question is no use to them and you may keep it. 
    Each time you are Unlucky they will steal this item from you and you 
    must cross it off your Equipment List. Include your Gold - and your 
    Provisions - as single items. You do not have to deduct Luck points 
    each time you Test your Luck here. 
    
    When they have ransacked your possessions, they let you go and you 
    may leave the village.`,
    choices: [{ goToPage: 196, text: "Continue.." }],
    pause: true,
  },
  219: {
    text: `She asks you whether you have any items "of a magical nature". You 
    are naturally a little suspicious and avoid the issue. Eventually she 
    allows you to leave and continue your journey.`,
    choices: [{ goToPage: 232, text: "Continue.." }],
  },
  220: {
    text: `Some way down the hill you stop for a rest. You sit on a boulder to 
    survey what lies ahead. The path leads downwards into a vale. 
    Cradled between three hills is a village - and quite a large one at that. 
    The sun is falling rapidly and you decide to head downwards towards 
    this settlement. An overhanging branch touches your face and you 
    hear a lively chirping. Hovering by your shoulder is a small creature 
    the size of your thumb. It is child-like but very thin, with green skin, 
    and it flits around you on transparent wings. It seems to be quite 
    friendly and alights on your shoulder. You may talk to it
    or try to get rid of it with a spell: `,
    choices: [
      { goToPage: 387, text: "Magic: SIX" },
      { goToPage: 336, text: "Magic: WIX" },
      { goToPage: 451, text: "Magic: HOP" },
      { goToPage: 300, text: "Magic: GAK" },
      { goToPage: 306, text: "Magic: WAL" },
      { goToPage: 171, text: "Talk to it" },
    ],
  },
  221: {
    text: `The cave is not deep and appears to be empty. Rubble, mostly small 
    pebbles, on the floor includes some large items such as a huge broken 
    stool, a net with a very wide mesh and a large skull, human-shaped 
    but well over normal size. All of this leads you to one conclusion; 
    these caves are inhabited by Giants! You take the net, pebbles and two giant teeth from the skull with you,
    unfortuantely the stool is too large to fit in your backpack.
    Then you may leave and go either into the other cave or leave the caves 
    and continue onwards.`,
    choices: [
      { goToPage: 207, text: "Into the other cave" },
      { goToPage: 250, text: "Continue onwards" },
    ],
    getItems: [
      { name: "net", amount: 1 },
      { name: "pebbles", amount: 5 },
      { name: "giantsTeeth", amount: 2 },
    ],
  },
  222: {
    text: `<p>An hour after daybreak you hear noises outside. The door opens and 
    five Svinns come in followed by an old man with grey hair and 
    colourful robes. He announces himself as Proseus, the Svinn chief, 
    and apologizes for having captured you. He nods to a menial who 
    brings in bread and milk. You may eat this meal and <b>recover 2 Stamina 
    points.</b></p>
    
    <p>The chief explains that you have a mission of the utmost importance 
    ahead of you. His young daughter, his only heir, has been captured 
    by marauders and is being offered as a sacrifice to a powerful cave 
    demon. Several of his own men have tried to rescue the girl but so far 
    with no success. "We are a desperate people" explains the chief. "You 
    must be our champion and rescue our heir. If you succeed you may 
    choose your own reward."</p>
    
    <p>It is clear that, in spite of the chiefs apparent good nature, you have 
    little choice in this matter. You are taken out of the village and along a 
    meandering path up another hill. On the top of the hill is a hole in the 
    ground and the Svinns prepare a basket to lower you down into what 
    must be a secret entrance to the demon's cave. Will you try a last 
    attempt at escaping or are you thinking only of the rich 
    treasures you may win?</p>`,
    choices: [
      { goToPage: 215, text: "Try to escape" },
      { goToPage: 100, text: "Go down the hole" },
    ],
    eaten: true,
    staminaGain: 2,
  },
  223: {
    text: `As you move, the creature steps towards you, showing its sharp 
    teeth. Realizing you cannot avoid it without a fight, you step forward.`,
    choices: [{ goToPage: 252, text: "Continue.." }],
  },
  224: {
    text: `You lose 2 Stamina points for continuing through the night 
    without rest. Just before sunrise you pause briefly to take your 
    bearings in the morning light.`,
    choices: [{ goToPage: 148, text: "Continue.." }],
    staminaLoss: 2,
  },
  225: {
    text: `He places the coins in a pouch around his waist. 'The lowerway leads 
    through the Vale of the Elvin' he tells you, 'and unless you are 
    prepared for Elvin ways - for they are mischievous and magical - you 
    had better avoid this path. The high way takes you up into the hills 
    past the Schanker Mines,' He laughs, and adds: 'But you must keep 
    your head if you take this path! Head onwards for Kristatanti, which 
    you will reach in a day or two, for few villages in the Shamutanti Hills 
    welcome strangers, and at Kristatanti you will at least find food and 
    shelter. And beware the Black Lotus on your travels - its sweet aroma 
    is deadly. You thank him for his advice and press onwards.`,
    choices: [{ goToPage: 81, text: "Continue.." }],
  },
  226: {
    text: `You leave the village. Sitting against the wall on the way out is a blind 
    beggar and, as you pass, he asks you for money. He looks a sorry sight: 
    skinny and sparsely clothed. His eyes are painted with a dark dye to 
    indicate his blindness. You are considering whether to toss him a 
    Gold Piece when an ox cart comes up the road. Seeing you are a 
    stranger, the driver asks you if you would like a lift. Will you accept 
    his offer or refuse and instead toss the beggar a Gold Piece?`,
    choices: [
      { goToPage: 129, text: "Accept the lift" },
      { goToPage: 244, text: "Give the beggar some gold", cost: 1 },
    ],
  },
  227: {
    text: `<p>Draw your weapon and fight:</p> 

    <p><b>MANTICORE Skill 12 Stamina 18</b></p>
    
    <p>Each time the creature inflicts a wound on you, one die will be rolled. 
    A roll of a 5 or 6 indicates a hit with its scorpion-like tail containing a 
    poison which will cause 4 extra Stamina points' worth of damage unless 
    you successfully Test your Luck. If a roll is 1-4, the attack is normal.</p>`,
    choices: [
      {
        goToPage: 456,
        text: "Fight the Manticore",
        fight: { skill: 12, stamina: 18, name: "Manticore" },
      },
    ],
  },
  228: {
    text: `You will have to heave with every ounce of strength in your body to 
    force the door open. Throw one die three times. If the total thrown is 
    less than your Skill score, the door breaks open and you may escape 
    - but you must lose 1 Skill point. If the total thrown 
    equals or exceeds your Skill score, the door will not budge and you 
    will be trapped in the cave-in unless you can call for help from your 
    goddess Libra.`,
    choices: [
      {
        goToPage: 120,
        text: "Dice roll - Success",
        blocked: true,
        caveIn: true,
      },
      { goToPage: 0, text: "Dice roll - Fail", blocked: true },
      { goToPage: 160, text: "Call Libra", needLibra: true, blocked: true },
    ],
    extraText: true,
  },
  229: {
    text: `One of the merchants has a friend who needs a cesspit in his back yard 
    filling in and a fresh one digging. This will take you most of the night 
    to do, but he will feed and pay you. If you wish to take up this offer? 
    If not, you must look for the inn.`,
    choices: [
      { goToPage: 201, text: "Carry out the work" },
      { goToPage: 134, text: "Look for the inn" },
    ],
  },
  230: {
    text: `You enter the tavern and call to the proprietor. Glandragor himself 
    comes out. He is a kindly type and is always happy to talk to 
    strangers. He is also a businessman, and a <b>mug of ale will cost you 2 
    Gold Pieces</b>, Will you pay up and drink your ale and talk to him?
    Or do you have something for him?`,
    choices: [
      { goToPage: 191, text: "Buy the drink and talk", cost: 2 },
      { goToPage: 182, text: "I have something for him" },
      { goToPage: 92, text: "Don't buy a drink" },
    ],
  },
  231: {
    text: `Further along the river is another bridge over which the path leads. 
    You cross the bridge and start heading up into the hills. The path 
    winds for some time, taking the gradient leisurely. Suddenly an acorn 
    lands on your head and you hear a tittering coming from the trees 
    above. Looking up you can see tiny figures high in the branches, 
    flying from tree to tree. Another acorn falls, then another. You are 
    being pelted by ELVINS! You may protect yourself with a spell:`,
    choices: [
      { goToPage: 359, text: "Magic: ZIP" },
      { goToPage: 408, text: "Magic: FOF" },
      { goToPage: 296, text: "Magic: WOK" },
      { goToPage: 382, text: "Magic: HOP" },
      { goToPage: 340, text: "Magic: YAG" },
      { goToPage: 85, text: "Don't use a spell" },
    ],
  },
  232: {
    text: `It is now late afternoon. You pass over the brow of the next hill and 
    below you is a village. The path leads into this village and you have 
    little choice but to enter Torrepani. 
    
    Torrepani is inhabited by the SVINNS, an aggressive-looking race of 
    man-orcs. But as you enter the village, an air of depression hanging 
    over the place becomes quite apparent. The Svinns take no notice of 
    you and you sit down on a tree stump in the centre of the village 
    surveying the miserable creatures. Will you head for the inn to spend 
    the night or attempt to make contact with the villagers?`,
    choices: [
      { goToPage: 267, text: "Head for the inn" },
      { goToPage: 282, text: "Try to talk to the villagers" },
    ],
  },
  233: {
    text: `The old man's eyes light up as you produce the axe. Where did you 
    get that?' he exclaims. You tell him the story and he takes it from you, 
    overjoyed. Handing you a free mug of ale (you <b>add 2 Stamina 
    points</b> for this) he is overwhelmingly grateful and wishes to tell you 
    all he knows to help you. 'First of all' he says, 'you should visit the 
    Crystal Waterfall. It has great powers of healing and soothing. <b>Here is 
    a pass</b> which will allow you past the guardian (you need not pay if you 
    go). When you leave Birritanti you will reach Khare through Torrepani. 
    The Svinns live in Torrepani and no doubt their chief will try to 
    persuade you to help find his daughter. She has been carried off by 
    marauders and left as a sacrifice in a dark cave guarded by a deadly 
    Manticore. After Torrepani you will reach Khare within a day. In fact I 
    am well connected in Khare. If you have any problems in Khare, just 
    call for VIK, a friend of mine who has power and influence. In Khare
    VIK will be given as a spell option in some encounters. If given such an 
    option, you may choose it to take advantage of Glandragor's connections. 
    Glandragor also offers you a sword — a sturdy but ordinary 
    one - as a replacement weapon and wishes you well as you leave. 
    <b>Add 3 Luck points</b> for finding Glandragor. You may head for either 
    the Crystal Waterfall or the inn.`,
    choices: [
      { goToPage: 102, text: "Crystal Waterfall" },
      { goToPage: 92, text: "Inn" },
    ],
    getItems: [
      {
        name: "waterfallPass",
        amount: 1,
      },
      {
        name: "axe",
        amount: -1,
      },
      {
        name: "glandragorSword",
        amount: 1,
      },
    ],
    staminaGain: 2,
    luckGain: 3,
  },
  234: {
    text: `The gate is open, but you are wary of continuing. This is no normal 
    gate: it stands two or three times the size of any you have seen before. 
    But the only way on is through it, so you continue - though carefully. 
    
    To the right, the hill rises sharply upwards and you can see two caves. 
    Will you enter the right-hand cave, the left-hand cave 
    or will you continue past the caves along the path?`,
    choices: [
      { goToPage: 207, text: "Right hand cave" },
      { goToPage: 221, text: "Left hand cave" },
      { goToPage: 82, text: "Continue past the caves" },
    ],
  },
  235: {
    text: `She shouts loudly after you and orders you back. She seems most 
    indignant that you have chosen to ignore her and warns you that you 
    will not go unpunished. Jann is curious and suggests you return to 
    the hut. Do you want to go back and see what she wants or
    continue regardless?`,
    choices: [
      { goToPage: 243, text: "See what she wants" },
      { goToPage: 269, text: "Ignore her" },
    ],
  },
  236: {
    text: `Test your Luck`,
    choices: [
      { goToPage: 118, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 223, text: "Test your Luck - Fail", luck: "failed" },
    ],
    testLuck: { optional: false },
    pause: true,
  },
  237: {
    text: `You continue up the hill. The climb is steep, but by mid-afternoon you 
    have reached the top. Continuing over the hill, you travel down a 
    gentle slope for the rest of the afternoon.`,
    choices: [{ goToPage: 220, text: "Continue.." }],
  },
  238: {
    text: `Your guess is incorrect. With a wave of the hunchback's hand you feel 
    a sharp pain surge through your body. <b>Lose 2 Stamina points and 1 
    Luck point</b> and return to the junction to take the other path.`,
    choices: [{ goToPage: 38, text: "Continue.." }],
    staminaLoss: 2,
    luckLoss: 1,
  },
  239: {
    text: `The door opens on well-oiled hinges and you are in a pitch-black 
    passageway. You may cast a spell or grope down the passageway in the dark. 
    You may decide against this passage and return through the room to the junction.`,
    choices: [
      { goToPage: 372, text: "Magic: SUS" },
      { goToPage: 349, text: "Magic: FAR" },
      { goToPage: 422, text: "Magic: FIX" },
      { goToPage: 398, text: "Magic: BAG" },
      { goToPage: 454, text: "Magic: HOW" },
      { goToPage: 6, text: "Grope down the passageway" },
      { goToPage: 120, text: "Go back to the junction" },
    ],
  },
  240: {
    text: `I have in my house Ragnar's Armband of Swordmastery, which I will 
    gladly give to you if you will free me' she promises. Will you try to 
    open the cage as she wishes or doublecross her and search 
    around for it anyway?`,
    choices: [
      { goToPage: 4, text: "Try to open the cage" },
      { goToPage: 213, text: "Doublecross her" },
    ],
  },
  241: {
    text: `Do you wish to draw your weapon or cast a spell?`,
    choices: [
      { goToPage: 2, text: "Draw your weapon" },
      { goToPage: 275, text: "Cast a spell" },
    ],
  },
  242: {
    text: `A short while later, two Head Hunters return and take you from the 
    cage. As they bustle you towards the pot, now steaming as the water 
    heats, you receive a blow on the head. You slump unconscious and 
    never re-awaken. You will provide the natives with fresh meat 
    tonight . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    dead: true,
  },
  243: {
    text: `The old woman invites you into her house and bids you sit down. She 
    is lonely on her own in the woods and appreciates the company of 
    others. Offering you a drink, she shuffles off into the kitchen and 
    returns with two large cups of tea, and one tiny one. Jann is a little 
    suspicious and tells you so. The old woman glares at him and 
    expresses openly her disgust for Minimites. She has forgotten the pot 
    and returns to the kitchen to fetch it. You may, if you wish, switch 
    your cup of tea with hers or you may wait for her to return 
    and drink the one she has given you.`,
    choices: [
      { goToPage: 48, text: "Switch the cups before she returns" },
      {
        goToPage: 146,
        text: "Drink the tea given to you and wait for her to get back",
      },
    ],
  },
  244: {
    text: `You toss him a Gold Piece. 'You are kind, traveller' the beggar says. 
    Feeling the coin he becomes excited. 'Why, this is a Gold Piece! he 
    exclaims. 'You are too generous to a poor sightless beggar. Generosity 
    of this sort must not go unrewarded!' Taking a copper key from his 
    pocket he gives it to you, insisting that you take it. 'Years ago I lived in 
    Khare,' he tells you. 'Khare was my home and in the cityport I 
    watched over prisoners in the dungeon. But Khare is an evil place, 
    inhabited by all manner of creatures. <b>Beware the Red-Eyes in Khare</b> or 
    my fate will befall you and you too will have to turn to begging for a 
    living. Khare is also wary of strangers, but this key will help you 
    should you be captured by the city guards.' The key has a number, 
    206, stamped into it. You thank the beggar and continue.`,
    choices: [{ goToPage: 58, text: "Continue.." }],
    getItems: [
      {
        name: "khareKey2",
        amount: 1,
      },
      { name: "gold", amount: -1 },
    ],
  },
  245: {
    text: `You creep by the sentry post unnoticed.`,
    choices: [{ goToPage: 237, text: "Continue.." }],
  },
  246: {
    text: `As the second day of your journey breaks, you march through the 
    cool morning air of the hills, having now climbed several hundred 
    feet. You reach the brow of a hill and stop in your tracks. To your left is 
    a clearing in which several poles are firmly planted in the ground. 
    Atop the poles are heads - some recently fixed, some semi-decayed - 
    human heads, Goblin heads, and one or two heads of creatures you 
    do not recognize, all with sewn-up eyes and mouths. A large X 
    painted on a broad tree is obviously intended as a warning to venture 
    no further. Ahead the path forks to the right and left, but you cannot 
    be sure which path you are warned not to take! Will you continue 
    your climb along the right-hand path or take the left-hand 
    path which winds down the side of the hill?`,
    choices: [
      { goToPage: 68, text: "Take the right hand path" },
      { goToPage: 40, text: "Take the left hand path" },
    ],
  },
  247: {
    text: `The skullcap has been stolen from a priest of Daddu-Ley. It has no 
    magical properties of its own but may be useful in spells.`,
    choices: [{ goToPage: 75, text: "Continue.." }],
    getItems: [{ name: "skullcap", amount: 1 }],
  },
  248: {
    text: `She hands you a small box. Opening the box you find it contains a 
    miniature vial of glue, a pair of strange-looking nose plugs and four 
    small pebbles - all useful in creating spells.`,
    choices: [{ goToPage: 87, text: "Continue.." }],
    getItems: [
      { name: "glue", amount: 1 },
      { name: "nosePlugs", amount: 1 },
      {
        name: "pebbles",
        amount: 4,
      },
    ],
  },
  249: {
    text: `The flute is made of bamboo and you blow it. It gives off a lively little 
    note. You take this with you.`,
    choices: [{ goToPage: 126, text: "Continue.." }],
  },
  250: {
    text: `You leave Lea-Ki, the domain of the Hill Giants, and head onwards. It 
    is late afternoon and you may choose either a path running down the 
    hill or a path running along the crest of the hill.`,
    choices: [
      { goToPage: 176, text: "Path down the hill" },
      { goToPage: 188, text: "Path running along the crest" },
    ],
  },
  251: {
    text: `The box is empty. But as you look inside, smoke begins to swell up 
    from its depths. The smoke builds up and rises from the box in front of 
    you. Slowly, a face forms in the air; a thin, elf-like face. You watch, 
    transfixed, and suddenly its eyes flick open. Their piercing stare 
    reaches deep into your mind, and you are unable to move. 'Stranger' 
    the mouth speaks, 'you tamper with forces you know nothing of. I am 
    aware of your quest. You cannot succeed!' 
    
    Will you use a spell, or will you try to escape from the room?`,
    choices: [
      { goToPage: 455, text: "Magic: FOG" },
      { goToPage: 403, text: "Magic: MAG" },
      { goToPage: 293, text: "Magic: RIS" },
      { goToPage: 377, text: "Magic: RAN" },
      { goToPage: 354, text: "Magic: GAK" },
      { goToPage: 124, text: "Try to escape from the room" },
    ],
  },
  252: {
    text: `Will you fight it with your weapon or with a magic spell?`,
    choices: [
      { goToPage: 20, text: "Use your weapon" },
      { goToPage: 166, text: "Use a magic spell" },
    ],
  },
  253: {
    text: `Your guess is incorrect. With a wave of the hunchback's hand you feel 
    a sharp pain surge through your body. Lose 2 Stamina points and 1 
    Luck  point and return to the junction to take the other path`,
    choices: [{ goToPage: 38, text: "Continue.." }],
    staminaLoss: 2,
    luckLoss: 1,
  },
  254: {
    text: `You race off into the woods in case the commotion attracts any other 
    creatures. For half an hour you run before you stop to rest, when you 
    realize that you are now hopelessly lost. Which direction will you 
    take? Throw one die. If you throw a 1 or a 2, you continue uphill until 
    you reach a path. If you roll a 3 or 4, you just head in the 
    direction you were travelling until you reach a path. If you 
    roll a 5 or 6, you take a downhill course until you reach a well-trodden 
    path.`,
    choices: [
      { goToPage: 68, text: "Dice roll: 1 or 2 - Uphill", blocked: true },
      {
        goToPage: 13,
        text: "Dice roll: 3 or 4 - Same direction",
        blocked: true,
      },
      { goToPage: 98, text: "Dice roll: 5 or 6 - Downhill", blocked: true },
    ],
    extraText: true,
  },
  255: {
    text: `The door opens. The room inside is dirty and sooty with dust from the 
    mines. It is square, and a door opposite leads onwards. Sitting behind 
    a makeshift desk is a large, filthy GOBLIN who raises his head and 
    sniffs the air as you walk in. His face is black with soot. Your smell is 
    strange, intruder!' he challenges. 'You are net permitted here!' Will 
    you prepare to fight him or leave as he wishes?`,
    choices: [
      { goToPage: 47, text: "Prepare to fight" },
      { goToPage: 120, text: "Leave as he wishes" },
    ],
  },
  256: {
    text: `The creature roars and reaches down to grab you. Unable to avoid it, 
    you feel yourself gripped between its great thumb and forefinger. The 
    pain is excruciating as the creature squeezes but there is nothing you 
    can do. The Giant crushes you to death . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you have died
    dead: true,
  },
  257: {
    // this buying of provisions is working and fixed (unique node)
    text: `The inn offers hot meals for sale and if you wish to stop and eat the 
    charge will be 1 Gold Piece. Bread and goat's cheese are also available 
    if you wish to buy food to take with you, and the price of two meals
    worth is 2 Gold Pieces. If you wish to buy Provisions, do so and pay the 2 Gold Pieces. 
    You can sit down and eat or you can continue.`,
    choices: [
      { goToPage: 116, text: "Sit down and eat", cost: 1 },
      { goToPage: 131, text: "Continue" },
    ],
    extraText: true,
  },
  258: {
    text: `You flip open the top of the box and jump back quickly. Inside the box 
    are 5 Gold Pieces and a key, but these are guarded by a vicious 
    SCORPION. You may try if you wish to grab either the Gold Pieces 
    or the key -but only one item at a time (i.e. Gold Pieces one by one). 
    Each time you attempt a grab, Test your Luck. If you are Lucky, you 
    succeed in grabbing an object. If you are Unlucky, you are stung by 
    the Scorpion and must lose half your Stamina (rounded down).
    When you are finished with this box you may either try the other one or leave the village.`,
    choices: [
      { goToPage: 251, text: "Try the other box" },
      { goToPage: 196, text: "Leave the village" },
    ],
    extraText: true,
  },
  259: {
    text: `You manage to avoid the Goblins and sneak off along a downhill path 
    into the woods.`,
    choices: [{ goToPage: 202, text: "Continue.." }],
  },
  260: {
    text: `You are forced upwards against the ceiling as the water level rises. But 
    Libra has not deserted you and an air pocket forms around your head.
    As you thrash about in the water, you are able to breathe easily and 
    soon you relax knowing you are safe. After several minutes, the 
    water drains off, leaving you on the ground unharmed, although 
    somewhat damp. The cieling wall disappears into the floor and you 
    return to the large chamber to choose another passage. Will you take 
    the right-hand path or the left-hand path?`,
    choices: [
      { goToPage: 3, text: "Right-hand path" },
      { goToPage: 16, text: "Left-hand path" },
    ],
    usedLibra: true,
  },
  261: {
    text: `As you unstrap the pack, one of the bandits grabs it from your hands 
    while the other leaps at you and clouts you with the hilt of his sword.
    You fall to the ground dazed and the bandits make off with your 
    belongings. Lose 2 Stamina points. <b>You have now lost everything you 
    were carrying in the backpack</b> including gold and Provisions (but not 
    your equipped weapon). Eventually you pick yourself up and continue your 
    journey.`,
    choices: [{ goToPage: 131, text: "Continue.." }],
    staminaLoss: 2,
  },
  262: {
    text: `You are correct. The hunchback stands aside to let you pass. As you 
    start across the bridge he wishes you well on your way. You march 
    swiftly across in case he may have some other trap in store. But 
    instead he calls out a due which may be useful in the journey ahead. 

    He is a sly old creature and you must be careful to mark his words 
    well: 
    
    'Beware the lair of the cave-demon's maze,
    For traps as deadly as Medusa's gaze.
    Greet travellers who, of Luck bereft, 
    Take passageways not to the left.'
    
    You consider these words as you cross the valley. You <b>add 2 
    Luck points</b> for your success. On the other side of the bridge you 
    follow the path over the hill and down the other side. It is now late 
    afternoon.`,
    choices: [{ goToPage: 220, text: "Continue.." }],
    luckGain: 2,
  },
  263: {
    text: `You finish the job well and in good time and the villager pays you 3 
    Gold Pieces. You leave Dhumpus in the early morning light.`,
    choices: [{ goToPage: 208, text: "Continue.." }],
    getItems: [{ name: "gold", amount: 3 }],
  },
  264: {
    text: `He grunts and motions for you to follow, taking you through the 
    village to a large hut. Inside, you discover that the building is 
    evidently a storage house and a quartermaster, somewhat plumper 
    than your guide, is seated at a table. The villager explains you wish to 
    do business and leaves you with the fat man, who bids you take a 
    seat. The merchant has the following items for sale:`,
    choices: [
      { goToPage: 107, text: "Herbalist's potion" },
      { goToPage: 214, text: "Fine-edged broadsword" },
      { goToPage: 22, text: "Musical flute" },
      { goToPage: 141, text: "Axe with strange carvings" },
      { goToPage: 5, text: "Bag containing teeth" },
      { goToPage: 60, text: "Fine, glittering jewel" },
      { goToPage: 163, text: "None of these interest me" },
    ],
  },
  265: {
    text: `Exhausted from the battle, you examine the Giant and its domain as 
    you recover your breath. A pouch around its waist <b>contains 8 Gold 
    Pieces</b>. You also take some teeth knowing they are useful for spells.
    A large loaf in the cave is too large for you to carry, but you 
    may eat from it if you wish or continue your journey.`,
    choices: [
      { goToPage: 284, text: "Eat from the loaf" },
      { goToPage: 250, text: "Continue" },
    ],
    getItems: [
      { name: "gold", amount: 8 },
      { name: "giantsTeeth", amount: 2 },
    ],
  },
  266: {
    text: `You find an ale-house and walk in. Gruff voices come from inside, but 
    when you enter, the drinkers watch you suspiciously and the noise 
    subsides. Several Hill Dwellers sit around a table. The owner of the 
    house tells you that you are in the village of Kristatanti and that a mug 
    of ale will cost you 1 Gold Piece, If you cannot afford this price you will 
    have to leave the ale-house. Otherwise you may pay him, 
    take your drink and sit down at the table next to an old, wrinkled man 
    or a younger man with sharp features?`,
    choices: [
      { goToPage: 62, text: "Leave the alehouse" },
      { goToPage: 192, text: "Buy a drink and talk to the old man", cost: 1 },
      { goToPage: 96, text: "Buy a drink and talk to the young man", cost: 1 },
    ],
  },
  267: {
    text: `The inn serves hot food for 3 Gold Pieces and you may eat here if you 
    can afford it. If you have not yet eaten today, add 2 Stamina points if 
    you buy a meal (1 Stamina point if you have already eaten). A bed for 
    the night costs 5 Gold Pieces. Do you want to sleep here or
    would you rather leave the village and sleep rough?`,
    choices: [
      { goToPage: 8, text: "Buy a room for the night", cost: 5 },
      { goToPage: 35, text: "Leave and sleep rough" },
    ],
    eatOption: { haveEaten: 1, haveNotEaten: 2, cost: 3, name: "meal" },
  },
  268: {
    text: `The door is locked. You may try charging the door down
    or you may cast a spell;`,
    choices: [
      { goToPage: 351, text: "Magic: DOM" },
      { goToPage: 311, text: "Magic: PAP" },
      { goToPage: 374, text: "Magic: HUF" },
      { goToPage: 449, text: "Magic: HOW" },
      { goToPage: 291, text: "Magic: DOP" },
      { goToPage: 93, text: "Charge the door" },
    ],
  },
  269: {
    text: `Now screaming at you, she calls loudly into the air. A cracking to your 
    left makes you wheel round, just in time to see a tree swaying as its 
    trunk splits and it falls towards you. Test your Luck, If you are Lucky, 
    you spring aside just before it topples on you. If you are Unlucky, you 
    are too late and the tree lands on you, crushing you and your 
    miniature companion to death.`,
    choices: [
      { goToPage: 276, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 0, text: "Test your Luck - Fail", luck: "failed" }, // todo Leads to death
    ],
    testLuck: { optional: false },
    pause: true,
  },
  270: {
    text: `<p>The bees swarm around you but you are powerless to defend yourself 
    as you must use your hands to grip the tree. Throw one die. If you 
    throw a 1-4, then this is the number of Stamina points you lose as 
    the bees sting you. If you roll a 5 or 6, you are lucky and avoid being 
    stung. When you reach the hive, you knock it down to the ground.</p>
    
    <p>Cutting open the hive on the ground, <b>you take with you the wax 
    and the honey.</b> The honey will provide you with enough nourishment for one meal.</p>`,
    choices: [{ goToPage: 9, text: "Continue" }], // todo roll dice take damage + add items
    getItems: [
      { name: "provisions", amount: 1 },
      {
        name: "beeswax",
        amount: 1,
      },
    ],
    pause: true,
  },
  271: {
    text: `You try knocking on another door. This time a voice calls 'Who is 
    it?' and you enter.`,
    choices: [{ goToPage: 158, text: "Continue.." }],
  },
  272: {
    text: `As you bite into your bread, a sharp pain in your leg makes you swing 
    round. In a tree a short distance away, you can see the black face of a 
    HEAD HUNTER leering at you as it lowers a blowpipe. You become 
    dizzy and pass out as the poison takes effect. Your head will soon be 
    joining the others on a pole at the last junction . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    dead: true,
  },
  273: {
    text: `Before your eyes the snakes form a living ladder, stretching back up to 
    the passage above! When it is formed, you may climb back up and 
    return to the main chamber, where you may take either the right- 
    hand or the left-hand passage. 
    You cannot call on Libra again now.`,
    choices: [
      { goToPage: 3, text: "Take the right-hand" },
      { goToPage: 6, text: "Take the left-hand" },
    ],
    usedLibra: true,
  },
  274: {
    text: `You open the stopper on the bottle of potion and take a sniff. Phew! 
    The pungent odour of Blimberry juice hits your nostrils. Blimberry is a 
    strange fruit which ordinarily would never be eaten by humans or 
    animals (having such a foul smell). But its medicinal properties have 
    been discovered by all species and it appears to be nature's healer. 
    You may take this potion at any time, except in battle, to restore 3 
    Stamina points. Or you may use the potion in sorcery. There is 
    enough in the bottle for one dose.`,
    choices: [{ goToPage: 126, text: "Continue.." }],
  },
  275: {
    text: `You snatch your arm back against the pull and, as you do so, a shape 
    begins to form in front of you. You are now facing a large, two-tailed 
    SERPENT which hisses menacingly at you. One of its tails is wrapped around your arm. 
    Which spell will you use? 
    
    If you cannot, or choose not to, use any of these, you will have to arm yourself.`,
    choices: [
      { goToPage: 314, text: "Magic: KIL" },
      { goToPage: 404, text: "Magic: SUN" },
      { goToPage: 334, text: "Magic: GOP" },
      { goToPage: 355, text: "Magic: LAW" },
      { goToPage: 426, text: "Magic: HOW" },
      { goToPage: 2, text: "Arm yourself" },
    ],
  },
  276: {
    // If you are here you will die
    text: `As you pick yourself up, the old woman suddenly appears in front of 
    you. 'You may not ignore the invitation of Gaza Moon!' she says, and 
    she points a finger at you. A blue crackle from her hand takes you 
    unawares as a lightning blast flies towards you. Which spell will you defend yourself with?`,
    choices: [
      { goToPage: 322, text: "Magic: ZIP" },
      { goToPage: 434, text: "Magic: GUM" },
      { goToPage: 418, text: "Magic: LAM" },
      { goToPage: 304, text: "Magic: FIL" },
      { goToPage: 392, text: "Magic: SUS" },
    ],
  },
  277: {
    text: `The fall is not too far, but there is a chance of injury. Throw two dice 
    and compare the total with your Luck score. If the total is less than 
    your luck, you are unhurt. If the total equals your luck, deduct 1 
    Stamina point for minor bruising. If the total exceeds your luck, 
    deduct 3 Stamina points as you have badly twisted your arm. If you 
    throw a double six then you have landed on your head, breaking your 
    neck in the fall and your adventure ends here.`,
    choices: [
      { goToPage: 110, text: "Continue.." },
      { goToPage: 0, text: "Rolled double six" },
    ],
    extraText: true,
  },
  278: {
    text: `You follow the path back up to the junction and continue towards 
    Dhumpus.`,
    choices: [{ goToPage: 54, text: "Continue.." }],
  },
  279: {
    text: `When you awake, you find yourself inside a hut with your hands 
    bound. Seeing you stir, a creature by the door jumps to its feet. In fact 
    it jumps above its feet and now hovers attentively in the air, watching 
    you. Your guard is man-like but short and thin. You have been 
    captured by ELVINS! 
    
    Elvins are impish creatures, more mischievous than malevolent. 
    They love pranks and practical jokes. Soon several have gathered in 
    your room. They ask whether you are a magician and, if so, will you 
    show them some tricks?`,
    choices: [
      { goToPage: 132, text: "Perform magic for them" },
      { goToPage: 218, text: "Don't perform magic for them" },
    ],
  },
  280: {
    text: `If you have investigated only one or two of his offerings, you may 
    choose another from the list below. But if you have considered three 
    artefacts already, you may not try a fourth and you must leave the 
    merchant.`,
    choices: [
      { goToPage: 107, text: "Herbalist's potion" },
      { goToPage: 214, text: "Fine-edged broadsword" },
      { goToPage: 22, text: "Musical flute" },
      { goToPage: 141, text: "Axe with strange carvings" },
      { goToPage: 5, text: "Bag containing teeth" },
      { goToPage: 60, text: "Fine, glittering jewel" },
      { goToPage: 91, text: "Leave the merchant" },
    ],
    extraText: true,
  },
  281: {
    text: `Test your Luck. If you are Lucky, they do not notice you - you go back 
    to sleep and set off again at sunrise. If you are Unlucky, 
    one of them sees you across the stream and points you out to the 
    others.`,
    choices: [
      { goToPage: 148, text: "Test your Luck - Success", luck: "success" },
      { goToPage: 12, text: "Test your Luck - Fail", luck: "failed" },
    ],
    testLuck: { optional: false },
    pause: true,
  },
  282: {
    text: `You approach a group of Svinns deep in conversation and take a seat 
    with them. They are discussing a friend, apparently killed in the night 
    by an assassin's blade. Gradually you work your way into the 
    conversation and you soon learn the reason for the depression which 
    hangs over the village. The village chief's daughter has been captured 
    by a band of marauders and offered as a sacrifice to a powerful cave 
    demon. According to an ancient prophecy, a dreadful scourge will 
    overrun the village if the chiefs line ever ends - and his daughter is 
    the chief's only heir. 
    
    You tell them of your own travels and the creatures you have met. 
    They realize you are a truly heroic adventurer and become very 
    interested in you. Suddenly one springs at you while another runs off 
    into the village. You are held fast in a vice-like grip, but as you 
    struggle more Svinns arrive. They march you off to a hut at the edge of 
    the village.`,
    choices: [{ goToPage: 71, text: "Continue.." }],
  },
  283: {
    text: `<p>You settle down to make camp for the night. You may take Provisions 
    here and, if you do so, you may add 2 Stamina points if you have not 
    yet eaten since leaving Analand, or 1 Stamina point if you have 
    already eaten on your journey. You may only eat if you have Provisions with you. 
    As you curl up in your blanket to sleep, there is a 
    chance that you may encounter a wandering night creature.</p>

    <p>Night creatures are less likely to approach you in your camp, so 2 points 
    will be added to the die roll you will be required to make.</p>
    
    <p>After your night's sleep you will gain 2 Stamina points, if you 
    encountered no night creatures. Or 1 Stamina point if your sleep was 
    disturbed. Then you set off along the trail.</p>`,
    choices: [{ goToPage: 123, text: "Check if any creatures attack you" }],
    eatOption: { haveEaten: 1, haveNotEaten: 2 },
  },
  284: {
    text: `The loaf is not particularly pleasant, but is fairly nourishing. You may 
    make a meal of it and <b>restore 2 Stamina points.</b>`,
    choices: [{ goToPage: 250, text: "Continue.." }],
    eaten: true,
    staminaGain: 2,
  },
  285: {
    text: `<p>You may either fight the Ogre with your weapon or cast a spell.</p>

    <p><b>OGRE Skill 8 Stamina 7</b></p>`,
    choices: [
      { goToPage: 400, text: "Magic: WOK" },
      { goToPage: 352, text: "Magic: WAL" },
      { goToPage: 331, text: "Magic: KIL" },
      { goToPage: 375, text: "Magic: DIM" },
      { goToPage: 312, text: "Magic: ROK" },
      {
        goToPage: 15,
        text: "Fight the Ogre",
        fight: { skill: 8, stamina: 7, name: "Ogre" },
      },
    ],
  },
  286: {
    text: `As you have no doubt already learned, Jann will not leave you. And 
    while he is with you, your magic will not work. You may not use any 
    spells until you rid yourself of this little pest.`,
    choices: [{ goToPage: 197, text: "Continue.." }],
  },
  287: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 87, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  288: {
    text: `Deduct 4 Stamina points. Your spell creates an invisible force field 
    around you. Try as they may, the Bandits cannot harm you or even 
    get close to you. Realizing the power of your sorcery, they run back 
    into the village, allowing you to continue.`,
    choices: [{ goToPage: 131, text: "Continue.." }],
    staminaLoss: 4,
  },
  289: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 47, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  290: {
    text: `Deduct 5 Stamina points. There is no such spell as this. You fall 
    down into the pit.`,
    choices: [{ goToPage: 277, text: "Continue.." }],
    staminaLoss: 5,
  },
  291: {
    text: `Deduct 2 Stamina points. The door shudders and the handle turns. 
    On your guard, you watch as it opens, allowing you into the room inside.`,
    choices: [{ goToPage: 39, text: "Continue.." }],
    staminaLoss: 2,
  },
  292: {
    text: `Deduct 2 Stamina points. You concentrate and slowly focus your 
    mind on a large rock in the corner of the hut. Before their eyes, this 
    rock turns into a glittering pile of treasure. They gasp, as they can see 
    jewels, gold, silver and gems forming from nothing. They chatter 
    excitedly and nod towards you, smiling happily. One of them ventures 
    over to touch the treasure and, as he does so, you release the 
    spell. The Elvins are impressed with your trick and return your backpack, 
    soon allowing you to leave the village.`,
    choices: [{ goToPage: 196, text: "Continue.." }],
    staminaLoss: 2,
  },
  293: {
    text: `Deduct 5 Stamina points. There is no such spell as this, and the spirit 
    laughs as you try to cast it.`,
    choices: [{ goToPage: 124, text: "Continue.." }],
    staminaLoss: 5,
  },
  294: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 203, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  295: {
    text: `Deduct 2 Stamina points. You cast your spell and, with a flash, five 
    replicas of yourself appear in front of the creature. It chooses one of 
    these images to attack. Roll a die, if it is a one you have been unlucky and 
    attacks the real you! If it choose the real you, you must fight the monster. If it does not 
    choose the real you, you may escape from it and continue.`,
    choices: [
      { goToPage: 20, text: "Roll a 1: Fight", blocked: true },
      { goToPage: 193, text: "Roll a 2 - 6: Continue", blocked: true },
    ],
    staminaLoss: 2,
    extraText: true,
  },
  296: {
    text: `Deduct 1 Stamina point. Do you have a Gold Piece with you? If not, 
    your spell will not work. If you have a Gold Piece, you 
    place it on your wrist and cast your spell. An invisible shield forms 
    around it, large enough for you to hide behind. You are able to pass 
    safely through the hail of acorns - but you lose your Gold Piece.`,
    choices: [
      { goToPage: 85, text: "Spell fails: I don't have a gold piece" },
      { goToPage: 7, text: "Continue", cost: 1 },
    ],
    staminaLoss: 1,
  },
  297: {
    text: `Deduct 4 Stamina points. You hold up your hand and cast the spell. 
    A small burning fireball materializes in your palm and you fling it at 
    the Wood Golem. The creature catches fire immediately and shrieks 
    loudly. Alianna runs off for water to douse the fire before her house 
    goes up, and you make a hasty exit.`,
    choices: [{ goToPage: 169, text: "Continue.." }],
    staminaLoss: 4,
  },
  298: {
    text: `Deduct 2 Stamina points. You cast your spell and wait for it to take 
    effect. Almost immediately, you start to expand. Your whole body 
    begins to grow until you are almost three times your normal size. This 
    allows you to finish the job quite quickly and you manage to get half a 
    night's sleep. <b>Add 2 Stamina points.</b>`,
    choices: [{ goToPage: 263, text: "Continue.." }],
    staminaLoss: 2,
    staminaGain: 2,
    // todo probably should kill you if you have 1 or 2 stamina
  },
  299: {
    text: `Deduct 1 Stamina point. Do you have any Blimberry juice with you? 
    If not, you must return and choose again. If you can cast the 
    spell over Blimberry juice, you do so and sprinkle the enchanted juice 
    on to the villagers. At first this appears to burn them, but then the 
    healing potion takes effect. This is a plague village; everyone in it has 
    plague. You have just healed this family and they are on their knees, 
    thanking you. You talk to them for some time and they give you one 
    important warning; Beware the Black Lotus Flower. Eventually you 
    leave.`,
    choices: [
      { goToPage: 158, text: "Go back and choose again" },
      { goToPage: 220, text: "Continue.." },
    ],
    staminaLoss: 1,
  },
  300: {
    text: `Deduct 1 Stamina point. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 220, text: "Go back and choose again" }],
    staminaLoss: 1,
  },
  301: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Gold-Backed Mirror it requires. You draw your weapon.`,
    choices: [{ goToPage: 227, text: "Continue.." }],
    staminaLoss: 1,
  },
  302: {
    text: `Deduct 1 Stamina point. The creature advances and you cast your 
    spell. You panic as nothing happens! You cannot use this spell as you 
    do not have the Potion of Fire Water it requires. The Manticore whips 
    round its tail and, although you try your best to evade it, the sting 
    grazes your arm. Deduct 6 Stamina points. Will you now draw 
    your weapon and fight or cast another spell`,
    choices: [
      { goToPage: 227, text: "Draw your sword" },
      { goToPage: 384, text: "Cast another spell" },
    ],
    staminaLoss: 7,
  },
  303: {
    text: `Deduct 1 Stamina point. Do you have any small pebbles with you? If 
    not, you must return and choose again quickly. If you have any 
    small pebbles, you cast the spell on them and toss them at the snakes. 
    They explode on impact, killing several of the snakes and frightening 
    the others. You throw three such missiles and have given yourself 
    some breathing space. However, on consideration, there seems to be 
    no way you can escape from the pit unless you are able to call on 
    Libra if you have not yet used her help. Otherwise there 
    is little you can do. Your journey has ended here . . .`,
    choices: [
      { goToPage: 63, text: "No Pebbles: Go back and choose again" },
      { goToPage: 0, text: "Death" },
      { goToPage: 273, text: "Call on Libra" },
    ], // todo you have died
    staminaLoss: 1,
  },
  304: {
    text: `Deduct 5 stamina points. You cast your spell but nothing happens. 
    The blast hits you in the chest, killing you instantly. Your journey 
    ends here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you have died
    staminaLoss: 5,
  },
  305: {
    text: `Deduct 4 Stamina points. You cast your spell and wait for the 
    lightning bolt to shoot at the assassin. But nothing happens! The 
    Minimite screams at you, 'Don't waste your time on spells. Minimites 
    are protected - though it is sometimes a curse - with a protection aura. 
    You cannot cast spells when I am about!' You must fight the assassin.`,
    choices: [
      {
        goToPage: 153,
        text: "Fight the Assassin",
        fight: { skill: 8, stamina: 6, name: "Assassin" },
      },
    ], // He is spared at 187],
    staminaLoss: 4,
  },
  306: {
    text: `Deduct 4 Stamina points. You cast the spell - but nothing happens! 
    The little creature chuckles, 'You are wasting your time with magic 
    while I'm around' it laughs`,
    choices: [{ goToPage: 171, text: "Continue.." }],
    staminaLoss: 4,
  },
  307: {
    text: `As you try desperately to make your spell work, the creature 
    pounces. Its huge weight lands on you and its claws rip your clothes. 
    That deadly sting comes over at you, but you are powerless to defend 
    yourself. It pierces your chest. Shortly the poison will take effect. You 
    have failed in your mission . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
  },
  308: {
    text: `Deduct 1 Stamina point. Do you have a Bamboo Flute with you?`,
    spell: {
      requires: "pipe",
      failText: `If not, you lose a further 3 Stamina points as the Bandits attack.`,
      failDamage: 3,
      successText: `If you have such a Flute, you take it from your bag, cast your spell and 
      play. The angry faces of the Bandits turn to expressions of astonishment 
      as they find their limbs jerking in time to the music, quite out of 
      control they drop their swords and are soon dancing merrily before 
      you. Piping loudly, you direct them back to the village and, as they 
      dance off, you continue your journey.`,
    },
    choices: [
      { goToPage: 104, text: "Spell Fail - return to fight" }, // todo lose another 3 hp
      { goToPage: 131, text: "Spell Success - continue" },
    ],
    staminaLoss: 1,
  },
  309: {
    text: `Deduct 1 Stamina point. You cast the spell unsuccessfully, as you do 
    not have the skullcap it requires. The Goblin seizes its chance and 
    attacks you fiercely. Deduct another 3 Stamina points and choose again.`,
    choices: [{ goToPage: 47, text: "Go back and choose again" }],
    staminaLoss: 4,
  },
  310: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 66, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  311: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 268, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  312: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the stone dust it requires. The Ogre swings its fist and knocks 
    you back against a wall. Deduct another 2 Stamina points.`,
    choices: [{ goToPage: 285, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  313: {
    text: `Deduct 5 Stamina points. You have chosen a non-existent spell.`,
    choices: [{ goToPage: 166, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  314: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 275, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  315: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 74, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  316: {
    text: `Deduct 2 Stamina points as you cast the spell. You cast it, not over 
    yourself, but over one of the Elvins who seems to be in charge. The 
    others stand agog as he suddenly duplicates until six replicas stand in 
    front of them! The leader laughs - or rather all six of them laugh 
    together - and the sight is most amusing. Soon all the Elvins are 
    laughing and the leader and his replicas hold out their hands to shake 
    with their comrades. Five of the other Eivins, of course, grasp thin air. 
    The spell soon wears off and the creatures congratulate you, returning 
    your backpack and allowing you to leave the village.`,
    choices: [{ goToPage: 196, text: "Continue.." }],
    staminaLoss: 2,
  },
  317: {
    text: `<p>Deduct 4 Stamina points. You cast the spell and the creature looks 
    confused. It steps forwards and kicks the halberd, knocking 
    it out of its hands. Cursing, it picks the weapon up, merely to drop 
    it again! You may seize your chance and attack. While under the effect 
    of the spell, the Troll will fight at:</p>
    
    <p><b>TROLL SENTRY Skill 4 Stamina 7</b></p>
    
    <p>The spell will last for 4 Attack Rounds and will then wear off. Before 
    each Attack Round after the fourth, it will have a 50% chance to pick up 
    its weapon and regain its initial Skill.</p>`,
    choices: [
      {
        goToPage: 177,
        text: "Fight the Troll Sentry",
        fight: { skill: 4, stamina: 17, name: "Troll Sentry" },
      },
    ],
    staminaLoss: 4,
  },
  318: {
    text: `Deduct 4 Stamina points. You cast the spell and point your finger at 
    the hole. With a flash, a burst of lightning flies from your fingertip and 
    blasts the ground. Earth flies all around and, as you see when the air 
    clears, you have created a fine hole, a little rough around the edges, 
    but nevertheless you have saved yourself a lot of work. You settle 
    down to sleep for the rest of the night. You may <b>recover the 3 
    Stamina points</b> you would have lost for missing a night's sleep.`,
    choices: [{ goToPage: 263, text: "Continue.." }],
    staminaLoss: 4, // todo die if less than 4 hp
    staminaGain: 3,
  },
  319: {
    text: `Deduct 1 Stamina point. You cast the spell and wait for something to 
    happen, but nothing does. You do not have a Giant's tooth which you 
    may cast this spell on.`,
    choices: [{ goToPage: 256, text: "Continue.." }],
    staminaLoss: 1,
  },
  320: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 4, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  321: {
    text: `Deduct 2 Stamina points. You cast your spell, but nothing happens! 
    The Minimite tells you not to waste your energy on spells while he is 
    around. Will you continue or return and take the other 
    path`,
    choices: [
      { goToPage: 73, text: "Continue" },
      { goToPage: 51, text: "Take the other path" },
    ],
    staminaLoss: 2,
  },
  322: {
    text: `Deduct 5 Stamina points. You cast your spell but nothing happens. 
    Unable to defend yourself, the blast hits you in the chest. You cry out 
    In pain and drop to the ground. Your journey has ended here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 5,
    dead: true,
  },
  323: {
    text: `Deduct 4 Stamina points. You cast your spell just in time, and your 
    invisible wall blocks off the passage. The great boulder hits it with 
    some considerable force, causing the whole cave to shake. It bounces 
    off your barrier and rolls back up the slope. You must now continue 
    either by returning to the last junction and taking the other fork 
    or by returning to the main chamber and taking the other passage.`,
    choices: [
      { goToPage: 63, text: "Return and take the other fork" },
      { goToPage: 16, text: "Take the other passage" },
    ],
    staminaLoss: 4,
  },
  324: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Gale horn it requires.`,
    choices: [{ goToPage: 64, text: "Continue.." }],
    staminaLoss: 1,
  },
  325: {
    text: `Deduct 2 Stamina points. The creature makes a half turn and 
    prepares to swing its stinging tail at you. But as you cast the spell, it 
    pauses briefly and shakes its head, as if something has hit it. Its 
    movements become slow and you may now seize your chance to 
    either attack it with your weapon or cast an attacking 
    spell. If you choose to attack, it will fight at half Skill for 
    the first 4 Attack Rounds.`,
    choices: [
      { goToPage: 227, text: "Attack with your weapon" },
      { goToPage: 364, text: "Cast an attacking spell" },
    ],
    staminaLoss: 2,
  },
  326: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 307, text: "Continue.." }],
    staminaLoss: 5,
  },
  327: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 104, text: "Continue.." }],
    staminaLoss: 5,
  },
  328: {
    text: `Deduct 1 Stamina point. Do you have any beeswax with you? If not, 
    you must deduct 3 extra Stamina points as the Goblin attacks. 

    If you do have beeswax, you may rub it on your sword. Fight the Goblin as normal, but you may double any 
    damage you inflict on the Goblin while your sword has been magically sharpened. 
    The effect will only last for this fight, and you have 
    used up half your beeswax.`,
    choices: [
      { goToPage: 47, text: "Spell Success - Fight the goblins" }, // todo lose 3 extra hp
      { goToPage: 47, text: "Spell Fail - Fight the goblins" },
    ],
    staminaLoss: 1,
  },
  329: {
    text: `Deduct 1 Stamina point. You try in vain to cast the spell as you do 
    not have the Gale horn it requires. As you recite your spell again and 
    again, the ceiling collapses entirely. There is nothing you can do as 
    you are buried for ever in the rubble . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 1,
    dead: true,
  },
  330: {
    text: `Deduct 1 Stamina point. Your spell will not work as you do not 
    possess the Jewel-Studded Medallion you need to complete it. You 
    fall down into the pit. Since you have been fumbling unsuccessfully with your 
    spell, you must add 3 points to the next dice roll.`,
    choices: [
      { goToPage: 277, text: "Continue.." }, // todo add +3 to next dice roll
    ],
    staminaLoss: 1,
  },
  331: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 285, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  332: {
    text: `Deduct 1 Stamina point. You cast the spell but nothing happens. 
    You cannot use this spell as you do not have the Brass Pendulum it 
    requires. You must draw your weapon and fight,`,
    choices: [{ goToPage: 20, text: "You draw your weapon and fight" }],
    staminaLoss: 1,
  },
  333: {
    text: `Deduct 4 Stamina points. Your spell is, however ineffective. You 
    cannot cast spells when your hands are bound! You have wasted your 
    efforts.`,
    choices: [{ goToPage: 112, text: "Continue.." }],
    staminaLoss: 4,
  },
  334: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 275, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  335: {
    text: `Deduct 4 Stamina points. You cast the spell quickly and point 
    towards the beast, A lightning blast shoots from your fingertip and 
    catches the Wolfhound square in the forehead. It drops to the ground, 
    dead.`,
    choices: [{ goToPage: 50, text: "Continue.." }],
    staminaLoss: 4,
  },
  336: {
    text: `Deduct 5 Stamina points. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 220, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  337: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 158, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  338: {
    text: `<p>Deduct 4 Stamina points. You cast the spell and the club drops out of 
    the Giant's hand. It grunts and reaches down to retrieve it. Taking 
    another step, it again drops the club. Your spell is working! Twice 
    more it does this until it eventually leaves the club on the floor and 
    attacks you with its bare hands. You will have to fight it, but without 
    its weapon:</p> 
    
    <p><b>HILL GIANT Skill 6 Stamina 11</b></p>`,
    choices: [
      {
        goToPage: 265,
        text: "Fight the Hill Giant",
        fight: { skill: 6, stamina: 11, name: "Hill Giant" },
      },
    ],
    staminaLoss: 4,
  },
  339: {
    text: `Deduct 1 Stamina point. Do you have a Bamboo Flute with you? If 
    not, the Wood Golem attacks for 1 Stamina points' worth of damage 
    - return and choose again. If you have a Bamboo Flute, you pull it 
    out of your backpack, cast your spell and play. The Golem stops and 
    looks at you strangely. Its shoulders shrug and it shivers. It looks 
    around and one leg starts twitching on the floor. Uncontrollably it 
    takes a little leap forward, then hops back, landing neatly on its toes, 
    it cannot understand what is happening! The bulky creature is doing 
    a little dance in front of you! You keep it occupied while you back off 
    towards the door.`,
    choices: [
      {
        goToPage: 87,
        text: "Spell Fail - Go back and choose again",
        blockItem: "pipe",
      }, // todo lose 1 hp more
      { goToPage: 169, text: "Continue..", requires: "pipe" },
    ],
    staminaLoss: 1,
  },
  340: {
    text: `Deduct 3 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 231, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  341: {
    text: `Deduct 5 Stamina points. You cast your spell but nothing happens. 
    Will you continue or return and take the other path?`,
    choices: [
      { goToPage: 73, text: "Continue through the flowers" },
      { goToPage: 51, text: "Go back and take the other path" },
    ],
    staminaLoss: 5,
  },
  342: {
    text: `Deduct 1 Stamina point. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 117, text: "Go back and choose again" }],
    staminaLoss: 1,
  },
  343: {
    text: `Deduct 1 Stamina point. Unfortunately, you do not have the Staff of 
    Oak Sapling that this spell requires and your poor choice has left you 
    no time to plan an alternative escape. The great boulder rolls over 
    you, crushing you on to the floor. Your journey has ended here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 1,
    dead: true,
  },
  344: {
    text: `Deduct 3 Stamina points. There is no such spell as this and, as you 
    try to make it work, the snakes are upon you. This is the end of your 
    journey . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 3,
    dead: true,
  },
  345: {
    text: `Deduct 5 Stamina points. There is no such spell as this and, while 
    you have been trying unsuccessfully to cast it, the creature whips its tail 
    round to sting you. You fall to the floor to avoid it. Will you now attack 
    it with your weapon or will you cast another spell?`,
    choices: [
      { goToPage: 227, text: "Attack with your weapon" },
      { goToPage: 364, text: "Try another spell" },
    ],
    staminaLoss: 5,
  },
  346: {
    text: `Deduct 4 Stamina points. Your spell creates a large fireball in your 
    hand, which you fling at the beast. It hits the Manticore in the side 
    and the creature roars out in pain. Causing it 6 stamina points worth of damage.`,
    choices: [{ goToPage: 420, text: "Finish off the beast" }],
    staminaLoss: 4,
  },
  347: {
    text: `Deduct 1 Stamina point. You cannot choose this spell as you do not 
    have the Ring of Green Metal it requires.`,
    choices: [{ goToPage: 307, text: "Continue.." }],
    staminaLoss: 1,
  },
  348: {
    text: `Deduct 4 Stamina points. You cast your spell and wait. The Bandits 
    pause, expecting something to happen... but nothing does! This 
    spell works only on non-intelligent creatures. The Bandits leap at you 
    and one gashes your arm with his sword, inflicting 2 Stamina points 
    of damage.`,
    choices: [
      {
        goToPage: 56,
        text: "Fight the Bandits",
        fight: { skill: 7, stamina: 6, name: "Bandit 1" },
        extraEnemies: [{ skill: 7, stamina: 5, name: "Bandit 2" }],
      },
    ],
    staminaLoss: 6,
  },
  349: {
    text: `Deduct 1 Stamina point. You cannot cast this spell as you do not 
    have the Orb of Crystal it requires. You lose a further 2 Stamina 
    points as you try without success to make the spell work.`,
    choices: [{ goToPage: 239, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  350: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 66, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  351: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 268, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  352: {
    text: `Deduct 4 Stamina points. You cast the spell and, as the Ogre leaps to 
    attack, it collides with something solid. You have stopped it with your 
    invisible wall. You may now escape from the room while holding the 
    Ogre at bay. On your way out you grab a gem from the table - the 
    Ogre's job was to grind the rocks mined from the mine into such 
    gems. This gem is worth 10 Gold Pieces. You may use it to buy things 
    and barter, but you will not be given change, no matter how little your 
    purchase costs.`,
    choices: [{ goToPage: 144, text: "Continue.." }], // todo get gem
    staminaLoss: 4,
  },
  353: {
    text: `Deduct 1 Stamina point. You try the spell, but nothing happens as 
    you do not have the Bracelet of Bone it requires. The Elvins are not 
    impressed and quickly bind your hands again - only this time tighter, 
    causing you some pain and the <b>loss of another 1 Stamina point.</b>`,
    choices: [{ goToPage: 218, text: "Continue.." }],
    staminaLoss: 2,
  },
  354: {
    text: `Deduct 1 Stamina point. 'Fool' calls out the Spirit, 'I know that spell 
    well. Do you not have the Black Facemask that it requires?" You do not 
    have the mask and, in panic, you try to leave the hut.`,
    choices: [{ goToPage: 124, text: "Continue.." }],
    staminaLoss: 1,
  },
  355: {
    text: `Deduct 4 Stamina points. Holding your hands up, you command 
    the serpent to release you. It does so and backs off into the bushes. 
    You watch it retreat until it slowly vanishes from sight.`,
    choices: [{ goToPage: 137, text: "Continue.." }],
    staminaLoss: 4,
  },
  356: {
    text: `Deduct 2 Stamina points. You cast the spell and immediately begin 
    to grow larger. Within moments you stand three times your normal 
    size. The Elvin looks on with awe and hesitates, not sure whether to 
    fight or fly. You may either attack it or Test your Luck. If you are Lucky, 
    the creature will fly off, its companions following it into the woods 
    and allowing you to settle back down to sleep. You awake at sunrise. 
    If you are Unlucky, the Elvin will continue its battle. If you 
    end up fighting the creature, due to your size, your Skill score will be doubled.`,
    choices: [
      { goToPage: 148, text: "Test your Luck - Success", luck: "success" },
      {
        goToPage: 203,
        text: "Test your Luck - Fail (Skill doubled in fight)",
        luck: "failed",
      },
      { goToPage: 203, text: "Attack it", luck: "blocked" },
    ],
    staminaLoss: 2,
    testLuck: { optional: true },
  },
  357: {
    text: `Deduct 5 Stamina points. There is no such spell as this. In fact you 
    discover that you are unable to cast a spell anyway, as your hands are 
    bound (remember this in future).`,
    choices: [{ goToPage: 112, text: "Continue.." }],
    staminaLoss: 5,
  },
  358: {
    text: `Deduct 1 Stamina point. You cannot cast this spell as you do not 
    have the Green-Haired Wig it requires. The Goblins spring at you and 
    attack. Lose 2 Stamina points as the first Goblin slashes at you. 
    You may not choose another spell; you must draw your weapon and fight them.`,
    choices: [
      {
        goToPage: 155,
        text: "Fight the Goblins",
        fight: {
          skill: 5,
          stamina: 4,
          name: "Goblin 1",
        },
        extraEnemies: [
          { skill: 6, stamina: 4, name: "Goblin 2" },
          { skill: 5, stamina: 5, name: "Goblin 3" },
        ],
      },
    ],
    staminaLoss: 1,
  },
  359: {
    text: `Deduct 1 Stamina point. You cast the spell and wait. Nothing 
    happens. You cannot use this spell as you do not have the Ring of 
    Green Metal it requires.`,
    choices: [{ goToPage: 85, text: "Continue.." }],
    staminaLoss: 1,
  },
  360: {
    text: `<p>Deduct 1 Stamina point. Do you have any beeswax with you? If not, 
    you may not cast this spell.</p>

    <p>If you have beeswax, you wipe half a portion of it on to your weapon to enhance its effect.</p> 

    <p>Try smashing the lock. But 2 points will be added to your effective Skill when trying to break the lock and,
    if you succeed in smashing the lock on your first attempt, you need not lose the Skill penalty.</p>`,
    choices: [
      { goToPage: 4, text: "Spell fail - No beeswax", blockItem: "beeswax" },
      {
        goToPage: 142,
        text: "Spell success - Try smashing the lock",
        requires: "beeswax",
        cameFrom: 360,
      },
    ],
    staminaLoss: 1,
  },
  361: {
    text: `<p>Deduct 1 Stamina point. Do you have a Giant's tooth?</p>
 
    <p>If you have found one on your travels, you drop it on the floor 
    and cast your spell on it. The great creature watches inquisitively, 
    then you both jump back as a plume of smoke rises into the air. Out of 
    the smoke steps another Giant, though this one will do your bidding. 
    You command him to fight:</p> 
    
    <p><b>HILL GIANT Skill 9 Stamina 11</b></p>
    <p><b>MAGICAL GIANT Skill 8 Stamina 9</b></p>
    
    <p>Resolve this battle. If the Hill Giant defeats your champion, you will 
    have to finish the battle off yourself.</p>`,
    choices: [
      {
        goToPage: 265,
        text: "Fight the Hill Giant",
        fight: { skill: 9, stamina: 11, name: "Hill Giant" },
      },
    ],
    staminaLoss: 1,
    // todo add giant fight that you take over from
  },
  362: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Potion of Fire Water it requires.`,
    choices: [{ goToPage: 201, text: "Go back and choose again" }],
  },
  363: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Sun Jewel it requires. As you try to get it to work, the Troll 
    leaps and slashes at your leg, causing 2 Stamina points' worth of 
    damage. You must now fight the Troll.`,
    choices: [
      {
        goToPage: 177,
        text: "Fight the Troll",
        fight: { skill: 8, stamina: 7, name: "Troll" },
      },
    ],
    staminaLoss: 1,
  },
  364: {
    text: `As the Manticore turns to face you, you may cast an attacking spell.
    If you dont want to use magic, draw your weapon and fight.`,
    choices: [
      { goToPage: 388, text: "Magic: YOB" },
      { goToPage: 301, text: "Magic: KIN" },
      { goToPage: 346, text: "Magic: HOT" },
      { goToPage: 369, text: "Magic: GOB" },
      { goToPage: 395, text: "Magic: KIL" },
      { goToPage: 227, text: "Fight the Manticore" },
    ],
  },
  365: {
    text: `Deduct 4 Stamina points. You cast your spell and an invisible force 
    field forms itself around you, sealing you into a pocket of air. 
    Although the water floods around you, you are quite safe. After 
    several moments, the cieling wall lowers and the waiter drains off. 
    You may continue by either returning to the junction and taking the 
    other fork or going back to the main chamber and taking 
    the other passageway.`,
    choices: [
      { goToPage: 151, text: "Take the other fork" },
      { goToPage: 3, text: "Take the other passageway" },
    ],
    staminaLoss: 4,
  },
  366: {
    // unique node
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Jewel-Studded Medallion it requires. While you are trying to 
    cast it, the snakes have taken an interest in you. Roll one die, This is 
    the number of Stamina points that you lose when they bite you. If 
    you roll a six, one of the bites has been poisonous and you must Test 
    your Luck- if you are Lucky, you survive; if you are Unlucky, you die 
    from the poison.`,
    choices: [
      { goToPage: 0, text: "Roll a 6 + Test your Luck: Fail" }, // you are dead
      { goToPage: 63, text: "Go back and choose again" },
    ],
    staminaLoss: 1,
    testLuck: { optional: true },
  },
  367: {
    text: `Deduct 1 Stamina point. Do you have a vial of glue with you? If not 
    you must think of another means of escape. If you have 
    some glue, you cast your spell and fling the vial at the passage floor in 
    front of the boulder. Sweating with anxiety, you breathe a sigh of 
    relief as the huge rock rolls on to the glue and holds fast. The whole 
    area shakes with the tremendous strain. You may now either go back 
    to the junction in the passage and take the other fork or 
    return to the main chamber and take the other passage.`,
    choices: [
      { goToPage: 83, text: "Think of another means of escape" },
      { goToPage: 63, text: "Take the other fork" },
      { goToPage: 16, text: "Take the other passage" },
    ],
    staminaLoss: 1,
  },
  368: {
    text: `Deduct 5 Stamina points. You cast the spell and wait for something 
    to happen, but nothing does.`,
    choices: [{ goToPage: 117, text: "Go back and try again" }],
    staminaLoss: 5,
  },
  369: {
    // note to self, it would take 455 goblins to kill the manticore on average, what a useless spell!
    text: `<p>Do you have any Goblins' teeth with you? If so you may throw as 
    many as you wish on to the ground and cast your spell. Deduct 1 
    Stamina point per tooth. With a cloud of smoke, this number of 
    Goblins now stand before you and you may command them to attack 
    the Manticore. Resolve the battle (the Goblins will attack one after the 
    other):</p>
    
    <p></b>MANTICORE Skill 12 Stamina 18</b></p>
    <p></b>GOBLINS SKILL 5 STAMINA 3</b></p>
    
    <p>Each time the Manticore hits a Goblin, roll one die. On a roll of 5 or 6, it 
    will have stung with its poisonous tail, killing the Goblin. 1-4 is a 
    normal hit.</p>

    <p>If the Manticore defeats all your Goblins, you may either finish the job with your sword or cast another spell.</p>`,
    choices: [
      { goToPage: 456, text: "Goblins have killed the manticore" },
      { goToPage: 227, text: "Finish him with your sword" },
      { goToPage: 420, text: "Cast another spell" },
    ],
    // todo deduct 1 hp per tooth
  },
  370: {
    text: `Deduct 3 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 307, text: "Continue.." }],
    staminaLoss: 3,
  },
  371: {
    text: `Deduct 1 Stamina point. You have chosen a spell you are not able to 
    use as you do not have the Pearl Ring it requires. You lose another 3 
    Stamina points as the Bandits attack.`,
    choices: [
      {
        goToPage: 56,
        text: "Fight the Bandits",
        fight: { skill: 7, stamina: 6, name: "Bandit 1" },
        extraEnemies: [{ skill: 7, stamina: 5, name: "Bandit 2" }],
      },
    ],
    staminaLoss: 4,
  },
  372: {
    text: `Deduct 2 Stamina points. You cast your spell and begin to get a 
    strong feeling that there is danger ahead. A voice inside tells you not 
    to go this way. Will you heed this warning and return to the junction 
    or continue regardless?`,
    choices: [
      { goToPage: 6, text: "Listen to the voice and return to the junction" },
      { goToPage: 120, text: "Ignore the voice and continue" },
    ],
    staminaLoss: 2,
  },
  373: {
    text: `Deduct 2 Stamina points. You cast the spell and wait anxiously. The 
    huge door creaks on its hinges and slowly opens, just in time for you 
    to nip through before the ceiling collapses`,
    choices: [{ goToPage: 120, text: "Continue.." }],
    staminaLoss: 2,
  },
  374: {
    text: `Deduct 1 Stamina point. This spell will not work as you do not have 
    the Galehorn it requires.`,
    choices: [{ goToPage: 268, text: "Go back and choose another spell" }],
    staminaLoss: 1,
  },
  375: {
    text: `<p>Deduct 2 Stamina points. You cast the spell and wait for it to take 
    effect. The Ogre lunges at you but suddenly stops and shakes its 
    head, looking at itself, then at you, with a puzzled expression. It takes 
    a step forward, then grunts and steps backwards, thoroughly confused, 
    You may either fight it now in its incapacitated state:</p>

    <p><b>OGRE Skill 4 Stamina 7</b></p> 

    <p>Alternatively you may leave the room.</p>`,
    choices: [
      {
        goToPage: 15,
        text: "Fight the Ogre",
        fight: { skill: 4, stamina: 7, name: "Ogre" },
      },
      { goToPage: 144, text: "Leave the room" },
    ],
    staminaLoss: 2,
  },
  376: {
    text: `Deduct 5 Stamina points. There is no such spell as this and the 
    Elvins are not impressed as you unsuccessfully try to cast it. They 
    bind your hands again, only this time tighter, causing you some pain.`,
    choices: [{ goToPage: 218, text: "Continue.." }],
    staminaLoss: 5,
  },
  377: {
    text: `Deduct 5 Stamina points. There is no such spell as this, and the 
    Spirit laughs as you try to cast it.`,
    choices: [{ goToPage: 124, text: "Continue.." }],
    staminaLoss: 5,
  },
  378: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Pearl Ring it requires. While you are trying to get it to work, 
    the Elvin sweeps in and attacks again. Deduct another 3 Stamina 
    points.`,
    choices: [{ goToPage: 203, text: "Go back and choose again" }],
    staminaLoss: 4,
  },
  379: {
    text: `Deduct 5 Stamina points. There is no such spell as this. In fact you 
    may not cast a spell anyway, as your hands are bound (remember this 
    in future).`,
    choices: [{ goToPage: 112, text: "Continue.." }],
    staminaLoss: 5,
  },
  380: {
    text: `Deduct 4 Stamina points. You cast your spell and hold your hands in 
    the air. You command it to hold its ground. It is not too happy with 
    you, but does not move and you are able to step round it.`,
    choices: [{ goToPage: 118, text: "Continue.." }],
    staminaLoss: 4,
  },
  381: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 217, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  382: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 231, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  383: {
    text: `Deduct 2 Stamina points. You cast the spell and the creature stops, It 
    takes a step forward but its actions have become sluggish under your 
    spell. Fight it, but for the first four Attack Rounds it will fight with:

    <p><b>WOOD GOLEM Skill 4 Stamina 6</b></p>`,
    choices: [
      {
        goToPage: 87,
        text: "Fight the Wood Golem",
        fight: { skill: 4, stamina: 60, name: "Wood Golem" },
      },
    ],
    staminaLoss: 2,
  },
  384: {
    text: `Deduct 1 Stamina point. You cast the spell and wait for something to 
    happen. Nothing does. You cannot use this spell without the Pearl 
    Ring it requires. The Hill Giant watches you, then swings its club, 
    clipping your side as you spring backwards. You lose 2 Stamina points.`,
    choices: [{ goToPage: 256, text: "Continue.." }],
    staminaLoss: 3,
  },
  385: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Black Facemask it requires.`,
    choices: [{ goToPage: 158, text: "Continue.." }],
    staminaLoss: 1,
  },
  386: {
    text: `<p>Deduct 1 Stamina point. Do you have a Gold Piece with you?</p>
    
    <p>If you do have such a coin, you place it 
    on your wrist and cast your spell. The coin sticks and you can feel an 
    invisible shield bound to your wrist. You may now fight the Troll 
    Sentry with extra defence:</p> 
    
    <p><b>TROLL SENTRY Skill 8 Stamina 7</b></p>
    
    <p>Because of your shield, you may deduct 2 from the Troll's throw on 
    Attack Strength. After the fight, you must lose 
    the Gold Piece, which becomes useless metal.</p>`,
    choices: [
      { goToPage: 99, text: "Spell fail - Choose again", blockItem: "gold" },
      {
        requires: "gold",
        goToPage: 177,
        text: "Fight the Troll Sentry",
        fight: { skill: 8, stamina: 7, name: "Troll Sentry" },
      },
    ], // todo check if have coin and lose coin. Troll loses 2 AS
    staminaLoss: 1,
  },
  387: {
    text: `Deduct 2 Stamina points. You cast your spell -but nothing happens! 
    You are puzzling this out, when the little creature chuckles. 'You are 
    wasting your time using your magic while I'm around!' it says.`,
    choices: [{ goToPage: 171, text: "Continue.." }],
    staminaLoss: 2,
  },
  388: {
    // todo seperate this into two nodes
    text: `<p>Deduct 1 Stamina point. Do you have a Giant's tooth with you?
    If not, you cannot cast this spell you must defend yourself 
    with your weapon.</p> 
    
    <p>If you do have a Giant's tooth, you place it on the 
    floor and cast your spell, A cloud of smoke appears around the tooth 
    and, as it dears, a large Giant stands in its place! You command the 
    Giant to attack the Manticore and it turns towards the startled beast. 
    Resolve this battle:</p> 
    
    <p><b>MANTICORE Skill 12 Stamina 18</b></p>
    <p><b>GIANT Skill 8 Stamina 9</b></p>
    
    <p>Each time the Manticore hits the Giant, you must roll one die. A roll of 
    5 or 6 indicates a hit with the sting in its tail, which is poisonous, and 
    will do 6 Stamina points' worth of damage, A roll of 1-4 indicates 
    normal damage.</p>

    <p>If the Manticore wins, you may either finish the job off yourself or cast 
    another spell.</p>`,
    choices: [
      {
        goToPage: 227,
        text: "Fight the manticore",
        fight: { skill: 12, stamina: 18, name: "Manticore" },
      },
      { goToPage: 420, text: "Cast another spell" },
    ],
    staminaLoss: 1,
  },
  389: {
    text: `Deduct 5 Stamina points. There is no such spell as this, so nothing 
    happens. You duck quickly as it swings its deadly tail round and tries 
    to sting you. Do you want to draw your sword or cast another spell`,
    choices: [
      { goToPage: 227, text: "Fight" },
      { goToPage: 364, text: "Cast a spell" },
    ],
    staminaLoss: 5,
  },
  390: {
    // unique node
    text: `Deduct 2 Stamina points. You cast the spell and wait. From some-where inside, 
    a voice warns you that the situation is not good. Your 
    only hope is to empty your backpack, open it out to fill with air, and 
    hold it tightly over your face up to the ceiling. Test your 
    Luck. If you are Lucky, you manage to trap sufficient air to save you 
    before the deluge fills the room. If you are Unlucky, you lose hold of 
    the bag and must try another method of escape. If you 
    were Lucky, the water eventually drains when the wall behind you 
    lowers. You may return to the junction and take the other fork or go 
    back to the main chamber and take the other passageway. 
    You collect your belongings from the floor, but 
    anything that would have been spoiled by the water (e.g. Provisions) 
    is now lost for ever.`,
    choices: [
      { goToPage: 64, text: "Test your Luck - Fail", luck: "failed" },
      {
        goToPage: 151,
        text: "Return and take the other fork",
        luck: "success",
      },
      {
        goToPage: 3,
        text: "Return and take the other passageway",
        luck: "success",
      },
    ],
    staminaLoss: 2,
    testLuck: { optional: false },
    pause: true,
  },
  391: {
    text: `Deduct 5 Stamina points. There is no such spell as this. You have 
    now left yourself no time to plan an alternative escape and, in a flash, 
    the boulder is on you, crushing you beneath it. Your journey has 
    ended here . . . `,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 5,
  },
  392: {
    text: `Deduct 2 Stamina points. You cast your spell but nothing happens. 
    The Minimite shrieks, cursing himself. He is protected from magic 
    with an anti-magic aura, and most spells will not work in his presence. 
    Unfortunately it is a little too late to learn this, as the lightning 
    blast hits you. Your journey ends here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 2,
  },
  393: {
    text: `Deduct 5 Stamina points. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 117, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  394: {
    text: `Deduct 2 Stamina points. You cast your spell, but nothing happens! 
    The Minimite tells you not to waste your energy on spells while he is 
    around. Will you continue or return and take the other 
    path?`,
    choices: [
      { goToPage: 73, text: "Continue down the path" },
      { goToPage: 51, text: "Return and take the other path" },
    ],
    staminaLoss: 2,
  },
  395: {
    text: `Deduct 3 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 364, text: "Go back and try again" }],
    staminaLoss: 3,
  },
  396: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 123, text: "Go back and try again" }],
    staminaLoss: 5,
  },
  397: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 47, text: "Go back and try again" }],
    staminaLoss: 5,
  },
  398: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 239, text: "Go back and try again" }],
    staminaLoss: 5,
  },
  399: {
    text: `Deduct 2 Stamina points. Your fall is broken and you float gently 
    down to the ground below, landing softly on your knees.`,
    choices: [{ goToPage: 110, text: "Continue.." }],
    staminaLoss: 5,
  },
  400: {
    text: `Deduct 1 Stamina point. Do you have a Gold Piece with you? If not, 
    deduct 2 extra Stamina points when the Ogre leaps at you and 
    attacks while you fumble with your spell. If you do 
    have a coin, you place it on your wrist and cast the spell. You can feel 
    an invisible shield fixed to your wrist and you may now fight the Ogre 
    at an advantage. Return and fight the Ogre, hut you may 
    deduct 2 points from the Ogre's throw when he rolls for Attack 
    Strength each round. After the fight is over, you must lose the Gold 
    Piece; it is transformed to a useless metal by the spell `,
    choices: [
      { goToPage: 285, text: "Spell Fail - Fight the ogre" },
      { goToPage: 285, text: "Spell Pass - Fight the orgre with shield" },
    ], // todo check if have coin and lose coin
    staminaLoss: 1,
  },
  401: {
    text: `Do you have a Goblin's tooth with you? If not, you try in vain to cast 
    the spell and the Eivins are not impressed, tying your hands and 
    kicking you angrily (lose 2 Stamina points). If you do 
    have a tooth, you cast your spell over it (deduct 1 Stamina point) and 
    it forms into a Goblin before their eyes. At first they are apprehensive 
    - they do not like Goblins - but they relax a little as you show them 
    you have complete control over your creation. You can make it dance 
    a jig, stand on its head and even sing (although this causes scores of 
    protests - Goblins have the most tuneless voices imaginable). As a 
    finale, you make it bow down before them and kiss their boots. As the 
    Goblin disappears, the Eivins congratulate you. After a brief chat, 
    they return your backpack and allow you to continue on your way.`,
    choices: [
      { goToPage: 218, text: "Spell Fail - continue" }, // todo lose 2 hp
      { goToPage: 196, text: "Spell Pass - continue" }, // todo los 1 hp
    ], // todo check if you have
  },
  402: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Green-Haired Wig it requires. As you try to cast it, the beast 
    leaps at you and sinks its teeth into your forearm. Deduct 3 Stamina 
    points. You must now draw your weapon and fight it.`,
    choices: [
      {
        goToPage: 50,
        text: "Fight the Wolfhound",
        fight: { skill: 7, stamina: 6, name: "Wolfhound" },
      },
    ],
    staminaLoss: 4,
  },
  403: {
    text: `Deduct 2 Stamina points. You cast the spell and an expression of 
    pain comes over the Spirit's face. 'Refract that spell!' it screams. 'Or 
    feel the wrath of Manankal'. But its threat is an idle one and the face is 
    disappearing before you. The smoke is quickly collecting together 
    and returning to the box. You are safe. If you have not done so 
    already, you may try the other box. Otherwise you may 
    leave the village.`,
    choices: [
      { goToPage: 258, text: "Try the other box" },
      { goToPage: 196, text: "Leave the village" },
    ],
    staminaLoss: 2,
  },
  404: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Sun Jewel it requires. While you are trying in vain to make it 
    work, the Serpent strikes. Lose another 2 Stamina points.`,
    choices: [{ goToPage: 275, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  405: {
    text: `Deduct 4 Stamina points. Hinging your hand forward and casting 
    the spell, a shower of small fireballs burst into the air around the little 
    Elvin. Several of them hit the creature, burning its wings and causing 
    it to drop from the air like a flaming torch.`,
    choices: [{ goToPage: 121, text: "Continue.." }],
    staminaLoss: 4,
  },
  406: {
    text: `Deduct 2 Stamina points. You will now learn an important rule: you 
    cannot cast spells while your hands are bound! You have wasted your 
    efforts.`,
    choices: [{ goToPage: 112, text: "Continue.." }],
    staminaLoss: 2,
  },
  407: {
    text: `<p>Deduct 4 Stamina points. You cast the spell and point at the first 
    Goblin, A streak of lightning shoots from your finger and catches the 
    creature square in the chest, killing it instantly. The other two stop in 
    their tracks, deciding whether to continue the attack. Roll two dice for 
    each of the remaining Goblins. If the number rolled for either (or both) 
    of them is equal to or higher than their Skill score, this means it will 
    turn and flee into the woods. Otherwise, it will continue its attack.</p>`,
    choices: [
      {
        goToPage: 155,
        text: "Fight the Goblin(s)",
        blocked: true,
        cameFrom: 407,
      },
      { goToPage: 202, text: "They both flee", blocked: true },
    ],
    staminaLoss: 4,
    extraText: true,
  },
  408: {
    text: `Deduct 4 Stamina points. You cast your spell and suddenly the 
    acorn hail ceases. The Elvins look on with wonder as their nuts 
    bounce off an invisible shield. You move smartly onwards until the 
    spell wears off.`,
    choices: [{ goToPage: 7, text: "Continue.." }],
    staminaLoss: 4,
  },
  409: {
    text: `Deduct 2 Stamina points. You cast the spell at the lock. It begins to 
    hum quietly and little clicks indicate that the tumblers are moving. 
    Eventually it swings apart and you may open the cage. The woman 
    thanks you. She will now reward you for your help. Would you like a 
    magical item or an aid in combat?`,
    choices: [
      { goToPage: 248, text: "A magical item" },
      { goToPage: 122, text: "An aid in combat" },
    ],
    staminaLoss: 2,
  },
  410: {
    text: `Deduct 1 Stamina point. You fumble with your spell, which does not 
    seem to work. The Wood Golem attacks and smashes you for 2 
    Stamina points' worth of damage. You cannot use this spell as you 
    do not have the Gold-Backed Mirror it requires.`,
    choices: [{ goToPage: 87, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  411: {
    text: `<p>Deduct 2 Stamina points. You cast the spell and wait. Slowly, the 
    ground moves further from you. You are growing larger! The Hill 
    Giant watches in disbelief while you grow to his size. You may now 
    fight the Giant:</p> 
    
    <p><b>HILL GIANT Skill 9 Stamina 11</b></p>
    
    <p>But your Skill is doubled while you are under the influence of 
    this spell.</p>`,
    choices: [
      {
        goToPage: 265,
        text: "Fight the Golem",
        fight: { skill: 9, stamina: 11, name: "Hill Giant" },
      },
    ],
    staminaLoss: 2,
  },
  412: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 201, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  413: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 158, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  414: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 99, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  415: {
    text: `Deduct 4 Stamina points. The creature makes a half turn and swings 
    its deadly tail. But as its sting whips towards you, it hits the invisible 
    force field you have created and does you no damage. Will you now 
    cast an attacking spell or draw your weapon and fight it?`,
    choices: [
      { goToPage: 364, text: "Choose an attacking spell" },
      { goToPage: 227, text: "Draw your weapon and fight" },
    ],
    staminaLoss: 4,
  },
  416: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 64, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  417: {
    text: `Deduct 3 Stamina points. There is no such spell as this. The snakes 
    are now upon you and are beginning to attack. Roll one die. If you roll 
    1-5, this is the number of Stamina points of damage you must 
    sustain. If you roll a 6, the bites are poisonous and you are now 
    spending your last minutes before the poison takes its deadly effect 
    ... If you have survived, choose again.`,
    choices: [
      { goToPage: 63, text: "Roll a 1-5, you survived" }, // todo take roll damage
      { goToPage: 0, text: "Roll a 6, you are dead" },
    ], // todo you are dead
    staminaLoss: 3,
  },
  418: {
    text: `Deduct 5 Stamina points. You cast your spell but nothing happens. 
    The blast hits you in the chest, killing you instantly. Your journey 
    ends here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 5,
  },
  419: {
    text: `Deduct 1 Stamina point. You cast your spell but nothing happens. 
    Will you continue or return and take the other path?`,
    choices: [
      { goToPage: 73, text: "Continue through the flowers" },
      { goToPage: 51, text: "Return and take the other path" },
    ],
    staminaLoss: 1,
  },
  420: {
    text: `You may turn and fight the creature with your weapon. Otherwise, choose 
    your spell`,
    choices: [
      { goToPage: 347, text: "Magic: ZIP" },
      { goToPage: 326, text: "Magic: NIT" },
      { goToPage: 436, text: "Magic: FIF" },
      { goToPage: 447, text: "Magic: WAL" },
      { goToPage: 370, text: "Magic: SOD" },
      { goToPage: 227, text: "Fight the creature with your weapon" },
    ],
  },
  421: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the vial of glue you need to cast it. Meanwhile the night creature 
    has attacked and inflicted 2 Stamina points' worth of damage.`,
    choices: [{ goToPage: 123, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  422: {
    text: `Deduct 1 Stamina point. You cannot cast this spell as you do not 
    have the Staff of Oak Sapling it requires. Deduct a further 2 Stamina 
    points as you try without success to make it work.`,
    choices: [{ goToPage: 239, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  423: {
    text: `Deduct 2 Stamina points. You cast your spell. From somewhere 
    within, a voice speaks to you, telling you to cast the DOP spell to open 
    the door. This is your only hope unless you are strong enough to 
    break down the door.`,
    choices: [{ goToPage: 66, text: "Go back and choose again" }],
    staminaLoss: 2,
  },
  424: {
    text: `Deduct 2 stamina points. You fall down into the pit, but your body 
    moves in the air as if to anticipate your landing. Because of your spell, you 
    may deduct 3 points from the following dice roll and you may ignore the extra 
    penalty on a roll of double 6.`,
    choices: [{ goToPage: 277, text: "Continue.." }], // todo reduce following die roll and it cant kill you
    staminaLoss: 2,
  },
  425: {
    text: `<p>Do you have any Goblins' teeth with you?</p>
    
    <p>If so, you may throw as 
    many as you want on to the floor and cast your spell on them. You 
    lose deduct 1 Stamina point per Goblin you create. 
    If your goblins dont win, finish it off yourself.</p>
    
    <p>If you do not have any Goblins' teeth, then you try in vain 
    to cast the spell and the Wolfhound leaps at your throat, causing you 
    5 Stamina points worth of damage - you will have to fight it:</p> 
    
    <p><b>WOLFHOUND Skill 7 Stamina 6</b></p>
    <p><b>GOBLINS Skill 5 Stamina 5</b></p>`,
    choices: [
      {
        goToPage: 50,
        text: "Fight the Wolfhound",
        fight: { skill: 7, stamina: 6, name: "Wolfhound" },
      },
    ], // todo if no goblins teeth 5 damage
  },
  426: {
    text: `Deduct 2 Stamina points. The Serpent is ready to attack, but waits 
    for you to move. From within, a feeling of peace comes over you as 
    you look at the creature. You relax a little and the Serpent suddenly 
    disappears once more; but you could swear it winked at you before it 
    vanished. It still grips your arm, and pulls you. You decide to 
    continue your journey.`,
    choices: [{ goToPage: 94, text: "Continue.." }],
    staminaLoss: 2,
  },
  427: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 166, text: "Continue.." }],
    staminaLoss: 5,
  },
  428: {
    // todo fix death mechanic
    text: `Deduct 3 Stamina points. There is no such spell as this. The Goblins 
    are quickly on you and attack you for 2 Stamina points' worth of 
    damage. You may, if you wish, Test your Luck and if you are Lucky you 
    avoid this attack.`,
    choices: [{ goToPage: 217, text: "Fight the goblins or cast a spell" }],
    staminaLoss: 5,
    testLuck: { optional: true },
  },
  429: {
    text: `Deduct 1 Stamina point. You cannot use this spell as you do not 
    have the Potion of Fire Water it requires.`,
    choices: [{ goToPage: 4, text: "Go back and choose again" }],
    staminaLoss: 1,
  },
  430: {
    text: `Deduct 3 Stamina points. There is no such spell as this,`,
    choices: [{ goToPage: 256, text: "Go back and choose again" }],
    staminaLoss: 3,
  },
  431: {
    text: `Deduct 4 Stamina points. You cast the spell and a protective force- 
    field surrounds your body. No harm will befall you as there will be no contact between you and any of the 
    villagers.`,
    choices: [{ goToPage: 79, text: "Continue.." }],
    staminaLoss: 4, // protect from disease coming up
  },
  432: {
    text: `Deduct 5 Stamina points. There is no such spell as this. While you 
    are reciting it, the Troll springs at you, and a lucky blow knocks you to 
    the floor. Before you can rise, the creature is on you, sinking its slimy 
    teeth into your throat. Your journey has ended here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 5,
  },
  433: {
    text: `Deduct 4 Stamina points. You cast the spell and, commanding the 
    snakes, they back away from you. For the present, you are safe. But 
    how may you escape from the pit? If you have not yet called on help 
    from Libra, you may call her now. But if you have already used her help, there is 
    little you can do but hold the snakes off until your Stamina runs out- 
    your journey has ended here . . . `,
    choices: [
      { goToPage: 273, text: "Call on Libra", needLibra: true },
      { goToPage: 0, text: "Death" },
    ],
    staminaLoss: 4,
  },
  434: {
    text: `Deduct 1 Stamina point. You cast the spell but nothing happens. 
    You panic, but there is little you can do to avoid the deadly blast. Your 
    journey is over . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 1,
  },
  435: {
    text: `Deduct 5 Stamina points. You cast your spell, but nothing happens 
    Will you continue or return and take the other path?`,
    choices: [
      { goToPage: 73, text: "Continue through the flowers" },
      { goToPage: 51, text: "Go back and take the other path" },
    ],
    staminaLoss: 5,
  },
  436: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 307, text: "Continue.." }],
    staminaLoss: 5,
  },
  437: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 123, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  438: {
    text: `Deduct 4 Stamina points. You cast the spell and a bolt of lightning 
    shoots from your fingertip at the creature, hitting it square in the 
    chest. It reels and falls backwards, dead, on to the floor.`,
    choices: [{ goToPage: 186, text: "Continue.." }],
    staminaLoss: 4,
  },
  439: {
    text: `Deduct 5 Stamina points. There is no such spell as this. You fall 
    down into the pit.`,
    choices: [{ goToPage: 277, text: "Continue.." }],
    staminaLoss: 5,
  },
  440: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 74, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  441: {
    text: `Deduct 1 Stamina point. Do you have a Gold Piece with you? If not, 
    the spell does not work and the little Elvin zips down and cuts you 
    again for 2 Stamina points' worth of damage. If you have a coin, you place it on your wrist and cast 
    the spell. An invisible shield forms around your forearm, and you 
    may use this in defence. Return and fight the Elvin, but 
    because of your shield you may deduct 2 points from the Elvin's dice 
    roll for Attack Strength each round. After the fight, the Gold Piece 
    is no longer usable.`,
    choices: [
      { goToPage: 203, text: "Spell Fail - go back and choose again" },
      {
        goToPage: 203,
        text: "Fight the Elvin",
        fight: { skill: 6, stamina: 4, name: "Elvin" },
      }, // todo lose 2 extra hp
    ],
    staminaLoss: 1,
  },
  442: {
    text: `Deduct 1 Stamina point and cast your spell. Do you have any 
    beeswax with you? If so, you have rubbed it on your sword and it now 
    has been magically enhanced, using half a beezwax. Return and fight the Goblins but, 
    each time you hit a Goblin, you may double the damage you do. If you 
    do not have beeswax, you believe your weapon has been sharpened, 
    but it has not and will do only normal damage.`,
    choices: [
      {
        goToPage: 155,
        text: "Fight the Goblins (double damage)",
        fight: {
          skill: 5,
          stamina: 4,
          name: "Goblin 1",
        },
        extraEnemies: [
          { skill: 6, stamina: 4, name: "Goblin 2" },
          { skill: 5, stamina: 5, name: "Goblin 3" },
        ],
      },
      {
        goToPage: 155,
        text: "Fight the Goblins",
        fight: {
          skill: 5,
          stamina: 4,
          name: "Goblin 1",
        },
        extraEnemies: [
          { skill: 6, stamina: 4, name: "Goblin 2" },
          { skill: 5, stamina: 5, name: "Goblin 3" },
        ],
      },
    ],
    staminaLoss: 1,
  },
  443: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 4, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  444: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 201, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  445: {
    text: `Deduct 5 Stamina points. There is no such spell as this.`,
    choices: [{ goToPage: 64, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  446: {
    text: `Deduct 5 Stamina points. Unfortunately, there is no such spell as 
    this and the time you have wasted on casting it leaves you no time to 
    plan another escape. The boulder crushes you. Your journey has 
    ended here . . .`,
    choices: [{ goToPage: 0, text: "Death" }], // todo you are dead
    staminaLoss: 5,
  },
  447: {
    text: `Deduct 4 Stamina points* The Manticore is in the opposite passage 
    preparing to pounce at you. You cast your spell as it leaps and it roars 
    loudly as it hits your invisible wall in mid-flight! Using your control, 
    you fence it in securely, allowing you to grab the Svinn girl and run 
    from the cave.`,
    choices: [{ goToPage: 456, text: "Continue.." }],
    staminaLoss: 4,
  },
  448: {
    text: `Deduct 4 Stamina points. The creature stops in its tracks and you 
    order it to return to the woods from where it came. Having escaped 
    the creature you go back to sleep.`,
    choices: [{ nightContinue: true, text: "Continue.." }],
    staminaLoss: 4,
  },
  449: {
    text: `Deduct 2 Stamina points. You wait for the spell to take effect and 
    you begin to hear a voice from within. The mysterious voice is telling 
    you that your safest bet is to avoid this door and leave the mine. Do you 
    take heed of this warning or want to continue trying 
    the door?`,
    choices: [
      { goToPage: 144, text: "Listen to the voice - Leave the mine" },
      { goToPage: 268, text: "Ignore the voice - Continue trying the door" },
    ],
    staminaLoss: 2,
  },
  450: {
    text: `Deduct 1 Stamina point. You cannot cast this spell as you do not 
    have the Bracelet of Bone it requires. In actual fact, you cannot cast any 
    spell when your hands are bound (remember this in future).`,
    choices: [{ goToPage: 112, text: "Continue.." }],
    staminaLoss: 1,
  },
  451: {
    text: `Deduct 5 Stamina points. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 220, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  452: {
    text: `Deduct 5 Stamina points. You cast the spell but nothing happens.`,
    choices: [{ goToPage: 117, text: "Go back and choose again" }],
    staminaLoss: 5,
  },
  453: {
    text: `Deduct 2 Stamina points. You cast the spell and begin to grow to 
    three times your normal size. The night creature stops in its tracks. 
    You may, if you wish, Test your Luck. If you are Lucky, the beast takes 
    flight and runs back into the woods. If you are Unlucky, or if you did 
    not Test your Luck, the creature continues to attack but you may 
    double your Skill score as you attack it.`,
    choices: [
      { nightContinue: true, text: "Test your Luck - Success, The creature fled", luck: "success" },
      {
        fightNC: true,
        text: "Test your Luck - Fail, double skill in fight",
        luck: "failed",
      },
      {
        fightNC: true,
        text: "Fight the creature with double skill",
        luck: "blocked",
      },
    ],
    staminaLoss: 2,
    testLuck: { optional: true },
  },
  454: {
    text: `Deduct 2 Stamina points. You cast this spell and consider both 
    directions. Inside your mind, you begin to feel differently when you 
    face through the door and when you face back into the room. Looking 
    through the door, a hot sweat comes over your face, and looking back 
    into the room at your entrance door, this feeling subsides and you feel 
    calm. Will you press on ahead through the door or retrace 
    your steps through the room?`,
    choices: [
      { goToPage: 6, text: "Through the door" },
      { goToPage: 120, text: "Through the room" },
    ],
    staminaLoss: 2,
  },
  455: {
    text: `Deduct 2 Stamina points. You cast the spell and a darkness descends 
    over the room. The Spirit calls out to you, 'You cannot escape from 
    me, mortal!' But under the cover of darkness, you have slipped out of 
    the hut. You leave the village.`,
    choices: [{ goToPage: 196, text: "Continue.." }],
    staminaLoss: 2,
  },
  456: {
    text: `<p>You leave the Manticore's chamber and follow the path to the source 
    of the light. As you had hoped, a cave entrance allows you out on to 
    the side of the hill. You and the Svinn girl find your way back to 
    Torrepani. The Svinn chief is overjoyed to have his daughter back and 
    the village erupts into celebration as their curse is now lifted. You are 
    given the freedom of the village and decide to stay for the day to 
    recuperate. You visit the Svinn healing-priest who will treat your 
    wounds, cure any diseases and lift curses which you may have. 
    <b>Restoring your Skill, Stamina and Luck points to their Initial values.</b> 
    The priest may also rid you of the annoying little Mininmite if he is still 
    with you.</p>
    
    <p>You sleep heavily that night and rise the next morning to continue on 
    your way. Before you go, the Svinn chief meets you. He hands you 
    two gifts: <b>a pouch containing 10 Gold Pieces</b> and <b>a large key</b>. I know 
    you head for Khare' says the chief, 'but the city is evil and you must 
    be on your guard. Two years ago a traveller passed through here 
    from Khare and gave me this key, saying he would never return. This 
    is a key to the city gates and with it you will be able to enter the city 
    unnoticed. Once you get to Khare's south gate, in the next adventure,
    you may you wish to use this key.</p>
    
    <p>You thank him and leave Torrepani. You have made friends here and 
    <b>permanently increase your Initial Luck score by 1 point</b>. Soon the 
    path is leading you on from the Shamutanti Hills down across rice 
    fields towards a great walled city - the Cityport of Khare and on to 
    the next stage of your quest . . .</p>`,
    choices: [{ goToPage: 0, text: "You have won!" }], // You have won + add 1 max Luck  + restore all stats + lift curses and Jann
    getItems: [
      { name: "gold", amount: 10 },
      { name: "khareKey", amount: 1 },
    ],
  },
};

export default gameData;
