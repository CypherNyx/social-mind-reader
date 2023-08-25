const usernames = [
  'TechNinja',
  'CodeWizard',
  'PixelJockey',
  'StarGazer',
  'DataGeek',
  'MusicMaestro',
  'AdventureSeeker',
  'Bookworm',
  'CoffeeAddict',
  'NatureLover',
  'DreamCatcher',
  'GamerChampion',
  'SkyDiver',
  'FoodieExplorer',
  'DesignEnthusiast',
  'Wanderlust',
  'FitnessJunkie',
  'PetWhisperer',
  'MovieBuff',
  'SunnySoul',
  'TechSavvy',
  'ArtisticMind',
  'CaptainCurious',
  'EcoWarrior',
  'SpiritualBeing',
  'TravelBlogger',
  'PhotoNinja',
  'SciFiEnthusiast',
  'Fashionista',
  'MindfulThinker',
  'HappyCamper',
  'MemeMaster',
  'RockStar',
  'CodeCrusader',
  'PuzzleSolver',
  'CoffeeSipper',
  'GlobeTrotter',
  'ChefInTraining',
  'NightOwl',
  'NatureAdventurer',
  'MovieMaker',
  'FitnessGuru',
  'AnimalLover',
  'BookLover',
  'GamingGuru',
  'WineConnoisseur',
  'TechGuru',
  'DreamWeaver',
  'ExplorerExtraordinaire',
  'ArtisticSoul',
  'DaringDiver',
  'FoodieFanatic',
  'MusicMaven',
  'SustainableSoul',
  'MindfulTraveler',
  'MindOverMatter',
  'GeekChic',
  'MysticScribe',
  'LaughOutLoud',
  'CoffeeCraze',
  'CuriousCat',
  'AdventureAwaits',
  'PixelPainter',
  'DataDiva',
  'StarStruck',
];


const thoughtDescriptions = [
  'Sunny day, perfect for a walk!',
  'Just had the best coffee ever ☕',
  'Coding late into the night...',
  'Missing the old times 😔',
  'New recipe experiment in the kitchen!',
  'Excited about the upcoming trip 🌴',
  'Finished reading a great book 📚',
  'Thinking about future goals 🚀',
  'Enjoying a quiet moment of peace...',
  'Wishing everyone a fantastic day!',
  'Reflecting on life\'s journey...',
  'Trying out a new workout routine 💪',
  'Daydreaming about a new adventure...',
  'Getting lost in music 🎶',
  'Feeling grateful for the little things 🙏',
  'Exploring a new hobby 🎨',
  'Just adopted a cute pet 🐾',
  'Watching the stars on a clear night ✨',
];


const possibleReactions = [
  'thumbs-up',
  'thumbs-down',
  'heart',
  'laugh',
  'sad',
  'wow',
  'angry',
  'clap',
  'confused',
  'celebrate',
  'thinking',
  'shocked',
  'thumbs-left',
  'thumbs-right',
];


const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(thoughtDescriptions),
      buildSuccess: Math.random() < 0.5,
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
