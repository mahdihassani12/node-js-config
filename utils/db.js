const Sequelize = require('sequelize');
require('dotenv').config();

const credentials = {
host:process.env.DB_HOST,
user: process.env.DB_USER,
database: process.env.DB_NAME,
password: process.env.DB_PASSWORD
}

const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {
  dialect: 'mysql',
  host:credentials.host
});

module.exports = sequelize;