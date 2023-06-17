const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
//   host: process.env.DBHOST,
//   dialect: "mysql",
// });

const sequelize = new Sequelize(process.env.DBURL)
module.exports = { sequelize };
