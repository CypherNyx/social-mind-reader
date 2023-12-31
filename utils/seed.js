const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, emailAddresses, getRandomThoughts, getThoughtReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = getRandomThoughts(5);

  usernames.forEach((username, i) => {
    const email = emailAddresses[i];
    users.push({
      username,
      email,
      // Add additional user fields here
    });
  });

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // adding a reaction ID for seeded thoughts - Ian Helped me with this part!!!
  const createdThoughts = await Thought.find({})
  await Promise.all(createdThoughts.map(item => Thought.findOneAndUpdate({ _id: item._id }, { $push: { reactions: [...getThoughtReactions(3)] } })));

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
