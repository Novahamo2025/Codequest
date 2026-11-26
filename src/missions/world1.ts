import { Mission } from '../types/mission';

export const WORLD1_MISSIONS: Mission[] = [
  {
    id: 'w1_m1',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 1,
    title: 'The First Spell — print()',
    difficulty: 'Beginner',
    npc: {
      id: 'elder_orion',
      name: 'Elder Orion',
      title: 'Keeper of the Ancient Woods',
      avatar: '🧙‍♂️',
      color: '#15803D',
      greeting: 'Greetings, traveler! The magical energy in our forest has faded away.',
      dialogue: [
        'Welcome to the Lost Kingdom! Once, words of power echoed through these trees, giving life to our waters and stone gates.',
        'To awaken the forest, you must cast your very first Python incantation: the print() command.',
        'Speak the awakening words "Gate Unlocked" to open the pathway forward!'
      ]
    },
    story: 'The ancient wooden gate to the forest stands closed, overgrown with dormant vines. Elder Orion asks you to chant the opening phrase to revive the gate crystal.',
    learningObjective: 'Learn how to use Python’s built-in print() function to display text output.',
    concept: {
      title: 'The print() Function',
      whatIsIt: 'The print() function is the primary way to output text and numbers to the screen in Python.',
      whyUseful: 'Whenever you want to display a message to the user, check the result of a calculation, or inspect data, you use print().',
      syntax: 'print("your message here")',
      exampleCode: 'print("Hello, Lost Kingdom!")',
      expectedOutput: 'Hello, Lost Kingdom!',
      realWorldMetaphor: 'Like speaking through a royal herald’s trumpet so everyone across the kingdom can hear your message.',
      commonMistakes: [
        'Forgetting the quotation marks around text: print(Hello) causes a NameError.',
        'Writing Print with a capital P: Python is case-sensitive! It must be print().',
        'Forgetting to close the parenthesis: print("Hello"'
      ]
    },
    challenge: 'Write Python code using print() to display exactly:\nGate Unlocked',
    starterCode: '# Cast your first spell here!\nprint("")\n',
    expectedOutputSummary: 'Gate Unlocked',
    testCases: [
      {
        id: 'tc_w1_m1_1',
        description: 'Output must match "Gate Unlocked"',
        type: 'output_exact',
        expectedOutput: 'Gate Unlocked'
      }
    ],
    hints: [
      'Concept: You need the print() function with quotation marks inside the parentheses.',
      'Syntax: Type print("...") and put the exact phrase inside.',
      'Solution: print("Gate Unlocked")'
    ],
    successMessage: 'The ancient gate glows with emerald light and slowly swings open! You have awakened the forest magic.',
    xpReward: 100,
    coinReward: 25,
    unlockRequirements: [],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w1_m2',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 2,
    title: 'Message on the Ancient Stone — Multiple Lines',
    difficulty: 'Beginner',
    npc: {
      id: 'elder_orion',
      name: 'Elder Orion',
      title: 'Keeper of the Ancient Woods',
      avatar: '🧙‍♂️',
      color: '#15803D',
      greeting: 'Superb work opening the gate! Now look upon this ancient rune stone.',
      dialogue: [
        'The ancient builders inscribed a two-line chant upon this monolith.',
        'Each print() call produces its own new line on the scroll.',
        'Chant line 1: "Awaken Forest", followed by line 2: "Restore Magic"!'
      ]
    },
    story: 'A towering stone monolith lies covered in moss. Inscribing the two ancient phrases will empower the surrounding flora.',
    learningObjective: 'Understand how calling print() multiple times produces sequential lines of text.',
    concept: {
      title: 'Printing Multiple Lines',
      whatIsIt: 'Each print() statement naturally places its text on a brand new line.',
      whyUseful: 'Programs frequently display multi-line reports, dialogues, or story descriptions.',
      syntax: 'print("Line 1")\nprint("Line 2")',
      exampleCode: 'print("Line One")\nprint("Line Two")',
      expectedOutput: 'Line One\nLine Two',
      realWorldMetaphor: 'Like writing sentences on separate lines in an enchanted scroll.',
      commonMistakes: [
        'Putting both texts on one line without separate print statements.',
        'Missing quotes on the second line.'
      ]
    },
    challenge: 'Write two print() statements to display:\nAwaken Forest\nRestore Magic',
    starterCode: '# Print the two chants on separate lines\nprint("Awaken Forest")\n',
    expectedOutputSummary: 'Awaken Forest\nRestore Magic',
    testCases: [
      {
        id: 'tc_w1_m2_1',
        description: 'Outputs two lines: "Awaken Forest" and "Restore Magic"',
        type: 'output_exact',
        expectedOutput: 'Awaken Forest\nRestore Magic'
      }
    ],
    hints: [
      'Concept: You can call print() multiple times, one after another.',
      'Syntax: Add a second line with print("Restore Magic")',
      'Solution:\nprint("Awaken Forest")\nprint("Restore Magic")'
    ],
    successMessage: 'The runes on the stone flare into radiant green light! Golden petals float through the air.',
    xpReward: 120,
    coinReward: 30,
    unlockRequirements: ['w1_m1'],
    stationPosition: [8, 0, -12],
    npcPosition: [6, 0, -10]
  },
  {
    id: 'w1_m3',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 3,
    title: 'The Lost Notes — Python Comments',
    difficulty: 'Beginner',
    npc: {
      id: 'scout_sylvan',
      name: 'Scout Sylvan',
      title: 'Forest Pathfinder',
      avatar: '🏹',
      color: '#16A34A',
      greeting: 'Halt there, traveler! Notice these secret notes left by ancient mages.',
      dialogue: [
        'Mages write secret notes that the Python spell-engine ignores using the # symbol.',
        'These are called comments. They help us explain our magic to other wizards.',
        'Keep the comment note, and print the secret password: "Emerald Key"!'
      ]
    },
    story: 'Scout Sylvan discovers ancient parchment with explanatory notes. You must understand how comments work while outputting the key.',
    learningObjective: 'Learn how to write single-line comments in Python using the hash (#) symbol.',
    concept: {
      title: 'Comments in Python',
      whatIsIt: 'Any line or part of a line starting with # is a comment. Python completely ignores comments when executing code.',
      whyUseful: 'Comments explain what complex code does, leave notes for team members, and document logic.',
      syntax: '# This is a comment\nprint("Code runs here")',
      exampleCode: '# Storing secret rune\nprint("Secret Unlocked")',
      expectedOutput: 'Secret Unlocked',
      realWorldMetaphor: 'Like writing notes in the margins of a spellbook that do not trigger any magic themselves.',
      commonMistakes: [
        'Using // or /* */ (which are for C++/JavaScript, not Python!).',
        'Putting the # symbol inside quotation marks by mistake (then it prints literally).'
      ]
    },
    challenge: 'Include a comment starting with # explaining the secret, then print:\nEmerald Key',
    starterCode: '# Write a comment explaining the secret key\n\nprint("")\n',
    expectedOutputSummary: 'Emerald Key',
    testCases: [
      {
        id: 'tc_w1_m3_1',
        description: 'Output must be "Emerald Key"',
        type: 'output_exact',
        expectedOutput: 'Emerald Key'
      }
    ],
    hints: [
      'Concept: Comments start with # and can say anything you like.',
      'Syntax: # Secret password\nprint("Emerald Key")',
      'Solution:\n# Secret note\nprint("Emerald Key")'
    ],
    successMessage: 'The secret chamber unlocks, revealing a satchel of forest seeds and shiny coins!',
    xpReward: 120,
    coinReward: 35,
    unlockRequirements: ['w1_m2'],
    stationPosition: [-10, 0, -16],
    npcPosition: [-8, 0, -14]
  },
  {
    id: 'w1_m4',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 4,
    title: 'The Magic Number — Variables',
    difficulty: 'Beginner',
    npc: {
      id: 'elder_orion',
      name: 'Elder Orion',
      title: 'Keeper of the Ancient Woods',
      avatar: '🧙‍♂️',
      color: '#15803D',
      greeting: 'A wizard must store power inside magical containers called variables.',
      dialogue: [
        'Variables hold data like a chest holds treasures.',
        'Give a variable a name, use the equal sign (=), and store a value.',
        'Create a variable named mana set to 100, and print its value!'
      ]
    },
    story: 'The forest shrine requires a reservoir of mana. You must store the magic quantity in a variable and display it to power the altar.',
    learningObjective: 'Learn how to create variables and assign values to them using the assignment operator (=).',
    concept: {
      title: 'Variables & Assignment',
      whatIsIt: 'A variable is a named storage container in memory that holds a value.',
      whyUseful: 'Variables let you remember values, calculate new numbers, and reuse information throughout your program.',
      syntax: 'variable_name = value\nprint(variable_name)',
      exampleCode: 'gold = 50\nprint(gold)',
      expectedOutput: '50',
      realWorldMetaphor: 'A labeled chest in your inventory where you can store gold, potions, or scrolls.',
      commonMistakes: [
        'Putting quotes around the variable name in print: print("mana") prints the word "mana", not the number 100!',
        'Putting the value on the left: 100 = mana (the variable must always be on the left of =).'
      ]
    },
    challenge: 'Create a variable named mana with value 100. Then print mana.',
    starterCode: '# Store 100 in the variable mana, then print it\nmana = \nprint()\n',
    expectedOutputSummary: '100',
    testCases: [
      {
        id: 'tc_w1_m4_1',
        description: 'Output should be exactly 100 from variable mana',
        type: 'output_exact',
        expectedOutput: '100'
      }
    ],
    hints: [
      'Concept: Assign 100 to mana with mana = 100.',
      'Syntax: In print(), write the variable name without quotes: print(mana).',
      'Solution:\nmana = 100\nprint(mana)'
    ],
    successMessage: 'Mana surges into the shrine! A brilliant beam of emerald light shoots into the sky.',
    xpReward: 140,
    coinReward: 40,
    unlockRequirements: ['w1_m3'],
    stationPosition: [4, 0, -22],
    npcPosition: [2, 0, -20]
  },
  {
    id: 'w1_m5',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 5,
    title: 'The Crystal Types — Data Types',
    difficulty: 'Beginner',
    npc: {
      id: 'alchemist_elena',
      name: 'Alchemist Elena',
      title: 'Master of Elements',
      avatar: '⚗️',
      color: '#0D9488',
      greeting: 'Welcome to my botanical laboratory! Notice how each crystal has a distinct nature.',
      dialogue: [
        'In Python, every piece of data has a specific type.',
        'Integers (int) are whole numbers like 42. Floats (float) have decimals like 3.14.',
        'Strings (str) are text in quotes, and Booleans (bool) are True or False.',
        'Print the type of 42 using the type() function: print(type(42))!'
      ]
    },
    story: 'Elena needs to identify the fundamental elemental types of the enchanted materials found in the deep forest.',
    learningObjective: 'Understand basic data types (int, float, str, bool) and inspect them with type().',
    concept: {
      title: 'Python Data Types & type()',
      whatIsIt: 'Data types categorize what kind of value a variable holds: integers (whole numbers), floats (decimals), strings (text), booleans (True/False).',
      whyUseful: 'Different types support different operations—you can multiply numbers, but you cannot divide words.',
      syntax: 'print(type(42))',
      exampleCode: 'print(type("Elixir"))\nprint(type(3.14))',
      expectedOutput: "<class 'str'>\n<class 'float'>",
      realWorldMetaphor: 'Different inventory slots: liquids go in flasks, gold in pouches, and words on parchment.',
      commonMistakes: [
        'Confusing "42" (a text string) with 42 (an actual integer).',
        'Capitalizing True or False incorrectly: true and false will cause NameErrors in Python.'
      ]
    },
    challenge: 'Use print(type(42)) to reveal the internal class of whole numbers.',
    starterCode: '# Inspect the type of the number 42\nprint(type())\n',
    expectedOutputSummary: "<class 'int'>",
    testCases: [
      {
        id: 'tc_w1_m5_1',
        description: 'Output must be "<class \'int\'>"',
        type: 'output_contains',
        expectedOutput: "<class 'int'>"
      }
    ],
    hints: [
      'Concept: Pass the integer 42 inside type().',
      'Syntax: print(type(42))',
      'Solution:\nprint(type(42))'
    ],
    successMessage: 'The elemental crystal resonates! You have unlocked knowledge of Python’s primitive types.',
    xpReward: 150,
    coinReward: 40,
    unlockRequirements: ['w1_m4'],
    stationPosition: [-6, 0, -28],
    npcPosition: [-4, 0, -26]
  },
  {
    id: 'w1_m6',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 6,
    title: 'The Word Collector — String Operations',
    difficulty: 'Beginner',
    npc: {
      id: 'scout_sylvan',
      name: 'Scout Sylvan',
      title: 'Forest Pathfinder',
      avatar: '🏹',
      color: '#16A34A',
      greeting: 'Look at these scattered word fragments on the forest trail!',
      dialogue: [
        'In Python, we can glue two strings together using the plus (+) operator.',
        'This joining process is called string concatenation.',
        'Combine "Forest" and " Guardian" into one message and print it!'
      ]
    },
    story: 'Sylvan found two ancient wooden tokens. Joining their names together will summon the benevolent Forest Guardian.',
    learningObjective: 'Learn string concatenation using the + operator to combine text.',
    concept: {
      title: 'String Concatenation',
      whatIsIt: 'Joining two or more text strings together into one continuous string using +.',
      whyUseful: 'Essential for constructing dynamic messages, greeting players by name, or assembling URLs.',
      syntax: 'greeting = "Hello " + "World"\nprint(greeting)',
      exampleCode: 'first = "Code"\nsecond = "Quest"\nprint(first + second)',
      expectedOutput: 'CodeQuest',
      realWorldMetaphor: 'Forging two links of a chain together into a single necklace.',
      commonMistakes: [
        'Forgetting the space between words: "Forest" + "Guardian" becomes "ForestGuardian".',
        'Trying to concatenate a string with an integer directly without str().'
      ]
    },
    challenge: 'Join the strings "Forest" and " Guardian" (note the space!) using + and print:\nForest Guardian',
    starterCode: '# Join the two words with +\nword1 = "Forest"\nword2 = " Guardian"\nresult = \nprint(result)\n',
    expectedOutputSummary: 'Forest Guardian',
    testCases: [
      {
        id: 'tc_w1_m6_1',
        description: 'Output must be "Forest Guardian"',
        type: 'output_exact',
        expectedOutput: 'Forest Guardian'
      }
    ],
    hints: [
      'Concept: Use the + operator between word1 and word2.',
      'Syntax: result = word1 + word2',
      'Solution:\nword1 = "Forest"\nword2 = " Guardian"\nresult = word1 + word2\nprint(result)'
    ],
    successMessage: 'The words unite! A majestic shimmering stag appears and bows in recognition.',
    xpReward: 160,
    coinReward: 45,
    unlockRequirements: ['w1_m5'],
    stationPosition: [8, 0, -34],
    npcPosition: [6, 0, -32]
  },
  {
    id: 'w1_m7',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 7,
    title: 'The Truth Crystal — Boolean Values',
    difficulty: 'Beginner',
    npc: {
      id: 'elder_orion',
      name: 'Elder Orion',
      title: 'Keeper of the Ancient Woods',
      avatar: '🧙‍♂️',
      color: '#15803D',
      greeting: 'Behold the Crystal of Truth. It speaks only two words in existence.',
      dialogue: [
        'A Boolean can only ever be True or False.',
        'Notice they start with capital letters: True and False without quotes.',
        'Set a variable has_key to True, and print it to activate the crystal!'
      ]
    },
    story: 'The Truth Crystal tests your purity of intent. Signaling True will grant you passage over the whispering bridge.',
    learningObjective: 'Understand Boolean values (True and False) in Python.',
    concept: {
      title: 'Boolean Values (bool)',
      whatIsIt: 'A data type that has only two possible states: True or False.',
      whyUseful: 'Booleans are the foundation of all game decisions, locks, enemy states, and conditional branching.',
      syntax: 'is_active = True\nis_defeated = False',
      exampleCode: 'is_open = True\nprint(is_open)',
      expectedOutput: 'True',
      realWorldMetaphor: 'A light switch that is either ON or OFF, or a drawbridge that is either RAISED or LOWERED.',
      commonMistakes: [
        'Writing "True" in quotes—that makes it a string, not a boolean.',
        'Writing lowercase true or false.'
      ]
    },
    challenge: 'Set has_key = True and print has_key.',
    starterCode: '# Set has_key to True and print it\nhas_key = \nprint(has_key)\n',
    expectedOutputSummary: 'True',
    testCases: [
      {
        id: 'tc_w1_m7_1',
        description: 'Output must be "True"',
        type: 'output_exact',
        expectedOutput: 'True'
      }
    ],
    hints: [
      'Concept: Assign True (with a capital T) to has_key.',
      'Syntax: has_key = True',
      'Solution:\nhas_key = True\nprint(has_key)'
    ],
    successMessage: 'The Truth Crystal pulses with azure radiance! The whispering bridge becomes solid.',
    xpReward: 160,
    coinReward: 45,
    unlockRequirements: ['w1_m6'],
    stationPosition: [-8, 0, -40],
    npcPosition: [-6, 0, -38]
  },
  {
    id: 'w1_m8',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 8,
    title: 'The Talking Tree — input()',
    difficulty: 'Beginner',
    npc: {
      id: 'talking_oak',
      name: 'Elder Oak',
      title: 'The Whispering Sentinel',
      avatar: '🌳',
      color: '#15803D',
      greeting: 'Who approaches my ancient roots? Speak your name into the breeze!',
      dialogue: [
        'To listen to the traveler, Python provides the input() function.',
        'input() pauses the spell and waits for someone to enter text.',
        'Store the player’s input in player_name, and greet them: "Welcome, " + player_name!'
      ]
    },
    story: 'The giant talking oak tree demands to know who dares venture into the deep grove before lowering its leafy branches.',
    learningObjective: 'Learn how to capture user input interactively using input().',
    concept: {
      title: 'The input() Function',
      whatIsIt: 'input() prompts the user to type something and returns what they typed as a string.',
      whyUseful: 'Makes programs interactive—asking for player names, selecting game choices, and taking commands.',
      syntax: 'name = input()\nprint("Hello, " + name)',
      exampleCode: 'hero = input()\nprint("Greetings, " + hero)',
      expectedOutput: 'Greetings, Arthur (when Arthur is entered)',
      realWorldMetaphor: 'Like holding out a scroll and feather quill for the traveler to write down their identity.',
      commonMistakes: [
        'Forgetting that input() ALWAYS returns a string, even if the user types numbers like "42".',
        'Not storing the result of input() into a variable.'
      ]
    },
    challenge: 'Take an input name using input(), and print:\nWelcome, <name>',
    starterCode: '# Read the traveler name and print "Welcome, " + name\nname = input()\nprint("Welcome, " + name)\n',
    expectedOutputSummary: 'Welcome, Hero',
    testCases: [
      {
        id: 'tc_w1_m8_1',
        description: 'With input "Hero", outputs "Welcome, Hero"',
        type: 'output_exact',
        expectedOutput: 'Welcome, Hero',
        inputs: ['Hero']
      },
      {
        id: 'tc_w1_m8_2',
        description: 'With input "Orion", outputs "Welcome, Orion"',
        type: 'output_exact',
        expectedOutput: 'Welcome, Orion',
        inputs: ['Orion']
      }
    ],
    hints: [
      'Concept: Use input() to receive the name, then concatenate with "Welcome, ".',
      'Syntax: name = input()\nprint("Welcome, " + name)',
      'Solution:\nname = input()\nprint("Welcome, " + name)'
    ],
    successMessage: 'Elder Oak rustles joyfully! "Welcome, traveler! May the wisdom of the forest guide your steps."',
    xpReward: 180,
    coinReward: 50,
    unlockRequirements: ['w1_m7'],
    stationPosition: [0, 0, -46],
    npcPosition: [-2, 0, -44]
  },
  {
    id: 'w1_m9',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 9,
    title: 'The Transformation Potion — Type Conversion',
    difficulty: 'Beginner',
    npc: {
      id: 'alchemist_elena',
      name: 'Alchemist Elena',
      title: 'Master of Elements',
      avatar: '⚗️',
      color: '#0D9488',
      greeting: 'Quickly! A spell scroll contains numbers written as text strings!',
      dialogue: [
        'When you have a number trapped as a string, like "50", you cannot do math with it.',
        'You must transmute it using int() to convert it into a true number.',
        'Convert the text string "50" to an int, add 25 to it, and print the result (75)!'
      ]
    },
    story: 'An ancient recipe scroll stored the potion ingredient counts as text. Elena needs you to transmute the string into an integer to calculate the total potion dosage.',
    learningObjective: 'Learn type casting with int(), float(), and str().',
    concept: {
      title: 'Type Conversion (Casting)',
      whatIsIt: 'Converting a value from one data type to another using functions like int(), float(), and str().',
      whyUseful: 'input() always gives you strings. To calculate scores, health, or prices, you must cast them to int() or float().',
      syntax: 'number = int("50")\ntotal = number + 25',
      exampleCode: 'score_str = "100"\nscore = int(score_str) + 10\nprint(score)',
      expectedOutput: '110',
      realWorldMetaphor: 'Smelting raw golden ore (unrefined string) into a stamped royal coin (usable integer).',
      commonMistakes: [
        'Trying to convert words like int("dragon")—Python throws a ValueError!',
        'Adding "50" + 25 directly without conversion—Python throws a TypeError.'
      ]
    },
    challenge: 'Given text_value = "50", convert it to an integer using int(), add 25, and print the result (75).',
    starterCode: 'text_value = "50"\n# Convert text_value to integer and add 25\nresult = \nprint(result)\n',
    expectedOutputSummary: '75',
    testCases: [
      {
        id: 'tc_w1_m9_1',
        description: 'Output must be 75',
        type: 'output_exact',
        expectedOutput: '75'
      }
    ],
    hints: [
      'Concept: Use int(text_value) to convert "50" into the number 50.',
      'Syntax: result = int(text_value) + 25',
      'Solution:\ntext_value = "50"\nresult = int(text_value) + 25\nprint(result)'
    ],
    successMessage: 'The potion turns a radiant violet! A cloud of sparkling dust infuses your staff with power.',
    xpReward: 200,
    coinReward: 60,
    unlockRequirements: ['w1_m8'],
    stationPosition: [6, 0, -52],
    npcPosition: [4, 0, -50]
  },
  {
    id: 'w1_m10',
    worldId: 'beginner-forest',
    worldIndex: 1,
    missionNumber: 10,
    title: 'The Forest Boss — Awakening the Ancient Gate',
    difficulty: 'Intermediate',
    isBoss: true,
    npc: {
      id: 'elder_orion',
      name: 'Elder Orion',
      title: 'Keeper of the Ancient Woods',
      avatar: '🧙‍♂️',
      color: '#15803D',
      greeting: 'Here we stand at the Grand Portal to Conditional Valley!',
      dialogue: [
        'This is the climax of your forest training! The Grand Gate requires a combined incantation.',
        'Calculate total power by multiplying base_power (20) by crystal_multiplier (4), then add bonus (15).',
        'Print the final total power value (95) to shatter the ancient seal!'
      ]
    },
    story: 'The massive stone archway of the Grand Portal pulses with dormant runic symbols. Elder Orion and Scout Sylvan watch as you combine variables and arithmetic to activate the crystal lock.',
    learningObjective: 'Combine variables, multiplication (*), addition (+), and output to solve a multi-step challenge.',
    concept: {
      title: 'Arithmetic Operators in Python',
      whatIsIt: 'Python supports arithmetic operators: + (add), - (subtract), * (multiply), / (divide), and % (modulo remainder).',
      whyUseful: 'Powers all game calculations: combat damage, player health, currency totals, physics movement, and timers.',
      syntax: 'total = (base * multiplier) + bonus',
      exampleCode: 'damage = 10 * 3 + 5\nprint(damage)',
      expectedOutput: '35',
      realWorldMetaphor: 'Weaving together multiple magical threads to forge a masterwork barrier spell.',
      commonMistakes: [
        'Order of operations (PEMDAS): multiplication happens before addition unless parentheses are used.',
        'Using x instead of * for multiplication.'
      ]
    },
    challenge: 'Set base_power = 20, crystal_multiplier = 4, and bonus = 15. Calculate total = (base_power * crystal_multiplier) + bonus and print total.',
    starterCode: '# Forest Boss Challenge: Awaken the Grand Portal!\nbase_power = 20\ncrystal_multiplier = 4\nbonus = 15\n\n# Calculate and print total\n',
    expectedOutputSummary: '95',
    testCases: [
      {
        id: 'tc_w1_m10_1',
        description: 'Output must be exactly 95',
        type: 'output_exact',
        expectedOutput: '95'
      }
    ],
    hints: [
      'Concept: Multiply base_power by crystal_multiplier using *, then add bonus with +.',
      'Syntax: total = base_power * crystal_multiplier + bonus',
      'Solution:\nbase_power = 20\ncrystal_multiplier = 4\nbonus = 15\ntotal = (base_power * crystal_multiplier) + bonus\nprint(total)'
    ],
    successMessage: 'THE FOREST BOSS HAS BEEN OVERCOME! The Grand Portal roars to life with emerald fire, revealing the magnificent waterfalls and mountain passes of Conditional Valley!',
    xpReward: 350,
    coinReward: 100,
    unlockRequirements: ['w1_m9'],
    stationPosition: [0, 0, -60],
    npcPosition: [-3, 0, -58]
  }
];
