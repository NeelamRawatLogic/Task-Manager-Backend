const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../constants/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Data synchronized successfully");
  } catch (error) {
    console.log("Data synchronization failed:", error.message);
  }
};

module.exports = { sequelize, syncDatabase };
