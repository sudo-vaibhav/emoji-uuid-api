import request from 'supertest';
import app from '../src/app';

describe('GET /decode', () => {
    it('checks if decoding works', async () => {
        const result = await request(app).get(
            encodeURI('/decode/🤐🤐😚🥰🍑😘😝😍🤫🍑😗😍🤭😍')
        );
        expect(result.body).toEqual({ id: 'uuid-goes-here' });
        expect(result.status).toEqual(200);
    });
});
