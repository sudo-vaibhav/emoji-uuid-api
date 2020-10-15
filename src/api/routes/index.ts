import { Router } from 'express';
const router = Router();
import encode from '../controllers/encode';
import decode from '../controllers/decode';
import greet from '../controllers/greet';

router.get('/encode/:id', encode);
router.get('/decode/:emojis', decode);
router.get('/', greet);

export default router;
