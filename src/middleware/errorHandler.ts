import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
export default (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    /* eslint-disable */
    next: NextFunction
    /* eslint-enable */
): Response => {
    return res.status(400).send({
        message: err.toString(),
    });
};
