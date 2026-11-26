# ⚔️ CodeQuest: The Lost Kingdom
### Complete 3D Open-World Python Learning Adventure Game

> **Restore the Lost Kingdom by mastering real Python programming in a vibrant 3D open-world fantasy adventure.**

---

## 🌟 Product Overview

**CodeQuest: The Lost Kingdom** is a 100% frontend, production-grade 3D educational adventure game. Players enter an enchanted fantasy realm where magical power has vanished along with programming knowledge. By traversing six explorable biomes, interacting with colorful NPCs, solving genuinely executed Python missions, opening ancient gates, and defeating titan guardians, players master Python from basic syntax to object-oriented architecture.

### Key Highlights
- **100% Frontend Architecture:** No backend server, no external database, no paid APIs. Deployable anywhere as a static single-page application.
- **Real Python in Browser:** Powered by **Pyodide** executing in an isolated background **Web Worker** with watchdog infinite loop termination and stdout/stderr capture.
- **Monaco Code Editor:** The industry standard VS Code editor embedded with Python syntax highlighting, error diagnostics, and line numbers.
- **Six Explorable 3D Worlds:** Built with **Three.js** and **React Three Fiber**, featuring third-person player movement, jumping, terrain collisions, interactive NPCs, glowing coding pedestals, unlockable animated gates, and collectible gold coins.
- **60 Progressive Missions:** 10 hand-crafted missions per world spanning beginner variables up through classes, inheritance, exceptions, and generators.
- **Light Theme Aesthetic:** Warm cream surfaces, sky blue, forest green, soft purple, gold accents, rounded cards, and clean typography.
- **Self-Contained Web Audio Synthesizer:** Pure Web Audio API synthesizers for buttons, coin pickups, jump whooshes, dialog pips, fanfares, and ambient fantasy chord progressions without external missing audio files.
- **Local Persistence:** Automated schema-versioned saving in `localStorage` supporting *Continue Adventure*, *New Game*, and safe *Reset Progress*.

---

## 🗺️ The Six Python Worlds (60 Missions)

1. **🌲 World 1: Beginner Forest — The Awakening of Syntax**
   - *Theme:* Ancient trees, emerald waterfalls, river bridges, and wooden gates.
   - *Curriculum:* `print()`, multiple lines, comments (`#`), variables, data types (`int`, `float`, `str`, `bool`), string concatenation, booleans, `input()`, type casting (`int()`), arithmetic operators.
   - *Boss:* **Elder Forest Crystal** — Power balance calculation challenge.

2. **⚖️ World 2: Conditional Valley — The Pathways of Logic**
   - *Theme:* Mountain gorges, stone watchtowers, water cataracts, and locked portcullises.
   - *Curriculum:* Comparison operators (`>`, `<`, `==`, `!=`), `if`, `if/else`, `elif`, logical `and`, logical `or`, logical `not`, membership (`in`), nested conditions.
   - *Boss:* **Valley Stone Guardian** — Compound logical condition riddle.

3. **🔄 World 3: Looping Jungle — The Cycles of Eternity**
   - *Theme:* Emerald rainforest canopies, flowing watermills, and rotating ancient clockwork gears.
   - *Curriculum:* `for` loop, `range(start, stop)`, loop accumulators (`+=`), `while` loops, loop termination safeguards, `break`, `continue`, nested loops, star patterns.
   - *Boss:* **The Ancient Jungle Engine** — Multi-gear RPM synchronization challenge.

4. **⛰️ World 4: Function Mountains — The Peaks of Reusability**
   - *Theme:* Snow-capped mountain temples, frozen chasms, and monastery bells.
   - *Curriculum:* Defining functions (`def`), function invocation, parameters & arguments, `return` values, multiple parameters, default parameter values, keyword arguments, variable scope (local vs global), lambda functions.
   - *Boss:* **The High Archmage of Spells** — Reusable critical combo spell engine.

5. **📚 World 5: Data Structure Kingdom — The Royal Archives**
   - *Theme:* Golden royal city, marble colonnades, grand libraries, and market bazaars.
   - *Curriculum:* String methods (`.strip()`, `.upper()`), lists & 0-based indexing, list methods (`.append()`), tuples & unpacking, sets (`set()`) for uniqueness, dictionaries (key-value lookups), dictionary updates, sorting (`sorted()`), list comprehensions.
   - *Boss:* **The Grand Vault Keeper** — Complete multi-vault asset ledger audit.

6. **👑 World 6: Master Dungeon — The Citadel of Architecture**
   - *Theme:* Subterranean obsidian fortress, glowing lava channels, and the central Kingdom Core.
   - *Curriculum:* Classes and instances (`class Golem`), constructor `__init__()`, instance methods & `self`, class inheritance, raising exceptions (`raise`), exception handling (`try / except`), file streams (`io.StringIO`), module imports (`import math`), generators & `yield`.
   - *Final Boss:* **The Lost Kingdom Guardian** — The Kingdom Restored Master Project!

---

## 🎮 Controls

| Action | Desktop Keyboard | Mobile / Tablet Touch |
|---|---|---|
| **Move Forward** | `W` / `Arrow Up` | Virtual D-Pad Up |
| **Move Backward** | `S` / `Arrow Down` | Virtual D-Pad Down |
| **Turn Left / Right** | `A` / `D` or `Arrows` | Virtual D-Pad Left / Right |
| **Jump** | `Spacebar` | On-Screen Jump Button |
| **Interact / Talk / Code** | `E` Key | On-Screen Act Button / Click |
| **Pause Adventure** | `Escape` Key | On-Screen Pause Button |

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite
- **3D Graphics Engine:** Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Styling:** Tailwind CSS (Custom Light Fantasy Palette)
- **State Management:** Zustand
- **Code Workspace:** Monaco Editor (`@monaco-editor/react`)
- **Python Execution:** Pyodide v0.26.1 in Web Worker
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Audio:** Web Audio API Synthesizer (Zero asset 404s)
- **Storage:** LocalStorage with schema migration

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm

### Quickstart
```bash
# 1. Clone repository or navigate to project directory
cd Codequest

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Production Build
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deployment

### Vercel
1. Push code to your GitHub/GitLab repository.
2. Import project into Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deploy! (`vercel.json` is pre-configured with headers and single-page routing).

### Netlify
1. Connect repository in Netlify.
2. Build Command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy! (`netlify.toml` is pre-configured with redirect rules and security headers).

---

## 📜 License & Academic Integrity
Built for learners, educators, and aspiring programmers worldwide.
CodeQuest: The Lost Kingdom © 2026.
