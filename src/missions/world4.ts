import { Mission } from '../types/mission';

export const WORLD4_MISSIONS: Mission[] = [
  {
    id: 'w4_m1',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 1,
    title: 'The First Mountain Spell — Defining Functions',
    difficulty: 'Intermediate',
    npc: {
      id: 'archmage_solon',
      name: 'Archmage Solon',
      title: 'Grand Sorcerer of the Peaks',
      avatar: '🧙‍♂️',
      color: '#7C3AED',
      greeting: 'Welcome to the snowy peaks of Function Mountains, where spells are made reusable!',
      dialogue: [
        'A function is a named block of code that performs a specific task whenever called.',
        'We define a function using the def keyword, followed by the function name and ():',
        'Define a function cast_frost() that prints "Frost Shield Active". Then call cast_frost()!'
      ]
    },
    story: 'Freezing gales whip the mountain ridges. Defining a reusable Frost Shield allows you to conjure defense whenever cold winds surge.',
    learningObjective: 'Learn how to define a function with def and execute it by calling its name.',
    concept: {
      title: 'Defining Functions (def)',
      whatIsIt: 'A function bundles statements together under a name so they can be run repeatedly without rewriting code.',
      whyUseful: 'Prevents code duplication (DRY: Don’t Repeat Yourself), organizes programs into logical units.',
      syntax: 'def function_name():\n    # Statements\n\nfunction_name() # Call it',
      exampleCode: 'def ignite():\n    print("Flame Spark")\n\nignite()',
      expectedOutput: 'Flame Spark',
      realWorldMetaphor: 'Recording an incantation on a magical stone so any apprentice can recite it whenever needed.',
      commonMistakes: [
        'Defining the function but forgetting to call it: defining alone does not run the code inside!',
        'Missing the colon (:) or parentheses () on the def line.'
      ]
    },
    challenge: 'Define a function cast_frost() that prints "Frost Shield Active". Then call cast_frost().',
    starterCode: '# Define cast_frost() and call it\ndef cast_frost():\n    \n',
    expectedOutputSummary: 'Frost Shield Active',
    testCases: [
      {
        id: 'tc_w4_m1_1',
        description: 'Output must be "Frost Shield Active"',
        type: 'output_exact',
        expectedOutput: 'Frost Shield Active'
      }
    ],
    hints: [
      'Concept: def cast_frost():\n    print("Frost Shield Active")\ncast_frost()',
      'Syntax:\ndef cast_frost():\n    print("Frost Shield Active")\n\ncast_frost()',
      'Solution:\ndef cast_frost():\n    print("Frost Shield Active")\n\ncast_frost()'
    ],
    successMessage: 'A shimmering dome of crystalline frost forms around you, deflecting the blizzard!',
    xpReward: 400,
    coinReward: 100,
    unlockRequirements: ['w3_m10'],
    stationPosition: [0, 0, -8],
    npcPosition: [-2, 0, -6]
  },
  {
    id: 'w4_m2',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 2,
    title: 'The Call of the Wizard — Calling Multiple Times',
    difficulty: 'Intermediate',
    npc: {
      id: 'apprentice_lyra',
      name: 'Apprentice Lyra',
      title: 'Acolyte of the High Tower',
      avatar: '✨',
      color: '#7C3AED',
      greeting: 'Witness the true power of functions: call once, call twice, call forever!',
      dialogue: [
        'Once a function is defined, you can invoke it as many times as you desire.',
        'Define chime() to print "Ding!".',
        'Call chime() three times to ring the monastery bells three times!'
      ]
    },
    story: 'The alpine monastery requires three bell strikes to signal dawn across the mountain valleys.',
    learningObjective: 'Observe how functions allow effortless code reuse by multiple invocations.',
    concept: {
      title: 'Reusing Functions',
      whatIsIt: 'Calling a function multiple times executes its body repeatedly without repeating code.',
      whyUseful: 'Playing a sound effect, resetting a level, redrawing the screen, or saving player data.',
      syntax: 'def chime():\n    print("Ding!")\n\nchime()\nchime()',
      exampleCode: 'def bell():\n    print("Bong")\nbell()\nbell()',
      expectedOutput: 'Bong\nBong',
      realWorldMetaphor: 'Pressing a button on a musical chime box to ring it whenever desired.',
      commonMistakes: [
        'Writing chime instead of chime(): without the parentheses, the function is NOT executed!',
        'Redefining the function each time instead of just calling it.'
      ]
    },
    challenge: 'Define chime() that prints "Ding!". Call chime() 3 times.',
    starterCode: '# Define chime() and call it 3 times\ndef chime():\n    print("Ding!")\n\n',
    expectedOutputSummary: 'Ding!\nDing!\nDing!',
    testCases: [
      {
        id: 'tc_w4_m2_1',
        description: 'Outputs "Ding!" three times',
        type: 'output_exact',
        expectedOutput: 'Ding!\nDing!\nDing!'
      }
    ],
    hints: [
      'Concept: Call chime() on three separate lines.',
      'Syntax:\ndef chime():\n    print("Ding!")\n\nchime()\nchime()\nchime()',
      'Solution:\ndef chime():\n    print("Ding!")\n\nchime()\nchime()\nchime()'
    ],
    successMessage: 'The ancient monastery bells ring across the snowy peaks! The sound clears the morning fog.',
    xpReward: 410,
    coinReward: 105,
    unlockRequirements: ['w4_m1'],
    stationPosition: [8, 0, -14],
    npcPosition: [6, 0, -12]
  },
  {
    id: 'w4_m3',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 3,
    title: 'The Message Carrier — Function Parameters',
    difficulty: 'Intermediate',
    npc: {
      id: 'archmage_solon',
      name: 'Archmage Solon',
      title: 'Grand Sorcerer of the Peaks',
      avatar: '🧙‍♂️',
      color: '#7C3AED',
      greeting: 'Functions can receive information through parameters in their parentheses!',
      dialogue: [
        'Parameters are variables listed inside the function definition parentheses.',
        'When you call the function, you pass arguments to those parameters.',
        'Define greet(name) that prints "Hail, " + name + "!". Call greet("Solon")!'
      ]
    },
    story: 'The mountain sanctuary guards salute visiting sorcerers by name. Passing the name parameter delivers a customized greeting.',
    learningObjective: 'Learn how to pass arguments into function parameters.',
    concept: {
      title: 'Function Parameters & Arguments',
      whatIsIt: 'Parameters are placeholders in function definitions; arguments are the actual values passed in when calling.',
      whyUseful: 'Makes functions flexible—one function can calculate damage for any weapon or heal any player.',
      syntax: 'def greet(name):\n    print("Hello, " + name)\n\ngreet("Arthur")',
      exampleCode: 'def shout(msg):\n    print(msg.upper())\nshout("fire")',
      expectedOutput: 'FIRE',
      realWorldMetaphor: 'A mailbox slot on a temple door: whatever letter you slip inside, the monk reads.',
      commonMistakes: [
        'Calling the function without required arguments (e.g. greet() when greet(name) was defined).',
        'Confusing the variable name inside the function with what was passed in.'
      ]
    },
    challenge: 'Define greet(name) that prints "Hail, " + name + "!". Call greet("Solon"). Output:\nHail, Solon!',
    starterCode: '# Define greet(name) and call greet("Solon")\n',
    expectedOutputSummary: 'Hail, Solon!',
    testCases: [
      {
        id: 'tc_w4_m3_1',
        description: 'Output must be "Hail, Solon!"',
        type: 'output_exact',
        expectedOutput: 'Hail, Solon!'
      }
    ],
    hints: [
      'Concept: def greet(name): print("Hail, " + name + "!") then greet("Solon")',
      'Syntax:\ndef greet(name):\n    print("Hail, " + name + "!")\n\ngreet("Solon")',
      'Solution:\ndef greet(name):\n    print("Hail, " + name + "!")\n\ngreet("Solon")'
    ],
    successMessage: 'Archmage Solon nods with deep satisfaction: "Well spoken, apprentice!"',
    xpReward: 420,
    coinReward: 110,
    unlockRequirements: ['w4_m2'],
    stationPosition: [-8, 0, -20],
    npcPosition: [-6, 0, -18]
  },
  {
    id: 'w4_m4',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 4,
    title: 'The Gift of Return — Return Values',
    difficulty: 'Intermediate',
    npc: {
      id: 'apprentice_lyra',
      name: 'Apprentice Lyra',
      title: 'Acolyte of the High Tower',
      avatar: '✨',
      color: '#7C3AED',
      greeting: 'Do not just print inside a function—send data back with return!',
      dialogue: [
        'The return keyword gives a result back to whoever called the function.',
        'You can store the returned value in a variable or use it in further calculations.',
        'Define double(n) that returns n * 2. Calculate res = double(21) and print res (42)!'
      ]
    },
    story: 'The transmuter altar doubles the potency of any crystal placed upon it. Returning the value lets you store it in your inventory.',
    learningObjective: 'Master function return values using the return statement.',
    concept: {
      title: 'The return Statement',
      whatIsIt: 'Terminates function execution and sends a value back to the caller.',
      whyUseful: 'Functions compute answers (damage, distance, discounts) that other parts of your code need to use.',
      syntax: 'def square(x):\n    return x * x\n\nresult = square(5)',
      exampleCode: 'def add_ten(n):\n    return n + 10\nval = add_ten(5)\nprint(val)',
      expectedOutput: '15',
      realWorldMetaphor: 'Handing raw gold ore to a blacksmith and receiving a forged sword back in return.',
      commonMistakes: [
        'Confusing print() with return: print() only shows text on screen; return hands data to code!',
        'Writing code after return in the function (any code after return is unreachable).'
      ]
    },
    challenge: 'Define double(n) that returns n * 2. Store double(21) in res and print res (42).',
    starterCode: '# Define double(n) returning n * 2\n\n# Call double(21), store in res, and print res\n',
    expectedOutputSummary: '42',
    testCases: [
      {
        id: 'tc_w4_m4_1',
        description: 'Output must be 42',
        type: 'output_exact',
        expectedOutput: '42'
      }
    ],
    hints: [
      'Concept: def double(n): return n * 2, then res = double(21); print(res)',
      'Syntax:\ndef double(n):\n    return n * 2\n\nres = double(21)\nprint(res)',
      'Solution:\ndef double(n):\n    return n * 2\n\nres = double(21)\nprint(res)'
    ],
    successMessage: 'The crystal doubles in radiant luster! The transmuter altar chimes harmoniously.',
    xpReward: 430,
    coinReward: 115,
    unlockRequirements: ['w4_m3'],
    stationPosition: [6, 0, -26],
    npcPosition: [4, 0, -24]
  },
  {
    id: 'w4_m5',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 5,
    title: 'The Royal Calculator — Multiple Parameters',
    difficulty: 'Intermediate',
    npc: {
      id: 'archmage_solon',
      name: 'Archmage Solon',
      title: 'Grand Sorcerer of the Peaks',
      avatar: '🧙‍♂️',
      color: '#7C3AED',
      greeting: 'Spells often combine multiple elements at once!',
      dialogue: [
        'You can separate multiple parameters with commas: def add(a, b):.',
        'Define calculate_damage(base, bonus) that returns base + bonus.',
        'Call calculate_damage(50, 25) and print the result (75)!'
      ]
    },
    story: 'Calibrating the damage output of the ice ball spell requires combining base magic and elemental bonus.',
    learningObjective: 'Define and invoke functions accepting multiple parameters.',
    concept: {
      title: 'Multiple Parameters',
      whatIsIt: 'Functions can take two, three, or more inputs separated by commas.',
      whyUseful: 'Mathematical formulas (area = width * height), comparing positions, combat calculations.',
      syntax: 'def add(a, b):\n    return a + b',
      exampleCode: 'def mul(x, y):\n    return x * y\nprint(mul(4, 5))',
      expectedOutput: '20',
      realWorldMetaphor: 'A blender that takes milk, berries, and honey to produce a smoothie.',
      commonMistakes: [
        'Passing fewer or more arguments than the function expects.',
        'Mixing up the order of arguments when types or roles differ.'
      ]
    },
    challenge: 'Define calculate_damage(base, bonus) returning base + bonus. Call calculate_damage(50, 25) and print the output (75).',
    starterCode: '# Define calculate_damage(base, bonus)\n\n# Print the result of calculate_damage(50, 25)\n',
    expectedOutputSummary: '75',
    testCases: [
      {
        id: 'tc_w4_m5_1',
        description: 'Output must be 75',
        type: 'output_exact',
        expectedOutput: '75'
      }
    ],
    hints: [
      'Concept: def calculate_damage(base, bonus): return base + bonus',
      'Syntax:\ndef calculate_damage(base, bonus):\n    return base + bonus\n\nprint(calculate_damage(50, 25))',
      'Solution:\ndef calculate_damage(base, bonus):\n    return base + bonus\n\nprint(calculate_damage(50, 25))'
    ],
    successMessage: 'A calibrated spike of frost strikes the target dummy for exactly 75 damage!',
    xpReward: 440,
    coinReward: 120,
    unlockRequirements: ['w4_m4'],
    stationPosition: [-6, 0, -32],
    npcPosition: [-4, 0, -30]
  },
  {
    id: 'w4_m6',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 6,
    title: 'The Flexible Spell — Default Arguments',
    difficulty: 'Intermediate',
    npc: {
      id: 'apprentice_lyra',
      name: 'Apprentice Lyra',
      title: 'Acolyte of the High Tower',
      avatar: '✨',
      color: '#7C3AED',
      greeting: 'Provide a backup default value in case an argument is omitted!',
      dialogue: [
        'Default parameters take effect if the caller does not supply that argument.',
        'Syntax: def heal(amount=20):.',
        'Define heal(amount=20) that returns f"Healed {amount} HP".',
        'Print heal() with no arguments! It will use the default 20.'
      ]
    },
    story: 'The standard restorative spring heals 20 health by default, but masters can augment it with higher values.',
    learningObjective: 'Learn how to specify default parameter values in function signatures.',
    concept: {
      title: 'Default Parameter Values',
      whatIsIt: 'Parameters assigned a fallback value with = in the def line.',
      whyUseful: 'Makes functions convenient to call with sensible defaults while preserving customizability.',
      syntax: 'def func(param=default_val):\n    ...',
      exampleCode: 'def greet(user="Guest"):\n    return f"Welcome, {user}"\nprint(greet())',
      expectedOutput: 'Welcome, Guest',
      realWorldMetaphor: 'Ordering a standard burger that comes with cheese by default, unless you specify otherwise.',
      commonMistakes: [
        'Putting default parameters BEFORE non-default parameters: non-defaults must always come first!',
        'Modifying mutable defaults (like empty lists) across calls.'
      ]
    },
    challenge: 'Define heal(amount=20) returning f"Healed {amount} HP". Call heal() with no arguments and print its return.',
    starterCode: '# Define heal with default amount=20 and print heal()\n',
    expectedOutputSummary: 'Healed 20 HP',
    testCases: [
      {
        id: 'tc_w4_m6_1',
        description: 'Output must be "Healed 20 HP"',
        type: 'output_exact',
        expectedOutput: 'Healed 20 HP'
      }
    ],
    hints: [
      'Concept: def heal(amount=20): return f"Healed {amount} HP"',
      'Syntax:\ndef heal(amount=20):\n    return f"Healed {amount} HP"\n\nprint(heal())',
      'Solution:\ndef heal(amount=20):\n    return f"Healed {amount} HP"\n\nprint(heal())'
    ],
    successMessage: 'Warm emerald healing light washes over your wounds, restoring 20 HP!',
    xpReward: 450,
    coinReward: 125,
    unlockRequirements: ['w4_m5'],
    stationPosition: [8, 0, -38],
    npcPosition: [6, 0, -36]
  },
  {
    id: 'w4_m7',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 7,
    title: 'The Named Magic — Keyword Arguments',
    difficulty: 'Intermediate',
    npc: {
      id: 'archmage_solon',
      name: 'Archmage Solon',
      title: 'Grand Sorcerer of the Peaks',
      avatar: '🧙‍♂️',
      color: '#7C3AED',
      greeting: 'When calling a spell, name your parameters explicitly to ignore their order!',
      dialogue: [
        'Keyword arguments pass values by parameter name: func(element="Ice", power=50).',
        'Define cast(element, power) that returns f"{element} spell with {power} power".',
        'Call cast(power=100, element="Lightning") and print the result!'
      ]
    },
    story: 'The grand ritual table allows ingredients to be named in any order without disrupting the brew.',
    learningObjective: 'Understand keyword arguments (kwargs) and order independence.',
    concept: {
      title: 'Keyword Arguments',
      whatIsIt: 'Calling a function by explicitly specifying parameter_name=value.',
      whyUseful: 'Improves code readability and lets you skip optional arguments without worrying about order.',
      syntax: 'func(param2=val2, param1=val1)',
      exampleCode: 'def report(hero, hp):\n    return f"{hero} has {hp} HP"\nprint(report(hp=90, hero="Arthur"))',
      expectedOutput: 'Arthur has 90 HP',
      realWorldMetaphor: 'Addressing labeled package boxes: the courier knows where each box goes regardless of order.',
      commonMistakes: [
        'Passing positional arguments AFTER keyword arguments (positionals must always come first).',
        'Misspelling the parameter name in the keyword call.'
      ]
    },
    challenge: 'Define cast(element, power) returning f"{element} spell with {power} power". Call cast(power=100, element="Lightning") and print it.',
    starterCode: '# Define cast(element, power) and call with keyword arguments\n',
    expectedOutputSummary: 'Lightning spell with 100 power',
    testCases: [
      {
        id: 'tc_w4_m7_1',
        description: 'Output must be "Lightning spell with 100 power"',
        type: 'output_exact',
        expectedOutput: 'Lightning spell with 100 power'
      }
    ],
    hints: [
      'Concept: def cast(element, power): return f"{element} spell with {power} power"',
      'Syntax:\ndef cast(element, power):\n    return f"{element} spell with {power} power"\n\nprint(cast(power=100, element="Lightning"))',
      'Solution:\ndef cast(element, power):\n    return f"{element} spell with {power} power"\n\nprint(cast(power=100, element="Lightning"))'
    ],
    successMessage: 'Arcs of crackling violet lightning strike the mountaintop rod!',
    xpReward: 460,
    coinReward: 130,
    unlockRequirements: ['w4_m6'],
    stationPosition: [-8, 0, -44],
    npcPosition: [-6, 0, -42]
  },
  {
    id: 'w4_m8',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 8,
    title: 'The Hidden Power — Variable Scope',
    difficulty: 'Intermediate',
    npc: {
      id: 'apprentice_lyra',
      name: 'Apprentice Lyra',
      title: 'Acolyte of the High Tower',
      avatar: '✨',
      color: '#7C3AED',
      greeting: 'Variables created inside a function are private to that function!',
      dialogue: [
        'Local variables only exist while the function is running.',
        'Global variables exist outside and can be read by everyone.',
        'Set realm = "Mountains" globally. In get_scope(), return realm. Print get_scope()!'
      ]
    },
    story: 'Understanding the distinction between sanctuary-wide global magic and private personal mana chambers.',
    learningObjective: 'Learn the difference between local and global variable scope in Python.',
    concept: {
      title: 'Variable Scope (Local vs Global)',
      whatIsIt: 'Scope determines where a variable is accessible: local variables belong to their function; global variables belong to the file.',
      whyUseful: 'Prevents functions from accidentally overwriting variables used in other parts of the program.',
      syntax: 'global_var = 10\ndef foo():\n    local_var = 5\n    return global_var + local_var',
      exampleCode: 'kingdom = "Lost Kingdom"\ndef get_kingdom():\n    return kingdom\nprint(get_kingdom())',
      expectedOutput: 'Lost Kingdom',
      realWorldMetaphor: 'A kingdom-wide castle law (global) versus a private family rule inside a cottage (local).',
      commonMistakes: [
        'Trying to access a local variable from outside the function (causes a NameError).',
        'Trying to modify a global variable without the global keyword.'
      ]
    },
    challenge: 'Set realm = "Mountains" outside. Define get_scope() returning realm. Print get_scope().',
    starterCode: '# Set realm globally and return it from get_scope()\nrealm = "Mountains"\n\ndef get_scope():\n    \n\nprint(get_scope())\n',
    expectedOutputSummary: 'Mountains',
    testCases: [
      {
        id: 'tc_w4_m8_1',
        description: 'Output must be "Mountains"',
        type: 'output_exact',
        expectedOutput: 'Mountains'
      }
    ],
    hints: [
      'Concept: In get_scope(), write return realm.',
      'Syntax:\nrealm = "Mountains"\ndef get_scope():\n    return realm\nprint(get_scope())',
      'Solution:\nrealm = "Mountains"\ndef get_scope():\n    return realm\nprint(get_scope())'
    ],
    successMessage: 'The boundary seals align! You now command the boundaries of variable scope.',
    xpReward: 470,
    coinReward: 135,
    unlockRequirements: ['w4_m7'],
    stationPosition: [4, 0, -50],
    npcPosition: [2, 0, -48]
  },
  {
    id: 'w4_m9',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 9,
    title: 'The Quick Spell — Lambda Functions',
    difficulty: 'Advanced',
    npc: {
      id: 'archmage_solon',
      name: 'Archmage Solon',
      title: 'Grand Sorcerer of the Peaks',
      avatar: '🧙‍♂️',
      color: '#7C3AED',
      greeting: 'For tiny one-line incantations, wizards cast anonymous lambda spells!',
      dialogue: [
        'A lambda is an anonymous, single-line function: lambda x: x * 3.',
        'Assign a lambda that adds 10 to a variable boost: boost = lambda x: x + 10.',
        'Call boost(5) and print the result (15)!'
      ]
    },
    story: 'Speed-casting requires quick one-line runes without formal function declarations.',
    learningObjective: 'Learn lambda function syntax for concise function definitions.',
    concept: {
      title: 'Lambda Functions',
      whatIsIt: 'Small anonymous functions defined with the lambda keyword containing a single expression.',
      whyUseful: 'Commonly passed as quick arguments into map(), filter(), or sorting keys.',
      syntax: 'f = lambda arg: expression',
      exampleCode: 'triple = lambda x: x * 3\nprint(triple(4))',
      expectedOutput: '12',
      realWorldMetaphor: 'A disposable pocket spell scroll cast once on the fly.',
      commonMistakes: [
        'Putting statements (like return or print()) inside a lambda expression.',
        'Overusing lambdas for complex logic that should be standard def functions.'
      ]
    },
    challenge: 'Create boost = lambda x: x + 10. Call boost(5) and print the result (15).',
    starterCode: '# Create lambda boost that adds 10 to x\nboost = lambda \n\n# Print boost(5)\n',
    expectedOutputSummary: '15',
    testCases: [
      {
        id: 'tc_w4_m9_1',
        description: 'Output must be 15',
        type: 'output_exact',
        expectedOutput: '15'
      }
    ],
    hints: [
      'Concept: boost = lambda x: x + 10, then print(boost(5))',
      'Syntax:\nboost = lambda x: x + 10\nprint(boost(5))',
      'Solution:\nboost = lambda x: x + 10\nprint(boost(5))'
    ],
    successMessage: 'A swift burst of kinetic speed surges through your boots! You leap across the chasm.',
    xpReward: 480,
    coinReward: 140,
    unlockRequirements: ['w4_m8'],
    stationPosition: [-4, 0, -56],
    npcPosition: [-2, 0, -54]
  },
  {
    id: 'w4_m10',
    worldId: 'function-mountains',
    worldIndex: 4,
    missionNumber: 10,
    title: 'The Mountain Boss — The High Archmage of Spells',
    difficulty: 'Advanced',
    isBoss: true,
    npc: {
      id: 'high_archmage',
      name: 'The High Archmage of Spells',
      title: 'Sovereign of the Peak Sanctuary',
      avatar: '⚡',
      color: '#7C3AED',
      greeting: 'I CHALLENGE THEE TO FORGE A REUSABLE SPELL ENGINE!',
      dialogue: [
        'To pass to Data Structure Kingdom, write a function cast_combo(spells):',
        'Given a list of damage numbers, sum them up and add a 20% critical bonus (multiply sum by 1.2, converted to int).',
        'Test with spells = [10, 20, 30]. The sum is 60, and 60 * 1.2 is 72!',
        'Print cast_combo([10, 20, 30])!'
      ]
    },
    story: 'The High Archmage challenges you at the summit temple. Designing a versatile spell combo engine proves your readiness to enter the Royal City.',
    learningObjective: 'Synthesize functions, loops, and math in a boss-level challenge.',
    concept: {
      title: 'Combining Functions & Collections',
      whatIsIt: 'Writing robust functions that accept sequences, aggregate statistics, and apply business logic.',
      whyUseful: 'Combat combo calculators, shopping cart totals, scoring systems.',
      syntax: 'def cast_combo(spells):\n    return int(sum(spells) * 1.2)',
      exampleCode: 'def combo(arr):\n    return int(sum(arr) * 1.2)\nprint(combo([10, 20, 30]))',
      expectedOutput: '72',
      realWorldMetaphor: 'Chaining multiple elemental spells into a synchronized devastating combo burst.',
      commonMistakes: [
        'Forgetting int() conversion when whole numbers are required.',
        'Not handling the list parameter properly.'
      ]
    },
    challenge: 'Define cast_combo(spells) that returns int(sum(spells) * 1.2). Print cast_combo([10, 20, 30]) (72).',
    starterCode: '# Mountain Boss: Build the Spell Combo Engine!\ndef cast_combo(spells):\n    # Calculate sum and multiply by 1.2\n    \n\n# Print cast_combo([10, 20, 30])\n',
    expectedOutputSummary: '72',
    testCases: [
      {
        id: 'tc_w4_m10_1',
        description: 'Output must be 72',
        type: 'output_exact',
        expectedOutput: '72'
      }
    ],
    hints: [
      'Concept: return int(sum(spells) * 1.2)',
      'Syntax:\ndef cast_combo(spells):\n    return int(sum(spells) * 1.2)\n\nprint(cast_combo([10, 20, 30]))',
      'Solution:\ndef cast_combo(spells):\n    return int(sum(spells) * 1.2)\n\nprint(cast_combo([10, 20, 30]))'
    ],
    successMessage: 'THE HIGH ARCHMAGE BOWS HIS STAFF IN DEEP RESPECT! "THOU HAST FORGED A MASTER SPELL ENGINE!" The clouds part to reveal the golden domes, marble libraries, and grand royal towers of Data Structure Kingdom!',
    xpReward: 600,
    coinReward: 200,
    unlockRequirements: ['w4_m9'],
    stationPosition: [0, 0, -64],
    npcPosition: [-3, 0, -62]
  }
];
