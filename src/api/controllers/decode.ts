import { Request, Response } from 'express';
import { decode } from 'emoji-uuid';
export default (req: Request, res: Response): Response => {
    const emojis = req.params.emojis as string;
    return res.send({ id: decode(emojis) });
};
