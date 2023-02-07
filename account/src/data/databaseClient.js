import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://mysqluser:mysqlpass@localhost:3306/account');
export default client;