import { map, inverted } from '../../mapping';
import { Request, Response } from 'express';

export const encode = (req: Request, res: Response): Response => {
    const id = req.params.id as string;
    const emojis = id.split('').map(character => {
        return map[character];
    });
    return res.send({ emojis: emojis.join('') });
};

export const decode = (req: Request, res: Response): Response => {
    const emojis = req.params.emojis as string;
    const id = [...emojis].map(emoji => {
        return inverted[emoji];
    });
    return res.send({ id: id.join('') });
};
