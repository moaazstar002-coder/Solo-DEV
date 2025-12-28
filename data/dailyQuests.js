export const dailyQuests = [
  {
    id: 1,
    title: "Master Array Methods",
    description:
      "Complete 5 array manipulation challenges using map, filter, reduce",
    progress: 0,
    total: 5,
    xp: 150,
    coins: 50,
    difficulty: "Easy",
    completed: false,
    category: "JavaScript",
    requirements: [
      "Use Array.map() correctly",
      "Use Array.filter() to remove items",
      "Use Array.reduce() for calculations",
      "Chain multiple array methods",
      "Solve a real-world array problem",
    ],
    hints: [
      "Start with simple map transformations",
      "Filter returns a new array with matching items",
      "Reduce can calculate sums, products, or build objects",
    ],
  },
  {
    id: 2,
    title: "Build a REST API",
    description:
      "Create a simple REST API with CRUD operations using Express.js",
    progress: 0,
    total: 4,
    xp: 300,
    coins: 100,
    difficulty: "Medium",
    completed: false,
    category: "Backend",
    requirements: [
      "Setup Express server",
      "Create GET endpoint",
      "Create POST endpoint",
      "Add error handling",
    ],
    hints: [
      "Use express.json() middleware for POST requests",
      "Always validate incoming data",
      "Use try-catch blocks for error handling",
    ],
  },
  {
    id: 3,
    title: "Implement Binary Search",
    description: "Code a binary search algorithm from scratch and optimize it",
    progress: 0,
    total: 1,
    xp: 200,
    coins: 75,
    difficulty: "Medium",
    completed: false,
    category: "Algorithms",
    requirements: [
      "Write iterative solution",
      "Test with edge cases",
      "Calculate time complexity O(log n)",
    ],
    hints: [
      "Array must be sorted first",
      "Compare middle element with target",
      "Divide search space in half each iteration",
    ],
  },
  {
    id: 4,
    title: "CSS Flexbox Challenge",
    description: "Create 3 responsive layouts using only Flexbox",
    progress: 0,
    total: 3,
    xp: 120,
    coins: 40,
    difficulty: "Easy",
    completed: false,
    category: "Frontend",
    requirements: [
      "Create a navbar with flexbox",
      "Build a card grid layout",
      "Design a footer with multiple columns",
    ],
    hints: [
      "Use justify-content for horizontal alignment",
      "Use align-items for vertical alignment",
      "flex-wrap helps with responsive design",
    ],
  },
  {
    id: 5,
    title: "Async/Await Mastery",
    description: "Handle asynchronous operations using async/await",
    progress: 0,
    total: 3,
    xp: 180,
    coins: 60,
    difficulty: "Medium",
    completed: false,
    category: "JavaScript",
    requirements: [
      "Fetch data from an API",
      "Handle errors with try-catch",
      "Chain multiple async operations",
    ],
    hints: [
      "Always use try-catch with async/await",
      "await can only be used inside async functions",
      "Use Promise.all() for parallel operations",
    ],
  },
  {
    id: 6,
    title: "React Component Optimization",
    description: "Optimize React components for better performance",
    progress: 0,
    total: 4,
    xp: 250,
    coins: 90,
    difficulty: "Hard",
    completed: false,
    category: "Frontend",
    requirements: [
      "Use React.memo() correctly",
      "Implement useMemo hook",
      "Apply useCallback hook",
      "Measure performance improvements",
    ],
    hints: [
      "React.memo prevents unnecessary re-renders",
      "useMemo caches expensive calculations",
      "useCallback caches function references",
    ],
  },
];

// Helper to get quest by ID
export const getQuestById = (id) => {
  return dailyQuests.find((quest) => quest.id === id);
};

// Helper to get quests by difficulty
export const getQuestsByDifficulty = (difficulty) => {
  return dailyQuests.filter((quest) => quest.difficulty === difficulty);
};

// Helper to get quests by category
export const getQuestsByCategory = (category) => {
  return dailyQuests.filter((quest) => quest.category === category);
};

// Helper to get completed quests
export const getCompletedQuests = () => {
  return dailyQuests.filter((quest) => quest.completed);
};

// Helper to get active (incomplete) quests
export const getActiveQuests = () => {
  return dailyQuests.filter((quest) => !quest.completed);
};
