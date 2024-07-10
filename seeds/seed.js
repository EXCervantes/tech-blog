// Required dependencies and modules
const sequelize = require('../config/connection');

const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// Seed the database at once
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
