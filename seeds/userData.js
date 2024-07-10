// Seed the users
const { User } = require("../models");

const userData = [
    {
        username: "Walter",
        email: "walter@example.com",
        password: "password12345",
    },
    {
        username: "Jesse",
        email: "jesse@example.com",
        password: "password123456",
    },
    {
        username: "Skyler",
        email: "skyler@example.com",
        password: "password123",
    },
    {
        username: "Gus",
        email: "gus@example.com",
        password: "password1234",
    },
    {
        username: "Mike",
        email: "mike@example.com",
        password: "password1234567",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
