const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds, reactionSeeds } = require('./data');

connection.on('error', (err) => err);
