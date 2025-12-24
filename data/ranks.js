export const ranks = [
  {
    id: 'E',
    name: 'E-Rank Hunter',
    minLevel: 1,
    maxLevel: 10,
    color: '#94a3b8',
    bgGradient: 'from-slate-400 to-slate-600',
    description: 'A novice developer taking their first steps',
    title: 'Newbie Developer',
    benefits: [
      'Access to Easy dungeons',
      'Basic daily quests',
      '+5% XP boost',
    ],
  },
  {
    id: 'D',
    name: 'D-Rank Hunter',
    minLevel: 11,
    maxLevel: 25,
    color: '#22c55e',
    bgGradient: 'from-green-400 to-green-600',
    description: 'Getting comfortable with the basics',
    title: 'Junior Hunter',
    benefits: [
      'Access to Medium dungeons',
      'Unlock shop items',
      '+10% XP boost',
    ],
  },
  {
    id: 'C',
    name: 'C-Rank Hunter',
    minLevel: 26,
    maxLevel: 40,
    color: '#3b82f6',
    bgGradient: 'from-blue-400 to-blue-600',
    description: 'A skilled coder with solid fundamentals',
    title: 'Skilled Coder',
    benefits: [
      'Access to Hard dungeons',
      'Weekly boss challenges',
      '+15% XP boost',
      'Shadow Army unlocked',
    ],
  },
  {
    id: 'B',
    name: 'B-Rank Hunter',
    minLevel: 41,
    maxLevel: 60,
    color: '#a855f7',
    bgGradient: 'from-purple-400 to-purple-600',
    description: 'An expert developer who can handle complex problems',
    title: 'Expert Developer',
    benefits: [
      'Access to Hell dungeons',
      'Advanced boss fights',
      '+20% XP boost',
      '+50% Coin rewards',
    ],
  },
  {
    id: 'A',
    name: 'A-Rank Hunter',
    minLevel: 61,
    maxLevel: 80,
    color: '#f59e0b',
    bgGradient: 'from-amber-400 to-amber-600',
    description: 'An elite programmer among the best',
    title: 'Elite Programmer',
    benefits: [
      'Access to all dungeons',
      'Hidden quests unlocked',
      '+30% XP boost',
      '+100% Coin rewards',
      'Exclusive titles',
    ],
  },
  {
    id: 'S',
    name: 'S-Rank Hunter',
    minLevel: 81,
    maxLevel: 95,
    color: '#ef4444',
    bgGradient: 'from-red-400 to-red-600',
    description: 'A master hunter feared by all bugs',
    title: 'Master Hunter',
    benefits: [
      'Access to legendary dungeons',
      'Create custom challenges',
      '+50% XP boost',
      '+200% Coin rewards',
      'Unique aura effect',
    ],
  },
  {
    id: 'SS',
    name: 'SS-Rank Hunter',
    minLevel: 96,
    maxLevel: 100,
    color: '#ec4899',
    bgGradient: 'from-pink-400 to-pink-600',
    description: 'The Shadow Monarch - One who conquered all',
    title: 'Shadow Monarch',
    benefits: [
      'Maximum power achieved',
      'All features unlocked',
      '+100% XP boost',
      '+500% Coin rewards',
      'Legendary status',
      'Custom avatar frame',
    ],
  },
];

// Helper function to get rank by level
export function getRankByLevel(level) {
  return ranks.find(
    rank => level >= rank.minLevel && level <= rank.maxLevel
  ) || ranks[0];
}

// Helper function to get next rank
export function getNextRank(currentLevel) {
  const currentRank = getRankByLevel(currentLevel);
  const currentIndex = ranks.findIndex(r => r.id === currentRank.id);
  return ranks[currentIndex + 1] || null;
}

// Helper function to calculate progress to next rank
export function getRankProgress(currentLevel) {
  const currentRank = getRankByLevel(currentLevel);
  const levelsInRank = currentRank.maxLevel - currentRank.minLevel + 1;
  const currentLevelInRank = currentLevel - currentRank.minLevel;
  return Math.round((currentLevelInRank / levelsInRank) * 100);
}