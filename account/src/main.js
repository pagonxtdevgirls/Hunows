import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';
import { errorHandler } from './error/errorHandler.js'

const port = 3000;
const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler)

app.listen(port, () => {
});


