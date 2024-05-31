const userSeeds = [
    {
        username: 'mrTest',
        email: 'testUsr123@tstmail.com'
    },
    {
        username: 'mrsTest',
        email: 'ImNotActuallyMarriedToMrTest@tstmail.com'
    },
    {
        username: 'LwheelR',
        email: 'LWuser@admin.co.uk'
    }
]

const thoughtSeeds = [
    {
        thoughtText: 'Here is a cool thought...',
        username: 'mrTest',
        reactions: [
            {
                reactionBody: 'Were getting a divorce',
                username: 'mrsTest'
            }
        ]
    },
    {
        thoughtText: 'Please work...',
        username: 'LwheelR',
        reactions: [
            {
                reactionBody: 'It works',
                username: 'mrsTest'
            },
            {
                reactionBody: 'I miss my wife :(',
                username: 'mrTest'
            }
        ]
    }
];

module.exports = { userSeeds, thoughtSeeds };