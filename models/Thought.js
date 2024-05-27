const { Schema, model } = require('mongoose');

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
            default: Date.now
        },

        username: {
            type: String,
            required: 'Please enter a username'
        },
    }
)

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;