import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
    console.info('request received at URL:', req.url);
    console.info('==================================================');
    console.info('request body:', req.body);
    console.info('==================================================');
    console.info('request querystring', req.query);
    console.info('==================================================');
    return next();
};
