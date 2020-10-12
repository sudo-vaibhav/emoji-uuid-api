import express, { Request, Response } from 'express';
import router from './api/routes';
import requestLogger from './middleware/requestLogger';
import errorHandler from './middleware/errorHandler';
const app = express();
const port = process.env.PORT || 8080;

app.use(requestLogger);

app.get('/', (req: Request, res: Response) => {
    res.send('welcome to emoji-uuid ✋!');
});

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
});
