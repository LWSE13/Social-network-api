const { User, Thought, Reaction } = require('../models');
const { get } = require('../models/Reaction');

module.exports = {
    async createThought (req, res) {
        try {
            const thoughtData = await Thought.create(req.body)
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { thoughts: thoughtData._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'the following error occured', err});
        }
    },

    async getThoughts (req, res) {
        try {
            const thoughtData = await Thought.find({})
            .select('-__v')
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async getThoughtById (req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async updateThought (req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true, runValidators: true }
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async deleteThought (req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }
            const associatedUser = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } }
            );
            res.json(thoughtData);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async addReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { new: true, runValidators: true }
            );
    
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }
    
            res.json(thoughtData);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async deleteReaction (req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    }
}