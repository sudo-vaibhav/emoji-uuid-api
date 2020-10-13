import request from 'supertest';
import app from '../src/app';

describe('GET /encode', () => {
    it('checks if encoding works', async () => {
        const result = await request(app).get('/encode/uuid-goes-here');
        expect(result.body).toEqual({ emojis: '🤐🤐😚🥰🍑😘😝😍🤫🍑😗😍🤭😍' });
        expect(result.status).toEqual(200);
    });
});
