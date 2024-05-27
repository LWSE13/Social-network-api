const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Please enter a username!',
            trim: true
        },

        email: {
            type: String,
            required: 'Please enter an email address!',
            unique: true,
            match: [/.+@.+\.(com|co\.uk)/, 'Please enter a valid e-mail address']
        },

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema
.virtual('friendCount')
.get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;