const { Schema, model } = require('mongoose');
const formatDate = require('../utils/helper/formatDate');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter a thought',
            minlength: 1,
            maxlength: 280
        },
        
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },

        username: {
            type: String,
            required: 'Please enter a username'
        },

        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

ThoughtSchema
.virtual('reactionCount')
.get(function() {
        return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;