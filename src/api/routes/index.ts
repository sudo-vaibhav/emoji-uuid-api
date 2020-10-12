import { Router } from 'express';
const router = Router();
import { encode, decode } from '../controllers';

router.get('/encode/:id', encode);

router.get('/decode/:emojis', decode);

export default router;
