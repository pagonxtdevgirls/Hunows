import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://root:pass@mysql_accounts:3306/accounts');
export default client;