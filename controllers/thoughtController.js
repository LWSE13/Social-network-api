const { User, Thought } = require('../models');

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
}