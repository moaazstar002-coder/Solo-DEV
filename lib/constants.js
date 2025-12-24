// App Information
export const APP_NAME = 'Solo Dev Path';
export const APP_DESCRIPTION = 'Level up your programming skills like an RPG hero';
export const APP_VERSION = '1.0.0';

// XP & Leveling
export const XP_PER_LEVEL = 100; // Base XP needed for level 2
export const XP_MULTIPLIER = 1.2; // Each level requires 20% more XP
export const MAX_LEVEL = 100;

// Ranks
export const RANKS = {
  E: { name: 'E-Rank', minLevel: 1, maxLevel: 10, color: '#94a3b8' },
  D: { name: 'D-Rank', minLevel: 11, maxLevel: 25, color: '#22c55e' },
  C: { name: 'C-Rank', minLevel: 26, maxLevel: 40, color: '#3b82f6' },
  B: { name: 'B-Rank', minLevel: 41, maxLevel: 60, color: '#a855f7' },
  A: { name: 'A-Rank', minLevel: 61, maxLevel: 80, color: '#f59e0b' },
  S: { name: 'S-Rank', minLevel: 81, maxLevel: 95, color: '#ef4444' },
  SS: { name: 'SS-Rank', minLevel: 96, maxLevel: 100, color: '#ec4899' },
};

// Stats
export const STATS = {
  STRENGTH: 'strength',      // Problem Solving
  INTELLIGENCE: 'intelligence', // Algorithm Knowledge
  AGILITY: 'agility',         // Code Speed
  VITALITY: 'vitality',       // Consistency
  SENSE: 'sense',             // Debugging
};

export const STATS_INFO = {
  [STATS.STRENGTH]: {
    name: 'Strength',
    icon: '💪',
    description: 'Problem Solving Ability',
  },
  [STATS.INTELLIGENCE]: {
    name: 'Intelligence',
    icon: '🧠',
    description: 'Algorithm Knowledge',
  },
  [STATS.AGILITY]: {
    name: 'Agility',
    icon: '⚡',
    description: 'Coding Speed',
  },
  [STATS.VITALITY]: {
    name: 'Vitality',
    icon: '❤️',
    description: 'Daily Consistency',
  },
  [STATS.SENSE]: {
    name: 'Sense',
    icon: '👁️',
    description: 'Debugging Skills',
  },
};

// Challenge Difficulties
export const DIFFICULTY = {
  EASY: { name: 'Easy', color: 'success', xp: 20, coins: 5 },
  MEDIUM: { name: 'Medium', color: 'primary', xp: 50, coins: 15 },
  HARD: { name: 'Hard', color: 'danger', xp: 100, coins: 30 },
  HELL: { name: 'Hell', color: 'shadow', xp: 200, coins: 60 },
};

// Programming Languages
export const LANGUAGES = {
  JAVASCRIPT: { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
  PYTHON: { name: 'Python', icon: '🐍', color: '#3776ab' },
  JAVA: { name: 'Java', icon: '☕', color: '#007396' },
  CPP: { name: 'C++', icon: '⚙️', color: '#00599c' },
  GO: { name: 'Go', icon: '🐹', color: '#00add8' },
  RUST: { name: 'Rust', icon: '🦀', color: '#ce422b' },
};

// Shop Item Types
export const SHOP_ITEM_TYPES = {
  HINT: 'hint',
  THEME: 'theme',
  KEY: 'key',
  BOOST: 'boost',
  COSMETIC: 'cosmetic',
};

// Daily Quest Settings
export const DAILY_QUEST_LIMIT = 3;
export const DAILY_QUEST_RESET_HOUR = 0; // Midnight

// Boss Challenge Settings
export const BOSS_UNLOCK_LEVEL = 10;
export const BOSS_COOLDOWN_DAYS = 7;

// Penalty Settings
export const PENALTY_XP_LOSS = 10;
export const MAX_SKIPPED_CHALLENGES = 3;

// Sound Settings
export const DEFAULT_VOLUME = 0.5;
export const SOUND_ENABLED = true;

// Local Storage Keys
export const STORAGE_KEYS = {
  HUNTER: 'solo-dev-hunter',
  DUNGEONS: 'solo-dev-dungeons',
  QUESTS: 'solo-dev-quests',
  SHADOW: 'solo-dev-shadow',
  SHOP: 'solo-dev-shop',
  SETTINGS: 'solo-dev-settings',
};

// Animation Durations (ms)
export const ANIMATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  LEVEL_UP: 1000,
};

// Breakpoints (for responsive design)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};