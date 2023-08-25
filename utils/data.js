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
  // 'NatureLover',
  // 'DreamCatcher',
  // 'GamerChampion',
  // 'SkyDiver',
  // 'FoodieExplorer',
  // 'DesignEnthusiast',
  // 'Wanderlust',
  // 'FitnessJunkie',
  // 'PetWhisperer',
  // 'MovieBuff',
  // 'SunnySoul',
  // 'TechSavvy',
  // 'ArtisticMind',
  // 'CaptainCurious',
  // 'EcoWarrior',
  // 'SpiritualBeing',
  // 'TravelBlogger',
  // 'PhotoNinja',
  // 'SciFiEnthusiast',
  // 'Fashionista',
  // 'MindfulThinker',
  // 'HappyCamper',
  // 'MemeMaster',
  // 'RockStar',
  // 'CodeCrusader',
  // 'PuzzleSolver',
  // 'CoffeeSipper',
  // 'GlobeTrotter',
  // 'ChefInTraining',
  // 'NightOwl',
  // 'NatureAdventurer',
  // 'MovieMaker',
  // 'FitnessGuru',
  // 'AnimalLover',
  // 'BookLover',
  // 'GamingGuru',
  // 'WineConnoisseur',
  // 'TechGuru',
  // 'DreamWeaver',
  // 'ExplorerExtraordinaire',
  // 'ArtisticSoul',
  // 'DaringDiver',
  // 'FoodieFanatic',
  // 'MusicMaven',
  // 'SustainableSoul',
  // 'MindfulTraveler',
  // 'MindOverMatter',
  // 'GeekChic',
  // 'MysticScribe',
  // 'LaughOutLoud',
  // 'CoffeeCraze',
  // 'CuriousCat',
  // 'AdventureAwaits',
  // 'PixelPainter',
  // 'DataDiva',
  // 'StarStruck',
];

const emailAddresses = [
  'tech.ninja@example.com',
  'code.wizard@example.com',
  'pixel.jockey@example.com',
  'star.gazer@example.com',
  'data.geek@example.com',
  'music.maestro@example.com',
  'adventure.seeker@example.com',
  'bookworm@example.com',
  'coffee.addict@example.com',
  // 'nature.lover@example.com',
  // 'dream.catcher@example.com',
  // 'gamer.champion@example.com',
  // 'sky.diver@example.com',
  // 'foodie.explorer@example.com',
  // 'design.enthusiast@example.com',
  // 'wanderlust@example.com',
  // 'fitness.junkie@example.com',
  // 'pet.whisperer@example.com',
  // 'movie.buff@example.com',
  // 'sunny.soul@example.com',
  // 'tech.savvy@example.com',
  // 'artistic.mind@example.com',
  // 'captain.curious@example.com',
  // 'eco.warrior@example.com',
  // 'spiritual.being@example.com',
  // 'travel.blogger@example.com',
  // 'photo.ninja@example.com',
  // 'scifi.enthusiast@example.com',
  // 'fashionista@example.com',
  // 'mindful.thinker@example.com',
  // 'happy.camper@example.com',
  // 'meme.master@example.com',
  // 'rock.star@example.com',
  // 'code.crusader@example.com',
  // 'puzzle.solver@example.com',
  // 'coffee.sipper@example.com',
  // 'globe.trotter@example.com',
  // 'chef.in.training@example.com',
  // 'night.owl@example.com',
  // 'nature.adventurer@example.com',
  // 'movie.maker@example.com',
  // 'fitness.guru@example.com',
  // 'animal.lover@example.com',
  // 'book.lover@example.com',
  // 'gaming.guru@example.com',
  // 'wine.connoisseur@example.com',
  // 'tech.guru@example.com',
  // 'dream.weaver@example.com',
  // 'explorer.extraordinaire@example.com',
  // 'artistic.soul@example.com',
  // 'daring.diver@example.com',
  // 'foodie.fanatic@example.com',
  // 'music.maven@example.com',
  // 'sustainable.soul@example.com',
  // 'mindful.traveler@example.com',
  // 'mind.over.matter@example.com',
  // 'geek.chic@example.com',
  // 'mystic.scribe@example.com',
  // 'laugh.out.loud@example.com',
  // 'coffee.craze@example.com',
  // 'curious.cat@example.com',
  // 'adventure.awaits@example.com',
  // 'pixel.painter@example.com',
  // 'data.diva@example.com',
  // 'star.struck@example.com',
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

// Gets a random username
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

  // Gets a random email address
const getRandomEmail = () =>
`${getRandomArrItem(emailAddresses)}`;

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtDescriptions),
      username: getRandomArrItem(usernames),
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
module.exports = { usernames, emailAddresses, getRandomName, getRandomThoughts };
