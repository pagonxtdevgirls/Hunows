const Sequelize = require('sequelize');

const clientURL = process.env.MYSQL_URL_DATABASE
const client = new Sequelize(clientURL, { logging: false });

module.exports = client;