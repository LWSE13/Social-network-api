const {Schema, model} = require('mongoose');
const formatDate = require('../utils/helper/formatDate');

const ReactionSchema = new Schema(
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate

    }
},

{
    toJSON: {
        getters: true
    }
}
);

module.exports = ReactionSchema;