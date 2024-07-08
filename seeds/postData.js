const { Post } = require("../models");

const postData = [
    {
        post_title: "Say my name",
        post_body: "Technology is fascinating but chemistry is the true beauty of science.",
        user_id: 1,
    },
    {
        post_title: "Yo what up",
        post_body: "So like this is my post yo",
        user_id: 2,
    },
    {
        post_title: "All I can do is wait",
        post_body: "I don't know how this works or what's going on.",
        user_id: 3,
    },
    {
        post_title: "I Hide In Plain Sight",
        post_body: "The way to success is to know your technology and product well.",
        user_id: 4,
    },
    {
        post_title: "No More Half Measures",
        post_body: "Not much to say.",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
