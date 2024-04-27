const Sequelize = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file
const sequelize = new Sequelize("node-complete", "root", "nishma@99", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
