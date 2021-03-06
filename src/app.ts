import express from 'express';
import router from './api/routes';
import errorHandler from './middleware/errorHandler';

import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../.env') });

const app = express();

import morgan from 'morgan';

app.use(morgan('combined'));
app.use(router);
app.use(errorHandler);

export default app;
