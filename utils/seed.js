const connection = require('../config/connection');
const { User, Thought, reactionSchema } = require('../models');
const { userSeeds, thoughtSeeds, reactionSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Database connected');
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    await User.create(userSeeds);
    await Thought.create(thoughtSeeds);

console.log('Data seeded!');
process.exit(0);
})