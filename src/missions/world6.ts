import { Mission } from '../types/mission';

export const WORLD6_MISSIONS: Mission[] = [
  {
    id: 'w6_m1',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 1,
    title: 'The Blueprint of Objects — Classes & Instances',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Welcome to the deepest sanctuary of the Lost Kingdom! Here, code creates real entities.',
      dialogue: [
        'A class is a blueprint for creating objects.',
        'Define a class named Golem using class Golem: pass.',
        'Instantiate an object: g = Golem().',
        'Print g is an instance using isinstance(g, Golem) (True)!'
      ]
    },
    story: 'The stone statues in the dungeon antechamber await a master class blueprint to breathe animated life into their stony frames.',
    learningObjective: 'Understand the concept of classes as blueprints and creating object instances.',
    concept: {
      title: 'Classes and Objects (OOP)',
      whatIsIt: 'A class is a blueprint defining structure and behavior. An object is an actual instance created from that blueprint.',
      whyUseful: 'Object-Oriented Programming models real-world game entities: players, enemies, items, spells, UI widgets.',
      syntax: 'class ClassName:\n    pass\n\nobj = ClassName()',
      exampleCode: 'class Hero:\n    pass\nh = Hero()\nprint(isinstance(h, Hero))',
      expectedOutput: 'True',
      realWorldMetaphor: 'An architectural blueprint for a castle versus the actual stone castle constructed from it.',
      commonMistakes: [
        'Forgetting parentheses when creating an instance: g = Golem vs g = Golem().',
        'Class names should follow PascalCase convention (e.g. Golem, GameCharacter).'
      ]
    },
    challenge: 'Define class Golem: pass. Create g = Golem() and print isinstance(g, Golem) (True).',
    starterCode: '# Define class Golem and create instance g\nclass Golem:\n    pass\n\n# Create instance and print isinstance(g, Golem)\n',
    expectedOutputSummary: 'True',
    testCases: [
      {
        id: 'tc_w6_m1_1',
        description: 'Output must be "True"',
        type: 'output_exact',
        expectedOutput: 'True'
      }
    ],
    hints: [
      'Concept: g = Golem()\nprint(isinstance(g, Golem))',
      'Syntax:\nclass Golem:\n    pass\n\ng = Golem()\nprint(isinstance(g, Golem))',
      'Solution:\nclass Golem:\n    pass\n\ng = Golem()\nprint(isinstance(g, Golem))'
    ],
    successMessage: 'The stone golem’s eyes ignite with ruby fire! It steps off its pedestal.',
    xpReward: 600,
    coinReward: 150,
    unlockRequirements: ['w5_m10'],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w6_m2',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 2,
    title: 'The Royal Constructor — __init__()',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Endow your constructed entities with starting attributes!',
      dialogue: [
        'The __init__() constructor runs automatically when a new object is created.',
        'Use self.attribute to store data on the instance.',
        'Define class Hero with __init__(self, name, hp): self.name = name; self.hp = hp.',
        'Create h = Hero("Arthur", 100). Print f"{h.name} HP:{h.hp}"!'
      ]
    },
    story: 'Initializing hero armor and vitality stats before venturing deeper into the dungeon catacombs.',
    learningObjective: 'Master the __init__() initializer method and the self parameter.',
    concept: {
      title: 'The __init__() Method',
      whatIsIt: 'The constructor method called whenever an object is instantiated. self refers to the specific instance being created.',
      whyUseful: 'Initializes starting attributes: player health, inventory capacity, velocity, color.',
      syntax: 'class Player:\n    def __init__(self, name):\n        self.name = name',
      exampleCode: 'class Potion:\n    def __init__(self, potency):\n        self.potency = potency\np = Potion(50)\nprint(p.potency)',
      expectedOutput: '50',
      realWorldMetaphor: 'Filling out the birth certificate or registration card when a new hero is born.',
      commonMistakes: [
        'Writing _init_ with single underscores instead of double underscores __init__.',
        'Forgetting self as the first parameter of methods.'
      ]
    },
    challenge: 'Define class Hero with __init__(self, name, hp): self.name = name; self.hp = hp. Instantiate Hero("Arthur", 100) as h and print f"{h.name} HP:{h.hp}".',
    starterCode: '# Define Hero class with __init__\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n# Create h = Hero("Arthur", 100) and print formatted string\n',
    expectedOutputSummary: 'Arthur HP:100',
    testCases: [
      {
        id: 'tc_w6_m2_1',
        description: 'Output must be "Arthur HP:100"',
        type: 'output_exact',
        expectedOutput: 'Arthur HP:100'
      }
    ],
    hints: [
      'Concept: h = Hero("Arthur", 100)\nprint(f"{h.name} HP:{h.hp}")',
      'Syntax:\nh = Hero("Arthur", 100)\nprint(f"{h.name} HP:{h.hp}")',
      'Solution:\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nh = Hero("Arthur", 100)\nprint(f"{h.name} HP:{h.hp}")'
    ],
    successMessage: 'Hero credentials bound to soul crystal! Vitality meters glow steadily at 100.',
    xpReward: 620,
    coinReward: 160,
    unlockRequirements: ['w6_m1'],
    stationPosition: [8, 0, -14],
    npcPosition: [6, 0, -12]
  },
  {
    id: 'w6_m3',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 3,
    title: 'The Power of Methods — Instance Methods',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Objects must not only hold data—they must perform heroic actions!',
      dialogue: [
        'Methods are functions defined inside a class that operate on self.',
        'Define a method take_damage(self, dmg) that reduces self.hp by dmg.',
        'Create h = Hero("Arthur", 100), call h.take_damage(30), and print h.hp (70)!'
      ]
    },
    story: 'Testing combat durability against subterranean fire traps. Methods alter internal object state dynamically.',
    learningObjective: 'Learn how instance methods manipulate an object’s attributes.',
    concept: {
      title: 'Instance Methods',
      whatIsIt: 'Functions defined inside a class that take self as their first parameter, giving them access to the object’s attributes.',
      whyUseful: 'Encapsulating behavior: walking, jumping, taking damage, casting spells, leveling up.',
      syntax: 'class Player:\n    def take_damage(self, dmg):\n        self.hp -= dmg',
      exampleCode: 'class Counter:\n    def __init__(self):\n        self.val = 0\n    def inc(self):\n        self.val += 1\nc = Counter()\nc.inc()\nprint(c.val)',
      expectedOutput: '1',
      realWorldMetaphor: 'A warrior knowing how to swing their sword or raise their shield when commanded.',
      commonMistakes: [
        'Omitting self in method parameters (def take_damage(dmg): raises a TypeError when called).',
        'Calling the method on the class instead of the instance.'
      ]
    },
    challenge: 'Define class Hero with __init__(self, hp) and take_damage(self, dmg) which does self.hp -= dmg. Create h = Hero(100), do h.take_damage(30), and print h.hp (70).',
    starterCode: 'class Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    # Add take_damage method here:\n    \n\n# Create h = Hero(100), call h.take_damage(30), and print h.hp\n',
    expectedOutputSummary: '70',
    testCases: [
      {
        id: 'tc_w6_m3_1',
        description: 'Output must be 70',
        type: 'output_exact',
        expectedOutput: '70'
      }
    ],
    hints: [
      'Concept: def take_damage(self, dmg):\n    self.hp -= dmg',
      'Syntax:\nclass Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, dmg):\n        self.hp -= dmg\n\nh = Hero(100)\nh.take_damage(30)\nprint(h.hp)',
      'Solution:\nclass Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def take_damage(self, dmg):\n        self.hp -= dmg\n\nh = Hero(100)\nh.take_damage(30)\nprint(h.hp)'
    ],
    successMessage: 'The shield absorbs 30 damage cleanly, leaving 70 HP! Combat mechanics verified.',
    xpReward: 640,
    coinReward: 170,
    unlockRequirements: ['w6_m2'],
    stationPosition: [-8, 0, -20],
    npcPosition: [-6, 0, -18]
  },
  {
    id: 'w6_m4',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 4,
    title: 'The Inheritance Chamber — Inheritance',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Specialize classes through the lineage of inheritance!',
      dialogue: [
        'A child class inherits all attributes and methods from its parent class.',
        'Syntax: class Mage(Hero): inherits from Hero.',
        'Given class Hero with def attack(self): return "Sword Slash", create class Mage(Hero) with def spell(self): return "Fireball".',
        'Create m = Mage() and print f"{m.attack()} & {m.spell()}"!'
      ]
    },
    story: 'The Chamber of Lineage grants apprentices the ability to inherit the traits of ancient hero ancestors while developing unique arcane arts.',
    learningObjective: 'Master object inheritance and class hierarchies.',
    concept: {
      title: 'Inheritance in Python',
      whatIsIt: 'Allows a class to inherit features (attributes and methods) from another class, promoting code reuse.',
      whyUseful: 'Hierarchies in games: Entity -> Character -> Enemy -> Boss.',
      syntax: 'class Parent:\n    pass\n\nclass Child(Parent):\n    pass',
      exampleCode: 'class Animal:\n    def eat(self):\n        return "eating"\nclass Dog(Animal):\n    def bark(self):\n        return "woof"\nd = Dog()\nprint(d.eat(), d.bark())',
      expectedOutput: 'eating woof',
      realWorldMetaphor: 'A prince inheriting a family castle and heirloom sword, while crafting his own magical crown.',
      commonMistakes: [
        'Putting the child in parentheses instead of the parent: class Parent(Child) is backwards!',
        'Over-riding parent methods without calling super() when extending initialization.'
      ]
    },
    challenge: 'Define class Hero with attack(self) returning "Sword Slash". Define class Mage(Hero) with spell(self) returning "Fireball". Create m = Mage() and print f"{m.attack()} & {m.spell()}".',
    starterCode: 'class Hero:\n    def attack(self):\n        return "Sword Slash"\n\n# Define Mage inheriting from Hero\n\n# Instantiate m = Mage() and print\n',
    expectedOutputSummary: 'Sword Slash & Fireball',
    testCases: [
      {
        id: 'tc_w6_m4_1',
        description: 'Output must be "Sword Slash & Fireball"',
        type: 'output_exact',
        expectedOutput: 'Sword Slash & Fireball'
      }
    ],
    hints: [
      'Concept: class Mage(Hero):\n    def spell(self):\n        return "Fireball"',
      'Syntax:\nclass Hero:\n    def attack(self):\n        return "Sword Slash"\n\nclass Mage(Hero):\n    def spell(self):\n        return "Fireball"\n\nm = Mage()\nprint(f"{m.attack()} & {m.spell()}")',
      'Solution:\nclass Hero:\n    def attack(self):\n        return "Sword Slash"\n\nclass Mage(Hero):\n    def spell(self):\n        return "Fireball"\n\nm = Mage()\nprint(f"{m.attack()} & {m.spell()}")'
    ],
    successMessage: 'Both the ancestral blade and the fire incantation blaze simultaneously in your hands!',
    xpReward: 660,
    coinReward: 180,
    unlockRequirements: ['w6_m3'],
    stationPosition: [6, 0, -26],
    npcPosition: [4, 0, -24]
  },
  {
    id: 'w6_m5',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 5,
    title: 'The Error Labyrinth — Exceptions & raise',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Raise magical alarms when forbidden actions are attempted!',
      dialogue: [
        'You can deliberately raise an error in Python using the raise keyword.',
        'Define a function verify_mana(mana): if mana < 0, raise ValueError("Negative Mana").',
        'Otherwise, return "Mana OK". Call verify_mana(50) and print the output!'
      ]
    },
    story: 'Dungeon wards raise magical alarms whenever invalid or corrupt mana levels attempt to breach the firewall.',
    learningObjective: 'Learn how exceptions are raised to guard against invalid program states.',
    concept: {
      title: 'Raising Exceptions (raise)',
      whatIsIt: 'Triggering an exception explicitly with raise to signal an error condition to calling code.',
      whyUseful: 'Input validation: preventing negative health, invalid passwords, empty usernames.',
      syntax: 'if invalid:\n    raise ValueError("Message")',
      exampleCode: 'def check(n):\n    if n < 0:\n        raise ValueError("Invalid")\n    return "OK"\nprint(check(10))',
      expectedOutput: 'OK',
      realWorldMetaphor: 'Pulling an emergency fire alarm when smoke is detected.',
      commonMistakes: [
        'Raising non-exception types (you must raise classes inheriting from BaseException, like ValueError, TypeError).',
        'Not providing informative error messages in the exception.'
      ]
    },
    challenge: 'Define verify_mana(mana): if mana < 0: raise ValueError("Negative Mana"); else: return "Mana OK". Print verify_mana(50).',
    starterCode: '# Define verify_mana and print verify_mana(50)\ndef verify_mana(mana):\n    \n',
    expectedOutputSummary: 'Mana OK',
    testCases: [
      {
        id: 'tc_w6_m5_1',
        description: 'Output must be "Mana OK"',
        type: 'output_exact',
        expectedOutput: 'Mana OK'
      }
    ],
    hints: [
      'Concept: if mana < 0: raise ValueError("Negative Mana") else: return "Mana OK"',
      'Syntax:\ndef verify_mana(mana):\n    if mana < 0:\n        raise ValueError("Negative Mana")\n    return "Mana OK"\n\nprint(verify_mana(50))',
      'Solution:\ndef verify_mana(mana):\n    if mana < 0:\n        raise ValueError("Negative Mana")\n    return "Mana OK"\n\nprint(verify_mana(50))'
    ],
    successMessage: 'The dungeon ward tests negative mana safety! Perimeter perimeter barrier verified.',
    xpReward: 670,
    coinReward: 185,
    unlockRequirements: ['w6_m4'],
    stationPosition: [-6, 0, -32],
    npcPosition: [-4, 0, -30]
  },
  {
    id: 'w6_m6',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 6,
    title: 'The Safe Passage — try / except / finally',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Catch rogue errors without crashing your entire spell program!',
      dialogue: [
        'Wrap hazardous code in a try block, and catch potential errors with except.',
        'Try dividing 100 by 0. Catch ZeroDivisionError and print "Shielded from Division by Zero"!'
      ]
    },
    story: 'A chaotic energy trap attempts to trigger a division by zero error to crash the kingdom’s core. Your try-except shield absorbs the blast.',
    learningObjective: 'Master exception handling with try and except blocks.',
    concept: {
      title: 'Exception Handling (try / except)',
      whatIsIt: 'Gracefully catches and handles errors at runtime so the program continues running smoothly.',
      whyUseful: 'Handling missing files, invalid user inputs, network drops, corrupted data.',
      syntax: 'try:\n    # Risky code\nexcept ErrorType:\n    # Fallback plan',
      exampleCode: 'try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Caught division by zero")',
      expectedOutput: 'Caught division by zero',
      realWorldMetaphor: 'A safety net beneath an acrobatic tightrope walker that catches falls without injury.',
      commonMistakes: [
        'Using a bare except: without specifying the error type (swallows unexpected bugs).',
        'Putting too much unrelated code inside the try block.'
      ]
    },
    challenge: 'Use try / except ZeroDivisionError. Inside try: result = 100 / 0. In except ZeroDivisionError: print "Shielded from Division by Zero".',
    starterCode: '# Write try-except block to catch division by zero\ntry:\n    result = 100 / 0\nexcept ZeroDivisionError:\n    print("")\n',
    expectedOutputSummary: 'Shielded from Division by Zero',
    testCases: [
      {
        id: 'tc_w6_m6_1',
        description: 'Output must be "Shielded from Division by Zero"',
        type: 'output_exact',
        expectedOutput: 'Shielded from Division by Zero'
      }
    ],
    hints: [
      'Concept: In the except block, print "Shielded from Division by Zero".',
      'Syntax:\ntry:\n    result = 100 / 0\nexcept ZeroDivisionError:\n    print("Shielded from Division by Zero")',
      'Solution:\ntry:\n    result = 100 / 0\nexcept ZeroDivisionError:\n    print("Shielded from Division by Zero")'
    ],
    successMessage: 'The mathematical shockwave crashes against your try-except barrier and dissipates safely!',
    xpReward: 680,
    coinReward: 190,
    unlockRequirements: ['w6_m5'],
    stationPosition: [8, 0, -38],
    npcPosition: [6, 0, -36]
  },
  {
    id: 'w6_m7',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 7,
    title: 'The Ancient Files — Text Processing & I/O',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Read and process stream data from the kingdom’s memory scrolls!',
      dialogue: [
        'In Python, io.StringIO allows you to read text as if it were a file on disk.',
        'Use import io and stream = io.StringIO("Line 1\\nLine 2").',
        'Read all lines with stream.readlines(), and print len(lines) (2)!'
      ]
    },
    story: 'Deciphering archived system configuration logs from the Citadel core using in-memory file streams.',
    learningObjective: 'Learn file-like stream reading and text processing with io.StringIO.',
    concept: {
      title: 'Text Streams & File I/O',
      whatIsIt: 'Reading and writing structured lines of text sequentially.',
      whyUseful: 'Loading save files, parsing level maps, reading config settings, processing CSV data.',
      syntax: 'import io\nstream = io.StringIO("A\\nB")\nlines = stream.readlines()\nprint(len(lines))',
      exampleCode: 'import io\nbuf = io.StringIO("Core: Active\\nStatus: Nominal")\nprint(buf.readline().strip())',
      expectedOutput: 'Core: Active',
      realWorldMetaphor: 'Reading an ancient scroll line by line from top to bottom.',
      commonMistakes: [
        'Forgetting that readlines() includes trailing newline characters (\\n).',
        'Forgetting to seek(0) if reading a stream a second time.'
      ]
    },
    challenge: 'import io. Create stream = io.StringIO("Log 1\\nLog 2\\nLog 3"). Read lines = stream.readlines() and print len(lines) (3).',
    starterCode: '# Read from io.StringIO and print line count\nimport io\n\nstream = io.StringIO("Log 1\\nLog 2\\nLog 3")\n# Read lines and print len(lines)\n',
    expectedOutputSummary: '3',
    testCases: [
      {
        id: 'tc_w6_m7_1',
        description: 'Output must be 3',
        type: 'output_exact',
        expectedOutput: '3'
      }
    ],
    hints: [
      'Concept: lines = stream.readlines()\nprint(len(lines))',
      'Syntax:\nimport io\nstream = io.StringIO("Log 1\\nLog 2\\nLog 3")\nlines = stream.readlines()\nprint(len(lines))',
      'Solution:\nimport io\nstream = io.StringIO("Log 1\\nLog 2\\nLog 3")\nlines = stream.readlines()\nprint(len(lines))'
    ],
    successMessage: 'Three critical diagnostic lines parsed successfully! The Citadel telemetry is green.',
    xpReward: 700,
    coinReward: 200,
    unlockRequirements: ['w6_m6'],
    stationPosition: [-8, 0, -44],
    npcPosition: [-6, 0, -42]
  },
  {
    id: 'w6_m8',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 8,
    title: 'The Module Library — Imports & Math',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Incorporate external wisdom from Python’s vast standard library!',
      dialogue: [
        'The import keyword brings in pre-built modules like math.',
        'import math allows you to access math.sqrt(), math.pi, and math.floor().',
        'Import math, compute math.sqrt(144), cast to int, and print it (12)!'
      ]
    },
    story: 'Calculating the geometric hypotenuse of the dungeon bridge requires importing the sacred math library.',
    learningObjective: 'Learn how to import and use standard library modules.',
    concept: {
      title: 'Modules & Imports',
      whatIsIt: 'Python files containing functions, classes, and constants that you can import into your scripts.',
      whyUseful: 'Gives you thousands of battle-tested tools: math, random, json, datetime, re.',
      syntax: 'import math\nprint(math.sqrt(16))',
      exampleCode: 'import math\nprint(int(math.sqrt(49)))',
      expectedOutput: '7',
      realWorldMetaphor: 'Summoning a specialized master craftsman from a neighboring kingdom to assist your forge.',
      commonMistakes: [
        'Forgetting the module prefix: calling sqrt(16) without math.sqrt(16) when using import math.',
        'Misspelling module names.'
      ]
    },
    challenge: 'import math. Calculate int(math.sqrt(144)) and print the result (12).',
    starterCode: '# Import math and print int(math.sqrt(144))\nimport math\n\n',
    expectedOutputSummary: '12',
    testCases: [
      {
        id: 'tc_w6_m8_1',
        description: 'Output must be 12',
        type: 'output_exact',
        expectedOutput: '12'
      }
    ],
    hints: [
      'Concept: import math\nprint(int(math.sqrt(144)))',
      'Syntax:\nimport math\nprint(int(math.sqrt(144)))',
      'Solution:\nimport math\nprint(int(math.sqrt(144)))'
    ],
    successMessage: 'The stone bridge spans across the abyss with mathematical perfection: 12 cubits length!',
    xpReward: 720,
    coinReward: 210,
    unlockRequirements: ['w6_m7'],
    stationPosition: [4, 0, -50],
    npcPosition: [2, 0, -48]
  },
  {
    id: 'w6_m9',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 9,
    title: 'The Generator Chamber — Generators & yield',
    difficulty: 'Advanced',
    npc: {
      id: 'dungeon_spirit',
      name: 'Spirit of the Ancient Architect',
      title: 'Architect of the Core Citadel',
      avatar: '👻',
      color: '#E11D48',
      greeting: 'Stream infinite energy on demand using generator functions!',
      dialogue: [
        'A generator function uses yield instead of return to produce a stream of values one at a time.',
        'Define a generator count_up(n): for i in range(1, n + 1): yield i.',
        'Collect into a list with list(count_up(3)) and print it: [1, 2, 3]!'
      ]
    },
    story: 'Pumping crystalline energy without overflowing memory buffers requires lazily yielding pulses on demand.',
    learningObjective: 'Understand generator functions, the yield keyword, and lazy evaluation.',
    concept: {
      title: 'Generators & yield',
      whatIsIt: 'Functions that pause execution and yield values one at a time, resuming when the next value is requested.',
      whyUseful: 'Extremely memory efficient when dealing with huge datasets, endless streams, or procedural generation.',
      syntax: 'def my_gen():\n    yield 1\n    yield 2',
      exampleCode: 'def stream(n):\n    for x in range(n):\n        yield x\nprint(list(stream(3)))',
      expectedOutput: '[0, 1, 2]',
      realWorldMetaphor: 'A water fountain that gives you a glass of water on demand, instead of flooding the entire room at once.',
      commonMistakes: [
        'Confusing yield with return: yield pauses and can be resumed; return ends the function forever.',
        'Printing the generator object directly without looping over it or wrapping with list().'
      ]
    },
    challenge: 'Define generator count_up(n) yielding i for i in range(1, n + 1). Print list(count_up(3)) ([1, 2, 3]).',
    starterCode: '# Define generator count_up(n) using yield\ndef count_up(n):\n    for i in range(1, n + 1):\n        yield i\n\n# Print list(count_up(3))\n',
    expectedOutputSummary: '[1, 2, 3]',
    testCases: [
      {
        id: 'tc_w6_m9_1',
        description: 'Output must be [1, 2, 3]',
        type: 'output_exact',
        expectedOutput: '[1, 2, 3]'
      }
    ],
    hints: [
      'Concept: list(count_up(3)) converts generator output into [1, 2, 3].',
      'Syntax:\ndef count_up(n):\n    for i in range(1, n + 1):\n        yield i\n\nprint(list(count_up(3)))',
      'Solution:\ndef count_up(n):\n    for i in range(1, n + 1):\n        yield i\n\nprint(list(count_up(3)))'
    ],
    successMessage: 'The crystalline reactor hums with sustainable, on-demand power!',
    xpReward: 750,
    coinReward: 220,
    unlockRequirements: ['w6_m8'],
    stationPosition: [-4, 0, -56],
    npcPosition: [-2, 0, -54]
  },
  {
    id: 'w6_m10',
    worldId: 'master-dungeon',
    worldIndex: 6,
    missionNumber: 10,
    title: 'The Final Boss — The Lost Kingdom Guardian',
    difficulty: 'Master',
    isBoss: true,
    npc: {
      id: 'kingdom_guardian',
      name: 'The Lost Kingdom Guardian',
      title: 'Ancient Titan of the Core',
      avatar: '👑',
      color: '#E11D48',
      greeting: 'I AM THE LOST KINGDOM GUARDIAN. TO RESTORE THE REALM, COMBINE ALL KNOWLEDGE OF PYTHON!',
      dialogue: [
        'You stand before the Final Core of The Lost Kingdom!',
        'Write the master restoration script: define class KingdomCore with attribute power = 100.',
        'Add method restore(self): return f"Realm Restored with {self.power}% Magic!".',
        'Create core = KingdomCore(), call core.restore(), and print the message!',
        'Pass this test, and the Lost Kingdom is saved forever!'
      ]
    },
    story: 'The colossal glowing heart of the Lost Kingdom pulses in the center of the Master Dungeon. Combining classes, constructors, methods, and formatted strings ignites the central obelisk, restoring coding power across all six worlds.',
    learningObjective: 'Unite classes, methods, and formatted strings to complete the grand adventure and save the realm.',
    concept: {
      title: 'The Master Project: Kingdom Restored',
      whatIsIt: 'The culmination of all your programming learning: designing object models with clear encapsulation and expressive output.',
      whyUseful: 'Writing full-scale software architecture with maintainable, professional Python patterns.',
      syntax: 'class KingdomCore:\n    def __init__(self):\n        self.power = 100\n    def restore(self):\n        return f"Realm Restored with {self.power}% Magic!"\n\ncore = KingdomCore()\nprint(core.restore())',
      exampleCode: 'class System:\n    def __init__(self):\n        self.status = "Active"\n    def check(self):\n        return f"System: {self.status}"\nprint(System().check())',
      expectedOutput: 'System: Active',
      realWorldMetaphor: 'Placing the final keystone in the arch of a glorious restored royal cathedral.',
      commonMistakes: [
        'Forgetting self inside the restore method.',
        'Exact string formatting mismatch: ensure it matches "Realm Restored with 100% Magic!".'
      ]
    },
    challenge: 'Define class KingdomCore with __init__ setting self.power = 100, and method restore(self) returning f"Realm Restored with {self.power}% Magic!". Create core = KingdomCore() and print core.restore().',
    starterCode: '# FINAL BOSS CHALLENGE: RESTORE THE LOST KINGDOM!\nclass KingdomCore:\n    def __init__(self):\n        self.power = 100\n        \n    def restore(self):\n        return f"Realm Restored with {self.power}% Magic!"\n\n# Instantiate core and print core.restore()\n',
    expectedOutputSummary: 'Realm Restored with 100% Magic!',
    testCases: [
      {
        id: 'tc_w6_m10_1',
        description: 'Output must be "Realm Restored with 100% Magic!"',
        type: 'output_exact',
        expectedOutput: 'Realm Restored with 100% Magic!'
      }
    ],
    hints: [
      'Concept: core = KingdomCore()\nprint(core.restore())',
      'Syntax:\nclass KingdomCore:\n    def __init__(self):\n        self.power = 100\n    def restore(self):\n        return f"Realm Restored with {self.power}% Magic!"\n\ncore = KingdomCore()\nprint(core.restore())',
      'Solution:\nclass KingdomCore:\n    def __init__(self):\n        self.power = 100\n    def restore(self):\n        return f"Realm Restored with {self.power}% Magic!"\n\ncore = KingdomCore()\nprint(core.restore())'
    ],
    successMessage: 'THE LOST KINGDOM IS RESTORED! A BLINDING CASCADE OF GOLDEN LIGHT SURGES THROUGH THE OBSIDIAN CITADEL! RIVERS FLOW WITH EMERALD BRILLIANCE, TOWERS SHINE ACROSS ALL SIX WORLDS, AND THE CITIZENS HAIL YOU AS THE GRAND HIGH ARCHMAGE OF CODE!',
    xpReward: 1000,
    coinReward: 500,
    unlockRequirements: ['w6_m9'],
    stationPosition: [0, 0, -64],
    npcPosition: [-3, 0, -62]
  }
];
