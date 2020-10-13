import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
    it('should print a greeting', async () => {
        // process.env['TEST_STRING'] = 'Any pull requests are appreciated';
        const result = await request(app).get('/');
        expect(result.text).toEqual(
            'Welcome to emoji-uuid ✋! Nice to meet you. Any pull requests are appreciated'
        );
        expect(result.status).toEqual(200);
    });
});
