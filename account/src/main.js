import cors from 'cors';
import client from './repositories/databaseClient.js';
import { app } from './app.js';

const port = 3000;

app.use(cors());

app.listen(port, function () {
    console.log('accounts is running');

client.authenticate()
    .then(() => {
        console.log('Db connection OK!') })
    .catch(error => {
        console.error(error)});
    });


