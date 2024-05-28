const reactionSeeds  = [
    {
        reactionBody: '👍',
        username: 'lernantino'
    },
    {
        reactionBody: '😆',
        username: 'lernantino'
    },
    {
        reactionBody: '🤔',
        username: 'Jdoe'
    },
    {
        reactionBody: '😆',
        username: 'JaneDoe',
    },
    {
        reactionBody: '👍',
        username: 'JDoe'
    }
]

const thoughtSeeds = [
    {
        thoughtText: 'Here is a cool thought...',
        username: 'lernantino',
        reactions: [reactionSeeds[2], reactionSeeds[3]]
    },
    {
        thoughtText: 'Here is another cool thought...',
        username: 'Jdoe',
        reactions: [reactionSeeds[0]]
    },
    {
        thoughtText: 'Here is a not so cool thought...',
        username: 'JaneDoe',
        reactions: [reactionSeeds[1], reactionSeeds[4]]
    }
]

const userSeeds = [
    {
        username: 'lernantino',
        email: 'lernaynay123@gmail.com',
        thoughts: [thoughtSeeds[0]],
        friends: []
    },
    {
        username: 'Jdoe',
        email: 'BigJ123@gmail.com',
        thoughts: [thoughtSeeds[1]],
        friends: []
    },
    {
        username: 'JaneDoe',
        email: 'lilJane123@gmail.com',
        thoughts: [thoughtSeeds[2]],
        friends: [] 
    }
]


userSeeds[0].friends = [userSeeds[1], userSeeds[2]];
userSeeds[1].friends = [userSeeds[0], userSeeds[2]];
userSeeds[2].friends = [userSeeds[0], userSeeds[1]];

module.exports = { userSeeds, thoughtSeeds, reactionSeeds };