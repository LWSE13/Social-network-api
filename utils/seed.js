const connection = require('../config/connection');
const { User, Thought, reactionSchema } = require('../models');
const { userSeeds, thoughtSeeds, reactionSeeds } = require('./data');

connection.once('open', async () => {
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});

        const userData = await User.create(userSeeds);

        // promise.all will wait for all my promises to resolve before moving on
        const thoughts = await Promise.all(
        // creates an array of promises that will resolve when the thoughts are created
            thoughtSeeds.map(async ({ username, thoughtText }) => {
        // first finds the user id that matches the username
                const { _id } = userData.find(user => user.username === username);
        // then creates a thought with the username, thoughtText, and reactions specified within my thought data. I also pass my reactionIds array as the thought model references these
                const thought = await Thought.create({ username, thoughtText });
        // then pushes the thought into the user's thoughts array
                await User.findByIdAndUpdate(_id, { $push: { thoughts: thought._id } });
                return thought;
            })
        );

        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})