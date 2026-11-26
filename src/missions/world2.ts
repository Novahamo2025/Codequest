import { Mission } from '../types/mission';

export const WORLD2_MISSIONS: Mission[] = [
  {
    id: 'w2_m1',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 1,
    title: 'The Locked Door — Comparison Operators',
    difficulty: 'Beginner',
    npc: {
      id: 'sentinel_gareth',
      name: 'Sentinel Gareth',
      title: 'Gatekeeper of the Valley',
      avatar: '🛡️',
      color: '#0284C7',
      greeting: 'Halt! Only those who understand numerical comparisons may enter the Valley.',
      dialogue: [
        'The ancient door compares your keys against the lock threshold.',
        'In Python, we compare using == (equals), != (not equals), > (greater), and < (less).',
        'Compare if player_level (5) is greater than required_level (3). Print the result (True)!'
      ]
    },
    story: 'The stone gateway to the lower gorge assesses travelers by their power level. A correct comparison rune unlocks the gate.',
    learningObjective: 'Learn Python comparison operators (==, !=, >, <, >=, <=) and their Boolean outcomes.',
    concept: {
      title: 'Comparison Operators',
      whatIsIt: 'Operators that compare two values and evaluate to either True or False.',
      whyUseful: 'Comparisons are the tests behind every game rule: checking health > 0, score == 100, or inventory_count < capacity.',
      syntax: 'print(5 > 3) # True\nprint(10 == 10) # True',
      exampleCode: 'level = 5\nrequired = 3\nprint(level > required)',
      expectedOutput: 'True',
      realWorldMetaphor: 'A height measurement ruler at the entrance of a rollercoaster ride.',
      commonMistakes: [
        'Using a single = for comparison: = is for assigning variables, while == is for checking equality!',
        'Comparing strings and numbers with > or <.'
      ]
    },
    challenge: 'Set player_level = 5 and required_level = 3. Print the comparison result of player_level > required_level.',
    starterCode: 'player_level = 5\nrequired_level = 3\n# Compare player_level > required_level\nprint()\n',
    expectedOutputSummary: 'True',
    testCases: [
      {
        id: 'tc_w2_m1_1',
        description: 'Output must be "True"',
        type: 'output_exact',
        expectedOutput: 'True'
      }
    ],
    hints: [
      'Concept: Use > between player_level and required_level.',
      'Syntax: print(player_level > required_level)',
      'Solution:\nplayer_level = 5\nrequired_level = 3\nprint(player_level > required_level)'
    ],
    successMessage: 'The heavy stone portal unlocks with a deep hum. Sentinel Gareth steps aside with an approving nod.',
    xpReward: 200,
    coinReward: 50,
    unlockRequirements: ['w1_m10'],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w2_m2',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 2,
    title: 'The Two Paths — The if Statement',
    difficulty: 'Beginner',
    npc: {
      id: 'ranger_talia',
      name: 'Ranger Talia',
      title: 'Scout of the High Falls',
      avatar: '🧭',
      color: '#0284C7',
      greeting: 'Two paths stretch ahead, traveler. One is blocked by fallen boulders.',
      dialogue: [
        'The if statement allows Python to make decisions!',
        'If a condition is True, the indented code beneath it runs.',
        'If has_torch is True, print "Path illuminated"!'
      ]
    },
    story: 'Entering the shadowy chasm requires illumination. An if-condition checks if your lantern is lit before descending.',
    learningObjective: 'Learn the fundamental syntax of the if statement and indentation in Python.',
    concept: {
      title: 'The if Statement',
      whatIsIt: 'Executes a block of code ONLY if its specified condition evaluates to True.',
      whyUseful: 'Enables branching logic: taking damage only when hit, opening chests only when unlocked.',
      syntax: 'if condition:\n    # Indented code to run\n    print("Condition was True")',
      exampleCode: 'has_torch = True\nif has_torch:\n    print("Path illuminated")',
      expectedOutput: 'Path illuminated',
      realWorldMetaphor: 'Like an umbrella: IF it is raining outside, THEN open the umbrella.',
      commonMistakes: [
        'Forgetting the colon (:) at the end of the if line.',
        'Forgetting to indent (usually 4 spaces) the code inside the if block.'
      ]
    },
    challenge: 'Set has_torch = True. Write an if statement: if has_torch is True, print "Path illuminated".',
    starterCode: 'has_torch = True\n# Write your if statement here:\n\n',
    expectedOutputSummary: 'Path illuminated',
    testCases: [
      {
        id: 'tc_w2_m2_1',
        description: 'Output must be "Path illuminated"',
        type: 'output_exact',
        expectedOutput: 'Path illuminated'
      }
    ],
    hints: [
      'Concept: Write if has_torch: followed by a colon and an indented print statement.',
      'Syntax:\nif has_torch:\n    print("Path illuminated")',
      'Solution:\nhas_torch = True\nif has_torch:\n    print("Path illuminated")'
    ],
    successMessage: 'Flames flicker along the cavern walls! The path is brightly lit with golden fire.',
    xpReward: 220,
    coinReward: 55,
    unlockRequirements: ['w2_m1'],
    stationPosition: [8, 0, -14],
    npcPosition: [6, 0, -12]
  },
  {
    id: 'w2_m3',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 3,
    title: 'The Hidden Bridge — if / else',
    difficulty: 'Beginner',
    npc: {
      id: 'sentinel_gareth',
      name: 'Sentinel Gareth',
      title: 'Gatekeeper of the Valley',
      avatar: '🛡️',
      color: '#0284C7',
      greeting: 'Before you lies the roaring cataract river! The drawbridge waits.',
      dialogue: [
        'What if the condition is False? That is where else comes to our rescue.',
        'If bridge_power >= 50, print "Bridge Lowered". Otherwise (else), print "Bridge Raised".',
        'Test it with bridge_power = 60!'
      ]
    },
    story: 'The mystic drawbridge checks water pressure. If adequate power exists, the bridge lowers safely.',
    learningObjective: 'Master the if-else construct for binary branching.',
    concept: {
      title: 'The if-else Statement',
      whatIsIt: 'Provides two alternative paths: one executes if the condition is True, the other if False.',
      whyUseful: 'Guarantees that one of two actions will occur: victory or defeat, pass or fail, attack or dodge.',
      syntax: 'if condition:\n    # Runs if True\nelse:\n    # Runs if False',
      exampleCode: 'power = 60\nif power >= 50:\n    print("Bridge Lowered")\nelse:\n    print("Bridge Raised")',
      expectedOutput: 'Bridge Lowered',
      realWorldMetaphor: 'A fork in the road where you must turn either Left or Right, never standing still.',
      commonMistakes: [
        'Writing a condition on the else line: else power < 50: (else never takes a condition!).',
        'Forgetting the colon after else:.'
      ]
    },
    challenge: 'Set bridge_power = 60. If bridge_power >= 50, print "Bridge Lowered", else print "Bridge Raised".',
    starterCode: 'bridge_power = 60\n# Implement if-else to check bridge_power\n',
    expectedOutputSummary: 'Bridge Lowered',
    testCases: [
      {
        id: 'tc_w2_m3_1',
        description: 'Output must be "Bridge Lowered"',
        type: 'output_exact',
        expectedOutput: 'Bridge Lowered'
      }
    ],
    hints: [
      'Concept: if bridge_power >= 50: print("Bridge Lowered") else: print("Bridge Raised")',
      'Syntax:\nif bridge_power >= 50:\n    print("Bridge Lowered")\nelse:\n    print("Bridge Raised")',
      'Solution:\nbridge_power = 60\nif bridge_power >= 50:\n    print("Bridge Lowered")\nelse:\n    print("Bridge Raised")'
    ],
    successMessage: 'Ropes tighten and the grand suspension bridge settles softly across the gorge!',
    xpReward: 240,
    coinReward: 60,
    unlockRequirements: ['w2_m2'],
    stationPosition: [-8, 0, -20],
    npcPosition: [-6, 0, -18]
  },
  {
    id: 'w2_m4',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 4,
    title: 'The Royal Decision — elif Statements',
    difficulty: 'Intermediate',
    npc: {
      id: 'ranger_talia',
      name: 'Ranger Talia',
      title: 'Scout of the High Falls',
      avatar: '🧭',
      color: '#0284C7',
      greeting: 'The Valley Castle evaluates visitors by their noble rank!',
      dialogue: [
        'When you have more than two outcomes, use elif (short for else-if).',
        'If score >= 90: "Knight Commander", elif score >= 70: "Honorary Knight", else: "Squire".',
        'With score = 85, print the resulting knight rank!'
      ]
    },
    story: 'The herald of the Valley Citadel classifies your standing based on points awarded for valor.',
    learningObjective: 'Learn multi-branch conditional checking with if, elif, and else.',
    concept: {
      title: 'Multi-Way Branching with elif',
      whatIsIt: 'elif lets you check multiple conditions in order until one is found to be True.',
      whyUseful: 'Used for grading tiers, dialog choices, AI difficulty levels, and menu navigation.',
      syntax: 'if cond1:\n    ...\nelif cond2:\n    ...\nelse:\n    ...',
      exampleCode: 'score = 85\nif score >= 90:\n    print("Knight Commander")\nelif score >= 70:\n    print("Honorary Knight")\nelse:\n    print("Squire")',
      expectedOutput: 'Honorary Knight',
      realWorldMetaphor: 'A sorting ceremony assigning apprentices to different royal guilds based on aptitude.',
      commonMistakes: [
        'Putting conditions in reverse order (e.g. checking >= 70 before >= 90).',
        'Writing "else if" instead of Python’s single keyword elif.'
      ]
    },
    challenge: 'Set score = 85. If score >= 90 print "Knight Commander", elif score >= 70 print "Honorary Knight", else print "Squire".',
    starterCode: 'score = 85\n# Check score with if / elif / else\n',
    expectedOutputSummary: 'Honorary Knight',
    testCases: [
      {
        id: 'tc_w2_m4_1',
        description: 'Output must be "Honorary Knight"',
        type: 'output_exact',
        expectedOutput: 'Honorary Knight'
      }
    ],
    hints: [
      'Concept: Use if score >= 90, elif score >= 70, else.',
      'Syntax:\nif score >= 90:\n    print("Knight Commander")\nelif score >= 70:\n    print("Honorary Knight")\nelse:\n    print("Squire")',
      'Solution:\nscore = 85\nif score >= 90:\n    print("Knight Commander")\nelif score >= 70:\n    print("Honorary Knight")\nelse:\n    print("Squire")'
    ],
    successMessage: 'The herald sounds a crystal horn: "Hail, Honorary Knight! Enter freely!"',
    xpReward: 250,
    coinReward: 65,
    unlockRequirements: ['w2_m3'],
    stationPosition: [6, 0, -26],
    npcPosition: [4, 0, -24]
  },
  {
    id: 'w2_m5',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 5,
    title: 'The Three Keys — Logical and',
    difficulty: 'Intermediate',
    npc: {
      id: 'sentinel_gareth',
      name: 'Sentinel Gareth',
      title: 'Gatekeeper of the Valley',
      avatar: '🛡️',
      color: '#0284C7',
      greeting: 'This vault door requires TWO conditions to be satisfied simultaneously!',
      dialogue: [
        'The logical and operator requires BOTH sides to be True.',
        'If has_gold_key and has_password, the vault opens!',
        'Set has_gold_key = True and has_password = True. If both, print "Vault Open"!'
      ]
    },
    story: 'The Valley Vault safeguards ancient relics. Both the physical gold key and the verbal cipher must be present.',
    learningObjective: 'Learn how to combine conditions using the logical and operator.',
    concept: {
      title: 'The and Operator',
      whatIsIt: 'Evaluates to True ONLY if BOTH conditions are True.',
      whyUseful: 'Requiring multiple criteria: having enough mana AND being in range to cast a spell.',
      syntax: 'if cond1 and cond2:\n    print("Both are True")',
      exampleCode: 'has_key = True\nhas_pass = True\nif has_key and has_pass:\n    print("Vault Open")',
      expectedOutput: 'Vault Open',
      realWorldMetaphor: 'A bank safe requiring two bankers to turn their keys at the exact same moment.',
      commonMistakes: [
        'Expecting and to be True if only one side is True (that is the job of or!).',
        'Writing & instead of the Python keyword and.'
      ]
    },
    challenge: 'Set has_gold_key = True and has_password = True. If both are True, print "Vault Open".',
    starterCode: 'has_gold_key = True\nhas_password = True\n# Use logical and\n',
    expectedOutputSummary: 'Vault Open',
    testCases: [
      {
        id: 'tc_w2_m5_1',
        description: 'Output must be "Vault Open"',
        type: 'output_exact',
        expectedOutput: 'Vault Open'
      }
    ],
    hints: [
      'Concept: if has_gold_key and has_password: print("Vault Open")',
      'Syntax:\nif has_gold_key and has_password:\n    print("Vault Open")',
      'Solution:\nhas_gold_key = True\nhas_password = True\nif has_gold_key and has_password:\n    print("Vault Open")'
    ],
    successMessage: 'Dual locks slide open in unison! A chest of sparkling emerald gems is revealed.',
    xpReward: 260,
    coinReward: 70,
    unlockRequirements: ['w2_m4'],
    stationPosition: [-6, 0, -32],
    npcPosition: [-4, 0, -30]
  },
  {
    id: 'w2_m6',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 6,
    title: 'The Magic Shield — Logical or',
    difficulty: 'Intermediate',
    npc: {
      id: 'ranger_talia',
      name: 'Ranger Talia',
      title: 'Scout of the High Falls',
      avatar: '🧭',
      color: '#0284C7',
      greeting: 'Beware the canyon gust! You need at least one form of magical protection.',
      dialogue: [
        'The logical or operator is satisfied if AT LEAST ONE condition is True.',
        'If has_shield or has_barrier_potion, you are protected.',
        'Set has_shield = False and has_barrier_potion = True. If either is True, print "Protected"!'
      ]
    },
    story: 'Winds buffet the narrow mountain ledge. Having either an energy shield or a potion barrier will keep the traveler safe.',
    learningObjective: 'Learn how to evaluate flexible conditions with the logical or operator.',
    concept: {
      title: 'The or Operator',
      whatIsIt: 'Evaluates to True if AT LEAST ONE of the conditions is True.',
      whyUseful: 'Allows alternative payment methods (gold or gems), multiple keys, or diverse win conditions.',
      syntax: 'if cond1 or cond2:\n    print("At least one is True")',
      exampleCode: 'shield = False\npotion = True\nif shield or potion:\n    print("Protected")',
      expectedOutput: 'Protected',
      realWorldMetaphor: 'Entering a theater if you have a paper ticket OR a digital QR code on your phone.',
      commonMistakes: [
        'Confusing or with and: or is permissive, needing only one True value.',
        'Writing | instead of the keyword or.'
      ]
    },
    challenge: 'Set has_shield = False and has_barrier_potion = True. If either is True using or, print "Protected".',
    starterCode: 'has_shield = False\nhas_barrier_potion = True\n# Use logical or\n',
    expectedOutputSummary: 'Protected',
    testCases: [
      {
        id: 'tc_w2_m6_1',
        description: 'Output must be "Protected"',
        type: 'output_exact',
        expectedOutput: 'Protected'
      }
    ],
    hints: [
      'Concept: Use if has_shield or has_barrier_potion: print("Protected").',
      'Syntax:\nif has_shield or has_barrier_potion:\n    print("Protected")',
      'Solution:\nhas_shield = False\nhas_barrier_potion = True\nif has_shield or has_barrier_potion:\n    print("Protected")'
    ],
    successMessage: 'A shimmering sapphire aura envelopes you! The roaring mountain winds glance harmlessly off.',
    xpReward: 260,
    coinReward: 70,
    unlockRequirements: ['w2_m5'],
    stationPosition: [8, 0, -38],
    npcPosition: [6, 0, -36]
  },
  {
    id: 'w2_m7',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 7,
    title: 'The Invisible Cloak — Logical not',
    difficulty: 'Intermediate',
    npc: {
      id: 'sentinel_gareth',
      name: 'Sentinel Gareth',
      title: 'Gatekeeper of the Valley',
      avatar: '🛡️',
      color: '#0284C7',
      greeting: 'The watchtower gargoyles scan the perimeter for intruders!',
      dialogue: [
        'The not operator inverts any Boolean: not True becomes False, not False becomes True.',
        'If you are not detected, you slip past in safety.',
        'Set is_detected = False. If not is_detected, print "Slipped past unseen"!'
      ]
    },
    story: 'Sneaking past the stony gaze of the gargoyle watchtower requires total stealth.',
    learningObjective: 'Understand Boolean negation using the logical not operator.',
    concept: {
      title: 'The not Operator',
      whatIsIt: 'Inverts the truth value of a condition. not True is False, not False is True.',
      whyUseful: 'Writing natural negative checks: if not is_game_over:, if not has_error:.',
      syntax: 'if not condition:\n    print("Condition was False")',
      exampleCode: 'is_spotted = False\nif not is_spotted:\n    print("Slipped past unseen")',
      expectedOutput: 'Slipped past unseen',
      realWorldMetaphor: 'An invisibility cloak that reverses your visibility to the outside world.',
      commonMistakes: [
        'Writing ! instead of Python’s word not (in Python, != is for comparisons, but not is the logical inverter).',
        'Over-complicating: if condition == False: can be written much more cleanly as if not condition:.'
      ]
    },
    challenge: 'Set is_detected = False. If not is_detected, print "Slipped past unseen".',
    starterCode: 'is_detected = False\n# Use not to check if NOT detected\n',
    expectedOutputSummary: 'Slipped past unseen',
    testCases: [
      {
        id: 'tc_w2_m7_1',
        description: 'Output must be "Slipped past unseen"',
        type: 'output_exact',
        expectedOutput: 'Slipped past unseen'
      }
    ],
    hints: [
      'Concept: if not is_detected: print("Slipped past unseen")',
      'Syntax:\nif not is_detected:\n    print("Slipped past unseen")',
      'Solution:\nis_detected = False\nif not is_detected:\n    print("Slipped past unseen")'
    ],
    successMessage: 'You slip through the shadow of the archway without triggering a single bell!',
    xpReward: 270,
    coinReward: 75,
    unlockRequirements: ['w2_m6'],
    stationPosition: [-8, 0, -44],
    npcPosition: [-6, 0, -42]
  },
  {
    id: 'w2_m8',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 8,
    title: 'The Secret Membership — in Operator',
    difficulty: 'Intermediate',
    npc: {
      id: 'ranger_talia',
      name: 'Ranger Talia',
      title: 'Scout of the High Falls',
      avatar: '🧭',
      color: '#0284C7',
      greeting: 'The Valley guild checks if your item is recognized in their catalog.',
      dialogue: [
        'The in operator checks if an element exists inside a collection or word.',
        'For example: "ruby" in "ruby crystal" is True!',
        'Check if "magic" is in "ancient magic scroll". If so, print "Enchanted Item Found"!'
      ]
    },
    story: 'The guild merchant examines ancient artifacts to verify genuine enchantment.',
    learningObjective: 'Learn how the in keyword tests for membership inside strings and collections.',
    concept: {
      title: 'The in Operator',
      whatIsIt: 'Returns True if a substring or element is found within a target sequence.',
      whyUseful: 'Fast word searches, validating commands against a list of allowed words, checking badges.',
      syntax: 'if "needle" in "haystack":\n    print("Found!")',
      exampleCode: 'item = "ancient magic scroll"\nif "magic" in item:\n    print("Enchanted Item Found")',
      expectedOutput: 'Enchanted Item Found',
      realWorldMetaphor: 'Checking if your name appears on the guest list at a royal banquet.',
      commonMistakes: [
        'Case-sensitivity: "Magic" in "ancient magic" is False because M is uppercase.',
        'Swapping the order: "haystack" in "needle" checks the wrong direction.'
      ]
    },
    challenge: 'Set item_name = "ancient magic scroll". If "magic" in item_name, print "Enchanted Item Found".',
    starterCode: 'item_name = "ancient magic scroll"\n# Use the in operator\n',
    expectedOutputSummary: 'Enchanted Item Found',
    testCases: [
      {
        id: 'tc_w2_m8_1',
        description: 'Output must be "Enchanted Item Found"',
        type: 'output_exact',
        expectedOutput: 'Enchanted Item Found'
      }
    ],
    hints: [
      'Concept: if "magic" in item_name:',
      'Syntax:\nif "magic" in item_name:\n    print("Enchanted Item Found")',
      'Solution:\nitem_name = "ancient magic scroll"\nif "magic" in item_name:\n    print("Enchanted Item Found")'
    ],
    successMessage: 'The scroll glows with soft cyan runes! The guild merchant stamps it with approval.',
    xpReward: 280,
    coinReward: 80,
    unlockRequirements: ['w2_m7'],
    stationPosition: [4, 0, -50],
    npcPosition: [2, 0, -48]
  },
  {
    id: 'w2_m9',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 9,
    title: 'The Royal Security Test — Nested Conditions',
    difficulty: 'Intermediate',
    npc: {
      id: 'sentinel_gareth',
      name: 'Sentinel Gareth',
      title: 'Gatekeeper of the Valley',
      avatar: '🛡️',
      color: '#0284C7',
      greeting: 'Entering the Inner Keep requires passing through two nested gates!',
      dialogue: [
        'You can place an if statement INSIDE another if statement! This is called nesting.',
        'First check if is_citizen is True. If so, check if level >= 5. If both pass, print "Access Granted"!',
        'Set is_citizen = True and level = 7.'
      ]
    },
    story: 'The inner keep of Conditional Valley checks citizenship first, and rank second.',
    learningObjective: 'Learn how to structure nested if statements with progressive indentation.',
    concept: {
      title: 'Nested Conditions',
      whatIsIt: 'Placing an if block inside an outer if block to enforce hierarchical decision trees.',
      whyUseful: 'Complex multi-stage game mechanics: checking if weapon is equipped, THEN checking if it has durability.',
      syntax: 'if outer_condition:\n    if inner_condition:\n        print("Both passed")',
      exampleCode: 'citizen = True\nlvl = 7\nif citizen:\n    if lvl >= 5:\n        print("Access Granted")',
      expectedOutput: 'Access Granted',
      realWorldMetaphor: 'Passing through outer castle walls first, then presenting credentials at the palace doors.',
      commonMistakes: [
        'Misaligning the indentation levels: inner statements must be indented further than outer statements.',
        'Forgetting that the inner condition will not even be evaluated if the outer condition is False.'
      ]
    },
    challenge: 'Set is_citizen = True and level = 7. Using nested if statements, if is_citizen is True, and then if level >= 5, print "Access Granted".',
    starterCode: 'is_citizen = True\nlevel = 7\n# Write nested if statements\n',
    expectedOutputSummary: 'Access Granted',
    testCases: [
      {
        id: 'tc_w2_m9_1',
        description: 'Output must be "Access Granted"',
        type: 'output_exact',
        expectedOutput: 'Access Granted'
      }
    ],
    hints: [
      'Concept: Put an indented if level >= 5: inside if is_citizen:.',
      'Syntax:\nif is_citizen:\n    if level >= 5:\n        print("Access Granted")',
      'Solution:\nis_citizen = True\nlevel = 7\nif is_citizen:\n    if level >= 5:\n        print("Access Granted")'
    ],
    successMessage: 'Both portcullises lift in sequence! Trumpets sound as the Inner Keep opens.',
    xpReward: 300,
    coinReward: 85,
    unlockRequirements: ['w2_m8'],
    stationPosition: [-4, 0, -56],
    npcPosition: [-2, 0, -54]
  },
  {
    id: 'w2_m10',
    worldId: 'conditional-valley',
    worldIndex: 2,
    missionNumber: 10,
    title: 'The Valley Guardian — The Grand Logic Trial',
    difficulty: 'Advanced',
    isBoss: true,
    npc: {
      id: 'valley_guardian',
      name: 'Valley Stone Guardian',
      title: 'Titan of the Cataracts',
      avatar: '🗿',
      color: '#0284C7',
      greeting: 'I AM THE GUARDIAN OF THE CATARACTS. PROVE THY MASTERY OF LOGIC!',
      dialogue: [
        'To pass to the Looping Jungle, you must solve my multi-condition riddle!',
        'Given health = 100, mana = 50, and has_emblem = True:',
        'If has_emblem and (health >= 80 or mana >= 60): print "Guardian Defeated"!',
        'Else: print "Try Again".'
      ]
    },
    story: 'The colossal stone titan towers over the misty chasm between the valley and the tropical jungle beyond. Combining logical operators will pacify the guardian.',
    learningObjective: 'Combine parentheses, and, and or to solve a complex decision tree.',
    concept: {
      title: 'Complex Compound Conditions',
      whatIsIt: 'Using parentheses to group and and or expressions establishes strict precedence in logic.',
      whyUseful: 'Combat calculations, defense checks, and boss fight mechanics in modern games.',
      syntax: 'if cond1 and (cond2 or cond3):\n    # Action',
      exampleCode: 'hp = 100\nmp = 50\nemblem = True\nif emblem and (hp >= 80 or mp >= 60):\n    print("Guardian Defeated")',
      expectedOutput: 'Guardian Defeated',
      realWorldMetaphor: 'Unlocking a high-security vault that requires your master keycard AND (fingerprint OR retinal scan).',
      commonMistakes: [
        'Omitting parentheses when mixing and with or, which can lead to unexpected operator precedence.',
        'Spelling mistakes in variable names.'
      ]
    },
    challenge: 'Set health = 100, mana = 50, has_emblem = True. If has_emblem and (health >= 80 or mana >= 60), print "Guardian Defeated", else print "Try Again".',
    starterCode: '# Valley Boss: Face the Stone Guardian!\nhealth = 100\nmana = 50\nhas_emblem = True\n\n# Implement your compound condition:\n',
    expectedOutputSummary: 'Guardian Defeated',
    testCases: [
      {
        id: 'tc_w2_m10_1',
        description: 'Output must be "Guardian Defeated"',
        type: 'output_exact',
        expectedOutput: 'Guardian Defeated'
      }
    ],
    hints: [
      'Concept: if has_emblem and (health >= 80 or mana >= 60):',
      'Syntax:\nif has_emblem and (health >= 80 or mana >= 60):\n    print("Guardian Defeated")\nelse:\n    print("Try Again")',
      'Solution:\nhealth = 100\nmana = 50\nhas_emblem = True\nif has_emblem and (health >= 80 or mana >= 60):\n    print("Guardian Defeated")\nelse:\n    print("Try Again")'
    ],
    successMessage: 'THE VALLEY GUARDIAN CRUMBLES TO ITS KNEES AND BOWS! "THOU ART WORTHY OF PASSAGE." The mountain pass opens, unveiling the lush, steam-shrouded canopies of the Looping Jungle!',
    xpReward: 450,
    coinReward: 120,
    unlockRequirements: ['w2_m9'],
    stationPosition: [0, 0, -64],
    npcPosition: [-3, 0, -62]
  }
];
