const { Post } = require("../models");

const postData = [
    {
        title: "Say my name",
        content: "Technology is fascinating but chemistry is the true beauty of science.",
        user_id: 1,
    },
    {
        title: "Yo what up",
        content: "So like this is my post yo",
        user_id: 2,
    },
    {
        title: "All I can do is wait",
        content: "I don't know how this works or what's going on.",
        user_id: 3,
    },
    {
        title: "I Hide In Plain Sight",
        content: "The way to success is to know your technology and product well.",
        user_id: 4,
    },
    {
        title: "No More Half Measures",
        content: "Not much to say.",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
