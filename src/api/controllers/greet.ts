import { Request, Response } from 'express';
export default (req: Request, res: Response): Response => {
    return res.send(
        'Welcome to emoji-uuid ✋! Nice to meet you. ' + process.env.TEST_STRING
    );
};
