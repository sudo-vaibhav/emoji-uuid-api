import express from 'express';
import router from './api/routes';
import requestLogger from './middleware/requestLogger';
import errorHandler from './middleware/errorHandler';
const app = express();
const port = 8080 || process.env.PORT;

app.use(requestLogger);

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
});
