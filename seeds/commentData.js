const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Amazing article!",
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: "Right on yo!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "I have to disagree with you",
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: "I agree with you.",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "I agree.",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "Good",
        user_id: 4,
        post_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
