const { User, Thought } = require('../models');

module.exports = {
    async getUsers (req, res) {
        try {
            const userData = await User.find({})
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    }
}