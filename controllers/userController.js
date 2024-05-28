const { User, Thought } = require('../models');

module.exports = {
    
    async createUser (req, res) {
        try {
            const userData = await User.create(req.body)
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },
    
    async getUsers (req, res) {
        try {
            const userData = await User.find({})
            .select('-__v')
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async getUserById (req, res) {
        try {
            const userData = await User.findOne({ _id: req.params.id })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id' })
            }

            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async updateUser (req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            )
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id' })
            }
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    },

    async deleteUser (req, res) {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.id });

            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id' })
            }

            await Thought.deleteMany({ _id: { $in: userData.thoughts } });
            res.json({ message: 'User and associated thoughts have been deleted' });
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'the following error occured', err})
        }
    }

}