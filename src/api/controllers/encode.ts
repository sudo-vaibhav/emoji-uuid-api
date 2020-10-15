import { Request, Response } from 'express';
import { encode } from 'emoji-uuid';
export default (req: Request, res: Response): Response => {
    const id = req.params.id as string;
    return res.send({ emojis: encode(id) });
};
