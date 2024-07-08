const { Comment } = require("../models");

const commentData = [
    {
        comment_body: "Amazing article!",
        user_id: 1,
        post_id: 4,
    },
    {
        comment_body: "Right on yo!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_body: "I have to disagree with you",
        user_id: 5,
        post_id: 1,
    },
    {
        comment_body: "I agree with you.",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_body: "I agree.",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_body: "Good",
        user_id: 4,
        post_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
