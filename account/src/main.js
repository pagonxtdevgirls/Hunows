import cors from 'cors';
import client from './repositories/databaseClient.js';
import { app } from './app.js';
import yaml from 'yamljs';
import swaggerUi from "swagger-ui-express"

const port = 3000;
const swaggerDocs = yaml.load('api-docs.yaml');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors());

app.listen(port, function () {
    console.log('accounts is running');

client.authenticate()
    .then(() => {
        console.log('Db connection OK!') })
    .catch(error => {
        console.error(error)});
    });


