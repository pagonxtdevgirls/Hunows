import { Sequelize } from "sequelize";
const client = new Sequelize(process.env.MYSQL_URL_DATABASE);
export default client;
