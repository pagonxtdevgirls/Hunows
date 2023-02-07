import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(json());
app.use(cors());
app.use(router);

app.listen(port, () => {
});


