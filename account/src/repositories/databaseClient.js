import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://root@mysql_accounts/accounts');
export default client;