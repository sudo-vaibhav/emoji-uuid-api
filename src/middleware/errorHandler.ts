import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
export default (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    return res.status(400).send({
        message: err.toString(),
    });
};
