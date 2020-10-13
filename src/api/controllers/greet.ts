import { Request, Response } from 'express';
export default (req: Request, res: Response) => {
    res.send(
        'welcome to emoji-uuid ✋! Nice to meet you. ' + process.env.TEST_STRING
    );
};
