import { Mission } from '../types/mission';

export const WORLD5_MISSIONS: Mission[] = [
  {
    id: 'w5_m1',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 1,
    title: 'The Word Library — String Methods',
    difficulty: 'Intermediate',
    npc: {
      id: 'head_librarian',
      name: 'Librarian Cedric',
      title: 'Keeper of the Royal Folios',
      avatar: '📜',
      color: '#D97706',
      greeting: 'Welcome to the Grand Royal Library! Dusty scrolls require cleaning and formatting.',
      dialogue: [
        'Strings in Python possess built-in methods like .upper(), .lower(), and .strip().',
        'Methods are called with a dot (.) after the string.',
        'Given title = "   lost kingdom   ", clean whitespace with .strip() and make it uppercase with .upper()!',
        'Print the cleaned uppercase title: "LOST KINGDOM"!'
      ]
    },
    story: 'Centuries of dust have accumulated on ancient parchment titles. Calling string transformation methods restores the royal catalog entries.',
    learningObjective: 'Learn string methods: .strip() and .upper() chaining.',
    concept: {
      title: 'String Methods',
      whatIsIt: 'Built-in functions attached to strings that inspect, format, or transform text.',
      whyUseful: 'Cleaning messy user input, formatting headings, normalizing search queries.',
      syntax: 'clean_str = text.strip().upper()',
      exampleCode: 'msg = "  magic  "\nprint(msg.strip().upper())',
      expectedOutput: 'MAGIC',
      realWorldMetaphor: 'Dusting off an old stone tablet (.strip()) and painting its carved letters with golden leaf (.upper()).',
      commonMistakes: [
        'Forgetting parentheses on methods: text.upper instead of text.upper().',
        'Strings are immutable: text.upper() returns a new string; it does not modify the original text in place.'
      ]
    },
    challenge: 'Given title = "   lost kingdom   ", use .strip().upper() and print the result ("LOST KINGDOM").',
    starterCode: 'title = "   lost kingdom   "\n# Clean and capitalize title\nresult = \nprint(result)\n',
    expectedOutputSummary: 'LOST KINGDOM',
    testCases: [
      {
        id: 'tc_w5_m1_1',
        description: 'Output must be "LOST KINGDOM"',
        type: 'output_exact',
        expectedOutput: 'LOST KINGDOM'
      }
    ],
    hints: [
      'Concept: Chain .strip().upper() on title.',
      'Syntax: result = title.strip().upper()',
      'Solution:\ntitle = "   lost kingdom   "\nresult = title.strip().upper()\nprint(result)'
    ],
    successMessage: 'The ancient folio gleams with gold leaf lettering! Librarian Cedric smiles warmly.',
    xpReward: 500,
    coinReward: 125,
    unlockRequirements: ['w4_m10'],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w5_m2',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 2,
    title: 'The Treasure Collection — Lists & Indexing',
    difficulty: 'Intermediate',
    npc: {
      id: 'merchant_tariq',
      name: 'Merchant Tariq',
      title: 'Grand Bazaar Master',
      avatar: '🏺',
      color: '#D97706',
      greeting: 'Step into my bazaar! We store treasures in ordered lists.',
      dialogue: [
        'A list is an ordered, changeable collection enclosed in square brackets [].',
        'Python uses 0-based indexing: the first item is [0], second is [1].',
        'Given inventory = ["Potion", "Sword", "Shield"], print the first item inventory[0]!'
      ]
    },
    story: 'Organizing items in the royal armory relies on precise list indexes.',
    learningObjective: 'Understand list syntax, elements, and 0-based indexing.',
    concept: {
      title: 'Lists & Zero-Based Indexing',
      whatIsIt: 'Ordered sequences of items written with square brackets []. Elements are accessed via index [0, 1, 2...].',
      whyUseful: 'Inventories, leaderboards, particle lists, quest logs.',
      syntax: 'items = ["a", "b", "c"]\nprint(items[0]) # "a"',
      exampleCode: 'gems = ["Ruby", "Sapphire"]\nprint(gems[0])',
      expectedOutput: 'Ruby',
      realWorldMetaphor: 'A row of numbered locker compartments starting at compartment 0.',
      commonMistakes: [
        'Using index 1 for the first item (remember: Python starts counting at 0!).',
        'Using round parentheses () instead of square brackets [] for indexing.'
      ]
    },
    challenge: 'Given inventory = ["Potion", "Sword", "Shield"], print the first item (index 0).',
    starterCode: 'inventory = ["Potion", "Sword", "Shield"]\n# Print the first item\n',
    expectedOutputSummary: 'Potion',
    testCases: [
      {
        id: 'tc_w5_m2_1',
        description: 'Output must be "Potion"',
        type: 'output_exact',
        expectedOutput: 'Potion'
      }
    ],
    hints: [
      'Concept: Access index 0 using inventory[0].',
      'Syntax: print(inventory[0])',
      'Solution:\ninventory = ["Potion", "Sword", "Shield"]\nprint(inventory[0])'
    ],
    successMessage: 'You retrieve the sparkling Potion from the first armory chest!',
    xpReward: 510,
    coinReward: 130,
    unlockRequirements: ['w5_m1'],
    stationPosition: [8, 0, -14],
    npcPosition: [6, 0, -12]
  },
  {
    id: 'w5_m3',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 3,
    title: 'The Royal Inventory — List Methods',
    difficulty: 'Intermediate',
    npc: {
      id: 'head_librarian',
      name: 'Librarian Cedric',
      title: 'Keeper of the Royal Folios',
      avatar: '📜',
      color: '#D97706',
      greeting: 'Add new discoveries to our royal inventory!',
      dialogue: [
        'Use .append(item) to add an element to the end of a list.',
        'Given relics = ["Scroll", "Chalice"], append "Crown".',
        'Print relics to show all three items!'
      ]
    },
    story: 'A new artifact has been excavated from the citadel ruins. Appending it updates the master registry.',
    learningObjective: 'Master mutating lists using the .append() method.',
    concept: {
      title: 'List Methods: .append()',
      whatIsIt: 'Adds an element to the end of an existing list in-place.',
      whyUseful: 'Looting items, registering new players, recording game actions.',
      syntax: 'my_list.append(new_item)',
      exampleCode: 'cards = ["Ace", "King"]\ncards.append("Queen")\nprint(cards)',
      expectedOutput: "['Ace', 'King', 'Queen']",
      realWorldMetaphor: 'Adding a newly forged weapon onto the end of your equipment rack.',
      commonMistakes: [
        'Assigning the result: my_list = my_list.append("x") (append returns None, destroying the list!).',
        'Forgetting quotes around string items.'
      ]
    },
    challenge: 'Given relics = ["Scroll", "Chalice"], append "Crown" to relics and print relics.',
    starterCode: 'relics = ["Scroll", "Chalice"]\n# Append "Crown" and print relics\n',
    expectedOutputSummary: "['Scroll', 'Chalice', 'Crown']",
    testCases: [
      {
        id: 'tc_w5_m3_1',
        description: 'Output must be "[\'Scroll\', \'Chalice\', \'Crown\']"',
        type: 'output_exact',
        expectedOutput: "['Scroll', 'Chalice', 'Crown']"
      }
    ],
    hints: [
      'Concept: relics.append("Crown") then print(relics)',
      'Syntax:\nrelics.append("Crown")\nprint(relics)',
      'Solution:\nrelics = ["Scroll", "Chalice"]\nrelics.append("Crown")\nprint(relics)'
    ],
    successMessage: 'The Royal Crown is cataloged! The armory display case lights up.',
    xpReward: 520,
    coinReward: 135,
    unlockRequirements: ['w5_m2'],
    stationPosition: [-8, 0, -20],
    npcPosition: [-6, 0, -18]
  },
  {
    id: 'w5_m4',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 4,
    title: 'The Frozen Scroll — Tuples',
    difficulty: 'Intermediate',
    npc: {
      id: 'merchant_tariq',
      name: 'Merchant Tariq',
      title: 'Grand Bazaar Master',
      avatar: '🏺',
      color: '#D97706',
      greeting: 'Some coordinates and sacred pacts can NEVER be altered.',
      dialogue: [
        'A tuple is an IMMUTABLE sequence defined with parentheses (x, y).',
        'Once created, its elements cannot be modified or replaced.',
        'Define coords = (10, 20). Unpack them into x, y = coords. Print f"X:{x} Y:{y}"!'
      ]
    },
    story: 'The kingdom cornerstone coordinates are etched into unbreakable diamond. Unpacking the tuple reveals the sanctuary location.',
    learningObjective: 'Learn tuple syntax, immutability, and tuple unpacking.',
    concept: {
      title: 'Tuples & Unpacking',
      whatIsIt: 'Immutable collections wrapped in parentheses (). Once created, they cannot be changed.',
      whyUseful: 'Fixed coordinates (x, y, z), RGB color values (r, g, b), database record safety.',
      syntax: 'coords = (10, 20)\nx, y = coords\nprint(f"X:{x} Y:{y}")',
      exampleCode: 'pt = (3, 4)\na, b = pt\nprint(a + b)',
      expectedOutput: '7',
      realWorldMetaphor: 'A stone tablet carved with permanent coordinates that cannot be erased.',
      commonMistakes: [
        'Trying to assign coords[0] = 50 (raises TypeError: \'tuple\' object does not support item assignment).',
        'A single-item tuple needs a trailing comma: (5,).'
      ]
    },
    challenge: 'Given coords = (10, 20), unpack into x, y and print f"X:{x} Y:{y}" ("X:10 Y:20").',
    starterCode: 'coords = (10, 20)\n# Unpack into x and y and print formatted string\n',
    expectedOutputSummary: 'X:10 Y:20',
    testCases: [
      {
        id: 'tc_w5_m4_1',
        description: 'Output must be "X:10 Y:20"',
        type: 'output_exact',
        expectedOutput: 'X:10 Y:20'
      }
    ],
    hints: [
      'Concept: x, y = coords\nprint(f"X:{x} Y:{y}")',
      'Syntax:\nx, y = coords\nprint(f"X:{x} Y:{y}")',
      'Solution:\ncoords = (10, 20)\nx, y = coords\nprint(f"X:{x} Y:{y}")'
    ],
    successMessage: 'The ancient coordinates match! A hidden staircase opens beneath the bazaar flagstones.',
    xpReward: 530,
    coinReward: 140,
    unlockRequirements: ['w5_m3'],
    stationPosition: [6, 0, -26],
    npcPosition: [4, 0, -24]
  },
  {
    id: 'w5_m5',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 5,
    title: 'The Unique Gems — Sets',
    difficulty: 'Intermediate',
    npc: {
      id: 'head_librarian',
      name: 'Librarian Cedric',
      title: 'Keeper of the Royal Folios',
      avatar: '📜',
      color: '#D97706',
      greeting: 'Filter out duplicates among collected gems!',
      dialogue: [
        'A set is an unordered collection of UNIQUE elements defined with curly braces {}.',
        'If you add duplicates, a set automatically eliminates them!',
        'Given raw_gems = ["Ruby", "Emerald", "Ruby", "Diamond"], convert it to a set with set().',
        'Print len(set(raw_gems)) to find how many UNIQUE gems exist (3)!'
      ]
    },
    story: 'The royal treasury chest contains duplicate gemstones. Casting the collection into a set isolates unique gem types.',
    learningObjective: 'Understand sets and how they automatically eliminate duplicate elements.',
    concept: {
      title: 'Sets (set) in Python',
      whatIsIt: 'Unordered collections of unique elements. Duplicates are instantly discarded.',
      whyUseful: 'Deduplicating lists, finding unique visitors, checking membership in O(1) time.',
      syntax: 'unique = set(my_list)\ncount = len(unique)',
      exampleCode: 'items = [1, 2, 2, 3]\nprint(len(set(items)))',
      expectedOutput: '3',
      realWorldMetaphor: 'A coin sorter that sorts unique denominations into separate slots regardless of count.',
      commonMistakes: [
        'Empty set is created with set(), NOT {} (because {} creates an empty dictionary!).',
        'Sets have no order or indexes: you cannot do my_set[0].'
      ]
    },
    challenge: 'Given raw_gems = ["Ruby", "Emerald", "Ruby", "Diamond"], print the count of unique gems using len(set(raw_gems)) (3).',
    starterCode: 'raw_gems = ["Ruby", "Emerald", "Ruby", "Diamond"]\n# Find count of unique gems\n',
    expectedOutputSummary: '3',
    testCases: [
      {
        id: 'tc_w5_m5_1',
        description: 'Output must be 3',
        type: 'output_exact',
        expectedOutput: '3'
      }
    ],
    hints: [
      'Concept: unique_gems = set(raw_gems)\nprint(len(unique_gems))',
      'Syntax: print(len(set(raw_gems)))',
      'Solution:\nraw_gems = ["Ruby", "Emerald", "Ruby", "Diamond"]\nprint(len(set(raw_gems)))'
    ],
    successMessage: 'Duplicates vanish, leaving three sparkling gem facets on the velvet cushion!',
    xpReward: 540,
    coinReward: 145,
    unlockRequirements: ['w5_m4'],
    stationPosition: [-6, 0, -32],
    npcPosition: [-4, 0, -30]
  },
  {
    id: 'w5_m6',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 6,
    title: 'The Royal Dictionary — Key-Value Pairs',
    difficulty: 'Intermediate',
    npc: {
      id: 'merchant_tariq',
      name: 'Merchant Tariq',
      title: 'Grand Bazaar Master',
      avatar: '🏺',
      color: '#D97706',
      greeting: 'Look up items by their name instead of a numeric index!',
      dialogue: [
        'A dictionary stores associations as key: value pairs inside curly braces {}.',
        'For example: knight = {"name": "Gareth", "health": 100}.',
        'Given prices = {"Potion": 25, "Elixir": 50}, look up prices["Potion"] and print it (25)!'
      ]
    },
    story: 'The bazaar price ledger pairs every potion with its cost in gold.',
    learningObjective: 'Learn dictionary syntax, keys, values, and key lookup.',
    concept: {
      title: 'Dictionaries (dict)',
      whatIsIt: 'Key-value mapping data structure. Look up values instantly by their unique key.',
      whyUseful: 'Player profiles, item stats (damage, durability), configuration settings, API responses.',
      syntax: 'd = {"key": value}\nprint(d["key"])',
      exampleCode: 'hero = {"name": "Arthur", "level": 10}\nprint(hero["name"])',
      expectedOutput: 'Arthur',
      realWorldMetaphor: 'A real-world dictionary where you look up a word (key) to read its definition (value).',
      commonMistakes: [
        'Accessing a key that doesn’t exist triggers a KeyError. Use .get("key") for safe lookups.',
        'Keys must be unique and immutable (strings, integers, tuples).'
      ]
    },
    challenge: 'Given prices = {"Potion": 25, "Elixir": 50}, look up "Potion" and print its price (25).',
    starterCode: 'prices = {"Potion": 25, "Elixir": 50}\n# Look up "Potion" and print\n',
    expectedOutputSummary: '25',
    testCases: [
      {
        id: 'tc_w5_m6_1',
        description: 'Output must be 25',
        type: 'output_exact',
        expectedOutput: '25'
      }
    ],
    hints: [
      'Concept: print(prices["Potion"])',
      'Syntax: print(prices["Potion"])',
      'Solution:\nprices = {"Potion": 25, "Elixir": 50}\nprint(prices["Potion"])'
    ],
    successMessage: 'The merchant ledger confirms the transaction: 25 gold coins exchanged!',
    xpReward: 550,
    coinReward: 150,
    unlockRequirements: ['w5_m5'],
    stationPosition: [8, 0, -38],
    npcPosition: [6, 0, -36]
  },
  {
    id: 'w5_m7',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 7,
    title: 'The Data Explorer — Updating Dictionaries',
    difficulty: 'Intermediate',
    npc: {
      id: 'head_librarian',
      name: 'Librarian Cedric',
      title: 'Keeper of the Royal Folios',
      avatar: '📜',
      color: '#D97706',
      greeting: 'The hero’s stats must increase after a quest!',
      dialogue: [
        'To update or add a value in a dictionary, assign to that key: player["xp"] = 100.',
        'Given player = {"name": "Hero", "level": 1}, update level to 2: player["level"] = 2.',
        'Print player["level"] (2)!'
      ]
    },
    story: 'Updating the player’s official guild registry card to record their advancement.',
    learningObjective: 'Learn how to modify existing dictionary values and assign new keys.',
    concept: {
      title: 'Updating Dictionaries',
      whatIsIt: 'Assigning to dict[key] updates the existing value or creates the key if missing.',
      whyUseful: 'Tracking player stats across game turns: increasing gold, reducing health.',
      syntax: 'player["level"] = 2',
      exampleCode: 'stats = {"hp": 100}\nstats["hp"] -= 20\nprint(stats["hp"])',
      expectedOutput: '80',
      realWorldMetaphor: 'Erasing an old level number on your adventurer passport and writing in the new one.',
      commonMistakes: [
        'Misspelling the key name creates a brand-new unexpected key instead of updating the existing one!',
        'Overwriting a nested dictionary instead of updating a field inside it.'
      ]
    },
    challenge: 'Given player = {"name": "Hero", "level": 1}, set player["level"] = 2 and print player["level"].',
    starterCode: 'player = {"name": "Hero", "level": 1}\n# Update level to 2 and print\n',
    expectedOutputSummary: '2',
    testCases: [
      {
        id: 'tc_w5_m7_1',
        description: 'Output must be 2',
        type: 'output_exact',
        expectedOutput: '2'
      }
    ],
    hints: [
      'Concept: player["level"] = 2, then print(player["level"])',
      'Syntax:\nplayer["level"] = 2\nprint(player["level"])',
      'Solution:\nplayer = {"name": "Hero", "level": 1}\nplayer["level"] = 2\nprint(player["level"])'
    ],
    successMessage: 'The guild seal stamps your card with Level 2 authorization!',
    xpReward: 560,
    coinReward: 155,
    unlockRequirements: ['w5_m6'],
    stationPosition: [-8, 0, -44],
    npcPosition: [-6, 0, -42]
  },
  {
    id: 'w5_m8',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 8,
    title: 'The Sorting Tournament — Sorting Data',
    difficulty: 'Intermediate',
    npc: {
      id: 'merchant_tariq',
      name: 'Merchant Tariq',
      title: 'Grand Bazaar Master',
      avatar: '🏺',
      color: '#D97706',
      greeting: 'Line up tournament participants by their combat rating!',
      dialogue: [
        'The sorted() function returns a brand new sorted list in ascending order.',
        'Given scores = [45, 12, 89, 34], sorted(scores) returns [12, 34, 45, 89].',
        'Print sorted(scores)!'
      ]
    },
    story: 'Arranging knights for the Grand Tournament from lowest rank to grand champion.',
    learningObjective: 'Learn how to sort collections using sorted().',
    concept: {
      title: 'Sorting with sorted()',
      whatIsIt: 'Returns a new list containing all items from the iterable in ascending order.',
      whyUseful: 'High score tables, inventory organization, alphabetical indexing.',
      syntax: 'new_list = sorted(old_list)',
      exampleCode: 'nums = [5, 1, 9]\nprint(sorted(nums))',
      expectedOutput: '[1, 5, 9]',
      realWorldMetaphor: 'Arranging books on a shelf alphabetically or by page count.',
      commonMistakes: [
        'Confusing list.sort() (which modifies the original list and returns None) with sorted(list) (which returns a new list).',
        'Attempting to sort lists with mixed incompatible types (like strings and ints together).'
      ]
    },
    challenge: 'Given scores = [45, 12, 89, 34], use sorted(scores) and print the sorted list.',
    starterCode: 'scores = [45, 12, 89, 34]\n# Print sorted(scores)\n',
    expectedOutputSummary: '[12, 34, 45, 89]',
    testCases: [
      {
        id: 'tc_w5_m8_1',
        description: 'Output must be [12, 34, 45, 89]',
        type: 'output_exact',
        expectedOutput: '[12, 34, 45, 89]'
      }
    ],
    hints: [
      'Concept: print(sorted(scores))',
      'Syntax: print(sorted(scores))',
      'Solution:\nscores = [45, 12, 89, 34]\nprint(sorted(scores))'
    ],
    successMessage: 'The tournament roster is ordered perfectly! The herald announces the brackets.',
    xpReward: 570,
    coinReward: 160,
    unlockRequirements: ['w5_m7'],
    stationPosition: [4, 0, -50],
    npcPosition: [2, 0, -48]
  },
  {
    id: 'w5_m9',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 9,
    title: 'The Smart Collection — List Comprehensions',
    difficulty: 'Advanced',
    npc: {
      id: 'head_librarian',
      name: 'Librarian Cedric',
      title: 'Keeper of the Royal Folios',
      avatar: '📜',
      color: '#D97706',
      greeting: 'Transform entire lists in a single elegant line of Python!',
      dialogue: [
        'List comprehensions offer a concise way to create lists: [expression for item in iterable].',
        'To double each number in [1, 2, 3]: [x * 2 for x in [1, 2, 3]] -> [2, 4, 6].',
        'Given base_nums = [1, 2, 3], write a list comprehension to square each number (x ** 2).',
        'Print the squared list: [1, 4, 9]!'
      ]
    },
    story: 'Alchemical equations require squaring base potion factors across all inventory slots in a flash.',
    learningObjective: 'Master Python list comprehensions for concise, readable transformations.',
    concept: {
      title: 'List Comprehensions',
      whatIsIt: 'A compact syntax for transforming or filtering collections into new lists.',
      whyUseful: 'Replaces multi-line for loops and .append() with a single clear expression.',
      syntax: '[expression for item in iterable]',
      exampleCode: 'squares = [x * x for x in [1, 2, 3]]\nprint(squares)',
      expectedOutput: '[1, 4, 9]',
      realWorldMetaphor: 'An assembly line conveyor where every product is polished simultaneously as it passes.',
      commonMistakes: [
        'Over-complicating with too many nested loops inside one comprehension.',
        'Forgetting the square brackets [] around the comprehension.'
      ]
    },
    challenge: 'Given base_nums = [1, 2, 3], create a new list of their squares using [x ** 2 for x in base_nums] and print it ([1, 4, 9]).',
    starterCode: 'base_nums = [1, 2, 3]\n# Use list comprehension to square each number\nsquared = \nprint(squared)\n',
    expectedOutputSummary: '[1, 4, 9]',
    testCases: [
      {
        id: 'tc_w5_m9_1',
        description: 'Output must be [1, 4, 9]',
        type: 'output_exact',
        expectedOutput: '[1, 4, 9]'
      }
    ],
    hints: [
      'Concept: squared = [x ** 2 for x in base_nums]',
      'Syntax:\nsquared = [x ** 2 for x in base_nums]\nprint(squared)',
      'Solution:\nbase_nums = [1, 2, 3]\nsquared = [x ** 2 for x in base_nums]\nprint(squared)'
    ],
    successMessage: 'The numbers flare into celestial geometric constellations: [1, 4, 9]!',
    xpReward: 580,
    coinReward: 165,
    unlockRequirements: ['w5_m8'],
    stationPosition: [-4, 0, -56],
    npcPosition: [-2, 0, -54]
  },
  {
    id: 'w5_m10',
    worldId: 'data-kingdom',
    worldIndex: 5,
    missionNumber: 10,
    title: 'The Kingdom Boss — The Grand Vault Keeper',
    difficulty: 'Advanced',
    isBoss: true,
    npc: {
      id: 'vault_keeper',
      name: 'The Grand Vault Keeper',
      title: 'Guardian of the Royal Archives',
      avatar: '🗝️',
      color: '#D97706',
      greeting: 'I AM THE CUSTODIAN OF THE SEVEN VAULTS! RECONSTRUCT OUR INVENTORY LEDGER!',
      dialogue: [
        'To unseal the portal to the Master Dungeon, process our treasury ledger:',
        'vault = {"gold": 300, "gems": 150, "relics": 50}',
        'Calculate total_items = sum(vault.values()).',
        'Print f"Total Vault Assets: {total_items}" (500)!'
      ]
    },
    story: 'The massive golden vault doors before the Master Dungeon require a certified inventory audit before they unlatch their ancient gears.',
    learningObjective: 'Synthesize dictionary operations, .values(), and aggregation in a boss-level challenge.',
    concept: {
      title: 'Dictionary Values & Aggregation',
      whatIsIt: 'Extracting all values from a dictionary with .values() and summing them with sum().',
      whyUseful: 'Game economy balances, player total net worth, damage totals across party members.',
      syntax: 'total = sum(d.values())',
      exampleCode: 'stock = {"a": 10, "b": 20}\nprint(f"Total: {sum(stock.values())}")',
      expectedOutput: 'Total: 30',
      realWorldMetaphor: 'Auditing all vault deposit boxes to verify the kingdom’s complete treasury wealth.',
      commonMistakes: [
        'Calling sum(vault) instead of sum(vault.values()): sum(vault) tries to sum the string keys!',
        'Forgetting the .values() parentheses.'
      ]
    },
    challenge: 'vault = {"gold": 300, "gems": 150, "relics": 50}. Calculate total_items = sum(vault.values()) and print f"Total Vault Assets: {total_items}".',
    starterCode: '# Data Kingdom Boss: Audit the Grand Vault!\nvault = {"gold": 300, "gems": 150, "relics": 50}\n\n# Calculate sum of vault.values() and print formatted message\n',
    expectedOutputSummary: 'Total Vault Assets: 500',
    testCases: [
      {
        id: 'tc_w5_m10_1',
        description: 'Output must be "Total Vault Assets: 500"',
        type: 'output_exact',
        expectedOutput: 'Total Vault Assets: 500'
      }
    ],
    hints: [
      'Concept: total_items = sum(vault.values())\nprint(f"Total Vault Assets: {total_items}")',
      'Syntax:\ntotal_items = sum(vault.values())\nprint(f"Total Vault Assets: {total_items}")',
      'Solution:\nvault = {"gold": 300, "gems": 150, "relics": 50}\ntotal_items = sum(vault.values())\nprint(f"Total Vault Assets: {total_items}")'
    ],
    successMessage: 'THE GRAND VAULT UNLOCKS! THE ARCHIVES ARE RESTORED! Seven golden deadbolts slide back, unveiling the ominous, obsidian drawbridge leading down into the subterranean Master Dungeon!',
    xpReward: 700,
    coinReward: 250,
    unlockRequirements: ['w5_m9'],
    stationPosition: [0, 0, -64],
    npcPosition: [-3, 0, -62]
  }
];
