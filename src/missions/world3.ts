import { Mission } from '../types/mission';

export const WORLD3_MISSIONS: Mission[] = [
  {
    id: 'w3_m1',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 1,
    title: 'The Repeating Message — Basic for Loop',
    difficulty: 'Beginner',
    npc: {
      id: 'shaman_zulu',
      name: 'Shaman Zulu',
      title: 'Keeper of Jungle Rhythms',
      avatar: '🦜',
      color: '#059669',
      greeting: 'Listen to the drums of the Looping Jungle! They repeat without end.',
      dialogue: [
        'A for loop repeats a block of code for each item in a sequence.',
        'Instead of typing the same chant 3 times, let Python loop through it!',
        'Loop over a list ["Jungle", "Rhythm", "Power"] and print each item!'
      ]
    },
    story: 'The drum circle at the jungle entrance is silent. Chanting three sacred words in a for loop awakens the jungle spirits.',
    learningObjective: 'Understand basic for loop iteration over a sequence.',
    concept: {
      title: 'The for Loop in Python',
      whatIsIt: 'Iterates through each element in a collection or sequence, executing the indented block once per item.',
      whyUseful: 'Automates repetitive actions: updating enemies, checking inventory, processing scores.',
      syntax: 'for item in collection:\n    print(item)',
      exampleCode: 'words = ["Alpha", "Beta", "Gamma"]\nfor w in words:\n    print(w)',
      expectedOutput: 'Alpha\nBeta\nGamma',
      realWorldMetaphor: 'Inspecting each card in a deck of playing cards, one after another.',
      commonMistakes: [
        'Forgetting the in keyword or colon (:).',
        'Forgetting to indent the loop body.'
      ]
    },
    challenge: 'Given words = ["Jungle", "Rhythm", "Power"], write a for loop to print each word on its own line.',
    starterCode: 'words = ["Jungle", "Rhythm", "Power"]\n# Write a for loop to print each word\n',
    expectedOutputSummary: 'Jungle\nRhythm\nPower',
    testCases: [
      {
        id: 'tc_w3_m1_1',
        description: 'Output must be "Jungle\\nRhythm\\nPower"',
        type: 'output_exact',
        expectedOutput: 'Jungle\nRhythm\nPower'
      }
    ],
    hints: [
      'Concept: for word in words: print(word)',
      'Syntax:\nfor word in words:\n    print(word)',
      'Solution:\nwords = ["Jungle", "Rhythm", "Power"]\nfor word in words:\n    print(word)'
    ],
    successMessage: 'The ancient stone drums burst into rhythmic resonance! Wild birds take flight across the canopy.',
    xpReward: 300,
    coinReward: 75,
    unlockRequirements: ['w2_m10'],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w3_m2',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 2,
    title: 'The Number Trail — range()',
    difficulty: 'Beginner',
    npc: {
      id: 'explorer_maya',
      name: 'Explorer Maya',
      title: 'Cartographer of the Canopy',
      avatar: '🧭',
      color: '#059669',
      greeting: 'Count the stepping stones across the piranha stream!',
      dialogue: [
        'range(start, stop) generates a sequence of numbers from start up to (but NOT including) stop.',
        'range(1, 6) generates: 1, 2, 3, 4, 5.',
        'Use a for loop with range(1, 6) to print the numbers 1 through 5!'
      ]
    },
    story: 'Five numbered stepping stones rise from the murky river. Counting them sequentially activates the crossing bridge.',
    learningObjective: 'Learn how to use range() with start and stop parameters in a for loop.',
    concept: {
      title: 'The range() Function',
      whatIsIt: 'Generates arithmetic progressions of integers. range(start, stop, step).',
      whyUseful: 'Running a loop an exact number of times: spawning 10 enemies, repeating a countdown.',
      syntax: 'for i in range(1, 6):\n    print(i)',
      exampleCode: 'for n in range(1, 4):\n    print(n)',
      expectedOutput: '1\n2\n3',
      realWorldMetaphor: 'Following kilometer milestone markers along an ancient stone road.',
      commonMistakes: [
        'Remember that range is non-inclusive at the end: range(1, 5) stops at 4, not 5!',
        'Calling range() without a loop or list()—it returns a range object, not printed numbers.'
      ]
    },
    challenge: 'Write a for loop using range(1, 6) to print the numbers 1 through 5.',
    starterCode: '# Use for loop with range(1, 6)\n',
    expectedOutputSummary: '1\n2\n3\n4\n5',
    testCases: [
      {
        id: 'tc_w3_m2_1',
        description: 'Output must be 1 through 5 on separate lines',
        type: 'output_exact',
        expectedOutput: '1\n2\n3\n4\n5'
      }
    ],
    hints: [
      'Concept: for i in range(1, 6): print(i)',
      'Syntax:\nfor i in range(1, 6):\n    print(i)',
      'Solution:\nfor i in range(1, 6):\n    print(i)'
    ],
    successMessage: 'The five stone pillars illuminate in order! The stream forms a gentle walkway.',
    xpReward: 310,
    coinReward: 80,
    unlockRequirements: ['w3_m1'],
    stationPosition: [8, 0, -14],
    npcPosition: [6, 0, -12]
  },
  {
    id: 'w3_m3',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 3,
    title: 'The Treasure Counter — Accumulating Loops',
    difficulty: 'Intermediate',
    npc: {
      id: 'shaman_zulu',
      name: 'Shaman Zulu',
      title: 'Keeper of Jungle Rhythms',
      avatar: '🦜',
      color: '#059669',
      greeting: 'Tally the golden nuggets discovered in the riverbed!',
      dialogue: [
        'To accumulate a sum, start a total variable at 0 outside the loop.',
        'Inside the loop, add each number: total += number.',
        'Sum the numbers in [10, 20, 30, 40] and print the final total (100)!'
      ]
    },
    story: 'Four golden idols each grant treasure points. Accumulating their sum unlocks the shrine door.',
    learningObjective: 'Master the accumulator pattern in loops using +=.',
    concept: {
      title: 'The Accumulator Pattern',
      whatIsIt: 'Maintaining a running total variable outside a loop that updates on each iteration.',
      whyUseful: 'Calculating total scores, inventory weight, player gold, or average damage.',
      syntax: 'total = 0\nfor x in items:\n    total += x\nprint(total)',
      exampleCode: 'coins = [5, 10, 15]\ntotal = 0\nfor c in coins:\n    total += c\nprint(total)',
      expectedOutput: '30',
      realWorldMetaphor: 'Dropping coins into a piggy bank one by one until all are counted.',
      commonMistakes: [
        'Resetting total = 0 INSIDE the loop: this wipes the total on every step!',
        'Indenting the final print(total) inside the loop: this prints intermediate steps instead of the final sum.'
      ]
    },
    challenge: 'Given nuggets = [10, 20, 30, 40], calculate their sum with a loop and print the total (100).',
    starterCode: 'nuggets = [10, 20, 30, 40]\ntotal = 0\n# Loop over nuggets and add to total\n\n# Print final total outside the loop:\n',
    expectedOutputSummary: '100',
    testCases: [
      {
        id: 'tc_w3_m3_1',
        description: 'Output must be 100',
        type: 'output_exact',
        expectedOutput: '100'
      }
    ],
    hints: [
      'Concept: for n in nuggets: total += n, then print(total) outside the loop.',
      'Syntax:\nfor n in nuggets:\n    total += n\nprint(total)',
      'Solution:\nnuggets = [10, 20, 30, 40]\ntotal = 0\nfor n in nuggets:\n    total += n\nprint(total)'
    ],
    successMessage: 'The scales balance perfectly at 100! The shrine door opens to reveal sacred jungle relics.',
    xpReward: 320,
    coinReward: 85,
    unlockRequirements: ['w3_m2'],
    stationPosition: [-8, 0, -20],
    npcPosition: [-6, 0, -18]
  },
  {
    id: 'w3_m4',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 4,
    title: 'The River Machine — The while Loop',
    difficulty: 'Intermediate',
    npc: {
      id: 'explorer_maya',
      name: 'Explorer Maya',
      title: 'Cartographer of the Canopy',
      avatar: '🧭',
      color: '#059669',
      greeting: 'Observe the ancient watermill. It keeps turning AS LONG AS the reservoir fills!',
      dialogue: [
        'A while loop keeps running as long as its condition remains True.',
        'You must update the variable inside the loop so the condition eventually becomes False!',
        'Start water_level = 1. While water_level <= 3, print water_level, then add 1 to water_level!'
      ]
    },
    story: 'Pumping water into the aqueduct requires continuous cycling until the gauge hits level 3.',
    learningObjective: 'Understand how while loops operate and how loop variables prevent infinite execution.',
    concept: {
      title: 'The while Loop',
      whatIsIt: 'Repeatedly executes as long as a Boolean condition evaluates to True.',
      whyUseful: 'Used when you don’t know ahead of time how many times an action needs to run (e.g. game main loop, waiting for user input).',
      syntax: 'while condition:\n    # Code\n    # Update condition variable',
      exampleCode: 'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1',
      expectedOutput: '1\n2\n3',
      realWorldMetaphor: 'Filling a bucket with water: WHILE the bucket is not full, keep pouring water.',
      commonMistakes: [
        'Forgetting to increment the variable (e.g. count += 1), causing an infinite loop!',
        'Off-by-one errors in the while condition (e.g. < vs <=).'
      ]
    },
    challenge: 'Set water_level = 1. Write a while loop: while water_level <= 3, print water_level, then water_level += 1.',
    starterCode: 'water_level = 1\n# Write while loop here:\n',
    expectedOutputSummary: '1\n2\n3',
    testCases: [
      {
        id: 'tc_w3_m4_1',
        description: 'Output must be 1, 2, 3 on separate lines',
        type: 'output_exact',
        expectedOutput: '1\n2\n3'
      }
    ],
    hints: [
      'Concept: while water_level <= 3:\n    print(water_level)\n    water_level += 1',
      'Syntax:\nwhile water_level <= 3:\n    print(water_level)\n    water_level += 1',
      'Solution:\nwater_level = 1\nwhile water_level <= 3:\n    print(water_level)\n    water_level += 1'
    ],
    successMessage: 'The watermill turns with tremendous power! Pure crystal water cascades down the jungle aqueduct.',
    xpReward: 330,
    coinReward: 90,
    unlockRequirements: ['w3_m3'],
    stationPosition: [6, 0, -26],
    npcPosition: [4, 0, -24]
  },
  {
    id: 'w3_m5',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 5,
    title: 'The Endless Trap — Loop Safeguards',
    difficulty: 'Intermediate',
    npc: {
      id: 'shaman_zulu',
      name: 'Shaman Zulu',
      title: 'Keeper of Jungle Rhythms',
      avatar: '🦜',
      color: '#059669',
      greeting: 'Beware the labyrinth of echoes! A traveler without a counter wanders forever.',
      dialogue: [
        'An infinite loop occurs when a while condition NEVER becomes False.',
        'Countdown loops decrease their variable: timer -= 1.',
        'Start timer = 3. While timer > 0, print timer, then timer -= 1. After the loop, print "Escape!"'
      ]
    },
    story: 'You trigger a stone mechanism with a countdown timer. Decrementing the counter safely defuses the trap.',
    learningObjective: 'Learn how countdown loops work and how post-loop code executes after termination.',
    concept: {
      title: 'Countdown Loops & Safeguards',
      whatIsIt: 'Decrementing a counter towards zero or a target limit to ensure safe termination.',
      whyUseful: 'Bomb defusal timers, potion duration ticks, countdown clocks in games.',
      syntax: 'while t > 0:\n    print(t)\n    t -= 1\nprint("Done")',
      exampleCode: 't = 3\nwhile t > 0:\n    print(t)\n    t -= 1\nprint("Launch!")',
      expectedOutput: '3\n2\n1\nLaunch!',
      realWorldMetaphor: 'An hourglass where sand grains drop until empty, triggering an alarm.',
      commonMistakes: [
        'Accidentally increasing t += 1 instead of decreasing t -= 1.',
        'Indenting the final "Escape!" inside the loop.'
      ]
    },
    challenge: 'Set timer = 3. While timer > 0, print timer, then timer -= 1. When finished, print "Escape!".',
    starterCode: 'timer = 3\n# Countdown loop\n',
    expectedOutputSummary: '3\n2\n1\nEscape!',
    testCases: [
      {
        id: 'tc_w3_m5_1',
        description: 'Output must be 3, 2, 1, Escape!',
        type: 'output_exact',
        expectedOutput: '3\n2\n1\nEscape!'
      }
    ],
    hints: [
      'Concept: while timer > 0:\n    print(timer)\n    timer -= 1\nprint("Escape!")',
      'Syntax:\nwhile timer > 0:\n    print(timer)\n    timer -= 1\nprint("Escape!")',
      'Solution:\ntimer = 3\nwhile timer > 0:\n    print(timer)\n    timer -= 1\nprint("Escape!")'
    ],
    successMessage: 'The ancient stone spikes retract into the ground! You have safely bypassed the trap.',
    xpReward: 340,
    coinReward: 90,
    unlockRequirements: ['w3_m4'],
    stationPosition: [-6, 0, -32],
    npcPosition: [-4, 0, -30]
  },
  {
    id: 'w3_m6',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 6,
    title: 'The Hidden Shortcut — break Statement',
    difficulty: 'Intermediate',
    npc: {
      id: 'explorer_maya',
      name: 'Explorer Maya',
      title: 'Cartographer of the Canopy',
      avatar: '🧭',
      color: '#059669',
      greeting: 'When exploring the canopy vines, stop immediately when you locate the Golden Idol!',
      dialogue: [
        'The break keyword instantly exits a loop prematurely.',
        'Loop through items = ["Stone", "Twig", "Golden Idol", "Leaf"].',
        'If item == "Golden Idol", print "Found!" and call break!'
      ]
    },
    story: 'Searching through jungle debris can take hours. Using break stops searching the moment the goal is found.',
    learningObjective: 'Learn how break exits a loop immediately.',
    concept: {
      title: 'The break Statement',
      whatIsIt: 'Immediately terminates the nearest enclosing loop and transfers execution to the code after the loop.',
      whyUseful: 'Searching algorithms: stop searching as soon as the target user or item is located.',
      syntax: 'for item in items:\n    if item == target:\n        break',
      exampleCode: 'for x in [1, 2, 3, 4]:\n    if x == 3:\n        print("Got 3")\n        break',
      expectedOutput: 'Got 3',
      realWorldMetaphor: 'Stopping your search through a drawer as soon as your hand grasps your house keys.',
      commonMistakes: [
        'Putting break outside of any loop (Python will raise a SyntaxError).',
        'Calling break before printing or processing the found item.'
      ]
    },
    challenge: 'Given items = ["Stone", "Twig", "Golden Idol", "Leaf"], loop through them. If item == "Golden Idol", print "Found!" and break.',
    starterCode: 'items = ["Stone", "Twig", "Golden Idol", "Leaf"]\n# Loop and break when Golden Idol is found\n',
    expectedOutputSummary: 'Found!',
    testCases: [
      {
        id: 'tc_w3_m6_1',
        description: 'Output must be "Found!"',
        type: 'output_exact',
        expectedOutput: 'Found!'
      }
    ],
    hints: [
      'Concept: for item in items: if item == "Golden Idol": print("Found!"); break',
      'Syntax:\nfor item in items:\n    if item == "Golden Idol":\n        print("Found!")\n        break',
      'Solution:\nitems = ["Stone", "Twig", "Golden Idol", "Leaf"]\nfor item in items:\n    if item == "Golden Idol":\n        print("Found!")\n        break'
    ],
    successMessage: 'You snatch the Golden Idol from the vines before the canopy monkeys notice!',
    xpReward: 350,
    coinReward: 95,
    unlockRequirements: ['w3_m5'],
    stationPosition: [8, 0, -38],
    npcPosition: [6, 0, -36]
  },
  {
    id: 'w3_m7',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 7,
    title: 'The Skipping Stones — continue Statement',
    difficulty: 'Intermediate',
    npc: {
      id: 'shaman_zulu',
      name: 'Shaman Zulu',
      title: 'Keeper of Jungle Rhythms',
      avatar: '🦜',
      color: '#059669',
      greeting: 'Some stones are cursed! Skip over them without stepping on their surface.',
      dialogue: [
        'The continue statement skips the rest of the current iteration and jumps directly to the next.',
        'Loop through numbers from 1 to 5 with range(1, 6).',
        'If the number is 3, call continue! Otherwise, print the number (1, 2, 4, 5)!'
      ]
    },
    story: 'The third stone is smeared with poison sap. Skipping it allows safe passage across the swamp.',
    learningObjective: 'Learn how continue skips a single iteration and proceeds with the rest of the loop.',
    concept: {
      title: 'The continue Statement',
      whatIsIt: 'Skips the remaining statements inside the loop body for the current turn, jumping straight to the next iteration.',
      whyUseful: 'Filtering out invalid or unwanted values without stopping the entire loop.',
      syntax: 'for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)',
      exampleCode: 'for x in [1, 2, 3]:\n    if x == 2:\n        continue\n    print(x)',
      expectedOutput: '1\n3',
      realWorldMetaphor: 'A chef inspecting fruit who tosses aside a bruised apple and immediately inspects the next one.',
      commonMistakes: [
        'Confusing break (which ends the entire loop) with continue (which only skips the current turn).',
        'Printing the number BEFORE checking whether to continue.'
      ]
    },
    challenge: 'Using range(1, 6), loop through 1 to 5. If i == 3, continue. Otherwise print i.',
    starterCode: '# Use range(1, 6) and continue when i == 3\n',
    expectedOutputSummary: '1\n2\n4\n5',
    testCases: [
      {
        id: 'tc_w3_m7_1',
        description: 'Output must be 1, 2, 4, 5 on separate lines (skipping 3)',
        type: 'output_exact',
        expectedOutput: '1\n2\n4\n5'
      }
    ],
    hints: [
      'Concept: if i == 3: continue else print(i)',
      'Syntax:\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)',
      'Solution:\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)'
    ],
    successMessage: 'You leap gracefully over the venomous stone! The path through the marsh is clear.',
    xpReward: 360,
    coinReward: 100,
    unlockRequirements: ['w3_m6'],
    stationPosition: [-8, 0, -44],
    npcPosition: [-6, 0, -42]
  },
  {
    id: 'w3_m8',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 8,
    title: 'The Nested Maze — Nested Loops',
    difficulty: 'Intermediate',
    npc: {
      id: 'explorer_maya',
      name: 'Explorer Maya',
      title: 'Cartographer of the Canopy',
      avatar: '🧭',
      color: '#059669',
      greeting: 'The temple floor is a 2D grid of coordinates!',
      dialogue: [
        'A nested loop is a loop inside another loop.',
        'For each row, the inner loop visits every column!',
        'Loop row in [1, 2], and inside loop col in [1, 2]. Print f"{row}-{col}"!'
      ]
    },
    story: 'Activating the grid matrix in the ancient courtyard requires surveying every cell coordinate.',
    learningObjective: 'Master nested loops for multi-dimensional coordinate mapping.',
    concept: {
      title: 'Nested Loops',
      whatIsIt: 'Placing one loop inside the body of another. The inner loop executes completely for each iteration of the outer loop.',
      whyUseful: '2D game boards (chess, tic-tac-toe), pixel image processing, matrices, and spatial grids.',
      syntax: 'for r in [1, 2]:\n    for c in [1, 2]:\n        print(f"{r}-{c}")',
      exampleCode: 'for x in ["A", "B"]:\n    for y in [1, 2]:\n        print(x + str(y))',
      expectedOutput: 'A1\nA2\nB1\nB2',
      realWorldMetaphor: 'Reading hours and minutes on a clock: for every hour that passes, the minute hand ticks through 60 minutes.',
      commonMistakes: [
        'Using the same variable name for both outer and inner loops (e.g. for i ... for i ...).',
        'Improper indentation causing the inner loop to become an outer loop.'
      ]
    },
    challenge: 'Write nested loops: outer row in [1, 2], inner col in [1, 2]. Print f"{row}-{col}". Output:\n1-1\n1-2\n2-1\n2-2',
    starterCode: '# Write nested loops for row in [1, 2] and col in [1, 2]\n',
    expectedOutputSummary: '1-1\n1-2\n2-1\n2-2',
    testCases: [
      {
        id: 'tc_w3_m8_1',
        description: 'Output must be 1-1, 1-2, 2-1, 2-2',
        type: 'output_exact',
        expectedOutput: '1-1\n1-2\n2-1\n2-2'
      }
    ],
    hints: [
      'Concept: for row in [1, 2]: for col in [1, 2]: print(f"{row}-{col}")',
      'Syntax:\nfor row in [1, 2]:\n    for col in [1, 2]:\n        print(f"{row}-{col}")',
      'Solution:\nfor row in [1, 2]:\n    for col in [1, 2]:\n        print(f"{row}-{col}")'
    ],
    successMessage: 'The entire mosaic grid flashes with ancient glyphs! The temple doors open.',
    xpReward: 380,
    coinReward: 105,
    unlockRequirements: ['w3_m7'],
    stationPosition: [4, 0, -50],
    npcPosition: [2, 0, -48]
  },
  {
    id: 'w3_m9',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 9,
    title: 'The Pattern Temple — Star Patterns',
    difficulty: 'Intermediate',
    npc: {
      id: 'shaman_zulu',
      name: 'Shaman Zulu',
      title: 'Keeper of Jungle Rhythms',
      avatar: '🦜',
      color: '#059669',
      greeting: 'Inscribe the sacred stepped pyramid of stars upon the altar!',
      dialogue: [
        'In Python, multiplying a string by an integer repeats it: "*" * 3 becomes "***"!',
        'Using range(1, 4), multiply "*" by i on each line.',
        'This creates a triangle:\n*\n**\n***'
      ]
    },
    story: 'The Pattern Temple demands an ascending constellation of asterisks to unlock its inner sanctum.',
    learningObjective: 'Combine loops with string repetition operator (*) to generate geometric patterns.',
    concept: {
      title: 'String Multiplication in Loops',
      whatIsIt: 'Multiplying a string by an integer n repeats the string n times.',
      whyUseful: 'Drawing ASCII visual art, progress bars ("=" * percent), table borders, and divider lines.',
      syntax: 'for i in range(1, 4):\n    print("*" * i)',
      exampleCode: 'for n in range(1, 3):\n    print("#" * n)',
      expectedOutput: '#\n##',
      realWorldMetaphor: 'Carving steps into stone: each step is one stone wider than the previous one.',
      commonMistakes: [
        'Multiplying a string by a string (e.g. "*" * "*") causes a TypeError.',
        'Starting range at 0: printing "*" * 0 outputs a blank line!'
      ]
    },
    challenge: 'Use a for loop with range(1, 4) to print a triangle of stars:\n*\n**\n***',
    starterCode: '# Generate the 3-line star triangle using range(1, 4)\n',
    expectedOutputSummary: '*\n**\n***',
    testCases: [
      {
        id: 'tc_w3_m9_1',
        description: 'Output must be star triangle of size 3',
        type: 'output_exact',
        expectedOutput: '*\n**\n***'
      }
    ],
    hints: [
      'Concept: for i in range(1, 4): print("*" * i)',
      'Syntax:\nfor i in range(1, 4):\n    print("*" * i)',
      'Solution:\nfor i in range(1, 4):\n    print("*" * i)'
    ],
    successMessage: 'The star glyphs glow with luminescent emerald power! An ancient pedestal rises.',
    xpReward: 400,
    coinReward: 110,
    unlockRequirements: ['w3_m8'],
    stationPosition: [-4, 0, -56],
    npcPosition: [-2, 0, -54]
  },
  {
    id: 'w3_m10',
    worldId: 'looping-jungle',
    worldIndex: 3,
    missionNumber: 10,
    title: 'The Jungle Boss — Reactivating the Ancient Engine',
    difficulty: 'Advanced',
    isBoss: true,
    npc: {
      id: 'jungle_engine',
      name: 'The Ancient Jungle Engine',
      title: 'Heart of the Looping Jungle',
      avatar: '⚙️',
      color: '#059669',
      greeting: 'CLANK... GEARS DISENGAGED. SYNCHRONIZE 5 POWER CYCLES!',
      dialogue: [
        'The ancient engine needs its 5 colossal gears synchronized!',
        'Start total_rpm = 0.',
        'Using a loop for gear in range(1, 6), calculate total_rpm += gear * 10.',
        'After the loop finishes, print total_rpm (150) to reactivate the engine!'
      ]
    },
    story: 'The massive botanical steam engine at the heart of the jungle lies dormant. Calculating the compounded gear rotation re-engages the water pumps across the entire biome.',
    learningObjective: 'Combine range(), arithmetic, and accumulation in a boss-level challenge.',
    concept: {
      title: 'Loop Accumulation & Boss Mechanics',
      whatIsIt: 'Running iterative state updates across complex cycles to model continuous mechanical operations.',
      whyUseful: 'Physics calculations, simulation engines, compound interest, score multipliers.',
      syntax: 'total = 0\nfor i in range(1, 6):\n    total += i * 10\nprint(total)',
      exampleCode: 'rpm = 0\nfor g in range(1, 4):\n    rpm += g * 5\nprint(rpm)',
      expectedOutput: '30',
      realWorldMetaphor: 'Winding a massive clockwork spring by turning five interlocking gears in series.',
      commonMistakes: [
        'Printing inside the loop instead of at the end.',
        'Setting the range stop to 5 instead of 6.'
      ]
    },
    challenge: 'Set total_rpm = 0. Loop gear in range(1, 6), adding gear * 10 to total_rpm. Print total_rpm (150).',
    starterCode: '# Jungle Boss: Reactivate the Ancient Engine!\ntotal_rpm = 0\n\n# Accumulate gear * 10 for gear in range(1, 6)\n\n# Print final total_rpm outside the loop\n',
    expectedOutputSummary: '150',
    testCases: [
      {
        id: 'tc_w3_m10_1',
        description: 'Output must be exactly 150',
        type: 'output_exact',
        expectedOutput: '150'
      }
    ],
    hints: [
      'Concept: for gear in range(1, 6): total_rpm += gear * 10, then print(total_rpm).',
      'Syntax:\nfor gear in range(1, 6):\n    total_rpm += gear * 10\nprint(total_rpm)',
      'Solution:\ntotal_rpm = 0\nfor gear in range(1, 6):\n    total_rpm += gear * 10\nprint(total_rpm)'
    ],
    successMessage: 'THE ANCIENT JUNGLE ENGINE ROARS TO LIFE! Massive moss-covered gears spin with tremendous harmony, opening the mountain gondola leading up into the snowy heights of Function Mountains!',
    xpReward: 500,
    coinReward: 150,
    unlockRequirements: ['w3_m9'],
    stationPosition: [0, 0, -64],
    npcPosition: [-3, 0, -62]
  }
];
